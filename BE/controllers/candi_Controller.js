/* eslint-disable no-unused-vars */
import "dotenv/config";
import * as functions from '../services/functions.js';
import NopHoSo from '../models/NopHoSo.js';
import New from '../models/new/New.js';
import Users from '../models/user/Users.js';
import UserHocVan from '../models/user/UserHocVan.js';
import UserCvUpload from '../models/user/UserCvUpload.js';
import UseNgoaiNgu from '../models/use/UseNgoaiNgu.js';
import UseKinhNghiem from '../models/use/UseKinhNghiem.js';
import UserThamChieu from '../models/user/UserThamChieu.js';
import SaveCandidateCv from '../models/save/SaveCandidateCv.js';
import SaveCandidateLt from '../models/save/SaveCandidateLt.js';
import SaveCandidateApply from '../models/save/SaveCandidateApply.js';
import SampleCv from '../models/sample/SampleCv.js';
import SampleLetter from '../models/sample/SampleLetter.js';
import SampleApply from '../models/sample/SampleApply.js';
import News from '../models/blog/News.js';
import TblLuuTin from '../models/tbl/TblLuuTin.js';
import TblLuuHoSoUv from '../models/tbl/TblLuuHoSoUv.js';
import CvEmotion from '../models/CvEmotion.js';
import TblPointUsed from "../models/tbl/TblPointUsed.js";
import Category from "../models/category/Category.js";
import City from '../models/city/City.js';
import UserVidUpload from "../models/user/UserVidUpload.js";
import UserCompany from "../models/user/UserCompany.js";
import path from 'node:path';
import * as fs from 'node:fs';

// quản lý chung ứng viên
export const ManageAllCandi = async (req, res) => {
    try {
        const iduv = Number(req.iduv);
        const data = {};
        const checkInfo = await Users.findOne({ use_id: iduv }, { use_nganh_nghe: 1, use_city_job: 1, use_view_count: 1 }).lean();
        const arrNganhNghe = [];
        const arrCityJob = [];
        if (checkInfo.use_nganh_nghe) {
            checkInfo.use_nganh_nghe.map(item => arrNganhNghe.push(item.id));
        }
        if (checkInfo.use_city_job) {
            checkInfo.use_city_job.map(item => arrCityJob.push(item.id));
        }

        const viecLamPhuHopNganhNghe = [];
        for (let i = 0; i < arrNganhNghe.length; i++) {
            const element = arrNganhNghe[i];
            viecLamPhuHopNganhNghe.push({ new_cat_id: new RegExp(`(^|,)${element}(,|$)`) })
        }
        const viecLamPhuHopCity = []
        for (let i = 0; i < arrCityJob.length; i++) {
            const element = arrCityJob[i];
            viecLamPhuHopCity.push({ new_city: new RegExp(`(^|,)${element}(,|$)`) })
        }

        const daUngTuyenPromise = NopHoSo.countDocuments({ nhs_use_id: iduv });

        // const cout_viecLamPhuHopPromise = New.countDocuments({
        //     // new_cat_id: { $in: arrNganhNghe },
        //     // new_city: { $in: arrCityJob },
        //     $and: [
        //         { $or: viecLamPhuHopNganhNghe },
        //         { $or: viecLamPhuHopCity },
        //     ]
        // });

        const mauCvDaTaoPromise = SaveCandidateCv.countDocuments({ iduser: iduv });

        const xemHoSo = checkInfo.use_view_count;

        const viecLamPhuHopPromise = New.aggregate([
            {
                $match: {
                    $and: [
                        { $or: viecLamPhuHopNganhNghe },
                        { $or: viecLamPhuHopCity },
                        { new_han_nop: { $gt: Math.floor(Date.now() / 1000) } },
                    ]
                }
            },
            { $sort: { new_hot: -1, new_id: -1, new_han_nop: -1 } },
            { $limit: 30 },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: 'new_user_id',
                    foreignField: "usc_id",
                    as: 'company'
                }
            },
            { $unwind: "$company" },
            {
                $project: {
                    new_id: 1,
                    new_title: 1,
                    new_alias: 1,
                    usc_id: "$company.usc_id",
                    usc_company: "$company.usc_company",
                    usc_alias: "$company.usc_alias",
                    new_money: 1,
                    new_han_nop: 1,
                    usc_update_time: "$company.usc_update_time",
                    usc_logo: "$company.usc_logo",
                    new_city: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1
                }
            }
        ]);


        const CvCuaToiPromise = SaveCandidateCv.aggregate([
            { $match: { iduser: iduv } },
            { $sort: { id: -1 } },
            { $limit: 2 },
            {
                $lookup: {
                    from: "SampleCv",
                    localField: "idcv",
                    foreignField: "id",
                    as: "sampleCV"
                }
            },
            { $unwind: "$sampleCV" },
            {
                $project: {
                    name_cv: 1,
                    idcv: 1,
                    iduser: 1,
                    name: 1,
                    alias: "$sampleCV.alias",
                    id: 1,
                }
            }
        ]);

        const idcv_da_tao = await SaveCandidateCv.distinct('idcv', { iduser: iduv })
        const mauCvDeXuatPromise = SampleCv.find({ id: { $nin: idcv_da_tao } }, { alias: 1, image: 1, name: 1, id: 1 }).sort({ serial: -1, id: -1 }).limit(20).lean();

        const camNangTimViecPromise = News.find({}, { new_id: 1, new_title: 1, new_title_rewrite: 1, new_picture: 1 }).sort({ new_id: -1 }).limit(4).lean();

        const [
            daUngTuyen,
            // cout_viecLamPhuHop,
            mauCvDaTao,
            viecLamPhuHop,
            CvCuaToi,
            mauCvDeXuat,
            camNangTimViec,
            Cityy
        ] = await Promise.all([
            daUngTuyenPromise,
            // cout_viecLamPhuHopPromise,
            mauCvDaTaoPromise,
            viecLamPhuHopPromise,
            CvCuaToiPromise,
            mauCvDeXuatPromise,
            camNangTimViecPromise,
            City.find({}, { cit_id: 1, cit_name: 1 }).lean()
        ]);
        if (iduv) {
            const processArray = async (arr) => {
                const arrPromiseLuuTin = [];
                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];

                    arrPromiseLuuTin.push(promiseTblLuuTin(iduv, element.new_id));
                }
                const arrLuutin = await Promise.all(arrPromiseLuuTin);
                for (let i = 0; i < arr.length; i++) {
                    arr[i].checkLuuTin = arrLuutin[i] ? true : false;
                }
            };

            await processArray(viecLamPhuHop);
        }

        for (let i = 0; i < CvCuaToi.length; i++) {
            const element = CvCuaToi[i];
            element.name_cv = functions.getCV(iduv, element.name_cv);
            element.cvPDF = `${process.env.DOMAIN_API}/dowload/cv_pdf/user_${element.iduser}/cvid_${element.idcv}/${element.idcv}-job247.pdf`;
        }

        for (let i = 0; i < mauCvDeXuat.length; i++) {
            const element = mauCvDeXuat[i];
            element.image = `${process.env.DOMAIN_API}/pictures/sample_cv/${element.image}`;
        }

        for (let i = 0; i < camNangTimViec.length; i++) {
            const element = camNangTimViec[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
        }

        for (let i = 0; i < viecLamPhuHop.length; i++) {
            const element = viecLamPhuHop[i];
            if (element.usc_logo) element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);

            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;
        }
        // console.log(viecLamPhuHop)
        data.daUngTuyen = daUngTuyen;
        // data.cout_viecLamPhuHop = cout_viecLamPhuHop;
        data.cout_viecLamPhuHop = viecLamPhuHop.length;
        data.mauCvDaTao = mauCvDaTao;
        data.xemHoSo = xemHoSo;
        data.viecLamPhuHop = viecLamPhuHop;
        data.mauCvDeXuat = mauCvDeXuat;
        data.camNangTimViec = camNangTimViec;
        data.CvCuaToi = CvCuaToi;

        return functions.success(res, 'get data success', { data });
    } catch (error) {
        console.log(error);
        return functions.setError(res, error.message);
    }
};

// việc làm đã ứng tuyển
export const JobApply = async (req, res) => {
    try {
        const iduv = Number(req.iduv);
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;

        const dataCom_promise = UserCompany.distinct('usc_id')
        const dataNew_promise = New.distinct('new_id')

        const [
            dataCom,
            dataNew
        ] = await Promise.all([
            dataCom_promise,
            dataNew_promise,
        ])

        const data = await NopHoSo.aggregate([
            { $match: { nhs_use_id: iduv, nhs_com_id: { $in: dataCom }, nhs_new_id: { $in: dataNew } } },
            { $sort: { nhs_time: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: "nhs_com_id",
                    foreignField: "usc_id",
                    as: 'company'
                }
            },
            {
                $lookup: {
                    from: "New",
                    localField: "nhs_new_id",
                    foreignField: "new_id",
                    as: 'new'
                }
            },
            {
                $unwind: {
                    path: "$company",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $unwind: {
                    path: "$new",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    new_id: '$new.new_id',
                    new_title: '$new.new_title',
                    new_alias: '$new.new_alias',
                    usc_id: "$company.usc_id",
                    usc_company: "$company.usc_company",
                    usc_alias: "$company.usc_alias",
                    nhs_time: 1,
                    result: 1,
                    id: 1,
                    new_han_nop: '$new.new_han_nop'
                }
            }
        ]);
        const total = await NopHoSo.countDocuments({ nhs_use_id: iduv, nhs_com_id: { $in: dataCom }, nhs_new_id: { $in: dataNew } });
        return functions.success(res, 'get data success', { total, data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// việc làm đã lưu
export const JobDidSave = async (req, res) => {
    try {
        const iduv = Number(req.iduv);
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;

        const dataCom = await UserCompany.distinct('usc_id')
        const dataNew = await New.distinct('new_id', { new_user_id: { $in: dataCom } })

        const data = await TblLuuTin.aggregate([
            { $match: { id_uv: iduv, id_tin: { $in: dataNew } } },
            { $sort: { id: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: "New",
                    localField: "id_tin",
                    foreignField: "new_id",
                    as: 'new'
                }
            },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: "new.new_user_id",
                    foreignField: "usc_id",
                    as: 'company'
                }
            },
            {
                $unwind: {
                    path: "$company",
                    preserveNullAndEmptyArrays: true
                }
            },
            { $unwind: { path: "$new", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    new_id: '$new.new_id',
                    new_title: '$new.new_title',
                    new_alias: '$new.new_alias',
                    new_han_nop: '$new.new_han_nop',
                    usc_id: "$company.usc_id",
                    usc_company: "$company.usc_company",
                    usc_alias: "$company.usc_alias",
                    create_time: 1,
                    id: 1
                }
            }
        ]);
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.create_time = new Date(element.create_time * 1000);
        }
        const total = await TblLuuTin.countDocuments({ id_uv: iduv, id_tin: { $in: dataNew } });
        return functions.success(res, 'get data success', { total, data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// lưu tin và xoá
export const SaveNew = async (req, res) => {
    try {
        const iduv = req.iduv;
        const id_tin = req.body.id_tin;
        if (id_tin) {
            const checkExists = await TblLuuTin.findOne({ id_uv: iduv, id_tin }).lean();
            let result = 0;
            if (checkExists) {
                await TblLuuTin.deleteOne({ id_uv: iduv, id_tin });
            } else {
                const id = await functions.getMaxId(TblLuuTin, 'id');
                await TblLuuTin.create({
                    id,
                    id_tin,
                    id_uv: iduv,
                    create_time: functions.getTime()
                });
                result = 1;
            }
            return functions.success(res, 'Success', { result_save: result });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// xoá việc làm đã ứng tuyển
export const DeleteJobDidApply = async (req, res) => {
    try {
        const iduv = req.iduv;
        const nhs_id = req.body.nhs_id;
        if (nhs_id) {
            const check = await NopHoSo.findOneAndDelete({ nhs_use_id: iduv, id: nhs_id });
            if (check) return functions.success(res, 'Deletion successful');
            return functions.setError(res, 'News not found', 404);
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// cho phép tìm kiếm ứng viên
export const AllowSearchCandi = async (req, res) => {
    try {
        const iduv = req.iduv;
        const value = Number(req.body.value);
        if (value || value === 0) {
            await Users.findOneAndUpdate({ use_id: iduv }, { $set: { usc_search: value, use_update_time: functions.getTime() } });
            return functions.success(res, 'Update successfully', { result_search: value });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// làm mới hồ sơ
export const RefreshProfileCandi = async (req, res) => {
    try {
        const iduv = req.iduv;
        await Users.findOneAndUpdate({ use_id: iduv }, { use_update_time: functions.getTime() });
        return functions.success(res, 'success');
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// CV xin việc
export const ManageCvCandiDidCreated = async (req, res) => {
    try {
        const iduv = req.iduv;
        const cvXinViecCuaToi = await SaveCandidateCv.aggregate([
            { $match: { iduser: iduv } },
            { $sort: { cv_order: -1, timeedit: 1, id: -1 } },
            {
                $lookup: {
                    from: "SampleCv",
                    localField: "idcv",
                    foreignField: "id",
                    as: "samplecv"
                }
            },
            {
                $unwind: {
                    path: "$samplecv",
                    preserveNullAndEmptyArrays: true,
                }
            },
            {
                $project: {
                    idcv: 1,
                    html: 1,
                    name_cv: 1,
                    alias: "$samplecv.alias",
                    id: 1,
                    name: "$samplecv.name",
                    cv_order: 1,
                    iduser: 1,

                }
            },
        ]);

        const cvDaLuu = await CvEmotion.aggregate([
            { $match: { type: 1, iduser: iduv } },
            { $sort: { idcv: -1 } },
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
                    alias: "$samplecv.alias",
                    image: "$samplecv.image",
                    idcv: 1,
                    emo_id: 1,
                    name: "$samplecv.name",
                }
            },
        ]);

        for (let i = 0; i < cvDaLuu.length; i++) {
            const element = cvDaLuu[i];
            element.image = `${process.env.DOMAIN_API}/pictures/sample_cv/${element.image}`;
        }

        for (let i = 0; i < cvXinViecCuaToi.length; i++) {
            const element = cvXinViecCuaToi[i];
            // const result = JSON.parse(element.html);
            const result = functions.safeJSONparse(element.html);
            element.cv_title = result?.cv_title ? result.cv_title : 'Not update yet';
            element.name_cv = `${process.env.DOMAIN_API}/upload/cv_uv/uv_${iduv}/${element.name_cv}`;
            element.cv_pdf = `${process.env.DOMAIN_API}/dowload/cv_pdf/user_${iduv}/cvid_${element.idcv}/${element.idcv}-topcv1s`;
            element.cv_pdf.replace('.pdf', '');
        }
        return functions.success(res, "get data success", { cvXinViecCuaToi, cvDaLuu });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// xử lí người dùng tải file cv
export const DowloadFileCVPDF = async (req, res) => {
    try {
        const iduv = req.params.iduv || -1;
        const name = req.params.name;
        const id = req.params.id;

        const result = await Users.findOne({ use_id: iduv }, { use_name: 1 }).lean();
        const cv = await SaveCandidateCv.findOne({ iduser: iduv, idcv: id }).lean();
        if (result && cv && iduv && id) {
            // Add lượt tải
            SampleCv.findOneAndUpdate({ id: id }, { $inc: { download: 1 } })
            const link = `http://localhost:9020/xem-cv2-u${iduv}-c${id}`;

            let pdf = await functions.renderPdfFromUrlNew(link)
            if (pdf.result) {
                let buffer = pdf.file
                buffer = new Buffer.from(buffer, "base64");
                let base64StringPDF = buffer.toString("base64");


                return functions.success(res, "Success", { base64StringPDF })
            }
            return functions.setError(res, 'download failed');
            // res.setHeader('Content-disposition', 'attachment; filename=test.pdf');
            // res.setHeader('Content-type', 'application/pdf');


            // return res.download(`./dowload/cv_pdf/user_${iduv}/cvid_${id}/${name}.pdf`, `${result.use_name}.pdf`);
        }
        return functions.setError(res, 'download failed');
    } catch (error) {
        return functions.setError(res, 'download failed');
    }
};

// chi tiết CV 
export const DetailCV = async (req, res) => {
    try {
        const id = !isNaN(Number(req.body.id)) ? req.body.id : (await functions.getTokenUser(req));
        const idcv = Number(req.body.idcv);
        const data = {};
        if (idcv) {
            if (id) {
                const checkExists = await SaveCandidateCv.findOne({ idcv: idcv, iduser: id }).lean();
                if (checkExists) {
                    if (checkExists?.nameimg && typeof checkExists.nameimg === 'string') {
                        checkExists.nameimg = `${process.env.DOMAIN_API}` + checkExists.nameimg.replace('..', '').replace('./', '/')
                    }
                    data.result = checkExists;
                    data.type = 1;
                    let alias = '';
                    if (checkExists?.idcv) {
                        const sample = await SampleCv.findOne({ id: idcv }).lean()
                        if (sample) {
                            alias = sample.alias;
                        }
                    }
                    data.alias = alias
                } else {
                    const result = await SampleCv.findOne({ id: idcv }).lean();
                    const user = await Users.findOne({ use_id: id }, { use_mail: 1, use_phone: 1, use_phone: 1, address: 1 }).lean();
                    data.result = result;
                    data.type = 0;
                    data.user = user;
                }
            } else {
                const result = await SampleCv.findOne({ id: idcv }).lean();
                data.result = result;
                data.type = 0;
            }
            return functions.success(res, 'get data success', { data });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// sửa CV
export const UpdateInfoCv = async (req, res) => {
    try {
        const { idcv, lang, height_cv, html, cv_title } = req.body;
        if (html) {
            const iduv = req.iduv;

            const JsonCV = JSON.parse(html);

            JsonCV.name = JsonCV.name.replaceAll('+', ' ');
            console.log('jsoncv', JsonCV)

            const checkExists = await Users.findOne({ use_id: iduv }, { use_create_time: 1, use_logo: 1 }).lean();

            const cv_name = await SampleCv.findOne({ id: idcv }).lean();

            const time = functions.getTime();

            // Encode name
            // const nameNoHide = functions.randomString2([`${iduv}`, `${time}`])

            const updateSave = {
                lang,
                timeedit: functions.getTime(),
                height_cv,
                cv_name: cv_name.name,
                name_cv_hide: `u_cv_hide_${time}.png`,
                name_cv: `u_cv_${time}.png`,
                cv_order: 0,
                html: JSON.stringify(JsonCV),
            };
            const idSave = await functions.getMaxId(SaveCandidateCv, 'id');

            const createSave = {
                id: idSave,
                iduser: iduv,
                idcv,
                lang,
                status: 2,
                cv: 0,
                createdate: functions.getTime(),
                timeedit: functions.getTime(),
                height_cv,
                cv_name: cv_name.name,
                name_cv_hide: `u_cv_hide_${time}.png`,
                name_cv: `u_cv_${time}.png`,
                cv_order: 0,
                html: JSON.stringify(JsonCV),
            };
            const updateUsers = {
                use_update_time: functions.getTime(),
                use_name: JsonCV.name,
                use_job_name: cv_title,
            };
            if (JsonCV.avatar !== "/images/cv/no_avatar.jpg" && !JsonCV.avatar.startsWith("http://localhost:3050/pictures")) {
                const date = functions.getDate(checkExists.use_create_time * 1000);

                const nameFileOld = JsonCV.avatar.split('/').pop();

                const logoCV = `./upload/cv_uv/uv_${iduv}/${nameFileOld}`;

                const avatar = `./pictures/${date}/${nameFileOld}`;

                JsonCV.avatar = `http://localhost:3050/upload/cv_uv/uv_${iduv}/${nameFileOld}`;

                const linkTmp = `./tmp/${nameFileOld}`;

                const html_new = JSON.stringify(JsonCV);

                await functions.copyFile(linkTmp, logoCV, `./upload/cv_uv/uv_${iduv}`);

                await functions.copyFile(linkTmp, avatar, `./pictures/${date}`);

                functions.deleteFile(linkTmp);

                updateUsers.use_logo = nameFileOld;

                updateSave.nameimg = logoCV;

                createSave.nameimg = logoCV;

                updateSave.html = html_new;

                createSave.html = html_new;

                if (checkExists.use_logo && checkExists.use_logo !== '') {
                    const path = `./pictures/${date}/${checkExists.use_logo}`;
                    functions.deleteFile(path);
                }
            }
            const checkSaveExists = await SaveCandidateCv.findOne({ iduser: iduv, idcv }, { name_cv_hide: 1, name_cv: 1, nameimg: 1 }).lean();
            if (checkSaveExists) {

                const path = `./upload/cv_uv/uv_${iduv}/${checkSaveExists.name_cv}`;

                const pathHide = `./upload/cv_uv/uv_${iduv}/${checkSaveExists.name_cv_hide}`;

                // const pathLogo = checkSaveExists.nameimg;
                // console.log(pathLogo)

                // pathLogo && functions.deleteFile(pathLogo);

                functions.deleteFile(path);

                functions.deleteFile(pathHide);

            }


            const linkHide = `http://localhost:9020/xem-cv-u${iduv}-c${idcv}-t1`;

            const linkNoHide = `http://localhost:9020/xem-cv-u${iduv}-c${idcv}-t0`;
            // await Promise.all([
            functions.renderImageFromUrl(
                linkHide,
                `./upload/cv_uv/uv_${iduv}`,
                `./upload/cv_uv/uv_${iduv}/u_cv_hide_${time}.png`,
                iduv),
                functions.renderImageFromUrl(
                    linkNoHide,
                    `./upload/cv_uv/uv_${iduv}`,
                    `./upload/cv_uv/uv_${iduv}/u_cv_${time}.png`,
                    iduv),
                // ]);
                await SampleCv.findOneAndUpdate({ id: idcv }, { $inc: { download: 1 } })
            const link = `http://localhost:9020/xem-cv2-u${iduv}-c${idcv}`;

            // functions.renderPdfFromUrl(link, iduv, idcv);

            await Users.findOneAndUpdate({ use_id: iduv }, updateUsers);

            const uv = await Users.findOne({ use_id: iduv })
            // Trong tình huống UV chưa đồng bộ do thiếu CV
            // if (uv?.idTimViec365 == 0) {
            if (checkSaveExists) {
                await SaveCandidateCv.findOneAndUpdate({ iduser: iduv, idcv }, updateSave);
            }
            else await SaveCandidateCv.create(createSave);

            let base64StringPDF = ""
            let pdf = await functions.renderPdfFromUrlNew(link)
            // console.log(">>> Check pdf: ", pdf);
            if (pdf.result) {
                let buffer = pdf.file
                buffer = new Buffer.from(buffer, "base64");
                base64StringPDF = buffer.toString("base64");
            }

            return functions.success(res, 'Success', {
                use_id: iduv,
                base64StringPDF
            });


        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        console.log(error);
        return functions.setError(res, error.message);
    }
};

// update cv đại diện
export const UpdateCVRepresent = async (req, res) => {
    try {
        const idcv = req.body.idcv;
        const iduv = req.iduv;
        if (idcv) {
            await SaveCandidateCv.findOneAndUpdate({ idcv, iduser: iduv }, {
                cv_order: 1,
            });
            await SaveCandidateCv.updateMany({ idcv: { $ne: idcv }, iduser: iduv }, {
                cv_order: 0,
            });
            return functions.success(res, 'success');
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// xoá cv
export const CandiDeleteCV = async (req, res) => {
    try {
        // await SaveCandidateCv.deleteMany({});
        const idcv = req.body.idcv;
        const iduv = req.iduv;
        if (idcv) {
            const checkExists = await SaveCandidateCv.findOne({ idcv, iduser: iduv }, { nameimg: 1, name_cv: 1, name_cv_hide: 1 }).lean();
            if (checkExists) {
                const pathPDF = `./dowload/cv_pdf/user_${iduv}/cvid_${idcv}/${idcv}-job247.pdf`;
                const pathLogoCV = checkExists.nameimg;
                const pathCvImage = `./upload/cv_uv/uv_${iduv}/${checkExists.name_cv}`;
                const pathCvHideImage = `./upload/cv_uv/uv_${iduv}/${checkExists.name_cv_hide}`;
                await SaveCandidateCv.deleteOne({ idcv, iduser: iduv });
                functions.deleteFile(pathPDF);
                functions.deleteFile(pathLogoCV);
                functions.deleteFile(pathCvImage);
                functions.deleteFile(pathCvHideImage);

                return functions.success(res, 'success');
            }
            return functions.setError(res, 'CV Not found', 400);
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// thư xin việc
export const LetterApplication = async (req, res) => {
    try {
        const iduv = req.iduv;
        const thuXinViecCuaToi = await SaveCandidateLt.aggregate([
            { $match: { iduser: iduv } },
            { $sort: { id: -1 } },
            {
                $lookup: {
                    from: "SampleLetter",
                    localField: "idlt",
                    foreignField: "id",
                    as: "sampleletter"
                }
            },
            { $unwind: "$sampleletter" },
            {
                $project: {
                    nameimg: 1,
                    idlt: 1,
                    iduser: 1,
                    alias: "$sampleletter.alias",
                    name: "$sampleletter.name"
                }
            }
        ]);

        const thuXinViecDaLuu = await CvEmotion.aggregate([
            { $match: { type: 2, iduser: iduv } },
            { $sort: { idcv: -1 } },
            {
                $lookup: {
                    from: "SampleLetter",
                    localField: "idcv",
                    foreignField: "id",
                    as: "samplecv"
                }
            },
            { $unwind: "$samplecv" },
            {
                $project: {
                    alias: "$samplecv.alias",
                    image: "$samplecv.image",
                    idcv: 1,
                    emo_id: 1,
                    name: "$samplecv.name",
                }
            },
        ]);
        for (let i = 0; i < thuXinViecCuaToi.length; i++) {
            const element = thuXinViecCuaToi[i];
            element.nameimg = `${process.env.DOMAIN_API}/upload/lt_uv/uv_${iduv}/${element.nameimg}.png`;
            element.linkDowload = `${process.env.DOMAIN_API}/dowload/pdf/user_${iduv}/ltid_${element.idlt}`;
        }
        for (let i = 0; i < thuXinViecDaLuu.length; i++) {
            const element = thuXinViecDaLuu[i];
            element.nameimg = `${process.env.DOMAIN_API}/upload/letter/${element.alias}/${element.image}`;
        }
        return functions.success(res, 'success', { thuXinViecCuaToi, thuXinViecDaLuu });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// chi tiết thư xin việc 
export const DetailLetter = async (req, res) => {
    try {
        const iduser = req.iduv;
        const idletter = Number(req.body.idletter);
        const data = {};
        if (idletter) {
            const checkExists = await SaveCandidateLt.findOne({ idlt: idletter, iduser }).lean();
            if (checkExists) {
                data.result = checkExists;
                data.type = 1;
            } else {
                const result = await SampleLetter.findOne({ id: idletter }).lean();

                const user = await Users.findOne({ use_id: iduser }, { use_mail: 1, use_phone: 1, use_phone: 1, address: 1 }).lean();
                data.user = user;
                data.result = result;
                data.type = 0;
            }
            return functions.success(res, 'get data success', { data });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// tạo, sửa thư xin việc
export const UpdateLetter = async (req, res) => {
    try {
        const { html, lang, idlt } = req.body;
        const iduv = req.iduv;
        const time = functions.getTime();
        if (html && lang && idlt) {
            const JsonLetter = JSON.parse(html);
            if (JsonLetter.avatar !== "/images/cv/mau-cv/no_avatar.jpg") {

                const avatarLetter = JsonLetter.avatar.split('/').pop();

                const linkAvatarLetterTmp = `./tmp/${avatarLetter}`;

                const linkAvatarLetter = `./upload/lt_uv/uv_${iduv}/${avatarLetter}`;
                JsonLetter.avatar = `${process.env.DOMAIN_API}/upload/lt_uv/uv_${iduv}/${avatarLetter}`;
                await functions.copyFile(linkAvatarLetterTmp, linkAvatarLetter, `./upload/lt_uv/uv_${iduv}`);
                functions.deleteFile(linkAvatarLetterTmp);
            }
            const htmlNew = JSON.stringify(JsonLetter);
            const link = `http://work247.vn/xem-thu-u${iduv}-c${idlt}`;

            functions.renderImageFromUrl(
                link,
                `./upload/lt_uv/uv_${iduv}`,
                `./upload/lt_uv/uv_${iduv}/u_lt_${time}.png`,
                iduv);

            const id = await functions.getMaxId(SaveCandidateLt, 'id');

            const checkExistsSave = await SaveCandidateLt.findOne({ iduser: iduv, idlt }, { nameimg: 1 }).lean();
            if (checkExistsSave) {
                const path = `./upload/lt_uv/uv_${iduv}/${checkExistsSave.nameimg}.png`;
                functions.deleteFile(path);

            }
            const createSave = {
                iduser: iduv,
                id,
                idlt,
                lang,
                html: htmlNew,
                createdate: time,
                nameimg: `u_lt_${time}`,
            };
            const updateSave = {
                lang,
                html: htmlNew,
                timeedit: time,
                nameimg: `u_lt_${time}`,
            };
            if (checkExistsSave) await SaveCandidateLt.findOneAndUpdate({ iduser: iduv, idlt }, updateSave);
            else await SaveCandidateLt.create(createSave);
            return functions.success(res, 'success');
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// xử lí người dùng tải file thư xin việc
export const DowloadFileLetterPDF = async (req, res) => {
    try {
        const iduv = req.params.iduv || -1;
        const id = req.params.id;
        const result = await Users.findOne({ use_id: iduv }, { use_name: 1 }).lean();
        if (result && iduv && id) {
            const link = `https://work247.vn/xem-thu-u${iduv}-c${id}`;
            const time = functions.getTime();
            const path = `./tmp/dowload/file_${time}`;
            functions.renderLetterPdfFromUrl(link, path);
            return res.download(`./tmp/dowload/file_${time}`, `${result.use_name}.pdf`);
        }
        return functions.setError(res, 'download failed');
    } catch (error) {
        return functions.setError(res, 'download failed');
    }
};

// tạo, sửa đơn xin việc
export const CreateJobAppli = async (req, res) => {
    try {
        const iduv = req.iduv;
        const { idappli, lang, html } = req.body;
        if (idappli && lang && html) {
            const checkExists = await SaveCandidateApply.findOne({ idappli, iduser: iduv }).lean();
            const id = await functions.getMaxId(SaveCandidateApply, 'id');
            const time = functions.getTime();
            const updateItemSave = {
                lang,
                html,
                timeedit: time,
                name_appli: `u_appli_${time}.png`
            };
            const createItemSave = {
                id,
                iduser: iduv,
                idappli: idappli,
                lang,
                html,
                createdate: time,
                name_appli: `u_appli_${time}.png`
            };
            if (checkExists) {
                functions.deleteFile(`./upload/appli_uv/uv_${iduv}/${checkExists.name_appli}`);
            }
            if (checkExists) await SaveCandidateApply.findOneAndUpdate({ iduser: iduv, idappli }, updateItemSave);
            else await SaveCandidateApply.create(createItemSave);

            const link = `https://work247.vn/xem-don-u${iduv}-c${idappli}`;

            functions.renderImageFromUrl(
                link,
                `./upload/appli_uv/uv_${iduv}`,
                `./upload/appli_uv/uv_${iduv}/u_appli_${time}.png`,
                iduv);

            return functions.success(res, 'success');
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// chi tiết đơn xin việc
export const DetailJobApplication = async (req, res) => {
    try {
        const iduv = req.iduv;
        const idappli = req.body.idappli;
        const data = {};
        if (idappli) {
            const checkExitsts = await SaveCandidateApply.findOne({ idappli, iduser: iduv }).lean();
            if (checkExitsts) {
                data.result = checkExitsts;
                data.type = 1;
            } else {
                const result = await SampleApply.findOne({ id: idappli }).lean();
                data.result = result;
                data.type = 2;
            }
            return functions.success(res, 'get data success', { data });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// đơn xin việc
export const JobApplication = async (req, res) => {
    try {
        const iduv = req.iduv;
        const donXinViecCuaToi = await SaveCandidateApply.aggregate([
            { $match: { iduser: iduv } },
            { $sort: { id: -1 } },
            {
                $lookup: {
                    from: "SampleApply",
                    localField: "idappli",
                    foreignField: "id",
                    as: "sampleapply"
                }
            },
            { $unwind: "$sampleapply" },
            {
                $project: {
                    name_appli: 1,
                    image: "$sampleapply.image",
                    idappli: 1,
                    iduser: 1,
                    alias: "$sampleapply.alias",
                    id: 1,
                    name: "$sampleapply.name"
                }
            }
        ]);

        const donXinViecDaLuu = await CvEmotion.aggregate([
            { $match: { type: 3, iduser: iduv } },
            { $sort: { idcv: -1 } },
            {
                $lookup: {
                    from: "SampleApply",
                    localField: "idcv",
                    foreignField: "id",
                    as: "samplecv"
                }
            },
            { $unwind: "$samplecv" },
            {
                $project: {
                    alias: "$samplecv.alias",
                    image: "$samplecv.image",
                    idcv: 1,
                    emo_id: 1,
                    name: "$samplecv.name",
                }
            },
        ]);
        const donXinViecCuaToiLength = donXinViecCuaToi.length;
        const donXinViecDaLuuLength = donXinViecDaLuu.length;
        for (let i = 0; i < donXinViecCuaToiLength; i++) {
            const element = donXinViecCuaToi[i];
            if (element.name_appli && element.name_appli !== "") {
                element.src = `${process.env.DOMAIN_API}/upload/appli_uv/uv_${iduv}/${element.name_appli}`;
            } else {
                element.src = `${process.env.DOMAIN_API}/upload/appli/${element.alias}/${element.image}`;
            }
            element.linkDowload = `${process.env.DOMAIN_API}/dowload/pdf/user_${iduv}/jobid_${element.idappli}`;
        }

        for (let i = 0; i < donXinViecDaLuuLength; i++) {
            const element = donXinViecDaLuu[i];
            element.src = `${process.env.DOMAIN_API}/upload/appli/${element.alias}/${element.image}`;
        }
        return functions.success(res, 'get data success', { donXinViecCuaToi, donXinViecDaLuu });
    } catch (error) {
        return functions.setError(res, error.message, error);
    }
};

// xử lí người dùng tải file thư xin việc
export const DowloadFileJobPDF = async (req, res) => {
    try {
        const iduv = req.params.iduv || -1;
        const id = req.params.id;
        const result = await Users.findOne({ use_id: iduv }, { use_name: 1 }).lean();
        if (result && iduv && id) {
            const link = `https://work247.vn/xem-don-u${iduv}-c${id}`;
            const time = functions.getTime();
            const path = `./tmp/dowload/file_${time}`;
            functions.renderLetterPdfFromUrl(link, path);
            return res.download(`./tmp/dowload/file_${time}`, `${result.use_name}.pdf`);
        }
        return functions.setError(res, 'download failed');
    } catch (error) {
        return functions.setError(res, 'download failed');
    }
};

// lưu, xoá lưu thư xin việc
export const SaveLetter = async (req, res) => {
    try {
        const { id } = req.body;
        const iduv = req.iduv;
        if (id) {
            const emo_id = await functions.getMaxId(CvEmotion, 'emo_id');
            const check = await CvEmotion.findOne({ type: 2, iduser: iduv, idcv: id });
            if (check) await CvEmotion.deleteOne({ type: 2, iduser: iduv, idcv: id });
            else await CvEmotion.create({
                emo_id,
                idcv: id,
                iduser: iduv,
                type: 2,
                emo_create_time: functions.getTime()
            });
            const type = check ? 1 : 2;
            return functions.success(res, 'success', { type });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// lưu, xoá CV
export const SaveCV = async (req, res) => {
    try {
        const { id } = req.body;
        const iduv = req.iduv;
        if (id) {
            const emo_id = await functions.getMaxId(CvEmotion, 'emo_id');
            const check = await CvEmotion.findOne({ type: 1, iduser: iduv, idcv: id });
            if (check) await CvEmotion.deleteOne({ type: 1, iduser: iduv, idcv: id });
            else await CvEmotion.create({
                emo_id,
                idcv: id,
                iduser: iduv,
                type: 1,
                emo_create_time: functions.getTime()
            });
            const type = check ? 1 : 2;
            return functions.success(res, 'success', { type });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// lưu, xoá đơn xin việc
export const SaveJob = async (req, res) => {
    try {
        const { id } = req.body;
        const iduv = req.iduv;
        if (id) {
            const emo_id = await functions.getMaxId(CvEmotion, 'emo_id');
            const check = await CvEmotion.findOne({ type: 3, iduser: iduv, idcv: id });
            if (check) await CvEmotion.deleteOne({ type: 3, iduser: iduv, idcv: id });
            else await CvEmotion.create({
                emo_id,
                idcv: id,
                iduser: iduv,
                type: 3,
                emo_create_time: functions.getTime()
            });
            const type = check ? 1 : 2;
            return functions.success(res, 'success', { type });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// xoá đơn xin việc
export const DeleteJobApply = async (req, res) => {
    try {
        const id = req.body.id;
        const iduv = req.iduv;
        if (id) {
            const check = await SaveCandidateApply.findOneAndDelete({ idappli: id, iduser: iduv });
            if (check) {
                const result = await SaveCandidateApply.findOne({ idappli: id, iduser: iduv }).lean();
                functions.deleteFile(`./upload/appli_uv/uv_${iduv}/${result.nameimg}.png`);
                return functions.success(res, 'success');
            }
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// xoá thư xin việc
export const DeleteLetterApply = async (req, res) => {
    try {
        const id = req.body.id;
        const iduv = req.iduv;
        if (id) {
            const check = await SaveCandidateLt.findOneAndDelete({ idlt: id, iduser: iduv });
            if (check) {
                const result = await SaveCandidateLt.findOne({ idlt: id, iduser: iduv }).lean();
                functions.deleteFile(`./upload/lt_uv/uv_${iduv}/${result.nameimg}.png`);
                return functions.success(res, 'success');
            }
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// chi tiết ứng viên
export const DetailCandi = async (req, res) => {
    try {
        const id = Number(req.body.id);
        const Cityy = await City.find({}, { cit_id: 1, cit_name: 1 }).lean();

        if (id) {
            const data = await Users.findOne({ use_id: id }, {
                use_name: 1,
                use_id: 1,
                address: 1,
                cit_name: 1,
                cat_name: 1,
                use_job_name: 1,
                exp_years: 1,
                salary: 1,
                use_view_count: 1,
                gender: 1,
                use_create_time: 1,
                use_logo: 1,
                birthday: 1,
                use_mail: 1,
                use_phone: 1,
                use_nganh_nghe: 1,
                use_city: 1,
                use_district: 1,
                use_city_job: 1,
                use_update_time: 1,
                use_district_job: 1,
                use_authentic: 1,
            }).lean();

            if (data) {
                data.xemTT = false;
                data.luuHoSo = false;

                const iduser = await functions.getTokenUser(req, res);
                const userType = await functions.getUserType(req, res);

                if (iduser) {
                    const checkTBlPointUsed = await TblPointUsed.findOne({ usc_id: iduser, use_id: id }, { id_p: 1, type: 1 }).lean();

                    if (!checkTBlPointUsed) {
                        const id_p = await functions.getMaxId(TblPointUsed, 'id_p');
                        await TblPointUsed.create({
                            id_p,
                            usc_id: iduser,
                            use_id: id,
                            point: 0,
                            type: 0,
                            note_uv: "",
                            used_day: functions.getTime()
                        });
                    } else if (checkTBlPointUsed.type !== 0) {
                        data.xemTT = true;
                    }

                    const luuHoSo = await TblLuuHoSoUv.findOne({ id_ntd: iduser, id_uv: id }).lean();

                    if (luuHoSo) {
                        data.luuHoSo = true;
                    }

                    if (userType === 1) {
                        const checkNopHoSo = await NopHoSo.findOne({ nhs_com_id: iduser, nhs_use_id: id }).lean();

                        if (checkNopHoSo) {
                            data.xemTT = true;
                        }
                    }
                }

                if (data.use_nganh_nghe.length > 0) {
                    const job = await Category.find({}, { cat_id: 1, cat_name: 1 }).lean();

                    for (let i = 0; i < data.use_nganh_nghe.length; i++) {
                        const element = data.use_nganh_nghe[i];
                        const jobName = job.find(itemm => itemm.cat_id == element.id);

                        if (jobName) {
                            element.jobName = jobName.cat_name;
                        }
                    }
                }

                const resultCvUpload = await UserCvUpload.findOne({ use_id: id }, { link: 1, link_scan: 1 }).lean();

                if (resultCvUpload) {
                    data.arr_type = '<div class="item"><a class="" data-id="cv_step_2">tệp đính kèm</a></div>';
                    data.arr_body = 'step_2';
                    resultCvUpload.link = resultCvUpload.link.replace('../', '/');
                    data.step2_img = `${process.env.DOMAIN_API}/${resultCvUpload.link}`;
                    data.img_demo = resultCvUpload.link_scan ? `https://anhhidecv.timviec365.vn:9000/${resultCvUpload.link_scan}` : `/images/cv_step_2.png`;
                }

                const resultSaveCandiCv = await SaveCandidateCv.findOne({ iduser: id }, { name_cv: 1, name_cv_hide: 1, id: 1 })
                    .sort({ cv_order: -1, timeedit:-1,createdate: -1 }).lean();

                if (resultSaveCandiCv) {
                    data.arr_type = '<div class="item"><a class="" data-id="cv_step_3">cv xin việc</a></div>';
                    data.arr_body = 'step_3';
                    data.img = `${process.env.DOMAIN_API}/upload/cv_uv/uv_${id}/${resultSaveCandiCv.name_cv_hide}`;
                    data.img_full = `${process.env.DOMAIN_API}/upload/cv_uv/uv_${id}/${resultSaveCandiCv.name_cv}`;
                }

                const resultVideoUpload = await UserVidUpload.findOne({ use_id: id }, { link: 1 }).lean();

                if (resultVideoUpload) {
                    data.video_link = `${process.env.DOMAIN_API}/${resultVideoUpload.link}`;
                }

                data.use_logo = functions.getAvatarCandi(data.use_create_time, data.use_logo);

                const resultBangCap = await UserHocVan.find({ use_id: id }).lean();
                data.hocVan = resultBangCap;

                const resultNgoaiNgu = await UseNgoaiNgu.find({ use_id: id }).lean();
                data.NgoaiNgu = resultNgoaiNgu;

                const resultKinhNghiem = await UseKinhNghiem.findOne({ use_id: id }).sort({ id_kinhnghiem: -1 }).lean();
                data.KinhNghiem = resultKinhNghiem;

                const resultThamChieu = await UserThamChieu.findOne({ id_user: id }).lean();
                data.thamChieu = resultThamChieu;

                // Hide sensitive data if not authorized
                if (!iduser || !data.xemTT) {
                    data.use_mail = '';
                    data.use_phone = '';
                    data.use_mail = '';
                    data.step2_img = '';
                    data.img_full = '';
                }

                const percent = await percentHoSoComplete(id);
                data.percentHoSo = percent;

                if (userType === 1) {
                    await Users.updateOne({ use_id: id }, { $inc: { use_view_count: +1 } });
                }

                const nganhNgheIds = data.use_nganh_nghe.map(nganh => nganh.id);
                const similarUsers = await Users.aggregate([
                    {
                        $match: {
                            use_id: { $ne: id },
                            checkImgCV:1,
                            $or: [
                                { use_job_name: data.use_job_name },
                                { use_nganh_nghe: { $elemMatch: { id: { $in: nganhNgheIds } } } }
                            ]
                        }
                    },
                    {
                        $lookup: {
                            from: "UserCvUpload",
                            localField: "use_id",
                            foreignField: "use_id",
                            as: "userCvUploads"
                        }
                    },
                    {
                        $lookup: {
                            from: "SaveCandidateCv",
                            localField: "use_id",
                            foreignField: "iduser",
                            as: "saveCandidateCvs"
                        }
                    },
                    {
                        $match: {
                            $or: [
                                { "userCvUploads.use_id": { $exists: true, $ne: [] } },
                                { "saveCandidateCvs.iduser": { $exists: true, $ne: [] } }
                            ]
                        }
                    },
                    {
                        $sort: {
                            use_id: -1
                        }
                    },
                    {
                        $project: {
                            use_name: 1,
                            use_id: 1,
                            cit_name: 1,
                            cat_name: 1,
                            use_job_name: 1,
                            exp_years: 1,
                            salary: 1,
                            use_view_count: 1,
                            gender: 1,
                            use_create_time: 1,
                            use_logo: 1,
                            use_nganh_nghe: 1,
                            use_city: 1,
                            use_district: 1,
                            use_city_job: 1,
                            use_update_time: 1,
                            use_district_job: 1
                        }
                    },
                    { $limit: 10 }
                ]).exec();
                // const similarUsers = await Users.find({
                //     use_id: { $ne: id },
                //     $or: [
                //         { use_job_name: data.use_job_name },
                //         { use_nganh_nghe: { $elemMatch: { id: { $in: nganhNgheIds } } } }
                //     ]
                // }, {
                //     use_name: 1,
                //     use_id: 1,
                //     cit_name: 1,
                //     cat_name: 1,
                //     use_job_name: 1,
                //     exp_years: 1,
                //     salary: 1,
                //     use_view_count: 1,
                //     gender: 1,
                //     use_create_time: 1,
                //     use_logo: 1,
                //     use_nganh_nghe: 1,
                //     use_city: 1,
                //     use_district: 1,
                //     use_city_job: 1,
                //     use_update_time: 1,
                //     use_hocvan: 1,
                //     use_district_job: 1,
                // }).limit(10).lean();

                for (let i = 0; i < similarUsers.length; i++) {
                    const element = similarUsers[i];
                    element.use_logo = functions.getAvatarCandi(element.use_create_time, element.use_logo);
                    const nameCity = element.use_city_job;
                    const cityArr = [];

                    if (nameCity.length > 0) {
                        nameCity.forEach(itemm => {
                            const city = Cityy.find(item => item.cit_id == itemm.id);
                            if (city) cityArr.push(city.cit_name);
                        });
                    }

                    element.use_city_job = cityArr;
                }

                return functions.success(res, 'Success', { data, similarUsers });
            }

            return functions.setError(res, 'not found', 404);
        }

        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// ứng tuyển
export const ApplyJob = async (req, res) => {
    try {
        const { id, lt } = req.body;
        const iduv = req.iduv;

        // Cần phải check xác thực 
        const checkUser = await Users.findOne({ use_id: iduv })
        if (checkUser) {
            const auth = checkUser?.use_authentic || 0
            if (auth == 0) {
                return functions.setError(res, 'Action requires account verification', 401)
            }
        } else {
            return functions.setError(res, 'Candidate does not exist', 404)
        }

        const checkExist = await NopHoSo.findOne({ nhs_use_id: iduv, nhs_new_id: id }).lean();
        if (checkExist) {
            // await NopHoSo.findOneAndDelete({ nhs_use_id: iduv, nhs_new_id: id })
            const nhs_com_id = await New.findOne({ new_id: id }, { new_user_id: 1 }).lean()
            if (nhs_com_id) {
                const conditions = {
                    // id: _id,
                    nhs_use_id: iduv,
                    nhs_com_id: nhs_com_id.new_user_id,
                    nhs_new_id: id,
                    nhs_time: new Date().getTime() / 1000,
                    letter: lt || "",
                };
                // await NopHoSo.create(conditions);
                await NopHoSo.findOneAndUpdate({ id: checkExist.id }, conditions)
                return functions.success(res, 'success', { type: checkExist ? 0 : 1 })
            }
            return functions.setError(res, 'not found New', 404)
        }
        else {
            const _id = await functions.getMaxId(NopHoSo, 'id');
            const nhs_com_id = await New.findOne({ new_id: id }, { new_user_id: 1 }).lean()
            if (nhs_com_id) {
                const conditions = {
                    id: _id,
                    nhs_use_id: iduv,
                    nhs_com_id: nhs_com_id.new_user_id,
                    nhs_new_id: id,
                    nhs_time: new Date().getTime() / 1000,
                    letter: lt || "",
                };
                await NopHoSo.create(conditions);
                return functions.success(res, 'success', { type: checkExist ? 0 : 1 })
            }
            return functions.setError(res, 'not found New', 404)
        }
        // return functions.success(res, 'success', { type: checkExist ? 0 : 1 })
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// hủy ứng tuyển
export const UnApplyJob = async (req, res) => {
    try {
        const { id } = req.body;
        const iduv = req.iduv;
        const checkExist = await NopHoSo.findOne({ nhs_use_id: iduv, nhs_new_id: id }).lean();
        if (checkExist) {
            await NopHoSo.findOneAndDelete({ nhs_use_id: iduv, nhs_new_id: id })
            return functions.success(res, 'success', { type: checkExist ? 0 : 1 })
        }
        return functions.setError(res, 'not found', 404)
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Kiểm tra mức độ hoàn thiện hồ sơ của ứng viên
const percentHoSoComplete = async (iduv) => {
    try {
        let percent = 0
        const existUser = await Users.findOne({ use_id: iduv })
        if (existUser) {
            const thamChieu = await UserThamChieu.findOne({ id_user: iduv }, { id_thamchieu: 1 })
            if (thamChieu) percent += 12.5;
            const kinhNghiem = await UseKinhNghiem.findOne({ use_id: iduv }, { id_kinhnghiem: 1 })
            if (kinhNghiem) percent += 12.5;
            const ngoaiNgu = await UseNgoaiNgu.findOne({ use_id: iduv }, { id_ngoaingu: 1 })
            if (ngoaiNgu) percent += 12.5;
            const bangCap = await UserHocVan.findOne({ use_id: iduv }, { id_hocvan: 1 })
            if (bangCap) percent += 12.5;

            return percent
        } else {
            return 0
        }
    } catch (error) {
        console.log(error.message)
        return 0
    }
}

// Lấy dữ liệu hồ sơ đã tải 
export const UploadedFiles = async (req, res) => {
    try {
        const iduv = req.iduv;
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;

        let data = []
        const hosoList = await UserCvUpload
            .find({ use_id: iduv })
            .sort({ id_upload: -1 })
        // .skip(skip)
        // .limit(limit)
        const videoList = await UserVidUpload
            .find({ use_id: iduv })
            .sort({ id_upload: -1 })

        // 1 - văn bản, ảnh | 2 - video 
        for (let i = 0; i < videoList.length; i++) {
            const element = videoList[i];
            data.push({
                hoso_type: 2,
                file_name: element.link.split('/').pop(),
                file_time: element.timecreate,
                file_type: element.link.split('.').pop(),
                file_link: `${process.env.DOMAIN_API}/${element.link}`,
                file_id: element.id_upload
            })
        }
        for (let i = 0; i < hosoList.length; i++) {
            const element = hosoList[i];
            data.push({
                hoso_type: 1,
                file_name: element.link.split('/').pop(),
                file_time: element.timecreate,
                file_type: element.link.split('.').pop(),
                file_link: `${process.env.DOMAIN_API}/${element.link}`,
                file_id: element.id_upload
            })
        }
        const total = data.length
        data = data.slice(skip, skip + limit);

        return functions.success(res, 'List of downloaded profiles', { total, data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Xóa tệp hồ sơ
export const DeleteFile = async (req, res) => {
    try {
        const iduv = req.iduv;
        const { id_upload, hoso_type } = req.body
        if (id_upload && hoso_type) {
            if (hoso_type == 1) {
                const checkExist = await UserCvUpload.findOne({ id_upload: id_upload, use_id: iduv })
                if (checkExist) {
                    // const date = functions.getDate(checkExist.timecreate * 1000)
                    const path = `./${checkExist.link}`
                    functions.deleteFile(path)
                    await UserCvUpload.findOneAndDelete({ id_upload: id_upload, use_id: iduv })
                    return functions.success(res, 'Delete successfully')
                }
                return functions.setError(res, 'Folder not exist', 404)
            }

            if (hoso_type == 2) {
                const checkExist = await UserVidUpload.findOne({ id_upload: id_upload, use_id: iduv })
                if (checkExist) {
                    // const date = functions.getDate(checkExist.timecreate * 1000)
                    const path = `./${checkExist.link}`
                    functions.deleteFile(path)
                    await UserVidUpload.findOneAndDelete({ id_upload: id_upload, use_id: iduv })
                    return functions.success(res, 'Delete successfully')
                }
                return functions.setError(res, 'Folder not exist', 404)
            }
        }
        return functions.setError(res, 'Missing data')
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Upload tệp hồ sơ mới
export const UploadFile = async (req, res) => {
    try {
        const file = req.files;
        const iduv = req.iduv;
        const hoso_type = req.body.hoso_type;
        if (file && file.CV && hoso_type) {
            // const user = await Users.findOne({use_id: iduv}).lean()
            if (hoso_type == 1) {
                if (file.CV.size > 10 * 1024 * 1024) {
                    return functions.setError(res, 'File size is too large')
                }
                const checkExist = await UserCvUpload.findOne({ use_id: iduv })
                const date = functions.getDate();
                const time = functions.getTime();
                const upload = await functions.uploadCV(`uv_${iduv}`, file.CV, time);
                if (upload === false) return functions.setError(res, 'The CV format is invalid', 400);

                const id_upload = await functions.getMaxId(UserCvUpload, 'id_upload');
                await UserCvUpload.create({
                    id_upload,
                    use_id: iduv,
                    link: upload,
                    timecreate: time
                });
                functions.hideInfoCV(id_upload, `${process.env.DOMAIN_API}/${upload}`, UserCvUpload)
                if (checkExist) {
                    const oldFile = `./${checkExist.link}`
                    await UserCvUpload.findOneAndDelete({ id_upload: checkExist.id_upload, use_id: iduv })
                    if (checkExist.link !== upload) functions.deleteFile(oldFile)
                }
                return functions.success(res, 'Upload successfully')
            }

            if (hoso_type == 2) {
                if (file.CV.size > 50 * 1024 * 1024) {
                    return functions.setError(res, 'File size is too large')
                }
                const checkExist = await UserVidUpload.findOne({ use_id: iduv })
                const date = functions.getDate();
                const time = functions.getTime();
                const upload = await functions.uploadVideo(`uv_vid_${iduv}`, file.CV, time);
                if (upload === false) return functions.setError(res, 'The CV format is invalid', 400);

                const id_upload = await functions.getMaxId(UserVidUpload, 'id_upload');
                await UserVidUpload.create({
                    id_upload,
                    use_id: iduv,
                    link: upload,
                    timecreate: time
                });

                if (checkExist) {
                    const oldFile = `./${checkExist.link}`
                    await UserVidUpload.findOneAndDelete({ id_upload: checkExist.id_upload, use_id: iduv })
                    if (checkExist.link !== upload) functions.deleteFile(oldFile)
                }
                return functions.success(res, 'Upload successfully')
            }
        }
        return functions.setError(res, 'Missing data')
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Upload video

// lấy thông tin tài khoản UV
export const infoUV = async (req, res, next) => {
    try {
        const iduv = req.iduv;
        const data = await Users.findOne({
            use_id: iduv
        }, {
            use_mail: 1,
            use_phone: 1,
            use_mail: 1,
            use_name: 1,
            use_city_job: 1,
            use_nganh_nghe: 1,
            use_district_job: 1,
            gender: 1,
            exp_years: 1,
            salary: 1,
            use_logo: 1,
            birthday: 1,
            use_job_name: 1,
            use_create_time: 1
        }).lean();
        // if (data.DateOfIncorporation != 0) data.DateOfIncorporation = new Date(data.DateOfIncorporation * 1000);
        data.use_logo = functions.getAvatarCandi(data.use_create_time, data.use_logo);
        // data.usc_create_time = new Date(data.usc_create_time * 1000);

        return functions.success(res, 'get data success', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

const promiseTblLuuTin = (iduser, new_id) => {
    const query = TblLuuTin.findOne({ id_uv: iduser, id_tin: new_id }, { id: 1 }).lean();
    return query;
}

// Lấy thông tin phục vụ livechat (dùng hàm riêng tối ưu tốc độ)
export const takeInforCan = async (req, res, next) => {
    let cate = "", city = ""
    try {
        const iduv = Number(req.iduv)

        if (iduv) {
            const user = await Users.findOne({ use_id: iduv })
            if (user) {
                const cate_id = Number(user.use_nganh_nghe[0]?.id)
                const city_id = Number(user.use_city_job[0]?.id)
                if (cate_id) {
                    const cateData = await Category.findOne({ cat_id: cate_id })
                    if (cateData) {
                        cate = cateData.cat_name.trim()
                    }
                }
                if (city_id) {
                    const cityData = await City.findOne({ cit_id: city_id })
                    if (cityData) {
                        city = cityData.cit_name.trim()
                    }
                }
                res.status(200).json({
                    cate,
                    city,
                    msg: "ok"
                })
            } else {
                res.status(200).json({
                    cate,
                    city,
                    msg: "not found"
                })
            }
        } else {
            res.status(200).json({
                cate,
                city,
                msg: "missing iduv"
            })
        }
    } catch (error) {
        // console.log("🚀 ~ takeInforCan ~ error:", error?.message)
        // return functions.setError(res, error.message);
        res.status(200).json({
            cate,
            city,
            msg: error?.message,
        })
    }
}