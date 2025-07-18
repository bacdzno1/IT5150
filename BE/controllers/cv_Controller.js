 
import "dotenv/config";
import * as functions from '../services/functions.js';
import SampleCv from '../models/sample/SampleCv.js';
import LanguageCv from "../models/language/LanguageCv.js";
import NganhCv from "../models/NganhCv.js";
import CvEmotion from '../models/CvEmotion.js';

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
        return functions.success(res, 'Mẫu CV', { data, total, idnganh, idlang })
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
        return functions.success(res, 'Mẫu CV', { data, total })
    } catch (error) {
        return functions.setError(res, error.message);
    }
}