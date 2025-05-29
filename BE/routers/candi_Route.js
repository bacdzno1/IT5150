import express from 'express';
import * as Candi from "../controllers/candi_Controller.js";
import formdata from 'express-form-data';
import * as functions from "../services/functions.js";

const router = express.Router();

// quản lý chung
router.post('/ManageAllCandi', formdata.parse(), functions.checkToken(2), Candi.ManageAllCandi);

// việc làm đã ứng tuyển
router.post('/JobApply', formdata.parse(), functions.checkToken(2), Candi.JobApply);

// việc làm đã lưu
router.post('/JobDidSave', formdata.parse(), functions.checkToken(2), Candi.JobDidSave);

// lưu tin và xoá
router.post('/SaveNew', formdata.parse(), functions.checkToken(2), Candi.SaveNew);

// xoá việc làm đã ứng tuyển
router.post('/DeleteJobDidApply', formdata.parse(), functions.checkToken(2), Candi.DeleteJobDidApply);

// cho phép tìm kiếm ứng viên
router.post('/AllowSearchCandi', formdata.parse(), functions.checkToken(2), Candi.AllowSearchCandi);

// làm mới hồ sơ
router.post('/RefreshProfileCandi', formdata.parse(), functions.checkToken(2), Candi.RefreshProfileCandi);

// danh sách cv đã tạo, lưu
router.post('/ManageCvCandiDidCreated', formdata.parse(), functions.checkToken2(2), Candi.ManageCvCandiDidCreated);

// chi tiết cv
router.post('/DetailCV', formdata.parse(), Candi.DetailCV);

// sửa CV
router.post('/UpdateInfoCv', formdata.parse(), functions.checkToken(2), Candi.UpdateInfoCv);

// update cv đại diện
router.post('/UpdateCVRepresent', formdata.parse(), functions.checkToken(2), Candi.UpdateCVRepresent);

// xoá cv
router.post('/CandiDeleteCV', formdata.parse(), functions.checkToken(2), Candi.CandiDeleteCV);

// thư xin việc
router.post('/LetterApplication', formdata.parse(), functions.checkToken(2), Candi.LetterApplication);

// chi tiết thư xin việc
router.post('/DetailLetter', formdata.parse(), functions.checkToken(2), Candi.DetailLetter);

// tạo, sửa thư xin việc
router.post('/UpdateLetter', formdata.parse(), functions.checkToken(2), Candi.UpdateLetter);

// đơn xin việc
router.post('/JobApplication', formdata.parse(), functions.checkToken(2), Candi.JobApplication);

// chi tiết đơn xin việc
router.post('/DetailJobApplication', formdata.parse(), functions.checkToken(2), Candi.DetailJobApplication);

// tạo, sửa đơn xin việc
router.post('/CreateJobAppli', formdata.parse(), functions.checkToken(2), Candi.CreateJobAppli);

// lưu, xoá CV
router.post('/SaveCV', formdata.parse(), functions.checkToken(2), Candi.SaveCV);

// lưu, xoá đơn xin việc
router.post('/SaveJob', formdata.parse(), functions.checkToken(2), Candi.SaveJob);

// lưu, xoá lưu thư xin việc
router.post('/SaveLetter', formdata.parse(), functions.checkToken(2), Candi.SaveLetter);

// xoá đơn xin việc
router.post('/DeleteJobApply', formdata.parse(), functions.checkToken(2), Candi.DeleteJobApply);

// xoá thư xin việc
router.post('/DeleteLetterApply', formdata.parse(), functions.checkToken(2), Candi.DeleteLetterApply);

// chi tiết ứng viên
router.post('/DetailCandi', formdata.parse(), Candi.DetailCandi);

// ứng tuyển
router.post('/ApplyJob', formdata.parse(), functions.checkToken(2), Candi.ApplyJob);

// hủy ứng tuyển
router.post('/UnApplyJob', formdata.parse(), functions.checkToken(2), Candi.UnApplyJob);

// danh sách hồ sơ đã tải
router.post('/UploadedFiles', formdata.parse(), functions.checkToken(2), Candi.UploadedFiles);

// Xóa hồ sơ đã tải
router.post('/DeleteFile', formdata.parse(), functions.checkToken(2), Candi.DeleteFile);

// Đăng tệp hồ sơ
router.post('/UploadFile', formdata.parse(), functions.checkToken(2), Candi.UploadFile);

// Lấy thông tin hỗ trợ livechat
router.post('/takeInforCan', formdata.parse(), functions.checkToken(2), Candi.takeInforCan);

export default router;
