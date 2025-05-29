import express from 'express';
var router = express.Router();
import * as Candi from "../controllers/candi_Controller.js";

// Người dùng dowload cv pdf
router.get('/cv_pdf/user_:iduv/cvid_:id/:name', Candi.DowloadFileCVPDF);

// Người dùng dowload thư xin việc pdf
router.get('/pdf/user_:iduv/ltid_:id', Candi.DowloadFileLetterPDF);

// Người dùng dowload đơn xin việc pdf
router.get('/pdf/user_:iduv/jobid_:id', Candi.DowloadFileJobPDF);

export default router;