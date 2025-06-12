import * as functions from '../services/functions.js';
import AdminUser from '../models/admin/AdminUser.js';
import Users from "../models/user/Users.js";
import UserCompany from "../models/user/UserCompany.js";
import TblPointCompany from '../models/tbl/TblPointCompany.js';
import NopHoSo from '../models/NopHoSo.js'
import New from '../models/new/New.js';
import NewGhimTin from '../models/new/NewGhimTin.js';

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
            console.log(">>> module: ", module)

            // ứng viên đăng kí mới
            if (module === 1) {
                Table = Users;
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

                return functions.success(res, 'success', {
                    data, total
                });
            }

            // trạng thái ứng viên NHS
            if (module === 2) {
                Table = NopHoSo;
                functions.CompareTime(condition, 'createdAt', from, to)
                sort = { id: -1 }
                if (conditions?.result) conditions.result = Number(conditions.result)
                const use_name = conditions?.use_name
                const new_title = conditions?.new_title
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

            // NTD đăng ký 
            if (module === 3) {
                Table = UserCompany;
                condition = {
                    $or: [{ usc_alias: { $ne: "" } }],
                    ...(!checkFullRight(adminID))
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
                            usc_address: 1,
                            usc_website: 1,
                            usc_active: 1,
                            usc_city: 1,
                            usc_district: 1,
                            usc_authentic: 1,
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

            // Tin tuyen dung - NTD tự đăng 
            if (module === 4) {
                Table = New;
                sort = { new_id: -1 }
                functions.CompareTime(condition, 'new_create_time', from, to)
                if (conditions?.new_id) conditions.new_id = Number(conditions.new_id)
                if (conditions?.new_user_id) conditions.new_user_id = Number(conditions.new_user_id)
                if (conditions?.new_title) conditions.new_title = new RegExp(functions.allVietnameseRegex(conditions.new_title), 'i')
                if (conditions?.new_cat_id) conditions.new_cat_id = new RegExp(`(^|,)${conditions.new_cat_id}(,|$)`)
                if (conditions?.new_city) conditions.new_city = new RegExp(`(^|,)${conditions.new_city}(,|$)`)

                // Gioi han theo admin
                const usc_company = conditions?.usc_company
                const listComId = await UserCompany.distinct("usc_id", {
                    ...(!checkFullRight(adminID)),
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
                    // new_cao: 1,
                    new_cao: { $ifNull: ['$pin.new_cao', 0] },
                    expired: { $ifNull: ['$pin.expired', 0] },
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

const promiseNopHoSo = (new_id) => {
    const query = NopHoSo.countDocuments({ nhs_new_id: new_id })
    // console.log(query)
    return query
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
                var isFullModules = checkFullRight(Number(checkExist.adm_id)) ? 1 : 0;
                var modules = [];

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

// Ghim tin
export const PinNew = async (req, res) => {
    try {
        let {
            new_id,
            new_hot,
            new_cao,
            expired,
        } = req.body
        if (new_id && !isNaN(Number(new_hot)) && !isNaN(Number(new_cao)) && expired) {
            const checkExist = await New.findOne({ new_id: Number(new_id) })
            if (checkExist) {
                const checkGhim = await NewGhimTin.findOne({ new_id: Number(new_id) })

                expired = new Date(expired).setHours(23, 59, 59)
                if (checkGhim) {
                    await NewGhimTin.updateOne({ new_id: new_id }, {
                        $set: {
                            new_hot,
                            new_cao,
                            expired: functions.getTime(expired),
                        }
                    })
                } else {
                    await NewGhimTin.create({
                        new_id,
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

// Check admin có phải toàn quyền 
const checkFullRight = (adm_id) => {
    return adm_id === 1
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