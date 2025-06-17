import express from 'express';
import * as Candi from "../controllers/candi_Controller.js";
import formdata from 'express-form-data';
import * as functions from "../services/functions.js";

const router = express.Router();

router.post('/ManageAllCandi', formdata.parse(), functions.checkToken(2), Candi.ManageAllCandi);
router.post('/JobApply', formdata.parse(), functions.checkToken(2), Candi.JobApply);
router.post('/JobDidSave', formdata.parse(), functions.checkToken(2), Candi.JobDidSave);
router.post('/SaveNew', formdata.parse(), functions.checkToken(2), Candi.SaveNew);
router.post('/AllowSearchCandi', formdata.parse(), functions.checkToken(2), Candi.AllowSearchCandi);
router.post('/RefreshProfileCandi', formdata.parse(), functions.checkToken(2), Candi.RefreshProfileCandi);
router.post('/ManageCvCandiDidCreated', formdata.parse(), functions.checkToken2(2), Candi.ManageCvCandiDidCreated);
router.post('/DetailCV', formdata.parse(), Candi.DetailCV);
router.post('/UpdateInfoCv', formdata.parse(), functions.checkToken(2), Candi.UpdateInfoCv);
router.post('/CandiDeleteCV', formdata.parse(), functions.checkToken(2), Candi.CandiDeleteCV);
router.post('/SaveCV', formdata.parse(), functions.checkToken(2), Candi.SaveCV);
router.post('/DetailCandi', formdata.parse(), Candi.DetailCandi);
router.post('/ApplyJob', formdata.parse(), functions.checkToken(2), Candi.ApplyJob);
router.post('/UnApplyJob', formdata.parse(), functions.checkToken(2), Candi.UnApplyJob);
router.post('/takeInforCan', formdata.parse(), functions.checkToken(2), Candi.takeInforCan);

export default router;
