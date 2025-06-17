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

router.post('/postNew', formdata.parse(), functions.checkToken(1), New.PostNew);
router.post('/listNewNTD', formdata.parse(), functions.checkToken(1), New.ListNewNTD);
router.post('/RefreshNew', formdata.parse(), functions.checkToken(1), New.RefreshNew);
router.post('/UpdateNew', formdata.parse(), functions.checkToken(1), New.UpdateNew);
router.post('/DeleteNew', formdata.parse(), functions.checkToken(1), New.DeleteNew);
router.post('/Home', limiter, formdata.parse(), New.Home);
router.post('/DetailNew', formdata.parse(), New.DetailNew);
router.post('/SearchNew', formdata.parse(), New.SearchNew);
router.post('/SearchCandi', limiter, formdata.parse(), New.SearchCandi);
router.post('/getTagCate', formdata.parse(), New.getTagCate);
router.post('/JobRecommend', formdata.parse(), New.JobRecommend);
router.post('/getRecommentComp', formdata.parse(), New.getRecommentComp);
router.post('/detailJob_Comp', formdata.parse(), New.detailJob_Comp);
router.post('/getCvDetail', formdata.parse(), New.getCvDetail);

export default router;
