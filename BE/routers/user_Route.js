import express from 'express';
import * as user from "../controllers/user_Controller.js";
import formdata from 'express-form-data';
import * as functions from "../services/functions.js";
const router = express.Router();

router.post('/RegisterEmployers', formdata.parse(), user.RegisterEmployers);
router.post('/Login', formdata.parse(), user.Login);
router.post('/EmployersForgotPass', formdata.parse(), user.EmployersForgotPass);
router.post('/infoNTD', formdata.parse(), functions.checkToken(1), user.infoNTD);
router.post('/UpdateInfoEmployers', formdata.parse(), functions.checkToken(1), user.UpdateInfoEmployers);
router.post('/RegisterCandidate', formdata.parse(), user.RegisterCandidate);
router.post('/CandidateRegisterByUploadCV', formdata.parse(), functions.checkToken(2), user.CandidateRegisterByUploadCV);
router.post('/uploadAvatarCV', formdata.parse(), user.uploadAvatarCV);
router.post('/CreateCVInOrderToRegister', formdata.parse(), user.CreateCVInOrderToRegister);
router.post('/LoginCandidate', formdata.parse(), user.LoginCandidate);
router.post('/ForgotPassUv', formdata.parse(), user.ForgotPassUv);
router.post('/changePassUv', formdata.parse(), functions.checkToken(3, 'auth'), user.changePassUv);
router.post('/UpdatePasswordEmployers', formdata.parse(), functions.checkToken(3, 'auth'), user.UpdatePasswordEmployers);
router.post('/GetAuthenticateOtp', formdata.parse(), user.GetAuthenticateOtp)
router.post('/PreviewCv', formdata.parse(), user.PreviewCv);
router.post('/DetailCVPreview', formdata.parse(), user.DetailCVPreview);
router.post('/getAccountDetail', formdata.parse(), user.getAccountDetail);
router.post('/isPhoneUsedEmployer', formdata.parse(), user.isPhoneUsedEmployer);

export default router;