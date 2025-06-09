// functions
const functions = require('../services/functions');
const function_new = require('../function/function_new');
const data_get = require('../function/data');
const apiController = require('./apicontroller');
const { checkDeadline, findCity, checkElapsedTime, findCompSize,getTimeRemain, getMucLuong, convertTimestamp, findExp,findEdu, findTypeWork, findGender, findCate, levelList, cateList,
    listTypeWork, city_array, listRangeMoney, listSizeExp, listEdu, genderList, findDistrict, findLevel, convertTimestampDetail, findCateBlog, listCities, getMucLuong2, findCateNewsById
} = require('../function/function_new');
const { listQuanhuyen } = require('../function/functions');
const axios = require('axios');

exports.index = async (req, res) => {
    const url = req.url;
    data_tags = data_get.data_tags;
    // console.log(req.params);
    var listCities = function_new.listCities;
    var userType = req.userType;
    let data = {
        test: 'data test'
    }
    // trả về view 
    return res.render('home', { url, listCities, userType, data_tags });
}
exports.cvpage = async (req, res) => {
    const url = req.url;
    const accessToken = req.cookies.accessToken;
    const response = await axios.post('http://localhost:3056/api/topcv1s/CV/ListSampleCV', {
        idnganh: 0
    },
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    cvList = response.data.data.data
    blog = response.data.data.blog
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('cv_page', { url, blog, cvList });
}
exports.otp = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('otp_page', { url });
}
exports.forgotpassword = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('forgotpass_page', { url });
}
exports.forgotpasswordemp = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('forgotpass_page_emp', { url });
}

exports.login_page = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('login_page', { url });
}
exports.regis_page = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('register_page', { url });
}
exports.candi_page = async (req, res) => {
    const url = req.url;
    const city = req.query.city;
    const catid = req.query.catid;
    const name = req.query.name;
    const pageSize = 10;
    const page = req.query.page || 1;
    const accessToken = req.cookies.accessToken;
    var convertToUrl = function_new.convertToUrl;
    var listCities = function_new.listCities;
    var findExp = function_new.findExp;
    const response = await axios.post('http://localhost:3053/api/topcv1s/new/SearchCandi', {
        keywords: name,
        city: city,
        catid:catid,
        pageSize: pageSize,
        page: page
    }, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    console.log(">>> Danh sách ứng viên: ", response)
    let data = {
        test: 'data test'
    }
    return res.render('candi_page', { data, city, catid,name, listCities, url, response, convertToUrl,getTimeRemain, findExp });
}
exports.candi_detail = async (req, res) => {
    const url = req.url;
    const slugAndDataId = req.params[0] + '-uv-' + req.params[1];
    const slug = req.params[0];
    const dataId = req.params[1];
    var listCities = function_new.listCities;
    var findCity = function_new.findCity;
    var findCate = function_new.findCate;
    var convertToUrl = function_new.convertToUrl;
    var findRangeMoney = function_new.findRangeMoney;
    var listRangeMoney = function_new.listRangeMoney;
    var name =''
    var city =''

    try {
        const token = req.cookies.accessToken;

        // if(!token) {
        //     return res.status(403).send('Token is required');
        // }

        const response = await axios.post('http://localhost:3052/api/topcv1s/candidate/DetailCandi', {
            id: dataId
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        const dataFromAPI = response.data.data;
        // var checksave= response.xemtt

        return res.render('candi_detail', {listCities,name,city, dataFromAPI, findCity,findExp,findTypeWork, findCate, listRangeMoney, token, convertToUrl, findRangeMoney, url });

    } catch (error) {
        console.error('Error fetching data from API:', error);
        return res.status(500).send('Error fetching data:');
    }
};
exports.job_after_search = async (req, res) => {
    const url = req.url;
    const link = req.query.link;
    const name = req.query.name;
    const city = req.query.city;
    const category = req.query.category;
    const getMucLuong2 = function_new.getMucLuong2;
    var tag = '';
    var findCity = function_new.findCity;
    var findDistrict = function_new.findDistrict;
    var findCate = function_new.findCate;
    var findTagByalias = function_new.findTagByalias
    var toLowerCaseString = function_new.toLowerCaseString
    var capitalizeFirstLetter = function_new.capitalizeFirstLetter
    var type = req.cookies.type ? req.cookies.type : 1;
    var id = req.cookies.use_id ? req.cookies.use_id : 0;
    const job_recommend = await axios.post('http://localhost:3053/api/topcv1s/new/JobRecommend', {
        id: id,
        type: type
    });
    if (city) {
        var city_id = function_new.getCityIdByUrl(city);
        var city_name = findCity(city_id);
    }
    if (category) {
        var categoryId = function_new.getCategoryIdByUrl(category);
        if (!categoryId) {
            var tag = findTagByalias(category);
            var cat_uppercase = capitalizeFirstLetter(findTagByalias(category));
            var cat_lowcase = toLowerCaseString(findTagByalias(category));
        }
        else {
            var cat_uppercase = capitalizeFirstLetter(findCate(categoryId));
            var cat_lowcase = toLowerCaseString(findCate(categoryId));
        }

    }
    // if (city_id && categoryId) {
    //     seoTT = `Cập Nhật Việc Làm ${cat_uppercase} Tại ${city_name} Từ Công Ty Uy Tín`;
    //     seoCNT = `Việc làm ${cat_lowcase} tại ${city_name} mới nhất thường xuyên được cập nhật tại TopCv1s. Truy cập mỗi ngày, ứng viên có cơ hội đón nhận top việc làm ${cat_lowcase} tại ${city_name} hấp dẫn từ các nhà tuyển dụng uy tín hàng đầu. Tin tức việc làm ${cat_lowcase} tại ${city_name} update thường xuyên, đăng nhập ngay để chọn.`;
    //     seoh1 = `Tìm việc ${cat_lowcase} tại ${city_name} tốt nhất`;
    // }
    // else if (city_id && tag) {
    //     seoTT = `Cập Nhật Việc Làm ${cat_uppercase} Tại ${city_name} Từ Công Ty Uy Tín`;
    //     seoCNT = `Việc làm ${cat_lowcase} tại ${city_name} mới nhất thường xuyên được cập nhật tại TopCv1s. Truy cập mỗi ngày, ứng viên có cơ hội đón nhận top việc làm ${cat_lowcase} tại ${city_name} hấp dẫn từ các nhà tuyển dụng uy tín hàng đầu. Tin tức việc làm ${cat_lowcase} tại ${city_name} update thường xuyên, đăng nhập ngay để chọn.`;
    //     seoh1 = `Tìm việc ${cat_lowcase} tại ${city_name} tốt nhất`;
    // }
    // else
    if (city_id && !categoryId) {
        seoTT = `Danh sách tin tuyển dụng việc làm tại ${city_name} mới nhất`;
        seoCNT = `Cập nhật tin tuyển dụng việc làm mới nhất tại ${city_name}. Tìm việc và ứng tuyển miễn phí ngay.`;
        seoh1 = `Tìm việc làm nhanh tại các ${city_name} và ứng tuyển hiệu quả`;
    }
    else if ((!city_id && categoryId)) {
        seoTT = `Danh sách việc làm theo ngành nghề hot nhất`
        seoCNT = `Danh sách tin tuyển dụng việc làm theo ngành nghề hot nhất được gợi ý từng vị trí công việc. Ứng tuyển việc làm uy tín ngay trên TopCv1s, có việc liền tay.`
        seoh1 = `Top việc làm theo ngành nghề cho ứng viên tìm việc`;
    }
    else if ( (!city_id && findTagByalias(category))) {
        seoTT = ` Danh sách việc làm theo tag`
        seoCNT = `Cập nhật danh sách tin tuyển dụng việc làm theo từng vị trí công việc mới nhất trên topcv1s để ứng tuyển miễn phí ngay.`
        seoh1 = `Danh sách việc làm theo tag đa dạng cho ứng viên tìm việc`;
    }
    else {
        seoTT = 'Tuyển Dụng, Tìm Việc Làm Hay, Tìm Việc Nhanh, Hiệu Quả Cùng TopCv1s'
        seoCNT = 'Danh sách tin tuyển dụng việc làm hot nhất được gợi ý từng vị trí công việc. Ứng tuyển việc làm uy tín ngay trên TopCv1s, có việc liền tay.';
        seoh1 = 'Tuyển Dụng, Tìm Việc Làm Hấp Dẫn Nhất';
    }
    const currentTime = new Date();
    const formattedDate = `${currentTime.getDate().toString().padStart(2, '0')}/${(currentTime.getMonth() + 1).toString().padStart(2, '0')}/${currentTime.getFullYear()}`;
    let data = {
        link: link,
        name: name,
        formattedDate: formattedDate
    }
    return res.render('aftersearchjob', { data: data, listCities: function_new.listCities, city_id, categoryId, findCity, findCate, seoTT, seoCNT, seoh1, url, category, findDistrict, tag, job_recommend, getMucLuong2, id, type });
}
exports.job_detail = async (req, res) => {
    const url = req.url;
    const jobId = req.params.jobId;

    const query = req.query;
    let data = {
        jobId: jobId,
        query: query
    }
    return res.render('job_detail', { data: data, url });
}
exports.alias = async (req, res) => {
    const url = req.url;
    const slug = req.params.slug;
    const accessToken = req.cookies.accessToken;
    var capitalizeFirstLetter = function_new.capitalizeFirstLetter;
    try {
        const response = await axios.post('http://localhost:3053/api/topcv1s/new/detailJob_Comp', {
            alias: slug
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const dataFromAPI = response.data.data;
        let dataToRender;
        let view;
        let functions;

        if (typeof dataFromAPI.type === 'number' && [1, 2].includes(dataFromAPI.type)) {
            switch (dataFromAPI.type) {
                case 1:
                    view = 'job_detail';
                    dataToRender = dataFromAPI;
                    functions = null;
                    break;
                case 2:
                    view = 'comp_detail';
                    dataToRender = dataFromAPI;
                    functions = function_new.findCity;
                    break;
                case 3:
                default:
                    const previousPage = req.headers.referer || '/'; // Nếu không có trang trước đó, quay về trang chủ '/'
                    res.redirect(previousPage);
            }
        } else {
            // return res.status(404).send('Invalid or missing data type in API response');
        }
        if (dataToRender?.type == 1) {
            // check new url, redirect 301
            const url = req.originalUrl
            const alias = dataToRender?.data?.new_alias
            const id = dataToRender?.data?.new_id
            if (url != `/${alias}-${id}`) {
                return res.redirect(301, `/${alias}-${id}`)
            }
        }        

        return res.render(view, { dataToRender, findCity, checkDeadline, checkElapsedTime, findCompSize, getMucLuong, convertTimestamp, findExp,findEdu, findTypeWork, findGender, findCate, convertTimestampDetail, findCateBlog, findLevel, accessToken, url, city_array, getMucLuong2,findCateNewsById,capitalizeFirstLetter });

    } catch (error) {
        // console.error('Error fetching data from API:', error);
        // return res.status(500).send('Error fetching data');
        const previousPage = req.headers.referer || '/'; // Nếu không có trang trước đó, quay về trang chủ '/'
        res.redirect(previousPage);
    }
}

exports.comp_detail = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('comp_detail', { url });
}
exports.cv_sel = async (req, res) => {
    const slug = req.params.slug;
    const url = req.url;
    var findCateCV = function_new.findCateCV;
    var findLangCV = function_new.findLangCV;
    var capitalizeFirstLetter = function_new.capitalizeFirstLetter
    var data_cv = findCateCV(slug);
    if (findCateCV(slug) && findCateCV(slug) != '') {
        data_cv = findCateCV(slug);
        const response = await axios.post('http://localhost:3056/api/topcv1s/cv/ListSampleCV', {
            idnganh: data_cv.id
        });
        des = `Tổng hợp mẫu CV ${data_cv.name} đẹp nhất với hướng dẫn chi tiết trên TopCv1s. Tạo và tải mẫu CV online ${data_cv.name} về máy để ứng tuyển việc làm như ý.`;
        title = `Bộ sưu tập mẫu CV online ${data_cv.name} đẹp, tạo và tải miễn phí`;
        h1tit = `Danh sách mẫu CV online ${data_cv.name} đẹp, hỗ trợ tạo 5 ngôn ngữ`;
        return res.render('cv_page_selection', { url, slug, data_cv, response, capitalizeFirstLetter, des, title,h1tit });
    }
    else if (findLangCV(slug) && findLangCV(slug) != '') {
        data_cv = findLangCV(slug);
        const response = await axios.post('http://localhost:3056/api/topcv1s/cv/ListSampleCV', {
            idlang: data_cv.id
        });
        des = `Top mẫu CV ${data_cv.name} đẹp, nội dung chuẩn, hướng dẫn tạo CV ${data_cv.name} nhanh chóng trong 3 phút với sự hỗ trợ của TopCv1s. Tạo CV online ${data_cv.name} ngay.`;
        title = ` Tổng hợp mẫu CV ${data_cv.name} Ấn tượng nhất`;
        h1tit = `Danh sách mẫu CV ${data_cv.name} ấn tượng, tải về miễn phí`;
        return res.render('cv_page_selection', { url, slug, data_cv, response, capitalizeFirstLetter, des, title,h1tit });
    }
    else {
        const previousPage = req.headers.referer || '/';
        res.redirect(previousPage);
    }
}
exports.add_cv = async (req, res) => {
    const url = req.url;
    // console.log(url);
    var cateList = function_new.cateList;
    const parts = url.split('/');

    const alias = parts[parts.length - 1];
    console.log(alias)
    // console.log("🚀 ~ exports.add_cv= ~ alias:", alias)
    try {
        const response = await axios.post('http://localhost:3053/api/topcv1s/new/getCvDetail', {
            alias: alias
        });

        const dataFromAPI = response.data.data;

        return res.render('add_cv', { dataFromAPI, url, cateList });

    } catch (error) {
        console.log('add_cv', 'Error fetching data from API:', error?.message);
        return res.status(500).send('Error fetching data');
    }
};
exports.newsdetail = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('news_detail', { url });
}

//ntd
exports.login_employ = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('ntd/login_ntd', { url });
}
exports.regis_employ = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('ntd/register_ntd', { listCities, listQuanhuyen, url });
}
exports.managemphome = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('ntd/manahome_ntd', { url });
}
exports.managcanapply = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('ntd/manacanapp_ntd', { url });
}
exports.managcansave = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('ntd/manacansave_ntd', { url });
}
exports.managlistpost = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('ntd/manapost_ntd', { url });
}
exports.editpost = async (req, res) => {
    const url = req.url;
    try {
        const { titleId } = req.params;
        const parts = titleId.split('-');
        const id = parts.pop();
        const title = parts.join('-');
        var levelList = function_new.levelList;
        var cateList = function_new.cateList;
        var listTypeWork = function_new.listTypeWork;
        var listRangeMoney = function_new.listRangeMoney
        var listSizeExp = function_new.listSizeExp;
        var listEdu = function_new.listEdu;
        var genderList = function_new.genderList;
        var listCities = function_new.listCities;
        var findDistrict = function_new.findDistrict;
        const response = await axios.post('http://localhost:3053/api/topcv1s/new/DetailNew', { id: id });
        let post = response.data.data.data;
        return res.render('ntd/edit_job_ntd', { title, id, levelList, cateList, listTypeWork, listRangeMoney, listSizeExp, listEdu, genderList, listCities, findDistrict, post, url });
    } catch (error) {
        console.log(error);
    }
}
exports.managinfo = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    var cateList = function_new.cateList;
    var listSizeCompany = function_new.listSizeCompany;
    var listCities = function_new.listCities;
    var city_array = function_new.city_array;
    let data = {
        test: 'data test'
    }
    return res.render('ntd/updateinfo_ntd', { listSizeCompany, cateList, listCities, city_array, url });
}
exports.managrepass = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('ntd/changepass_ntd', { url });
}
exports.managrepassuv = async (req, res) => {
    const url = req.url;
    console.log(req.params)
    return res.render('uv/changepass_uv', { url });
}
exports.managuppost = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    var levelList = function_new.levelList;
    var cateList = function_new.cateList;
    var listTypeWork = function_new.listTypeWork;
    var listRangeMoney = function_new.listRangeMoney
    var listSizeExp = function_new.listSizeExp;
    var listEdu = function_new.listEdu;
    var genderList = function_new.genderList;
    var listCities = function_new.listCities;
    var findDistrict = function_new.findDistrict;
    let data = {
        test: 'data test'
    }
    return res.render('ntd/post_job_ntd', { data, levelList, cateList, listTypeWork, listRangeMoney, listSizeExp, listEdu, genderList, listCities, findDistrict, url });
}

//uv
exports.login_candi = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('uv/login_uv', { url });
}
exports.regis_candi = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    var data_check = 1
    res.locals.data_check = data_check; 
    let data = {
        test: 'data test'
    }
    return res.render('uv/register_uv', { listCities: function_new.listCities, cateList: function_new.cateList, url,data_check });
}
exports.regis_candi_cv = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('uv/register_uv_ulcv', { listSizeExp: function_new.listSizeExp, url });
}
exports.managcanhome = async (req, res) => {
    const url = req.url;
    const accessToken = req.cookies.accessToken;
    var getMucLuong = function_new.getMucLuong;
    try {
        const response = await axios.post('http://localhost:3052/api/topcv1s/candidate/ManageAllCandi', {
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const dataFromAPI = response.data.data;

        return res.render('uv/manahome_uv', { dataFromAPI, getMucLuong, url });

    } catch (error) {
        console.error('Error fetching data from API:', error);
        return res.status(500).send('Error fetching data:');
    }
}
exports.managjobapply = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('uv/manajobapp_uv', { url });
}
exports.managjobsave = async (req, res) => {
    const url = req.url;
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('uv/manajobsave_uv', { url });
}
exports.managcv = async (req, res) => {
    const url = req.url;
    try {
        const accessToken = req.cookies.accessToken;
        const response = await axios.post('http://localhost:3052/api/topcv1s/candidate/ManageCvCandiDidCreated', {
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const dataFromAPI = response.data.data;
        return res.render('uv/applycv_uv', { dataFromAPI, url });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        if (error.response) {
            return res.status(error.response.status).send(error.response.data);
        } else if (error.request) {
            return res.status(500).send('No response from API server');
        } else {
            return res.status(500).send('Error in setting up API request');
        }
    }
};
// cv
exports.viewcvpng = async (req, res) => {
    const url = req.url;
    const { iduv, idcv, type } = req.params;
    if (iduv && idcv && type) {
        if (type == 0) {
            return res.render('cv/viewcvpngnothide', { url });
        }
        else if (type == 1) {
            return res.render('cv/viewcvpnghide', { url });
        }
    }
}
exports.viewcvpdf = async (req, res) => {
    const url = req.url;
    const { iduv, idcv } = req.params;
    if (iduv && idcv) {
        return res.render('cv/viewcvpdf', { url });
    }
}
exports.viewcvpreview = async (req, res) => {
    const url = req.url;
    const { iduv, idcv } = req.params;
    if (iduv && idcv) {
        return res.render('cv/viewcvpreview', { url });
    }
}
// layouts

exports.lysearch = async (req, res) => {
    try {
        const listCities = function_new.listCities || [];

        return res.render('layouts/search_job', { listCities });
    } catch (error) {
        console.error('Lỗi khi render tìm kiếm việc làm:', error);
        return res.status(500).send('Lỗi Máy chủ Nội bộ');
    }
}

//admin
exports.login_admin = async (req, res) => {
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('admin/login_admin', { data });
}

exports.regis_new_candi = async (req, res) => {
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('admin/regis_new_candi', { listCities, cateList });
}

exports.regis_new_ntd = async (req, res) => {
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('admin/regis_new_ntd', { listCities, city_array });
}

exports.ntd_post = async (req, res) => {
    // console.log(req.params)
    let data = {
        test: 'data test'
    }

    return res.render('admin/ntd_post', { listCities, cateList });
}
exports.admin_user_nhs_status = async (req, res) => {
    // console.log(req.params)
    let data = {
        test: 'data test'
    }
    return res.render('admin/candi_status_NHS', { data });
}
exports.admin_not_permission = async (req, res) => {
    // console.log(req.params);
    let data = {
        test: 'data test'
    }
    return res.render('admin/admin_not_permission', { data });
}