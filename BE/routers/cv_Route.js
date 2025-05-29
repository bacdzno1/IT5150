import express from 'express';
import * as CV from "../controllers/cv_Controller.js";
import formdata from 'express-form-data';
import path, { dirname } from "path";
import { fileURLToPath } from 'url';

var router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dir = path.join(__dirname, '../public');

router.post('/CreateNewCandidateCV', formdata.parse(), CV.CreateNewCandidateCV);
router.put('/UpdateCandidateCV', formdata.parse(), CV.UpdateCandidateCV);
router.delete('/DeleteCandidateCV', formdata.parse(), CV.DeleteCandidateCV);
router.get('/GetSampleCV', formdata.parse(), CV.GetSampleCV);
router.post('/CreateNewSampleCV', formdata.parse(), CV.CreateNewSampleCV);
router.post('/SampleCVEdit', formdata.parse(), CV.SampleCVEdit);

router.post('/getLangCv', CV.getLangCv);
router.post('/getNganhCv', CV.getNganhCv);
router.post('/in4CV', formdata.parse(), CV.in4CV);
router.post('/ListSampleCV', formdata.parse(), CV.ListSampleCV);

router.use('/static', express.static(dir))
router.use(express.static(dir))

// Xem cv phân trang ejs
router.get('/xem-cv-phan-trang/u:iduv/c:idcv', CV.xemCvPhanTrangEjs);

export default router;