 
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

export const PointCpn = async (req,res,next) => {
    const idNTD = req.idNTD;
    const query = await TblPointCompany.findOne({usc_id:idNTD},{point:1,point_usc:1,day_end:1}).lean();
    if (query && query.day_end <= Math.floor(Date.now() / 1000)) {
        query.point_usc = 0;
    }
    return functions.success(res,'get point successfully',query)
}