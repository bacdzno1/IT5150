/* eslint-disable no-unused-vars */
import * as functions from '../services/functions.js';
import TblPointCompany from '../models/tbl/TblPointCompany.js';
import TblPointUsed from '../models/tbl/TblPointUsed.js';
import TblLuuHoSoUv from '../models/tbl/TblLuuHoSoUv.js';
import TblRelationship from '../models/chat/TblRelationship.js';
import FeedBackCompany from '../models/feedBack/FeedBackCompany.js';
import FeedBackWebsite from '../models/feedBack/FeedBackWebsite.js';
import NopHoSo from '../models/NopHoSo.js';
import "dotenv/config";
import New from '../models/new/New.js';
import Users from '../models/user/Users.js';
import UserCompany from '../models/user/UserCompany.js';
import City from '../models/city/City.js';
import News from '../models/blog/News.js';

// quản lý dịch vụ
export const ManageServiceNTD = async (req, res, next) => {
    try {
        const idNTD = req.idNTD;
        // console.log(idNTD)
        const data = {};
        const time = functions.getTime();
        const pointFreePromise = TblPointCompany.findOne({ usc_id: idNTD }, { point: 1, point_usc: 1, day_end: 1 }).lean();
        const pointRechargePromise = TblPointUsed.find({ usc_id: idNTD, use_id: 0 }, { _id: 0, point: 1, used_day: 1 }).sort({ used_day: -1 }).limit(10).lean();
        const pointUsed15ngayPromise = TblPointUsed.aggregate([
            { $match: { usc_id: idNTD, point: { $ne: 0 } } },
            { $limit: 15 },
            { $sort: { used_day: -1 } },
            {
                $lookup: {
                    from: "Users",
                    localField: 'use_id',
                    foreignField: 'use_id',
                    as: 'user'
                }
            },
            { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    _id: 0,
                    'used_day': 1,
                    'use_id': 1,
                    'use_name': '$user.use_name',
                    'type': 1,
                }
            }
        ]);
        const ntd = await UserCompany.findOne({ usc_id: Number(idNTD) })
        const [
            pointFree,
            pointRecharge,
            pointUsed15ngay,
        ] = await Promise.all([
            pointFreePromise,
            pointRechargePromise,
            pointUsed15ngayPromise,
        ]);

        data.pointFree = pointFree.point;
        data.pointBuy = pointFree?.day_end >= time ? pointFree.point_usc : 0;
        data.totalPoint = pointFree.point + pointFree.point_usc;
        if (pointRecharge.length !== 0) {
            for (let i = 0; i < pointRecharge.length; i++) {
                const element = pointRecharge[i];
                element.used_day = new Date(element.used_day * 1000);
            }
        }
        data.pointRecharge = pointRecharge;

        if (pointUsed15ngay.length !== 0) {
            for (let i = 0; i < pointUsed15ngay.length; i++) {
                const element = pointUsed15ngay[i];
                element.used_day = new Date(element.used_day * 1000);
                element.type = element.type == 1 ? "Miễn phí" : "Mất phí";
            }
        }
        data.pointUsed15ngay = pointUsed15ngay;
        data.chuyenvien = {
            adm_name: chuyenvien?.adm_name,
            adm_phone: chuyenvien?.adm_phone,
            adm_email: chuyenvien?.adm_email,
        }
        return functions.success(res, 'get data success', { data });
    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
};

// đánh giá 
export const FeedBack = async (req, res, next) => {
    try {
        const { from, bosung, danhgia, rating, type, call, deportment, candi_support, danhgia_chuyenvien } = req.body;
        const idNTD = req.idNTD;
        if (type == 1) {
            const id = await functions.getMaxId(FeedBackWebsite, 'id');
            await FeedBackWebsite.create({
                id,
                feedback_from: from,
                danhgia: danhgia,
                bosung: bosung,
                rate: rating,
                usc_id: idNTD
            });
            return functions.success(res, 'Gửi phản hồi thành công');
        } else {
            const id = await functions.getMaxId(FeedBackCompany, 'id');
            await FeedBackCompany.create({
                id,
                chuyenvien_call: call,
                deportment: deportment,
                candi_support: candi_support,
                rate: rating,
                note: danhgia_chuyenvien,
                usc_id: idNTD
            });
            return functions.success(res, 'Gửi phản hồi thành công');
        }
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// quản lý chung 
export const ManageAll = async (req, res, next) => {
    try {
        const idNTD = req.idNTD;
        const data = {};
        const time = functions.getTime();
        const tinconhanPromise = New.countDocuments({ new_user_id: idNTD, new_active: 1, new_han_nop: { $gt: time } });

        const tinsaphethanPromise = New.countDocuments({
            new_user_id: idNTD,
            new_active: 1,
            new_han_nop: { $gt: time, $lt: time + 3 * 24 * 60 * 60 }
        });

        const tinhethanPromise = New.countDocuments({
            new_user_id: idNTD,
            new_active: 1,
            new_han_nop: { $lt: time }
        });

        // const date = new Date(new Date().toISOString().slice(0, 10)).getTime();
        // const endDate = date + 24 * 60 * 60;
        const date = functions.getTime((new Date()).setHours(0, 0, 0, 0));
        const endDate = functions.getTime((new Date()).setHours(23, 59, 59, 0))
        const tindangtrongngayPromise = New.countDocuments({
            new_user_id: idNTD,
            new_active: 1,
            new_create_time: {
                $gt: date,
                $lt: endDate
            }
        });

        const tinlammoiPromise = New.countDocuments({
            new_user_id: idNTD,
            new_active: 1,
            new_update_time: {
                $gt: date,
                $lt: endDate
            },
            new_refresh: { $gt: 0 }
        });
        const tinGanDayPromise = New.aggregate([
            { $match: { new_user_id: idNTD, new_active: 1 } },
            { $sort: { new_update_time: -1, new_id: -1 } },
            { $limit: 5 },
            {
                $project: {
                    _id: 0,
                    new_id: 1, new_title: 1, new_alias: 1, new_city: 1, new_han_nop: 1, new_hot: 1,
                    new_gap: 1, new_cao: 1, new_nganh: 1, new_view_count: 1,
                    new_cat_id: 1,
                }
            }
        ]);

        const hoSoMoiPromise = NopHoSo.aggregate([
            { $match: { nhs_com_id: idNTD } },
            { $sort: { nhs_time: -1 } },
            { $limit: 5 },
            {
                $lookup: {
                    from: "Users",
                    localField: "nhs_use_id",
                    foreignField: "use_id",
                    as: 'user'
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
            { $unwind: "$new" },
            { $unwind: "$user" },
            {
                $project: {
                    use_id: '$user.use_id',
                    use_name: '$user.use_name',
                    new_id: "$new.new_id",
                    new_title: "$new.new_title",
                    new_alias: "$new.new_alias",
                    nhs_time: 1,
                }
            }
        ]);

        const hoSoUtPromise = NopHoSo.countDocuments({ nhs_com_id: idNTD });
        const hoSoDiemLocPromise = TblPointUsed.countDocuments({ type: { $ne: 0 }, use_id: { $ne: 0 }, usc_id: idNTD });
        const chuyenVienGuiUvPromise = NopHoSo.countDocuments({ nhs_com_id: idNTD, type: 2 });

        const [tinconhan, tinsaphethan, tinhethan, tindangtrongngay, tinlammoi, tinGanDay, hoSoMoi, hoSoUt, hoSoDiemLoc, chuyenVienGuiUv] = await Promise.all([
            tinconhanPromise, tinsaphethanPromise, tinhethanPromise, tindangtrongngayPromise,
            tinlammoiPromise, tinGanDayPromise, hoSoMoiPromise, hoSoUtPromise, hoSoDiemLocPromise, chuyenVienGuiUvPromise
        ]);
        const arr = [];
        const arrUV = [];
        const arrUV2 = [];
        for (let i = 0; i < tinGanDay.length; i++) {
            const element = tinGanDay[i];
            delete element.nhs_new_id;
            element.new_han_nop = new Date(element.new_han_nop * 1000);
            arr.push(arrPromiseUV(element.new_cat_id, element.new_city));
            arrUV.push(ungvien(element.new_id));
            arrUV2.push(ungvien(element.new_id, 2));
        }
        const arrNew = [...arr, ...arrUV, ...arrUV2];
        const dataa = await Promise.all(arrNew);
        for (let i = 0; i < tinGanDay.length; i++) {
            const element = tinGanDay[i];
            element.soUvTiemNang = dataa[i];
            element.uVungTuyen = dataa[i + tinGanDay.length];
            element.chuyenVienGuiUv = dataa[i + tinGanDay.length * 2];
        }
        for (let i = 0; i < hoSoMoi.length; i++) {
            const element = hoSoMoi[i];
            element.nhs_time = new Date(element.nhs_time * 1000);
        }
        data.hoSoUt = hoSoUt;
        data.hoSoDiemLoc = hoSoDiemLoc;
        data.chuyenVienGuiUv = chuyenVienGuiUv;
        data.tinconhan = tinconhan;
        data.tinsaphethan = tinsaphethan;
        data.tinhethan = tinhethan;
        data.tindangtrongngay = tindangtrongngay;
        data.tinlammoi = tinlammoi;
        data.tinGanDay = tinGanDay;
        data.hoSoMoi = hoSoMoi;
        return functions.success(res, 'get data success', { data });
    } catch (error) {
        console.log("🚀 ~ file: ntd_Controller.js:254 ~ ManageAll ~ error:", error);
        return functions.setError(res, error.message);
    }
};

// promise đếm số ứng viên
const arrPromiseUV = (new_cat_id, new_city) => {
    const soUngVien = Users.countDocuments({
        $or: [
            { 'use_nganh_nghe.id': new_cat_id },
            { 'use_city_job.id': new_city },
        ]
    });
    return soUngVien;
};

// promise đếm ứng viên nộp hồ sơ
const ungvien = (new_id, type) => {
    const conditions = { nhs_new_id: new_id };
    if (type) conditions.type = type;
    const result = NopHoSo.countDocuments(conditions);
    return result;
};

//  gửi ứng viên
export const SpecialistsSendCandidates = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const filter = Number(req.body.filter);
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const conditions = { nhs_com_id: idNTD, type: 2 };
        if (filter || filter === 0) conditions.result = filter;
        const data = await NopHoSo.aggregate([
            { $match: conditions },
            { $sort: { id: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: "Users",
                    localField: "nhs_use_id",
                    foreignField: "use_id",
                    as: "ungvien"
                }
            },
            {
                $lookup: {
                    from: "New",
                    localField: "nhs_new_id",
                    foreignField: "new_id",
                    as: "new"
                }
            },
            { $unwind: "$ungvien" },
            { $unwind: "$new" },
            {
                $project: {
                    use_name: "$ungvien.use_name",
                    use_id: "$ungvien.use_id",
                    new_id: "$new.new_id",
                    new_title: "$new.new_title",
                    new_alias: "$new.new_alias",
                    date_interview: 1,
                    id: 1,
                    result: 1,
                    nhs_time: 1,
                    date_interview: 1,
                    note_uv: "$note",
                }
            }
        ]);
        const total = await NopHoSo.countDocuments(conditions);
        return functions.success(res, 'success', { total, data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// cập nhật hẹn phỏng vấn
export const UpdateTimeInterview = async (req, res) => {
    try {
        const { year, month, day, id } = req.body;
        if (year && month && day && id) {
            const time = functions.getTime(`${year}/${month}/${day}`);
            const checkUpdate = await NopHoSo.findOneAndUpdate({ id }, { date_interview: time });
            if (checkUpdate) return functions.success(res, 'success');
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// cập nhật ghi chú
export const UpdateNoteInterview = async (req, res) => {
    try {
        const { note, id } = req.body;
        if ((note || note === "") && id) {
            const checkUpdate = await NopHoSo.findOneAndUpdate({ id }, { note });
            if (checkUpdate) return functions.success(res, 'success');
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// cập nhật kết quả
export const UpdateResultInterview = async (req, res) => {
    try {
        const { result, id } = req.body;
        if (result && id) {
            const checkUpdate = await NopHoSo.findOneAndUpdate({ id }, { date_result: functions.getTime(), result });
            if (checkUpdate) return functions.success(res, 'success');
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// Xoá hồ sơ ứng tuyển
export const DeleteCandidateApply = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const { id } = req.body;
        if (id) {
            const checkUpdate = await NopHoSo.findOneAndDelete({ nhs_com_id: idNTD, id });
            if (checkUpdate) return functions.success(res, 'success');
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// ứng viên đến ứng tuyển
export const CandidatesComeToApply = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const filter = Number(req.body.filter);
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const newId = Number(req.body.new_id);
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const conditions = { nhs_com_id: idNTD, type: 1 };
        if (filter || filter === 0) conditions.result = filter;
        const conditions2 = newId ? { "new_id": newId } : {};
        const data = await NopHoSo.aggregate([
            { $match: conditions },
            { $sort: { id: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: "Users",
                    localField: "nhs_use_id",
                    foreignField: "use_id",
                    as: "ungvien"
                }
            },
            {
                $lookup: {
                    from: "New",
                    localField: "nhs_new_id",
                    foreignField: "new_id",
                    as: "new"
                }
            },
            { $unwind: "$ungvien" },
            { $unwind: "$new" },
            {
                $project: {
                    use_name: "$ungvien.use_name",
                    use_id: "$ungvien.use_id",
                    new_id: "$new.new_id",
                    new_title: "$new.new_title",
                    new_alias: "$new.new_alias",
                    date_interview: 1,
                    id: 1,
                    result: 1,
                    nhs_time: 1,
                    date_interview: 1,
                    note_uv: "$note",
                    thuxinviec: "$letter",
                }
            },
            { $match: conditions2 },
        ]);
        const total = await NopHoSo.countDocuments(conditions);

        const titleFilter = await NopHoSo.aggregate([
            { $match: conditions },
            { $sort: { id: -1 } },
            // {
            //     $lookup: {
            //         from: "Users",
            //         localField: "nhs_use_id",
            //         foreignField: "use_id",
            //         as: "ungvien"
            //     }
            // },
            {
                $lookup: {
                    from: "Work247_New",
                    localField: "nhs_new_id",
                    foreignField: "new_id",
                    as: "new"
                }
            },
            // { $unwind: "$ungvien" },
            { $unwind: "$new" },
            {
                $project: {
                    // use_name: "$ungvien.use_name",
                    // use_id: "$ungvien.use_id",
                    new_id: "$new.new_id",
                    new_title: "$new.new_title",
                    // new_alias: "$new.new_alias",
                    // date_interview: 1,
                    // id: 1,
                    // result: 1,
                    // nhs_time: 1,
                    // date_interview: 1
                }
            }
        ]);
        return functions.success(res, 'success', { total, data, titleFilter });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// ứng viên từ điểm lọc
export const CandiFilterPoint = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const filter1 = Number(req.body.filter1);
        const filter2 = Number(req.body.filter2);
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const conditions = { usc_id: idNTD, point: { $ne: 0 } };
        if (filter1) conditions.type = filter1;
        if (filter2 || filter2 === 0) conditions.type_err = filter2;
        const data = await TblPointUsed.aggregate([
            { $match: conditions },
            { $sort: { used_day: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: "Users",
                    localField: "use_id",
                    foreignField: "use_id",
                    as: "user"
                }
            },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: "usc_id",
                    foreignField: "usc_id",
                    as: "usercompany"
                }
            },
            { $unwind: "$user" },
            { $unwind: "$usercompany" },
            {
                $project: {
                    use_name: "$user.use_name",
                    use_id: "$user.use_id",
                    used_day: 1,
                    use_job_name: "$user.use_job_name",
                    type: 1,
                    type_err: 1,
                    return_point: 1,
                    usc_id: "$usercompany.usc_id",
                    point: 1,
                    note_uv: 1,
                }
            }
        ]);
        const total = await TblPointUsed.countDocuments(conditions);
        return functions.success(res, 'success', { total, data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// chuyển trạng thái ứng viên từ diểm lọc
export const UpdateStatusCandiFilterPoint = async (req, res) => {
    try {
        const { status, use_id } = req.body;
        const idNTD = req.idNTD;
        if (status && use_id) {
            const checkUpdate = await TblPointUsed.findOneAndUpdate({ use_id, usc_id: idNTD }, {
                type_err: status
            });
            if (checkUpdate) return functions.success(res, 'success');
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// ghi chú ứng viên từ diểm lọc
export const UpdateNoteCandiFilterPoint = async (req, res) => {
    try {
        const { note, use_id } = req.body;
        const idNTD = req.idNTD;
        if ((note || note === "") && use_id) {
            const checkUpdate = await TblPointUsed.findOneAndUpdate({ use_id, usc_id: idNTD }, {
                note_uv: note
            });
            if (checkUpdate) return functions.success(res, 'success');
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// xoá ứng viên từ điểm lọc
export const DeleteCandiFilterPoint = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const { use_id } = req.body;
        if (use_id) {
            const checkUpdate = await TblPointUsed.findOneAndDelete({ use_id, usc_id: idNTD });
            if (checkUpdate) return functions.success(res, 'success');
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// hồ sơ ứng viên đã lưu
export const CandiDidSave = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const data = await TblLuuHoSoUv.aggregate([
            { $match: { id_ntd: idNTD } },
            { $sort: { id_hoso: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: "Users",
                    localField: "id_uv",
                    foreignField: "use_id",
                    as: "ungvien"
                }
            },
            {
                $project: {
                    use_name: "$ungvien.use_name",
                    use_id: "$ungvien.use_id",
                    use_job_name: "$ungvien.use_job_name",
                    create_time: 1,
                    id_hoso: 1,
                }
            }
        ]);
        const total = await TblLuuHoSoUv.countDocuments({ id_ntd: idNTD });
        return functions.success(res, 'success', { total, data });

    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// xoá hồ sơ ứng viên đã lưu
export const DeleteCandiDidSave = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const { id_hoso } = req.body;
        if (id_hoso) {
            const checkUpdate = await TblLuuHoSoUv.findOneAndDelete({ id_hoso });
            console.log(id_hoso)
            if (checkUpdate) return functions.success(res, 'success');
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

//Lưu hồ sơ ứng viên 
export const SaveCandi = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const { id_uv } = req.body;
        if (id_uv && idNTD) {
            const checkExist = await TblLuuHoSoUv.findOne({ id_uv: id_uv, id_ntd: idNTD })
            let result = 0
            if (!checkExist) {
                const id = await functions.getMaxId(TblLuuHoSoUv, 'id_hoso')
                await TblLuuHoSoUv.create({
                    id_hoso: id,
                    id_ntd: idNTD,
                    id_uv: id_uv,
                    create_time: functions.getTime(),
                })
                result = 1
            }else {
                await TblLuuHoSoUv.deleteOne({ id_uv: id_uv, id_ntd: idNTD });
                result = 2;
            }
            return functions.success(res, 'Profile saved successfully', { result_save: result })
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// xem thông tin ứng viên
export const ViewCandidateInformation = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const iduv = req.body.iduv || -1;
        // console.log(idNTD, iduv)
        const time = functions.getTime()
        const checkPoint = await TblPointCompany.findOne({ usc_id: idNTD, day_end: { $gte: time } }).lean();
        // console.log(checkPoint)
        const checkMailUv = await Users.findOne({ use_id: iduv }, { use_mail: 1, use_name: 1, use_city_job: 1, use_nganh_nghe: 1, use_authentic: 1 }).lean();
        if (checkMailUv) {

            // Nếu đã xác thực => 3 điểm
            // Chưa xác thực => 2 điểm 
            const requiredPoint = checkMailUv?.use_authentic == 1 ? 3 : 2

            if (checkPoint && checkPoint.point_usc > requiredPoint) {
                await TblPointUsed.findOneAndUpdate({ usc_id: idNTD, use_id: iduv }, { type: 2, used_day: functions.getTime(), point: requiredPoint });
                await TblPointCompany.findOneAndUpdate({ usc_id: idNTD }, { $inc: { point_usc: -requiredPoint } });
                const checkRelations = await TblRelationship.findOne({
                    $or: [
                        { $and: [{ user_id: iduv }, { user_partner: idNTD }] },
                        { $and: [{ user_id: idNTD }, { user_partner: iduv }] },
                        { rela_type: 0 },
                    ]
                });
                if (!checkRelations) {
                    const id = await functions.getMaxId(TblRelationship, 'id');
                    await TblRelationship.create({
                        id,
                        user_id: idNTD,
                        user_type: 1,
                        user_partner: iduv,
                        partner_type: 0,
                        rela_type: 0,
                        rela_status: 1,
                        room: `idNTD_iduv`,
                        created_at: functions.getTime(),
                        updated_at: functions.getTime(),
                    });
                }
                if (checkMailUv.use_mail && checkMailUv.use_mail != '') {
                    const email_receive = checkMailUv.use_mail;
                    const name_receive = checkMailUv.use_name;
                    const job_city = checkMailUv.use_city_job[0];
                    const job_cate = checkMailUv.use_nganh_nghe[0];
                    const name = await UserCompany.findOne({ usc_id: idNTD }, { usc_company: 1 }).lean();
                    const job = await New.aggregate([
                        {
                            $match: {
                                new_active: 1, new_thuc: 1, new_hot: 0, new_city: new RegExp(job_city),
                                $or: [
                                    { new_real_cate: new RegExp(job_cate) },
                                    { new_cat_id: new RegExp(job_cate) },
                                ]
                            }
                        },
                        { $sort: { new_nganh: -1, new_id: -1, new_han_nop: -1 } },
                        { $limit: 5 },
                        {
                            $lookup: {
                                from: "Work247_UserCompany",
                                localField: "new_user_id",
                                foreignField: "usc_id",
                                as: "company",
                            }
                        },
                        { $unwind: "$company" },
                        {
                            $project: {
                                new_id: 1,
                                new_money: 1,
                                new_city: 1,
                                new_cap_bac: 1,
                                new_create_time: 1,
                                new_title: 1,
                                new_nganh: 1,
                                new_han_nop: 1,
                                new_alias: 1,
                                usc_id: '$company.usc_id',
                                usc_create_time: '$company.usc_create_time',
                                usc_logo: '$company.usc_logo',
                                usc_company: '$company.usc_company',
                            }
                        }
                    ]);
                    let listJob = '';
                    let text_mail = '';
                    const city = await City.find({}, { cit_id: 1, cit_name: 1 }).lean();
                    if (job.length > 0) {
                        text_mail = `Bạn có thể tham khảo các công việc tương tự xem có phù hợp với mình không nhé!`;
                        listJob += `'<tr style="float:left;padding:10px 15px 10px 15px;width:100%;box-sizing: border-box;"><td><table>`;
                        for (let i = 0; i < job.length; i++) {
                            const element = job[i];
                            const cityName = city.find(item => item.cit_id == element.new_city);
                            const url = `https://work247.vn/${element.new_alias}-${element.new_id}`;
                            listJob += `<tr>
                                <td style="padding-left: 0px;">
                                    <table>
                                        <tr>
                                            <td>
                                                <p style="font-weight: 600;font-size: 18px;line-height: 21px;color: #307DF1;margin: 0;"><a style="text-decoration:none;color:#2196f3;" rel="nofollow" href=${url}>${element.new_title}</a></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="font-size: 16px;line-height: 19px;color: #f89700;margin: 0;">
                                                ${element.usc_company}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="font-size: 16px;margin:0">
                                                    <span style="font-size: 16px;line-height: 19px;color: #4D4D4D;margin: 0;">${cityName.cit_name}</span> | <span style="font-size: 16px;line-height: 19px;color: #4D4D4D;margin: 0;">${functions.ViewSalary(element.new_money)}</span> | <span style="font-size: 16px;line-height: 19px;color: #4D4D4D;margin: 0;">${new Date(element.new_han_nop * 1000).toISOString().slice(0, 10).split('-').reverse().join('/')}</span>
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>`;
                        }
                        listJob += '</table></td></tr>';
                        functions.sendMailViewCandi(email_receive, name_receive, text_mail, listJob, name.usc_company);
                    }
                }
                return functions.success(res, 'Successfully');
            }
            return functions.success(res, 'Not point enought');
        }
        return functions.setError(res, 'not found user', 404);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// Xem thông tin nhà tuyển dụng
export const DetailNTD = async (req, res, next) => {
    try {
        const idNTD = req.body.id;
        if (idNTD && !isNaN(Number(idNTD))) {
            const data = await UserCompany.findOne({
                usc_id: idNTD
            }, {
                usc_email: 1,
                usc_phone_tk: 1,
                usc_company: 1,
                usc_boss: 1,
                usc_size: 1,
                usc_phone: 1,
                usc_mst: 1,
                financial_sector: 1,
                DateOfIncorporation: 1,
                usc_skype: 1,
                usc_website: 1,
                usc_city: 1,
                usc_district: 1,
                usc_address: 1,
                usc_company_info: 1,
                image_com: 1,
                usc_name: 1,
                usc_name_add: 1,
                usc_name_phone: 1,
                usc_name_email: 1,
                usc_create_time: 1,
                usc_logo: 1,
                usc_alias: 1,
            }).lean();
            if (data?.DateOfIncorporation && data.DateOfIncorporation != 0) data.DateOfIncorporation = new Date(data.DateOfIncorporation * 1000);
            data.usc_logo = functions.getAvatarNTD(data.usc_create_time, data.usc_logo);
            data.image_com = functions.getImageNTD(data.image_com);
            data.usc_create_time = new Date(data.usc_create_time * 1000);
            const point = await TblPointCompany.findOne({ usc_id: idNTD }, { point_usc: 1 }).lean();
            const endPoint = point ? point.point_usc : 0;

            // Lấy thêm danh sách tin tuyển dụng
            // console.log(idNTD, typeof idNTD)
            const dataNewPromise = New.aggregate([
                { $match: { new_user_id: Number(idNTD), new_active: 1 } },
                { $sort: { new_id: -1 } },
                {
                    $lookup: {
                        from: "Work247_UserCompany",
                        localField: "new_user_id",
                        foreignField: "usc_id",
                        as: "company",
                    }
                },
                { $unwind: "$company" },
                {
                    $project: {
                        new_id: 1,
                        usc_id: "$company.usc_id",
                        new_money: 1, new_money_type: 1, new_money_from: 1, new_money_to: 1,
                        new_city: 1,
                        new_cap_bac: 1,
                        new_create_time: 1,
                        new_update_time: 1,
                        usc_create_time: "$company.usc_create_time",
                        // usc_logo: "$company.usc_logo",
                        usc_logo: data.usc_logo,
                        usc_company: "$company.usc_company",
                        new_title: 1,
                        new_nganh: 1,
                        usc_alias: "$company.usc_alias",
                        new_han_nop: 1,
                        new_alias: 1,
                        is_login: 1
                    }
                }
            ]).exec();

            // Bổ sung dữ liệu 
            let finan_sect = data?.financial_sector &&
                Array.isArray(data?.financial_sector) &&
                data.financial_sector.length > 0 ?
                data.financial_sector.map(item => `${item.id}`) : []
            // let conditions = finan_sect.length > 0 ? { 'financial_sector.id': { $in: finan_sect }, usc_id: { $ne: Number(idNTD) } } : { usc_id: { $ne: Number(idNTD) } }
            const sameCompany_Promise = UserCompany.aggregate([
                { $match: { usc_id: { $ne: Number(idNTD) } } },
                { $sort: { usc_id: -1 } },
                { $limit: 10 },
                {
                    $project: {
                        usc_id: 1,
                        usc_company: 1,
                        usc_name: 1,
                        usc_alias: 1,
                        usc_size: 1,
                        usc_address: 1,
                        usc_company_info: 1,
                        usc_create_time: 1,
                        usc_logo: 1,
                        financial_sector: 1,
                    }
                },
                {
                    $addFields: {
                        priority: { $cond: { if: { $in: ["$financial_sector.id", finan_sect] }, then: 1, else: 0 } }
                    }
                },
                { $sort: { priority: -1 } },
            ]).exec();

            if (finan_sect && Array.isArray(finan_sect) && finan_sect.length > 0) finan_sect = finan_sect.map(item => Number(item))
            // conditions = finan_sect.length > 0 ? { new_nganh: { $in: finan_sect }, new_active: 1 } : { new_active: 1 }
            const sameJob_Promise = New.aggregate([
                { $match: { new_active: 1, new_user_id: { $ne: Number(idNTD) } } },
                { $sort: { new_id: -1 } },
                { $limit: 10 },
                {
                    $lookup: {
                        from: "Work247_UserCompany",
                        localField: "new_user_id",
                        foreignField: "usc_id",
                        as: "company",
                    }
                },
                { $unwind: { path: "$company", preserveNullAndEmptyArrays: true } },
                {
                    $project: {
                        new_id: 1,
                        usc_id: "$company.usc_id",
                        new_money: 1, new_money_type: 1, new_money_from: 1, new_money_to: 1,
                        new_city: 1,
                        new_cap_bac: 1,
                        new_create_time: 1,
                        new_update_time: 1,
                        usc_create_time: "$company.usc_create_time",
                        usc_logo: "$company.usc_logo",
                        // usc_logo: data.usc_logo,
                        usc_company: "$company.usc_company",
                        new_title: 1,
                        new_nganh: 1,
                        usc_alias: "$company.usc_alias",
                        new_han_nop: 1,
                        new_alias: 1,
                        is_login: 1,
                    }
                },
                {
                    $addFields: {
                        priority: { $cond: { if: { $in: ["$new_nganh", finan_sect] }, then: 1, else: 0 } }
                    }
                },
                { $sort: { priority: -1 } },
            ]).exec();

            // const blog_Promise = News.find(
            //     { new_active: 1 },
            //     {
            //         new_id: 1, new_title: 1,
            //         new_title_rewrite: 1, new_picture: 1, new_des: 1, new_date: 1
            //     })
            //     .sort({ new_id: -1 })
            //     .limit(8).lean();

            const blog_Promise = News.aggregate([
                { $match: { new_active: 1 } },
                { $sort: { new_id: -1 } },
                { $limit: 10 },
                {
                    $lookup: {
                        from: "Work247_AdminUser",
                        localField: "admin_id",
                        foreignField: "adm_id",
                        as: "adminUser",
                    }
                },
                { $unwind: { path: "$adminUser", preserveNullAndEmptyArrays: true } },
                {
                    $project: {
                        new_id: 1, new_title: 1,
                        new_title_rewrite: 1, new_picture: 1, new_des: 1, new_date: 1,
                        admin_name: "$adminUser.adm_name"
                    }
                }
            ]).exec();

            const [dataNew, dataSameCom, dataSameJob, blogs] = await Promise.all([
                dataNewPromise, sameCompany_Promise, sameJob_Promise, blog_Promise
            ]);

            // let dataSameCom2 = [], dataSameJob2 = []
            // if (dataSameCom.length < 5) {
            //     const sameCompany_Promise2 = UserCompany.aggregate([
            //         { $match: { usc_id: { $ne: Number(idNTD) } } },
            //         { $sort: { usc_id: -1 } },
            //         { $limit: 10 },
            //         {
            //             $project: {
            //                 usc_id: 1,
            //                 usc_company: 1,
            //                 usc_name: 1,
            //                 usc_alias: 1,
            //                 usc_size: 1,
            //                 usc_address: 1,
            //                 usc_company_info: 1,
            //                 usc_create_time: 1,
            //                 usc_logo: 1,
            //                 financial_sector: 1,
            //             }
            //         }
            //     ]).exec();

            //     const [result] = await Promise.all([])
            // }
            // const dataNew = await New.find({new_user_id: idNTD, new_active: 1}, {}).sort({ new_id: -1 })
            // console.log(dataNewPromise, dataNew)

            const iduser = await functions.getTokenUser(req, res);
            const arrPromiseNopHoSo = []
            if (iduser) {
                for (let i = 0; i < dataNew.length; i++) {
                    const element = dataNew[i];
                    arrPromiseNopHoSo.push(promiseNopHoSo(iduser, element.new_id))
                }
                const arrNopHoSo = await Promise.all(arrPromiseNopHoSo)
                for (let i = 0; i < dataNew.length; i++) {
                    const element = dataNew[i];
                    element.checkUngTuyen = arrNopHoSo[i] ? true : false
                }
            }
            for (let i = 0; i < dataSameJob.length; i++) {
                const element = dataSameJob[i];
                element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo)
            }
            for (let i = 0; i < dataSameCom.length; i++) {
                const element = dataSameCom[i];
                element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo)
            }
            data.news = dataNew
            data.sameCom = dataSameCom
            data.sameJob = dataSameJob
            data.blog = blogs
            return functions.success(res, 'get data success', { point: endPoint, data });
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// Xem thông tin nhà tuyển dụng (theo alias)
export const DetailNTD2 = async (req, res, next) => {
    try {
        const alias = req.body.alias

        // const idNTD = req.body.id;
        // if (idNTD && !isNaN(Number(idNTD))) {
        if (alias) {
            const data = await UserCompany.findOne({
                // usc_id: idNTD
                usc_alias: alias
            }, {
                usc_id: 1,
                usc_email: 1,
                usc_phone_tk: 1,
                usc_company: 1,
                usc_boss: 1,
                usc_size: 1,
                usc_phone: 1,
                usc_mst: 1,
                financial_sector: 1,
                DateOfIncorporation: 1,
                usc_skype: 1,
                usc_website: 1,
                usc_city: 1,
                usc_district: 1,
                usc_address: 1,
                usc_company_info: 1,
                image_com: 1,
                usc_name: 1,
                usc_name_add: 1,
                usc_name_phone: 1,
                usc_name_email: 1,
                usc_create_time: 1,
                usc_logo: 1,
            }).lean();
            if (data?.DateOfIncorporation && data.DateOfIncorporation != 0) data.DateOfIncorporation = new Date(data.DateOfIncorporation * 1000);
            data.usc_logo = functions.getAvatarNTD(data.usc_create_time, data.usc_logo);
            data.image_com = functions.getImageNTD(data.image_com);
            data.usc_create_time = new Date(data.usc_create_time * 1000);
            
            const idNTD = data?.usc_id;

            const point = await TblPointCompany.findOne({ usc_id: idNTD }, { point_usc: 1 }).lean();
            const endPoint = point ? point.point_usc : 0;

            // Lấy thêm danh sách tin tuyển dụng
            // console.log(idNTD, typeof idNTD)
            const dataNewPromise = New.aggregate([
                { $match: { new_user_id: Number(idNTD), new_active: 1 } },
                { $sort: { new_id: -1 } },
                {
                    $lookup: {
                        from: "Work247_UserCompany",
                        localField: "new_user_id",
                        foreignField: "usc_id",
                        as: "company",
                    }
                },
                { $unwind: "$company" },
                {
                    $project: {
                        new_id: 1,
                        usc_id: "$company.usc_id",
                        new_money: 1, new_money_type: 1, new_money_from: 1, new_money_to: 1,
                        new_city: 1,
                        new_cap_bac: 1,
                        new_create_time: 1,
                        new_update_time: 1,
                        usc_create_time: "$company.usc_create_time",
                        // usc_logo: "$company.usc_logo",
                        usc_logo: data.usc_logo,
                        usc_company: "$company.usc_company",
                        new_title: 1,
                        new_nganh: 1,
                        usc_alias: "$company.usc_alias",
                        new_han_nop: 1,
                        new_alias: 1,
                        is_login: 1
                    }
                }
            ]).exec();

            // Bổ sung dữ liệu 
            let finan_sect = data?.financial_sector &&
                Array.isArray(data?.financial_sector) &&
                data.financial_sector.length > 0 ?
                data.financial_sector.map(item => `${item.id}`) : []
            // let conditions = finan_sect.length > 0 ? { 'financial_sector.id': { $in: finan_sect }, usc_id: { $ne: Number(idNTD) } } : { usc_id: { $ne: Number(idNTD) } }
            const sameCompany_Promise = UserCompany.aggregate([
                { $match: { usc_id: { $ne: Number(idNTD) } } },
                { $sort: { usc_id: -1 } },
                { $limit: 10 },
                {
                    $project: {
                        usc_id: 1,
                        usc_company: 1,
                        usc_name: 1,
                        usc_alias: 1,
                        usc_size: 1,
                        usc_address: 1,
                        usc_company_info: 1,
                        usc_create_time: 1,
                        usc_logo: 1,
                        financial_sector: 1,
                    }
                },
                {
                    $addFields: {
                        priority: { $cond: { if: { $in: ["$financial_sector.id", finan_sect] }, then: 1, else: 0 } }
                    }
                },
                { $sort: { priority: -1 } },
            ]).exec();

            if (finan_sect && Array.isArray(finan_sect) && finan_sect.length > 0) finan_sect = finan_sect.map(item => Number(item))
            // conditions = finan_sect.length > 0 ? { new_nganh: { $in: finan_sect }, new_active: 1 } : { new_active: 1 }
            const sameJob_Promise = New.aggregate([
                { $match: { new_active: 1, new_user_id: { $ne: Number(idNTD) } } },
                { $sort: { new_id: -1 } },
                { $limit: 10 },
                {
                    $lookup: {
                        from: "Work247_UserCompany",
                        localField: "new_user_id",
                        foreignField: "usc_id",
                        as: "company",
                    }
                },
                { $unwind: { path: "$company", preserveNullAndEmptyArrays: true } },
                {
                    $project: {
                        new_id: 1,
                        usc_id: "$company.usc_id",
                        new_money: 1, new_money_type: 1, new_money_from: 1, new_money_to: 1,
                        new_city: 1,
                        new_cap_bac: 1,
                        new_create_time: 1,
                        new_update_time: 1,
                        usc_create_time: "$company.usc_create_time",
                        usc_logo: "$company.usc_logo",
                        // usc_logo: data.usc_logo,
                        usc_company: "$company.usc_company",
                        new_title: 1,
                        new_nganh: 1,
                        usc_alias: "$company.usc_alias",
                        new_han_nop: 1,
                        new_alias: 1,
                        is_login: 1,
                    }
                },
                {
                    $addFields: {
                        priority: { $cond: { if: { $in: ["$new_nganh", finan_sect] }, then: 1, else: 0 } }
                    }
                },
                { $sort: { priority: -1 } },
            ]).exec();

            // const blog_Promise = News.find(
            //     { new_active: 1 },
            //     {
            //         new_id: 1, new_title: 1,
            //         new_title_rewrite: 1, new_picture: 1, new_des: 1, new_date: 1
            //     })
            //     .sort({ new_id: -1 })
            //     .limit(8).lean();

            const blog_Promise = News.aggregate([
                { $match: { new_active: 1 } },
                { $sort: { new_id: -1 } },
                { $limit: 10 },
                {
                    $lookup: {
                        from: "Work247_AdminUser",
                        localField: "admin_id",
                        foreignField: "adm_id",
                        as: "adminUser",
                    }
                },
                { $unwind: { path: "$adminUser", preserveNullAndEmptyArrays: true } },
                {
                    $project: {
                        new_id: 1, new_title: 1,
                        new_title_rewrite: 1, new_picture: 1, new_des: 1, new_date: 1,
                        admin_name: "$adminUser.adm_name"
                    }
                }
            ]).exec();

            const [dataNew, dataSameCom, dataSameJob, blogs] = await Promise.all([
                dataNewPromise, sameCompany_Promise, sameJob_Promise, blog_Promise
            ]);

            // let dataSameCom2 = [], dataSameJob2 = []
            // if (dataSameCom.length < 5) {
            //     const sameCompany_Promise2 = UserCompany.aggregate([
            //         { $match: { usc_id: { $ne: Number(idNTD) } } },
            //         { $sort: { usc_id: -1 } },
            //         { $limit: 10 },
            //         {
            //             $project: {
            //                 usc_id: 1,
            //                 usc_company: 1,
            //                 usc_name: 1,
            //                 usc_alias: 1,
            //                 usc_size: 1,
            //                 usc_address: 1,
            //                 usc_company_info: 1,
            //                 usc_create_time: 1,
            //                 usc_logo: 1,
            //                 financial_sector: 1,
            //             }
            //         }
            //     ]).exec();

            //     const [result] = await Promise.all([])
            // }
            // const dataNew = await New.find({new_user_id: idNTD, new_active: 1}, {}).sort({ new_id: -1 })
            // console.log(dataNewPromise, dataNew)

            const iduser = await functions.getTokenUser(req, res);
            const arrPromiseNopHoSo = []
            if (iduser) {
                for (let i = 0; i < dataNew.length; i++) {
                    const element = dataNew[i];
                    arrPromiseNopHoSo.push(promiseNopHoSo(iduser, element.new_id))
                }
                const arrNopHoSo = await Promise.all(arrPromiseNopHoSo)
                for (let i = 0; i < dataNew.length; i++) {
                    const element = dataNew[i];
                    element.checkUngTuyen = arrNopHoSo[i] ? true : false
                }
            }
            for (let i = 0; i < dataSameJob.length; i++) {
                const element = dataSameJob[i];
                element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo)
            }
            for (let i = 0; i < dataSameCom.length; i++) {
                const element = dataSameCom[i];
                element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo)
            }
            data.news = dataNew
            data.sameCom = dataSameCom
            data.sameJob = dataSameJob
            data.blog = blogs
            return functions.success(res, 'get data success', { point: endPoint, data });
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

export const PointCpn = async (req,res,next) => {
    const idNTD = req.idNTD;
    const query = await TblPointCompany.findOne({usc_id:idNTD},{point:1,point_usc:1,day_end:1}).lean();
    if (query && query.day_end <= Math.floor(Date.now() / 1000)) {
        query.point_usc = 0;
    }
    return functions.success(res,'get point successfully',query)
}

// promise call NopHoSo
const promiseNopHoSo = (iduser, new_id) => {
    const query = NopHoSo.findOne({ nhs_use_id: iduser, nhs_new_id: new_id, type: 1 }, { id: 1 }).lean();
    return query;
}