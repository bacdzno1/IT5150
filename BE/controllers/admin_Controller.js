import * as functions from '../services/functions.js';
import AdminUser from '../models/admin/AdminUser.js';
import AdminUserRight from "../models/admin/AdminUserRight.js";
import AdminUserLanguage from "../models/admin/AdminUserLanguage.js";
import TmpUser from "../models/TmpUser.js";
import Users from "../models/user/Users.js";
import UserAddFail from "../models/user/UserAddFail.js";
import UserCompany from "../models/user/UserCompany.js";
import TblPointCompany from '../models/tbl/TblPointCompany.js';
import NopHoSo from '../models/NopHoSo.js'
import New from '../models/new/New.js';
import TblPoint from '../models/tbl/TblPoint.js';
import TblPointAdded from '../models/tbl/TblPointAdded.js';
import NewGhimTin from '../models/new/NewGhimTin.js';
import SaveCandidateCv from '../models/save/SaveCandidateCv.js';
import UserCvUpload from '../models/user/UserCvUpload.js';
import UserCompanyError from '../models/user/UserCompanyError.js';
import CategoryCompany from '../models/category/CategoryCompany.js';
import Modules from '../models/Modules.js';
import Languages from '../models/language/Languages.js'
import AdminUserCategory from '../models/admin/AdminUserCategory.js';
import TblTagsNew from '../models/tbl/TblTagsNew.js';
import TblPointUsed from '../models/tbl/TblPointUsed.js';
import LanguageCv from '../models/language/LanguageCv.js';
import NganhCv from '../models/NganhCv.js';
import ttbsCate from '../models/ThongTinBoSung/ttbsCate.js';
import ttbsDetail from '../models/ThongTinBoSung/ttbsDetail.js';
import TblLuuHoSoUv from '../models/tbl/TblLuuHoSoUv.js';

export const list = async (req, res) => {
    try {
        const adminID = req.adminID;
        const module = Number(req.body.module);
        let subSort = req.body.sort;
        const page = req.body.page || 1;
        const pageSize = req.body.pageSize || 50;
        const skip = (page - 1) * pageSize;
        const limit = parseInt(pageSize);
        let searchItem = req.body.searchItem || {};
        const name_uv = req.body.name_uv;
        const from = req.body.from;
        const to = req.body.to;
        let conditions = req.body.conditions;
        let condition = {};
        let Table = [];
        let sort = {};
        // let lookup = {};
        let lookup = [];
        // let unwind = {};
        let unwind = []; // Cho phép lookup và unwind nhiều 

        // Lọc conditions
        if (typeof conditions === 'object' && Object.keys(conditions).length > 0) {
            for (let key in conditions) {
                if (!conditions[key]) {
                    delete conditions[key]
                }
            }
        } else {
            conditions = {}
        }

        if (module) {

            // danh sách tài khoản
            if (module === 1) {
                Table = AdminUser;
                sort = { "adm_loginname": 1, "adm_active": -1 };
                const totalCount = await Table.countDocuments({ adm_loginname: { $ne: "admin" } });
                const data = await Table.find({
                    adm_delete: 0,
                    // adm_loginname: { $ne: "admin" } 
                }, searchItem).sort(sort).skip(skip).limit(limit).lean();
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    const permision = await AdminUserRight.aggregate([
                        { $match: { adu_admin_id: element.adm_id } },
                        {
                            $lookup: {
                                from: "Modules",
                                localField: 'adu_admin_module_id',
                                foreignField: "mod_id",
                                as: "module"
                            }
                        },
                        { $unwind: "$module" },
                        { $project: { mod_name: "$module.mod_name" } }
                    ]);
                    let str = '';
                    permision.map(item => str += item.mod_name + ', ');
                    element.permision = str;

                    const language = await AdminUserLanguage.aggregate([
                        { $match: { aul_admin_id: element.adm_id } },
                        {
                            $lookup: {
                                from: "Languages",
                                localField: 'aul_lang_id',
                                foreignField: "lang_id",
                                as: "Languages"
                            }
                        },
                        { $unwind: "$Languages" },
                        { $project: { language: "$Languages.lang_name" } }
                    ]);
                    str = '';
                    if (language.length > 0) language.map(item => str += item.language + ', ');
                    element.language = str;
                }
                return functions.success(res, 'success', { total: totalCount, data });
            }

            // ứng viên đăng kí mới
            if (module === 2) {
                Table = Users;
                condition = { register: { $ne: 4 }};
                // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                if (conditions?.use_nganh_nghe) {
                    conditions['use_nganh_nghe.id'] = conditions.use_nganh_nghe
                    delete conditions.use_nganh_nghe
                }
                if (conditions?.use_city_job) {
                    conditions['use_city_job.id'] = conditions.use_city_job
                    delete conditions.use_city_job
                }
                if (conditions?.use_id) { conditions.use_id = Number(conditions.use_id) }
                if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
                if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mailt, 'i') }
                if (conditions?.use_phone) { conditions.use_phone = new RegExp(conditions.use_phone, 'i') }
                functions.CompareTime(condition, 'use_create_time', from, to)
                sort = { use_id: -1 };

                conditions = { ...condition, ...conditions };
                subSort = { ...sort, ...subSort };
                const total_promise = Table.countDocuments(conditions);
                const data_promise = Table.find(conditions, searchItem).sort(subSort).skip(skip).limit(limit).lean();
                const [
                    data,
                    total
                ] = await Promise.all([
                    data_promise,
                    total_promise
                ]);

                // for (let i = 0; i < data.length; i++) {
                //     const element = data[i];
                //     if (element?.idTimViec365) {
                //         // Kiểm tra đã chuyển CV chưa

                //         const uvConfig = {
                //             method: "post",
                //             url: "https://api.timviec365.vn/api/timviec/candidate/infoCandidate",
                //             data: {
                //                 iduser: element.idTimViec365
                //             },
                //             headers: { "Content-Type": "multipart/form-data" }
                //         }

                //         await axios.request(uvConfig)
                //             .then(async (response) => {
                //                 if (response && response.data && response.data.data && response.data.data.thong_tin) {
                //                     let thong_tin = response.data.data.thong_tin;
                //                     if (thong_tin) {
                //                         let img_save = thong_tin.name_img_hide || "";
                //                         let img_upload = (thong_tin.fileUpLoad && thong_tin.fileUpLoad.hs_link_hide) ? thong_tin.fileUpLoad.hs_link_hide : "";
                //                         let check_img = await functions.checkFetchFile(img_save || img_upload)

                //                         // Check 45%
                //                         // const timeUpdate = Number(thong_tin?.use_update_time)
                //                         const precent = Number(thong_tin?.candidate?.percents)

                //                         if ((img_save || img_upload) && check_img && !isNaN(precent) && precent >= 45) { //* Đã có ảnh và trên 45%, đã hơn 5 phút

                //                         } else {
                //                             element.idTimViec365 = 0
                //                         }
                //                     } else {
                //                         element.idTimViec365 = 0
                //                     }
                //                 } else {
                //                     element.idTimViec365 = 0
                //                 }
                //             })
                //             .catch((error) => {
                //                 console.log("🚀 ~ list ~ error:", error.message)
                //                 element.idTimViec365 = 0
                //             })

                //         // // Check 45% AI
                //         // const uvAiConfig = {
                //         //     method: "post",
                //         //     url: "http://43.239.223.4:5002/view_ungvien",
                //         //     data: {
                //         //         site: "uvtimviec365_5",
                //         //         id: element.idTimViec365,
                //         //     },
                //         //     headers: { "Content-Type": "multipart/form-data" }
                //         // }

                //         // await axios.request(uvAiConfig)
                //         //     .then(async (response) => {
                //         //         if (response && response.data) {
                //         //             const data = response.data
                //         //             if (data?.data && data?.data?.result) {
                //         //                 const item = data?.data?.item
                //         //                 const percent = Number(item?.percents)

                //         //                 // Có khả năng bị dính use_show = "0"
                //         //                 const use_show = Number(item?.use_show)

                //         //                 if (!isNaN(percent) && percent >= 45 && !isNaN(use_show) && use_show == 1) {

                //         //                 } else {
                //         //                     element.idTimViec365 = 0
                //         //                 }
                //         //             } else {
                //         //                 element.idTimViec365 = 0
                //         //             }
                //         //         } else {
                //         //             element.idTimViec365 = 0
                //         //         }
                //         //     })
                //         //     .catch((error) => {
                //         //         console.log("🚀 ~ list ~ error:", error.message)
                //         //         element.idTimViec365 = 0
                //         //     })
                //     }
                // }

                return functions.success(res, 'success', {
                    data, total
                });
            }

            // ứng viên sửa, cập nhật hồ sơ
            if (module === 3) {
                Table = Users;
                condition = { register: { $ne: 4 } };
                // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
                if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
                functions.CompareTime(condition, 'use_update_time', from, to);
                sort = { use_update_time: -1, use_id: -1 };
            }

            // chạy lâu
            // ứng viên tải CV từ máy tính cá nhân
            if (module === 4) {
                Table = Users;
                if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
                if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
                functions.CompareTime(condition, 'use_update_time', from, to);
                sort = { use_id: -1 };

                let userCvUpload = await UserCvUpload.find({})
                userCvUpload = userCvUpload.filter((item) => !!item?.use_id).map((item) => item.use_id)
                condition.use_id = { $in: userCvUpload }

                lookup = [{
                    "$lookup": {
                        from: "UserCvUpload",
                        localField: "use_id",
                        foreignField: "use_id",
                        as: "userCvUpload"
                    },
                }];
                unwind = [{
                    $unwind: {
                        path: "$userCvUpload",
                        preserveNullAndEmptyArrays: true
                    }
                }];
                searchItem = {
                    use_id: 1,
                    use_phone: 1,
                    use_mail: 1,
                    use_name: 1,
                    use_create_time: 1,
                    link: {
                        $concat: [`${process.env.DOMAIN_API}/`, { $toString: "$userCvUpload.link" }]
                    },
                }
            }

            // ứng viên chưa hoàn thiện hồ sơ từ web
            if (module === 5) {
                Table = TmpUser;
                condition = { $or: [{ tmp_register: 1 }, { tmp_register: 3 }] };
                // if (name_uv) condition.tmp_name = new RegExp(name_uv, 'i');
                if (conditions?.tmp_name) { conditions.tmp_name = new RegExp(conditions.tmp_name, 'i') }
                if (conditions?.tmp_email_lh) { conditions.tmp_email_lh = new RegExp(conditions.tmp_email_lh, 'i') }
                if (conditions?.tmp_phone_tk) { conditions.tmp_phone_tk = new RegExp(conditions.tmp_phone_tk, 'i') }

                functions.CompareTime(condition, 'tmp_time', from, to);
                sort = { tmp_id: -1 };
            }

            // ứng viên chưa hoàn thiện hồ sơ từ app tìm việc
            if (module === 6) {
                Table = TmpUser;
                condition = { tmp_register: 2 };
                if (name_uv) condition.tmp_name = new RegExp(name_uv, 'i');
                functions.CompareTime(condition, 'tmp_time', from, to);
                sort = { tmp_id: -1 };
            }

            // ứng viên chưa hoàn thiện hồ sơ từ app CV
            if (module === 7) {
                Table = Users;
                condition = { register: 4 };
                if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                functions.CompareTime(condition, 'use_create_time', from, to);
                sort = { tmp_id: -1 };
            }

            // ứng viên ứng tuyển NTD
            if (module === 8) {
                Table = NopHoSo;
                functions.CompareTime(condition, 'createdAt', from, to)
                sort = { id: -1 }
                if (conditions?.type) conditions.type = Number(conditions.type)
                const use_name = conditions?.use_name
                const new_title = conditions?.new_title
                const usc_company = conditions?.usc_company
                const usc_name_email = conditions?.usc_name_email
                const usc_phone_tk = conditions?.usc_phone_tk

                let user_promise = [], new_promise = [], com_promise = []
                // let userArr = [], newArr = [], comArr = []
                if (use_name) {
                    user_promise = Users.find({
                        use_name: { $regex: use_name, $options: 'i' }
                    }, { use_id: 1 });
                }
                if (new_title) {
                    new_promise = New.find({
                        new_title: { $regex: new_title, $options: 'i' }
                    }, { new_id: 1 });
                }
                if (usc_company || usc_name_email || usc_phone_tk) {
                    com_promise = UserCompany.find({
                        ...(usc_company && { usc_company: { $regex: usc_company, $options: 'i' } }),
                        ...(usc_name_email && { usc_name_email: { $regex: usc_name_email, $options: 'i' } }),
                        ...(usc_phone_tk && { usc_phone_tk: { $regex: usc_phone_tk, $options: 'i' } }),
                    }, { usc_id: 1 });
                }
                let [
                    userArr,
                    newArr,
                    comArr,
                ] = await Promise.all([
                    user_promise,
                    new_promise,
                    com_promise,
                ])

                if (use_name) {
                    userArr = userArr.filter((item) => !!item?.use_id).map((item) => (item.use_id));
                    delete conditions.use_name
                    conditions.nhs_use_id = { $in: userArr }
                }
                if (new_title) {
                    newArr = newArr.filter((item) => !!item?.new_id).map((item) => (item.new_id));
                    delete conditions.new_title
                    conditions.nhs_new_id = { $in: newArr }
                }
                if (usc_company || usc_name_email || usc_phone_tk) {
                    comArr = comArr.filter((item) => !!item?.usc_id).map((item) => (item.usc_id));
                    delete conditions.usc_company
                    delete conditions.usc_name_email
                    delete conditions.usc_phone_tk
                    conditions.nhs_com_id = { $in: comArr }
                }


                lookup = [
                    {
                        "$lookup": {
                            from: 'Users',
                            let: { nhs_use_id: '$nhs_use_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$use_id', '$$nhs_use_id'] },
                                    }
                                },
                            ],
                            as: 'user'
                        }
                    },
                    {
                        "$lookup": {
                            from: 'New',
                            let: { nhs_new_id: '$nhs_new_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$nhs_new_id'] },
                                    }
                                },
                            ],
                            as: 'new'
                        }
                    },
                    {
                        "$lookup": {
                            from: 'UserCompany',
                            let: { nhs_com_id: '$nhs_com_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$usc_id', '$$nhs_com_id'] },
                                    }
                                },
                            ],
                            as: 'com'
                        }
                    }
                ]

                unwind = [
                    {
                        $unwind: {
                            path: '$user',
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $unwind: {
                            path: '$new',
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $unwind: {
                            path: '$com',
                            preserveNullAndEmptyArrays: true
                        }
                    }
                ]

                searchItem = {
                    id: 1,
                    use_name: { $ifNull: ['$user.use_name', 'Chưa cập nhật'] },
                    use_phone: { $ifNull: ['$user.use_phone', 'Chưa cập nhật'] },
                    new_title: { $ifNull: ['$new.new_title', 'Chưa cập nhật'] },
                    new_id: { $ifNull: ['$new.new_id', 'Chưa cập nhật'] },
                    usc_company: { $ifNull: ['$com.usc_company', 'Chưa cập nhật'] },
                    usc_phone_tk: { $ifNull: ['$com.usc_phone_tk', 'Chưa cập nhật'] },
                    usc_name_email: { $ifNull: ['$com.usc_name_email', 'Chưa cập nhật'] },
                    createdAt: 1,
                    nhs_time: 1,
                    type: 1,
                }
            }

            // tất cả ứng viên
            if (module === 9) {
                Table = Users;
                condition = { register: { $ne: 4 } };
                // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                if (conditions?.use_nganh_nghe) {
                    conditions['use_nganh_nghe.id'] = conditions.use_nganh_nghe
                    delete conditions.use_nganh_nghe
                }
                if (conditions?.use_city_job) {
                    conditions['use_city_job.id'] = conditions.use_city_job
                    delete conditions.use_city_job
                }
                if (conditions?.use_id) { conditions.use_id = Number(conditions.use_id) }
                if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
                if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
                if (conditions?.use_phone) { conditions.use_phone = new RegExp(conditions.use_phone, 'i') }
                if (conditions?.address) { conditions.address = new RegExp(conditions.address, 'i') }
                if (conditions?.gender) { conditions.gender = Number(conditions.gender) }
                if (conditions?.use_district_job) {
                    conditions['use_district_job.id'] = conditions.use_district_job
                    delete conditions.use_district_job
                }
                functions.CompareTime(condition, 'use_create_time', from, to);
                sort = { use_id: -1 };
            }

            // // ứng viên bị ẩn
            // if (module === 10) {
            //     Table = Users;
            //     condition = { use_show: 0 };
            //     // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
            //     if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
            //     if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
            //     if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
            //     functions.CompareTime(condition, 'use_create_time', from, to);
            //     sort = { use_id: -1 };
            // }

            // trạng thái ứng viên NHS
            if (module === 11) {
                Table = NopHoSo;
                functions.CompareTime(condition, 'createdAt', from, to)
                sort = { id: -1 }
                if (conditions?.result) conditions.result = Number(conditions.result)
                const use_name = conditions?.use_name
                const new_title = conditions?.new_title
                // const usc_name = conditions?.usc_name
                const usc_company = conditions?.usc_company

                let user_promise = [], new_promise = [], com_promise = []
                // let userArr = [], newArr = [], comArr = []
                if (use_name) {
                    user_promise = Users.find({
                        use_name: { $regex: use_name, $options: 'i' }
                    }, { use_id: 1 });
                }
                if (new_title) {
                    new_promise = New.find({
                        new_title: { $regex: new_title, $options: 'i' }
                    }, { new_id: 1 });
                }
                if (usc_company) {
                    com_promise = UserCompany.find({
                        usc_company: { $regex: usc_company, $options: 'i' }
                    }, { usc_id: 1 });
                }
                let [
                    userArr,
                    newArr,
                    comArr,
                ] = await Promise.all([
                    user_promise,
                    new_promise,
                    com_promise,
                ])

                if (use_name) {
                    userArr = userArr.filter((item) => !!item?.use_id).map((item) => (item.use_id));
                    delete conditions.use_name
                    conditions.nhs_use_id = { $in: userArr }
                }
                if (new_title) {
                    newArr = newArr.filter((item) => !!item?.new_id).map((item) => (item.new_id));
                    delete conditions.new_title
                    conditions.nhs_new_id = { $in: newArr }
                }
                if (usc_company) {
                    comArr = comArr.filter((item) => !!item?.usc_id).map((item) => (item.usc_id));
                    delete conditions.usc_company
                    conditions.nhs_com_id = { $in: comArr }
                }

                lookup = [
                    {
                        "$lookup": {
                            from: 'Users',
                            let: { nhs_use_id: '$nhs_use_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$use_id', '$$nhs_use_id'] },
                                    }
                                },
                            ],
                            as: 'user'
                        }
                    },
                    {
                        "$lookup": {
                            from: 'New',
                            let: { nhs_new_id: '$nhs_new_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$nhs_new_id'] },
                                    }
                                },
                            ],
                            as: 'new'
                        }
                    },
                    {
                        "$lookup": {
                            from: 'UserCompany',
                            let: { nhs_com_id: '$nhs_com_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$usc_id', '$$nhs_com_id'] },
                                    }
                                },
                            ],
                            as: 'com'
                        }
                    }
                ]

                unwind = [
                    {
                        $unwind: {
                            path: '$user',
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $unwind: {
                            path: '$new',
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $unwind: {
                            path: '$com',
                            preserveNullAndEmptyArrays: true
                        }
                    }
                ]

                searchItem = {
                    id: 1,
                    use_name: { $ifNull: ['$user.use_name', 'Chưa cập nhật'] },
                    new_title: { $ifNull: ['$new.new_title', 'Chưa cập nhật'] },
                    new_id: { $ifNull: ['$new.new_id', 'Chưa cập nhật'] },
                    usc_company: { $ifNull: ['$com.usc_company', 'Chưa cập nhật'] },
                    nhs_time: 1,
                    result: 1,
                    note: 1,
                }
            }

            // ứng viên add lỗi
            if (module === 12) {
                Table = UserAddFail;
                condition = {};
                // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                if (conditions?.uf_email) { conditions.uf_email = new RegExp(conditions.uf_email, 'i') }
                if (conditions?.uf_phone) { conditions.uf_phone = new RegExp(conditions.uf_phone, 'i') }
                functions.CompareTime(condition, 'uf_time', from, to);
                sort = { uf_time: -1 };
            }

            // ứng viên đăng kí lỗi (chưa thấy)
            if (module === 13) {
                Table = TmpUser
                sort = { tmp_time: -1, tmp_id: -1 }
                condition = { error: 1 }
                functions.CompareTime(condition, 'tmp_time', from, to);
                if (conditions?.tmp_name) {
                    conditions.tmp_name = new RegExp(conditions.tmp_name, 'i')
                }
                if (conditions?.tmp_phone_tk) {
                    conditions.tmp_phone_tk = new RegExp(conditions.tmp_phone_tk, 'i')
                }
                if (conditions?.tmp_email_lh) {
                    conditions.tmp_email_lh = new RegExp(conditions.tmp_email_lh, 'i')
                }
                if (conditions?.tmp_job_city) {
                    conditions.tmp_job_city = new RegExp(conditions.tmp_job_city, 'i')
                }
                if (conditions?.tmp_job_district) {
                    conditions.tmp_job_district = new RegExp(conditions.tmp_job_district, 'i')
                }
                if (conditions?.tmp_nganh_nghe) {
                    conditions.tmp_nganh_nghe = new RegExp(conditions.tmp_nganh_nghe, 'i')
                }
                if (conditions?.error) {
                    conditions.error = Number(conditions.error)
                }
                if (conditions?.from) {
                    delete conditions.from
                }
            }

            // NTD đăng ký 
            if (module === 14) {
                Table = UserCompany;
                condition = {
                    $or: [{ usc_alias: { $ne: "" } }, { register: 2 }],
                    ...(!checkFullRight(adminID) && { usc_kd: Number(adminID) })
                };
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_create_time: -1 };
                const time = functions.getTime();

                if (conditions?.usc_id) {
                    conditions.usc_id = Number(conditions.usc_id);
                }
                if (conditions?.usc_company) {
                    conditions.usc_company = new RegExp(functions.allVietnameseRegex(conditions.usc_company), 'i')
                }
                if (conditions?.usc_phone_tk) {
                    conditions.usc_phone_tk = new RegExp(conditions.usc_phone_tk, 'i');
                }
                if (conditions?.usc_email) {
                    conditions.usc_email = new RegExp(conditions.usc_email, 'i');
                }
                if (conditions?.usc_name_phone) {
                    conditions.usc_name_phone = new RegExp(conditions.usc_name_phone, 'i');
                }
                if (conditions?.usc_name_email) {
                    conditions.usc_name_email = new RegExp(conditions.usc_name_email, 'i');
                }
                if (conditions?.usc_mst) {
                    conditions.usc_mst = new RegExp(conditions.usc_mst, 'i');
                }
                if (conditions?.usc_city) {
                    conditions.usc_city = new RegExp(conditions.usc_city, 'i');
                }
                if (conditions?.usc_district) {
                    conditions.usc_district = new RegExp(conditions.usc_district, 'i');
                }

                conditions = { ...condition, ...conditions };
                subSort = { ...sort, ...subSort };

                const point_promise = TblPointCompany.find({ point_usc: { $gt: 0 }, day_end: { $gt: time } });

                const ghim_promise = NewGhimTin.aggregate([
                    {
                        $match: {
                            expired: { $gt: time }
                        }
                    },
                    {
                        $lookup: {
                            from: 'New',
                            let: { new_id: '$new_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$new_id'] }
                                    }
                                }
                            ],
                            as: 'new'
                        }
                    },
                    {
                        $unwind: '$new'
                    },
                    {
                        $group: {
                            _id: '$new.new_user_id'
                        }
                    },
                    {
                        $project: {
                            usc_id: '$_id'
                        }
                    }
                ]);

                let [
                    point,
                    ghim
                ] = await Promise.all([
                    point_promise,
                    ghim_promise,
                ]);

                point = point.filter((item) => !!item?.usc_id).map((item) => (item.usc_id));
                ghim = ghim.filter((item) => !!item?.usc_id).map((item) => (item.usc_id));

                let vipArr = ghim.filter(item => point.includes(item));

                let vip = null;
                vip = conditions?.vip;
                delete conditions.vip;
                if (!isNaN(Number(vip)) && (vip == "1" || vip == "0")) {
                    vip = Number(vip);
                    if (conditions?.usc_id) {
                        conditions.usc_id = {
                            $and: [
                                Number(conditions.usc_id),
                                ...(vip && { $in: vipArr }),
                                ...(!vip && { $nin: vipArr }),
                            ]
                        };
                    } else {
                        conditions.usc_id = {
                            ...(vip && { $in: vipArr }),
                            ...(!vip && { $nin: vipArr }),
                        };
                    }
                }

                const total_promise = Table.countDocuments(conditions);

                const data_promise = Table.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    { $skip: skip },
                    { $limit: limit },
                    {
                        $lookup: {
                            from: 'AdminUser',
                            localField: 'adm_id',
                            foreignField: 'adm_id',
                            as: 'adminDetails'
                        }
                    },
                    { $unwind: { path: '$adminDetails', preserveNullAndEmptyArrays: true } }, // Unwind the joined array
                    {
                        $project: {
                            usc_id: 1,
                            usc_company: 1,
                            usc_phone_tk: 1,
                            usc_email: 1,
                            usc_name_phone: 1,
                            usc_name_email: 1,
                            usc_skype: 1,
                            usc_address: 1,
                            usc_website: 1,
                            usc_active: 1,
                            usc_index: 1,
                            usc_note: 1,
                            usc_city: 1,
                            usc_district: 1,
                            usc_authentic: 1,
                            usc_kd: 1,
                            usc_kd_crm: 1,
                            usc_mst: 1,
                            usc_create_time: 1,
                            'adminDetails.emp_id': 1, // Include emp_id from AdminUser
                            emp_id: '$adminDetails.emp_id',
                            usc_alias: 1,
                        }
                    }
                ]);

                let [
                    data, total
                ] = await Promise.all([
                    data_promise, total_promise
                ]);

                if (Array.isArray(data) && Array.isArray(vipArr)) {
                    data.forEach((element) => {
                        element.vip = vipArr.includes(element.usc_id) ? 1 : 0;
                    });
                }

                return functions.success(res, 'success', {
                    total: total,
                    data
                });
            }


            // tất cả nhà tuyển dụng
            if (module === 15) {
                const time = functions.getTime()
                Table = UserCompany;
                // condition = { usc_kd: adminID };
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_create_time: -1 };
                if (conditions?.usc_id) {
                    conditions.usc_id = Number(conditions.usc_id)
                }
                if (conditions?.usc_company) {
                    conditions.usc_company = new RegExp(conditions.usc_company, 'i')
                }
                if (conditions?.usc_phone_tk) {
                    conditions.usc_phone_tk = new RegExp(conditions.usc_phone_tk, 'i')
                }
                if (conditions?.usc_email) {
                    conditions.usc_email = new RegExp(conditions.usc_email, 'i')
                }
                if (conditions?.usc_name_phone) {
                    conditions.usc_name_phone = new RegExp(conditions.usc_name_phone, 'i')
                }
                if (conditions?.usc_name_email) {
                    conditions.usc_name_email = new RegExp(conditions.usc_name_email, 'i')
                }
                if (conditions?.usc_mst) {
                    conditions.usc_mst = new RegExp(conditions.usc_mst, 'i')
                }

                if (conditions?.usc_city) {
                    conditions.usc_city = new RegExp(conditions.usc_city, 'i')
                }
                if (conditions?.usc_district) {
                    conditions.usc_district = new RegExp(conditions.usc_district, 'i')
                }

                conditions = { ...condition, ...conditions };
                subSort = { ...sort, ...subSort };

                const point_promise = TblPointCompany.find({ point_usc: { $gt: 0 }, day_end: { $gt: time } })

                const ghim_promise = NewGhimTin.aggregate([
                    {
                        $match: {
                            expired: { $gt: time }
                        }
                    },
                    {
                        $lookup: {
                            from: 'New',
                            let: { new_id: '$new_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$new_id'] }
                                    }
                                }
                            ],
                            as: 'new'
                        }
                    },
                    {
                        $unwind: '$new'
                    },
                    {
                        $group: {
                            _id: '$new.new_user_id'
                        }
                    },
                    {
                        $project: {
                            usc_id: '$_id'
                        }
                    }
                ])

                let [
                    point,
                    ghim
                ] = await Promise.all([
                    point_promise,
                    ghim_promise,
                ]);

                point = point.filter((item) => !!item?.usc_id).map((item) => (item.usc_id))
                ghim = ghim.filter((item) => !!item?.usc_id).map((item) => (item.usc_id))

                let vipArr = ghim.filter(item => point.includes(item))

                let vip = null
                vip = conditions?.vip
                delete conditions.vip
                if (!isNaN(Number(vip)) && (vip == "1" || vip == "0")) {
                    vip = Number(vip)
                    if (conditions?.usc_id) {
                        conditions.usc_id = {
                            $and: [
                                Number(conditions.usc_id),
                                ...(vip && { $in: vipArr }),
                                ...(!vip && { $nin: vipArr }),
                            ]
                        }
                    } else {
                        conditions.usc_id = {
                            ...(vip && { $in: vipArr }),
                            ...(!vip && { $nin: vipArr }),
                        }
                    }
                }

                const data_promise = Table.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    { $skip: skip },
                    { $limit: limit },
                    {
                        $project: {
                            usc_id: 1,
                            usc_company: 1,
                            usc_phone_tk: 1,
                            usc_email: 1,
                            usc_name_phone: 1,
                            usc_name_email: 1,
                            usc_skype: 1,
                            usc_address: 1,
                            usc_website: 1,
                            usc_active: 1,
                            usc_index: 1,
                            usc_note: 1,
                            usc_city: 1,
                            usc_district: 1,
                            usc_authentic: 1,
                            usc_kd: 1,
                            usc_kd_crm: 1,
                        }
                    }

                ]);

                let [
                    data,
                ] = await Promise.all([
                    data_promise,
                ]);
                if (Array.isArray(ghim) && ghim.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        if (vipArr.includes(element.usc_id)) {
                            element.vip = 1
                        } else {
                            element.vip = 0
                        }
                    }
                }
                // const tong = (total && Array.isArray(total) && total.length > 0 && 'total' in total[0]) ? total[0].total : 0;
                return functions.success(res, 'success', {
                    // total: tong, 
                    data
                });
            }

            // NTD bị ẩn
            if (module === 16) {
                Table = UserCompany;
                condition = { usc_kd: adminID, usc_show: 0 };
                if (name_uv) condition.usc_name = new RegExp(name_uv, 'i');
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_create_time: -1 };
            }

            // NTD chưa đăng tin
            if (module === 17) {
                Table = UserCompany;
                const idNTD = await New.distinct("new_user_id");
                condition = { usc_id: { $nin: idNTD } };
                // if (name_uv) condition.usc_name = new RegExp(name_uv, 'i');
                if (conditions?.usc_company) conditions.usc_company = new RegExp(conditions?.usc_company, 'i')
                if (conditions?.usc_email) conditions.usc_email = new RegExp(conditions?.usc_email, 'i')
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_id: -1 };
            }

            // NTD có tin sắp hết hạn
            if (module === 18) {
                Table = UserCompany;
                const idNTD = await New.distinct("new_user_id",
                    { new_han_nop: { $gt: functions.getTime(), $lt: functions.getTime() + 7 * 24 * 60 * 60 } });
                condition = { $or: [{ usc_alias: { $ne: "" } }, { register: 2 }], usc_id: { $in: idNTD } };
                // if (name_uv) condition.usc_name = new RegExp(name_uv, 'i');
                if (conditions?.usc_id) {
                    conditions.usc_id = Number(conditions.usc_id)
                }
                if (conditions?.usc_company) {
                    conditions.usc_company = new RegExp(conditions.usc_company, 'i')
                }
                if (conditions?.usc_phone_tk) {
                    conditions.usc_phone_tk = new RegExp(conditions.usc_phone_tk, 'i')
                }
                if (conditions?.usc_email) {
                    conditions.usc_email = new RegExp(conditions.usc_email, 'i')
                }
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_id: -1 };
            }

            // NTD đăng nhập
            if (module === 19) {
                Table = UserCompany;
                const idNTD = await New.distinct("new_user_id",
                    { new_han_nop: { $gt: functions.getTime(), $lt: functions.getTime() + 7 * 24 * 60 * 60 } });
                condition = { $or: [{ usc_alias: { $ne: "" } }, { register: 2 }], usc_id: { $in: idNTD } };
                if (name_uv) condition.usc_name = new RegExp(name_uv, 'i');
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_id: -1 };
            }

            // Chạy chậm
            // Tin tuyen dung - NTD tự đăng 
            if (module === 20) {
                Table = New;
                sort = { new_id: -1 }
                conditions.selfpost = 1
                functions.CompareTime(condition, 'new_create_time', from, to)
                if (conditions?.new_id) conditions.new_id = Number(conditions.new_id)
                if (conditions?.new_user_id) conditions.new_user_id = Number(conditions.new_user_id)
                if (conditions?.new_title) conditions.new_title = new RegExp(functions.allVietnameseRegex(conditions.new_title), 'i')
                if (conditions?.new_cat_id) conditions.new_cat_id = new RegExp(`(^|,)${conditions.new_cat_id}(,|$)`)
                if (conditions?.new_city) conditions.new_city = new RegExp(`(^|,)${conditions.new_city}(,|$)`)

                // Gioi han theo admin
                const usc_company = conditions?.usc_company
                const listComId = await UserCompany.distinct("usc_id", {
                    ...(!checkFullRight(adminID) && { usc_kd: Number(adminID) }),
                    ...(!!usc_company && { usc_company: { $regex: functions.allVietnameseRegex(usc_company), $options: 'i' } })
                })

                if (conditions?.new_user_id) {
                    conditions = {
                        ...conditions,
                        $and: [
                            { new_user_id: { $eq: Number(conditions.new_user_id) } },
                            { new_user_id: { $in: listComId } }
                        ]
                    }

                    delete conditions.new_user_id
                } else {
                    conditions.new_user_id = { $in: listComId }
                }
                delete conditions.usc_company

                const time = functions.getTime();
                lookup = [
                    {
                        "$lookup": {
                            from: 'UserCompany',
                            let: { new_user_id: '$new_user_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$usc_id', '$$new_user_id'] },
                                    }
                                },
                            ],
                            as: 'com'
                        }
                    },
                    {
                        $lookup: {
                            from: 'NewGhimTin',
                            let: { new_id: "$new_id" },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$new_id'] },
                                        expired: { $gt: time },
                                    }
                                }
                            ],
                            as: 'pin'
                        }
                    }
                ]

                unwind = [
                    {
                        $unwind: '$com'
                    },
                    {
                        $unwind: {
                            path: '$pin',
                            preserveNullAndEmptyArrays: true,
                        }
                    },
                ]

                searchItem = {
                    new_id: 1,
                    new_user_id: 1,
                    new_title: 1,
                    usc_company: '$com.usc_company',
                    usc_phone_tk: '$com.usc_phone_tk',
                    usc_address: '$com.usc_address',
                    usc_id: '$com.usc_id',
                    new_create_time: 1,
                    // new_hot: 1,
                    new_hot: { $ifNull: ['$pin.new_hot', 0] },
                    new_gap: 1,
                    // new_cao: 1,
                    new_cao: { $ifNull: ['$pin.new_cao', 0] },
                    expired: { $ifNull: ['$pin.expired', 0] },
                    new_nganh: 1,
                    new_cat_id: 1,
                    new_city: 1,
                    new_han_nop: 1,
                }

                conditions = { ...condition, ...conditions };
                subSort = { ...sort, ...subSort };

                const total_promise = Table.countDocuments(conditions);

                const data_promise = Table.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    { $skip: skip },
                    { $limit: limit },
                    ...lookup,
                    ...unwind,
                    { $project: searchItem }
                ]);

                const [
                    data, total
                ] = await Promise.all([
                    data_promise, total_promise
                ]);

                let arrUvPromise = []
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    arrUvPromise.push(promiseNopHoSo(element.new_id))
                }
                const arrUv = await Promise.all(arrUvPromise)
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    element.uvCount = arrUv[i];
                }

                return functions.success(res, 'success', {
                    total: total,
                    data
                });
            }

            // Truong Diem - Gói điểm 
            if (module === 21) {
                Table = TblPoint
                sort = { point_id: -1 }
                condition = { status: 1 }
            }

            // Truong Diem - Danh sach
            if (module === 22) {
                Table = TblPointCompany
                sort = { usc_id: -1 }
                functions.CompareTime(condition, 'day_end', from, to);

                // Gioi han theo admin
                const usc_company = conditions?.usc_company
                const usc_id = conditions?.usc_id
                const usc_email = conditions?.usc_email
                const usc_phone_tk = conditions?.usc_phone_tk
                const listCom = await UserCompany.distinct("usc_id", {
                    ...(!checkFullRight(adminID) && { usc_kd: Number(adminID) }),
                    ...(!!usc_id && { usc_id: Number(usc_id) }),
                    ...(!!usc_company && { usc_company: { $regex: functions.allVietnameseRegex(usc_company), $options: 'i' } }),
                    ...(!!usc_email && { usc_email: { $regex: usc_email, $options: 'i' } }),
                    ...(!!usc_phone_tk && { usc_phone_tk: { $regex: usc_phone_tk, $options: 'i' } }),
                })
                delete conditions?.usc_company
                delete conditions?.usc_id
                delete conditions?.usc_email
                delete conditions?.usc_phone_tk
                conditions.usc_id = { $in: listCom }

                lookup = [
                    {
                        '$lookup': {
                            from: 'UserCompany',
                            let: { usc_id: '$usc_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$usc_id', '$$usc_id'] },

                                    }
                                }
                            ],
                            as: 'com'
                        }
                    }
                ]
                unwind = [
                    {
                        $unwind: '$com'
                    }
                ]
                searchItem = {
                    usc_id: 1,
                    point: 1,
                    point_usc: 1,
                    day_reset_point: 1,
                    day_end: 1,
                    usc_company: '$com.usc_company',
                    usc_email: '$com.usc_email',
                    usc_name_email: '$com.usc_name_email',
                    usc_phone_tk: '$com.usc_phone_tk',
                    usc_alias: '$com.usc_alias',
                }
            }

            // Chay cham
            // Truong Diem - Lich su
            if (module === 23) {
                // Table = UserCompany
                sort = { usc_id: -1 }

                // Gioi han theo admin
                const usc_company = conditions?.usc_company
                const usc_id = conditions?.usc_id
                const usc_email = conditions?.usc_email
                const usc_phone_tk = conditions?.usc_phone_tk
                const listCom = await UserCompany.distinct("usc_id", {
                    ...(!checkFullRight(adminID) && { usc_kd: Number(adminID) }),
                    ...(!!usc_id && { usc_id: Number(usc_id) }),
                    ...(!!usc_company && { usc_company: { $regex: functions.allVietnameseRegex(usc_company), $options: 'i' } }),
                    ...(!!usc_email && { usc_email: { $regex: usc_email, $options: 'i' } }),
                    ...(!!usc_phone_tk && { usc_phone_tk: { $regex: usc_phone_tk, $options: 'i' } }),
                })
                delete conditions?.usc_company
                delete conditions?.usc_id
                delete conditions?.usc_email
                conditions.usc_id = { $in: listCom }

                conditions = { ...condition, ...conditions };
                subSort = { ...sort, ...subSort };


                const com = await UserCompany.find(conditions, { usc_id: 1, usc_company: 1, usc_name_email: 1, usc_alias: 1, usc_email: 1 }).sort(subSort).skip(skip).limit(limit)
                const filter = com.map(item => item.usc_id)

                const pointUsed_promise = TblPointUsed.aggregate([
                    {
                        $match: {
                            usc_id: { $in: filter }
                        }
                    },
                    {
                        $group: {
                            _id: '$usc_id',
                            total: {
                                $sum: '$point'
                            }
                        }
                    }
                ])

                const pointAdded_promise = TblPointAdded.aggregate([
                    {
                        $match: {
                            usc_id: { $in: filter }
                        }
                    },
                    {
                        $group: {
                            _id: "$usc_id",
                            total: {
                                $sum: "$point"
                            }
                        }
                    }
                ])
                const total_promise = UserCompany.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    {
                        $group: {
                            _id: null,
                            total: {
                                $sum: 1
                            }
                        }
                    }
                ]);

                const [
                    pointUsed,
                    pointAdded,
                    total
                ] = await Promise.all([
                    pointUsed_promise,
                    pointAdded_promise,
                    total_promise
                ])

                const data = []
                for (let i = 0; i < com.length; i++) {
                    const element = com[i];
                    const point_used_index = pointUsed.findIndex(item => item._id === element.usc_id)
                    const point_added_index = pointAdded.findIndex(item => item._id === element.usc_id)
                    data.push({
                        _id: element.usc_id,
                        point_used: point_used_index != -1 ? pointUsed[point_used_index]?.total : 0,
                        point_added: point_added_index != -1 ? pointAdded[point_added_index]?.total : 0,
                        usc_id: element?.usc_id,
                        usc_company: element?.usc_company,
                        usc_name_email: element?.usc_name_email,
                        usc_alias: element?.usc_alias,
                        usc_email: element?.usc_email,
                    })
                }

                return functions.success(res, 'success', { data, total: total[0]?.total || 0 });
            }

            // Truong diem - Lich su cong diem
            if (module === 24) {
                const sort = { added_day: -1 };

                if (conditions?.usc_id) {
                    conditions.usc_id = Number(conditions.usc_id);
                }

                const lookup = [
                    {
                        $lookup: {
                            from: 'UserCompany',
                            let: { usc_id: '$usc_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$usc_id', '$$usc_id'] }
                                    }
                                }
                            ],
                            as: 'com'
                        }
                    }
                ];

                const unwind = [
                    {
                        $unwind: '$com'
                    }
                ];

                const searchItem = {
                    usc_id: 1,
                    point: 1,
                    added_day: 1,
                    usc_company: '$com.usc_company'
                };

                const pipeline = [
                    { $match: conditions },
                    ...lookup,
                    ...unwind,
                    { $sort: sort },
                    { $project: searchItem }
                ];

                const data = await TblPointAdded.aggregate(pipeline).exec();

                const total = await TblPointAdded.countDocuments(conditions).exec();

                return functions.success(res, 'success', { data, total });
            }

            // Bài đăng bổ sung
            if (module === 29) {
                Table = ttbsDetail
                sort = { timeedit: -1, timecreate: -1 }
                if (conditions?.idcate) {
                    conditions.idcate = Number(conditions.idcate)
                    if (!conditions.idcate) {
                        delete conditions.idcate
                    }
                }

                searchItem = {
                    id: 1,
                    title: 1,
                    mota: 1,
                    noidung: 1,
                    seo_tt: 1,
                    seo_key: 1,
                    seo_des: 1,
                    timecreate: 1,
                    timeedit: 1,
                    idcate: 1,
                }
            }

            conditions = { ...condition, ...conditions };
            subSort = { ...sort, ...subSort };
            if (JSON.stringify(unwind) != '[]') {
                const data_promise = Table.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    { $skip: skip },
                    { $limit: limit },
                    ...lookup,
                    ...unwind,
                    { $project: searchItem }
                ]);

                const total_promise = Table.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    ...lookup,
                    ...unwind,
                    {
                        $group: {
                            _id: null,
                            total: {
                                $sum: 1
                            }
                        }
                    }
                ]);
                const [
                    data,
                    total
                ] = await Promise.all([
                    data_promise,
                    total_promise
                ]);
                // total = data.length;
                const tong = (total && Array.isArray(total) && total.length > 0 && 'total' in total[0]) ? total[0].total : 0;
                return functions.success(res, 'success', {
                    total: tong,
                    data
                });
            } else {
                const data_promise = Table.find(conditions, searchItem).sort(subSort).skip(skip).limit(limit).lean();
                const total_promise = Table.countDocuments(conditions);
                const [
                    data,
                    total
                ] = await Promise.all([
                    data_promise,
                    total_promise
                ]);
                // total = data.length;
                // for (let i = 0; i < total; i++) {
                //     const element = data[i];
                //     if (module === 14) {
                //         const result = await TblPointCompany.findOne({ usc_id: element.usc_id }).lean();
                //         if (!result) element.status = 'Chưa VIP';
                //         else if (result && result.day_end == 0) element.status = 'Chưa VIP';
                //         else if (result && result.day_end > 0 && functions.getTime() < result.day_end) element.status = 'VIP';
                //         else element.status = 'Đã từng VIP';
                //     }
                // }
                return functions.success(res, 'success', {
                    total,
                    data
                });
            }
        }
        return functions.setError(res, 'missing module', 400);
    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
};

export const count = async (req, res) => {
    try {
        const adminID = req.adminID;
        const module = Number(req.body.module);
        let subSort = req.body.sort;
        const page = req.body.page || 1;
        const pageSize = req.body.pageSize || 50;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        let searchItem = req.body.searchItem || {};
        const name_uv = req.body.name_uv;
        const from = req.body.from;
        const to = req.body.to;
        let conditions = req.body.conditions;
        let condition = {};
        let Table = [];
        let sort = {};
        // let lookup = {};
        let lookup = [];
        // let unwind = {};
        let unwind = []; // Cho phép lookup và unwind nhiều 

        // Lọc conditions
        if (typeof conditions === 'object' && Object.keys(conditions).length > 0) {
            for (let key in conditions) {
                if (!conditions[key]) {
                    delete conditions[key]
                }
            }
        } else {
            conditions = {}
        }

        if (module) {

            // danh sách tài khoản
            if (module === 1) {
                Table = AdminUser;
                sort = { "adm_loginname": 1, "adm_active": -1 };
                const data = await Table.find({ adm_loginname: { $ne: "admin" } }, searchItem).sort(sort).skip(skip).limit(limit).lean();
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    const permision = await AdminUserRight.aggregate([
                        { $match: { adu_admin_id: element.adm_id } },
                        {
                            $lookup: {
                                from: "Modules",
                                localField: 'adu_admin_module_id',
                                foreignField: "mod_id",
                                as: "module"
                            }
                        },
                        { $unwind: "$module" },
                        { $project: { mod_name: "$module.mod_name" } }
                    ]);
                    let str = '';
                    permision.map(item => str += item.mod_name + ', ');
                    element.permision = str;

                    const language = await AdminUserLanguage.aggregate([
                        { $match: { aul_admin_id: element.adm_id } },
                        {
                            $lookup: {
                                from: "Languages",
                                localField: 'aul_lang_id',
                                foreignField: "lang_id",
                                as: "Languages"
                            }
                        },
                        { $unwind: "$Languages" },
                        { $project: { language: "$Languages.lang_name" } }
                    ]);
                    str = '';
                    if (language.length > 0) language.map(item => str += item.language + ', ');
                    element.language = str;
                }
                return functions.success(res, 'success', { data });
            }

            // ứng viên đăng kí mới
            if (module === 2) {
                Table = Users;
                condition = { register: { $ne: 4 } };
                // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                if (conditions?.use_nganh_nghe) {
                    conditions['use_nganh_nghe.id'] = conditions.use_nganh_nghe
                    delete conditions.use_nganh_nghe
                }
                if (conditions?.use_city_job) {
                    conditions['use_city_job.id'] = conditions.use_city_job
                    delete conditions.use_city_job
                }
                if (conditions?.use_id) { conditions.use_id = Number(conditions.use_id) }
                if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
                if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
                if (conditions?.use_phone) { conditions.use_phone = new RegExp(conditions.use_phone, 'i') }
                functions.CompareTime(condition, 'use_create_time', from, to)
                sort = { use_id: -1 };
            }

            // ứng viên sửa, cập nhật hồ sơ
            if (module === 3) {
                Table = Users;
                condition = { register: { $ne: 4 } };
                // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
                if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
                functions.CompareTime(condition, 'use_update_time', from, to);
                sort = { use_update_time: -1, use_id: -1 };
            }

            // chạy lâu
            // ứng viên tải CV từ máy tính cá nhân
            if (module === 4) {
                Table = Users;
                if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
                if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
                functions.CompareTime(condition, 'use_update_time', from, to);
                sort = { use_id: -1 };

                let userCvUpload = await UserCvUpload.find({})
                userCvUpload = userCvUpload.filter((item) => !!item?.use_id).map((item) => item.use_id)
                condition.use_id = { $in: userCvUpload }

                lookup = [{
                    "$lookup": {
                        from: "UserCvUpload",
                        localField: "use_id",
                        foreignField: "use_id",
                        as: "userCvUpload"
                    },
                }];
                unwind = [{
                    $unwind: {
                        path: "$userCvUpload",
                        preserveNullAndEmptyArrays: true
                    }
                }];
                searchItem = {
                    use_id: 1,
                    use_phone: 1,
                    use_mail: 1,
                    use_name: 1,
                    use_create_time: 1,
                    link: {
                        $concat: [`${process.env.DOMAIN_API}/`, { $toString: "$userCvUpload.link" }]
                    },
                }
            }

            // ứng viên chưa hoàn thiện hồ sơ từ web
            if (module === 5) {
                Table = TmpUser;
                condition = { $or: [{ tmp_register: 1 }, { tmp_register: 3 }] };
                // if (name_uv) condition.tmp_name = new RegExp(name_uv, 'i');
                if (conditions?.tmp_name) { conditions.tmp_name = new RegExp(conditions.tmp_name, 'i') }
                if (conditions?.tmp_email_lh) { conditions.tmp_email_lh = new RegExp(conditions.tmp_email_lh, 'i') }
                if (conditions?.tmp_phone_tk) { conditions.tmp_phone_tk = new RegExp(conditions.tmp_phone_tk, 'i') }

                functions.CompareTime(condition, 'tmp_time', from, to);
                sort = { tmp_id: -1 };
            }

            // ứng viên chưa hoàn thiện hồ sơ từ app tìm việc
            if (module === 6) {
                Table = TmpUser;
                condition = { tmp_register: 2 };
                if (name_uv) condition.tmp_name = new RegExp(name_uv, 'i');
                functions.CompareTime(condition, 'tmp_time', from, to);
                sort = { tmp_id: -1 };
            }

            // ứng viên chưa hoàn thiện hồ sơ từ app CV
            if (module === 7) {
                Table = Users;
                condition = { register: 4 };
                if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                functions.CompareTime(condition, 'use_create_time', from, to);
                sort = { tmp_id: -1 };
            }

            // ứng viên ứng tuyển NTD
            if (module === 8) {
                Table = NopHoSo;
                functions.CompareTime(condition, 'createdAt', from, to)
                sort = { id: -1 }
                if (conditions?.type) conditions.type = Number(conditions.type)
                const use_name = conditions?.use_name
                const new_title = conditions?.new_title
                const usc_company = conditions?.usc_company
                const usc_name_email = conditions?.usc_name_email
                const usc_phone_tk = conditions?.usc_phone_tk

                let user_promise = [], new_promise = [], com_promise = []
                // let userArr = [], newArr = [], comArr = []
                if (use_name) {
                    user_promise = Users.find({
                        use_name: { $regex: use_name, $options: 'i' }
                    }, { use_id: 1 });
                }
                if (new_title) {
                    new_promise = New.find({
                        new_title: { $regex: new_title, $options: 'i' }
                    }, { new_id: 1 });
                }
                if (usc_company || usc_name_email || usc_phone_tk) {
                    com_promise = UserCompany.find({
                        ...(usc_company && { usc_company: { $regex: usc_company, $options: 'i' } }),
                        ...(usc_name_email && { usc_name_email: { $regex: usc_name_email, $options: 'i' } }),
                        ...(usc_phone_tk && { usc_phone_tk: { $regex: usc_phone_tk, $options: 'i' } }),
                    }, { usc_id: 1 });
                }
                let [
                    userArr,
                    newArr,
                    comArr,
                ] = await Promise.all([
                    user_promise,
                    new_promise,
                    com_promise,
                ])

                if (use_name) {
                    userArr = userArr.filter((item) => !!item?.use_id).map((item) => (item.use_id));
                    delete conditions.use_name
                    conditions.nhs_use_id = { $in: userArr }
                }
                if (new_title) {
                    newArr = newArr.filter((item) => !!item?.new_id).map((item) => (item.new_id));
                    delete conditions.new_title
                    conditions.nhs_new_id = { $in: newArr }
                }
                if (usc_company || usc_name_email || usc_phone_tk) {
                    comArr = comArr.filter((item) => !!item?.usc_id).map((item) => (item.usc_id));
                    delete conditions.usc_company
                    delete conditions.usc_name_email
                    delete conditions.usc_phone_tk
                    conditions.nhs_com_id = { $in: comArr }
                }


                lookup = [
                    {
                        "$lookup": {
                            from: 'Users',
                            let: { nhs_use_id: '$nhs_use_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$use_id', '$$nhs_use_id'] },
                                    }
                                },
                            ],
                            as: 'user'
                        }
                    },
                    {
                        "$lookup": {
                            from: 'New',
                            let: { nhs_new_id: '$nhs_new_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$nhs_new_id'] },
                                    }
                                },
                            ],
                            as: 'new'
                        }
                    },
                    {
                        "$lookup": {
                            from: 'UserCompany',
                            let: { nhs_com_id: '$nhs_com_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$usc_id', '$$nhs_com_id'] },
                                    }
                                },
                            ],
                            as: 'com'
                        }
                    }
                ]

                unwind = [
                    {
                        $unwind: {
                            path: '$user',
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $unwind: {
                            path: '$new',
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $unwind: {
                            path: '$com',
                            preserveNullAndEmptyArrays: true
                        }
                    }
                ]

                searchItem = {
                    id: 1,
                    use_name: { $ifNull: ['$user.use_name', 'Chưa cập nhật'] },
                    use_phone: { $ifNull: ['$user.use_phone', 'Chưa cập nhật'] },
                    new_title: { $ifNull: ['$new.new_title', 'Chưa cập nhật'] },
                    usc_company: { $ifNull: ['$com.usc_company', 'Chưa cập nhật'] },
                    usc_phone_tk: { $ifNull: ['$com.usc_phone_tk', 'Chưa cập nhật'] },
                    usc_name_email: { $ifNull: ['$com.usc_name_email', 'Chưa cập nhật'] },
                    createdAt: 1,
                    type: 1,
                }
            }

            // tất cả ứng viên
            if (module === 9) {
                Table = Users;
                condition = { register: { $ne: 4 } };
                // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                if (conditions?.use_nganh_nghe) {
                    conditions['use_nganh_nghe.id'] = conditions.use_nganh_nghe
                    delete conditions.use_nganh_nghe
                }
                if (conditions?.use_city_job) {
                    conditions['use_city_job.id'] = conditions.use_city_job
                    delete conditions.use_city_job
                }
                if (conditions?.use_id) { conditions.use_id = Number(conditions.use_id) }
                if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
                if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
                if (conditions?.use_phone) { conditions.use_phone = new RegExp(conditions.use_phone, 'i') }
                if (conditions?.address) { conditions.address = new RegExp(conditions.address, 'i') }
                if (conditions?.gender) { conditions.gender = Number(conditions.gender) }
                if (conditions?.use_district_job) {
                    conditions['use_district_job.id'] = conditions.use_district_job
                    delete conditions.use_district_job
                }
                functions.CompareTime(condition, 'use_create_time', from, to);
                sort = { tmp_id: -1 };
            }

            // // ứng viên bị ẩn
            // if (module === 10) {
            //     Table = Users;
            //     condition = { use_show: 0 };
            //     // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
            //     if (conditions?.use_name) { conditions.use_name = new RegExp(conditions.use_name, 'i') }
            //     if (conditions?.use_mail) { conditions.use_mail = new RegExp(conditions.use_mail, 'i') }
            //     functions.CompareTime(condition, 'use_create_time', from, to);
            //     sort = { tmp_id: -1 };
            // }

            // trạng thái ứng viên NHS
            if (module === 11) {
                Table = NopHoSo;
                functions.CompareTime(condition, 'createdAt', from, to)
                sort = { id: -1 }
                if (conditions?.result) conditions.result = Number(conditions.result)
                const use_name = conditions?.use_name
                const new_title = conditions?.new_title
                // const usc_name = conditions?.usc_name
                const usc_company = conditions?.usc_company

                let user_promise = [], new_promise = [], com_promise = []
                // let userArr = [], newArr = [], comArr = []
                if (use_name) {
                    user_promise = Users.find({
                        use_name: { $regex: use_name, $options: 'i' }
                    }, { use_id: 1 });
                }
                if (new_title) {
                    new_promise = New.find({
                        new_title: { $regex: new_title, $options: 'i' }
                    }, { new_id: 1 });
                }
                if (usc_company) {
                    com_promise = UserCompany.find({
                        usc_company: { $regex: usc_company, $options: 'i' }
                    }, { usc_id: 1 });
                }
                let [
                    userArr,
                    newArr,
                    comArr,
                ] = await Promise.all([
                    user_promise,
                    new_promise,
                    com_promise,
                ])

                if (use_name) {
                    userArr = userArr.filter((item) => !!item?.use_id).map((item) => (item.use_id));
                    delete conditions.use_name
                    conditions.nhs_use_id = { $in: userArr }
                }
                if (new_title) {
                    newArr = newArr.filter((item) => !!item?.new_id).map((item) => (item.new_id));
                    delete conditions.new_title
                    conditions.nhs_new_id = { $in: newArr }
                }
                if (usc_company) {
                    comArr = comArr.filter((item) => !!item?.usc_id).map((item) => (item.usc_id));
                    delete conditions.usc_company
                    conditions.nhs_com_id = { $in: comArr }
                }

                lookup = [
                    {
                        "$lookup": {
                            from: 'Users',
                            let: { nhs_use_id: '$nhs_use_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$use_id', '$$nhs_use_id'] },
                                    }
                                },
                            ],
                            as: 'user'
                        }
                    },
                    {
                        "$lookup": {
                            from: 'New',
                            let: { nhs_new_id: '$nhs_new_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$nhs_new_id'] },
                                    }
                                },
                            ],
                            as: 'new'
                        }
                    },
                    {
                        "$lookup": {
                            from: 'UserCompany',
                            let: { nhs_com_id: '$nhs_com_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$usc_id', '$$nhs_com_id'] },
                                    }
                                },
                            ],
                            as: 'com'
                        }
                    }
                ]

                unwind = [
                    {
                        $unwind: {
                            path: '$user',
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $unwind: {
                            path: '$new',
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $unwind: {
                            path: '$com',
                            preserveNullAndEmptyArrays: true
                        }
                    }
                ]

                searchItem = {
                    id: 1,
                    use_name: { $ifNull: ['$user.use_name', 'Chưa cập nhật'] },
                    new_title: { $ifNull: ['$new.new_title', 'Chưa cập nhật'] },
                    usc_company: { $ifNull: ['$com.usc_company', 'Chưa cập nhật'] },
                    result: 1,
                    note: 1,
                }
            }

            // ứng viên add lỗi
            if (module === 12) {
                Table = UserAddFail;
                condition = {};
                // if (name_uv) condition.use_name = new RegExp(name_uv, 'i');
                if (conditions?.uf_email) { conditions.uf_email = new RegExp(conditions.uf_email, 'i') }
                if (conditions?.uf_phone) { conditions.uf_phone = new RegExp(conditions.uf_phone, 'i') }
                functions.CompareTime(condition, 'uf_time', from, to);
                sort = { uf_time: -1 };
            }

            // ứng viên đăng kí lỗi (chưa thấy)
            if (module === 13) {
                Table = TmpUser
                sort = { tmp_time: -1, tmp_id: -1 }
                condition = { error: 1 }
                functions.CompareTime(condition, 'tmp_time', from, to);
                if (conditions?.tmp_name) {
                    conditions.tmp_name = new RegExp(conditions.tmp_name, 'i')
                }
                if (conditions?.tmp_phone_tk) {
                    conditions.tmp_phone_tk = new RegExp(conditions.tmp_phone_tk, 'i')
                }
                if (conditions?.tmp_email_lh) {
                    conditions.tmp_email_lh = new RegExp(conditions.tmp_email_lh, 'i')
                }
                if (conditions?.tmp_job_city) {
                    conditions.tmp_job_city = new RegExp(conditions.tmp_job_city, 'i')
                }
                if (conditions?.tmp_job_district) {
                    conditions.tmp_job_district = new RegExp(conditions.tmp_job_district, 'i')
                }
                if (conditions?.tmp_nganh_nghe) {
                    conditions.tmp_nganh_nghe = new RegExp(conditions.tmp_nganh_nghe, 'i')
                }
                if (conditions?.error) {
                    conditions.error = Number(conditions.error)
                }
                if (conditions?.from) {
                    delete conditions.from
                }
            }

            // NTD đăng ký 
            if (module === 14) {
                // const result = await AdminUser.findOne({ adm_id: adminID }, { id_bophankd: 1 }).lean();
                Table = UserCompany;
                condition = {
                    $or: [{ usc_alias: { $ne: "" } }, { register: 2 }],
                    // usc_kd_crm: result?.id_bophankd
                    ...(!checkFullRight(adminID) && { usc_kd: Number(adminID) })
                };
                // if (name_uv) condition.usc_name = new RegExp(name_uv, 'i');
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_create_time: -1 };
                const time = functions.getTime()

                if (conditions?.usc_id) {
                    conditions.usc_id = Number(conditions.usc_id)
                }
                if (conditions?.usc_company) {
                    conditions.usc_company = new RegExp(functions.allVietnameseRegex(conditions.usc_company), 'i')
                }
                if (conditions?.usc_phone_tk) {
                    conditions.usc_phone_tk = new RegExp(conditions.usc_phone_tk, 'i')
                }
                if (conditions?.usc_email) {
                    conditions.usc_email = new RegExp(conditions.usc_email, 'i')
                }
                if (conditions?.usc_name_phone) {
                    conditions.usc_name_phone = new RegExp(conditions.usc_name_phone, 'i')
                }
                if (conditions?.usc_name_email) {
                    conditions.usc_name_email = new RegExp(conditions.usc_name_email, 'i')
                }
                if (conditions?.usc_mst) {
                    conditions.usc_mst = new RegExp(conditions.usc_mst, 'i')
                }

                if (conditions?.usc_city) {
                    conditions.usc_city = new RegExp(conditions.usc_city, 'i')
                }
                if (conditions?.usc_district) {
                    conditions.usc_district = new RegExp(conditions.usc_district, 'i')
                }

                conditions = { ...condition, ...conditions };
                subSort = { ...sort, ...subSort };

                const point_promise = TblPointCompany.find({ point_usc: { $gt: 0 }, day_end: { $gt: time } })

                const ghim_promise = NewGhimTin.aggregate([
                    {
                        $match: {
                            expired: { $gt: time }
                        }
                    },
                    {
                        $lookup: {
                            from: 'New',
                            let: { new_id: '$new_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$new_id'] }
                                    }
                                }
                            ],
                            as: 'new'
                        }
                    },
                    {
                        $unwind: '$new'
                    },
                    {
                        $group: {
                            _id: '$new.new_user_id'
                        }
                    },
                    {
                        $project: {
                            usc_id: '$_id'
                        }
                    }
                ])

                let [
                    point,
                    ghim
                ] = await Promise.all([
                    point_promise,
                    ghim_promise,
                ]);

                point = point.filter((item) => !!item?.usc_id).map((item) => (item.usc_id))
                ghim = ghim.filter((item) => !!item?.usc_id).map((item) => (item.usc_id))

                let vipArr = ghim.filter(item => point.includes(item))

                let vip = null
                vip = conditions?.vip
                delete conditions.vip
                if (!isNaN(Number(vip)) && (vip == "1" || vip == "0")) {
                    vip = Number(vip)
                    if (conditions?.usc_id) {
                        conditions.usc_id = {
                            $and: [
                                Number(conditions.usc_id),
                                ...(vip && { $in: vipArr }),
                                ...(!vip && { $nin: vipArr }),
                            ]
                        }
                    } else {
                        conditions.usc_id = {
                            ...(vip && { $in: vipArr }),
                            ...(!vip && { $nin: vipArr }),
                        }
                    }
                }

                const data_promise = Table.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    // { $skip: skip },
                    // { $limit: limit },
                    {
                        $project: {
                            usc_id: 1,
                            usc_company: 1,
                            usc_phone_tk: 1,
                            usc_email: 1,
                            usc_name_phone: 1,
                            usc_name_email: 1,
                            usc_skype: 1,
                            usc_address: 1,
                            usc_website: 1,
                            usc_active: 1,
                            usc_index: 1,
                            usc_note: 1,
                            usc_city: 1,
                            usc_district: 1,
                            usc_authentic: 1,
                            usc_kd: 1,
                            usc_kd_crm: 1,
                        }
                    }

                ]);

                let [
                    data,
                ] = await Promise.all([
                    data_promise,
                ]);
                if (Array.isArray(ghim) && ghim.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        if (vipArr.includes(element.usc_id)) {
                            element.vip = 1
                        } else {
                            element.vip = 0
                        }
                    }
                }
                // const tong = (total && Array.isArray(total) && total.length > 0 && 'total' in total[0]) ? total[0].total : 0;
                return functions.success(res, 'success', {
                    // total: tong, 
                    total: data.length
                });
            }

            // tất cả nhà tuyển dụng
            if (module === 15) {
                const time = functions.getTime()
                Table = UserCompany;
                // condition = { usc_kd: adminID };
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_create_time: -1 };
                if (conditions?.usc_id) {
                    conditions.usc_id = Number(conditions.usc_id)
                }
                if (conditions?.usc_company) {
                    conditions.usc_company = new RegExp(conditions.usc_company, 'i')
                }
                if (conditions?.usc_phone_tk) {
                    conditions.usc_phone_tk = new RegExp(conditions.usc_phone_tk, 'i')
                }
                if (conditions?.usc_email) {
                    conditions.usc_email = new RegExp(conditions.usc_email, 'i')
                }
                if (conditions?.usc_name_phone) {
                    conditions.usc_name_phone = new RegExp(conditions.usc_name_phone, 'i')
                }
                if (conditions?.usc_name_email) {
                    conditions.usc_name_email = new RegExp(conditions.usc_name_email, 'i')
                }
                if (conditions?.usc_mst) {
                    conditions.usc_mst = new RegExp(conditions.usc_mst, 'i')
                }

                if (conditions?.usc_city) {
                    conditions.usc_city = new RegExp(conditions.usc_city, 'i')
                }
                if (conditions?.usc_district) {
                    conditions.usc_district = new RegExp(conditions.usc_district, 'i')
                }

                conditions = { ...condition, ...conditions };
                subSort = { ...sort, ...subSort };

                const point_promise = TblPointCompany.find({ point_usc: { $gt: 0 }, day_end: { $gt: time } })

                const ghim_promise = NewGhimTin.aggregate([
                    {
                        $match: {
                            expired: { $gt: time }
                        }
                    },
                    {
                        $lookup: {
                            from: 'New',
                            let: { new_id: '$new_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$new_id'] }
                                    }
                                }
                            ],
                            as: 'new'
                        }
                    },
                    {
                        $unwind: '$new'
                    },
                    {
                        $group: {
                            _id: '$new.new_user_id'
                        }
                    },
                    {
                        $project: {
                            usc_id: '$_id'
                        }
                    }
                ])

                let [
                    point,
                    ghim
                ] = await Promise.all([
                    point_promise,
                    ghim_promise,
                ]);

                point = point.filter((item) => !!item?.usc_id).map((item) => (item.usc_id))
                ghim = ghim.filter((item) => !!item?.usc_id).map((item) => (item.usc_id))

                let vipArr = ghim.filter(item => point.includes(item))

                let vip = null
                if (!isNaN(Number(conditions?.vip))) {
                    vip = Number(conditions.vip)
                    delete conditions.vip

                    if (conditions?.usc_id) {
                        conditions.usc_id = {
                            $and: [
                                Number(conditions.usc_id),
                                ...(vip && { $in: vipArr }),
                                ...(!vip && { $nin: vipArr }),
                            ]
                        }
                    }
                }

                const data_promise = Table.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    // { $skip: skip },
                    // { $limit: limit },
                    {
                        $project: {
                            usc_id: 1,
                        }
                    }

                ]);

                let [
                    data,
                ] = await Promise.all([
                    data_promise,
                ]);
                // if (Array.isArray(ghim) && ghim.length > 0) {
                //     for (let i = 0; i < data.length; i++) {
                //         const element = data[i];
                //         if (vipArr.includes(element.usc_id)) {
                //             element.vip = 1
                //         } else {
                //             element.vip = 0
                //         }
                //     }
                // }
                // const tong = (total && Array.isArray(total) && total.length > 0 && 'total' in total[0]) ? total[0].total : 0;
                return functions.success(res, 'success', {
                    // total: tong, 
                    total: data.length
                });
            }

            // NTD bị ẩn
            if (module === 16) {
                Table = UserCompany;
                condition = { usc_kd: adminID, usc_show: 0 };
                if (name_uv) condition.usc_name = new RegExp(name_uv, 'i');
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_create_time: -1 };
            }

            // NTD chưa đăng tin
            if (module === 17) {
                Table = UserCompany;
                const idNTD = await New.distinct("new_user_id");
                condition = { usc_id: { $nin: idNTD } };
                // if (name_uv) condition.usc_name = new RegExp(name_uv, 'i');
                if (conditions?.usc_company) conditions.usc_company = new RegExp(conditions?.usc_company, 'i')
                if (conditions?.usc_email) conditions.usc_email = new RegExp(conditions?.usc_email, 'i')
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_id: -1 };
            }

            // NTD có tin sắp hết hạn
            if (module === 18) {
                Table = UserCompany;
                const idNTD = await New.distinct("new_user_id",
                    { new_han_nop: { $gt: functions.getTime(), $lt: functions.getTime() + 7 * 24 * 60 * 60 } });
                condition = { $or: [{ usc_alias: { $ne: "" } }, { register: 2 }], usc_id: { $in: idNTD } };
                // if (name_uv) condition.usc_name = new RegExp(name_uv, 'i');
                if (conditions?.usc_id) {
                    conditions.usc_id = Number(conditions.usc_id)
                }
                if (conditions?.usc_company) {
                    conditions.usc_company = new RegExp(conditions.usc_company, 'i')
                }
                if (conditions?.usc_phone_tk) {
                    conditions.usc_phone_tk = new RegExp(conditions.usc_phone_tk, 'i')
                }
                if (conditions?.usc_email) {
                    conditions.usc_email = new RegExp(conditions.usc_email, 'i')
                }
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_id: -1 };
            }

            // NTD đăng nhập
            if (module === 19) {
                Table = UserCompany;
                const idNTD = await New.distinct("new_user_id",
                    { new_han_nop: { $gt: functions.getTime(), $lt: functions.getTime() + 7 * 24 * 60 * 60 } });
                condition = { $or: [{ usc_alias: { $ne: "" } }, { register: 2 }], usc_id: { $in: idNTD } };
                if (name_uv) condition.usc_name = new RegExp(name_uv, 'i');
                functions.CompareTime(condition, 'usc_create_time', from, to);
                sort = { usc_id: -1 };
            }

            // Chạy chậm
            // Tin tuyen dung - NTD tự đăng 
            if (module === 20) {
                Table = New;
                sort = { new_id: -1 }
                conditions.selfpost = 1
                functions.CompareTime(condition, 'new_create_time', from, to)
                if (conditions?.new_id) conditions.new_id = Number(conditions.new_id)
                if (conditions?.new_user_id) conditions.new_user_id = Number(conditions.new_user_id)
                if (conditions?.new_title) conditions.new_title = new RegExp(functions.allVietnameseRegex(conditions.new_title), 'i')
                if (conditions?.new_cat_id) conditions.new_cat_id = new RegExp(`(^|,)${conditions.new_cat_id}(,|$)`)
                if (conditions?.new_city) conditions.new_city = new RegExp(`(^|,)${conditions.new_city}(,|$)`)
                // Gioi han theo admin
                const usc_company = conditions?.usc_company
                const listComId = await UserCompany.distinct("usc_id", {
                    ...(!checkFullRight(adminID) && { usc_kd: Number(adminID) }),
                    ...(!!usc_company && { usc_company: { $regex: functions.allVietnameseRegex(usc_company), $options: 'i' } })
                })

                if (conditions?.new_user_id) {
                    conditions = {
                        ...conditions,
                        $and: [
                            { new_user_id: { $eq: Number(conditions.new_user_id) } },
                            { new_user_id: { $in: listComId } }
                        ]
                    }
                } else {
                    conditions.new_user_id = { $in: listComId }
                }
                delete conditions.usc_company

                const time = functions.getTime();
                lookup = [
                    {
                        "$lookup": {
                            from: 'UserCompany',
                            let: { new_user_id: '$new_user_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$usc_id', '$$new_user_id'] },
                                    }
                                },
                            ],
                            as: 'com'
                        }
                    },
                    {
                        $lookup: {
                            from: 'NewGhimTin',
                            let: { new_id: "$new_id" },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$new_id', '$$new_id'] },
                                        expired: { $gt: time },
                                    }
                                }
                            ],
                            as: 'pin'
                        }
                    }
                ]

                unwind = [
                    {
                        $unwind: '$com'
                    },
                    {
                        $unwind: {
                            path: '$pin',
                            preserveNullAndEmptyArrays: true,
                        }
                    },
                ]

                searchItem = {
                    new_id: 1,
                    new_user_id: 1,
                    new_title: 1,
                    usc_company: '$com.usc_company',
                    usc_phone_tk: '$com.usc_phone_tk',
                    usc_address: '$com.usc_address',
                    new_create_time: 1,
                    // new_hot: 1,
                    new_hot: { $ifNull: ['$pin.new_hot', 0] },
                    new_gap: 1,
                    // new_cao: 1,
                    new_cao: { $ifNull: ['$pin.new_cao', 0] },
                    new_nganh: 1,
                    new_cat_id: 1,
                    new_city: 1,
                }

                conditions = { ...condition, ...conditions };
                subSort = { ...sort, ...subSort };

                const total_promise = Table.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    ...lookup,
                    ...unwind,
                    {
                        $group: {
                            _id: null,
                            total: {
                                $sum: 1
                            }
                        }
                    }
                ]);
                const [
                    total
                ] = await Promise.all([
                    total_promise
                ]);
                const tong = (total && Array.isArray(total) && total.length > 0 && 'total' in total[0]) ? total[0].total : 0;

                return functions.success(res, 'success', { total: tong });
            }

            // Truong Diem - Gói điểm 
            if (module === 21) {
                Table = TblPoint
                sort = { point_id: -1 }
                condition = { status: 1 }
            }

            // Truong Diem - Danh sach
            if (module === 22) {
                Table = TblPointCompany
                sort = { usc_id: -1 }
                functions.CompareTime(condition, 'day_end', from, to);

                // Gioi han theo admin
                const usc_company = conditions?.usc_company
                const usc_id = conditions?.usc_id
                const usc_email = conditions?.usc_email
                const usc_phone_tk = conditions?.usc_phone_tk
                const listCom = await UserCompany.distinct("usc_id", {
                    ...(!checkFullRight(adminID) && { usc_kd: Number(adminID) }),
                    ...(!!usc_id && { usc_id: Number(usc_id) }),
                    ...(!!usc_company && { usc_company: { $regex: functions.allVietnameseRegex(usc_company), $options: 'i' } }),
                    ...(!!usc_email && { usc_email: { $regex: usc_email, $options: 'i' } }),
                    ...(!!usc_phone_tk && { usc_phone_tk: { $regex: usc_phone_tk, $options: 'i' } }),
                })
                delete conditions?.usc_company
                delete conditions?.usc_id
                delete conditions?.usc_email
                delete conditions?.usc_phone_tk
                conditions.usc_id = { $in: listCom }

                lookup = [
                    {
                        '$lookup': {
                            from: 'UserCompany',
                            let: { usc_id: '$usc_id' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ['$usc_id', '$$usc_id'] },

                                    }
                                }
                            ],
                            as: 'com'
                        }
                    }
                ]
                unwind = [
                    {
                        $unwind: '$com'
                    }
                ]
                searchItem = {
                    usc_id: 1,
                    point: 1,
                    point_usc: 1,
                    day_reset_point: 1,
                    day_end: 1,
                    usc_company: '$com.usc_company',
                    usc_name_email: '$com.usc_name_email',
                }
            }

            // Chay cham
            // Truong Diem - Lich su
            if (module === 23) {
                Table = UserCompany
                sort = { usc_id: -1 }
                // Gioi han theo admin
                const usc_company = conditions?.usc_company
                const usc_id = conditions?.usc_id
                const usc_email = conditions?.usc_email
                const usc_phone_tk = conditions?.usc_phone_tk
                const listCom = await UserCompany.distinct("usc_id", {
                    ...(!checkFullRight(adminID) && { usc_kd: Number(adminID) }),
                    ...(!!usc_id && { usc_id: Number(usc_id) }),
                    ...(!!usc_company && { usc_company: { $regex: functions.allVietnameseRegex(usc_company), $options: 'i' } }),
                    ...(!!usc_email && { usc_email: { $regex: usc_email, $options: 'i' } }),
                    ...(!!usc_phone_tk && { usc_phone_tk: { $regex: usc_phone_tk, $options: 'i' } }),
                })
                delete conditions?.usc_company
                delete conditions?.usc_id
                delete conditions?.usc_email
                const tong = listCom.length

                return functions.success(res, 'success', { total: tong });
            }

            // Truong diem - Lich su cong diem
            if (module === 24) {
                // Table = UserCompany
                sort = { usc_id: -1 }
                if (conditions?.usc_name_email) {
                    conditions.usc_name_email = new RegExp(conditions.usc_name_email, 'i')
                }
                // lookup = [
                //     {
                //         $lookup: {
                //             from: 'TblPointUsed',
                //             let: { usc_id: '$usc_id' },
                //             pipeline: [
                //                 {
                //                     $match: {
                //                         $expr: { $eq: ['$usc_id', '$$usc_id'] },
                //                     }
                //                 }
                //             ],
                //             as: 'used'
                //             // localField: 'usc_id',
                //             // foreignField: 'usc_id',
                //             // as: 'used'
                //         }
                //     },
                //     {
                //         $lookup: {
                //             from: 'TblPointAdded',
                //             let: { usc_id: '$usc_id' },
                //             pipeline: [
                //                 {
                //                     $match: {
                //                         $expr: { $eq: ['$usc_id', '$$usc_id'] },
                //                     }
                //                 }
                //             ],
                //             as: 'added'
                //         }
                //     }
                // ]
                // unwind = [
                //     {
                //         $unwind: {
                //             path: '$used',
                //             preserveNullAndEmptyArrays: true
                //         }
                //     },
                //     {
                //         $unwind: {
                //             path: '$added',
                //             preserveNullAndEmptyArrays: true
                //         }
                //     }
                // ]
                // searchItem = {
                //     usc_id: '$userCom.usc_id',
                //     usc_company: '$userCom.usc_company',
                //     usc_name_email: '$userCom.usc_name_email',
                //     // point_used: { $sum: '$used.point' },
                //     // point_added: { $sum: '$added.point' },
                //     point_used: 1,
                //     point_added: 1,
                // }

                conditions = { ...condition, ...conditions };
                subSort = { ...sort, ...subSort };
                // const data_promise = Table.aggregate([
                //     { $match: conditions },
                //     { $sort: subSort },
                //     { $skip: skip },
                //     { $limit: limit },
                //     ...lookup,
                //     ...unwind,
                //     {
                //         $group: {
                //             _id: '$usc_id',
                //             userCom: { $first: "$$ROOT" },
                //             point_used: { $sum: '$used.point' },
                //             point_added: { $sum: '$added.point' },
                //         }
                //     },
                //     { $project: searchItem }
                // ]);

                // const total_promise = Table.aggregate([
                //     { $match: conditions },
                //     { $sort: subSort },
                //     ...lookup,
                //     ...unwind,
                //     {
                //         $group: {
                //             _id: null,
                //             total: {
                //                 $sum: 1
                //             }
                //         }
                //     }
                // ]);
                // const [
                //     data,
                //     // total
                // ] = await Promise.all([
                //     data_promise,
                //     // total_promise
                // ]);
                // // const tong = (total && Array.isArray(total) && total.length > 0 && 'total' in total[0]) ? total[0].total : 0;
                // return functions.success(res, 'success', { data });

                const com = await UserCompany.find(conditions, { usc_id: 1, usc_company: 1, usc_name_email: 1 }).sort(subSort)
                const filter = com.map(item => item.usc_id)

                const pointUsed_promise = TblPointUsed.aggregate([
                    {
                        $match: {
                            usc_id: { $in: filter }
                        }
                    },
                    {
                        $group: {
                            _id: '$usc_id',
                            total: {
                                $sum: '$point'
                            }
                        }
                    }
                ])

                const pointAdded_promise = TblPointAdded.aggregate([
                    {
                        $match: {
                            usc_id: { $in: filter }
                        }
                    },
                    {
                        $group: {
                            _id: "$usc_id",
                            total: {
                                $sum: "$point"
                            }
                        }
                    }
                ])

                const [
                    pointUsed,
                    pointAdded,
                ] = await Promise.all([
                    pointUsed_promise,
                    pointAdded_promise,
                ])

                const data = []
                for (let i = 0; i < com.length; i++) {
                    const element = com[i];
                    const point_used_index = pointUsed.findIndex(item => item._id === element.usc_id)
                    const point_added_index = pointAdded.findIndex(item => item._id === element.usc_id)
                    data.push({
                        _id: element.usc_id,
                        point_used: point_used_index != -1 ? pointUsed[point_used_index]?.total : 0,
                        point_added: point_added_index != -1 ? pointAdded[point_added_index]?.total : 0,
                        usc_id: element?.usc_id,
                        usc_company: element?.usc_company,
                        usc_name_email: element?.usc_name_email,
                    })
                }
                return functions.success(res, 'success', { total: data.length });
            }

            // Bài đăng bổ sung
            if (module === 29) {
                Table = ttbsDetail
                sort = { timeedit: -1, timecreate: -1 }
                if (conditions?.idcate) {
                    conditions.idcate = Number(conditions.idcate)
                    if (!conditions.idcate) {
                        delete conditions.idcate
                    }
                }

                searchItem = {
                    id: 1,
                    title: 1,
                    mota: 1,
                    noidung: 1,
                    seo_tt: 1,
                    seo_key: 1,
                    seo_des: 1,
                    timecreate: 1,
                    timeedit: 1,
                    idcate: 1,
                }
            }

            conditions = { ...condition, ...conditions };
            subSort = { ...sort, ...subSort };
            if (JSON.stringify(unwind) != '[]') {
                // const data_promise = Table.aggregate([
                //     { $match: conditions },
                //     { $sort: subSort },
                //     { $skip: skip },
                //     { $limit: limit },
                //     ...lookup,
                //     ...unwind,
                //     { $project: searchItem }
                // ]);

                const total_promise = Table.aggregate([
                    { $match: conditions },
                    { $sort: subSort },
                    ...lookup,
                    ...unwind,
                    {
                        $group: {
                            _id: null,
                            total: {
                                $sum: 1
                            }
                        }
                    }
                ]);
                const [
                    // data, 
                    total
                ] = await Promise.all([
                    // data_promise, 
                    total_promise
                ]);
                const tong = (total && Array.isArray(total) && total.length > 0 && 'total' in total[0]) ? total[0].total : 0;
                return functions.success(res, 'success', { total: tong });
            } else {
                // const data_promise = Table.find(conditions, searchItem).sort(subSort).skip(skip).limit(limit).lean();
                const total_promise = Table.countDocuments(conditions);
                const [
                    // data, 
                    total
                ] = await Promise.all([
                    // data_promise, 
                    total_promise
                ]);

                // for (let i = 0; i < total; i++) {
                //     const element = data[i];
                //     if (module === 14) {
                //         const result = await TblPointCompany.findOne({ usc_id: element.usc_id }).lean();
                //         if (!result) element.status = 'Chưa VIP';
                //         else if (result && result.day_end == 0) element.status = 'Chưa VIP';
                //         else if (result && result.day_end > 0 && functions.getTime() < result.day_end) element.status = 'VIP';
                //         else element.status = 'Đã từng VIP';
                //     }
                // }
                return functions.success(res, 'success', { total });
            }
        }
        return functions.setError(res, 'missing module', 400);
    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
};

const promiseNopHoSo = (new_id) => {
    const query = NopHoSo.countDocuments({ nhs_new_id: new_id })
    // console.log(query)
    return query
}

export const AdminDelete = async (req, res) => {
    try {
        const module = Number(req.body.module);
        let conditions = req.body.conditions;

        if (module && conditions) {
            if (module === 21) {
                if (conditions?.point_id) {
                    const checkExist = await TblPoint.findOne({ ...conditions, status: 1 })
                    if (checkExist) {
                        await TblPoint.updateOne({ ...conditions, status: 1 }, { $set: { status: 0 } })
                    }
                    return functions.setError(res, 'Not found', 404)
                }
            }
        }

        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

export const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (username, password) {
            const hashedPassword = functions.createMd5(password)
            const checkExist = await AdminUser.findOne({
                adm_loginname: username,
                adm_password: hashedPassword,
                adm_active: 1,
            }).lean()
            if (checkExist) {
                checkExist.adm_picture = functions.getAvatarAdmin(checkExist?.adm_picture);
                // var modules = await AdminUserRight.find({ adu_admin_id: Number(checkExist.adm_id) }).lean();
                var isFullModules = checkFullRight(Number(checkExist.adm_id)) ? 1 : 0;
                if (isFullModules == 0) {
                    var modulesarr = await AdminUserRight.find({ adu_admin_id: Number(checkExist.adm_id) })
                        .select('adu_admin_module_id')
                        .lean();

                    var modules = modulesarr.map(module => module.adu_admin_module_id);
                }
                else {
                    var modules = [];
                }

                const data = {
                    ...checkExist,
                    type: 3,
                    modules,
                    isFullModules
                }
                const Token = await functions.createToken(data, '1d');
                const RefreshToken = await functions.createToken(data, '1y');
                return functions.success(res, "Đăng nhập thành công", { data: { Token, RefreshToken, data } });
            }
            return functions.setError(res, "Tài khoản hoặc mật khẩu không chính xác", 400);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Tạo gói điểm
export const CreatePoint = async (req, res) => {
    try {
        const {
            name,
            point,
        } = req.body
        if (name && point && typeof name === 'string' && !isNaN(Number(point))) {
            const point_id = await functions.getMaxId(TblPoint, 'point_id')
            await TblPoint.create({
                point_id,
                name,
                point: Number(point),
                status: 1
            })
            return functions.success(res, 'Tạo gói thành công', { point_id })
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

export const UpdatePoint = async (req, res) => {
    try {
        const {
            point_id,
            name,
            point,
        } = req.body
        if (point_id && name && point && typeof name === 'string' && !isNaN(Number(point))) {
            const checkExist = await TblPoint.findOne({ point_id: point_id })
            if (checkExist) {
                await TblPoint.updateOne({ point_id: point_id }, {
                    $set: {
                        name,
                        point,
                    }
                })
                return functions.success(res, 'Sửa gói thành công', { point_id })
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

export const DetailPoint = async (req, res) => {
    try {
        let {
            point_id
        } = req.body
        point_id = Number(point_id)
        if (point_id) {
            const checkExist = await TblPoint.findOne({ point_id: point_id })
            if (checkExist) {
                return functions.success(res, 'Gói điểm', { data: checkExist })
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Cộng (trừ) điểm
export const EditPointCompany = async (req, res) => {
    try {
        const {
            usc_id,
            point,
            point_usc,
            day_end,
        } = req.body
        const adm_id = req.adminID
        if (
            usc_id &&
            day_end &&
            // !isNaN(Number(point)) &&
            !isNaN(Number(point_usc))
        ) {
            const checkExist = await TblPointCompany.findOne({ usc_id: usc_id }).lean()
            if (checkExist) {
                // let currentPoint = checkExist.point_usc
                // if (!currentPoint) currentPoint = 0
                // let newPoint = currentPoint + Number(point)
                // if (newPoint < 0) newPoint = 0

                await TblPointCompany.updateOne({ usc_id: usc_id }, {
                    $set: {
                        point: Number(point) >= 0 ? Number(point) : 0,
                        point_usc: Number(point_usc) >= 0 ? Number(point_usc) : 0,
                        day_end: functions.getTime(day_end)
                    }
                })

                const id_p = await functions.getMaxId(TblPointAdded, 'id_p')
                await TblPointAdded.create({
                    id_p,
                    usc_id,
                    point: Number(point_usc) >= 0 ? (Number(point_usc) - Number(checkExist.point_usc)) : -Number(checkExist.point_usc),
                    added_day: functions.getTime(),
                    set_expired: functions.getTime(day_end),
                    adm_id: adm_id,
                })

                return functions.success(res, 'Sửa điểm thành công')
            }
            return functions.setError(res, 'Không tồn tại', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Cộng (trừ) điểm mới
export const AddSubPointCompany = async (req, res) => {
    try {
        const {
            usc_id,
            point_usc,
            day_end,
        } = req.body
        if (
            usc_id &&
            day_end &&
            // !isNaN(Number(point)) &&
            !isNaN(Number(point_usc))
        ) {
            const checkExist = await TblPointCompany.findOne({ usc_id: usc_id }).lean()
            if (checkExist) {
                // let currentPoint = checkExist.point_usc
                // if (!currentPoint) currentPoint = 0
                // let newPoint = currentPoint + Number(point)
                // if (newPoint < 0) newPoint = 0
                if (Number(point_usc) + checkExist.point_usc >= 0) {
                    await TblPointCompany.updateOne({ usc_id: usc_id }, {
                        $set: {
                            point_usc: Number(point_usc) + checkExist.point_usc,
                            day_end: functions.getTime(day_end)
                        }
                    })
                    const id_p = await functions.getMaxId(TblPointAdded, 'id_p')
                    await TblPointAdded.create({
                        id_p,
                        usc_id,
                        point: Number(point_usc),
                        added_day: functions.getTime(),
                    })
                    return functions.success(res, 'Sửa điểm thành công')
                }
                else {
                    return functions.setError(res, 'Điểm trừ vượt qua số điểm có', 404)
                }
            }
            return functions.setError(res, 'Không tồn tại', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Chi tiết điểm của ntd
export const DetailPointCompany = async (req, res) => {
    try {
        const {
            usc_id
        } = req.body
        if (!isNaN(Number(usc_id))) {
            const checkExist = await TblPointCompany.findOne({ usc_id: Number(usc_id) })
            if (checkExist) {
                return functions.success(res, 'Điểm NTD', { data: checkExist })
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Ghim tin
export const PinNew = async (req, res) => {
    try {
        let {
            new_id,
            // admin_id,
            new_hot,
            new_cao,
            expired,
        } = req.body
        const adminID = req.adminID;
        if (new_id && !isNaN(Number(new_hot)) && !isNaN(Number(new_cao)) && expired) {
            const checkExist = await New.findOne({ new_id: Number(new_id) })
            if (checkExist) {
                const checkGhim = await NewGhimTin.findOne({ new_id: Number(new_id) })

                expired = new Date(expired).setHours(23, 59, 59)
                if (checkGhim) {
                    await NewGhimTin.updateOne({ new_id: new_id }, {
                        $set: {
                            admin_id: adminID,
                            new_hot,
                            new_cao,
                            expired: functions.getTime(expired),
                        }
                    })
                } else {
                    await NewGhimTin.create({
                        new_id,
                        admin_id: adminID,
                        new_hot,
                        new_cao,
                        expired: functions.getTime(expired),
                    })
                }
                return functions.success(res, 'Ghim tin thành công')
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Thông tin ghim tin 
export const DetailPinNew = async (req, res) => {
    try {
        let {
            new_id,
        } = req.body
        if (new_id) {
            const checkExist = await New.findOne({ new_id: Number(new_id) })
            if (checkExist) {
                const time = functions.getTime();
                const checkGhim = await NewGhimTin.findOne({ new_id: Number(new_id), expired: { $gt: time } })
                if (checkGhim) {
                    return functions.success(res, 'Ghim tin', { data: checkGhim })
                } else {
                    return functions.success(res, 'Ghim tin', { data: null })
                }
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// xác thực 
export const VerifyAccount = async (req, res) => {
    try {
        const {
            id,
            type
        } = req.body
        if (id && type && Number(type) && Number(id)) {
            if (Number(type) === 1) { // NTD
                const checkExist = await UserCompany.findOne({ usc_id: Number(id) })
                if (checkExist) {
                    await UserCompany.updateOne({ usc_id: Number(id) }, {
                        $set: { usc_authentic: 1 }
                    })
                    return functions.success(res, 'Xác thực thành công')
                }
            }
            if (Number(type) === 2) { // UV
                const checkExist = await Users.findOne({ use_id: Number(id) })
                if (checkExist) {
                    await Users.updateOne({ use_id: Number(id) }, {
                        $set: { use_authentic: 1 }
                    })
                    return functions.success(res, 'Xác thực thành công')
                }
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Đăng nhập
export const LoginAs = async (req, res) => {
    try {
        const {
            id,
            type
        } = req.body
        if (id && type && Number(type) && Number(id)) {
            if (Number(type) === 1) { // NTD
                const checkExist = await UserCompany.findOne({ usc_id: Number(id) })
                if (checkExist) {
                    const logo = functions.getAvatarNTD(checkExist.usc_create_time, checkExist.usc_logo);
                    const conditionsToken = { usc_id: checkExist.usc_id, phone: checkExist.usc_phone_tk, auth: checkExist.usc_authentic, type: 1, usc_company: checkExist.usc_company, logo };
                    const token = await functions.createToken(conditionsToken, '60d');
                    const reFreshToken = await functions.createToken(conditionsToken, '1y');
                    return functions.success(res, 'Thông tin đăng nhập', {
                        Token: token,
                        rfToken: reFreshToken,
                        id: conditionsToken.usc_id,
                        phone: conditionsToken.phone,
                        name: conditionsToken.usc_company,
                        auth: conditionsToken.auth,
                        type: 1,
                        logo
                    })
                }
            }
            if (Number(type) === 2) { // UV
                const checkExits = await Users.findOne({ use_id: Number(id) })
                if (checkExits) {
                    const data = {
                        id: checkExits.use_id,
                        phone: checkExits.use_phone,
                        name: checkExits.use_name,
                        auth: checkExits.use_authentic,
                        type: 2,
                        logo: functions.getAvatarCandi(checkExits.use_create_time, checkExits.use_logo),
                        percentHoSo: percentHoSo,
                    };
                    const Token = await functions.createToken(data, '60d');
                    const RefreshToken = await functions.createToken(data, '1y');
                    return functions.success(res, "Thông tin đăng nhập", {
                        Token: Token,
                        rfToken: RefreshToken,
                        ...data
                    });
                }
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Lẫy CV UV 
export const getAllCandiCV = async (req, res) => {
    try {
        const {
            id
        } = req.body
        if (id) {
            const data = await SaveCandidateCv.aggregate([
                { $match: { iduser: Number(id) } },
                { $sort: { cv_order: -1, timeedit: -1, id: -1 } },
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
                        // html: 1,
                        name_cv: 1,
                        alias: "$samplecv.alias",
                        id: 1,
                        name: "$samplecv.name",
                        cv_order: 1,
                        iduser: 1,

                    }
                },
            ]);
            const total = data.length
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                // const result = JSON.parse(element.html);
                // element.cv_title = result.cv_title;
                element.name_cv = `${process.env.DOMAIN_API}/upload/cv_uv/uv_${id}/${element.name_cv}`;
                element.cv_pdf = `${process.env.DOMAIN_API}/dowload/cv_pdf/user_${id}/cvid_${element.idcv}/${element.idcv}-job247.pdf`;
                // element.cv_pdf.replace('.pdf', '');
            }
            return functions.success(res, 'CV', {
                data,
                total
            })
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Từ chối ứng viên đăng ký lỗi
export const denyUserRegisterFail = async (req, res) => {
    try {
        let {
            id,
            deny
        } = req.body
        id = Number(id)
        deny = Number(deny)
        if (id && !isNaN(deny)) {
            const checkExist = await TmpUser.findOne({ tmp_id: id }).lean()
            if (checkExist) {
                await TmpUser.updateOne({ tmp_id: id }, {
                    $set: {
                        deny: deny
                    }
                })
                return functions.success(res, 'Thay đổi trạng thái thành công')
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Thêm mới NTD 
export const createEmployer = async (req, res) => {
    try {
        let {
            usc_name_email,
            usc_company,
            usc_phone_tk,
            usc_website,
            usc_skype,
            usc_address,
            usc_city,
            usc_district,
            // usc_logo,
            usc_size,
            usc_company_info,
            adm_ntd,
            id_bophankd,
        } = req.body
        const files = req.files
        if (usc_name_email && usc_company && usc_phone_tk && usc_address && usc_size) {
            if (files && files?.usc_logo) {
                const time = functions.getTime()
                const date = functions.getDate()
                const arrMessage = {};
                const checkNameCom = await UserCompany.findOne({ usc_company: usc_company, usc_md5: null }).lean();
                const checkAddress = await UserCompany.findOne({ usc_address: usc_address, usc_md5: null }).lean();
                const checkTrung = await UserCompany.findOne({ usc_phone_tk: usc_phone_tk, usc_md5: null }).lean();
                const checkPhoneTK = await functions.checkPhone(usc_phone_tk);
                // const checkPassWord = functions.checkPassWord(password);
                if (!checkPhoneTK) return functions.setError(res, 'Nhập số điện thoại không hợp lệ', 400);
                if (checkNameCom) arrMessage.nameCompany = `Tên công ty đã được đăng ký, vui lòng kiểm tra lại.`;
                if (checkAddress) arrMessage.address = `Địa chỉ này đã được sử dụng. Bạn vui lòng nhập địa chỉ khác.`;
                if (checkTrung) arrMessage.phoneTK = `Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.`;
                // if (password !== rePassword) arrMessage.password = `Nhập password và re-password không khớp.`;
                // if (!checkPassWord) arrMessage.password = `Mật khẩu phải ít nhất 6 ký tự, bao gồm có ít nhất 1 chữ và 1 số.`;

                if (JSON.stringify(arrMessage) !== '{}') {
                    // RegisterFailEmployers(phoneTK, email, nameCompany, city, descriptions, address, phone);
                    return functions.setError(res, arrMessage[Object.keys(arrMessage)[0]], 400);
                }

                const checkUpload = await functions.uploadFile(`${date}`, files.usc_logo, time);
                if (!checkUpload) return functions.setError(res, 'Gặp lỗi trong quá trình xử lí logo', 400);
                let logo = checkUpload;


                const hashedPassword = functions.createMd5('job247');
                const alias = functions.createLinkTilte(usc_company);

                const dataUpdate = {
                    'usc_pass': hashedPassword,
                    'usc_security': '0',
                    'usc_authentic': 1,
                    'usc_company': usc_company,
                    'usc_city': usc_city,
                    'usc_district': usc_district,
                    'usc_address': usc_address,
                    'usc_alias': alias,
                    // 'ip_address': ip,
                    'usc_create_time': time,
                    'usc_update_time': time,
                    'usc_logo': logo,
                    'usc_skype': usc_skype,
                    'usc_index': 0,
                    'DateOfIncorporation': "",
                    'usc_mst': "",
                    'usc_loai_hinh': "",
                    'usc_kd': adm_ntd,
                    'usc_kd_crm': id_bophankd,
                    'usc_crm': 1,
                    // 'usc_otp': otp,
                    'usc_phone_tk': usc_phone_tk,
                    'usc_name_email': usc_name_email,
                    'usc_company_info': usc_company_info,
                    // 'image_com': image.join(','),
                    'financial_sector': [{ id: '' }],
                    'usc_size': usc_size,
                    'usc_website': usc_website,
                };

                let returnId = 0
                const check = await UserCompany.findOneAndUpdate({ usc_phone_tk: usc_phone_tk, usc_md5: { $ne: null } }, { usc_id: 1 }).lean();
                if (check) {
                    returnId = check.usc_id
                    await UserCompany.findOneAndUpdate({ usc_phone_tk: usc_phone_tk }, dataUpdate);
                } else {
                    var maxid1 = await functions.getMaxId(UserCompany, 'usc_id');
                    dataUpdate.usc_id = maxid1;
                    returnId = maxid1
                    await UserCompany.create(dataUpdate);

                    let id_up = await functions.getMaxId(TblPointCompany, 'id_up')
                    await TblPointCompany.create({
                        id_up,
                        usc_id: maxid1,
                        point: 5,
                        point_usc: 0,
                        day_reset_point: 0,
                        day_end: 0
                    });
                }
                UserCompanyError.deleteOne({ err_usc_phone_tk: usc_phone_tk });

                return functions.success(res, 'Tạo NTD thành công', { usc_id: returnId });
            }
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Chi tiết NTD
export const detailEmployer = async (req, res) => {
    try {
        const {
            usc_id
        } = req.body
        if (usc_id && !isNaN(Number(usc_id))) {
            const check = await UserCompany.findOne({ usc_id: Number(usc_id) }).lean();
            if (check) {
                // check.usc_logo = functions.getAvatarNTD(check.usc_create_time, check.usc_logo);
                check.usc_logo = functions.getAvatarNTD2(check.usc_create_time, check.usc_logo);
                return functions.success(res, 'Thông tin NTD', { data: check })
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Sửa nhà tuyển dụng
export const editEmployer = async (req, res) => {
    try {
        const {
            usc_id,
            usc_phone_tk,
            usc_pass,
            usc_company,
            usc_phone,
            usc_website,
            usc_skype,
            usc_city,
            usc_district,
            usc_address,
            // usc_logo,
            usc_boss,
            usc_mst,
            usc_note,
            meta_tit,
            meta_key,
            meta_des,
            usc_size,
            financial_sector,
            usc_company_info,
            usc_kd,
            // adm_ntd,
            usc_kd_crm,
            // id_bophankd,
        } = req.body
        const files = req.files
        if (usc_company && (usc_id || usc_phone_tk)) {
            const checkExist = await UserCompany.findOne({
                $or: [
                    { usc_id: Number(usc_id) },
                    { usc_phone_tk: usc_phone_tk }
                ]
            })
            if (checkExist) {
                const time = functions.getTime()
                const date = functions.getDate()
                const arrMessage = {};
                if (usc_phone) {
                    const checkTrung = await UserCompany.findOne({ usc_phone: usc_phone, usc_md5: null, usc_id: { $ne: Number(checkExist.usc_id) } }).lean();
                    const checkPhoneTK = await functions.checkPhone(usc_phone);
                    if (!checkPhoneTK) return functions.setError(res, 'Nhập số điện thoại không hợp lệ', 400);
                    if (checkTrung) arrMessage.phone = `Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.`;
                }
                if (usc_address) {
                    const checkAddress = await UserCompany.findOne({ usc_address: usc_address, usc_md5: null, usc_id: { $ne: Number(checkExist.usc_id) } }).lean();
                    if (checkAddress) arrMessage.address = `Địa chỉ này đã được sử dụng. Bạn vui lòng nhập địa chỉ khác.`;
                }
                const checkNameCom = await UserCompany.findOne({ usc_company: usc_company, usc_md5: null, usc_id: { $ne: Number(checkExist.usc_id) } }).lean();
                if (checkNameCom) arrMessage.nameCompany = `Tên công ty đã được đăng ký, vui lòng kiểm tra lại.`;

                if (JSON.stringify(arrMessage) !== '{}') {
                    // RegisterFailEmployers(phoneTK, email, nameCompany, city, descriptions, address, phone);
                    return functions.setError(res, arrMessage[Object.keys(arrMessage)[0]], 400);
                }

                let logo = ''
                if (files && files.usc_logo) {
                    const checkUpload = await functions.uploadFile(`${date}`, files.usc_logo, time);
                    if (!checkUpload) return functions.setError(res, 'Gặp lỗi trong quá trình xử lí logo', 400);
                    logo = checkUpload;
                }

                const hashedPassword = functions.createMd5(usc_pass);
                const alias = functions.createLinkTilte(usc_company);

                let financialArr = []
                if (financial_sector && typeof financial_sector === 'string') {
                    financialArr = financial_sector.split(',').filter(item => !!item.trim()).map(item => ({ id: item.trim() }))
                }

                const dataUpdate = {
                    'usc_pass': hashedPassword,
                    'usc_security': '0',
                    'usc_authentic': 1,
                    'usc_company': usc_company,
                    'usc_city': usc_city,
                    'usc_district': usc_district,
                    'usc_address': usc_address,
                    'usc_alias': alias,
                    // 'ip_address': ip,
                    'usc_create_time': time,
                    'usc_update_time': time,
                    ...(logo && { 'usc_logo': logo }),
                    'usc_skype': usc_skype,
                    'usc_index': 0,
                    'DateOfIncorporation': "",
                    'usc_mst': usc_mst,
                    'usc_loai_hinh': "",
                    'usc_kd': usc_kd,
                    'usc_kd_crm': usc_kd_crm,
                    'usc_crm': 1,
                    // 'usc_otp': otp,
                    'usc_phone_tk': usc_phone_tk,
                    // 'usc_name_email': usc_name_email,
                    'usc_company_info': usc_company_info,
                    // 'image_com': image.join(','),
                    'financial_sector': financialArr.length > 0 ? financialArr : [{ id: '' }],
                    'usc_size': usc_size,
                    'usc_website': usc_website,
                    'usc_boss': usc_boss,
                    'usc_note': usc_note,
                    'meta_tit': meta_tit,
                    'meta_key': meta_key,
                    'meta_des': meta_des,
                };

                await UserCompany.findOneAndUpdate({ usc_phone_tk: checkExist.usc_phone_tk }, dataUpdate);

                return functions.success(res, 'Cập nhật thành công', { usc_id: checkExist.usc_id })
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Lĩnh vực tài chính
export const financialSectors = async (req, res) => {
    try {
        const data = await CategoryCompany.find({}).sort({ cate_id: 1 })

        return functions.success(res, 'Lĩnh vực tài chính', { data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Chi tiết admin
export const adminDetail = async (req, res) => {
    try {
        const {
            id
        } = req.body
        if (id && !isNaN(Number(id))) {
            const check = await AdminUser.findOne({ adm_id: Number(id) }).lean()
            if (check) {
                const permision_promise = AdminUserRight.aggregate([
                    {
                        $match: {
                            adu_admin_id: check.adm_id
                        }
                    },
                    {
                        $lookup: {
                            from: "Modules",
                            localField: 'adu_admin_module_id',
                            foreignField: "mod_id",
                            as: "module"
                        }
                    },
                    { $unwind: "$module" },
                    {
                        $project: {
                            adu_admin_module_id: 1,
                            adu_add: 1,
                            adu_edit: 1,
                            adu_delete: 1,
                            mod_name: "$module.mod_name",
                        }
                    }
                ])

                const language_promise = AdminUserLanguage.aggregate([
                    { $match: { aul_admin_id: check.adm_id } },
                    {
                        $lookup: {
                            from: "Languages",
                            localField: 'aul_lang_id',
                            foreignField: "lang_id",
                            as: "Languages"
                        }
                    },
                    { $unwind: "$Languages" },
                    {
                        $project: {
                            aul_lang_id: 1,
                            language: "$Languages.lang_name"
                        }
                    }
                ]);

                const category_promise = AdminUserCategory.aggregate([
                    {
                        $match: { auc_admin_id: check.adm_id }
                    },
                    {
                        $lookup: {
                            from: "NewsCate",
                            localField: 'auc_category_id',
                            foreignField: "cat_id",
                            as: "NewsCate"
                        }
                    },
                    {
                        $unwind: "$NewsCate"
                    },
                    {
                        $project: {
                            auc_category_id: 1,
                            category: "$NewsCate.cat_name"
                        }
                    }
                ])

                const [
                    permision,
                    language,
                    category,
                ] = await Promise.all([
                    permision_promise,
                    language_promise,
                    category_promise,
                ])

                const returnData = {
                    adm_loginname: check.adm_loginname,
                    adm_name: check.adm_name,
                    adm_phone: check.adm_phone,
                    adm_email: check.adm_email,
                    adm_bophan: check.adm_bophan,
                    permision: permision,
                    language: language,
                    // adm_edit_all: check.adm_edit_all,
                    adm_all_category: check.adm_all_category,
                    // Không có phân nhỏ catgory 
                    category: category,
                }

                return functions.success(res, 'Chi tiết admin', { data: returnData })
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Danh sách module phân quyền
export const allModule = async (req, res) => {
    try {
        const data = await Modules.find({ mod_id: { $ne: 44 } }).sort({ mod_order: -1 });

        return functions.success(res, 'Các module quyền', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// Danh sách ngôn ngữ
export const allLang = async (req, res) => {
    try {
        const data = await Languages.find({}).sort({ lang_id: 1 })

        return functions.success(res, 'Ngôn ngữ', { data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Tạo tài khoản admin (phân quyền)
export const createAdminUser = async (req, res) => {
    try {
        const {
            adm_loginname,
            adm_name,
            adm_phone,
            password,
            rePassword,
            adm_email,
            adm_bophan,
            permision,
            language,
            adm_all_category,
            category,
        } = req.body

        if (adm_loginname && adm_name && password && rePassword) {
            const arrMessage = {};
            const checkName = await AdminUser.findOne({ adm_loginname: adm_loginname })
            const checkPassWord = functions.checkPassWord(password)
            if (checkName) arrMessage.name = 'Tên đăng nhập này đã được sử dụng. Vui lòng nhập tên khác.'
            if (!checkPassWord) arrMessage.password = 'Mật khẩu phải ít nhất 6 ký tự, bao gồm có ít nhất 1 chữ và 1 số.'
            if (password !== rePassword) arrMessage.password = `Nhập password và re-password không khớp.`
            if (adm_phone) {
                const checkPhone = await functions.checkPhone(adm_phone)
                const checkPhoneTrung = await AdminUser.findOne({ adm_phone: adm_phone })
                if (checkPhoneTrung) arrMessage.phone = 'Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.'
                if (!checkPhone) arrMessage.phone = 'Nhập số điện thoại không hợp lệ'
            }
            if (adm_email) {
                const checkMail = await functions.checkEmail(adm_email)
                const checkMailTrung = await AdminUser.findOne({ adm_email: adm_email })
                if (checkMailTrung) arrMessage.email = 'Email này đã được sử dụng, vui lòng kiểm tra lại.'
                if (!checkMail) arrMessage.email = 'Nhập email không hợp lệ'
            }

            if (JSON.stringify(arrMessage) !== '{}') {
                // RegisterFailEmployers(phoneTK, email, nameCompany, city, descriptions, address, phone);
                return functions.setError(res, arrMessage[Object.keys(arrMessage)[0]], 400);
            }

            const adm_id = await functions.getMaxId(AdminUser, 'adm_id')

            const permisionArr = JSON.parse(permision)

            await AdminUserRight.deleteMany({ adu_admin_id: adm_id })
            await AdminUserLanguage.deleteMany({ aul_admin_id: adm_id })
            await AdminUserCategory.deleteMany({ auc_admin_id: adm_id })

            if (Array.isArray(permisionArr) && permisionArr.length > 0) {
                for (let i = 0; i < permisionArr.length; i++) {
                    const element = permisionArr[i];
                    await AdminUserRight.create({
                        adu_admin_id: adm_id,
                        adu_admin_module_id: element?.adu_admin_module_id,
                        adu_add: element?.adu_add,
                        adu_edit: element?.adu_edit,
                        adu_delete: element?.adu_delete,
                    })
                }
            }

            await AdminUser.create({
                adm_id: adm_id,
                adm_loginname: adm_loginname,
                adm_name: adm_name,
                adm_phone: adm_phone,
                adm_password: functions.createMd5(password),
                adm_email: adm_email,
                adm_bophan: adm_bophan,
                adm_all_category: adm_all_category,
            })

            return functions.success(res, 'Tạo admin thành công', { adm_id: adm_id })
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Sửa admin user (và phân quyền)
export const editAdminUser = async (req, res) => {
    try {
        const {
            adm_id,
            adm_loginname,
            adm_name,
            adm_phone,
            adm_email,
            adm_bophan,
            permision,
            language,
            adm_all_category,
            category,
        } = req.body

        if (adm_name && adm_id) {
            const checkExist = await AdminUser.findOne({ adm_id: Number(adm_id) })
            if (checkExist) {
                const arrMessage = {};
                if (adm_loginname != checkExist.adm_loginname) {
                    const checkName = await AdminUser.findOne({ adm_loginname: adm_loginname })
                    if (checkName) arrMessage.name = 'Tên đăng nhập này đã được sử dụng. Vui lòng nhập tên khác.'
                }

                if (adm_phone != checkExist.adm_phone) {
                    const checkPhone = await functions.checkPhone(adm_phone)
                    const checkPhoneTrung = await AdminUser.findOne({ adm_phone: adm_phone })
                    if (checkPhoneTrung) arrMessage.phone = 'Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.'
                    if (!checkPhone) arrMessage.phone = 'Nhập số điện thoại không hợp lệ'
                }
                if (adm_email != checkExist.adm_email) {
                    const checkMail = await functions.checkEmail(adm_email)
                    const checkMailTrung = await AdminUser.findOne({ adm_email: adm_email })
                    if (checkMailTrung) arrMessage.email = 'Email này đã được sử dụng, vui lòng kiểm tra lại.'
                    if (!checkMail) arrMessage.email = 'Nhập email không hợp lệ'
                }

                if (JSON.stringify(arrMessage) !== '{}') {
                    // RegisterFailEmployers(phoneTK, email, nameCompany, city, descriptions, address, phone);
                    return functions.setError(res, arrMessage[Object.keys(arrMessage)[0]], 400);
                }

                const permisionArr = JSON.parse(permision)

                await AdminUserRight.deleteMany({ adu_admin_id: adm_id })
                await AdminUserLanguage.deleteMany({ aul_admin_id: adm_id })
                await AdminUserCategory.deleteMany({ auc_admin_id: adm_id })

                if (Array.isArray(permisionArr) && permisionArr.length > 0) {
                    for (let i = 0; i < permisionArr.length; i++) {
                        const element = permisionArr[i];
                        await AdminUserRight.create({
                            adu_admin_id: adm_id,
                            adu_admin_module_id: element?.adu_admin_module_id,
                            adu_add: element?.adu_add,
                            adu_edit: element?.adu_edit,
                            adu_delete: element?.adu_delete,
                        })
                    }
                }

                await AdminUser.findOneAndUpdate({ adm_id: Number(adm_id) }, {
                    adm_loginname: adm_loginname,
                    adm_name: adm_name,
                    adm_phone: adm_phone,
                    // adm_password: functions.createMd5(password),
                    adm_email: adm_email,
                    adm_bophan: adm_bophan,
                    adm_all_category: adm_all_category,
                })
                return functions.success(res, 'Cập nhật thành công');
            }
            return functions.setError(res, 'Not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Tag chi tiết công việc
export const GetTagsNew = async (req, res) => {
    try {
        const {
            cat_id
        } = req.body
        const data = await TblTagsNew.find({
            ...(cat_id && !isNaN(Number(cat_id)) && { tag_type: Number(cat_id) })
        }, {
            tag_id: 1,
            tag_name: 1,
            tag_type: 1,
        })

        return functions.success(res, 'Tag chi tiết công việc ngành nghề', { data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Đăng tin
export const CreateNew = async (req, res) => {
    try {
        const {
            new_user_id, // usc_id
            new_title,
            new_cap_bac,
            new_cat_id,
            new_tag,
            new_city,
            new_qh_id,
            new_addr,
            new_hoahong,
            new_thuviec,
            new_hinh_thuc,
            new_money,
            new_money_type,
            new_money_from,
            new_money_to,
            new_so_luong,
            new_exp,
            new_bang_cap,
            new_gioi_tinh,
            new_han_nop,
            new_mota,
            new_yeucau,
            new_quyenloi,
            new_ho_so,
            new_usercontact,
            new_addcontact,
            new_phonecontact,
            new_emailcontact,
        } = req.body
        const adm_id = req.adminID
        if (new_user_id && new_title && !isNaN(Number(new_cap_bac)) &&
            new_cat_id && new_city && new_qh_id && new_addr &&
            new_hinh_thuc && !isNaN(Number(new_money)) &&
            new_so_luong && !isNaN(Number(new_exp)) && !isNaN(Number(new_gioi_tinh)) &&
            new_han_nop && new_mota && new_yeucau && new_quyenloi &&
            new_ho_so) {

            const tuKhoa = functions.tuKhoa;
            let realCate = [];
            const time = functions.getTime()

            const arrMessage = {};
            const checkTitle = await New.findOne({ new_title: new_title, new_user_id: new_user_id }).lean()
            if (checkTitle) arrMessage.title = 'Tiêu đề này đã tồn tại, vui lòng chọn tiêu đề khác'
            const hanNop = functions.getTime(new_han_nop)
            const checkHanNop = hanNop < time
            if (checkHanNop) arrMessage.hanNop = 'Vui lòng gia hạn thêm'
            if (new_phonecontact) {
                const checkPhone = await functions.checkPhone(new_phonecontact)
                if (!checkPhone) arrMessage.phone = 'Số điện thoại không hợp lệ, vui lòng kiểm tra lại'
            }
            if (new_emailcontact) {
                const checkMail = await functions.checkEmail(new_emailcontact)
                if (!checkMail) arrMessage.mail = 'Email không hợp lệ, vui lòng kiểm tra lại.'
            }

            if (JSON.stringify(arrMessage) !== '{}') {
                // RegisterFailEmployers(phoneTK, email, nameCompany, city, descriptions, address, phone);
                return functions.setError(res, arrMessage[Object.keys(arrMessage)[0]], 400);
            }

            for (let i = 0; i < tuKhoa.length; i++) {
                const element = tuKhoa[i]['arr'].split(', ');
                for (let j = 0; j < element.length; j++) {
                    if (new_title.toLowerCase().includes(element[j].toLowerCase())) {
                        const arr = new_cat_id.split(',');
                        if (!arr.includes(tuKhoa[i]['id'])) {
                            realCate.push(tuKhoa[i]['id']);
                        }
                    }
                }
            }
            if (realCate.length === 0) {
                realCate = new_cat_id.split(',');
            }
            const arr = [];
            realCate.map(item => arr.push({ id: item }));

            const check = await New.countDocuments({ new_user_id: Number(new_user_id) });
            if (check == 0) await UserCompany.updateOne({ usc_id: Number(new_user_id) }, { usc_index: 1 });

            const new_id = await functions.getMaxId(New, 'new_id');
            const linkAlias = functions.createLinkTilte(new_title);

            const data = {
                'new_id': new_id,

                'new_user_id': new_user_id,
                'new_title': new_title,
                'new_cap_bac': new_cap_bac,
                'new_cat_id': new_cat_id,
                'new_city': new_city,
                'new_qh_id': new_qh_id,
                'new_addr': new_addr,
                'new_hinh_thuc': new_hinh_thuc,
                'new_money': new_money,
                'new_so_luong': new_so_luong,
                'new_exp': new_exp,
                'new_gioi_tinh': new_gioi_tinh,
                'new_mota': new_mota,
                'new_yeucau': new_yeucau,
                'new_quyenloi': new_quyenloi,
                'new_ho_so': new_ho_so,

                'new_tag': new_tag,
                'new_hoahong': new_hoahong,
                'new_thuviec': new_thuviec,
                'new_bang_cap': new_bang_cap,
                'new_usercontact': new_usercontact,
                'new_addcontact': new_addcontact,
                'new_phonecontact': new_phonecontact,
                'new_emailcontact': new_emailcontact,
                'new_money_type': new_money_type,
                'new_money_from': new_money_from,
                'new_money_to': new_money_to,

                'new_han_nop': hanNop,
                'new_alias': linkAlias,
                'new_create_time': time,
                'new_update_time': time,
                'new_real_cate': arr,
                'new_thuc': 1,
                selfpost: 1,
                from: `admin ${adm_id}`
            }

            await New.create(data);
            return functions.success(res, 'Đăng tin thành công', { new_id });
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}
// Chi tiết tin
export const DetailNew = async (req, res) => {
    try {
        const {
            new_id
        } = req.body
        if (new_id && Number(new_id)) {
            const checkExist = await New.findOne({ new_id: Number(new_id) })
            if (checkExist) {
                return functions.success(res, 'Tin tuyển dụng', { data: checkExist })
            }
            return functions.setError(res, 'Not found', 400)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Sửa tin
export const UpdateNew = async (req, res) => {
    try {
        const {
            new_id,
            new_user_id, // usc_id
            new_title,
            new_cap_bac,
            new_cat_id,
            new_tag,
            new_city,
            new_qh_id,
            new_addr,
            new_hoahong,
            new_thuviec,
            new_hinh_thuc,
            new_money,
            new_money_type,
            new_money_from,
            new_money_to,
            new_so_luong,
            new_exp,
            new_bang_cap,
            new_gioi_tinh,
            new_han_nop,
            new_mota,
            new_yeucau,
            new_quyenloi,
            new_ho_so,
            new_usercontact,
            new_addcontact,
            new_phonecontact,
            new_emailcontact,
        } = req.body
        const adm_id = req.adminID
        if (new_id && new_user_id && new_title &&
            !isNaN(Number(new_cap_bac)) && new_cat_id &&
            new_city && new_qh_id && new_addr &&
            new_hinh_thuc && !isNaN(Number(new_money)) &&
            new_so_luong && !isNaN(Number(new_exp)) && !isNaN(Number(new_gioi_tinh)) &&
            new_han_nop && new_mota && new_yeucau && new_quyenloi &&
            new_ho_so) {

            const checkExist = await New.findOne({ new_id: new_id }).lean()
            if (checkExist) {
                const tuKhoa = functions.tuKhoa;
                let realCate = [];
                const time = functions.getTime()

                const arrMessage = {};
                const checkTitle = await New.findOne({ new_title: new_title, new_user_id: { $ne: new_user_id } }).lean()
                if (checkTitle) arrMessage.title = 'Tiêu đề này đã tồn tại, vui lòng chọn tiêu đề khác'
                const hanNop = functions.getTime(new_han_nop)
                const checkHanNop = hanNop < time
                if (checkHanNop) arrMessage.hanNop = 'Vui lòng gia hạn thêm'
                if (new_phonecontact) {
                    const checkPhone = await functions.checkPhone(new_phonecontact)
                    if (!checkPhone) arrMessage.phone = 'Số điện thoại không hợp lệ, vui lòng kiểm tra lại'
                }
                if (new_emailcontact) {
                    const checkMail = await functions.checkEmail(new_emailcontact)
                    if (!checkMail) arrMessage.mail = 'Email không hợp lệ, vui lòng kiểm tra lại.'
                }

                if (JSON.stringify(arrMessage) !== '{}') {
                    // RegisterFailEmployers(phoneTK, email, nameCompany, city, descriptions, address, phone);
                    return functions.setError(res, arrMessage[Object.keys(arrMessage)[0]], 400);
                }

                for (let i = 0; i < tuKhoa.length; i++) {
                    const element = tuKhoa[i]['arr'].split(', ');
                    for (let j = 0; j < element.length; j++) {
                        if (new_title.toLowerCase().includes(element[j].toLowerCase())) {
                            const arr = new_cat_id.split(',');
                            if (!arr.includes(tuKhoa[i]['id'])) {
                                realCate.push(tuKhoa[i]['id']);
                            }
                        }
                    }
                }
                if (realCate.length === 0) {
                    realCate = new_cat_id.split(',');
                }
                const arr = [];
                realCate.map(item => arr.push({ id: item }));

                const linkAlias = functions.createLinkTilte(new_title);
                const data = {
                    'new_user_id': new_user_id,
                    'new_title': new_title,
                    'new_cap_bac': new_cap_bac,
                    'new_cat_id': new_cat_id,
                    'new_city': new_city,
                    'new_qh_id': new_qh_id,
                    'new_addr': new_addr,
                    'new_hinh_thuc': new_hinh_thuc,
                    'new_money': new_money,
                    'new_so_luong': new_so_luong,
                    'new_exp': new_exp,
                    'new_gioi_tinh': new_gioi_tinh,
                    'new_mota': new_mota,
                    'new_yeucau': new_yeucau,
                    'new_quyenloi': new_quyenloi,
                    'new_ho_so': new_ho_so,

                    'new_tag': new_tag,
                    'new_hoahong': new_hoahong,
                    'new_thuviec': new_thuviec,
                    'new_bang_cap': new_bang_cap,
                    'new_usercontact': new_usercontact,
                    'new_addcontact': new_addcontact,
                    'new_phonecontact': new_phonecontact,
                    'new_emailcontact': new_emailcontact,
                    'new_money_type': new_money_type,
                    'new_money_from': new_money_from,
                    'new_money_to': new_money_to,

                    'new_han_nop': hanNop,
                    'new_alias': linkAlias,
                    'new_update_time': time,
                    'new_real_cate': arr,
                    'new_thuc': 1,
                    selfpost: 1,
                    from: `admin ${adm_id}`
                }
                await New.updateOne({ new_id: new_id }, { $set: data })
                return functions.success(res, 'Cập nhật tin thành công', { new_id });
            }
            return functions.setError(res, 'Not found', 400)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Lấy quyền
export const getAdminUserRight = async (req, res) => {
    try {
        const adm_id = req.adminID

        // Cần một id admin toàn quyền
        if (checkFullRight(adm_id)) {
            const allModule = await Modules.find({})
            let allRight = []
            for (let i = 0; i < allModule.length; i++) {
                const element = allModule[i];
                allRight.push({
                    adu_admin_module_id: element?.mod_id,
                    adu_add: 1,
                    adu_edit: 1,
                    adu_delete: 1,
                    mod_name: element?.mod_name,
                })
            }

            return functions.success(res, 'Quyền admin', { data: allRight })
        }

        const permision = await AdminUserRight.aggregate([
            { $match: { adu_admin_id: Number(adm_id) } },
            {
                $lookup: {
                    from: "Modules",
                    localField: 'adu_admin_module_id',
                    foreignField: "mod_id",
                    as: "module"
                }
            },
            { $unwind: "$module" },
            {
                $project: {
                    adu_admin_module_id: 1,
                    adu_add: 1,
                    adu_edit: 1,
                    adu_delete: 1,
                    mod_name: "$module.mod_name",
                }
            }
        ]);

        return functions.success(res, 'Quyền admin', { data: permision })
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Check admin có phải toàn quyền 
const checkFullRight = (adm_id) => {
    return adm_id === 1
}

// API check toàn quyền
export const apiCheckFullRight = async (req, res) => {
    try {
        const adm_id = req.adminID
        return functions.success(res, 'Toàn quyền', { isFullRight: checkFullRight(adm_id) })
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Ngành nghề CV 
export const getCateCV = async (req, res) => {
    try {
        const data = await NganhCv.find({})

        return functions.success(res, 'Ngành nghề CV', { data: data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Ngôn ngữ CV
export const GetLanguageCv = async (req, res) => {
    try {
        const data = await LanguageCv.find({})

        return functions.success(res, 'Ngôn ngữ CV', { data: data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Thông tin bổ sung site
// setup danh muc
export const setupTtbsCate = async (req, res) => {
    try {
        await ttbsCate.deleteMany({})
        const names = ['Thông tin cần biết', 'Thỏa thuận sử dụng', 'Quy định bảo mật', 'Giải quyết tranh chấp']
        for (let i = 0; i < names.length; i++) {
            const element = names[i];
            const data = {
                id: i + 1,
                name: element,
                alias: functions.createLinkTilte(element)
            }
            await ttbsCate.create(data)
        }

        return functions.success(res, 'Tạo thành công', { data: names })

    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// tat ca danh muc
export const GetTtbsCate = async (req, res) => {
    try {
        const data = await ttbsCate.find({})

        return functions.success(res, 'Danh mục bổ sung', { data: data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// tao bai viet
export const createTtbsDetail = async (req, res) => {
    try {
        const {
            title,
            idcate,
            mota,
            noidung,
            seo_tt,
            seo_key,
            seo_des,
        } = req.body

        if (title && idcate && seo_tt && seo_key) {
            const time = functions.getTime();
            const id = await functions.getMaxId(ttbsDetail, 'id')
            await ttbsDetail.create({
                id,
                idcate: Number(idcate),
                title,
                mota,
                noidung,
                seo_tt,
                seo_key,
                seo_des,
                timecreate: time,
                timeedit: time,
            })
            return functions.success(res, 'Tạo bài đăng thành công', { id })
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// sua bai viet
export const updateTtbsDetail = async (req, res) => {
    try {
        const {
            id,
            title,
            idcate,
            mota,
            noidung,
            seo_tt,
            seo_key,
            seo_des,
        } = req.body
        if (id && title && idcate && seo_tt && seo_key) {
            const checkExist = await ttbsDetail.findOne({ id: Number(id) })
            if (checkExist) {
                const time = functions.getTime();
                await ttbsDetail.updateOne({ id: Number(id) }, {
                    $set: {
                        idcate: Number(idcate),
                        title,
                        mota,
                        noidung,
                        seo_tt,
                        seo_key,
                        seo_des,
                        timeedit: time,
                    }
                })
                return functions.success(res, 'Sửa bài đăng thành công', { id })
            }
            return functions.setError(res, 'Bài đăng không tồn tại', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// chi tiet bai viet
export const detailTtbsDetail = async (req, res) => {
    try {
        const {
            id
        } = req.body
        if (id) {
            const checkExist = await ttbsDetail.findOne({ id: Number(id) })
            if (checkExist) {
                return functions.success(res, 'Bài đăng TTBS', { data: checkExist })
            }
            return functions.setError(res, 'Bài đăng không tồn tại', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Thêm NTD v2
export const createEmployer_v2 = async (req, res) => {
    try {
        let {
            usc_phone_tk,
            usc_email,
            usc_pass,
            usc_company,
            financial_sector,
            usc_city,
            usc_district,
            usc_note,
            usc_address,
            usc_boss,
            usc_size,
            usc_mst,
            usc_skype,
            usc_website,
            usc_company_info,

            // usc_logo,
            // adm_ntd,
            // id_bophankd,
        } = req.body
        // console.log("🚀 ~ constcreateEmployer_v2= ~ financial_sector:", financial_sector)
        const files = req.files
        const adm_id = req.adminID
        const checkAdmin = await AdminUser.findOne({ adm_id: adm_id })
        if (usc_email && usc_company && usc_phone_tk && usc_pass && adm_id && checkAdmin) {
            const time = functions.getTime()
            const date = functions.getDate()
            const arrMessage = {};
            const checkNameCom = await UserCompany.findOne({ usc_company: usc_company, usc_md5: null }).lean();
            const checkAddress = await UserCompany.findOne({ usc_address: usc_address, usc_md5: null }).lean();
            const checkTrung = await UserCompany.findOne({ usc_phone_tk: usc_phone_tk, usc_md5: null }).lean();
            const checkPhoneTK = await functions.checkPhone(usc_phone_tk);
            const checkSameAlias = await functions.checkAlias2(functions.createLinkTilte2(usc_company))
            // const checkPassWord = functions.checkPassWord(password);
            if (!checkPhoneTK) return functions.setError(res, 'Nhập số điện thoại không hợp lệ', 400);
            if (checkNameCom) arrMessage.nameCompany = `Tên công ty đã được đăng ký, vui lòng kiểm tra lại.`;
            if (checkAddress) arrMessage.address = `Địa chỉ này đã được sử dụng. Bạn vui lòng nhập địa chỉ khác.`;
            if (checkTrung) arrMessage.phoneTK = `Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.`;
            if (checkSameAlias) arrMessage.sameAlias = `Link trùng với ${checkSameAlias}`
            // if (password !== rePassword) arrMessage.password = `Nhập password và re-password không khớp.`;
            // if (!checkPassWord) arrMessage.password = `Mật khẩu phải ít nhất 6 ký tự, bao gồm có ít nhất 1 chữ và 1 số.`;

            if (JSON.stringify(arrMessage) !== '{}') {
                // RegisterFailEmployers(phoneTK, email, nameCompany, city, descriptions, address, phone);
                return functions.setError(res, arrMessage[Object.keys(arrMessage)[0]], 400);
            }
            let logo = ""
            if (files && files?.usc_logo) {
                const checkUpload = await functions.uploadFile(`${date}`, files.usc_logo, time);
                if (!checkUpload) return functions.setError(res, 'Gặp lỗi trong quá trình xử lí logo', 400);
                logo = checkUpload;
            }

            const hashedPassword = functions.createMd5(usc_pass);
            const alias = functions.createLinkTilte2(usc_company.trim());

            const dataUpdate = {
                usc_email: usc_email,
                'usc_pass': hashedPassword,
                'usc_security': '0',
                'usc_authentic': 1,
                'usc_company': usc_company.trim(),
                'usc_city': Number(usc_city) || 0,
                'usc_district': Number(usc_district) || 0,
                'usc_address': usc_address,
                'usc_alias': alias,
                // 'ip_address': ip,
                'usc_create_time': time,
                'usc_update_time': time,
                'usc_logo': logo,
                'usc_skype': usc_skype || "",
                'usc_index': 0,
                'DateOfIncorporation': "",
                'usc_mst': "",
                'usc_loai_hinh': "",
                'usc_kd': adm_id,
                // 'usc_kd_crm': id_bophankd,
                'usc_crm': 1,
                // 'usc_otp': otp,
                'usc_phone_tk': usc_phone_tk,
                'usc_name_email': usc_email,
                'usc_company_info': usc_company_info,
                // 'image_com': image.join(','),
                'financial_sector': Array.isArray(financial_sector) ? financial_sector.filter((item) => !isNaN(Number(item))).map((item) => ({ id: `${item}` })) : [{ id: '' }],
                'usc_size': usc_size || 0,
                'usc_website': usc_website || "",
                usc_note: usc_note,
                usc_boss: usc_boss,
                usc_mst: usc_mst,
            };

            const id = await functions.getMaxId(UserCompany, "usc_id")
            await UserCompany.create({
                usc_id: id,
                ...dataUpdate
            });
            const id_up = await functions.getMaxId(TblPointCompany, 'id_up')

            // Thu dọn nếu tk mới trùng id với tk cũ bị xóa 
            await TblPointCompany.deleteMany({
                usc_id: id
            })
            const listNewId = await New.distinct('new_id', { new_user_id: id })
            if (listNewId.length > 0) {
                await New.deleteMany({ new_id: { $in: listNewId } })
                await NewGhimTin.deleteMany({ new_id: { $in: listNewId } })
            }
            await NopHoSo.deleteMany({ nhs_com_id: id })
            await TblPointUsed.deleteMany({ usc_id: id })
            await TblPointAdded.deleteMany({ usc_id: id })
            await TblLuuHoSoUv.deleteMany({ id_ntd: id })
            // Hết thu dọn 

            await TblPointCompany.create({
                id_up,
                usc_id: id,
                point: 0,
                point_usc: 0,
                day_reset_point: 0,
                day_end: 0
            });
            UserCompanyError.deleteMany({ err_usc_phone_tk: usc_phone_tk });
            return functions.success(res, 'Tạo NTD thành công', { usc_id: id });
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Sua NTD v2
export const editEmployer_v2 = async (req, res) => {
    try {
        let {
            usc_id,
            usc_phone_tk,
            usc_email,
            usc_pass,
            usc_company,
            financial_sector,
            usc_city,
            usc_district,
            usc_note,
            usc_address,
            usc_boss,
            usc_size,
            usc_mst,
            usc_skype,
            usc_website,
            usc_company_info,

            // usc_logo,
            // adm_ntd,
            // id_bophankd,
        } = req.body
        // console.log("🚀 ~ constcreateEmployer_v2= ~ financial_sector:", financial_sector)
        const files = req.files
        const adm_id = req.adminID
        const checkAdmin = await AdminUser.findOne({ adm_id: adm_id })
        if (usc_id && usc_email && usc_company && usc_phone_tk && adm_id && checkAdmin) {
            const time = functions.getTime()
            const date = functions.getDate()
            const arrMessage = {};
            const checkNameCom = await UserCompany.findOne({ usc_company: usc_company, usc_md5: null, usc_id: { $ne: Number(usc_id) } }).lean();
            const checkAddress = await UserCompany.findOne({ usc_address: usc_address, usc_md5: null, usc_id: { $ne: Number(usc_id) } }).lean();
            const checkTrung = await UserCompany.findOne({ usc_phone_tk: usc_phone_tk, usc_md5: null, usc_id: { $ne: Number(usc_id) } }).lean();
            const checkPhoneTK = await functions.checkPhone(usc_phone_tk);
            const checkSameAlias = await functions.checkAlias2(functions.createLinkTilte2(usc_company), Number(usc_id), 1)
            // const checkPassWord = functions.checkPassWord(password);
            if (!checkPhoneTK) return functions.setError(res, 'Nhập số điện thoại không hợp lệ', 400);
            if (checkNameCom) arrMessage.nameCompany = `Tên công ty đã được đăng ký, vui lòng kiểm tra lại.`;
            if (checkAddress) arrMessage.address = `Địa chỉ này đã được sử dụng. Bạn vui lòng nhập địa chỉ khác.`;
            if (checkTrung) arrMessage.phoneTK = `Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.`;
            if (checkSameAlias) arrMessage.sameAlias = `Link trùng với ${checkSameAlias}`
            // if (password !== rePassword) arrMessage.password = `Nhập password và re-password không khớp.`;
            // if (!checkPassWord) arrMessage.password = `Mật khẩu phải ít nhất 6 ký tự, bao gồm có ít nhất 1 chữ và 1 số.`;

            if (JSON.stringify(arrMessage) !== '{}') {
                // RegisterFailEmployers(phoneTK, email, nameCompany, city, descriptions, address, phone);
                return functions.setError(res, arrMessage[Object.keys(arrMessage)[0]], 400);
            }
            let logo = ""
            if (files && files?.usc_logo) {
                const checkUpload = await functions.uploadFile(`${date}`, files.usc_logo, time);
                if (!checkUpload) return functions.setError(res, 'Gặp lỗi trong quá trình xử lí logo', 400);
                logo = checkUpload;
            }

            const hashedPassword = usc_pass ? functions.createMd5(usc_pass) : "";
            const alias = functions.createLinkTilte2(usc_company.trim());

            const dataUpdate = {
                usc_phone_tk: usc_phone_tk,
                usc_email: usc_email,
                usc_alias: alias,
                usc_update_time: time,
                usc_company: usc_company,
                usc_city: Number(usc_city) || 0,
                usc_district: Number(usc_district) || 0,
                usc_address: usc_address,
                usc_skype: usc_skype || "",
                usc_company_info: usc_company_info,
                financial_sector: Array.isArray(financial_sector) ? financial_sector.filter((item) => !isNaN(Number(item))).map((item) => ({ id: `${item}` })) : [{ id: "" }],
                usc_size: usc_size || 0,
                usc_website: usc_website || "",
                usc_note: usc_note,
                usc_boss: usc_boss,
                usc_mst: usc_mst,
                ...(!!logo && { usc_logo: logo }),
                ...(!!usc_pass && { usc_pass: hashedPassword }),
            };

            await UserCompany.findOneAndUpdate({ usc_id: Number(usc_id) }, {
                ...dataUpdate
            });

            return functions.success(res, 'Sửa NTD thành công', { usc_id: usc_id });
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Lam moi tin
export const refreshNew = async (req, res) => {
    try {
        const {
            new_id
        } = req.body

        if (new_id) {
            const checkExist = await New.findOne({ new_id: Number(new_id) })
            if (checkExist) {
                const time = functions.getTime()
                await New.findOneAndUpdate({ new_id: checkExist.new_id }, {
                    $set: {
                        new_update_time: time
                    }
                })

                return functions.success(res, 'Làm mới thành công', { new_id })
            } else {
                return functions.setError(res, 'not found', 404)
            }
        } else {
            return functions.setError(res, 'missing data', 400)
        }
    } catch (error) {
        return functions.setError(res, error.message, 500)
    }
}

// lich su cong diem
export const allPointAdd = async (req, res) => {
    try {
        const {
            usc_id
        } = req.body

        if (usc_id && Number(usc_id)) {
            // const data = await TblPointAdded
            //     .find({ usc_id: Number(usc_id) })
            //     .sort({ id_p: -1 })
            const data = await TblPointAdded.aggregate([
                {
                    $match: {
                        usc_id: Number(usc_id)
                    }
                },
                {
                    $sort: {
                        id_p: -1
                    },
                },
                {
                    $lookup: {
                        from: 'UserCompany',
                        let: { usc_id: '$usc_id' },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $eq: ['$usc_id', '$$usc_id'] },

                                }
                            }
                        ],
                        as: 'com'
                    }
                },
                {
                    $unwind: '$com'
                },
                {
                    $project: {
                        id_p: 1,
                        usc_id: 1,
                        point: 1,
                        added_day: 1,
                        set_expired: 1,
                        adm_id: 1,
                        usc_company: '$com.usc_company',
                        usc_alias: '$com.usc_alias',
                    }
                }
            ])

            return functions.success(res, "Danh sách cộng điểm", { data })
        } else {
            return functions.setError(res, 'missing data', 400)
        }
    } catch (error) {
        return functions.setError(res, error.message, 500)
    }
}

// lich su tieu diem
export const allPointUsed = async (req, res) => {
    try {
        const {
            usc_id
        } = req.body

        if (usc_id && Number(usc_id)) {
            // const data = await TblPointAdded.find({ usc_id: Number(usc_id) }).sort({ id_p: -1 })
            // const data = await TblPointUsed
            //     .find({ usc_id: Number(usc_id) })
            //     .sort({ id_p: -1 })
            const data = await TblPointUsed.aggregate([
                {
                    $match: {
                        usc_id: Number(usc_id),
                        type: 2,
                    }
                },
                {
                    $sort: {
                        id_p: -1
                    },
                },
                {
                    $lookup: {
                        from: 'UserCompany',
                        let: { usc_id: '$usc_id' },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $eq: ['$usc_id', '$$usc_id'] },

                                }
                            }
                        ],
                        as: 'com'
                    }
                },
                {
                    $lookup: {
                        from: 'Users',
                        let: { use_id: '$use_id' },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $eq: ['$use_id', '$$use_id'] },

                                }
                            }
                        ],
                        as: 'candi'
                    }
                },
                {
                    $unwind: '$com'
                },
                {
                    $unwind: {
                        path: '$candi',
                        preserveNullAndEmptyArrays: true,
                    },
                },
                {
                    $project: {
                        id_p: 1,
                        usc_id: 1,
                        use_id: 1,
                        point: 1,
                        type: 1,
                        type_err: 1,
                        note_uv: 1,
                        used_day: 1,
                        return_point: 1,
                        redeem: 1,
                        adm_id: 1,
                        time_redeem: 1,
                        usc_company: '$com.usc_company',
                        usc_alias: '$com.usc_alias',
                        use_name: "$candi.use_name",
                    }
                }
            ])

            return functions.success(res, "Danh sách tiêu điểm", { data })
        } else {
            return functions.setError(res, 'missing data', 400)
        }
    } catch (error) {
        return functions.setError(res, error.message, 500)
    }
}

// Hoan diem
export const redeemPointUsed = async (req, res) => {
    try {
        const {
            id_p
        } = req.body
        const adm_id = req.adminID
        if (id_p) {
            const checkExist = await TblPointUsed.findOne({ id_p: Number(id_p), redeem: { $ne: 1 }, type: 2 })
            if (checkExist) {
                // hoan diem
                await TblPointCompany.findOneAndUpdate({ usc_id: checkExist.usc_id }, {
                    $inc: {
                        point_usc: checkExist.point
                    }
                })

                // doi trang thai
                await TblPointUsed.findOneAndUpdate({ id_p: checkExist.id_p }, {
                    $set: {
                        redeem: 1,
                        adm_id: adm_id,
                        time_redeem: functions.getTime(),
                    }
                })

                return functions.success(res, 'Hoàn điểm thành công', {})
            } else {
                return functions.setError(res, 'not found', 404)
            }
        } else {
            return functions.setError(res, 'missing data', 400)
        }


    } catch (error) {
        return functions.setError(res, error.message, 500)
    }
}

// Gui ung vien
export const sendCandiToEmployer = async (req, res) => {
    try {
        const {
            type, // 1 - UVUT | 2 - Chuyen vien
            use_id,
            // usc_id
            new_id,
        } = req.body

        if (type && use_id && new_id && Number(type) && Number(use_id) && Number(new_id)) {
            const checkUser = await Users.findOne({ use_id: Number(use_id) })
            // const checkCom = await UserCompany.findOne({ usc_id: Number(usc_id) })
            const checkNew = await New.findOne({ new_id: Number(new_id) })
            if (checkUser && checkNew) {
                const checkExist = await NopHoSo.findOne({ nhs_use_id: Number(use_id), nhs_new_id: Number(new_id), type: Number(type) })
                if (!checkExist) {
                    const id = await functions.getMaxId(NopHoSo, 'id')
                    await NopHoSo.create({
                        id: id,
                        nhs_new_id: Number(new_id),
                        nhs_com_id: checkNew.new_user_id,
                        nhs_use_id: Number(use_id),
                        type: Number(type),
                    })

                    return functions.success(res, 'Gửi ứng viên thành công', {})
                } else {
                    return functions.setError(res, 'Ứng viên đã được gửi cho tin này', 413)
                }
            } else {
                return functions.setError(res, 'Kiểm tra lại mã ứng viên và tin tuyển dụng đã nhập', 404)
            }
        } else {
            return functions.setError(res, 'missing data', 400)
        }
    } catch (error) {
        return functions.setError(res, error.message, 500)
    }
}