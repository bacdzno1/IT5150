import express from 'express';
import * as user from "../controllers/user_Controller.js";
import formdata from 'express-form-data';
import * as functions from "../services/functions.js";
const router = express.Router();

// đăng kí nhà tuyển dụng
router.post('/RegisterEmployers', formdata.parse(), user.RegisterEmployers);

// đăng nhập nhà tuyển dụng
router.post('/Login', formdata.parse(), user.Login);

// quên mật khẩu nhà tuyển dụng
router.post('/EmployersForgotPass', formdata.parse(), user.EmployersForgotPass);

// lấy thông tin tài khoản
router.post('/infoNTD', formdata.parse(), functions.checkToken(1), user.infoNTD);

// cập nhật thông tin tài khoản
router.post('/UpdateInfoEmployers', formdata.parse(), functions.checkToken(1), user.UpdateInfoEmployers);

// đăng kí tài khoản ứng viên theo luồng chính (bước 1)
router.post('/RegisterCandidate', formdata.parse(), user.RegisterCandidate);

// đăng kí tài khoản ứng viên bước 2 (tải cv)
router.post('/CandidateRegisterByUploadCV', formdata.parse(), user.CandidateRegisterByUploadCV);

// !đăng kí tài khoản ứng viên bước 2 (tạo cv online)
router.post('/CandidateRegisterByCVOnline', formdata.parse(), user.CandidateRegisterByCVOnline);

// upload avatarCV
router.post('/uploadAvatarCV', formdata.parse(), user.uploadAvatarCV);

// đăng kí tài khoản ứng viên theo luồng tạo CV trước
router.post('/CreateCVInOrderToRegister', formdata.parse(), user.CreateCVInOrderToRegister);

// đăng nhập ứng viên
router.post('/LoginCandidate', formdata.parse(), user.LoginCandidate);

// quên mật khẩu tài khoản ứng viên
router.post('/ForgotPassUv', formdata.parse(), user.ForgotPassUv);

// xác nhận otp NTD
router.post('/ConfirmOTP', formdata.parse(), user.ConfirmOTP);

// xác thực tài khoản
router.post('/AuthAccount', formdata.parse(), functions.checkToken(3, 'auth'), user.AuthenAccount);

// đổi mật khẩu ứng viên
router.post('/changePassUv', formdata.parse(), functions.checkToken(3, 'auth'), user.changePassUv);

// đổi mật khẩu nhà tuyển dụng
router.post('/UpdatePasswordEmployers', formdata.parse(), functions.checkToken(3, 'auth'), user.UpdatePasswordEmployers);

// Test OTP Firebase
// router.post('/testOTP', formdata.parse(), functions.checkFbToken())
// xác nhận OTP theo Firebasse
router.post('/ConfirmOtpFb', formdata.parse(), functions.checkFbToken(), user.ConfirmOtpFb)

// xác nhận OTP theo email
router.post('/GetAuthenticateOtp', formdata.parse(), user.GetAuthenticateOtp)

// test
// router.post('/test', formdata.parse(), user.test);
//lấy config firebase
router.post('/getConfigFirebase', formdata.parse(), user.ConfigFirbase);
//thêm config firebase
router.post('/InsertConfigFirebase', formdata.parse(), user.InsertConfigFirebase);

// Xem trước CV
router.post('/PreviewCv', formdata.parse(), user.PreviewCv);

// Lấy data xem trước
router.post('/DetailCVPreview', formdata.parse(), user.DetailCVPreview);

// Lấy thông tin (fallback khi lỗi hoặc cần lúc refresh)
router.post('/getAccountDetail', formdata.parse(), user.getAccountDetail);

// Thay đổi luồng đăng ký bước 1 bước 2, sau bước 1 là đăng ký luôn 
router.post('/RegisterCandidate2', formdata.parse(), user.RegisterCandidate2);

router.post('/CandidateRegisterByUploadCV2', formdata.parse(), functions.checkToken(2), user.CandidateRegisterByUploadCV2);

// Xem trước CV để tải xuống
router.post('/previewCv2', formdata.parse(), user.previewCv2);

// Gen Pdf trước
router.post('/generatePdfAhead', formdata.parse(), user.generatePdfAhead);

// download pdf trước
router.post('/waitAndDownloadPdf', formdata.parse(), user.waitAndDownloadPdf);

// check so NTD da dung chua 
router.post('/isPhoneUsedEmployer', formdata.parse(), user.isPhoneUsedEmployer);

export default router;