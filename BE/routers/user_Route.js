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

// Đăng ký
router.post('/RegisterCandidate', formdata.parse(), user.RegisterCandidate);

router.post('/CandidateRegisterByUploadCV', formdata.parse(), functions.checkToken(2), user.CandidateRegisterByUploadCV);

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

// đổi mật khẩu ứng viên
router.post('/changePassUv', formdata.parse(), functions.checkToken(3, 'auth'), user.changePassUv);

// đổi mật khẩu nhà tuyển dụng
router.post('/UpdatePasswordEmployers', formdata.parse(), functions.checkToken(3, 'auth'), user.UpdatePasswordEmployers);

// xác nhận OTP theo email
router.post('/GetAuthenticateOtp', formdata.parse(), user.GetAuthenticateOtp)

// Xem trước CV
router.post('/PreviewCv', formdata.parse(), user.PreviewCv);

// Lấy data xem trước
router.post('/DetailCVPreview', formdata.parse(), user.DetailCVPreview);

// Lấy thông tin (fallback khi lỗi hoặc cần lúc refresh)
router.post('/getAccountDetail', formdata.parse(), user.getAccountDetail);

// check so NTD da dung chua 
router.post('/isPhoneUsedEmployer', formdata.parse(), user.isPhoneUsedEmployer);

export default router;