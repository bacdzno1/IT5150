import express from 'express';
import * as functions from "../services/functions.js";
import * as Admin from "../controllers/admin_Controller.js";
const router = express.Router();

router.post('/list', functions.checkAdminToken(), Admin.list);
router.post('/login', Admin.Login);
router.post('/PinNew', functions.checkAdminToken(), Admin.PinNew);

export default router;


