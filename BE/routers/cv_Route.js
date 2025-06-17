import express from 'express';
import * as CV from "../controllers/cv_Controller.js";
import formdata from 'express-form-data';
import path, { dirname } from "path";
import { fileURLToPath } from 'url';

var router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dir = path.join(__dirname, '../public');

router.post('/getLangCv', CV.getLangCv);
router.post('/getNganhCv', CV.getNganhCv);
router.post('/in4CV', formdata.parse(), CV.in4CV);
router.post('/ListSampleCV', formdata.parse(), CV.ListSampleCV);
router.use('/static', express.static(dir))
router.use(express.static(dir))

export default router;