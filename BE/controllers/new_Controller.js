import * as functions from '../services/functions.js';
import UserCompany from '../models/user/UserCompany.js';
import New from '../models/new/New.js';
import NewAI from '../models/new/NewAi.js';
import Users from '../models/user/Users.js';
import SeoTt from '../models/SeoTt.js';
import News from '../models/blog/News.js';
import NewGhimTin from '../models/new/NewGhimTin.js';
import Category from '../models/category/Category.js';
import NopHoSo from '../models/NopHoSo.js';
import TblLuuTin from '../models/tbl/TblLuuTin.js';
import TblPointUsed from '../models/tbl/TblPointUsed.js';
import TblLuuHoSoUv from '../models/tbl/TblLuuHoSoUv.js';
import TblComment from '../models/tbl/TblComment.js';
import City from '../models/city/City.js';
import City2 from '../models/city/City2.js';
import SampleCv from '../models/sample/SampleCv.js';
import LanguageCv from '../models/language/LanguageCv.js';
import NganhCv from '../models/NganhCv.js';
import NewsLang from '../models/blog/NewsLang.js';
import SampleApply from '../models/sample/SampleApply.js';
import SampleLetter from '../models/sample/SampleLetter.js';
import CategoryApply from '../models/category/CategoryApply.js';
import CategoryLetter from '../models/category/CategoryLetter.js';
import NewLangApply from '../models/new/NewLangApply.js';
import BangGia from '../models/BangGia.js';
import CategoryMulti from '../models/category/CategoryMulti.js';
import NewCauHoiPhongVan from '../models/new/NewCauHoiPhongVan.js';
import AdminUser from '../models/admin/AdminUser.js';
import CategoryBieuMau from '../models/category/CategoryBieuMau.js';
import CategoryCompany from '../models/category/CategoryCompany.js';
import CategoryCompanyLk from '../models/category/CategoryCompanyLk.js';
import TblCHPV from '../models/tbl/TblCHPV.js';
import TblTagsNew from '../models/tbl/TblTagsNew.js';
import TblTags from "./../models/tbl/TblTags.js";
// import TblRateCompany from '../models/tbl/TblRateCompany.js';
// import TblRateInterview from '../models/tbl/TblRateInterview.js';
import TblTagsSalary from '../models/tbl/TblTagsSalary.js';
import NewsCate from '../models/blog/NewsCate.js';
import ttbsCate from '../models/ThongTinBoSung/ttbsCate.js';
import ttbsDetail from '../models/ThongTinBoSung/ttbsDetail.js';
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

        // console.log(
        //     'idNTD:', `${idNTD}\n`,
        //     'title:', `${title}\n`,
        //     'capBac:', `${capBac}\n`,
        //     'catId:', `${catId}\n`,
        //     'tag:', `${tag}\n`,
        //     'city:', `${city}\n`,
        //     'district:', `${district}\n`,
        //     'address:', `${address}\n`,
        //     'hinhThuc:', `${hinhThuc}\n`,
        //     'money:', `${money}\n`,
        //     'soLuong:', `${soLuong}\n`,
        //     'thuViec:', `${thuViec}\n`,
        //     'hoaHong:', `${hoaHong}\n`,
        //     'moTa:', `${moTa}\n`,
        //     'exp:', `${exp}\n`,
        //     'bangCap:', `${bangCap}\n`,
        //     'gioiTinh:', `${gioiTinh}\n`,
        //     'yeuCau:', `${yeuCau}\n`,
        //     'quyenLoi:', `${quyenLoi}\n`,
        //     'hoSo:', `${hoSo}\n`,
        //     'hanNop:', `${hanNop}\n`,
        //     'userContact:', `${userContact}\n`,
        //     'addressContact:', `${addressContact}\n`,
        //     'phoneContact:', `${phoneContact}\n`,
        //     'emailContact:', `${emailContact}\n`,
        // )

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
                            if (check == 0) await UserCompany.updateOne({ usc_id: idNTD }, { usc_index: 1 });
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
                                'new_thuc': 1,
                                'new_tag': tag,
                                'new_mota': moTa,
                                'new_yeucau': yeuCau,
                                'new_quyenloi': quyenLoi,
                                'new_ho_so': hoSo,
                                'baocao': 1,
                                'selfpost': 1,
                                'from': 'job247.vn'
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
            new_gap: 1,
            new_cao: 1,
            new_nganh: 1,
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

        // chi tiết công việc cần tuyển
        const tag = Number(req.body.tag);

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
                                if (check == 0) await UserCompany.updateOne({ usc_id: idNTD }, { usc_index: 1 });
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
                                    'new_thuc': 1,
                                    'new_tag': tag,
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
        const time30 = time + 86400 * 30;
        const seo_Promise = SeoTt.findOne({ name_page: "home" }).lean();

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
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
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
        const ViecLamAi_Promise = await NewAI.aggregate([
            { $sort: { new_create_time2: -1 } },
            { $limit: 100 },
            {
                $project: {
                    new_id: 1,
                    new_title: 1,
                    new_alias: 1,
                    new_cate_id: 1,
                    new_city: 1,
                    new_qh_id: 1,
                    new_addr: 1,
                    new_money: 1,
                    new_cap_bac: 1,
                    new_exp: 1,
                    new_bang_cap: 1,
                    new_gioi_tinh: 1,
                    new_so_luong: 1,
                    new_hinh_thuc: 1,
                    new_create_time: 1,
                    new_create_time2: 1,
                    new_han_nop: 1,
                    new_usercontact: 1,
                    new_addcontact: 1,
                    new_phonecontact: 1,
                    new_emailcontact: 1,
                    new_mota: 1,
                    new_yeucau: 1,
                    new_quyenloi: 1,
                    new_company_name: 1,
                }
            }
        ]);
        const ViecLamThuongHieu_Promise = await New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
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
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
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
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
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
        const newsByCompany = await New.aggregate([
            {
                $group: {
                    _id: "$new_user_id",
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            }
        ]);
        const companiesWithMostNews = await UserCompany.find({
            usc_id: { $in: newsByCompany.map(item => item._id) }
        },{
            usc_company:1,
            usc_alias:1,
            usc_logo: 1
        }).lean();

        const blog_Promise = News.find({ new_active: 1 }, {
                new_id: 1,
                new_title: 1,
                new_title_rewrite: 1,
                new_picture: 1,
                new_des: 1,
                new_date: 1
            })
            .sort({ new_date_last_edit: -1, new_date: -1, new_id: -1 })
            .limit(8).lean();



        const tinTucNoiBat_Promise = News.aggregate([{
                $match: {
                    new_active: 1
                }
            },
            { $sort: { new_id: -1 } },
            {
                $limit: 12
            },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    // adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    new_date: 1,
                    new_date_last_edit: 1,
                    // adm_picture: "$adminUser.adm_picture",
                }
            }
        ])

        const com_promise = UserCompany.distinct("usc_id")

        const [
            seo,
            ViecLamHapDan,
            TinThuongHapDan,
            ViecLamThuongHieu,
            TinThuongThuongHieu,
            ViecLamAi,
            CongTyHangDau,
            blog,
            Cityy,
            tinTucNoiBat,
            com
        ] =
        await Promise.all([
            seo_Promise,
            ViecLamHapDan_Promise,
            TinThuongHapDan_Promise,
            ViecLamThuongHieu_Promise,
            TinThuongThuongHieu_Promise,
            ViecLamAi_Promise,
            CongTyHangDau_Promise,
            blog_Promise,
            City.find({}, { cit_id: 1, cit_name: 1 }).lean(),
            tinTucNoiBat_Promise,
            com_promise,
            // nganhNgheNoiBat_Promise
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

        // for (let i = 0; i < arr.length; i++) {
        //     const element = arr[i];
        //     nganhNgheNoiBat.push({
        //         _id: element,
        //         count: JobNumber[i]
        //     })
        // }
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

        const leng_blog = blog.length;
        for (let i = 0; i < leng_blog; i++) {
            const element = blog[i];
            // element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
        }

        for (let i = 0; i < tinTucNoiBat.length; i++) {
            const element = tinTucNoiBat[i];
            // element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
        }

        data.Seo = seo;
        data.ViecLamHapDan = ViecLamHapDan.length < 30 ? [...ViecLamHapDan, ...TinThuongHapDan] : [...ViecLamHapDan];
        data.Attractive_Job = ViecLamHapDan.length < 0 ? [...ViecLamHapDan, ...TinThuongHapDan] : [...ViecLamHapDan];
        data.New_Job = ViecLamThuongHieu.length < 30 ? [...ViecLamThuongHieu, ...TinThuongThuongHieu] : [...ViecLamThuongHieu];
        data.ViecLamThuongHieu = ViecLamThuongHieu.length < 30 ? [...ViecLamThuongHieu, ...TinThuongThuongHieu] : [...ViecLamThuongHieu];
        data.TinThuongHapDan = TinThuongHapDan;
        data.TinThuongThuongHieu = TinThuongThuongHieu;
        data.ViecLamAi = ViecLamAi;
        data.TopCompany = CongTyHangDau;
        // data.ViecLamTuyenGap = ViecLamTuyenGap;
        data.blog = blog;
        data.JobNumber = JobNumber;
        data.Outstanding_Category = nganhNgheNoiBat;
        data.tinTucNoiBat = tinTucNoiBat;
        data_home = data;
        if (flag) {
            functions.success(res, 'success', { data });
        }
        return true;
    } catch (error) {
        return functions.setError(res, error.message);
    }
};


// tìm kiếm trang chủ (việc làm hấp dẫn)
export const searchViecLamHapDan = async(req, res) => {
    try {
        const conditions = {};
        const time = functions.getTime();
        const address = req.body.address;
        if (address && address != 0) conditions.new_city = address;
        // if (address) conditions.new_city = new RegExp(address, 'i');

        const idNewHot = [];
        const idNewCao = [];

        const HotNewGhimTin_Promise = await NewGhimTin.find({ expired: { $gt: time } })

        for (let i = 0; i < HotNewGhimTin_Promise.length; i++) {
            if (HotNewGhimTin_Promise[i].new_hot === 1) {
                idNewHot.push(HotNewGhimTin_Promise[i].new_id)
            }
            if (HotNewGhimTin_Promise[i].new_cao === 1) {
                idNewCao.push(HotNewGhimTin_Promise[i].new_id)
            }
        }

        const ViecLamHapDan = await New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
                    new_han_nop: { $gt: time },
                    new_id: {
                        $in: idNewHot
                    },
                    new_city: address,
                    // address: { $in: ["$new_city"] }
                }
            },
            { $sort: { new_update_time: -1 } },
            { $limit: 72 },
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1
                }
            }
        ]);
        //     { $match: { new_active: 1, new_thuc: 1, $or: [{ new_han_nop: { $gt: time } }, { new_hot: 1 }], ...conditions } },
        //     { $sort: { new_hot: -1, new_update_time: -1 } },
        //     { $limit: 72 },
        //     {
        //         $lookup: {
        //             from: "UserCompany",
        //             localField: "new_user_id",
        //             foreignField: "usc_id",
        //             as: "company",
        //         }
        //     },
        //     { $unwind: "$company" },
        //     {
        //         $project: {
        //             new_title: 1,
        //             new_id: 1, new_money: 1, new_han_nop: 1, usc_logo: '$company.usc_logo', usc_id: '$company.usc_id',
        //             usc_company: '$company.usc_company', usc_alias: '$company.usc_alias', usc_create_time: '$company.usc_create_time', new_alias: 1,
        //             new_index: 1, new_thuc: 1, new_city: 1, new_hot: 1, new_update_time: 1,
        //             new_money_type: 1, new_money_from: 1, new_money_to: 1
        //         }
        //     }
        // ]);

        const cityy = await City.find({}, { cit_id: 1, cit_name: 1 }).lean()
        for (let i = 0; i < ViecLamHapDan.length; i++) {
            const element = ViecLamHapDan[i];
            element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);

            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;

        }

        return functions.success(res, 'success', { data: ViecLamHapDan });
    } catch (error) {
        console.log("🚀 ~ searchViecLamHapDan ~ error:", error.message)
        return functions.setError(res, error.message);
    }
};

// tìm kiếm trang chủ (việc làm hấp dẫn)
export const searchViecLamLuongCao = async(req, res) => {
    try {
        const conditions = {};
        const time = functions.getTime();
        const address = req.body.address;
        if (address && address != 0) conditions.new_city = address;
        // if (address) conditions.new_city = new RegExp(address, 'i');

        const ViecLamHapDan = await New.aggregate([
            { $match: { new_active: 1, new_thuc: 1, new_han_nop: { $gt: time }, $or: [{ new_money: { $gt: 6 } }, { new_cao: 1 }], ...conditions } },
            { $sort: { new_cao: -1, new_update_time: -1 } },
            { $limit: 72 },
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_cao: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1
                }
            }
        ]);
        const cityy = await City.find({}, { cit_id: 1, cit_name: 1 }).lean()

        for (let i = 0; i < ViecLamHapDan.length; i++) {
            const element = ViecLamHapDan[i];
            element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);

            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;

        }
        return functions.success(res, 'success', { data: ViecLamHapDan });
    } catch (error) {
        console.log("🚀 ~ searchViecLamHapDan ~ error:", error.message)
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
            new_tag: 1,
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
            // const cate_Promise = Category.find({ cat_301: "" }, { cat_id: 1, cat_name: 1, cat_tags: 1, cat_count: 1, cat_count_vl: 1, cat_ut: 1 }).lean();
            const cate_Promise = Category.find({}, { cat_id: 1, cat_name: 1, cat_tags: 1, cat_count: 1, cat_count_vl: 1, cat_ut: 1 }).lean();

            const [dataNew, cate, Cityy] = await Promise.all([
                data_Promise, cate_Promise, City.find({}, { cit_id: 1, cit_name: 1 }).lean()

            ]);
            const data = dataNew[0];
            if (data) {
                const arrCity = data.new_city.split(',');

                const conditions = { new_city: { $in: arrCity }, new_active: 1, new_thuc: 1, new_id: { $ne: id } };

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
                const updateView_Promise = New.findOneAndUpdate({ new_id: id }, { $inc: { new_view_count: +1 } });
                const Blog_Promise = News.find({}, { new_id: 1, new_title: 1, new_picture: 1, new_des: 1 }).sort({ new_id: -1 }).limit(3).lean()
                const [checkApply,
                    viecLamTuongTu,
                    checkSaveNew,
                    updateView,
                    Blog
                ] = await Promise.all([
                    checkApply_Promise,
                    viecLamTuongTu_Promise,
                    checkSaveNew_Promise,
                    updateView_Promise,
                    Blog_Promise
                ]);
                const leng_viecLamTuongTu = viecLamTuongTu.length;
                for (let i = 0; i < leng_viecLamTuongTu; i++) {
                    const element = viecLamTuongTu[i];
                    element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);
                }
                for (let i = 0; i < Blog.length; i++) {
                    const element = Blog[i];
                    element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`
                }
                data.apply = checkApply ? true : false;
                data.Blog = Blog;
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
        let data_ai =[];
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
            new_nganh: 1,
            usc_alias: "$company.usc_alias",
            address: "$company.usc_address",
            new_han_nop: 1,
            new_alias: 1,
            is_login: 1,
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
        const item_ai = {
            new_id: 1,
            new_money: 1,
            new_city: 1,
            new_cap_bac: 1,
            new_create_time: 1,
            new_title: 1,
            new_nganh: 1,
            new_han_nop: 1,
            new_alias: 1,
            new_update_time: 1,
            new_addr: 1,
            new_qh_id: 1,
            new_usercontact: 1,
            new_addcontact: 1,
            new_phonecontact: 1,
            new_emailcontact: 1,
            new_mota: 1,
            new_company_name:1,
        }
        
        const city = await City.find({}, { cit_id: 1, cit_name: 1 }).lean()

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
            data_ai = await NewAI.aggregate([
                { $match: conditions_ai },
                { $sort: { [sortField]: sortOrder } },
                { $skip: skip },
                { $limit: limit },
                { $project: item_ai }
            ]);
            const totalTinThuong = await New.countDocuments(conditions);
            const totalTinAI = await NewAI.countDocuments(conditions_ai);

            total = totalTinThuong + totalTinAI;

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
        return functions.success(res, 'success', { total, data,data_ai });
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
        const address = Number(req.body.address);
        const keywords = req.body.keywords;
        const conditionsAI = {
            site: "uvViec3s",
            size: pageSize,
            pagination: page
        };
        let conditions = {
            usc_search: 1,
            checkImgCV: 1,
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
            // const userIdCv = await SaveCandidateCv.distinct('iduser', {
            //     html: new RegExp(functions.allVietnameseRegex(key), 'i')
            // })
            const userIdCv = await SaveCandidateCv.distinct('iduser', {
                html: new RegExp(key, 'i')
            })
            console.log(userIdCv)
            conditions['$or'] = [
                { use_job_name: new RegExp(functions.allVietnameseRegex(key), 'i') },
                { use_name: new RegExp(functions.allVietnameseRegex(key), 'i') },
                { use_id: { $in: userIdCv } }
            ]
        }
        if (hinhThuc) conditionsAI.cv_loaihinh_id = hinhThuc;
        if (hinhThuc) conditions.work_option = hinhThuc;
        if (capBac) conditionsAI.cv_capbac_id = capBac;
        // if (capBac) conditions.cap_bac_mong_muon = capBac;
        if (capBac) conditions.use_hocvan = capBac; // Thiết kế mới 
        if (kinhNghiem || kinhNghiem === 0) conditions.exp_years = kinhNghiem;
        if (gioiTinh) conditions.gender = gioiTinh;
        if (district) {
            // conditions.use_district = district
            conditions['use_district_job.id'] = Number(district)
        };
        if (mucLuong) conditions.salary = mucLuong;

        let arrIdByAI = [];
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
            site_from: 0,
            use_show: 1,
            usc_search: 1,
            register: { $ne: 4 },
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
            exp_years: 1,
            is_login: 1
        }).sort({ use_update_time: -1, use_id: -1 }).skip(skip).limit(limit).lean();
        const total_promise = Users.countDocuments({
            site_from: 0,
            use_show: 1,
            usc_search: 1,
            register: { $ne: 4 },
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

        // if (!catid && !city) {
        //     const result = await SeoTt.findOne({ name_page: "nguoi-tim-viec" }).lean();
        //     showNew = 1;
        //     dataSeo.title = result.seo_tt;
        //     dataSeo.description = result.seo_des;
        //     dataSeo.seo_key = result.seo_key;
        //     dataSeo.h1 = 'Hồ sơ ứng viên mới nhất';
        //     dataSeo.index = 'noodp,index,follow';
        //     dataSeo.breakCrumb = `<div class="breakcrumb">
        //     <ul>
        //         <li><a href="/">Trang chủ</a></li>
        //         <li class="active"><span>Ứng viên</span></li>
        //     </ul>
        // </div>`;
        //     dataSeo.seo_text = result.seo_text;
        // } else 
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
                arrPromise.push(promiseTblPointUsed(iduser, element.use_id));
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

// promise call tblPointUsed 
const promiseTblPointUsed = (iduser, use_id) => {
    const query = TblPointUsed.findOne({ usc_id: iduser, use_id }, { type: 1 }).lean();
    return query;
};

// promise call tbl_luuhoso_uv 
const promiseTblLuuHoSo = (iduser, use_id) => {
    const query = TblLuuHoSoUv.findOne({ id_uv: use_id, id_ntd: iduser }, { id_uv: 1 }).lean();
    return query;
};

// danh sách CV
export const ListCV = async(req, res) => {
    try {
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const total = await SampleCv.countDocuments({});
        const seo = await SeoTt.findOne({ name_page: "mau-cv" });
        const blog = await News.find({ new_category_id: 2 }, { new_id: 1, new_title: 1, new_title_rewrite: 1, new_picture: 1, new_date: 1 }).sort({ new_view: -1 }).limit(9).lean();
        const sampleCV = await SampleCv.find({ status: 1, serial_CvOnl: 0 }).sort({ serial: -1, timecreated: -1 }).skip(skip).limit(limit).lean();

        const data = {};
        data.seo = seo;
        data.index = "index, follow";
        data.sampleCV = sampleCV;
        const leng_sampleCV = sampleCV.length;

        for (let i = 0; i < leng_sampleCV; i++) {
            const element = sampleCV[i];
            element.image = `${process.env.DOMAIN_API}/upload/maucv/${element.alias}/${element.image}`;
        }


        const leng_blog = blog.length;

        for (let i = 0; i < leng_blog; i++) {
            const element = sampleCV[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
        }

        data.blog = blog;
        return functions.success(res, 'success', { total, data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// danh sách cv theo ngôn ngữ
export const ListCvFollowLanguage = async(req, res) => {
    try {
        const data = {};
        const alias = req.body.alias;
        const listNgonNgu = await LanguageCv.findOne({ alias: alias }).lean();
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const listNgonNgu2 = await NganhCv.find({}, { name: 1 }).lean();
        const listSeo = await NewsLang.find({ idlang: listNgonNgu.id }).lean();

        data.listNgonNgu = listNgonNgu;
        data.listNgonNgu2 = listNgonNgu2;
        data.listSeo = listSeo;


        let conditions2 = {};
        let sort = {};
        if (listNgonNgu.id == 1) conditions2 = { active_vi: 1 };
        sort = { active_vi: -1 };
        if (listNgonNgu.id == 2) conditions2 = { active_en: 1 };
        sort = { active_en: -1 };
        if (listNgonNgu.id == 3) conditions2 = { active_jp: 1 };
        sort = { active_jp: -1 };
        if (listNgonNgu.id == 4) conditions2 = { active_cn: 1 };
        sort = { active_cn: -1 };
        if (listNgonNgu.id == 5) conditions2 = { active_kr: 1 };
        sort = { active_kr: -1 };
        const conditions = {
            $or: [
                { idlang: listNgonNgu.id },
                conditions2
            ]
        };

        const listCV = await SampleCv.find({ status: 1, ...conditions }).sort(sort).skip(skip).limit(limit).lean();
        const total = await SampleCv.countDocuments({ status: 1, ...conditions });
        const leng_listCV = listCV.length;
        for (let i = 0; i < leng_listCV; i++) {
            const element = listCV[i];
            element.image = `${process.env.DOMAIN_API}/upload/maucv/${element.alias}/${element.image}`;
        }
        data.listCV = listCV;
        return functions.success(res, 'success', { total, data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// danh sách cv theo ngành nghề
export const ListCvFollowJob = async(req, res) => {
    try {
        const alias = req.body.alias;
        const data = { index: "index,follow" };
        const check = await NganhCv.aggregate([
            { $match: { alias } },
            {
                $lookup: {
                    from: "NewsNganhNghe",
                    localField: "id",
                    foreignField: "idnganh",
                    as: "nganhnghe"
                }
            },
            { $unwind: "$nganhnghe" }
        ]);
        if (check.length > 0) {
            data.seo = check[0];
            data.snd = 1;
        } else {
            const result = await NganhCv.findOne({ alias: alias }).lean();
            data.seo = result;
            data.snd = 0;
        }
        let listCV = await SampleCv.find({ idnganh: data.seo.id, idlang: 0, status: 1, }).sort({ timecreated: -1 }).lean();
        if (listCV.length == 0) {
            listCV = await SampleCv.find({ id: { $in: [367, 582, 579, 543] }, idlang: 0, status: 1 }).sort({ timecreated: -1 }).lean();
        }
        for (let i = 0; i < listCV.length; i++) {
            const element = listCV[i];
            element.image = `${process.env.DOMAIN_API}/upload/maucv/${element.alias}/${element.image}`;
        }
        data.listCV = listCV;
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// danh sách đơn xin việc
export const ListJobAppli = async(req, res) => {
    try {
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const Seo = await SeoTt.findOne({ name_page: "don-xin-viec" }).lean();
        const data = {};
        data.Seo = {};
        data.Seo.seo_h1 = Seo.seo_h1 != "" ? Seo.seo_h1 : "Đơn xin việc";
        data.Seo.seo_tt = Seo.seo_tt != "" ? Seo.seo_tt : "Đơn xin việc";
        data.Seo.seo_key = Seo.seo_key != "" ? Seo.seo_key : "";
        data.Seo.seo_des = Seo.seo_des != "" ? Seo.seo_des : "";
        const don = await SampleApply.find({ status: 1, }).sort({ serial: -1, timecreated: -1 }).skip(skip).limit(limit).lean();
        for (let i = 0; i < don.length; i++) {
            const element = don[i];
            element.image = `${process.env.DOMAIN_API}/upload/appli/${element.alias}/${element.image}`;
        }
        const cateCV = await CategoryApply.find({}).sort({ cat_id: -1 }).lean();
        data.don = don;
        data.cateCV = cateCV;
        return functions.success(res, 'get data success', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// danh sách đơn xin việc theo ngành nghề
export const ListJobAppliCate = async(req, res) => {
    try {
        const data = {};
        const alias = req.body.alias;
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        if (alias) {
            const Seo = await CategoryApply.findOne({ cat_alias: alias }).lean();

            data.Seo = Seo;
            data.Seo.meta_h1 = Seo.meta_h1 != "" ? Seo.meta_h1 : 'Đơn xin việc theo ngành nghề';
            data.Seo.meta_tit = Seo.meta_tit != "" ? Seo.meta_tit : '';
            data.Seo.meta_des = Seo.meta_des != " " ? Seo.meta_des : 'Đơn xin việc theo ngành nghề';
            data.Seo.meta_key = Seo.meta_key != "" ? Seo.meta_key : '';
            data.Seo.meta_sapo = Seo.meta_sapo != "" ? Seo.meta_sapo : '';
            data.Seo.index = Seo.cat_index ? "index,follow" : "noindex,nofollow";

            const Don = await SampleApply.find({ status: 1, idnganh: Seo.cat_id }).sort({ serial: -1, timecreated: -1 })
                .skip(skip).limit(limit).lean();

            for (let i = 0; i < Don.length; i++) {
                const element = Don[i];
                element.image = `${process.env.DOMAIN_API}/upload/appli/${element.alias}/${element.image}`;
            }
            data.Don = Don;
            return functions.success(res, 'success', { data });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// danh sách đơn xin việc theo ngôn ngữ
export const ListJobAppliLanguage = async(req, res) => {
    try {
        const data = {};
        const id_lang = req.body.id_lang;
        if (id_lang) {
            const Seo = await NewLangApply.aggregate([
                { $match: { id_lang } },
                {
                    $lookup: {
                        from: "LanguageCv",
                        localField: "id_lang",
                        foreignField: "id",
                        as: "LanguageCv"
                    }
                },
                { $unwind: "$LanguageCv" },
            ]);
            const cateCV = await CategoryApply.find({}).sort({ cat_id: -1 }).lean();
            data.Seo = Seo;
            data.cateCV = cateCV;
            return functions.success(res, 'success', { data });
        }

        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// danh sách thư xin việc
export const ListLetterAppli = async(req, res) => {
    try {
        const data = {};
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;

        const Seo = await SeoTt.findOne({ name_page: "thu-xin-viec" }).lean();

        const CV = await SampleLetter.find({ status: 1 }).sort({ serial: -1, timecreated: -1 }).skip(skip).limit(limit).lean();

        for (let i = 0; i < CV.length; i++) {
            const element = CV[i];
            element.image = `${process.env.DOMAIN_API}/upload/letter/${element.alias}/${element.image}`;
        }
        data.Seo = Seo;
        data.CV = CV;
        return functions.success(res, 'success', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// danh sách thư xin việc theo ngành nghề
export const ListLetterAppliCate = async(req, res) => {
    try {
        const data = {};
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;

        const cat_alias = req.body.cat_alias;
        if (cat_alias) {
            const Seo = await CategoryLetter.findOne({ cat_alias }).lean();

            const CV = await SampleLetter.findOne({ status: 1, idnganh: Seo.cat_id }).sort({ serial: -1, timecreated: -1 }).skip(skip).limit(limit).lean();

            for (let i = 0; i < CV.length; i++) {
                const element = CV[i];
                element.image = `${process.env.DOMAIN_API}/upload/letter/${element.alias}/${element.image}`;
            }
            data.Seo = Seo;
            data.CV = CV;
            return functions.success(res, 'success', { data });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// bảng giá
export const PriceList = async(req, res) => {
    try {
        const data = await BangGia.find({ bg_type: 5 }).lean();
        return functions.success(res, 'success', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// việc tìm người
export const JobFindHuman = async(req, res) => {
    try {
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const time = functions.getTime();
        const Seo = await SeoTt.findOne({ name_page: "viec-tim-nguoi" }).lean();
        const data = await New.aggregate([
            { $match: { new_cao: 0, new_gap: 0, new_active: 1, new_thuc: 1, new_han_nop: { $gt: time } } },
            { $sort: { new_hot: -1, new_update_time: -1 } },
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
            { $unwind: "$company" },
            {
                $project: {
                    new_title: 1,
                    new_id: 1,
                    new_money: 1,
                    new_han_nop: 1,
                    new_alias: 1,
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    usc_logo: '$company.usc_logo',
                    usc_id: '$company.usc_id',
                    usc_company: '$company.usc_company',
                    usc_alias: '$company.usc_alias',
                    usc_create_time: '$company.usc_create_time',
                }
            }
        ]);
        const length_data = data.length;

        for (let i = 0; i < length_data; i++) {
            const element = data[i];
            element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);
        }
        const vieclamtheonganhnghe = await Category.find({ cat_301: "" }, { cat_id: 1, cat_name: 1, cat_tags: 1, cat_count: 1, cat_count_vl: 1, cat_ut: 1 }).sort({ cat_order: 1, cat_name: 1 }).lean();

        const total = await New.countDocuments({ new_cao: 0, new_gap: 0, new_active: 1, new_thuc: 1, new_han_nop: { $gt: time } });

        const viecLamtheotinhthanh = await City.find({}, { cit_id: 1, cit_name: 1, cit_count: 1, cit_count_vl: 1, cit_type: 1, postcode: 1, }).sort({ cit_count: -1, cit_name: 1 }).lean();
        return functions.success(res, 'success', { total, data, Seo, vieclamtheonganhnghe, viecLamtheotinhthanh });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// blog
export const GetBlog = async(req, res) => {
    try {
        const Seo = await SeoTt.findOne({ name_page: "blog" }).lean();
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;

        const hotNew = await News.aggregate([{
                $match: {
                    new_active: 1,
                    new_hot: 1
                }
            },
            { $sort: { new_id: -1 } },
            {
                $limit: 72
            },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    // adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.adm_name",
                    new_teaser:1,
                    new_des: 1,
                    new_date: 1,
                    new_date_last_edit: 1,
                    adm_picture: "$adminUser.adm_picture",
                }
            }
        ])
            const blogNew = await News.aggregate([{
                $match: {
                    new_active: 1,
                }
            },
            { $sort: { new_id: -1 } },
            {
                $limit: 72
            },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    // adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    new_teaser:1,
                    new_date: 1,
                    new_date_last_edit: 1,
                    adm_picture: "$adminUser.adm_picture",
                }
            }
            ])
        for (let i = 0; i < hotNew.length; i++) {
            const element = hotNew[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;

        }
        for (let i = 0; i < blogNew.length; i++) {
            const element = blogNew[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;

        }

        const data = await News.aggregate([
            { $match: { new_category_id: { $ne: 2 }, new_active: 1 } },
            { $sort: { new_id: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    new_teaser:1,
                    new_date: 1,
                    new_date_last_edit: 1,
                    adm_picture: "$adminUser.adm_picture",
                }
            }
        ]);
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
            // element.adm_picture = `${process.env.DOMAIN_API}/pictures/${element.adm_picture}`
            element.adm_picture = functions.getAvatarAdmin(element.adm_picture)
        }
        const total = await News.countDocuments({ new_category_id: { $ne: 2 }, new_active: 1 }).lean();

        const arrCate = [
            { cate_name: 'Bí quyết viết CV', id: 2, limit: 4, order: 'first', link: '/bi-quyet-viet-cv' },
            { cate_name: 'Cẩm nang tìm việc', id: 1, limit: 6, order: 'second', link: '/blog/c1/cam-nang-tim-viec' },
            { cate_name: 'Biểu mẫu', id: 3, limit: 5, order: 'third', link: '/blog/c3/bieu-mau' }
        ];
        const BlogCate = [];
        for (let i = 0; i < 3; i++) {
            const element = arrCate[i];
            const result = await News.aggregate([
                { $match: { new_active: 1, new_category_id: element.id } },
                { $sort: { new_id: -1 } },
                { $limit: element.limit },
                {
                    $lookup: {
                        from: 'AdminUser',
                        localField: 'adm_id',
                        foreignField: 'adm_id',
                        as: "adminUser"
                    }
                },
                { $unwind: "$adminUser" },
                {
                    $project: {
                        order: element.order,
                        cate_name: element.cate_name,
                        link: element.link,
                        new_title_rewrite: 1,
                        new_title: 1,
                        new_id: 1,
                        new_picture: 1,
                        adm_id: '$adminUser.adm_id',
                        adm_name: '$adminUser.adm_name',
                        new_des: 1,
                        new_teaser:1,
                        new_date: 1,
                        new_date_last_edit: 1,
                        adm_picture: "$adminUser.adm_picture",
                        new_cate_id: 1,
                    }
                }
            ]);
            for (let i = 0; i < result.length; i++) {
                const element = result[i];
                element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
                // element.adm_picture = `${process.env.DOMAIN_API}/pictures/${element.adm_picture}`;
                element.adm_picture = functions.getAvatarAdmin(element.adm_picture)
            }
            BlogCate.push(result);
        }

        const today = new Date();
        const day = today.getDay();

        const week_start = new Date(today);
        week_start.setDate(today.getDate() - day);

        const week_end = new Date(today);
        week_end.setDate(today.getDate() + (6 - day));
        const tieubieutuan = await News.aggregate([
            { $match: { new_active: 1, new_date: { $gt: functions.getTime(week_start), $lt: functions.getTime(week_end) } } },
            { $sort: { new_id: -1 } },
            { $limit: 6 },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    adm_id: "$adminUser.adm_id",
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    new_date: 1,
                    new_date_last_edit: 1,
                }
            }
        ]);
        for (let i = 0; i < tieubieutuan.length; i++) {
            const element = tieubieutuan[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
        }

        const chuyenMuc = await CategoryMulti.find({}, { cat_id: 1, cat_name: 1, cat_title: 1, cat_name_rewrite: 1, cat_link: 1, cat_count: 1 }).sort({ cat_count: -1 }).lean();

        const cauhoituyendung = await NewCauHoiPhongVan.find({ new_active: 1 }, { new_id: 1, new_title: 1, new_title_rewrite: 1 })
            .sort({ new_date: -1 }).limit(15).lean();
        return functions.success(res, 'success', { Seo, hotNew, total, data, BlogCate, tieubieutuan, chuyenMuc, cauhoituyendung,blogNew });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};
// Tìm kiếm blog
export const SearchBlog = async(req, res) => {
    try {
        const Seo = await SeoTt.findOne({ name_page: "blog" }).lean();
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const keywords = req.body.keywords;

        let conditions = {
            new_category_id: { $ne: 2 },
            new_active: 1
        };

        if (keywords) {
            const key = keySearch(keywords);

            conditions['$or'] = [
                { new_title: new RegExp(functions.allVietnameseRegex(key), 'i') },
                { new_keyword: new RegExp(functions.allVietnameseRegex(key), 'i') },
            ];
        }
        const hotNew = await News.aggregate([{
            $match: {
                new_active: 1,
                new_hot: 1
            }
        },
        { $sort: { new_id: -1 } },
        {
            $limit: 72
        },
        {
            $lookup: {
                from: 'AdminUser',
                localField: 'adm_id',
                foreignField: 'adm_id',
                as: "adminUser"
            }
        },
        { $unwind: "$adminUser" },
        {
            $project: {
                new_title_rewrite: 1,
                new_title: 1,
                new_picture: 1,
                new_id: 1,
                // adm_id: "$adminUser.admin_id",
                adm_name: "$adminUser.adm_name",
                new_des: 1,
                new_date: 1,
                new_date_last_edit: 1,
                // adm_picture: "$adminUser.adm_picture",
            }
        }
    ]);
    for (let i = 0; i < hotNew.length; i++) {
        const element = hotNew[i];
        element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;

    }
        const data = await News.aggregate([
            { $match: conditions },
            { $sort: { new_id: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    new_date: 1,
                    new_date_last_edit: 1,
                    adm_picture: "$adminUser.adm_picture",
                }
            }
        ]);

        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
            element.adm_picture = functions.getAvatarAdmin(element.adm_picture);
        }

        const total = await News.countDocuments(conditions).lean();

        return functions.success(res, 'success', { Seo, total, data,hotNew });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};
// chi tiết blog
export const DetailBlog = async(req, res) => {
    try {
        const id = Number(req.body.id);

        const data_Promise = News.aggregate([{
                $match: { new_id: id }
            },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_new: 1,
                    new_tt: 1,
                    cat_new_lq: 1,
                    new_time_edit: 1,
                    title_suggest: 1,
                    new_title: 1,
                    new_description: 1,
                    new_admin_edit: 1,
                    new_teaser: 1,
                    new_keyword: 1,
                    new_category_id: 1,
                    new_audio: 1,
                    new_active: 1,
                    new_order: 1,
                    new_edited: 1,
                    new_url_lq: 1,
                    new_id: 1,
                    new_cate_bm: 1,
                    content_suggest: 1,
                    new_title_rewrite: 1,
                    new_index: 1,
                    lang_id: 1,
                    new_301: 1,
                    new_date_last_edit: 1,
                    new_hits: 1,
                    new_hot: 1,
                    new_picture: 1,
                    new_picture_web: 1,
                    new_des: 1,
                    new_audio_ai: 1,
                    admin_id: 1,
                    key_lq: 1,
                    new_date: 1,
                    new_view: 1,
                    adm_name: "$adminUser.adm_name",
                    adm_picture: "$adminUser.adm_picture",
                }
            }
        ]).exec();

        const [data] = await Promise.all([data_Promise])

        // const data = await News.findOne({ new_id: id }).lean();
        data[0].new_picture = `${process.env.DOMAIN_API}/pictures/news/${data[0].new_picture}`;
        // data[0].adm_picture = `${process.env.DOMAIN_API}/pictures/${data[0].adm_picture}`;
        data[0].adm_picture = functions.getAvatarAdmin(data[0].adm_picture)

        const new_cateory = await NewsCate.findOne({ cat_id: data[0].new_category_id })
        if (new_cateory) {
            data[0].new_category = `${new_cateory?.cat_name}`
        }

        const time = functions.getTime();
        const vllq = await New.aggregate([
            { $match: { new_han_nop: { $gt: time }, new_title: new RegExp(data.key_lq, 'i') } },
            { $limit: 5 },
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
                    new_alias: 1,
                    new_han_nop: 1,
                    new_city: 1,
                    new_money: 1,
                    usc_logo: '$company.usc_logo',
                    usc_company: '$company.usc_company',
                    usc_create_time: '$company.usc_create_time',
                }
            }
        ]);

        const baivietlienquan = await News.aggregate([
            { $match: { new_category_id: data.new_category_id, new_id: { $ne: id } } },
            { $limit: 6 },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.admin_name",
                    new_des: 1
                }
            }
        ]);
        for (let i = 0; i < baivietlienquan.length; i++) {
            const element = baivietlienquan[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
        }
        const chuyenmuc = await CategoryMulti.find({}, { cat_name: 1, cat_id: 1, cat_link: 1 }).sort({ cat_name: 1 }).lean();
        const comment = await TblComment.find({ cmt_url_blog: `http://localhost:9020/blog/${data.new_title_rewrite}` }).sort({ cmt_id: -1 }).lean();

        // console.log(data[0]);
        return functions.success(res, 'success', { vllq, data: data[0], baivietlienquan, chuyenmuc, comment });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// Chi tiết blog mới (theo tiêu đề)
export const DetailBlog2 = async(req, res) => {
    try {
        const alias = req.body.alias;

        const data_Promise = News.aggregate([{
                $match: { new_title_rewrite: alias }
            },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_new: 1,
                    new_tt: 1,
                    cat_new_lq: 1,
                    new_time_edit: 1,
                    title_suggest: 1,
                    new_title: 1,
                    new_description: 1,
                    new_admin_edit: 1,
                    new_teaser: 1,
                    new_keyword: 1,
                    new_category_id: 1,
                    new_audio: 1,
                    new_active: 1,
                    new_order: 1,
                    new_edited: 1,
                    new_url_lq: 1,
                    new_id: 1,
                    new_cate_bm: 1,
                    content_suggest: 1,
                    new_title_rewrite: 1,
                    new_index: 1,
                    lang_id: 1,
                    new_301: 1,
                    new_date_last_edit: 1,
                    new_hits: 1,
                    new_hot: 1,
                    new_picture: 1,
                    new_picture_web: 1,
                    new_des: 1,
                    new_audio_ai: 1,
                    admin_id: 1,
                    key_lq: 1,
                    new_date: 1,
                    new_view: 1,
                    adm_name: "$adminUser.adm_name",
                    adm_picture: "$adminUser.adm_picture",
                }
            }
        ]).exec();

        const [data] = await Promise.all([data_Promise])

        // const data = await News.findOne({ new_id: id }).lean();
        data[0].new_picture = `${process.env.DOMAIN_API}/pictures/news/${data[0].new_picture}`;
        // data[0].adm_picture = `${process.env.DOMAIN_API}/pictures/${data[0].adm_picture}`;
        data[0].adm_picture = functions.getAvatarAdmin(data[0].adm_picture)

        const new_cateory = await NewsCate.findOne({ cat_id: data[0].new_category_id })
        if (new_cateory) {
            data[0].new_category = `${new_cateory?.cat_name}`
        }

        const time = functions.getTime();
        const vllq = await New.aggregate([
            { $match: { new_han_nop: { $gt: time }, new_title: new RegExp(data.key_lq, 'i') } },
            { $limit: 5 },
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
                    new_alias: 1,
                    new_han_nop: 1,
                    new_city: 1,
                    new_money: 1,
                    usc_logo: '$company.usc_logo',
                    usc_company: '$company.usc_company',
                    usc_create_time: '$company.usc_create_time',
                }
            }
        ]);

        const baivietlienquan = await News.aggregate([
            { $match: { new_category_id: data.new_category_id, new_title_rewrite: { $ne: alias } } },
            { $limit: 6 },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.admin_name",
                    new_des: 1
                }
            }
        ]);
        for (let i = 0; i < baivietlienquan.length; i++) {
            const element = baivietlienquan[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
        }
        const chuyenmuc = await CategoryMulti.find({}, { cat_name: 1, cat_id: 1, cat_link: 1 }).sort({ cat_name: 1 }).lean();
        const comment = await TblComment.find({ cmt_url_blog: `http://localhost:9020/blog/${data.new_title_rewrite}` }).sort({ cmt_id: -1 }).lean();

        // console.log(data[0]);
        return functions.success(res, 'success', { vllq, data: data[0], baivietlienquan, chuyenmuc, comment });
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// tác giả blog
export const AuthorBlog = async(req, res) => {
    try {
        const id = Number(req.body.id);
        if (id) {
            const adminUser = await AdminUser.findOne({ adm_id: id }).lean();
            const total = await News.countDocuments({ new_active: 1, new_new: 0, admin_id: id }).lean();
            if (adminUser) {
                return functions.success(res, 'get data success', { total, adminUser });
            }
            return functions.setError(res, 'not found', 404);
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// bí quyết viết CV
export const ChildOfBlog = async(req, res) => {
    try {
        const type = Number(req.body.type);
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;

        let url = '';
        if (type == 2) url = `bi-quyet-cv`;

        const Seo = await SeoTt.findOne({ name_page: url }).lean();

        const cateNews = await NewsCate.findOne({ cat_id: type })

        const data = await News.aggregate([
            { $match: { new_category_id: type, new_active: 1 } },
            { $sort: { new_id: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: "AdminUser",
                    localField: "adm_id",
                    foreignField: "adm_id",
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_id: 1,
                    new_picture: 1,
                    adm_id: '$adminUser.adm_id',
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    adm_picture: "$adminUser.adm_picture",
                    new_date: 1,
                    new_date_last_edit: 1,
                }
            }
        ]);
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
            // element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
            // element.adm_picture = `${process.env.DOMAIN_API}/pictures/${element.adm_picture}`;
            element.adm_picture = functions.getAvatarAdmin(element.adm_picture)
        }

        const xemnhieunhat = await News.aggregate([
            { $sort: { new_view: -1 } },
            { $limit: 4 },
            {
                $lookup: {
                    from: "AdminUser",
                    localField: "adm_id",
                    foreignField: "adm_id",
                    as: "adminUser"
                }
            },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_id: 1,
                    new_picture: 1,
                    adm_id: '$adminUser.adm_id',
                    adm_name: "$adminUser.adm_name",
                    new_des: 1
                }
            }
        ]);
        for (let i = 0; i < xemnhieunhat.length; i++) {
            const element = xemnhieunhat[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
            // element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
        }

        const tieubieutuan = await News.aggregate([
            { $match: { new_active: 1, new_new: 0, } },
            { $sort: { new_hot: -1, new_id: -1 } },
            { $limit: 5 },
            {
                $lookup: {
                    from: "AdminUser",
                    localField: "adm_id",
                    foreignField: "adm_id",
                    as: "adminUser"
                }
            },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_id: 1,
                    new_picture: 1,
                    adm_id: '$adminUser.adm_id',
                    adm_name: "$adminUser.adm_name",
                    new_des: 1
                }
            }
        ]);
        for (let i = 0; i < tieubieutuan.length; i++) {
            const element = tieubieutuan[i];
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
            // element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
        }
        const total = await News.countDocuments({ new_category_id: type, new_active: 1 });
        return functions.success(res, 'success', { total, Seo, cateNews, data, xemnhieunhat, tieubieutuan });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// blog biểu mẫu
export const BlogCate = async(req, res) => {
    try {
        const alias = req.body.alias;
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        if (alias) {
            const resultCateBieuMau = await CategoryBieuMau.findOne({ cate_alias: alias }, { cate_name: 1, cate_alias: 1 }).lean();
            const db_qrbm = await CategoryBieuMau.aggregate([
                { $match: { new_active: 1, cate_alias: alias } },
                { $skip: skip },
                { $limit: limit },
                {
                    $lookup: {
                        from: "News",
                        localField: "cate_id",
                        foreignField: "new_cate_bm",
                        as: "news"
                    }
                },
                { $unwind: "$news" },
                {
                    $lookup: {
                        from: "AdminUser",
                        localField: "news.admin_id",
                        foreignField: "adm_id",
                        as: "adminUser"
                    }
                },
                { $unwind: "$adminUser" },
                {
                    $project: {
                        new_title_rewrite: "$news.new_title_rewrite",
                        new_title: "$news.new_title",
                        new_picture: "$news.new_picture",
                        adm_name: "$adminUser.adm_name",
                        adm_id: "$adminUser.adm_id",
                    }
                }
            ]);
            for (let i = 0; i < db_qrbm.length; i++) {
                const element = db_qrbm[i];
                element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
            }
            const total = await CategoryBieuMau.countDocuments({ new_active: 1, cate_alias: alias });
            return functions.success(res, 'success', { total, resultCateBieuMau, db_qrbm });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// câu hỏi phỏng vấn
export const QuestionInterview = async(req, res) => {
    try {
        const Seo = await SeoTt.findOne({ name_page: "cau-hoi-phong-van" }).lean();
        const query = await TblCHPV.find({}).lean();
        for (let i = 0; i < query.length; i++) {
            const element = query[i];
            const result = await NewCauHoiPhongVan.find({ new_category_id: element.ch_id, new_active: 1 }).sort({ new_date: -1 }).limit(5);
            for (let j = 0; j < result.length; j++) {
                const element2 = result[j];
                element2.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element2.new_picture}`;
            }
            element.cauhoipv = result;
        }
        return functions.success(res, 'get data success', { Seo, data: query });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// Blog theo danh mục
export const BlogCateChild = async(req, res) => {
    try {
        const cateId = Number(req.body.cateId);
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        let blog = [];
        let newscate = [];
        let total = 0;
        if (cateId) {
            const queryCate = await CategoryMulti.findOne({ cat_id: cateId }, { cat_id: 1, admin_id: 1, cat_name: 1, cat_title: 1, cat_keyword: 1, cat_name_rewrite: 1, cat_picture: 1, cat_description: 1, cat_active: 1, cat_link: 1 }).lean();
            if (cateId === 53) {
                blog = await News.aggregate([
                    { $match: { new_active: 1, new_category_id: cateId } },
                    { $sort: { new_id: -1 } },
                    { $skip: skip },
                    { $limit: limit },
                    {
                        $lookup: {
                            from: "AdminUser",
                            localField: "adm_id",
                            foreignField: "adm_id",
                            as: "adminUser"
                        }
                    },
                    { $unwind: "$adminUser" },
                    {
                        $project: {
                            new_title_rewrite: 1,
                            new_title: 1,
                            new_id: 1,
                            new_picture: 1,
                            new_des: 1
                        }
                    }
                ]);
                for (let i = 0; i < blog.length; i++) {
                    const element = blog[i];
                    element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
                }
                total = await News.countDocuments({ new_active: 1, new_category_id: cateId });
                const chuyenMuc = await CategoryMulti.find({}, { cat_id: 1, cat_name: 1, cat_title: 1, cat_name_rewrite: 1, cat_link: 1, cat_count: 1 }).sort({ cat_count: -1 }).skip(skip).limit(limit);
                const tieubieutuan = await News.find({ new_active: 1 }, { new_id: 1, new_title: 1, new_title_rewrite: 1 }).sort({
                    new_view: -1
                }).limit(10).lean();
                return functions.success(res, 'success', { queryCate, blog, total, chuyenMuc, tieubieutuan });
            }
            // else if (cateId === 3) {
            //     const cate = await CategoryBieuMau.find({}).lean();
            //     for (let i = 0; i < cate.length; i++) {
            //         const element = cate[i];
            //         const blog = await News.find({ new_active: { $ne: 0, new_cate_bm: element.cate_id } }, { new_id: 1, new_title: 1, new_title_rewrite: 1, }).limit(5).lean();
            //         element.blog = blog;
            //     }
            //     return functions.success(res, 'get data success', { queryCate, cate });
            // } 
            else {
                blog = await News.aggregate([
                    { $match: { new_active: 1, new_category_id: cateId } },
                    { $sort: { new_id: -1 } },
                    { $skip: skip },
                    { $limit: limit },
                    {
                        $lookup: {
                            from: "AdminUser",
                            localField: "adm_id",
                            foreignField: "adm_id",
                            as: "adminUser"
                        }
                    },
                    { $unwind: "$adminUser" },
                    {
                        $project: {
                            new_title_rewrite: 1,
                            new_title: 1,
                            new_id: 1,
                            new_picture: 1,
                            new_des: 1,
                            new_date_last_edit: 1,
                            adm_name: "$adminUser.adm_name",
                            adm_picture: "$adminUser.adm_picture",
                        }
                    }
                ]);
                for (let i = 0; i < blog.length; i++) {
                    const element = blog[i];
                    element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
                    element.adm_picture = `${process.env.DOMAIN_API}/pictures/${element.adm_picture}`;
                }
                newscate = await NewsCate.aggregate([
                    { $match: {cat_id: cateId } },
                    { $limit: 1 },
                    {
                        $project: {
                            cat_keyword: 1,
                            cat_name_rewrite: 1,
                            cat_description: 1,
                            cat_title: 1,
                        }
                    }
                ]);
                const hotNew = await News.aggregate([{
                    $match: {
                        new_active: 1,
                        // new_hot: 1
                    }
                },
                { $sort: { new_id: -1 } },
                {
                    $limit: 72
                },
                {
                    $lookup: {
                        from: 'AdminUser',
                        localField: 'adm_id',
                        foreignField: 'adm_id',
                        as: "adminUser"
                    }
                },
                { $unwind: "$adminUser" },
                {
                    $project: {
                        new_title_rewrite: 1,
                        new_title: 1,
                        new_picture: 1,
                        new_id: 1,
                        // adm_id: "$adminUser.admin_id",
                        adm_name: "$adminUser.adm_name",
                        new_des: 1,
                        new_date: 1,
                        new_date_last_edit: 1,
                        // adm_picture: "$adminUser.adm_picture",
                    }
                }
            ]);
                total = await News.countDocuments({ new_active: 1, new_category_id: cateId });
                return functions.success(res, 'success', { total, blog, newscate, hotNew });
            }


        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// trang vàng
export const YellowPage = async(req, res) => {
    try {
        const arr = [
            { name: "Dịch vụ", image: "tv-Vector4(12).png", id: 44 },
            { name: "IT phần cứng mạng", image: "tv-Vector4(1).png", id: 46 },
            { name: "Ngân hàng, chứng khoán, đầu tư", image: "tv-Vector4(2).png", id: 34 },
            { name: "Kiến trúc, thiết kế nội thất", image: "tv_xd.png', 'id'", id: 12 },
            { name: "Thẩm định, Giám thẩm định, QL chất lượng", image: "tv-Vector4(4).png", id: 59 },
            { name: "Truyền thông", image: "tv-Vector4(5).png", id: 69 },
            { name: "Nhân sự", image: "tv-Vector4(6).png", id: 73 },
            { name: "Du lịch", image: "tv-Vector4(7).png", id: 5 },
            { name: "Nhà hàng - khách sạn", image: "tv-Vector4(8).png", id: 40 },
            { name: "Marketing,pr", image: "tv-Vector4(9).png", id: 42 },
            { name: "Tư vấn", image: "tv-Vector4(10).png", id: 47 },
            { name: "Thực phẩm đồ uống", image: "tv-Vector4(11).png", id: 49 },
        ];

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            const result = await CategoryCompany.find({ cate_type: 0, cate_pr: element.id }).limit(5).lean();
            element.company = result;
        }
        const niengiamnganhnghe = await CategoryCompany.find({ cate_type: 1, }).sort({ cate_name: 1 }).lean();
        const Seo = await SeoTt.findOne({ name_page: "home_tv" }).lean();
        return functions.success(res, 'success', { data: arr, niengiamnganhnghe, Seo });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// trang vàng theo ngành nghề
export const ListCompanyFollowJob = async(req, res) => {
    try {
        const id = Number(req.body.id);
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        if (id) {
            const nganhTieuDiem = await CategoryCompany.find({ cate_type: 0, cate_pr: id }).lean();
            const lienKetNhanh = await CategoryCompanyLk.find({ lk_pr: id }).lean();
            for (let i = 0; i < lienKetNhanh.length; i++) {
                const element = lienKetNhanh[i];
                const result = await CategoryCompany.find({ cate_type: 0, cate_pr_lk: element.lk_id }, { cate_id: 1, cate_name: 1, cate_count: 1 }).lean();
                element.categoryCompany = result;
            }
            const danhSachCongTy = await UserCompany.aggregate([
                { $match: { 'financial_sector.id': id.toString() } },
                { $sort: { usc_id: -1 } },
                { $skip: skip },
                { $limit: limit },
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
                        usc_logo: 1
                    }
                }
            ]);
            for (let i = 0; i < danhSachCongTy.length; i++) {
                const element = danhSachCongTy[i];
                element.usc_logo = functions.getAvatarNTD(element.usc_create_time, element.usc_logo);
            }
            const tuKhoaLienQuan = await CategoryCompany.find({ cate_id: { $ne: id }, cate_type: 1 }).limit(20);
            return functions.success(res, 'success', { nganhTieuDiem, lienKetNhanh, danhSachCongTy, tuKhoaLienQuan });
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// trang vàng tỉnh thành, key, tags
export const ListCompanyFollowCity = async(req, res) => {
    try {
        const tagindex = [282, 420, 680, 459, 314, 366, 460, 1178, 265, 1181, 977, 402, 786, 792, 829, 244, 584, 754, 861, 871, 1219, 84, 254, 743, 911, 1143, 1277, 587, 901, 96, 768, 1202, 345, 748, 1145, 1014, 1286, 477, 155, 200, 705, 132, 93, 716, 450, 346, 1243, 137, 528, 665, 679, 746, 113, 283, 546, 551, 112, 965, 445, 481, 529, 619, 902, 1180, 1182, 1187, 138, 247, 441, 451, 471, 494, 608, 629, 781, 958, 1038, 1217, 1218, 1220, 1242, 123, 203, 280, 307, 381, 403, 414, 489, 506, 512, 581, 594, 627, 644, 656, 1018, 1022, 1067, 1223, 1230, 1232, 1251, 1, 77, 78, 80, 79, 90, 81, 82, 150, 287, 288, 289, 291, 295, 367, 368, 369, 372, 404, 567, 582, 585, 1248, 1249, 114, 209, 124, 1279, 156, 1280, 185, 275, 91, 147, 1278, 1153, 1155, 1156, 1157, 1162, 1073, 206, 407, 426, 434, 371, 760, 761, 480, 476, 784, 183, 184, 285, 290, 340, 440, 442, 446, 447, 448, 498, 788, 791, 793, 930, 391, 530, 531, 545, 756, 769, 989, 169, 170, 482, 258, 260, 279, 174, 281, 230, 231, 308, 312, 311, 310, 365, 1095, 1096, 224, 225, 130, 378, 313, 591, 855, 641, 642, 390, 578, 579, 532, 516, 1066, 1235, 517, 668, 734, 533, 1247, 745, 409, 518, 853, 718, 1167, 1262, 1258, 616, 617, 620, 625, 639, 1082, 1083, 1159, 1166, 723, 724, 725, 727, 246, 321, 631, 611, 618, 626, 356, 352, 595, 612, 1204, 1205, 294, 298, 299, 300, 302, 303, 306, 305, 703, 708, 1177, 1179, 1188, 1189, 1191, 1193, 1194, 657, 509, 430, 318, 613, 653, 405, 747, 709, 542, 783, 794, 539, 795, 839, 801, 837, 931, 515, 815, 796, 812, 357, 385, 538, 561, 782, 190, 191, 249, 253, 398, 278, 315, 319, 105, 337, 167, 146, 636, 685, 687, 699, 707, 757, 763, 787, 678, 370, 728, 1236, 256, 143, 486, 386, 701, 704, 752, 1081, 817, 753, 819, 818, 847, 831, 832, 833, 834, 835, 201, 1158, 541, 683, 688, 217, 758, 770, 773, 774, 192, 804, 827, 828, 836, 543, 97, 502, 98, 139, 905, 454, 695, 934, 630, 913, 1270, 586, 976, 903, 469, 219, 222, 860, 904, 250, 323, 820, 914, 912, 730, 220, 824, 874, 974, 822, 221, 694, 988, 199, 187, 255, 268, 464, 467, 470, 472, 562, 922, 329, 343, 358, 623, 596, 456, 452, 92, 838, 1005, 877, 808, 959, 960, 359, 1101, 878, 1221, 1254, 1099, 879, 1246, 876, 211, 955, 1244, 1060, 1209, 194, 1233, 742, 1261, 1268, 875, 1241, 1237, 1093, 1102, 1028, 115, 1026, 455, 1025, 1027, 382, 852, 751, 1024, 721, 896, 949, 762, 947, 270, 854, 563, 856, 560, 507, 286, 1098, 677, 658, 697, 614, 245, 261, 296, 1085, 572, 1263, 1047, 419, 900, 624, 1044, 650, 722, 443, 1054, 1057, 651, 1234, 1065, 444, 1036, 1033, 1052, 1049, 649, 659, 615, 107, 168, 242, 537, 1080, 457, 883, 276, 675, 979, 1088, 331, 330, 474, 717, 735, 731, 1154, 1163, 1164, 1165, 1168, 1170, 622, 744, 858, 845, 544, 669, 670, 212, 213, 851, 684, 698, 691, 848, 1103, 1046, 1183, 897, 475, 1257, 210, 277, 327, 101, 1269, 227, 238, 810, 503, 926, 1240, 347, 348, 513, 523, 1004, 1010, 1007, 1111, 1113, 1116, 1117, 1207, 354, 1231, 388, 226, 936, 652, 672, 917, 880, 881, 180, 399, 674, 415, 171, 172, 317, 1160, 1141, 1142, 1144, 1146, 1171, 1108, 406, 736, 771, 88, 401, 117, 805, 1276, 228, 522, 374, 429, 1173, 1273, 1274, 1275, 1213, 588, 349, 324];

        const cityindex = [1, 45, 46, 26, 55, 47, 48, 58, 5, 24, 37, 2, 3, 27, 29, 9, 41, 49, 60, 11, 18, 22, 28, 44, 53, 63];
        const index_tagcity = [
            'http://localhost:9020/cong-ty-du-lich-tai-da-nang-s5u26.html',
            'http://localhost:9020/cong-ty-du-lich-tai-ha-noi-s5u1.html',
            'http://localhost:9020/cong-ty-thiet-ke-web-tai-ha-noi-s51u1.html',
            'http://localhost:9020/cong-ty-san-xuat-banh-keo-tai-ha-noi-s716u1.html',
            'http://localhost:9020/cong-ty-to-chuc-su-kien-tai-ha-noi-s65u1.html',
            'http://localhost:9020/cong-ty-thuc-pham-tai-ha-noi-s1222u1.html',
            'http://localhost:9020/cong-ty-my-pham-tai-ha-noi-s420u1.html',
            'http://localhost:9020/cong-ty-truyen-thong-tai-ha-noi-s69u1.html',
            'http://localhost:9020/cong-ty-kiem-toan-tai-ha-noi-s1192u1.html',
            'http://localhost:9020/cong-ty-noi-that-tai-da-nang-s534u26.html',
            'http://localhost:9020/cong-ty-noi-that-tai-ha-noi-s534u1.html',
            'http://localhost:9020/cong-ty-co-dien-tai-ha-noi-s265u1.html',
            'http://localhost:9020/cong-ty-xu-ly-nuoc-thai-tai-ha-noi-s511u1.html',
            'http://localhost:9020/cong-ty-san-xuat-tai-ha-noi-s1252u1.html',
            'http://localhost:9020/cong-ty-truyen-thong-tai-da-nang-s69u26.html',
            'http://localhost:9020/cong-ty-son-tai-ha-noi-s792u1.html',
            'http://localhost:9020/cong-ty-duoc-pham-tai-ha-noi-s702u1.html',
            'http://localhost:9020/cong-ty-thuc-pham-tai-bac-ninh-s1222u5.html',
            'http://localhost:9020/cong-ty-kiem-toan-tai-hai-phong-s1192u2.html',
            'http://localhost:9020/cong-ty-may-mac-tai-ha-noi-s439u1.html',
            'http://localhost:9020/cong-ty-du-lich-tai-ho-chi-minh-s5u45.html',
            'http://localhost:9020/cong-ty-van-tai-tai-hai-phong-s344u2.html',
            'http://localhost:9020/cong-ty-thoi-trang-tai-ha-noi-s1250u1.html',
            'http://localhost:9020/cong-ty-thiet-bi-y-te-tai-ha-noi-s680u1.html',
            'http://localhost:9020/cong-ty-vat-lieu-xay-dung-tai-ha-noi-s754u1.html',
            'http://localhost:9020/cong-ty-bao-bi-tai-ha-noi-s21u1.html',
            'http://localhost:9020/cong-ty-bao-ho-lao-dong-tai-ha-noi-s22u1.html',
            'http://localhost:9020/cong-ty-san-xuat-giay-tai-ha-noi-s1282u1.html',
            'http://localhost:9020/cong-ty-hoa-chat-tai-ha-noi-s366u1.html',
            'http://localhost:9020/cong-ty-ke-toan-tai-ha-noi-s1190u1.html',
            'http://localhost:9020/cong-ty-thi-cong-noi-that-tai-ha-noi-s529u1.html',
            'http://localhost:9020/cong-ty-moi-truong-tai-ha-noi-s508u1.html',
            'http://localhost:9020/cong-ty-chuyen-phat-nhanh-tai-ha-noi-s314u1.html',
            'http://localhost:9020/cong-ty-van-tai-tai-ha-noi-s344u1.html',
            'http://localhost:9020/cong-ty-nhom-kinh-tai-ha-noi-s768u1.html',
            'http://localhost:9020/cong-ty-xuat-khau-lao-dong-tai-ha-noi-s71u1.html',
            'http://localhost:9020/cong-ty-may-dong-phuc-tai-ha-noi-s450u1.html',
            'http://localhost:9020/cong-ty-may-dong-phuc-tai-ho-chi-minh-s450u45.html',
            'http://localhost:9020/cong-ty-van-chuyen-tai-ha-noi-s309u1.html',
            'http://localhost:9020/cong-ty-van-tai-tai-da-nang-s344u26.html',
            'http://localhost:9020/cong-ty-van-tai-bien-tai-hai-phong-s345u2.html',
            'http://localhost:9020/cong-ty-bao-bi-tai-hai-phong-s21u2.html',
            'http://localhost:9020/cong-ty-du-lich-tai-bac-ninh-s5u5.html',
            'http://localhost:9020/cong-ty-son-tinh-dien-tai-ha-noi-s138u1.html'
        ];
        const tag = req.body.tag;
        const city = req.body.city;
        const key = req.body.key || '';
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;

        const conditions = {};

        if (key && key != '') {
            conditions['$or'] = [
                { usc_company: new RegExp(key, 'i') },
                { usc_company_info: new RegExp(key, 'i') },
            ];
        }

        if (city) {
            conditions.usc_city = city;
        }

        let breakcrumb = `Kết quả tìm kiếm từ khóa ${key}`;
        let seo_title = '';
        let seo_des = '';
        let seo_key = '';
        let index = "noodp,noindex,nofollow";
        let tuKhoaLienQuan = [];
        if (tag && !city && key == '') {
            const cate = await CategoryCompany.find({ cate_id: tag }).lean();
            conditions['financial_sector.id'] = tag;
            breakcrumb = `Công ty ${cate.cate_name}`;
            tuKhoaLienQuan = await CategoryCompany
                .find({ cate_id: { $ne: tag }, cate_pr: { $ne: cate.pr_id }, cate_type: 0 })
                .sort({ cate_name: -1 })
                .limit(20)
                .lean();
            seo_title = `Dach sách công ty ${cate.cate_name} TopCv1s.com`;
            seo_des = `Danh sách công ty ${cate.cate_name} Thông tin các doanh nghiệp ${cate.cate_name} đang có nhu cầu tuyển dụng mới nhất. Tham khảo ngay thông tin tại TopCv1s.com`;
            seo_key = `Công ty ${cate.cate_name} danh sách công ty ${cate.cate_name} .`;
            if (tagindex.includes(tag)) index = "index,follow";
        }
        if (!tag && city && key == '') {
            const arrCity = await City.findOne({ cit_id: city }).lean();
            conditions.usc_city = city;
            breakcrumb = `Công ty tại ${arrCity.cit_name}`;
            tuKhoaLienQuan = await City.findOne({ cit_id: { $ne: city } }).sort({ cit_name: -1 }).limit(20);
            seo_title = `Danh sách công ty tại ${arrCity.cit_name} - TopCv1s.com`;
            seo_des = `Danh sách công ty tại ${arrCity.cit_name} Thông tin danh bạ doanh nghiệp tại ${arrCity.cit_name} đang có nhu cầu tuyển dụng mới nhất. Tham khảo ngay thông tin tại TopCv1s.com`;
            seo_key = `Công ty tại ${arrCity.cit_name}, danh sách công ty tại ${arrCity.cit_name}`;
            if (cityindex.includes(city)) index = "index,follow";
        }

        if (tag && city && key == '') {
            const cate = await CategoryCompany.find({ cate_id: tag }).lean();
            const arrCity = await City.findOne({ cit_id: city }).lean();
            conditions['financial_sector.id'] = tag;
            breakcrumb = `Công ty ${cate.cate_name} tại ${arrCity.cit_name}`;
            seo_title = `Danh sách công ty   ${cate.cate_name} tại ${arrCity.cit_name} - TopCv1s.com`;
            seo_des = `Danh sách công ty ${cate.cate_name} tại ${arrCity.cit_name} tuyển dụng. Thông tin công ty ${cate.cate_name} tại ${arrCity.cit_name} trên TopCv1s.com mới nhất, cập nhật thường xuyên, liên tục. Tham khảo ngay`;
            const canonical = `http://localhost:9020/cong-ty-${functions.createLinkTilte(cate.cate_name)}-tai-${functions.createLinkTilte(arrCity.cit_name)}-s${tag}u${city}`;
            if (index_tagcity.includes(canonical)) index = "index,follow";
        }
        const Seo = {
            breakcrumb,
            seo_title,
            seo_des,
            seo_key,
            index,
        };
        const company = await UserCompany.find(conditions, {
            usc_id: 1,
            usc_company: 1,
            usc_name: 1,
            usc_alias: 1,
            usc_size: 1,
            usc_address: 1,
            usc_company_info: 1,
            usc_create_time: 1,
            usc_logo: 1
        }).sort({ usc_id: -1 }).skip(skip).limit(limit).lean();
        const total = await UserCompany.countDocuments(conditions);
        return functions.success(res, 'success', { Seo, tuKhoaLienQuan, total, company });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// // chi tiết công ty
// export const DetailCompany = async (req, res) => {
//     try {
//         const id = Number(req.body.id) || -1;
//         const data = await UserCompany.findOne({ usc_id: id }).lean();
//         if (data) {
//             data.usc_logo = functions.getAvatarNTD(data.usc_create_time, data.usc_logo);
//             const rate = await TblRateCompany.find({ usc_id: id, rate_active: 1 }).lean();
//             const rateInterView = await TblRateInterview.find({ usc_id: id, rate_active: 1 }).lean();
//             const viecLam = await New.countDocuments({ new_user_id: id, new_active: 1 });
//             data.image_com = functions.getImageNTD(data.image_com);
//             const danhgia = await TblRateCompany.find({ usc_id: id, rate_active: 1 }).sort({ countStar: -1, rate_like: -1 }).lean();
//             const tin = await New.find({ new_user_id: id, new_active: 1 }, { new_id: 1, new_title: 1, new_money: 1, new_city: 1, new_han_nop: 1, new_alias: 1, new_mota: 1, new_update_time: 1, new_create_time: 1, new_thuc: 1, new_index: 1 }).sort({ new_han_nop: -1, new_update_time: -1 }).lean();
//             for (let i = 0; i < tin.length; i++) {
//                 const element = tin[i];
//                 element.apply = false;
//                 const idUse = await functions.getTokenUser(req);
//                 if (idUse) {
//                     const check = await NopHoSo.findOne({ nhs_use_id: idUse, nhs_new_id: element.new_id }, { new_id: 1 }).lean();
//                     if (check) element.apply = true;
//                 }
//             }

//         }

//         return functions.setError(res, 'missing data', 400);
//     } catch (error) {
//         return functions.setError(res, error.message);
//     }
// };

// tra cứu lương
export const SearchSalary = async(req, res) => {
    try {
        const luongTheoViTriViecLam = await TblTagsSalary.find({}, { tag_id: 1, tag_name: 1, tag_alias: 1 }).sort({ tag_id: -1 }).limit(10).lean();
        return functions.success(res, 'success', { data: luongTheoViTriViecLam });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

export const getCity = async(req, res) => {
    try {
        const { id } = req.body;
        let data = [];
        if (id) data = await City.findOne({ cit_id: id }, { cit_id: 1, cit_name: 1 }).lean();
        else data = await City.find({}, { cit_id: 1, cit_name: 1 }).lean();
        return functions.success(res, 'success', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

export const getJob = async(req, res) => {
    try {
        const data = await Category.find({}, { cat_id: 1, cat_name: 1,cat_alias:1 ,_id: 0 }).lean();
        return functions.success(res, 'success', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

export const getTagJob = async(req, res) => {
    try {
        const { id } = req.body;
        let data = [];
        if (id) data = await TblTags.find({ tag_cate_id: id }, {tag_id:1, tag_name: 1, tag_alias: 1,_id:0,tag_cate_id:1 }).lean();
        else data = await TblTags.find({}, {tag_id:1, tag_name: 1, tag_alias: 1,_id:0,tag_cate_id:1 }).lean();
        return functions.success(res, 'success', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

export const getDistrict = async(req, res) => {
    try {
        const { id } = req.body;
        let data = [];
        if (id) data = await City2.find({ cit_parent: id }, { cit_id: 1, cit_name: 1 ,cit_parent:1}).lean();
        else data = await City2.find({}, {_id: 0, cit_id: 1, cit_name: 1, cit_parent: 1 }).lean();
        data = data.map(item => ({
            ...item,
            cit_id: item.cit_id + 81
        }));
        return functions.success(res, 'success', { data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
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

// Đổ dữ liệu cho luồng đăng tin trước đăng nhập
export const getDangTin = async(req, res) => {
    try {
        // Phần này viết với mục đích demo do thiếu dữ liệu 
        // const noCateUser_Promise = Users.aggregate([
        //     {
        //         '$match': {
        //             '$or': [
        //                 {
        //                     'use_nganh_nghe': {
        //                         '$exists': false
        //                     }
        //                 }, {
        //                     'use_nganh_nghe': {
        //                         '$size': 0
        //                     }
        //                 }
        //             ]
        //         }
        //     }
        // ]).exec();
        // const [noCateUser] = await Promise.all([noCateUser_Promise])

        // for (const user of noCateUser) {
        //     const randomCategoryIds = Array.from({ length: 3 }, () => ({ id: Math.floor(Math.random() * 137) + 1 }));
        //     // user.category = randomCategoryIds.map(id => ({ id }));
        //     // await user.save();
        //     await Users.findOneAndUpdate({ use_id: user.use_id }, { $set: { use_nganh_nghe: randomCategoryIds } })
        // }

        // const noCityUser_Promise = Users.aggregate([
        //     {
        //         '$match': {
        //             '$or': [
        //                 {
        //                     'use_city_job': {
        //                         '$exists': false
        //                     }
        //                 }, {
        //                     'use_city_job': {
        //                         '$size': 0
        //                     }
        //                 }
        //             ]
        //         }
        //     }
        // ]).exec();
        // const [noCityUser] = await Promise.all([noCityUser_Promise])

        // for (const user of noCityUser) {
        //     const randomCategoryIds = Array.from({ length: 3 }, () => ({ id: Math.floor(Math.random() * 63) + 1 }));
        //     // user.category = randomCategoryIds.map(id => ({ id }));
        //     // await user.save();
        //     await Users.findOneAndUpdate({ use_id: user.use_id }, { $set: { use_city_job: randomCategoryIds } })
        // }

        const city = Number(req.body.city)
        const keywords = req.body.keywords
        const topCate_Promise = Users.aggregate([{
            '$unwind': {
                'path': '$use_nganh_nghe',
                'includeArrayIndex': 'string',
                'preserveNullAndEmptyArrays': false
            }
        }, {
            '$group': {
                '_id': '$use_nganh_nghe.id',
                'count': {
                    '$sum': 1
                }
            }
        }, {
            '$sort': {
                'count': -1,
                '_id': -1
            }
        }, {
            '$limit': 4
        }])
        let conditions = { usc_search: 1 }
        if (city) conditions["use_city_job.id"] = `${city}`;
        if (keywords && typeof keywords === 'string' && keywords.trim()) conditions.use_name = new RegExp(keySearch(keywords.trim()), 'i');
        const topUser_Promise = Users.aggregate([{
                $match: conditions
            },
            {
                $sort: { use_update_time: -1, use_id: -1 }
            },
            {
                $limit: 72
            },
            {
                $project: {
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
                    exp_years: 1,
                    is_login: 1
                }
            }
        ])
        const [
            topCate,
            Cityy,
            topUser
        ] = await Promise.all([
            topCate_Promise,
            City.find({}, { cit_id: 1, cit_name: 1 }).lean(),
            topUser_Promise,
        ])

        for (let i = 0; i < topUser.length; i++) {
            const element = topUser[i];
            element.use_logo = functions.getAvatarCandi(element.use_create_time, element.use_logo);
            const nameCity = element.use_city_job;
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm.id));
                if (city) cityArr.push(city.cit_name);
            })
            element.use_city_job_name = cityArr;
        }

        let uvNganhNghe = []
        if (Array.isArray(topCate) && topCate.length > 0) {
            for (const cate of topCate) {
                const user_Promise = Users.aggregate([{
                        $match: {
                            // ...conditions,
                            "use_nganh_nghe.id": cate._id,
                            usc_search: 1,
                        }
                    },
                    {
                        $sort: { use_update_time: -1, use_id: -1 }
                    },
                    {
                        $limit: 72
                    },
                    {
                        $project: {
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
                            exp_years: 1,
                            is_login: 1
                        }
                    }
                ])

                const [user] = await Promise.all([user_Promise])
                for (let i = 0; i < user.length; i++) {
                    const element = user[i];
                    element.use_logo = functions.getAvatarCandi(element.use_create_time, element.use_logo);
                    const nameCity = element.use_city_job;
                    const cityArr = [];
                    if (nameCity.length > 0) nameCity.map((itemm) => {
                        const city = Cityy.find((item) => (item.cit_id == itemm.id));
                        if (city) cityArr.push(city.cit_name);
                    })
                    element.use_city_job_name = cityArr;
                }

                uvNganhNghe.push({
                    id_job: cate._id,
                    total: user.length,
                    data: user,
                })
            }
        }

        return functions.success(res, 'success', { total: topUser.length, data: topUser, uvNganhNghe });
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Tìm kiếm ở trang đăng tin
export const getDangTinSearch = async(req, res) => {
    try {
        const city = Number(req.body.city)
        const keywords = req.body.keywords

        let conditions = { usc_search: 1 }
        if (city) conditions["use_city_job.id"] = `${city}`;
        if (keywords && typeof keywords === 'string' && keywords.trim()) conditions.use_name = new RegExp(keySearch(keywords.trim()), 'i');

        const topUser_Promise = Users.aggregate([{
                $match: conditions
            },
            {
                $sort: { use_update_time: -1, use_id: -1 }
            },
            {
                $limit: 72
            },
            {
                $project: {
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
                    exp_years: 1,
                    is_login: 1
                }
            }
        ])

        const [
            // topCate,
            Cityy,
            topUser
        ] = await Promise.all([
            // topCate_Promise,
            City.find({}, { cit_id: 1, cit_name: 1 }).lean(),
            topUser_Promise,
        ])

        for (let i = 0; i < topUser.length; i++) {
            const element = topUser[i];
            element.use_logo = functions.getAvatarCandi(element.use_create_time, element.use_logo);
            const nameCity = element.use_city_job;
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm.id));
                if (city) cityArr.push(city.cit_name);
            })
            element.use_city_job_name = cityArr;
        }

        return functions.success(res, 'success', { total: topUser.length, data: topUser })
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Ngôn ngữ CV
export const GetLanguageCv = async(req, res) => {
    try {
        const data = await LanguageCv.find({})

        return functions.success(res, 'Ngôn ngữ CV', { data: data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Ngành nghề CV 
export const getCateCV = async(req, res) => {
    try {
        const data = await NganhCv.find({})

        return functions.success(res, 'Ngành nghề CV', { data: data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Danh mục bổ sung
export const GetTtbsCate = async(req, res) => {
    try {
        try {
            const data = await ttbsCate.find({})

            return functions.success(res, 'Danh mục bổ sung', { data: data })
        } catch (error) {
            return functions.setError(res, error.message)
        }
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Chi tiết bổ sung
export const detailTtbsDetail = async(req, res) => {
    try {
        const {
            id
        } = req.body
        if (id) {
            const checkExist = await ttbsDetail.findOne({ idcate: Number(id) })
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

// Luồng mới: Do trang blog, tin và chi tiết ntd có url giống nhau
// Chi tiết blog | tin | ntd theo url
export const detailBlog_New_Ntd = async(req, res) => {
    try {
        const {
            alias
        } = req.body
        const currentTime = Math.floor(Date.now() / 1000);
        // type: 1 - tin | 2 - ntd | 3 - blog
        let type = 0

        // Ưu tiên theo thứ tự này 

        if (alias && typeof alias === 'string') {

            // Tin
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
                    const conditions = { new_city: { $in: arrCity },new_cat_id:new_cat_id, new_active: 1, new_thuc: 1, new_id: { $ne: id } };
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
                        new_tag: 1,
                        new_real_cate: 1,
                        new_money_type: 1,
                        new_money_from: 1,
                        new_money_to: 1,
                        new_phonecontact: 1,
                        new_emailcontact: 1,
                        new_alias: 1,
                    };

                    // const name_tag = await 
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
                    const updateView_Promise = New.findOneAndUpdate({ new_id: id }, { $inc: { new_view_count: +1 } });
                    const Blog_Promise = News.find({}, { new_id: 1, new_title: 1, new_picture: 1, new_des: 1 }).sort({ new_id: -1 }).limit(3).lean()
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
                        updateView,
                        Blog,
                        checkSaveNew,
                        checkApply,
                        viecLamTuongTu,
                    ] = await Promise.all([
                        com_promise,
                        cate_Promise,
                        City.find({}, { cit_id: 1, cit_name: 1 }).lean(),
                        updateView_Promise,
                        Blog_Promise,
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
                    for (let i = 0; i < Blog.length; i++) {
                        const element = Blog[i];
                        element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`
                    }

                    data.apply = checkApply ? true : false;
                    data.Blog = Blog;
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
                                new_nganh: 1,
                                usc_alias: "$company.usc_alias",
                                new_han_nop: 1,
                                new_alias: 1,
                                is_login: 1
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
                        // conditions = finan_sect.length > 0 ? { new_nganh: { $in: finan_sect }, new_active: 1 } : { new_active: 1 }
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
                                from: "AdminUser",
                                localField: "adm_id",
                                foreignField: "adm_id",
                                as: "adminUser",
                            }
                        },
                        { $unwind: { path: "$adminUser", preserveNullAndEmptyArrays: true } },
                        {
                            $project: {
                                new_id: 1,
                                new_title: 1,
                                new_title_rewrite: 1,
                                new_picture: 1,
                                new_des: 1,
                                new_date: 1,
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
                    data.blog = blogs
                    return functions.success(res, 'get data success', { point: endPoint, data, type });
                }
            }

            // Blog
            // Tìm theo alias 
            if (alias) {
                const data_Promise = News.aggregate([{
                        $match: { new_title_rewrite: alias }
                    },
                    {
                        $lookup: {
                            from: 'AdminUser',
                            localField: 'adm_id',
                            foreignField: 'adm_id',
                            as: "adminUser"
                        }
                    },
                    { $unwind: "$adminUser" },
                    {
                        $project: {
                            new_new: 1,
                            new_tt: 1,
                            cat_new_lq: 1,
                            new_time_edit: 1,
                            title_suggest: 1,
                            new_title: 1,
                            new_description: 1,
                            new_admin_edit: 1,
                            new_teaser: 1,
                            new_keyword: 1,
                            new_category_id: 1,
                            new_audio: 1,
                            new_active: 1,
                            new_order: 1,
                            new_edited: 1,
                            new_url_lq: 1,
                            new_id: 1,
                            new_cate_bm: 1,
                            content_suggest: 1,
                            new_title_rewrite: 1,
                            new_index: 1,
                            lang_id: 1,
                            new_301: 1,
                            new_date_last_edit: 1,
                            new_hits: 1,
                            new_hot: 1,
                            new_picture: 1,
                            new_picture_web: 1,
                            new_des: 1,
                            new_audio_ai: 1,
                            admin_id: 1,
                            key_lq: 1,
                            new_date: 1,
                            new_view: 1,
                            adm_name: "$adminUser.adm_name",
                            adm_picture: "$adminUser.adm_picture",
                        }
                    }
                ]).exec();

                const [data] = await Promise.all([data_Promise])

                if (data.length > 0) {
                    type = 3

                    // const data = await News.findOne({ new_id: id }).lean();
                    data[0].new_picture = `${process.env.DOMAIN_API}/pictures/${data[0].new_picture}`;
                    // data[0].adm_picture = `${process.env.DOMAIN_API}/pictures/${data[0].adm_picture}`;
                    data[0].adm_picture = functions.getAvatarAdmin(data[0].adm_picture)

                    const new_cateory = await NewsCate.findOne({ cat_id: data[0].new_category_id })
                    if (new_cateory) {
                        data[0].new_category = `${new_cateory?.cat_name}`
                    }

                    const time = functions.getTime();
                    const vllq = await New.aggregate([
                        { $match: { new_han_nop: { $gt: time }, new_title: new RegExp(data.key_lq, 'i') } },
                        { $limit: 5 },
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
                                new_alias: 1,
                                new_han_nop: 1,
                                new_city: 1,
                                new_money: 1,
                                new_money_from: 1,
                                new_money_to: 1,
                                new_money_type: 1,
                                new_category_id: 1,
                                usc_logo: '$company.usc_logo',
                                usc_alias: '$company.usc_alias',
                                usc_company: '$company.usc_company',
                                usc_create_time: '$company.usc_create_time',
                            }
                        }
                    ]);
                    const blogNew = await News.aggregate([{
                        $match: {
                            new_active: 1,
                        }
                    },
                    { $sort: { new_id: -1 } },
                    {
                        $limit: 72
                    },
                    {
                        $lookup: {
                            from: 'AdminUser',
                            localField: 'adm_id',
                            foreignField: 'adm_id',
                            as: "adminUser"
                        }
                    },
                    { $unwind: "$adminUser" },
                    {
                        $project: {
                            new_title_rewrite: 1,
                            new_title: 1,
                            new_picture: 1,
                            new_id: 1,
                            // adm_id: "$adminUser.admin_id",
                            adm_name: "$adminUser.adm_name",
                            new_des: 1,
                            new_date: 1,
                            new_date_last_edit: 1,
                            // adm_picture: "$adminUser.adm_picture",
                        }
                    }
                    ]);
                    const baivietlienquan = await News.aggregate([
                        { $match: { new_category_id: data.new_category_id, new_title_rewrite: { $ne: alias } } },
                        { $limit: 6 },
                        {
                            $lookup: {
                                from: 'AdminUser',
                                localField: 'adm_id',
                                foreignField: 'adm_id',
                                as: "adminUser"
                            }
                        },
                        { $unwind: "$adminUser" },
                        {
                            $project: {
                                new_title_rewrite: 1,
                                new_title: 1,
                                new_picture: 1,
                                new_id: 1,
                                adm_id: "$adminUser.admin_id",
                                adm_name: "$adminUser.admin_name",
                                new_des: 1
                            }
                        }
                    ]);
                    
                    for (let i = 0; i < baivietlienquan.length; i++) {
                        const element = baivietlienquan[i];
                        element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
                    }
                    const chuyenmuc = await CategoryMulti.find({}, { cat_name: 1, cat_id: 1, cat_link: 1 }).sort({ cat_name: 1 }).lean();
                    const comment = await TblComment.find({ cmt_url_blog: `http://localhost:9020/blog/${data.new_title_rewrite}` }).sort({ cmt_id: -1 }).lean();

                    // console.log(data[0]);
                    return functions.success(res, 'success', { vllq, data: data[0], baivietlienquan, chuyenmuc, comment, type, blogNew });
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

export const checkAliasBlog = async(req, res) => {
    try {
        let {
            alias
        } = req.body
        if (alias) {
            if (alias.includes('/')) { alias = alias.replace('/', '') }
            const checkExist = await News.findOne({ new_title_rewrite: alias })
            if (checkExist) {
                return functions.success(res, 'Tồn tại')
            }
            return functions.setError(res, 'not found', 404)
        }
        return functions.setError(res, 'Missing data', 400)

    } catch (error) {
        return functions.setError(res, error.message)
    }
}

let data_home_ejs = {};
export const trangChuEjs = async(req, res) => {
    try {
        const data = {};
        let flag = true;
        if (Object.keys(data_home_ejs).length) {
            flag = false;
            res.render('trang-chu', {
                ...data_home_ejs
            });
            // functions.success(res, 'success', { data: data_home });
        }

        const time = functions.getTime();
        const idNewHot = [];
        const idNewCao = [];
        // const idCompany = []
        const idCompany = await UserCompany.distinct('usc_id')

        const HotNewGhimTin_Promise = await NewGhimTin.find({ expired: { $gt: time } })
            // const UserCompany_Promise = await UserCompany.find()

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

        // for (let i = 0; i < UserCompany_Promise.length; i++) {
        //     idCompany.push(UserCompany_Promise[i].usc_id)
        // }

        const ViecLamHapDan_Promise = await New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1
                }
            }
        ]);

        const ViecLamThuongHieu_Promise = await New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_cao: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1
                }
            }
        ]);

        // Đẩy thêm 15 tin thường lên việc làm hấp dẫn, việc làm lương cao trên trang chủ (sắp xếp theo thời gian cập nhật)
        const TinThuongHapDan_Promise = New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1,
                    tinthuong: true,
                }
            }
        ])

        const TinThuongThuongHieu_Promise = New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1,
                    tinthuong: true,
                }
            }
        ])

        const tinTucNoiBat_Promise = News.aggregate([{
                $match: {
                    new_active: 1
                }
            },
            { $sort: { new_id: -1 } },
            {
                $limit: 12
            },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    // adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    new_date: 1,
                    new_date_last_edit: 1,
                    // adm_picture: "$adminUser.adm_picture",
                }
            }
        ])

        const com_promise = UserCompany.distinct("usc_id")

        const [
            // seo,
            ViecLamHapDan,
            TinThuongHapDan,
            ViecLamThuongHieu,
            TinThuongThuongHieu,
            // blog,
            Cityy,
            tinTucNoiBat,
            com
        ] =
        await Promise.all([
            // seo_Promise,
            ViecLamHapDan_Promise,
            TinThuongHapDan_Promise,
            ViecLamThuongHieu_Promise,
            TinThuongThuongHieu_Promise,
            // blog_Promise,
            City.find({}, { cit_id: 1, cit_name: 1, cit_alias: 1 }).lean(),
            tinTucNoiBat_Promise,
            com_promise,
            // nganhNgheNoiBat_Promise
        ]);

        const leng_hapDan = ViecLamHapDan.length;
        for (let i = 0; i < leng_hapDan; i++) {
            const element = ViecLamHapDan[i];
            element.usc_logo = functions.getAvatarNTD2(element.usc_create_time, element.usc_logo);

            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;
            element.new_money_name = functions.getMucLuong(element.new_money_type, element.new_money_from, element.new_money_to, element.new_money)
            element.new_han_nop = functions.getHanNop(element.new_han_nop)
        }
        // console.log('ViecLamHapDan', ViecLamHapDan);

        const leng_thuongHieu = ViecLamThuongHieu.length;
        for (let i = 0; i < leng_thuongHieu; i++) {
            const element = ViecLamThuongHieu[i];
            element.usc_logo = functions.getAvatarNTD2(element.usc_create_time, element.usc_logo);
            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;
            element.new_money_name = functions.getMucLuong(element.new_money_type, element.new_money_from, element.new_money_to, element.new_money)
            element.new_han_nop = functions.getHanNop(element.new_han_nop)

        }

        if (leng_hapDan < 30) {
            const leng_tinthuonghapdan = TinThuongHapDan.length;
            for (let i = 0; i < leng_tinthuonghapdan; i++) {
                const element = TinThuongHapDan[i];
                element.usc_logo = functions.getAvatarNTD2(element.usc_create_time, element.usc_logo);

                const nameCity = element.new_city.split(',');
                const cityArr = [];
                if (nameCity.length > 0) nameCity.map((itemm) => {
                    const city = Cityy.find((item) => (item.cit_id == itemm));
                    if (city) cityArr.push(city.cit_name);
                });
                element.new_city = cityArr;
                element.new_money_name = functions.getMucLuong(element.new_money_type, element.new_money_from, element.new_money_to, element.new_money)
                element.new_han_nop = functions.getHanNop(element.new_han_nop)

            }
        }

        if (leng_thuongHieu < 30) {
            const leng_tinthuongthuonghieu = TinThuongThuongHieu.length;
            for (let i = 0; i < leng_tinthuongthuonghieu; i++) {
                const element = TinThuongThuongHieu[i];
                element.usc_logo = functions.getAvatarNTD2(element.usc_create_time, element.usc_logo);
                const nameCity = element.new_city.split(',');
                const cityArr = [];
                if (nameCity.length > 0) nameCity.map((itemm) => {
                    const city = Cityy.find((item) => (item.cit_id == itemm));
                    if (city) cityArr.push(city.cit_name);
                });
                element.new_city = cityArr;
                element.new_money_name = functions.getMucLuong(element.new_money_type, element.new_money_from, element.new_money_to, element.new_money)
                element.new_han_nop = functions.getHanNop(element.new_han_nop)

            }
        }

        let nganhNgheNoiBat = []
        const arr = ['9', '13', '2', '14', '33', '27', '66', '10'];

        const JobNumber = await Promise.all(
            arr.map(item => (
                // New.countDocuments({ new_cat_id: { $regex: item, $options: 'i' }, new_active: 1, new_han_nop: { $gt: new Date().getTime() / 1000 } })
                New.countDocuments({ new_cat_id: new RegExp(`(^|,)${item}(,|$)`), new_active: 1, new_han_nop: { $gt: new Date().getTime() / 1000 }, new_user_id: { $in: com } })
            ))
        );

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            nganhNgheNoiBat.push({
                _id: element,
                count: JobNumber[i]
            })
        }

        for (let i = 0; i < tinTucNoiBat.length; i++) {
            const element = tinTucNoiBat[i];
            // element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
            element.new_display_date = functions.getDate(element.new_date_last_edit * 1000)
        }

        data.ViecLamHapDan = ViecLamHapDan.length < 30 ? [...ViecLamHapDan, ...TinThuongHapDan] : [...ViecLamHapDan];
        data.ViecLamThuongHieu = ViecLamThuongHieu.length < 30 ? [...ViecLamThuongHieu, ...TinThuongThuongHieu] : [...ViecLamThuongHieu];
        data.TinThuongHapDan = TinThuongHapDan;
        data.TinThuongThuongHieu = TinThuongThuongHieu;

        data.JobNumber = JobNumber;
        data.nganhNgheNoiBat = nganhNgheNoiBat;
        data.tinTucNoiBat = tinTucNoiBat;
        data.Cityy = Cityy
        data_home_ejs = data;

        if (flag) {
            // functions.success(res, 'success', { data });
            res.render('trang-chu', {
                ...data_home_ejs
            });
        }
        return true
    } catch (error) {
        console.error(error);
        res.json(error)
    }
}

let data_home_ejs2 = {};
export const trangChuEjs2 = async(req, res) => {
    try {
        const data = {};
        let flag = true;
        if (Object.keys(data_home_ejs2).length) {
            flag = false;
            res.render('trang-chu2', {
                ...data_home_ejs2
            });
            // functions.success(res, 'success', { data: data_home });
        }

        const time = functions.getTime();
        const idNewHot = [];
        const idNewCao = [];
        // const idCompany = []
        const idCompany = await UserCompany.distinct('usc_id')

        const HotNewGhimTin_Promise = await NewGhimTin.find({ expired: { $gt: time } })
            // const UserCompany_Promise = await UserCompany.find()

        // if (time - last_sitemap_time >= 86400) {
        //     last_sitemap_time = time
        //     genSitemap()
        // }

        for (let i = 0; i < HotNewGhimTin_Promise.length; i++) {
            if (HotNewGhimTin_Promise[i].new_hot === 1) {
                idNewHot.push(HotNewGhimTin_Promise[i].new_id)
            }
            if (HotNewGhimTin_Promise[i].new_cao === 1) {
                idNewCao.push(HotNewGhimTin_Promise[i].new_id)
            }
        }

        // for (let i = 0; i < UserCompany_Promise.length; i++) {
        //     idCompany.push(UserCompany_Promise[i].usc_id)
        // }

        const ViecLamHapDan_Promise = await New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1
                }
            }
        ]);

        const ViecLamThuongHieu_Promise = await New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_cao: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1
                }
            }
        ]);

        // Đẩy thêm 15 tin thường lên việc làm hấp dẫn, việc làm lương cao trên trang chủ (sắp xếp theo thời gian cập nhật)
        const TinThuongHapDan_Promise = New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1,
                    tinthuong: true,
                }
            }
        ])

        const TinThuongThuongHieu_Promise = New.aggregate([{
                $match: {
                    new_active: 1,
                    new_thuc: 1,
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
                    new_index: 1,
                    new_thuc: 1,
                    new_city: 1,
                    new_hot: 1,
                    new_update_time: 1,
                    new_money_type: 1,
                    new_money_from: 1,
                    new_money_to: 1,
                    tinthuong: true,
                }
            }
        ])

        const tinTucNoiBat_Promise = News.aggregate([{
                $match: {
                    new_active: 1
                }
            },
            { $sort: { new_id: -1 } },
            {
                $limit: 12
            },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    // adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    new_date: 1,
                    new_date_last_edit: 1,
                    // adm_picture: "$adminUser.adm_picture",
                }
            }
        ])

        const com_promise = UserCompany.distinct("usc_id")

        const [
            // seo,
            ViecLamHapDan,
            TinThuongHapDan,
            ViecLamThuongHieu,
            TinThuongThuongHieu,
            // blog,
            Cityy,
            tinTucNoiBat,
            com
        ] =
        await Promise.all([
            // seo_Promise,
            ViecLamHapDan_Promise,
            TinThuongHapDan_Promise,
            ViecLamThuongHieu_Promise,
            TinThuongThuongHieu_Promise,
            // blog_Promise,
            City.find({}, { cit_id: 1, cit_name: 1, cit_alias: 1 }).lean(),
            tinTucNoiBat_Promise,
            com_promise,
            // nganhNgheNoiBat_Promise
        ]);

        const leng_hapDan = ViecLamHapDan.length;
        for (let i = 0; i < leng_hapDan; i++) {
            const element = ViecLamHapDan[i];
            element.usc_logo = functions.getAvatarNTD2(element.usc_create_time, element.usc_logo);

            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;
            element.new_money_name = functions.getMucLuong(element.new_money_type, element.new_money_from, element.new_money_to, element.new_money)
            element.new_han_nop = functions.getHanNop(element.new_han_nop)
        }
        // console.log('ViecLamHapDan', ViecLamHapDan);

        const leng_thuongHieu = ViecLamThuongHieu.length;
        for (let i = 0; i < leng_thuongHieu; i++) {
            const element = ViecLamThuongHieu[i];
            element.usc_logo = functions.getAvatarNTD2(element.usc_create_time, element.usc_logo);
            const nameCity = element.new_city.split(',');
            const cityArr = [];
            if (nameCity.length > 0) nameCity.map((itemm) => {
                const city = Cityy.find((item) => (item.cit_id == itemm));
                if (city) cityArr.push(city.cit_name);
            });
            element.new_city = cityArr;
            element.new_money_name = functions.getMucLuong(element.new_money_type, element.new_money_from, element.new_money_to, element.new_money)
            element.new_han_nop = functions.getHanNop(element.new_han_nop)

        }

        if (leng_hapDan < 30) {
            const leng_tinthuonghapdan = TinThuongHapDan.length;
            for (let i = 0; i < leng_tinthuonghapdan; i++) {
                const element = TinThuongHapDan[i];
                element.usc_logo = functions.getAvatarNTD2(element.usc_create_time, element.usc_logo);

                const nameCity = element.new_city.split(',');
                const cityArr = [];
                if (nameCity.length > 0) nameCity.map((itemm) => {
                    const city = Cityy.find((item) => (item.cit_id == itemm));
                    if (city) cityArr.push(city.cit_name);
                });
                element.new_city = cityArr;
                element.new_money_name = functions.getMucLuong(element.new_money_type, element.new_money_from, element.new_money_to, element.new_money)
                element.new_han_nop = functions.getHanNop(element.new_han_nop)

            }
        }

        if (leng_thuongHieu < 30) {
            const leng_tinthuongthuonghieu = TinThuongThuongHieu.length;
            for (let i = 0; i < leng_tinthuongthuonghieu; i++) {
                const element = TinThuongThuongHieu[i];
                element.usc_logo = functions.getAvatarNTD2(element.usc_create_time, element.usc_logo);
                const nameCity = element.new_city.split(',');
                const cityArr = [];
                if (nameCity.length > 0) nameCity.map((itemm) => {
                    const city = Cityy.find((item) => (item.cit_id == itemm));
                    if (city) cityArr.push(city.cit_name);
                });
                element.new_city = cityArr;
                element.new_money_name = functions.getMucLuong(element.new_money_type, element.new_money_from, element.new_money_to, element.new_money)
                element.new_han_nop = functions.getHanNop(element.new_han_nop)

            }
        }

        let nganhNgheNoiBat = []
        const arr = ['9', '13', '2', '14', '33', '27', '66', '10'];

        const JobNumber = await Promise.all(
            arr.map(item => (
                // New.countDocuments({ new_cat_id: { $regex: item, $options: 'i' }, new_active: 1, new_han_nop: { $gt: new Date().getTime() / 1000 } })
                New.countDocuments({ new_cat_id: new RegExp(`(^|,)${item}(,|$)`), new_active: 1, new_han_nop: { $gt: new Date().getTime() / 1000 }, new_user_id: { $in: com } })
            ))
        );

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            nganhNgheNoiBat.push({
                _id: element,
                count: JobNumber[i]
            })
        }

        for (let i = 0; i < tinTucNoiBat.length; i++) {
            const element = tinTucNoiBat[i];
            // element.new_picture = `${process.env.DOMAIN_API}/pictures/news/${element.new_picture}`;
            element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
            element.new_display_date = functions.getDate(element.new_date_last_edit * 1000)
        }

        data.ViecLamHapDan = ViecLamHapDan.length < 30 ? [...ViecLamHapDan, ...TinThuongHapDan] : [...ViecLamHapDan];
        data.ViecLamThuongHieu = ViecLamThuongHieu.length < 30 ? [...ViecLamThuongHieu, ...TinThuongThuongHieu] : [...ViecLamThuongHieu];
        data.TinThuongHapDan = TinThuongHapDan;
        data.TinThuongThuongHieu = TinThuongThuongHieu;

        data.JobNumber = JobNumber;
        data.nganhNgheNoiBat = nganhNgheNoiBat;
        data.tinTucNoiBat = tinTucNoiBat;
        data.Cityy = Cityy
        data_home_ejs2 = data;

        if (flag) {
            // functions.success(res, 'success', { data });
            res.render('trang-chu2', {
                ...data_home_ejs2
            });
        }
        return true
    } catch (error) {
        console.error(error);
        res.json(error)
    }
}

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
            work_option: 1,
            cap_bac_mong_muon: 1,
            salary: 1,
            muc_tieu_nghe_nghiep: 1,
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
            { $sort: { usc_view_count: -1 } },
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


// Blog theo tác giả

export const BlogByAdmin = async (req, res) => {
    try {
        const adminId = Number(req.body.id);
        const page = Number(req.body.page) || 1;
        const pageSize = Number(req.body.pageSize) || 10;
        const skip = (page - 1) * pageSize;
        const limit = pageSize;
        const adminData = await AdminUser.findOne({ adm_id: adminId }, { adm_picture: 1, adm_name: 1, adm_id: 1 }).lean();
        const adminPosts = await News.aggregate([
            { $match: { admin_id: adminId, new_active: 1 } },
            { $sort: { new_id: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    adm_id: "$adminUser.adm_id",
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    new_date: 1,
                    new_date_last_edit: 1,
                    adm_picture: "$adminUser.adm_picture",
                }
            }
        ]);
            const hotNew = await News.aggregate([{
                $match: {
                    new_active: 1,
                }
            },
            { $sort: { new_id: -1 } },
            {
                $limit: 72
            },
            {
                $lookup: {
                    from: 'AdminUser',
                    localField: 'adm_id',
                    foreignField: 'adm_id',
                    as: "adminUser"
                }
            },
            { $unwind: "$adminUser" },
            {
                $project: {
                    new_title_rewrite: 1,
                    new_title: 1,
                    new_picture: 1,
                    new_id: 1,
                    // adm_id: "$adminUser.admin_id",
                    adm_name: "$adminUser.adm_name",
                    new_des: 1,
                    new_date: 1,
                    new_date_last_edit: 1,
                    // adm_picture: "$adminUser.adm_picture",
                }
            }
        ])
        if(hotNew.length > 0){
            for (let i = 0; i < hotNew.length; i++) {
                const element = hotNew[i];
                element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
    
            }
        }
        if(adminPosts.length > 0){
            for (let i = 0; i < adminPosts.length; i++) {
                const element = adminPosts[i];
                element.new_picture = `${process.env.DOMAIN_API}/pictures/${element.new_picture}`;
                element.adm_picture = functions.getAvatarAdmin(element.adm_picture);
            }
        }
        const totalPosts = await News.countDocuments({ admin_id: adminId, new_active: 1 }).lean();

        return functions.success(res, 'success', { total: totalPosts, data: adminPosts,hotNew,adminData });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};
export const GetNewAi = async (req, res) => {
    try {
        const {
            new_title,
            new_alias,
            new_cate_id,
            new_category,
            new_city,
            new_qh_id,
            new_addr,
            new_money,
            new_cap_bac,
            new_exp,
            new_bang_cap,
            new_gioi_tinh,
            new_so_luong,
            new_hinh_thuc,
            new_create_time,
            new_han_nop,
            new_mota,
            new_quyenloi,
            new_yeucau,
            company_name,
            new_usercontact,
            new_phonecontact,
            new_emailcontact,
        } = req.body;  // Nhận dữ liệu từ body của request

        const new_id = await functions.getMaxId(NewAI, 'new_id');

        // Tạo dữ liệu mới
        const data = {
            new_id,
            new_title,
            new_alias,
            new_cate_id,
            new_category,
            new_city,
            new_qh_id,
            new_addr,
            new_money,
            new_cap_bac,
            new_exp,
            new_bang_cap,
            new_gioi_tinh,
            new_so_luong,
            new_hinh_thuc,
            new_create_time,
            new_create_time2: functions.getTime(),
            new_han_nop,
            new_usercontact,
            new_phonecontact,
            new_emailcontact,
            new_mota,
            new_yeucau,
            new_quyenloi,
            new_company_name: company_name || '',
        };

        // Lưu vào MongoDB
        const newJob = await NewAI.create(data);

        return res.status(200).json({
            success: true,
            message: 'Thêm tin thành công!',
            data: newJob,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi khi thêm tin',
            error: error.message
        });
    }
}
export const NewAiDetail = async (req, res) => {
    const { id } = req.body;
    try {
        const data = await NewAI.findOne({ new_id: id });
        if (!data) {
            return res.status(404).json({ message: 'Không tìm thấy dữ liệu với id này' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi máy chủ', error });
    }
}
