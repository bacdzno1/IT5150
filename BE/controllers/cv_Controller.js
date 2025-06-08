 
import "dotenv/config";
import * as functions from '../services/functions.js';
import * as puppeteer from 'puppeteer'
import fs from 'fs'
import SaveCandidateCv from '../models/save/SaveCandidateCv.js';
import SampleCv from '../models/sample/SampleCv.js';
import LanguageCv from "../models/language/LanguageCv.js";
import NganhCv from "../models/NganhCv.js";
import NewsNganhNghe from "../models/blog/NewsNganhNghe.js";
import NewsLang from "../models/blog/NewsLang.js";
import CvEmotion from '../models/CvEmotion.js';

const AddCvForImageAndPdf = async (iduser, currentTimeSecond, url) => {
    let namepdf = `./upload/cv_uv/uv_${iduser}/u_cv_${currentTimeSecond}.pdf`;
    let nameimg = `./upload/cv_uv/uv_${iduser}/u_cv_${currentTimeSecond}.png`;
    let nameimgHide = `./upload/cv_uv/uv_${iduser}/u_cv_hide_${currentTimeSecond}.png`;

    let dirpdf = `./upload/cv_uv/uv_${iduser}/`;

    if (!fs.existsSync(dirpdf)) {
        fs.mkdirSync(dirpdf, { recursive: true });
    }

    // lưu ảnh, lưu pdf: https://timviec365.vn/site/xem_cv_nodejs_no_hide/2062/1111226663
    const browser = await puppeteer.launch({
        headless: 'chrome',
        args: ["--no-sandbox", "--disabled-setupid-sandbox", "--font-render-hinting=none", '--force-color-profile=srgb', '--disable-web-security'],
        executablePath: "/usr/bin/chromium-browser",
    });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.pdf({
        path: namepdf,
        format: 'A4'
    });
    await page.screenshot({
        path: nameimg, 
    });
    await page.screenshot({
        path: nameimgHide,
    });

    await browser.close();
}

const DeleteCVForImageAndPdf = async (iduser, name_cv, name_cv_hide) => {
    const fileNamePdf = `${name_cv.substring(0, name_cv.length - 4)}.pdf`

    const filePdfPath = `./upload/cv_uv/uv_${iduser}/${fileNamePdf}`
    const fileImgPath = `./upload/cv_uv/uv_${iduser}/${name_cv}`
    const fileImgHidePath = `./upload/cv_uv/uv_${iduser}/${name_cv_hide}`

    functions.deleteFile(filePdfPath);
    functions.deleteFile(fileImgPath);
    functions.deleteFile(fileImgHidePath);
}

export const CreateNewCandidateCV = async (req, res) => {
    try {
        const { iduser, idcv, lang, html, url } = req.body;
        if (iduser && idcv && lang && html && url) {
            const id = await functions.getMaxId(SaveCandidateCv, 'id')

            const currentTimeSecond = Math.floor(new Date() / 1000)

            await AddCvForImageAndPdf(iduser, currentTimeSecond, url)

            await SaveCandidateCv.create({
                id,
                iduser,
                idcv,
                lang,
                html: JSON.stringify(html),
                nameimg: `../upload/cv_uv/uv_${iduser}/u_cv_${currentTimeSecond}.png`,
                name_cv: `u_cv_${currentTimeSecond}.png`,
                name_cv_hide: `u_cv_hide_${currentTimeSecond}.png`,
                status: 2,
                cv_order: 0,
                cv: 1,
                createdate: currentTimeSecond,
                scan_cv: 0,
                scan_cv_hide: 0,
                height_cv: 0,
                cv_check_exist: 0
            })

            return functions.success(res, 'success');
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
};

export const UpdateCandidateCV = async (req, res) => {
    try {
        const { iduser,
            idcv,
            html,
            url,
        } = req.body;
        if (iduser && idcv) {
            if (url) {
                const candidateCV = await SaveCandidateCv.findOne({ iduser, idcv })
                DeleteCVForImageAndPdf(iduser, candidateCV.name_cv, candidateCV.name_cv_hide)

                const currentTimeSecond = Math.floor(new Date() / 1000)
                await AddCvForImageAndPdf(iduser, currentTimeSecond, url)

                await SaveCandidateCv.updateOne({ iduser, idcv }, {
                    iduser,
                    idcv,
                    html: JSON.stringify(html),
                    nameimg: `../upload/cv_uv/uv_${iduser}/u_cv_${currentTimeSecond}.png`,
                    name_cv: `u_cv_${currentTimeSecond}.png`,
                    name_cv_hide: `u_cv_hide_${currentTimeSecond}.png`,
                    cv: 1,
                    ...req.body
                })
            }

            else {
                await SaveCandidateCv.updateOne({ iduser, idcv }, {
                    iduser,
                    idcv,
                    html: JSON.stringify(html),
                    cv: 1,
                    ...req.body
                })
            }


            await SaveCandidateCv.updateMany({ iduser, idcv: { $ne: idcv } }, {
                cv: 0
            })

            return functions.success(res, 'success');
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

export const DeleteCandidateCV = async (req, res) => {
    try {
        const { iduser, idcv } = req.body;
        if (iduser && idcv) {
            const candidateCV = await SaveCandidateCv.findOne({ iduser, idcv })

            DeleteCVForImageAndPdf(iduser, candidateCV.name_cv, candidateCV.name_cv_hide)

            await SaveCandidateCv.deleteOne({ iduser, idcv })

            return functions.success(res, 'success');
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

export const GetSampleCV = async (req, res) => {
    try {
        const { currentPage, itemsPerPage } = req.query
        const { name, alias } = req.body

        const data = await SampleCv.find({
            ...req.body,
            name: {
                $regex: name || '',
                $options: "i"
            },
            alias: {
                $regex: alias || '',
                $options: "i"
            }
        })

        const offset = (+currentPage - 1) * +itemsPerPage;
        const defaultLimit = +itemsPerPage ? +itemsPerPage : 10;

        let totalItems = data.length
        const totalPages = Math.ceil(totalItems / defaultLimit);

        let result = await SampleCv.find({
            ...req.body,
            name: {
                $regex: name || '',
                $options: "i"
            },
            alias: {
                $regex: alias || '',
                $options: "i"
            }
        })
            .skip(offset)
            .limit(defaultLimit)

        return functions.success(res, 'get data success', {
            meta: {
                currentPage: +currentPage || 1, //trang hiện tại
                itemsPerPage: +itemsPerPage || 10, //số lượng bản ghi đã lấy
                totalPages, //tổng số trang với điều kiện query
                totalItems, // tổng số phần tử (số bản ghi)
            },
            data: result
        });
    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
}

export const CreateNewSampleCV = async (req, res) => {
    try {
        const { idcate, alias, htmlcss_vi, htmlcss_en, htmlcss_jp, htmlcss_cn, htmlcss_kr } = req.body
        const id = await functions.getMaxId(SampleCv, 'id');
        if (idcate) {
            const file = req.files;
            if (file && file.image) {
                const date = Math.floor(new Date() / 1000);
                const upload = await functions.uploadCV(`maucv/${alias}`, file.image, date);
                if (upload === false) return functions.setError(res, 'Định dạng file không hợp lệ', 400);

                await SampleCv.create({
                    id,
                    image: upload,
                    htmlcss_vi: JSON.stringify(htmlcss_vi),
                    htmlcss_en: JSON.stringify(htmlcss_en),
                    htmlcss_jp: JSON.stringify(htmlcss_jp),
                    htmlcss_cn: JSON.stringify(htmlcss_cn),
                    htmlcss_kr: JSON.stringify(htmlcss_kr),
                    ...req.body,
                })

                return functions.success(res, 'success');
            }
            else return functions.setError(res, "missing data", 400)
        }
        else return functions.setError(res, "missing data", 400)

    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
}

export const SampleCVEdit = async (req, res) => {
    try {
        const {
            id,
            alias,
            name,
            idlang,
            idnganh,
            codecolor,
            html_cn,
            html_en,
            html_jp,
            html_kr,
            html_vi,
        } = req.body
        const files = req.files
        if (id && alias && name) {
            const time = functions.getTime()
            let image = ''
            if (files && files.image) {
                const upload = await functions.uploadFile('sample_cv', files.image, time)
                if (upload) image = upload
            }
            let image2 = ''
            if (files && files.image2) {
                const upload = await functions.uploadFile('sample_cv', files.image2, time)
                if (upload) image2 = upload
            }
            let image3 = ''
            if (files && files.image3) {
                const upload = await functions.uploadFile('sample_cv', files.image3, time)
                if (upload) image3 = upload
            }
            let cover_image = ''
            if (files && files.cover_image) {
                const upload = await functions.uploadFile('sample_cv', files.cover_image, time)
                if (upload) cover_image = upload
            }
            const checkExist = await SampleCv.findOne({ id: Number(id) }).lean()
            if (checkExist) {
                if (checkExist?.image) {
                    functions.deleteFile(`./pictures/sample_cv/${checkExist.image}`)
                }
                if (checkExist?.image2) {
                    functions.deleteFile(`./pictures/sample_cv/${checkExist.image2}`)
                }
                if (checkExist?.image3) {
                    functions.deleteFile(`./pictures/sample_cv/${checkExist.image3}`)
                }
                if (checkExist?.cover_image) {
                    functions.deleteFile(`./pictures/sample_cv/${checkExist.cover_image}`)
                }

                await SampleCv.updateOne({ id: Number(id) }, {
                    $set: {
                        // id,
                        alias,
                        name,
                        idlang,
                        idnganh,
                        codecolor,
                        htmlcss_vi: html_vi,
                        htmlcss_en: html_en,
                        htmlcss_jp: html_jp,
                        htmlcss_cn: html_cn,
                        htmlcss_kr: html_kr,
                        timecreated: time,
                        image: image,
                        image2: image2,
                        image3: image3,
                        cover_image: cover_image,
                    }
                })
                return functions.success(res, 'Cập nhật mẫu thành công')
            } else {
                // const time = functions.getTime()
                await SampleCv.create({
                    id,
                    alias,
                    name,
                    idlang,
                    idnganh,
                    codecolor,
                    htmlcss_vi: html_vi,
                    htmlcss_en: html_en,
                    htmlcss_jp: html_jp,
                    htmlcss_cn: html_cn,
                    htmlcss_kr: html_kr,
                    timecreated: time,
                    image: image,
                    image2: image2,
                    image3: image3,
                    cover_image: cover_image,
                })
                return functions.success(res, 'Tạo mẫu thành công')
            }
        }
        return functions.setError(res, "missing data", 400)
    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
}

export const getLangCv = async (req, res) => {
    try {
        const data = await LanguageCv.find({}).sort({ id: 1 })

        return functions.success(res, 'Ngôn ngữ CV', { data })
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

export const getNganhCv = async (req, res) => {
    try {
        const data = await NganhCv.find({}).sort({ id: 1 })

        return functions.success(res, 'Ngành CV', { data })
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

export const in4CV = async (req, res) => {
    try {
        const {
            idcv
        } = req.body
        if (idcv && !isNaN(Number(idcv))) {
            const checkExist = await SampleCv.findOne({ id: Number(idcv) })
            if (checkExist) {
                const data = {
                    _id: checkExist?.id,
                    alias: checkExist?.alias,
                    colors: checkExist?.codecolor,
                    name: checkExist?.name,
                    html_vi: functions.safeJSONparse(checkExist?.htmlcss_vi),
                    html_en: functions.safeJSONparse(checkExist?.htmlcss_en),
                    html_jp: functions.safeJSONparse(checkExist?.htmlcss_jp),
                    html_cn: functions.safeJSONparse(checkExist?.htmlcss_cn),
                    html_kr: functions.safeJSONparse(checkExist?.htmlcss_kr),
                }
                // console.log(data, typeof data.html_vi)
                console.log(data.html_en)

                return functions.success(res, 'in4CV', { data })
            }
            return functions.setError(res, 'not found', 404)
        }
        return functions.setError(res, "missing data", 400)
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

export const ListSampleCV = async (req, res) => {
    try {
        // const page = req.body.page;
        // const pageSize = req.body.pageSize;
        // const skip = (page - 1) * pageSize;
        // const limit = pageSize;
        const sortOption = req.body.sortOption;
        const idlang = req.body.idlang;
        const idnganh = req.body.idnganh;

        const conditions = {
            ...(idlang && { idlang: new RegExp(`(^|,)${idlang}(,|$)`) }),
            ...(idnganh && { idnganh: new RegExp(`(^|,)${idnganh}(,|$)`) })
        }
        const sort = {
            ...((!sortOption || sortOption === "1") && { timecreated: -1 }),
            ...(sortOption === "2" && { download: -1 })
        }

        const data = await SampleCv.find(conditions).sort(sort)
        const iduser = await functions.getTokenJustUser(req, res);
        if (iduser) {
            const cvDaLuu = await CvEmotion.aggregate([
                { $match: { type: 1, iduser: iduser } },
                {
                    $lookup: {
                        from: "SampleCv",
                        localField: "idcv",
                        foreignField: "id",
                        as: "samplecv"
                    }
                },
                { $unwind: "$samplecv" },
                {
                    $project: {
                        idcv: 1,
                    }
                },
            ]);
            console.log('cv da luu' , cvDaLuu)
            const savedCvIds = cvDaLuu.map(cv => cv.idcv);
            for (let i = 0; i < data.length; i++) {
                const element = data[i]._doc;
                element.saveCV = savedCvIds.includes(element.id);
            }
        }
        const total = await SampleCv.countDocuments(conditions)
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.image = `${process.env.DOMAIN_API_CV}/pictures/sample_cv/${element.image}`
            element.image2 = `${process.env.DOMAIN_API_CV}/pictures/sample_cv/${element.image2}`
            element.image3 = `${process.env.DOMAIN_API_CV}/pictures/sample_cv/${element.image3}`
            element.cover_image = `${process.env.DOMAIN_API_CV}/pictures/sample_cv/${element.cover_image}`
        }

        // Bài đăng chân trang
        let blog = {}
        if (Number(idnganh)) {
            const result_blog = await NewsNganhNghe.findOne({ idnganh: Number(idnganh) }).sort({ timeedit: -1 })
            !!result_blog && (blog = result_blog)
        }
        if (Number(idlang)) {
            const result_blog = await NewsLang.findOne({ idlang: Number(idlang) }).sort({ timeedit: -1 })
            !!result_blog && (blog = result_blog)
        }
        // Mặc đinh
        if (Object.keys(blog).length === 0) {
            const result_blog = await NewsNganhNghe.findOne({ idnganh: 0 }).sort({ timeedit: -1 })
            blog = result_blog
        }

        return functions.success(res, 'Mẫu CV', { data, total, blog, idnganh, idlang })
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

export const cvSameNganh = async (req, res) => {
    try {

    } catch (error) {
        return functions.setError(res, error.message);
    }
}

export const ListSampleCVNew = async (req, res) => {
    try {
        const page = req.body.page || 1;
        const pageSize = req.body.pageSize || 12;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const sortOption = req.body.sortOption;
        const idlang = req.body.idlang;
        const idnganh = req.body.idnganh;

        const conditions = {
            ...(idlang && { idlang: new RegExp(`(^|,)${idlang}(,|$)`) }),
            ...(idnganh && { idnganh: new RegExp(`(^|,)${idnganh}(,|$)`) })
        }
        const sort = {
            ...((!sortOption || sortOption === "1") && { timecreated: -1 }),
            ...(sortOption === "2" && { download: -1 })
        }

        const data = await SampleCv.find(conditions).sort(sort).skip(skip).limit(limit)
        const total = await SampleCv.countDocuments(conditions)
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.image = `${process.env.DOMAIN_API}/pictures/sample_cv/${element.image}`
            element.image2 = `${process.env.DOMAIN_API}/pictures/sample_cv/${element.image2}`
            element.image3 = `${process.env.DOMAIN_API}/pictures/sample_cv/${element.image3}`
            element.cover_image = `${process.env.DOMAIN_API}/pictures/sample_cv/${element.cover_image}`
        }

        // Bài đăng chân trang
        let blog = {}
        if (Number(idnganh)) {
            const result_blog = await NewsNganhNghe.findOne({ idnganh: Number(idnganh) }).sort({ timeedit: -1 })
            !!result_blog && (blog = result_blog)
        }
        if (Number(idlang)) {
            const result_blog = await NewsLang.findOne({ idlang: Number(idlang) }).sort({ timeedit: -1 })
            !!result_blog && (blog = result_blog)
        }
        // Mặc đinh
        if (Object.keys(blog).length === 0) {
            const result_blog = await NewsNganhNghe.findOne({ idnganh: 0 }).sort({ timeedit: -1 })
            blog = result_blog
        }

        return functions.success(res, 'Mẫu CV', { data, total, blog })
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

export const xemCvPhanTrangEjs = async (req, res) => {
    try {
        res.render('xem-cv-phan-trang')
    } catch (error) {
        console.error('xemCvPhanTrangEjs', error);
    }
}