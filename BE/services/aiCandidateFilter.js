const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

const EXPERIENCE_LEVELS = [
    { id: 7, patterns: [/10\+?\s*n[aă]m/i, /tr[eê]n\s*10\s*n[aă]m/i] },
    { id: 6, patterns: [/5\+?\s*n[aă]m/i, /tr[eê]n\s*5\s*n[aă]m/i] },
    { id: 5, patterns: [/4\+?\s*n[aă]m/i, /tr[eê]n\s*4\s*n[aă]m/i] },
    { id: 4, patterns: [/3\+?\s*n[aă]m/i, /tr[eê]n\s*3\s*n[aă]m/i] },
    { id: 3, patterns: [/2\+?\s*n[aă]m/i, /tr[eê]n\s*2\s*n[aă]m/i] },
    { id: 2, patterns: [/1\+?\s*n[aă]m/i, /tr[eê]n\s*1\s*n[aă]m/i] },
    { id: 1, patterns: [/0\s*-\s*1\s*n[aă]m/i, /m[oơ]i\s+ra\s+tr[uư][oơ]ng/i] },
    { id: 0, patterns: [/ch[uư]a\s+c[oó]\s+kinh\s+nghi[eê]m/i, /kh[oô]ng\s+c[aầ]n\s+kinh\s+nghi[eê]m/i] },
];

const SALARY_LEVELS = [
    { id: 11, min: 100 },
    { id: 10, min: 50 },
    { id: 9, min: 30 },
    { id: 8, min: 20 },
    { id: 7, min: 15 },
    { id: 6, min: 10 },
    { id: 5, min: 7 },
    { id: 4, min: 5 },
    { id: 3, min: 3 },
    { id: 2, min: 1 },
];

const normalizeText = (value = '') => value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const compactCatalog = (items, idKey, nameKey, limit = 80) => items
    .filter((item) => item && item[idKey] && item[nameKey])
    .slice(0, limit)
    .map((item) => ({ id: Number(item[idKey]), name: item[nameKey] }));

const cleanKeyword = (prompt, selectedCity, selectedCategory) => {
    let keyword = normalizeText(
        prompt
            .replace(/\d+\s*(tri[eệ]u|tr)/ig, ' ')
            .replace(/\d+\+?\s*n[aă]m/ig, ' ')
    );
    const stopWords = [
        'tim ung vien', 'ung vien', 'ho so', 'loc', 'can', 'tai', 'o', 'co',
        'kinh nghiem', 'nam', 'luong', 'trieu', 'nam', 'nu', 'gioi tinh',
        'tren', 'duoi', 'tu', 'den', 'phu hop', 'cho vi tri'
    ];
    if (selectedCity) keyword = keyword.replace(normalizeText(selectedCity.cit_name), ' ');
    if (selectedCategory) keyword = keyword.replace(normalizeText(selectedCategory.cat_name), ' ');
    stopWords.forEach((word) => {
        keyword = keyword.replace(new RegExp(`\\b${word}\\b`, 'g'), ' ');
    });
    return keyword.replace(/\s+/g, ' ').trim();
};

const applyLocalHeuristic = (prompt, cities, categories) => {
    const normalizedPrompt = normalizeText(prompt);
    const selectedCity = cities.find((city) => normalizedPrompt.includes(normalizeText(city.cit_name)));
    const selectedCategory = categories.find((category) => normalizedPrompt.includes(normalizeText(category.cat_name)));
    const experience = EXPERIENCE_LEVELS.find((level) => level.patterns.some((pattern) => pattern.test(prompt)));
    const salaryNumber = Number((prompt.match(/(\d+)\s*(tr|tri[eệ]u)/i) || [])[1]);
    const salary = SALARY_LEVELS.find((level) => salaryNumber >= level.min);
    const gender = /\b(nam gioi|gioi tinh nam|ung vien nam)\b/i.test(normalizedPrompt) ? 1 :
        /\b(nu gioi|gioi tinh nu|ung vien nu)\b|\bnữ\b/i.test(normalizedPrompt) ? 2 : undefined;

    return {
        keywords: cleanKeyword(prompt, selectedCity, selectedCategory),
        city: selectedCity ? String(selectedCity.cit_id) : undefined,
        catid: selectedCategory ? String(selectedCategory.cat_id) : undefined,
        kinhNghiem: experience ? experience.id : undefined,
        gioiTinh: gender,
        mucLuong: salary ? salary.id : undefined,
        aiSummary: 'Đã phân tích bằng bộ lọc cục bộ.',
        aiProvider: 'local'
    };
};

const parseJsonFromResponse = (responseData) => {
    const text = responseData?.output_text ||
        responseData?.output?.flatMap((item) => item.content || [])
            ?.find((content) => content.type === 'output_text')?.text;
    if (!text) return null;
    return JSON.parse(text);
};

const normalizeAiResult = (result) => ({
    keywords: typeof result?.keywords === 'string' ? result.keywords.trim() : undefined,
    city: result?.cityId ? String(result.cityId) : undefined,
    catid: result?.categoryId ? String(result.categoryId) : undefined,
    kinhNghiem: Number.isInteger(result?.experienceId) ? result.experienceId : undefined,
    gioiTinh: Number.isInteger(result?.genderId) ? result.genderId : undefined,
    mucLuong: Number.isInteger(result?.salaryId) ? result.salaryId : undefined,
    aiSummary: typeof result?.summary === 'string' ? result.summary : 'Đã phân tích bằng AI.',
    aiProvider: 'openai'
});

export const buildCandidateFiltersFromPrompt = async (prompt, cities = [], categories = []) => {
    if (!prompt || !prompt.trim()) return null;
    const localResult = applyLocalHeuristic(prompt, cities, categories);

    if (!process.env.OPENAI_API_KEY) return localResult;

    try {
        const response = await fetch('https://api.openai.com/v1/responses', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: DEFAULT_MODEL,
                input: [
                    {
                        role: 'system',
                        content: 'Bạn chuyển yêu cầu tuyển dụng tiếng Việt thành JSON filter. Chỉ chọn id có trong danh mục. Không bịa id.'
                    },
                    {
                        role: 'user',
                        content: JSON.stringify({
                            prompt,
                            cities: compactCatalog(cities, 'cit_id', 'cit_name'),
                            categories: compactCatalog(categories, 'cat_id', 'cat_name'),
                            experienceOptions: [
                                { id: 0, name: 'Chưa có kinh nghiệm' },
                                { id: 1, name: '0 - 1 năm' },
                                { id: 2, name: 'Hơn 1 năm' },
                                { id: 3, name: 'Hơn 2 năm' },
                                { id: 4, name: 'Hơn 3 năm' },
                                { id: 5, name: 'Hơn 4 năm' },
                                { id: 6, name: 'Hơn 5 năm' },
                                { id: 7, name: 'Hơn 10 năm' }
                            ],
                            salaryOptions: SALARY_LEVELS.map(({ id, min }) => ({ id, name: `Từ ${min} triệu` })),
                            genderOptions: [{ id: 1, name: 'Nam' }, { id: 2, name: 'Nữ' }]
                        })
                    }
                ],
                text: {
                    format: {
                        type: 'json_schema',
                        name: 'candidate_filter',
                        strict: true,
                        schema: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                                keywords: { type: ['string', 'null'] },
                                cityId: { type: ['number', 'null'] },
                                categoryId: { type: ['number', 'null'] },
                                experienceId: { type: ['number', 'null'] },
                                genderId: { type: ['number', 'null'] },
                                salaryId: { type: ['number', 'null'] },
                                summary: { type: 'string' }
                            },
                            required: ['keywords', 'cityId', 'categoryId', 'experienceId', 'genderId', 'salaryId', 'summary']
                        }
                    }
                }
            })
        });

        if (!response.ok) return localResult;
        const parsed = normalizeAiResult(parseJsonFromResponse(await response.json()));
        return { ...localResult, ...Object.fromEntries(Object.entries(parsed).filter(([, value]) => value !== undefined && value !== null && value !== '')) };
    } catch (error) {
        return localResult;
    }
};
