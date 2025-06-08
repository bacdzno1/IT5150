import express from 'express';
import * as New from "../controllers/new_Controller.js";
import formdata from 'express-form-data';
import * as functions from "../services/functions.js";
import SampleCv from '../models/sample/SampleCv.js';
import NewsNganhNghe from '../models/blog/NewsNganhNghe.js';
import LanguageCv from '../models/language/LanguageCv.js';
import NganhCv from '../models/NganhCv.js';
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

// tìm kiếm trang chủ (việc làm hấp dẫn)
router.post('/searchViecLamHapDan', formdata.parse(), New.searchViecLamHapDan);

// tìm kiếm trang chủ (việc làm lương cao)
router.post('/searchViecLamLuongCao', formdata.parse(), New.searchViecLamLuongCao);

// chi tiết tin
router.post('/DetailNew', formdata.parse(), New.DetailNew);

// tìm kiếm tin
router.post('/SearchNew', formdata.parse(), New.SearchNew);

// tìm kiếm ứng viên
router.post('/SearchCandi', limiter, formdata.parse(), New.SearchCandi);

// danh sách CV
router.post('/ListCV', formdata.parse(), New.ListCV);

// danh sách cv theo ngôn ngữ
router.post('/ListCvFollowLanguage', formdata.parse(), New.ListCvFollowLanguage);

// danh sách cv theo ngành nghề
router.post('/ListCvFollowJob', formdata.parse(), New.ListCvFollowJob);

// danh sách đơn xin việc
router.post('/ListJobAppli', formdata.parse(), New.ListJobAppli);

// danh sách đơn xin việc theo ngành nghề
router.post('/ListJobAppliCate', formdata.parse(), New.ListJobAppliCate);

// danh sách đơn xin việc theo ngôn ngữ
router.post('/ListJobAppliLanguage', formdata.parse(), New.ListJobAppliLanguage);

// danh sách thư xin việc
router.post('/ListLetterAppli', formdata.parse(), New.ListLetterAppli);

// danh sách thư xin việc theo ngành nghề
router.post('/ListLetterAppliCate', formdata.parse(), New.ListLetterAppliCate);

// bảng giá
router.post('/PriceList', formdata.parse(), New.PriceList);

// việc tìm người
router.post('/JobFindHuman', formdata.parse(), New.JobFindHuman);

// blog
router.post('/GetBlog', formdata.parse(), New.GetBlog);

// Tìm kiếm blog
router.post('/SearchBlog', formdata.parse(), New.SearchBlog);

// chi tiết blog
router.post('/DetailBlog', formdata.parse(), New.DetailBlog);

// Chi tiết blog mới (theo tiêu đề)
router.post('/DetailBlog2', formdata.parse(), New.DetailBlog2);

// tác giả blog
router.post('/AuthorBlog', formdata.parse(), New.AuthorBlog);

// Bài viết theo tác giả
router.post('/BlogByAdmin', formdata.parse(), New.BlogByAdmin);

// bí quyết viết CV
router.post('/ChildOfBlog', formdata.parse(), New.ChildOfBlog);

// câu hỏi phỏng vấn
router.post('/QuestionInterview', formdata.parse(), New.QuestionInterview);

// cẩm nang tìm việc, mô tả công việc
router.post('/BlogCateChild', formdata.parse(), New.BlogCateChild);

// trang vàng
router.post('/YellowPage', formdata.parse(), New.YellowPage);

// trang vàng theo ngành nghề
router.post('/ListCompanyFollowJob', formdata.parse(), New.ListCompanyFollowJob);

// trang vàng theo tỉnh thành
router.post('/ListCompanyFollowCity', formdata.parse(), New.ListCompanyFollowCity);

// chi tiết công ty
// router.post('/DetailCompany', formdata.parse(), New.DetailCompany);

// tra cứu lương
router.post('/SearchSalary', formdata.parse(), New.SearchSalary);

// tra cứu thanhf pho
router.post('/getCity', formdata.parse(), New.getCity);

// tra cứu ngành nghề
router.post('/getJob', formdata.parse(), New.getJob);

// tra cứu tag ngành nghề
router.post('/getTagJob', formdata.parse(), New.getTagJob);

// tra cứu thanhf pho
router.post('/getDistrict', formdata.parse(), New.getDistrict);

// tra cứu tag ngành nghề
router.post('/getTagCate', formdata.parse(), New.getTagCate);

// Lấy danh sách ứng viên cho trang đăng tin trước đăng nhập 
router.post('/getDangTin', formdata.parse(), New.getDangTin);

// Tìm kiếm trên trang đăng tin trước đăng nhập 
router.post('/getDangTinSearch', formdata.parse(), New.getDangTinSearch);

// Ngôn ngữ CV
router.post('/GetLanguageCv', formdata.parse(), New.GetLanguageCv);

// Ngành nghề CV 
router.post('/getCateCV', formdata.parse(), New.getCateCV);

// Việc làm đề xuất 
router.post('/JobRecommend', formdata.parse(), New.JobRecommend);

// Công ty đề xuất 
router.post('/getRecommentComp', formdata.parse(), New.getRecommentComp);

// Thong tin bo sung
// Danh mục bổ sung
router.post('/GetTtbsCate', formdata.parse(), New.GetTtbsCate);
// Chi tiết bổ sung
router.post('/detailTtbsDetail', formdata.parse(), New.detailTtbsDetail);

router.post('/detailJob_Comp', formdata.parse(), New.detailJob_Comp);

// Lấy chi tiết cv
router.post('/getCvDetail', formdata.parse(), New.getCvDetail);

// Kiểm tra alias trùng 
router.post('/checkAliasBlog', formdata.parse(), New.checkAliasBlog);

// ejs page cv
router.get('/mau-cv-xin-viec', async (req, res) => {
  // res.json('hello')
  try {
    const listCV = await SampleCv.find().lean().sort({ timecreated: -1 });
    const blogCV = await NewsNganhNghe.findOne({ idnganh: 0 }).lean();
    const langOptions = await LanguageCv.find().lean();
    const nganhOptions = await NganhCv.find().lean();
    res.render('trang-chu-cv', {
      listCv: listCV,
      blogCv: blogCV,
      langOptions: langOptions,
      nganhOptions: nganhOptions
    })
  } catch (error) {
    console.error(error);
    res.json(error)
  }
})

// Lấy tin AI
router.post('/GetNewAi', formdata.parse(), New.GetNewAi);

router.post('/NewAiDetail', formdata.parse(), New.NewAiDetail);

// ejs page trang chu
// router.get('/trang-chu', async (req, res) => {
//   try {
//     res.render('trang-chu');
//   } catch (error) {
//     console.error(error);
//     res.json(error)
//   }
// })
router.get('/trang-chu', New.trangChuEjs);

router.get('/trang-chu2', New.trangChuEjs2);

export default router;
