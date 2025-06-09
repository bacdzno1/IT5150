import express from 'express';
import * as New from "../controllers/new_Controller.js";
import formdata from 'express-form-data';
import * as functions from "../services/functions.js";
const router = express.Router();
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 1 * 60 * 100,
  max: 10,
  message: 'Bạn đã dùng lệnh này quá nhiều lần, vui lòng thử lại sau!',
  handler: (req, res, next) => {
    console.log(`Rate limit exceeded for IP: ${req.ip} on route ${req.originalUrl}`);
    res.status(429).json({
      success: false,
      message: 'Bạn đã dùng lệnh này quá nhiều lần, vui lòng thử lại sau!'
    });
  },
  keyGenerator(request, _response) {
    if (!request.ip) {
      console.error('Warning: request.ip is missing!')
      return request.socket.remoteAddress
    }

    return request.ip.replace(/:\d+[^:]*$/, '')
  }
})

// Đăng tin
router.post('/postNew', formdata.parse(), functions.checkToken(1), New.PostNew);

// Danh sách tin NTD đã đăng
router.post('/listNewNTD', formdata.parse(), functions.checkToken(1), New.ListNewNTD);

// làm mới tin NTD đã đăng
router.post('/RefreshNew', formdata.parse(), functions.checkToken(1), New.RefreshNew);

// sửa tin
router.post('/UpdateNew', formdata.parse(), functions.checkToken(1), New.UpdateNew);

// xoá tin
router.post('/DeleteNew', formdata.parse(), functions.checkToken(1), New.DeleteNew);

// trang chủ
router.post('/Home', limiter, formdata.parse(), New.Home);

// chi tiết tin
router.post('/DetailNew', formdata.parse(), New.DetailNew);

// tìm kiếm tin
router.post('/SearchNew', formdata.parse(), New.SearchNew);

// tìm kiếm ứng viên
router.post('/SearchCandi', limiter, formdata.parse(), New.SearchCandi);

// tra cứu tag ngành nghề
router.post('/getTagCate', formdata.parse(), New.getTagCate);

// Việc làm đề xuất 
router.post('/JobRecommend', formdata.parse(), New.JobRecommend);

// Công ty đề xuất 
router.post('/getRecommentComp', formdata.parse(), New.getRecommentComp);

router.post('/detailJob_Comp', formdata.parse(), New.detailJob_Comp);

// Lấy chi tiết cv
router.post('/getCvDetail', formdata.parse(), New.getCvDetail);

export default router;
