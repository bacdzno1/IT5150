import express from 'express';
import * as ntd from "../controllers/ntd_Controller.js";
import formdata from 'express-form-data';
import * as functions from "../services/functions.js";
const router = express.Router();

router.post('/ManageAll', formdata.parse(), functions.checkToken(1), ntd.ManageAll);
router.post('/UpdateTimeInterview', formdata.parse(), functions.checkToken(1), ntd.UpdateTimeInterview);
router.post('/UpdateNoteInterview', formdata.parse(), functions.checkToken(1), ntd.UpdateNoteInterview);
router.post('/CandidatesComeToApply', formdata.parse(), functions.checkToken(1), ntd.CandidatesComeToApply);
router.post('/UpdateResultInterview', formdata.parse(), functions.checkToken(1), ntd.UpdateResultInterview);
router.post('/DeleteCandidateApply', formdata.parse(), functions.checkToken(1), ntd.DeleteCandidateApply);
router.post('/CandiDidSave', formdata.parse(), functions.checkToken(1), ntd.CandiDidSave);
router.post('/DeleteCandiDidSave', formdata.parse(), functions.checkToken(1), ntd.DeleteCandiDidSave);
router.post('/SaveCandi', formdata.parse(), functions.checkToken(1), ntd.SaveCandi)
router.post('/ViewCandidateInformation', formdata.parse(), functions.checkToken(1), ntd.ViewCandidateInformation);
router.post('/PointCpn', functions.checkToken(1), ntd.PointCpn);

export default router;
