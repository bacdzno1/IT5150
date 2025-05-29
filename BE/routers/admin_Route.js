import express from 'express';
// import formdata from 'express-form-data';
import * as functions from "../services/functions.js";
import * as Admin from "../controllers/admin_Controller.js";
import formData from 'express-form-data';
const router = express.Router();

// Lấy danh sách nhiều loại
router.post('/list', functions.checkAdminToken(), Admin.list);

// Lấy total của danh sách
router.post('/count', functions.checkAdminToken(), Admin.count);

// Login
router.post('/login', Admin.Login);

// Tạo gói điểm
router.post('/CreatePoint', functions.checkAdminToken(), Admin.CreatePoint);

// Sửa gói
router.post('/UpdatePoint', functions.checkAdminToken(), Admin.UpdatePoint);

// Chi tiết gói
router.post('/DetailPoint', functions.checkAdminToken(), Admin.DetailPoint);

// Cộng (trừ) điểm
router.post('/EditPointCompany', functions.checkAdminToken(), Admin.EditPointCompany);

// Cộng (trừ) điểm mới
router.post('/AddSubPointCompany', functions.checkAdminToken(), Admin.AddSubPointCompany);

// Chi tiết điểm của ntd
router.post('/DetailPointCompany', functions.checkAdminToken(), Admin.DetailPointCompany);

// Ghim tin
router.post('/PinNew', functions.checkAdminToken(), Admin.PinNew);

// Thông tin ghim tin 
router.post('/DetailPinNew', functions.checkAdminToken(), Admin.DetailPinNew);

// Xác thực tài khoản
router.post('/VerifyAccount', functions.checkAdminToken(), Admin.VerifyAccount);

// Admin đăng nhập NTD (UV)
router.post('/LoginAs', functions.checkAdminToken(), Admin.LoginAs)

// CV UV
router.post('/getAllCandiCV', functions.checkAdminToken(), Admin.getAllCandiCV);

// Ẩn hiện
router.post('/showHide', functions.checkAdminToken(), Admin.showHide);

// Từ chối ứng viên đăng ký lỗi
router.post('/denyUserRegisterFail', functions.checkAdminToken(), Admin.denyUserRegisterFail);

// Thêm NTD
router.post('/createEmployer', formData.parse(), functions.checkAdminToken(), Admin.createEmployer);

// Chi tiết NTD
router.post('/detailEmployer', functions.checkAdminToken(), Admin.detailEmployer);

// Sửa NTD
router.post('/editEmployer', formData.parse(), functions.checkAdminToken(), Admin.editEmployer);

// Lĩnh vực tài chính
router.post('/financialSectors', functions.checkAdminToken(), Admin.financialSectors);

// Chi tiết và quyền admin
router.post('/adminDetail', functions.checkAdminToken(), Admin.adminDetail);

// Danh sách module phân quyền
router.post('/allModule', functions.checkAdminToken(), Admin.allModule);

// Danh sách ngôn ngữ
router.post('/allLang', functions.checkAdminToken(), Admin.allLang);

// Tag chi tiết công việc
router.post('/GetTagsNew', functions.checkAdminToken(), Admin.GetTagsNew);

// Đăng tin
router.post('/CreateNew', functions.checkAdminToken(), Admin.CreateNew);

// Chi tiết tin
router.post('/DetailNew', functions.checkAdminToken(), Admin.DetailNew);

// Sửa tin
router.post('/UpdateNew', functions.checkAdminToken(), Admin.UpdateNew);

// Lấy quyền
router.post('/getAdminUserRight', functions.checkAdminToken(), Admin.getAdminUserRight);

// Check toàn quyền
router.post('/apiCheckFullRight', functions.checkAdminToken(), Admin.apiCheckFullRight);

// Ngành nghề CV 
router.post('/getCateCV', functions.checkAdminToken(), Admin.getCateCV);

// Ngôn ngữ CV
router.post('/GetLanguageCv', functions.checkAdminToken(), Admin.GetLanguageCv);

// Thông tin bổ sung site
// setup danh muc
router.post('/setupTtbsCate', functions.checkAdminToken(), Admin.setupTtbsCate);

// tat ca danh muc
router.post('/GetTtbsCate', functions.checkAdminToken(), Admin.GetTtbsCate);

// tao bai viet
router.post('/createTtbsDetail', functions.checkAdminToken(), Admin.createTtbsDetail);

// sua bai viet
router.post('/updateTtbsDetail', functions.checkAdminToken(), Admin.updateTtbsDetail);

// chi tiet bai viet
router.post('/detailTtbsDetail', functions.checkAdminToken(), Admin.detailTtbsDetail);

// Tạo tài khoản admin
router.post('/createAdminUser', functions.checkAdminToken(), Admin.createAdminUser);

// Sửa tài khoản admin
router.post('/editAdminUser', functions.checkAdminToken(), Admin.editAdminUser);

export default router;


