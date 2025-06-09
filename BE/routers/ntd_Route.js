import express from 'express';
import * as ntd from "../controllers/ntd_Controller.js";
import formdata from 'express-form-data';
import * as functions from "../services/functions.js";
const router = express.Router();

// quản lý dịch vụ nhà tuyển dụng
router.post('/ManageAll', formdata.parse(), functions.checkToken(1), ntd.ManageAll);

// cập nhật hẹn phỏng vấn
router.post('/UpdateTimeInterview', formdata.parse(), functions.checkToken(1), ntd.UpdateTimeInterview);

// cập nhật ghi chú
router.post('/UpdateNoteInterview', formdata.parse(), functions.checkToken(1), ntd.UpdateNoteInterview);

// ứng viên đến ứng tuyển
router.post('/CandidatesComeToApply', formdata.parse(), functions.checkToken(1), ntd.CandidatesComeToApply);

// cập nhật kết quả
router.post('/UpdateResultInterview', formdata.parse(), functions.checkToken(1), ntd.UpdateResultInterview);

// Xoá hồ sơ ứng tuyển
router.post('/DeleteCandidateApply', formdata.parse(), functions.checkToken(1), ntd.DeleteCandidateApply);

// hồ sơ ứng viên đã lưu
router.post('/CandiDidSave', formdata.parse(), functions.checkToken(1), ntd.CandiDidSave);

// xoá hồ sơ ứng viên đã lưu
router.post('/DeleteCandiDidSave', formdata.parse(), functions.checkToken(1), ntd.DeleteCandiDidSave);

// Lưu hồ sơ ứng viên
router.post('/SaveCandi', formdata.parse(), functions.checkToken(1), ntd.SaveCandi)

// xem thông tin ứng viên
router.post('/ViewCandidateInformation', formdata.parse(), functions.checkToken(1), ntd.ViewCandidateInformation);

// Xem điểm nhà tuyển dụng
router.post('/PointCpn', functions.checkToken(1), ntd.PointCpn);

export default router;
