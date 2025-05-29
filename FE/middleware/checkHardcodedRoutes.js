const site = require('../controllers/site');
const hardcodedUrls = [
    '/cv-xin-viec',
    '/dang-nhap',
    '/dang-ky',
    '/nguoi-tim-viec',
    '/chi-tiet-ung-vien',
    '/ket-qua-tim-kiem',
    '/mau-cv-nganh-nghe',
    '/mau-cv-goi-y',
    '/tin-tuc',
    '/cam-nang-nghe-nghiep',
    '/tac-gia-bai-viet',
    '/chi-tiet-bai-viet',
    '/dang-nhap-nha-tuyen-dung',
    '/dang-ky-nha-tuyen-dung',
    '/quan-ly-nha-tuyen-dung',
    '/quan-ly-ung-vien-ung-tuyen',
    '/quan-ly-diem-loc',
    '/quan-ly-ung-vien-da-luu',
    '/quan-ly-tin-dang',
    '/cap-nhat-thong-tin-cong-ty',
    '/doi-mat-khau-nha-tuyen-dung',
    '/dang-tin-tuyen-dung',
    '/chuyen-vien-gui-ung-vien',
    '/dang-ky-ung-vien',
    '/dang-nhap-ung-vien',
    '/dang-ky-tai-cv',
    '/quan-ly-ung-vien',
    '/quan-ly-viec-ung-tuyen',
    '/quan-ly-viec-da-luu'
];

const checkHardcodedRoutes = (req, res, next) => {
    const requestedUrl = req.path;

    if (hardcodedUrls.includes(requestedUrl)) {
        switch (requestedUrl) {
            case '/cv-xin-viec':
                return site.cvpage(req, res, next);
            case '/dang-nhap':
                return site.login_page(req, res, next);
            case '/dang-tin-tuyen-dung':
                return site.managuppost(req, res, next);
            default:
                break;
        }
    }

    next();
};

module.exports = checkHardcodedRoutes;
