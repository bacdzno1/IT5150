import express from 'express';
var router = express.Router();
import * as Candi from "../controllers/candi_Controller.js";

router.get('/cv_pdf/user_:iduv/cvid_:id/:name', Candi.DowloadFileCVPDF);

export default router;