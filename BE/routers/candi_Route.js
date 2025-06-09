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

// xoá cv
router.post('/CandiDeleteCV', formdata.parse(), functions.checkToken(2), Candi.CandiDeleteCV);

// lưu, xoá CV
router.post('/SaveCV', formdata.parse(), functions.checkToken(2), Candi.SaveCV);

// chi tiết ứng viên
router.post('/DetailCandi', formdata.parse(), Candi.DetailCandi);

// ứng tuyển
router.post('/ApplyJob', formdata.parse(), functions.checkToken(2), Candi.ApplyJob);

// hủy ứng tuyển
router.post('/UnApplyJob', formdata.parse(), functions.checkToken(2), Candi.UnApplyJob);

// Lấy thông tin hỗ trợ livechat
router.post('/takeInforCan', formdata.parse(), functions.checkToken(2), Candi.takeInforCan);

export default router;
