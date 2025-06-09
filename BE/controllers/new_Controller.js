import * as functions from '../services/functions.js';
import UserCompany from '../models/user/UserCompany.js';
import New from '../models/new/New.js';
import Users from '../models/user/Users.js';
import NewGhimTin from '../models/new/NewGhimTin.js';
import Category from '../models/category/Category.js';
import NopHoSo from '../models/NopHoSo.js';
import TblLuuTin from '../models/tbl/TblLuuTin.js';
import TblLuuHoSoUv from '../models/tbl/TblLuuHoSoUv.js';
import City from '../models/city/City.js';
import SampleCv from '../models/sample/SampleCv.js';
import TblTagsNew from '../models/tbl/TblTagsNew.js';
import TblPointCompany from '../models/tbl/TblPointCompany.js';
import SaveCandidateCv from '../models/save/SaveCandidateCv.js';
import UserCvUpload from '../models/user/UserCvUpload.js';

// đăng tin
export const PostNew = async(req, res) => {
    try {
        const idNTD = req.idNTD;
        const tuKhoa = functions.tuKhoa;
        let realCate = [];

        // vị trí đăng tuyển
        const title = req.body.title;

        // cấp bậc
        const capBac = Number(req.body.capBac);

        // ngành nghề 
        const catId = req.body.catId;

        // chi tiết công việc cần tuyển
        const tag = req.body.tag;
        console.log(tag);

        // địa điểm làm việc
        // const city = Number(req.body.city);
        const city = req.body.city;

        // quận huyện làm việc
        // const district = Number(req.body.district);
        const district = req.body.district;

        // địa chỉ chi tiết làm việc
        const address = req.body.address;

        // hình thức làm việc
        const hinhThuc = Number(req.body.hinhThuc);

        // mức lương
        const money = Number(req.body.money);

        // số lượng cần tuyển
        const soLuong = Number(req.body.soLuong);

        // thời gian thử việc (nếu có)
        const thuViec = req.body.thuViec;

        // hoa hồng (nếu có)
        const hoaHong = req.body.hoaHong;

        // mô tả công việc
        const moTa = req.body.moTa;

        // kinh nghiệm
        const exp = Number(req.body.exp);

        // yêu cầu bằng cấp
        const bangCap = Number(req.body.bangCap);

        // giới tính
        const gioiTinh = Number(req.body.gioiTinh);

        // yêu cầu công việc
        const yeuCau = req.body.yeuCau;

        // quyền lợi được hưởng
        const quyenLoi = req.body.quyenLoi;

        // hồ sơ bao gồm
        const hoSo = req.body.hoSo;

        // hạn nộp
        let hanNop = req.body.hanNop;

        // tên người liên hệ
        const userContact = req.body.userContact;

        // địa chỉ liên hệ
        const addressContact = req.body.addressContact;

        // số điện thoại liên hệ
        const phoneContact = req.body.phoneContact;

        // email liên hệ
        const emailContact = req.body.emailContact;

        console.log('>>> check city: ', city, "district: ", district)

        if (title && capBac && catId && city &&
            district && address && hinhThuc && money &&
            soLuong && moTa && (bangCap || bangCap === 0) &&
            yeuCau && quyenLoi && hoSo && hanNop &&
            userContact && addressContact && phoneContact && emailContact) {
            const date = functions.getTime();
            hanNop = functions.getTime(hanNop);
            const checkEmail = await functions.checkEmail(emailContact);
            //check time 60p
            const currentTimeUnix = Math.floor(Date.now() / 1000);
            const oneHourAgoUnix = currentTimeUnix - 3600;
            const checkTime = await New.exists({
                new_user_id: idNTD,
                new_create_time: { $gte: oneHourAgoUnix, $lte: currentTimeUnix }
            });
            console.log('time nè',checkTime)
            if(checkTime){
                return functions.setError(res, "Each post must be at least 60 minutes apart.", 400);
            }
            if (checkEmail) {
                if (hanNop >= date) {
                    const checkPhone = await functions.checkPhone(phoneContact);
                    if (checkPhone) {
                        const checkTitle = await New.findOne({ new_title: title, new_user_id: idNTD }).lean();
                        if (!checkTitle) {
                            for (let i = 0; i < tuKhoa.length; i++) {
                                const element = tuKhoa[i]['arr'].split(', ');
                                for (let j = 0; j < element.length; j++) {
                                    if (title.toLowerCase().includes(element[j].toLowerCase())) {
                                        const arr = catId.split(',');
                                        if (!arr.includes(tuKhoa[i]['id'])) {
                                            realCate.push(tuKhoa[i]['id']);
                                        }
                                    }
                                }
                            }
                            if (realCate.length === 0) {
                                realCate = catId.split(',');
                            }
                            const arr = [];
                            realCate.map(item => arr.push({ id: item }));
                            const check = await New.countDocuments({ new_user_id: idNTD });
                            if (check == 0) await UserCompany.updateOne({ usc_id: idNTD });
                            const new_id = await functions.getMaxId(New, 'new_id');
                            const linkAlias = functions.createLinkTilte(title);
                            const data = {
                                new_id,
                                'new_title': title,
                                'new_alias': linkAlias,
                                'new_cat_id': catId,
                                'new_city': city,
                                'new_qh_id': district,
                                'new_addr': address,
                                'new_money': money,
                                'new_cap_bac': capBac,
                                'new_exp': exp,
                                'new_bang_cap': bangCap,
                                'new_gioi_tinh': gioiTinh,
                                'new_so_luong': soLuong,
                                'new_hinh_thuc': hinhThuc,
                                'new_user_id': idNTD,
                                'new_create_time': functions.getTime(),
                                'new_update_time': functions.getTime(),
                                'new_han_nop': hanNop,
                                'new_usercontact': userContact,
                                'new_addcontact': addressContact,
                                'new_phonecontact': phoneContact,
                                'new_emailcontact': emailContact,
                                'new_hoahong': hoaHong,
                                'new_thuviec': thuViec,
                                'new_real_cate': arr,
                                'new_mota': moTa,
                                'new_yeucau': yeuCau,
                                'new_quyenloi': quyenLoi,
                                'new_ho_so': hoSo,
                                'from': 'TopCv1s.com'
                            };
                            await New.create(data);

                            // Dọn dẹp trong tình huống tin tuyển dụng mới trùng tin mới
                            await NewGhimTin.deleteMany({ new_id: new_id })
                            await NopHoSo.deleteMany({ nhs_new_id: new_id })

                            return functions.success(res, 'New post successfully', { new_id });
                        }
                        return functions.setError(res, 'This title already exists, please choose a different title', 400);
                    }
                    return functions.setError(res, 'Invalid phone number, please check again', 400);
                }
                return functions.setError(res, "Please extend the deadline", 400);
            }
            return functions.setError(res, 'Invalid email, please check again.', 400);
        }
        return functions.setError(res, 'Missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// danh sách tin NTD đã đăng
export const ListNewNTD = async(req, res) => {
    try {
        const idNTD = req.idNTD;
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;

        const project = {
            _id: 0,
            new_id: 1,
            new_title: 1,
            new_alias: 1,
            new_cat_id: 1,
            new_update_time: 1,
            new_view_count: 1,
            new_han_nop: 1,
            new_hot: 1,
            new_cao: 1,
            new_city: 1,
            user: 1,
            'soLuongNHS': "$nhs.id"
        };
        const dataPromise = New.aggregate([
            { $match: { new_user_id: idNTD, new_active: 1 } },
            { $sort: { new_update_time: -1, new_han_nop: -1, new_id: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: 'NopHoSo',
                    localField: 'new_id',
                    foreignField: 'nhs_new_id',
                    as: 'nhs'
                }
            },
            { $project: project }
        ]);

        const tongTinPromise = New.countDocuments({ new_user_id: idNTD, new_active: 1 });
        const [data, tongTin] = await Promise.all([
            dataPromise, tongTinPromise
        ]);
        const arr = [];
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            arr.push(arrPromiseUV(element.new_cat_id, element.new_city));
            element.soLuongNHS = element.soLuongNHS.length;
            element.new_update_time = new Date(element.new_update_time * 1000);
            element.new_han_nop = new Date(element.new_han_nop * 1000);
            element.link = `http://localhost:9020/${element.new_alias}-${element.new_id}`;
        }
        const dataa = await Promise.all(arr);
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.soUvTiemNang = dataa[i];
        }

        return functions.success(res, 'get data success', { total: tongTin, data });
    } catch (error) {
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

// làm mới tin NTD đã đăng
export const RefreshNew = async(req, res) => {
    try {
        const idNTD = req.idNTD;
        const idNew = Number(req.body.idNew);
        if (idNew) {
            const check = await New.findOne({ new_user_id: idNTD }, { new_time_refresh: 1, new_update_time: 1 }).sort({ new_time_refresh: -1 }).lean();

            if (check) {
                const checkExists = await New.findOne({ new_id: idNew, new_user_id: idNTD }).lean();
                if (checkExists) {
                    const time = functions.getTime();
                    // if (check.new_time_refresh + 3600 < time && check.new_update_time + 3600 < time) {
                    await New.updateMany({ new_user_id: idNTD }, { new_time_refresh: 0 });
                    await New.updateOne({ new_id: idNew }, {
                        $inc: { new_refresh: +1 },
                        new_update_time: time,
                        new_time_refresh: time
                    });
                    return functions.success(res, 'Làm mới tin thành công');
                    // }
                    // return functions.setError(res, 'Mỗi lần làm mới tin tuyển dụng của bạn phải cách nhau 60 phút, TopCv1s.com hẹn bạn sau 60 phút', 400);
                }
                return functions.setError(res, 'Không tìm thấy tin làm mới', 404);
            }
            return functions.setError(res, 'Bạn chưa đăng tin nào', 400);
        }
        return functions.setError(res, 'Không tìm thấy idNew', 404);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// sửa tin
export const UpdateNew = async(req, res) => {
    try {
        const idNTD = req.idNTD;
        const idNew = Number(req.body.idNew);
        const tuKhoa = functions.tuKhoa;
        let realCate = [];
        // vị trí đăng tuyển
        const title = req.body.title;

        // cấp bậc
        const capBac = Number(req.body.capBac);

        // ngành nghề 
        const catId = req.body.catId;

        // địa điểm làm việc
        // const city = Number(req.body.city);
        const city = req.body.city;

        // quận huyện làm việc
        // const district = Number(req.body.district);
        const district = req.body.district;

        // địa chỉ chi tiết làm việc
        const address = req.body.address;

        // hình thức làm việc
        const hinhThuc = Number(req.body.hinhThuc);

        // mức lương
        const money = Number(req.body.money);

        // số lượng cần tuyển
        const soLuong = Number(req.body.soLuong);

        // thời gian thử việc (nếu có)
        const thuViec = req.body.thuViec || '';

        // hoa hồng (nếu có)
        const hoaHong = req.body.hoaHong || '';

        // mô tả công việc
        const moTa = req.body.moTa;

        // kinh nghiệm
        const exp = Number(req.body.exp);

        // yêu cầu bằng cấp
        const bangCap = Number(req.body.bangCap);

        // giới tính
        const gioiTinh = Number(req.body.gioiTinh);

        // yêu cầu công việc
        const yeuCau = req.body.yeuCau;

        // quyền lợi được hưởng
        const quyenLoi = req.body.quyenLoi;

        // hồ sơ bao gồm
        const hoSo = req.body.hoSo;

        // hạn nộp
        let hanNop = req.body.hanNop;

        // tên người liên hệ
        const userContact = req.body.userContact;

        // địa chỉ liên hệ
        const addressContact = req.body.addressContact;

        // số điện thoại liên hệ
        const phoneContact = req.body.phoneContact;

        // email liên hệ
        const emailContact = req.body.emailContact;

        if (title && capBac && catId && city &&
            district && address && hinhThuc && money &&
            soLuong && moTa && (exp || exp === 0) && (bangCap || bangCap === 0) && (gioiTinh || gioiTinh === 0) &&
            yeuCau && quyenLoi && hoSo && hanNop &&
            userContact && addressContact && phoneContact && emailContact) {
            const date = functions.getTime();
            hanNop = functions.getTime(hanNop);
            const checkExists = await New.findOne({ new_user_id: idNTD, new_id: idNew }, { new_id: 1 }).lean();
            if (checkExists) {
                const checkEmail = await functions.checkEmail(emailContact);
                if (checkEmail) {
                    if (hanNop >= date) {
                        const checkPhone = await functions.checkPhone(phoneContact);
                        if (checkPhone) {
                            const checkTitle = await New.findOne({ new_title: title, new_id: { $ne: idNew }, new_user_id: idNTD }, { new_id: 1 }).lean();
                            if (!checkTitle) {
                                for (let i = 0; i < tuKhoa.length; i++) {
                                    const element = tuKhoa[i]['arr'].split(', ');
                                    for (let j = 0; j < element.length; j++) {
                                        if (title.toLowerCase().includes(element[j].toLowerCase())) {
                                            const arr = catId.split(',');
                                            if (!arr.includes(tuKhoa[i]['id'])) {
                                                realCate.push(tuKhoa[i]['id']);
                                            }
                                        }
                                    }
                                }
                                if (realCate.length === 0) {
                                    realCate = catId.split(',');
                                }

                                const arr = [];
                                realCate.map(item => arr.push({ id: item }));
                                const check = await New.countDocuments({ new_user_id: idNTD });
                                if (check == 0) await UserCompany.updateOne({ usc_id: idNTD });
                                const new_id = await functions.getMaxId(New, 'new_id');
                                const linkAlias = functions.createLinkTilte(title);
                                const data = {
                                    'new_title': title,
                                    'new_alias': linkAlias,
                                    'new_cat_id': catId,
                                    'new_city': city,
                                    'new_qh_id': district,
                                    'new_addr': address,
                                    'new_money': money,
                                    'new_cap_bac': capBac,
                                    'new_exp': exp,
                                    'new_bang_cap': bangCap,
                                    'new_gioi_tinh': gioiTinh,
                                    'new_so_luong': soLuong,
                                    'new_hinh_thuc': hinhThuc,
                                    'new_update_time': functions.getTime(),
                                    'new_han_nop': hanNop,
                                    'new_usercontact': userContact,
                                    'new_addcontact': addressContact,
                                    'new_phonecontact': phoneContact,
                                    'new_emailcontact': emailContact,
                                    'new_hoahong': hoaHong || '',
                                    'new_thuviec': thuViec || '',
                                    'new_real_cate': arr,
                                    'new_mota': moTa,
                                    'new_yeucau': yeuCau,
                                    'new_quyenloi': quyenLoi,
                                    'new_ho_so': hoSo
                                };
                                await New.updateOne({ new_id: idNew }, data);
                                return functions.success(res, 'Sửa tin thành công', { new_id });
                            }
                            return functions.setError(res, 'This title already exists, please choose a different title', 400);
                        }
                        return functions.setError(res, 'Invalid phone number, please check again', 400);
                    }
                    return functions.setError(res, "Please extend the deadline", 400);
                }
                return functions.setError(res, 'Invalid email, please check again.', 400);
            }
        }
        return functions.setError(res, 'Missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// xoá tin
export const DeleteNew = async(req, res) => {
    try {
        const idNew = Number(req.body.idNew);
        const idNTD = req.idNTD;
        if (idNew) {
            const checkDelete = await New.findOneAndDelete({ new_id: idNew, new_user_id: idNTD });
            if (checkDelete) {
                return functions.success(res, 'Job posting deleted successfully');
            }
            return functions.setError(res, "Jobposting not found", 404);
        }
        return functions.setError(res, 'Not found idNew', 404);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// refresh sitemap
let last_sitemap_time = 0
    // trang chủ
let data_home = {};
export const Home = async(req, res) => {
    try {
        const data = {};
        let flag = true;
        if (Object.keys(data_home).length) {
            flag = false;
            functions.success(res, 'success', { data: data_home });
        }
        const time = functions.getTime();

        const idNewHot = [];
        const idNewCao = [];
        const idCompany = []
        const HotNewGhimTin_Promise = await NewGhimTin.find({ expired: { $gt: time } })
        const UserCompany_Promise = await UserCompany.find()

        if (time - last_sitemap_time >= 86400) {
            last_sitemap_time = time
            // genSitemap()
        }

        for (let i = 0; i < HotNewGhimTin_Promise.length; i++) {
            if (HotNewGhimTin_Promise[i].new_hot === 1) {
                idNewHot.push(HotNewGhimTin_Promise[i].new_id)
            }
            if (HotNewGhimTin_Promise[i].new_cao === 1) {
                idNewCao.push(HotNewGhimTin_Promise[i].new_id)
            }
        }
        console.log('id new',idNewHot)

        for (let i = 0; i < UserCompany_Promise.length; i++) {
            idCompany.push(UserCompany_Promise[i].usc_id)
        }

        const ViecLamHapDan_Promise = await New.aggregate([{
                $match: {
                    new_active: 1,
                    new_han_nop: { $gt: time },
                    new_id: {
                        $in: idNewHot
                    },
                }
            },
            { $sort: { new_update_time: -1 } },
            // { $limit: 72 },
            { $limit: 30 },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: "new_user_id",
                    foreignField: "usc_id",
                    as: "company",
                }
            },
            { $unwind: "$company" },
            {
                $project: {
                    new_title: 1,
                    new_id: 1,
                    new_money: 1,
                    new_han_nop: 1,
                    usc_logo: '$company.usc_logo',
                    usc_id: '$company.usc_id',
                    usc_company: '$company.usc_company',
                    usc_alias: '$company.usc_alias',
                    usc_create_time: '$company.usc_create_time',
                    new_alias: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1,
                    new_quyenloi: 1,
                    new_mota:1,
                    new_yeucau:1,
                    new_exp: 1,
                    new_cat_id: 1,
                    new_ho_so:1,
                    new_addcontact:1,
                }
            }
        ]);
        const ViecLamThuongHieu_Promise = await New.aggregate([{
                $match: {
                    new_active: 1,
                    new_han_nop: { $gt: time },
                    new_id: {
                        $in: idNewCao
                    },
                }
            },
            { $sort: { new_cao: -1, new_update_time: -1 } },
            // { $limit: 72 },
            { $limit: 30 },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: "new_user_id",
                    foreignField: "usc_id",
                    as: "company",
                }
            },
            { $unwind: "$company" },
            {
                $project: {
                    new_title: 1,
                    new_id: 1,
                    new_money: 1,
                    new_han_nop: 1,
                    usc_logo: '$company.usc_logo',
                    usc_id: '$company.usc_id',
                    usc_company: '$company.usc_company',
                    usc_alias: '$company.usc_alias',
                    usc_create_time: '$company.usc_create_time',
                    new_alias: 1,
                    new_city: 1,
                    new_cao: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1,
                    new_quyenloi: 1,
                    new_mota:1,
                    new_yeucau:1,
                    new_exp: 1,
                    new_cat_id: 1,
                    new_ho_so:1,
                    new_addcontact:1
                }
            }
        ]);

        // Đẩy thêm 15 tin thường lên việc làm hấp dẫn, việc làm lương cao trên trang chủ (sắp xếp theo thời gian cập nhật)
        const TinThuongHapDan_Promise = New.aggregate([{
                $match: {
                    new_active: 1,
                    new_han_nop: { $gt: time },
                    new_user_id: {
                        $in: idCompany
                    },
                    new_id: {
                        $nin: [...idNewHot, ...idNewCao]
                    },
                }
            },
            { $sort: { new_update_time: -1 } },
            { $limit: ViecLamHapDan_Promise.length < 30 ? 30 - ViecLamHapDan_Promise.length : 1 },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: "new_user_id",
                    foreignField: "usc_id",
                    as: "company",
                }
            },
            { $unwind: "$company" },
            {
                $addFields: {
                    tinthuong: true
                }
            },
            {
                $project: {
                    new_title: 1,
                    new_id: 1,
                    new_money: 1,
                    new_han_nop: 1,
                    usc_logo: '$company.usc_logo',
                    usc_id: '$company.usc_id',
                    usc_company: '$company.usc_company',
                    usc_alias: '$company.usc_alias',
                    usc_create_time: '$company.usc_create_time',
                    new_alias: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1,
                    tinthuong: true,
                    new_quyenloi: 1,
                    new_mota:1,
                    new_yeucau:1,
                    new_exp: 1,
                    new_cat_id: 1,
                    new_ho_so:1,
                    new_addcontact:1,
                }
            }
        ])
        const TinThuongThuongHieu_Promise = New.aggregate([{
                $match: {
                    new_active: 1,
                    new_han_nop: { $gt: time },
                    new_user_id: {
                        $in: idCompany
                    },
                    new_id: {
                        $nin: [...idNewHot, ...idNewCao]
                    },
                }
            },
            { $sort: { new_update_time: -1 } },
            { $limit: ViecLamThuongHieu_Promise.length < 30 ? 30 - ViecLamThuongHieu_Promise.length : 1 },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: "new_user_id",
                    foreignField: "usc_id",
                    as: "company",
                }
            },
            { $unwind: "$company" },
            {
                $addFields: {
                    tinthuong: true
                }
            },
            {
                $project: {
                    new_title: 1,
                    new_id: 1,
                    new_money: 1,
                    new_han_nop: 1,
                    usc_logo: '$company.usc_logo',
                    usc_id: '$company.usc_id',
                    usc_company: '$company.usc_company',
                    usc_alias: '$company.usc_alias',
                    usc_create_time: '$company.usc_create_time',
                    new_alias: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1,
                    tinthuong: true,
                    usc_address: '$company.usc_address',
                    new_quyenloi: 1,
                    new_mota:1,
                    new_yeucau:1,
                    new_exp: 1,
                    new_cat_id: 1,
                    new_ho_so:1,
                    new_addcontact:1
                }
            }
        ])
        const CongTyHangDau_Promise = await New.aggregate([
            {
                $group: {
                    _id: '$new_user_id',
                    totalPosts: { $sum: 1 }
                }
            },
            {
                $lookup: {
                    from: 'UserCompany',
                    localField: '_id',
                    foreignField: "usc_id",
                    as: 'companyInfo'
                }
            },
            {
                $unwind:  '$companyInfo'
            },
            {
                $project: {
                    usc_id: '$companyInfo.usc_id',
                    usc_company: '$companyInfo.usc_company',
                    usc_alias: '$companyInfo.usc_alias',
                    usc_logo: '$companyInfo.usc_logo',
                    usc_create_time: '$companyInfo.usc_create_time',
                    usc_city: '$companyInfo.usc_city',
                    totalPosts: '$totalPosts'
                }
            },
            {
                $sort: { totalPosts: -1 }
            },
            {
                $limit: 10
            }
        ]);

        const com_promise = UserCompany.distinct("usc_id")

        const [
            ViecLamHapDan,
            TinThuongHapDan,
            ViecLamThuongHieu,
            TinThuongThuongHieu,
            CongTyHangDau,
            Cityy,
            com
        ] =
        await Promise.all([
            ViecLamHapDan_Promise,
            TinThuongHapDan_Promise,
            ViecLamThuongHieu_Promise,
            TinThuongThuongHieu_Promise,
            CongTyHangDau_Promise,
            City.find({}, { cit_id: 1, cit_name: 1 }).lean(),
            com_promise,
        ]);

        //check lưu tin và ứng tuyển
        const iduser = await functions.getTokenJustUser(req, res);
        console.log(iduser)
        if (iduser) {
            const processArray = async (arr) => {
                const arrPromiseLuuTin = [];
                const arrPromiseNopHoSo = [];
        
                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];
                    arrPromiseNopHoSo.push(promiseNopHoSo(iduser, element.new_id));
                    arrPromiseLuuTin.push(promiseTblLuuTin(iduser, element.new_id));
                }
        
                const arrNopHoSo = await Promise.all(arrPromiseNopHoSo);
                const arrLuutin = await Promise.all(arrPromiseLuuTin);
        
                for (let i = 0; i < arr.length; i++) {
                    arr[i].checkUngTuyen = arrNopHoSo[i] ? true : false;
                    arr[i].checkLuuTin = arrLuutin[i] ? true : false;
                }
            };

            await processArray(TinThuongHapDan);
            await processArray(ViecLamHapDan);
            await processArray(ViecLamThuongHieu);
            await processArray(TinThuongThuongHieu);
        }

        const leng_hapDan = ViecLamHapDan.length;
        console.log('so viec hap dan:',leng_hapDan)
        for (let i = 0; i < leng_hapDan; i++) {
            const element = ViecLamHapDan[i];
            element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);

            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;

        }

        const leng_thuongHieu = ViecLamThuongHieu.length;
        for (let i = 0; i < leng_thuongHieu; i++) {
            const element = ViecLamThuongHieu[i];
            element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);
            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;
        }

        const leng_tinthuonghapdan = TinThuongHapDan.length;
        for (let i = 0; i < leng_tinthuonghapdan; i++) {
            const element = TinThuongHapDan[i];
            element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);

            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;

        }

        const leng_tinthuongthuonghieu = TinThuongThuongHieu.length;
        for (let i = 0; i < leng_tinthuongthuonghieu; i++) {
            const element = TinThuongThuongHieu[i];
            element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);
            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;
        }

        const leng_congTyHangDau = CongTyHangDau.length;
        for (let i = 0; i < leng_congTyHangDau; i++) {
            const element = CongTyHangDau[i];
            element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);
        }
        let nganhNgheNoiBat = []
        const arr = ['47', '35', '1', '30', '40', '3', '33', '45'];
        const arrHotCate = [
            { _id: '47', name: 'Services', alias: 'services' },
            { _id: '35', name: 'IT Software', alias: 'it-software' },
            { _id: '1', name: 'Accounting', alias: 'accounting' },
            { _id: '30', name: 'Marketing', alias: 'marketing' },
            { _id: '40', name: 'Real Estate', alias: 'real-estate' },
            { _id: '3', name: 'Administration HR', alias: 'administration-hr' },
            { _id: '33', name: 'Insurance', alias: 'insurance' },
            { _id: '45', name: 'Sales', alias: 'sales' }
        ];
        const JobNumber = await Promise.all(
            arr.map(item => (
                // New.countDocuments({ new_cat_id: { $regex: item, $options: 'i' }, new_active: 1, new_han_nop: { $gt: new Date().getTime() / 1000 } })
                New.countDocuments({ new_cat_id: new RegExp(`(^|,)${item}(,|$)`), new_active: 1, new_han_nop: { $gt: new Date().getTime() / 1000 }, new_user_id: { $in: com } })
            ))
        );

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            const hotCateItem = arrHotCate.find(cate => cate._id === element);
        
            if (hotCateItem) {
                nganhNgheNoiBat.push({
                    _id: hotCateItem._id,
                    count: JobNumber[i],
                    name: hotCateItem.name,
                    alias: hotCateItem.alias
                });
            }
        }

        console.log('so viec moi nhat:', ViecLamThuongHieu, TinThuongThuongHieu);

        data.ViecLamHapDan = ViecLamHapDan.length < 30 ? [...ViecLamHapDan, ...TinThuongHapDan] : [...ViecLamHapDan];
        data.Attractive_Job = ViecLamHapDan.length < 0 ? [...ViecLamHapDan, ...TinThuongHapDan] : [...ViecLamHapDan];
        data.New_Job = ViecLamThuongHieu.length < 30 ? [...ViecLamThuongHieu, ...TinThuongThuongHieu] : [...ViecLamThuongHieu];
        data.ViecLamThuongHieu = ViecLamThuongHieu.length < 30 ? [...ViecLamThuongHieu, ...TinThuongThuongHieu] : [...ViecLamThuongHieu];
        data.TinThuongHapDan = TinThuongHapDan;
        data.TinThuongThuongHieu = TinThuongThuongHieu;
        data.TopCompany = CongTyHangDau;
        // data.ViecLamTuyenGap = ViecLamTuyenGap;
        data.JobNumber = JobNumber;
        data.Outstanding_Category = nganhNgheNoiBat;
        data_home = data;
        if (flag) {
            functions.success(res, 'success', { data });
        }
        return true;
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// !chi tiết tin tuyển dụng (Thiếu chuyển dọng nói)
export const DetailNew = async(req, res) => {
    try {
        const iduser = await functions.getTokenJustUser(req, res);
        const id = Number(req.body.id);
        const currentTime = Math.floor(Date.now() / 1000);
        const item = {
            usc_company: "$company.usc_company",
            usc_website: "$company.usc_website",
            usc_address: "$company.usc_address",
            usc_logo: "$company.usc_logo",
            usc_id: "$company.usc_id",
            usc_alias: "$company.usc_alias",
            usc_size: "$company.usc_size",
            usc_create_time: "$company.usc_create_time",
            usc_name: "$company.usc_name",
            usc_name_add: "$company.usc_name_add",
            usc_email: "$company.usc_email",
            usc_phone: "$company.usc_phone",
            usc_name_email: "$company.usc_name_email",
            usc_name_phone: "$company.usc_name_phone",
            new_cat_id: 1,
            new_title: 1,
            new_id: 1,
            new_han_nop: 1,
            new_update_time: 1,
            new_view_count: 1,
            new_yeucau: 1,
            new_quyenloi: 1,
            new_ho_so: 1,
            new_usercontact: 1,
            new_addcontact: 1,
            new_thuviec: 1,
            new_hoahong: 1,
            new_city: 1,
            new_mota: 1,
            new_qh_id: 1,
            new_cap_bac: 1,
            new_hinh_thuc: 1,
            new_gioi_tinh: 1,
            new_exp: 1,
            new_bang_cap: 1,
            new_money: 1,
            new_so_luong: 1,
            new_addr: 1,
            new_real_cate: 1,
            new_money_type: 1,
            new_money_from: 1,
            new_money_to: 1,
            new_phonecontact: 1,
            new_emailcontact: 1,
        };
        if (id) {
            const data_Promise = New.aggregate([
                { $match: { new_id: id } },
                {
                    $lookup: {
                        from: "UserCompany",
                        localField: "new_user_id",
                        foreignField: "usc_id",
                        as: "company",
                    }
                },
                { $unwind: "$company" },
                { $project: item }
            ]);
            const cate_Promise = Category.find({}, { cat_id: 1, cat_name: 1, cat_tags: 1, cat_count: 1, cat_count_vl: 1, cat_ut: 1 }).lean();

            const [dataNew, cate, Cityy] = await Promise.all([
                data_Promise, cate_Promise, City.find({}, { cit_id: 1, cit_name: 1 }).lean()

            ]);
            const data = dataNew[0];
            if (data) {
                const arrCity = data.new_city.split(',');

                const conditions = { new_city: { $in: arrCity }, new_active: 1, new_id: { $ne: id } };

                if (data.new_real_cate.length > 0) {
                    const arrConditionsRealCate = getConditionsRealCate(data.new_real_cate);
                    conditions['$or'] = arrConditionsRealCate;
                }

                let cateName = '';
                const arrNganhNghe = [];
                const arrCate = data.new_cat_id.split(',');
                for (let i = 0; i < arrCate.length; i++) {
                    const element = arrCate[i];
                    if (i == 0) {
                        const result = cate.find(item => item.cat_id == element);
                        if (result) cateName = result.cat_name;
                    }
                    arrNganhNghe.push(cate.find(item => item.cat_id == element));
                    // console.log('element', element, 'cate', cate.find(item => item.cat_id == element));
                }

                // const name_tag = await 
                const name_tag = await Promise.all(
                    data.new_tag.split(',').map(
                        (item) => {
                            if (item && item != 'NaN')
                                return TblTagsNew.findOne({ tag_parent: 3, tag_id: item }, { tag_id: 1, tag_name: 1 }).lean()
                        }
                    )
                );
                const nameCity = data.new_city.split(',');
                const cityArr = [];
                if (nameCity.length > 0) nameCity.map((itemm) => {
                    const city = Cityy.find((item) => (item.cit_id == itemm));
                    if (city) cityArr.push(city.cit_name);
                });
                data.new_city_id = data.new_city
                data.new_city = cityArr;


                const checkApply_Promise = NopHoSo.findOne({ nhs_new_id: id, nhs_use_id: iduser });
                const viecLamTuongTu_Promise = New.aggregate([
                    { 
                        $match: {
                            ...conditions,
                            new_han_nop: { $gt: currentTime } // Lọc ra những bản ghi có new_han_nop lớn hơn thời gian hiện tại
                        }
                    },
                    { $limit: 3 },
                    {
                        $lookup: {
                            from: "UserCompany",
                            localField: "new_user_id",
                            foreignField: "usc_id",
                            as: "company",
                        }
                    },
                    { $unwind: "$company" },
                    { $project: item }
                ]);
                const checkSaveNew_Promise = TblLuuTin.findOne({ id_tin: id, id_uv: iduser });
                const [checkApply,
                    viecLamTuongTu,
                    checkSaveNew,
                ] = await Promise.all([
                    checkApply_Promise,
                    viecLamTuongTu_Promise,
                    checkSaveNew_Promise,
                ]);
                const leng_viecLamTuongTu = viecLamTuongTu.length;
                for (let i = 0; i < leng_viecLamTuongTu; i++) {
                    const element = viecLamTuongTu[i];
                    element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);
                }
                data.apply = checkApply ? true : false;
                data.SaveNew = checkSaveNew ? true : false;
                // data.new_cat_id = cateName;
                data.usc_logo = functions.getAvatarNTD(data.usc_create_time, data.usc_logo);
                data.arrNganhNghe = arrNganhNghe;
                data.cateName = cateName;
                data.viecLamTuongTu = viecLamTuongTu;
                data.chiTietCongViec = name_tag.length > 0 ? name_tag.map(item => item ?.tag_name) : []
                data.chiTietCongViec.push(cateName)
                return functions.success(res, 'success', { data });
            }
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, 'Missing data', 404);
    } catch (error) {
        console.log(error);
        return functions.setError(res, error.message);
    }
};

// hàm tạo truy vấn tìm từ khoá liên quan
const getConditionsRealCate = (arr) => {
    const obj = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        obj.push({ 'new_real_cate.id': element.id });
    }
    return obj;
};

// tìm kiếm tin tuyển dụng
export const SearchNew = async(req, res) => {
    try {
        let arrIDSearchByAI = [];
        let data = [];
        let total = 0;
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const hinhThuc = Number(req.body.fomati);
        const hocVan = Number(req.body.edu);
        const capBac = Number(req.body.capBac);
        const kinhNghiem = Number(req.body.exp);
        const district = req.body.district;
        const gioiTinh = req.body.gioiTinh;
        const mucLuong = Number(req.body.salary);
        const diaDiem = req.body.address;
        const nganhNghe = req.body.nameWork;
        const keywords = req.body.keywords;
        const tag_id = req.body.tag_id;
        const sortField = req.body.sortField || 'new_han_nop';
        const sortOrder = req.body.sortOrder === 'desc' ? 1 : -1;
        const item = {
            new_id: 1,
            usc_id: "$company.usc_id",
            new_money: 1,
            new_city: 1,
            new_cap_bac: 1,
            new_create_time: 1,
            usc_create_time: "$company.usc_create_time",
            usc_phone: "$company.usc_name_phone",
            usc_mail: "$company.usc_email",
            usc_logo: "$company.usc_logo",
            usc_company: "$company.usc_company",
            new_title: 1,
            usc_alias: "$company.usc_alias",
            address: "$company.usc_address",
            new_han_nop: 1,
            new_alias: 1,
            new_money_type: 1,
            new_money_from: 1,
            new_money_to: 1,
            new_update_time: 1,
            new_addr: 1,
            new_qh_id: 1,
            new_usercontact: 1,
            new_addcontact: 1,
            new_phonecontact: 1,
            new_emailcontact: 1,
            new_mota: 1,
        };

        const conditions = {};
        const conditions_ai={};
        if (arrIDSearchByAI.length > 0) {
            const arr = arrIDSearchByAI.map(item => Number(item));
            conditions.new_id = { $in: arr };
            data = await New.aggregate([
                { $match: conditions },
                {
                    $lookup: {
                        from: "UserCompany",
                        localField: "new_user_id",
                        foreignField: "usc_id",
                        as: "company",
                    }
                },
                { $unwind: "$company" },
                { $project: item }
            ]);
        } else {
            const com = await UserCompany.distinct("usc_id", {
                $and: [{
                        usc_phone_tk: { $ne: "" }
                    },
                    {
                        usc_phone_tk: { $ne: null }
                    },
                    {
                        usc_company: { $ne: "" }
                    },
                    {
                        usc_company: { $ne: null }
                    },

                ]
            })
            conditions.new_user_id = { $in: com }
            if (hinhThuc) conditions.new_hinh_thuc = hinhThuc;
            if (hocVan) conditions.new_bang_cap = hocVan;
            if (capBac) conditions.new_cap_bac = capBac;
            if (kinhNghiem) conditions.new_exp = kinhNghiem;
            if (district) conditions['$or'] = [
                { usc_city: new RegExp(`(^|,)${diaDiem}(,|$)`) },
                { usc_district: district },
                { new_qh_id: new RegExp(`(^|,)${district}(,|$)`) }
            ];
            if (diaDiem) {
                const cityData = await City.findOne({ cit_id: diaDiem });
                console.log('123')
                console.log(cityData)
                const cityName = cityData ? cityData.cit_name : '';
                conditions_ai['$or'] = [
                    { $expr: { $eq: [{ $trim: { input: "$new_city" } }, cityName.trim()] } },
                    { $expr: { $eq: [{ $trim: { input: "$new_qh_id" } }, cityName.trim()] } }
                ];
            }
            if (gioiTinh) conditions.new_gioi_tinh = gioiTinh;
            if (mucLuong) conditions.new_money = mucLuong;
            if (tag_id) {
                conditions.$or = [];    
                conditions.$or.push({ new_tag: tag_id });
                const key = keySearch(keywords);
                const regex = new RegExp(functions.allVietnameseRegex(key), 'i');
                conditions.$or.push({ new_title: regex });
                conditions_ai.$or = [];    
                conditions_ai.$or.push({ new_tag: tag_id });
                conditions_ai.$or.push({ new_title: regex });

            }
            if (keywords && !tag_id) {
                const key = keySearch(keywords);
                conditions.new_title = new RegExp(functions.allVietnameseRegex(key), 'i');
                conditions_ai.new_title = new RegExp(functions.allVietnameseRegex(key), 'i');
            }
            if (nganhNghe) {
                conditions.new_cat_id = new RegExp(`(^|,)${nganhNghe}(,|$)`);
                conditions_ai.new_cate_id = new RegExp(`(^|,)${nganhNghe}(,|$)`);
            }
            if (diaDiem) conditions.new_city = new RegExp(`(^|,)${diaDiem}(,|$)`);
            conditions.new_active = 1;
            conditions.new_han_nop = { $gt: new Date().getTime() / 1000 }
            data = await New.aggregate([
                { $match: conditions },
                { $sort: { [sortField]: sortOrder } },
                // { $sort: { new_update_time: -1 } },
                { $skip: skip },
                { $limit: limit },
                {
                    $lookup: {
                        from: "UserCompany",
                        localField: "new_user_id",
                        foreignField: "usc_id",
                        as: "company",
                    }
                },
                { $unwind: { path: "$company", preserveNullAndEmptyArrays: true } },
                { $project: item }
            ]);
            console.log(conditions_ai)
            const totalTinThuong = await New.countDocuments(conditions);

            total = totalTinThuong ;

        }
        const iduser = await functions.getTokenJustUser(req, res);
        const arrPromiseLuuTin = []
        const arrPromiseNopHoSo = []

        const leng_data = data.length;
        for (let i = 0; i < leng_data; i++) {
            const element = data[i];
            element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);
            // const cityFind = city.find(item => item.cit_id == element.new_city);
            // if (cityFind) element.new_city = cityFind.cit_name
            if (iduser) {
                arrPromiseLuuTin.push(promiseTblLuuTin(iduser, element.new_id))
                arrPromiseNopHoSo.push(promiseNopHoSo(iduser, element.new_id))
            }
        }

        if (iduser) {
            const arrLuuTin = await Promise.all(arrPromiseLuuTin)
            const arrNopHoSo = await Promise.all(arrPromiseNopHoSo)
            for (let i = 0; i < leng_data; i++) {
                const element = arrLuuTin[i];
                const element2 = arrNopHoSo[i];
                if (element) {
                    data[i].checkLuuTin = true
                } else {
                    data[i].checkLuuTin = false
                }
                if (element2) {
                    data[i].checkUngTuyen = true
                } else {
                    data[i].checkUngTuyen = false
                }
            }
        }
        return functions.success(res, 'success', { total, data});
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// hàm ren keysearch 
const keySearch = (keySearch) => {
    let result = keySearch.replaceAll(' - ', '');
    result = result.replaceAll('-', '');
    result = result.trim();
    const arr_l = ['Tìm', 'tìm', 'tim', 'Việc', 'việc', 'làm', 'Làm', 'viec', 'làm', 'lam'];
    const arr_r = ['', '', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < arr_l.length; i++) {
        result = result.replace(arr_l[i], arr_r[i]);
    }
    return result;
};

// promise call tblLuuTin
const promiseTblLuuTin = (iduser, new_id) => {
    const query = TblLuuTin.findOne({ id_uv: iduser, id_tin: new_id }, { id: 1 }).lean();
    return query;
}

// promise call NopHoSo
const promiseNopHoSo = (iduser, new_id) => {
    const query = NopHoSo.findOne({ nhs_use_id: iduser, nhs_new_id: new_id, type: 1 }, { id: 1 }).lean();
    return query;
}

// tìm kiếm ứng viên
export const SearchCandi = async(req, res) => {
    try {
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const catid = req.body.catid; // ngành nghề
        const city = req.body.city; // tỉnh thành
        const district = req.body.district;
        const hinhThuc = Number(req.body.hinhThuc);
        const capBac = Number(req.body.capBac);
        const kinhNghiem = Number(req.body.kinhNghiem);
        const gioiTinh = Number(req.body.gioiTinh);
        const mucLuong = Number(req.body.mucLuong);
        const keywords = req.body.keywords;
        const conditionsAI = {
            site: "uvTopcv1s",
            size: pageSize,
            pagination: page
        };
        let conditions = {
            usc_search: 1,
        };

        if (city) {
            conditionsAI.cv_city_id = Number(city);
            conditions['use_city_job.id'] = city;
        }
        if (catid) {
            conditions['use_nganh_nghe.id'] = catid;
            conditionsAI.cv_cate_id = Number(catid);
        }
        if (keywords) {
            const key = keySearch(keywords);
            conditionsAI.keyword = key;
            const userIdCv = await SaveCandidateCv.distinct('iduser', {
                html: new RegExp(key, 'i')
            })
            // console.log(userIdCv)
            conditions['$or'] = [
                { use_job_name: new RegExp(functions.allVietnameseRegex(key), 'i') },
                { use_name: new RegExp(functions.allVietnameseRegex(key), 'i') },
                { use_id: { $in: userIdCv } }
            ]
        }
        if (hinhThuc) conditionsAI.cv_loaihinh_id = hinhThuc;
        if (capBac) conditionsAI.cv_capbac_id = capBac;
        if (kinhNghiem || kinhNghiem === 0) conditions.exp_years = kinhNghiem;
        if (gioiTinh) conditions.gender = gioiTinh;
        if (district) {
            // conditions.use_district = district
            conditions['use_district_job.id'] = Number(district)
        };
        if (mucLuong) conditions.salary = mucLuong;

        let totalAI = 0;
        // if (resultAI && resultAI.data && resultAI.data.result == true) {
        //     arrIdByAI = resultAI.data.list_id.split(',').map(item => Number(item));
        //     totalAI = resultAI.data.total;
        // }

        // if (arrIdByAI.length > 0) {
        //     conditions = {};
        //     conditions.use_id = { $in: arrIdByAI };
        // }
        const usersWithCvUpload = await UserCvUpload.distinct('use_id');
        const usersWithSaveCandiCv = await SaveCandidateCv.distinct('iduser');
        const usersWithCv = [...new Set([...usersWithCvUpload, ...usersWithSaveCandiCv])];
        conditions.use_id = { $in: usersWithCv };
        const data_promise = Users.find({
            usc_search: 1,
            ...conditions
        }, {
            use_create_time: 1,
            gender: 1,
            use_job_name: 1,
            use_name: 1,
            salary: 1,
            use_district_job: 1,
            use_update_time: 1,
            use_id: 1,
            use_logo: 1,
            address: 1,
            use_city: 1,
            use_city_job: 1,
            exp_years: 1
        }).sort({ use_update_time: -1, use_id: -1 }).skip(skip).limit(limit).lean();
        const total_promise = Users.countDocuments({
            usc_search: 1,
            ...conditions
        });
        const ungVienTheoNganhNghe_promise = Category.find({}, { cat_name: 1, cat_count: 1, _id: 0 }).lean();
        const ungVienTheoTinhThanh_promise = City.find({}, { cit_name: 1, cit_count: 1, _id: 0 }).lean();
        const [data, total_thuong, ungVienTheoNganhNghe, ungVienTheoTinhThanh, Cityy] = await Promise.all([
            data_promise,
            total_promise,
            ungVienTheoNganhNghe_promise,
            ungVienTheoTinhThanh_promise,
            City.find({}, { cit_id: 1, cit_name: 1 }).lean()

        ]);
        const iduser = await functions.getTokenUser(req, res);

        const dataSeo = {};

        let showNew = 0;

        if (catid && !city) {
            const catName = await Category.findOne({ cate_id: catid }, { cat_name: 1 }).lean();
            const name = catName ? catName.cat_name : "Ứng viên";
            dataSeo.title = `Hồ sơ ứng viên ${name} mới nhất năm ${new Date().getFullYear()}`;
            dataSeo.description = `Hồ sơ ứng viên ${name} mới nhất hot nhất ${new Date().getFullYear()}. Hàng ngàn hồ sơ của ứng viên hấp dẫn phù hợp với nhà tuyển dụng.`;
            dataSeo.h1 = `Hồ sơ ứng viên ${name} mới nhất`;
            dataSeo.index = `index, follow`;
            dataSeo.textBreak = `Ứng viên ${name}`;
            dataSeo.breakCrumb = `<div class="breakcrumb">
            <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/ung-vien-tim-viec">Ứng viên</a></li>
                <li class="active"><span>Ứng viên ' . $catname . '</span></li>
            </ul>
        </div>`;
        } else if (!catid && city) {
            const cityName = await City.findOne({ cit_id: city }).lean();
            const name = cityName ? cityName.cit_name : '';
            dataSeo.title = `Hồ sơ ứng viên tại ${name} mới nhất tháng ${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
            dataSeo.description = `Hồ sơ ứng viên mới nhất hot nhất ${new Date().getFullYear()} tại ${name}. Hàng ngàn hồ sơ của ứng viên hấp dẫn phù hợp với nhà tuyển dụng.`;
            dataSeo.h1 = `Hồ sơ ứng viên tại ${name} mới nhất`;
            dataSeo.index = `index, follow`;
            dataSeo.breakCrumb = `<div class="breakcrumb">
            <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/ung-vien-tim-viec">Ứng viên</a></li>
                <li class="active"><span>Ứng viên ' . $citname . '</span></li>
            </ul>
        </div>`;
        } else if (catid && city) {
            const cityName = await City.findOne({ cit_id: city }).lean();
            const catName = await Category.findOne({ cate_id: catid }, { cat_name: 1 }).lean();
            const nameCat = catName ? catName.cat_name : "Ứng viên";
            const nameCity = cityName ? cityName.cit_name : '';

            dataSeo.title = `Hồ sơ ứng viên ${nameCat} tại ${nameCity} mới nhất năm ${new Date().getFullYear()}`;
            dataSeo.description = `Hồ sơ ứng viên ${nameCat} mới nhất hot nhất ${new Date().getFullYear()} tại ${nameCity}. Hàng ngàn hồ sơ của ứng viên hấp dẫn phù hợp với nhà tuyển dụng.`;
            dataSeo.h1 = `Hồ sơ ứng viên ${nameCat} tại ${nameCity} mới nhất năm ${new Date().getFullYear()}`;
            dataSeo.index = "noodp,noindex,nofollow";
            dataSeo.textBreak = `Ứng viên ${nameCat}`;
            dataSeo.breakCrumb = `<div class="breakcrumb">
            <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/ung-vien-tim-viec">Ứng viên</a></li>
                <li class="active"><span>Ứng viên ' . strtolower($catname) . ' tại ' . $citname . '</span></li>
            </ul>
        </div>`;
        }

        const leng_data = data.length;
        const arrPromise = [];
        const arrPromise2 = [];

        for (let i = 0; i < leng_data; i++) {
            const element = data[i];
            if (iduser) {
                arrPromise2.push(promiseTblLuuHoSo(iduser, element.use_id));
            }
            element.use_logo = functions.getAvatarCandi(element.use_create_time, element.use_logo);
            const nameCity = element.use_city_job;
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm.id));
                if (city) cityArr.push(city.cit_name);
            })
            element.use_city_job = cityArr;
        }

        if (arrPromise.length > 0) {
            const dataPointUsed = await Promise.all([...arrPromise, ...arrPromise2]);
            for (let i = 0; i < leng_data; i++) {
                const element = dataPointUsed[i];
                if (element && element.type == 0) {
                    data[i].checkUsedPoint = `Đã xem`;
                } else if (element && element.type != 0) {
                    data[i].checkUsedPoint = `Đã mở`;
                } else {
                    data[i].checkUsedPoint = false;
                }
                const element2 = dataPointUsed[i + leng_data];
                data[i].checkSave = element2 ? true : false;
            }
        }
        const total = totalAI > 0 ? totalAI : total_thuong;
        return functions.success(res, 'success', { total, data, dataSeo, showNew, ungVienTheoNganhNghe, ungVienTheoTinhThanh });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// promise call tbl_luuhoso_uv 
const promiseTblLuuHoSo = (iduser, use_id) => {
    const query = TblLuuHoSoUv.findOne({ id_uv: use_id, id_ntd: iduser }, { id_uv: 1 }).lean();
    return query;
};

export const getTagCate = async (req, res) => {
    try {
        const { id } = req.body;
        const { alias } = req.body;
        let data = [];
        if (id) {
            data = await TblTagsNew.find({ tag_type: id }, { tag_id: 1, tag_name: 1, tag_alias: 1, tag_parent: 1 }).lean();
        } else if (alias) {
            data = await TblTagsNew.find({ tag_alias: alias }, { tag_id: 1, tag_name: 1, tag_alias: 1, tag_parent: 1 }).lean();
        } else {
            data = await TblTagsNew.find({}, { tag_id: 1, tag_name: 1, tag_type: 1, tag_alias: 1, tag_parent: 1 }).lean();
        }
        return functions.success(res, 'success', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

export const detailJob_Comp = async(req, res) => {
    try {
        const { alias } = req.body
        const currentTime = Math.floor(Date.now() / 1000);
        let type = 0

        // Ưu tiên theo thứ tự này 

        if (alias && typeof alias === 'string') {
            // Cố lấy id 
            const strId = alias.split('-').filter(part => !!(part.trim())).pop()
            if (!isNaN(Number(strId))) {
                const id = Number(strId)
                const checkExistNew = await New.findOne({ new_id: id });
                if (checkExistNew) {
                    type = 1

                    const data = checkExistNew._doc

                    const iduser = await functions.getTokenJustUser(req, res);

                    const arrCity = data.new_city.split(',');
                    const new_cat_id = data.new_cat_id
                    console.log('tinh thanh',arrCity)
                    const conditions = { new_city: { $in: arrCity },new_cat_id:new_cat_id, new_active: 1, new_id: { $ne: id } };
                    // if (data.new_real_cate.length > 0) {
                    //     const arrConditionsRealCate = getConditionsRealCate(data.new_real_cate);
                    //     conditions['$or'] = arrConditionsRealCate;
                    // }

                    console.log('conditions:',conditions)

                    const item = {
                        usc_company: "$company.usc_company",
                        usc_website: "$company.usc_website",
                        usc_address: "$company.usc_address",
                        usc_logo: "$company.usc_logo",
                        usc_id: "$company.usc_id",
                        usc_alias: "$company.usc_alias",
                        usc_size: "$company.usc_size",
                        usc_create_time: "$company.usc_create_time",
                        usc_name: "$company.usc_name",
                        usc_name_add: "$company.usc_name_add",
                        usc_email: "$company.usc_email",
                        usc_phone: "$company.usc_phone",
                        usc_name_email: "$company.usc_name_email",
                        usc_name_phone: "$company.usc_name_phone",
                        new_cat_id: 1,
                        new_title: 1,
                        new_id: 1,
                        new_han_nop: 1,
                        new_update_time: 1,
                        new_view_count: 1,
                        new_yeucau: 1,
                        new_quyenloi: 1,
                        new_ho_so: 1,
                        new_usercontact: 1,
                        new_addcontact: 1,
                        new_thuviec: 1,
                        new_hoahong: 1,
                        new_city: 1,
                        new_mota: 1,
                        new_qh_id: 1,
                        new_cap_bac: 1,
                        new_hinh_thuc: 1,
                        new_gioi_tinh: 1,
                        new_exp: 1,
                        new_bang_cap: 1,
                        new_money: 1,
                        new_so_luong: 1,
                        new_addr: 1,
                        new_real_cate: 1,
                        new_money_type: 1,
                        new_money_from: 1,
                        new_money_to: 1,
                        new_phonecontact: 1,
                        new_emailcontact: 1,
                        new_alias: 1,
                    };

                    const name_tag = await Promise.all(
                        data.new_tag.split(',').map(
                            (item) => {
                                if (item && item != 'NaN')
                                    return TblTagsNew.findOne({ tag_parent: 3, tag_id: item }, { tag_id: 1, tag_name: 1 }).lean()
                            }
                        )
                    );
                    data.chiTietCongViec = name_tag.length > 0 ? name_tag.map(item => item ?.tag_name) : []

                    const com_promise = UserCompany.findOne({ usc_id: data.new_user_id })
                    const cate_Promise = Category.find({}, { cat_id: 1, cat_name: 1, cat_tags: 1, cat_count: 1, cat_count_vl: 1, cat_ut: 1 }).lean();
                    const checkSaveNew_Promise = TblLuuTin.findOne({ id_tin: id, id_uv: iduser });
                    const checkApply_Promise = NopHoSo.findOne({ nhs_new_id: id, nhs_use_id: iduser });
                    const viecLamTuongTu_Promise = New.aggregate([
                        { 
                            $match: {
                                ...conditions,
                                new_han_nop: { $gt: currentTime } // Lọc ra những bản ghi có new_han_nop lớn hơn thời gian hiện tại
                            }
                        },
                        { $limit: 3 },
                        {
                            $lookup: {
                                from: "UserCompany",
                                localField: "new_user_id",
                                foreignField: "usc_id",
                                as: "company",
                            }
                        },
                        { $unwind: "$company" },
                        { $project: item }
                    ]);

                    const [
                        com,
                        cate,
                        Cityy,
                        checkSaveNew,
                        checkApply,
                        viecLamTuongTu,
                    ] = await Promise.all([
                        com_promise,
                        cate_Promise,
                        City.find({}, { cit_id: 1, cit_name: 1 }).lean(),
                        checkSaveNew_Promise,
                        checkApply_Promise,
                        viecLamTuongTu_Promise,
                    ])

                    data.usc_company = com ?.usc_company
                    data.usc_website = com ?.usc_website
                    data.usc_address = com ?.usc_address
                    data.usc_logo = functions.getAvatarNTD(com ?.usc_create_time, com ?.usc_logo);
                    data.usc_id = com ?.usc_id
                    data.usc_alias = com ?.usc_alias
                    data.usc_size = com ?.usc_size
                    data.usc_create_time = com ?.usc_create_time
                    data.usc_name = com ?.usc_name
                    data.usc_name_add = com ?.usc_name_add
                    data.usc_email = com ?.usc_email
                    data.usc_phone = com ?.usc_phone
                    data.usc_name_email = com ?.usc_name_email
                    data.usc_name_phone = com ?.usc_name_phone
                        // console.log('data after', data);

                    let cateName = '';
                    const arrNganhNghe = [];
                    const arrCate = data.new_cat_id.split(',');
                    for (let i = 0; i < arrCate.length; i++) {
                        const element = arrCate[i];
                        if (i == 0) {
                            const result = cate.find(item => item.cat_id == element);
                            if (result) cateName = result.cat_name;
                        }
                        arrNganhNghe.push(cate.find(item => item.cat_id == element));
                        // console.log('element', element, 'cate', cate.find(item => item.cat_id == element));
                    }
                    data.arrNganhNghe = arrNganhNghe;
                    data.cateName = cateName;
                    data.chiTietCongViec.push(cateName)

                    const nameCity = data.new_city.split(',');
                    const cityArr = [];
                    if (nameCity.length > 0) nameCity.map((itemm) => {
                        const city = Cityy.find((item) => (item.cit_id == itemm));
                        if (city) cityArr.push(city.cit_name);
                    });
                    data.new_city_id = data.new_city
                    data.new_city = cityArr;

                    const leng_viecLamTuongTu = viecLamTuongTu.length;
                    for (let i = 0; i < leng_viecLamTuongTu; i++) {
                        const element = viecLamTuongTu[i];
                        element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);
                        const checkSave = await TblLuuTin.findOne({ id_tin: element.new_id, id_uv: iduser });
                        element.checkSave = checkSave ? true : false;
                        const checkApply = await NopHoSo.findOne({ nhs_new_id: element.new_id, nhs_use_id: iduser });
                        element.checkApply = checkApply ? true : false;
                    }

                    data.apply = checkApply ? true : false;
                    data.SaveNew = checkSaveNew ? true : false;
                    data.viecLamTuongTu = viecLamTuongTu;

                    return functions.success(res, 'success', { data: data, type: type })
                }
            }

            // NTD
            // Tìm theo alias 
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

                if (data) {
                    type = 2

                    if (data ?.DateOfIncorporation && data.DateOfIncorporation != 0) data.DateOfIncorporation = new Date(data.DateOfIncorporation * 1000);
                    data.usc_logo = functions.getAvatarNTD(data.usc_create_time, data.usc_logo);
                    data.image_com = functions.getImageNTD(data.image_com);
                    data.usc_create_time = new Date(data.usc_create_time * 1000);

                    const idNTD = data ?.usc_id;

                    const point = await TblPointCompany.findOne({ usc_id: idNTD }, { point_usc: 1 }).lean();
                    const endPoint = point ? point.point_usc : 0;

                    // Lấy thêm danh sách tin tuyển dụng
                    // console.log(idNTD, typeof idNTD)
                    const dataNewPromise = New.aggregate([
                        { $match: { new_user_id: Number(idNTD), new_active: 1, new_han_nop: { $gt: currentTime } } },
                        { $sort: { new_id: -1 } },
                        {
                            $lookup: {
                                from: "UserCompany",
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
                                new_money: 1,
                                new_money_type: 1,
                                new_money_from: 1,
                                new_money_to: 1,
                                new_city: 1,
                                new_cap_bac: 1,
                                new_create_time: 1,
                                new_update_time: 1,
                                usc_create_time: "$company.usc_create_time",
                                // usc_logo: "$company.usc_logo",
                                usc_logo: data.usc_logo,
                                usc_company: "$company.usc_company",
                                new_title: 1,
                                usc_alias: "$company.usc_alias",
                                new_han_nop: 1,
                                new_alias: 1
                            }
                        }
                    ]).exec();

                    // Bổ sung dữ liệu 
                    let finan_sect = data ?.financial_sector &&
                        Array.isArray(data ?.financial_sector) &&
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
                    const sameJob_Promise = New.aggregate([
                        { $match: { new_active: 1, new_user_id: { $ne: Number(idNTD) } } },
                        { $sort: { new_id: -1 } },
                        { $limit: 10 },
                        {
                            $lookup: {
                                from: "UserCompany",
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
                                new_money: 1,
                                new_money_type: 1,
                                new_money_from: 1,
                                new_money_to: 1,
                                new_city: 1,
                                new_cap_bac: 1,
                                new_create_time: 1,
                                new_update_time: 1,
                                usc_create_time: "$company.usc_create_time",
                                usc_logo: "$company.usc_logo",
                                // usc_logo: data.usc_logo,
                                usc_company: "$company.usc_company",
                                new_title: 1,
                                usc_alias: "$company.usc_alias",
                                new_han_nop: 1,
                                new_alias: 1
                            }
                        },
                        {
                            $addFields: {
                                priority: { $cond: { if: { $in: [ finan_sect] }, then: 1, else: 0 } }
                            }
                        },
                        { $sort: { priority: -1 } },
                    ]).exec();

                    const [dataNew, dataSameCom, dataSameJob] = await Promise.all([
                        dataNewPromise, sameCompany_Promise, sameJob_Promise
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

                    const iduser = await functions.getTokenJustUser(req, res);
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
                    return functions.success(res, 'get data success', { point: endPoint, data, type });
                }
            }

            return functions.setError(res, 'not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

export const getCvDetail= async(req, res) => {
    try {
        const {
            alias
        } = req.body;
        if (alias && typeof alias === 'string') {
            const strId = alias.split('-').filter(part => !!(part.trim())).pop();
            if (!isNaN(Number(strId))) {
                const id = Number(strId);
                const data = await SampleCv.findOne({
                    id: id
                }, {
                    id: 1,
                    name: 1,
                    alias: 1,
                    image: 1,
                    idnganh: 1,
                    idlang: 1,
                    htmlcss_vi: 1,
                    htmlcss_en: 1,
                    htmlcss_jp: 1,
                    htmlcss_cn: 1,
                    htmlcss_kr: 1,
                    codecolor: 1,
                    serial_CvOnl: 1,
                    active_vi: 1,
                    active_en: 1,
                    active_kr: 1,
                    active_jp: 1,
                    active_cn: 1,
                    timecreated: 1,
                    view: 1,
                    love: 1,
                    download: 1,
                    cv_interface_name: 1,
                    image2: 1,
                    image3: 1,
                    cover_image: 1,
                }).lean();
                if (data) {
                    await SampleCv.updateOne({ alias: alias }, { $inc: { view: 1 } });
                    return functions.success(res, 'get data success', { data });
                }
            }
        }
        return functions.setError(res, 'Missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// Việc làm để xuất
export const JobRecommend = async (req, res) => {
    const id = req.body.id;
    const type = req.body.type;
    const currentTime = Math.floor(Date.now() / 1000);

    const getRecommendedJobs = async () => {
        const jobs = await New.aggregate([
            { $match: { new_han_nop: { $gt: currentTime } } },
            { $sort: { new_view_count: -1 } },
            { $limit: 10 },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: "new_user_id",
                    foreignField: "usc_id",
                    as: "companyDetails",
                    pipeline: [
                        {
                            $project: {
                                usc_company: 1,
                                usc_alias: 1,
                                usc_logo: 1,
                                usc_create_time: 1
                            }
                        }
                    ]
                }
            },
            {
                $unwind: {
                    path: "$companyDetails",
                    preserveNullAndEmptyArrays: false
                }
            },
            {
                $match: {
                    "companyDetails.usc_company": { $exists: true }
                }
            }
        ]);

        jobs.forEach(element => {
            if (element.companyDetails && element.companyDetails.usc_logo) {
                element.companyDetails.usc_logo = functions.getAvatarNTD(element.companyDetails.usc_create_time, element.companyDetails.usc_logo);
            }
            element.companyDetails = {
                usc_company: element.companyDetails.usc_company || "",
                usc_alias: element.companyDetails.usc_alias || "",
                usc_logo: element.companyDetails.usc_logo || ""
            };
        });

        return jobs;
    };

    if (!id || id === "") {
        const recommendedJobs = await getRecommendedJobs();
        return functions.success(res, 'thành công', { data: recommendedJobs });
    }

    try {
        const user = await Users.findOne({ use_id: id }, {
            address: 1,
            cit_name: 1,
            cat_name: 1,
            use_job_name: 1,
            exp_years: 1,
            salary: 1,
            gender: 1,
            use_nganh_nghe: 1,
            use_city: 1,
            use_district: 1,
            use_city_job: 1,
        }).lean();

        if (!user || type === 1) {
            const recommendedJobs = await getRecommendedJobs();
            return functions.success(res, 'thành công', { data: recommendedJobs });
        }

        const matchConditions = { new_han_nop: { $gt: currentTime } };
        const addFieldsConditions = [];

        if (user.use_job_name) {
            addFieldsConditions.push({
                $cond: {
                    if: { $regexMatch: { input: "$new_title", regex: user.use_job_name, options: 'i' } },
                    then: 3,
                    else: 0
                }
            });
        }

        if (user.use_nganh_nghe && user.use_nganh_nghe.length > 0) {
            const useNganhNgheIds = user.use_nganh_nghe.map(item => item.id);
            addFieldsConditions.push({
                $cond: {
                    if: {
                        $anyElementTrue: {
                            $map: {
                                input: { $split: ["$new_cat_id", ","] },
                                as: "cat_id",
                                in: { $in: ["$$cat_id", useNganhNgheIds] }
                            }
                        }
                    },
                    then: 2,
                    else: 0
                }
            });
        }

        if (user.use_city_job && user.use_city_job.length > 0) {
            const useCityJobIds = user.use_city_job.map(item => item.id);
            addFieldsConditions.push({
                $cond: {
                    if: { $in: ["$new_city", useCityJobIds] },
                    then: 1,
                    else: 0
                }
            });
        }

        const recommendedJobs = await New.aggregate([
            { $match: matchConditions },
            {
                $addFields: {
                    priority: { $sum: addFieldsConditions }
                }
            },
            { $sort: { priority: -1, new_han_nop: 1 } },
            { $limit: 10 },
            {
                $lookup: {
                    from: "UserCompany",
                    localField: "new_user_id",
                    foreignField: "usc_id",
                    as: "companyDetails",
                    pipeline: [
                        {
                            $project: {
                                usc_company: 1,
                                usc_alias: 1,
                                usc_logo: 1,
                                usc_create_time: 1
                            }
                        }
                    ]
                }
            },
            {
                $unwind: {
                    path: "$companyDetails",
                    preserveNullAndEmptyArrays: false
                }
            },
            {
                $match: {
                    "companyDetails.usc_company": { $exists: true }
                }
            }
        ]);

        recommendedJobs.forEach(element => {
            if (element.companyDetails && element.companyDetails.usc_logo) {
                element.companyDetails.usc_logo = functions.getAvatarNTD(element.companyDetails.usc_create_time, element.companyDetails.usc_logo);
            }
            element.companyDetails = {
                usc_company: element.companyDetails.usc_company || "",
                usc_alias: element.companyDetails.usc_alias || "",
                usc_logo: element.companyDetails.usc_logo || ""
            };
        });
        const iduser = await functions.getTokenJustUser(req, res);
        if (iduser) {
            const processArray = async (arr) => {
                const arrPromiseLuuTin = [];
                const arrPromiseNopHoSo = [];
        
                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];
                    arrPromiseNopHoSo.push(promiseNopHoSo(iduser, element.new_id));
                    arrPromiseLuuTin.push(promiseTblLuuTin(iduser, element.new_id));
                }
        
                const arrNopHoSo = await Promise.all(arrPromiseNopHoSo);
                const arrLuutin = await Promise.all(arrPromiseLuuTin);
        
                for (let i = 0; i < arr.length; i++) {
                    arr[i].checkUngTuyen = arrNopHoSo[i] ? true : false;
                    arr[i].checkLuuTin = arrLuutin[i] ? true : false;
                }
            };

            await processArray(recommendedJobs);
        }

        return functions.success(res, 'thành công', { data: recommendedJobs });

    } catch (error) {
        console.error(error);
        const recommendedJobs = await getRecommendedJobs();
        return functions.success(res, 'thành công', { data: recommendedJobs });
    }
};

// Công ty đề xuất
export const getRecommentComp = async (req, res) => {
    const id = req.body.id;
    const currentTime = Math.floor(Date.now() / 1000);

    const comWithNew = await New.distinct('new_user_id', { new_han_nop: { $gte: currentTime } });

    const getCompanyWithJobs = async (matchConditions) => {
        const companies = await UserCompany.aggregate([
            {
                $match: {
                    ...matchConditions,
                    usc_id: { $in: comWithNew }
                }
            },
            { $limit: 1 }
        ]);

        if (companies.length > 0) {
            const company = companies[0];
            if (company.usc_logo) {
                company.usc_logo = functions.getAvatarNTD(company.usc_create_time, company.usc_logo);
            }
            company.usc_logo = company.usc_logo || "";

            // Lấy tối đa 3 công việc từ công ty đã tìm thấy
            const jobs = await New.find(
                { new_user_id: company.usc_id, new_han_nop: { $gt: currentTime } },
                null,
                { sort: { new_han_nop: 1 }, limit: 3 }
            ).lean();

            const iduser = await functions.getTokenJustUser(req, res);
            if (iduser) {
                const processArray = async (arr) => {
                    const arrPromiseLuuTin = [];
                    const arrPromiseNopHoSo = [];
            
                    for (let i = 0; i < arr.length; i++) {
                        const element = arr[i];
                        arrPromiseNopHoSo.push(promiseNopHoSo(iduser, element.new_id));
                        arrPromiseLuuTin.push(promiseTblLuuTin(iduser, element.new_id));
                    }
            
                    const arrNopHoSo = await Promise.all(arrPromiseNopHoSo);
                    const arrLuutin = await Promise.all(arrPromiseLuuTin);
            
                    for (let i = 0; i < arr.length; i++) {
                        arr[i].checkUngTuyen = arrNopHoSo[i] ? true : false;
                        arr[i].checkLuuTin = arrLuutin[i] ? true : false;
                    }
                };
    
                await processArray(jobs);
            }

            company.jobs = jobs;

            return company;
        } else {
            return null;
        }
    };

    if (!id || id === "") {
        const matchConditions = {};
        const companyWithJobs = await getCompanyWithJobs(matchConditions);
        return functions.success(res, 'thành công', { data: companyWithJobs });
    }

    try {
        const user = await Users.findOne({ use_id: id }, { use_city: 1 }).lean();

        if (!user || !user.use_city) {
            const matchConditions = {};
            const companyWithJobs = await getCompanyWithJobs(matchConditions);
            return functions.success(res, 'thành công', { data: companyWithJobs });
        }

        // Chuyển đổi use_city thành chuỗi để khớp với usc_city
        const matchConditions = { usc_city: user.use_city.toString() };
        let companyWithJobs = await getCompanyWithJobs(matchConditions);

        if (!companyWithJobs) {
            // Nếu không tìm thấy công ty nào dựa trên use_city, lấy công ty có job và nhiều view nhất
            const fallbackMatchConditions = {};
            companyWithJobs = await getCompanyWithJobs(fallbackMatchConditions);
        }

        return functions.success(res, 'thành công', { data: companyWithJobs });

    } catch (error) {
        console.error(error);
        const matchConditions = {};
        const companyWithJobs = await getCompanyWithJobs(matchConditions);
        return functions.success(res, 'thành công', { data: companyWithJobs });
    }
};