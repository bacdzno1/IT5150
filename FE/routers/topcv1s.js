var express = require('express');
var router = express.Router();
const site = require('../controllers/site');
const apiController = require('../controllers/apicontroller');
const checkHardcodedRoutes = require('../middleware/checkHardcodedRoutes');
const { checkPermission } = require('../middleware/checkAdminPermission');
const { checkToken } = require('../middleware/authenToken');
const cookieParser = require('cookie-parser');
const { parseUrl } = require('../function/function_new');

router.use(cookieParser());

router.use((req, res, next) => {
    const type = req.cookies.type;
    req.userType = type;
    next();
});

function checkUser(typeRequired) {
    return (req, res, next) => {
        const type = req.cookies.type;
        if (type === undefined || type !== typeRequired) {
            return res.redirect('/');
        }
        next();
    };
}

// Lấy danh sách tài khoản để đăng nhập
router.get('/', site.index);
router.get('/cv-xin-viec', site.cvpage);
router.get('/dang-nhap', site.login_page);
router.get('/dang-ky', site.regis_page);
router.get('/tim-ung-vien', site.candi_page);
router.get(/^(.+)-uv-(\d+)$/, site.candi_detail);
router.get(['/tim-viec-lam', '/tim-viec-lam-tai-:city', '/tim-viec-lam-:category', '/tim-viec-lam-:category-tai-:city'], parseUrl, site.job_after_search);
// Định nghĩa route chính
router.get('/cv-xin-viec-:slug', site.cv_sel);

router.get('/tao-cv/:slug', site.add_cv);
router.get('/otp', site.otp);
router.get('/quen-mat-khau', site.forgotpassword);
router.get('/quen-mat-khau-nha-tuyen-dung', site.forgotpasswordemp);
// router.get('/chi-tiet-bai-viet', site.newsdetail);
//ntd
router.get('/dang-nhap-nha-tuyen-dung', site.login_employ);
router.get('/dang-ky-nha-tuyen-dung', site.regis_employ);
router.get('/ntd/quan-ly-nha-tuyen-dung', checkToken('1'), site.managemphome);
router.get('/ntd/quan-ly-ung-vien-ung-tuyen', checkToken('1'), site.managcanapply);
router.get('/ntd/quan-ly-ung-vien-da-luu', checkToken('1'), site.managcansave);
router.get('/ntd/quan-ly-tin-dang', checkToken('1'), site.managlistpost);
router.get('/ntd/sua-tin-tuyen-dung/:titleId', checkToken('1'), site.editpost);
router.get('/ntd/cap-nhat-thong-tin-cong-ty', checkToken('1'), site.managinfo);
router.get('/ntd/doi-mat-khau-nha-tuyen-dung', checkToken('1'), site.managrepass);
router.get('/ntd/dang-tin-tuyen-dung', checkToken('1'), site.managuppost);

//uv
router.get('/dang-ky-ung-vien', site.regis_candi);
router.get('/dang-nhap-ung-vien', site.login_candi);
router.get('/dang-ky-tai-cv', site.regis_candi_cv);
router.get('/uv/quan-ly-ung-vien', checkUser('2'), site.managcanhome);
router.get('/uv/quan-ly-cv-xin-viec', checkUser('2'), site.managcv);
router.get('/uv/quan-ly-viec-ung-tuyen', checkUser('2'), site.managjobapply);
router.get('/uv/quan-ly-viec-da-luu', checkUser('2'), site.managjobsave);
router.get('/uv/doi-mat-khau-ung-vien', checkToken('2'), site.managrepassuv);

//cv
router.get('/xem-cv-u:iduv-c:idcv-t:type', site.viewcvpng);
router.get('/xem-cv2-u:iduv-c:idcv', site.viewcvpdf);
router.get('/xem-cv3-u:iduv-c:idcv', site.viewcvpreview);

//admin
router.get('/admin', site.login_admin);

const routesCandi = [
    { path: '/ung-vien-dang-ky-moi', handler: site.regis_new_candi },
    { path: '/admin/trang-thai-ung-vien-nhs', handler: site.admin_user_nhs_status }
];

routesCandi.forEach(route => {
    router.get(route.path, checkPermission(), route.handler);
});

const routesEmploy = [
    { path: '/nha-tuyen-dung-dang-ky', handler: site.regis_new_ntd },
];
routesEmploy.forEach(route => {
    router.get(route.path, checkPermission(), route.handler);
});

const routesNewJob = [
    { path: '/nha-tuyen-dung-tu-dang', handler: site.ntd_post },
];
routesNewJob.forEach(route => {
    router.get(route.path, checkPermission(), route.handler);
});

router.get('/admin/403', site.admin_not_permission);

//get data
router.post('/api/dataHome', apiController.getDataHomeAjax);
router.post('/api/getDistrict', apiController.getDiscByCity);
router.post('/api/getTagCate', apiController.getTagCate);
router.post("/SendOTPToAccount", apiController.SendOTPToAccount);
router.post("/ConfirmOTPByAccount", apiController.ConfirmOTPByAccount);

router.use(checkHardcodedRoutes);

router.get('/:slug', site.alias);
module.exports = router;