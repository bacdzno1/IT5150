var express = require('express');
var router = express.Router();
var formData = require('express-form-data');
const functions = require('../services/functions');
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
// router.use((req, res, next) => {
//     if (req.path === '/tim-viec-lam' && Object.keys(req.query).length === 0) {
//         return res.redirect('/');
//     }
//     next();
// });
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
router.get('/tim-ung-vien-test', site.candi_page_test);
router.get(/^(.+)-uv-(\d+)$/, site.candi_detail);
router.get(['/tim-viec-lam', '/tim-viec-lam-tai-:city', '/tim-viec-lam-:category', '/tim-viec-lam-:category-tai-:city'], parseUrl, site.job_after_search);
// router.get('/:title-job:jobId', site.job_detail);
// router.get('/chi-tiet-cong-ty', site.comp_detail);

router.use((req, res, next) => {
    if (req.path.startsWith('/mau-cv-xin-viec/')) {
        const slug = req.path.replace('/mau-cv-xin-viec/', '');
        req.url = `/cv-xin-viec-${slug}`;
    }
    next();
});
// Định nghĩa route chính
router.get('/cv-xin-viec-:slug', site.cv_sel);

router.get('/mau-cv-goi-y', site.cv_rec);
router.get('/tao-cv/:slug', site.add_cv);
router.get('/tin-tuc', site.homenews);
router.get('/tim-kiem-tin-tuc', site.searchnews);
router.get('/blog-:slug', site.listnews);
router.get('/tac-gia-bai-viet-:id', site.authornews);
router.get('/otp', site.otp);
router.get('/quen-mat-khau', site.forgotpassword);
router.get('/quen-mat-khau-nha-tuyen-dung', site.forgotpasswordemp);
// router.get('/chi-tiet-bai-viet', site.newsdetail);
//ntd
router.get('/dang-nhap-nha-tuyen-dung', site.login_employ);
router.get('/dang-ky-nha-tuyen-dung', site.regis_employ);
router.get('/ntd/quan-ly-nha-tuyen-dung', checkToken('1'), site.managemphome);
router.get('/ntd/quan-ly-ung-vien-ung-tuyen', checkToken('1'), site.managcanapply);
router.get('/ntd/quan-ly-diem-loc', checkToken('1'), site.managpoint);
router.get('/ntd/quan-ly-ung-vien-da-luu', checkToken('1'), site.managcansave);
router.get('/ntd/quan-ly-tin-dang', checkToken('1'), site.managlistpost);
router.get('/ntd/sua-tin-tuyen-dung/:titleId', checkToken('1'), site.editpost);
router.get('/ntd/cap-nhat-thong-tin-cong-ty', checkToken('1'), site.managinfo);
router.get('/ntd/doi-mat-khau-nha-tuyen-dung', checkToken('1'), site.managrepass);
router.get('/ntd/dang-tin-tuyen-dung', checkToken('1'), site.managuppost);
router.get('/ntd/chuyen-vien-gui-ung-vien', checkToken('1'), site.managsendcan);

//uv
router.get('/dang-ky-ung-vien', site.regis_candi);
router.get('/dang-nhap-ung-vien', site.login_candi);
router.get('/dang-ky-tai-cv', site.regis_candi_cv);
router.get('/uv/quan-ly-ung-vien', checkUser('2'), site.managcanhome);
router.get('/uv/quan-ly-cv-xin-viec', checkUser('2'), site.managcv);
router.get('/uv/quan-ly-cv-xin-viec-fix', checkUser('2'), site.managcv2);
router.get('/uv/quan-ly-viec-ung-tuyen', checkUser('2'), site.managjobapply);
router.get('/uv/quan-ly-viec-da-luu', checkUser('2'), site.managjobsave);
router.get('/uv/quan-ly-ho-so-xin-viec', checkUser('2'), site.managprofile);
router.get('/uv/doi-mat-khau-ung-vien', checkToken('2'), site.managrepassuv);

//cv
router.get('/xem-cv-u:iduv-c:idcv-t:type', site.viewcvpng);
router.get('/xem-cv2-u:iduv-c:idcv', site.viewcvpdf);
router.get('/xem-cv3-u:iduv-c:idcv', site.viewcvpreview);

//admin
router.get('/admin', site.login_admin);

const routesCandi = [
    { path: '/ung-vien-dang-ky-moi', handler: site.regis_new_candi },
    { path: '/admin/ung-vien-tai-cv', handler: site.admin_user_upload_cv },
    { path: '/admin/ung-vien-cap-nhat-ho-so', handler: site.admin_user_update_profile },
    { path: '/admin/ung-vien-chua-hoan-thien-ho-so-tai-web', handler: site.admin_user_incomplete_profile_web },
    { path: '/admin/ung-vien-chua-hoan-thien-ho-so-tai-app-tv', handler: site.admin_user_incomplete_profile_app_tv },
    { path: '/admin/ung-vien-chua-hoan-thien-ho-so-tai-app-cv', handler: site.admin_user_incomplete_profile_app_cv },
    { path: '/admin/ung-vien-ung-tuyen-ntd', handler: site.admin_user_apply_job },
    { path: '/admin/tat-ca-ung-vien', handler: site.admin_user_all },
    { path: '/admin/ung-vien-add-loi', handler: site.admin_user_add_fail },
    { path: '/admin/ung-vien-dang-ky-loi', handler: site.admin_user_regis_fail },
    { path: '/admin/ung-vien-bi-an', handler: site.admin_user_hide },
    { path: '/admin/trang-thai-ung-vien-nhs', handler: site.admin_user_nhs_status }
];

routesCandi.forEach(route => {
    router.get(route.path, checkPermission(47), route.handler);
});

const routesEmploy = [
    { path: '/nha-tuyen-dung-dang-ky', handler: site.regis_new_ntd },
    { path: '/admin/them-nha-tuyen-dung', handler: site.admin_add_employ },
];
routesEmploy.forEach(route => {
    router.get(route.path, checkPermission(72), route.handler);
});

const routesNewJob = [
    { path: '/nha-tuyen-dung-tu-dang', handler: site.ntd_post },
    { path: '/admin/dang-tin-tuyen-dung', handler: site.admin_post_job },
];
routesNewJob.forEach(route => {
    router.get(route.path, checkPermission(73), route.handler);
});

const routesPoints = [
    { path: '/danh-sach-diem', handler: site.list_point },
    { path: '/lich-su-tieu-diem', handler: site.point_usage_his },
    { path: '/lich-su-cong-diem', handler: site.point_add_his },
    { path: '/admin/sua-diem-nha-tuyen-dung', handler: site.admin_update_point },
    { path: '/admin/them-goi-diem', handler: site.admin_add_point_package },
    { path: '/admin/quan-ly-goi-diem', handler: site.admin_manag_point_package },
];
routesPoints.forEach(route => {
    router.get(route.path, checkPermission(41), route.handler);
});

const routesAdmin = [
    { path: '/admin/quan-ly-tai-khoan-admin', handler: site.admin_manag_account },
    { path: '/admin/them-tai-khoan-admin', handler: site.admin_add_account },
    { path: '/lich-su-cong-diem', handler: site.point_add_his },
    { path: '/admin/sua-diem-nha-tuyen-dung', handler: site.admin_update_point },
    { path: '/admin/them-goi-diem', handler: site.admin_add_point_package },
    { path: '/admin/quan-ly-goi-diem', handler: site.admin_manag_point_package },
];
routesAdmin.forEach(route => {
    router.get(route.path, checkPermission(34), route.handler);
});

router.get('/admin/403', site.admin_not_permission);

//get data
router.post('/api/dataBlog', apiController.getDataBlogAjax);
router.post('/api/dataHome', apiController.getDataHomeAjax);
router.post('/api/getDistrict', apiController.getDiscByCity);
router.post('/api/getTagCate', apiController.getTagCate);
router.post("/SendOTPToAccount", apiController.SendOTPToAccount);
router.post("/ConfirmOTPByAccount", apiController.ConfirmOTPByAccount);

router.use(checkHardcodedRoutes);

router.get('/:slug', site.alias);
module.exports = router;