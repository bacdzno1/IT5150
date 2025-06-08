import express from 'express';
// import formdata from 'express-form-data';
import * as functions from "../services/functions.js";
import * as Admin from "../controllers/admin_Controller.js";
const router = express.Router();

// Lấy danh sách nhiều loại
router.post('/list', functions.checkAdminToken(), Admin.list);

// Login
router.post('/login', Admin.Login);

// Ghim tin
router.post('/PinNew', functions.checkAdminToken(), Admin.PinNew);

export default router;


