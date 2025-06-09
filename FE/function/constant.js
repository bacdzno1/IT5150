let listcate = [
  { _id: 1, name: 'IT', alias: 'it' },
  { _id: 2, name: 'SEO Website', alias: 'seo-website' },
  { _id: 3, name: 'Marketing', alias: 'marketing' },
  { _id: 4, name: 'Kế toán', alias: 'ke-toan' },
  { _id: 5, name: 'Hành chính nhân sự', alias: 'hanh-chinh-nhan-su' },
  { _id: 6, name: 'Kinh doanh', alias: 'kinh-doanh' },
  {
    _id: 119,
    name: 'Công Nghệ Thực Phẩm',
    alias: 'cong-nghe-thuc-pham'
  },
  { _id: 121, name: 'Hàng Không', alias: 'hang-khong' },
  { _id: 7, name: 'Xây dựng', alias: 'xay-dung' },
  { _id: 9, name: 'Cơ khí', alias: 'co-khi' },
  {
    _id: 141,
    name: 'Vận Chuyển Giao Nhận',
    alias: 'van-chuyen-giao-nhan'
  },
  { _id: 147, name: 'Developers', alias: 'developers' },
  { _id: 135, name: 'Tổ Chức Sự Kiện', alias: 'to-chuc-su-kien' },
  { _id: 133, name: 'An Toàn Lao Động', alias: 'an-toan-lao-dong' },
  { _id: 123, name: 'Truyền Thông', alias: 'truyen-thong' },
  { _id: 11, name: 'Điện - điện tử', alias: 'dien-dien-tu' },
  { _id: 13, name: 'Xuất nhập khẩu', alias: 'xuat-nhap-khau' },
  { _id: 17, name: 'Biên phiên dịch', alias: 'bien-phien-dich' },
  { _id: 21, name: 'Kiến trúc nội thất', alias: 'kien-truc-noi-that' },
  { _id: 23, name: 'Bất động sản', alias: 'bat-dong-san' },
  {
    _id: 25,
    name: 'Sinh viên mới ra trường',
    alias: 'sinh-vien-moi-ra-truong'
  },
  { _id: 27, name: 'Nhân viên bán hàng', alias: 'nhan-vien-ban-hang' },
  {
    _id: 29,
    name: 'Quản trị kinh doanh',
    alias: 'quan-tri-kinh-doanh'
  },
  { _id: 31, name: 'Thư ký - trợ lý', alias: 'thu-ky-tro-ly' },
  { _id: 33, name: 'Tư vấn viên', alias: 'tu-van-vien' },
  {
    _id: 35,
    name: 'Chăm sóc khách hàng',
    alias: 'cham-soc-khach-hang'
  },
  { _id: 37, name: 'Tiếp thị quảng cáo', alias: 'tiep-thi-quang-cao' },
  { _id: 39, name: 'Y tế dược', alias: 'y-te-duoc' },
  { _id: 143, name: 'Thu Ngân', alias: 'thu-ngan' },
  {
    _id: 145,
    name: 'Việc Làm Bán Thời Gian',
    alias: 'viec-lam-ban-thoi-gian'
  },
  { _id: 41, name: 'Thương mại điện tử', alias: 'thuong-mai-dien-tu' },
  { _id: 43, name: 'Luật pháp lý', alias: 'luat-phap-ly' },
  { _id: 45, name: 'Thiết bị vật tư', alias: 'thiet-bi-vat-tu' },
  { _id: 49, name: 'Giao thông vận tải', alias: 'giao-thong-van-tai' },
  { _id: 51, name: 'Quản lý điều hành', alias: 'quan-ly-dieu-hanh' },
  {
    _id: 53,
    name: 'Phát triển thị trường',
    alias: 'phat-trien-thi-truong'
  },
  { _id: 59, name: 'Vận hành sản xuất', alias: 'van-hanh-san-xuat' },
  { _id: 61, name: 'Nhập liệu', alias: 'nhap-lieu' },
  {
    _id: 63,
    name: 'Thẩm định giám định',
    alias: 'tham-dinh-giam-dinh'
  },
  { _id: 65, name: 'Du lịch', alias: 'du-lich' },
  { _id: 67, name: 'Nhà hàng khách sạn', alias: 'nha-hang-khach-san' },
  { _id: 115, name: 'Chăn nuôi thú y', alias: 'chan-nuoi-thu-y' },
  { _id: 117, name: 'Thủy Sản', alias: 'thuy-san' },
  {
    _id: 69,
    name: 'Báo  chí',
    alias: 'bao-chi'
  },
  {
    _id: 71,
    name: 'Bưu chính viễn thông',
    alias: 'buu-chinh-vien-thong'
  },
  { _id: 73, name: 'Điện tử viễn thông', alias: 'dien-tu-vien-thong' },
  {
    _id: 75,
    name: 'Hành chính văn phòng',
    alias: 'hanh-chinh-van-phong'
  },
  {
    _id: 77,
    name: 'It - Phần Cứng - Mạng',
    alias: 'it-phan-cung-mang'
  },
  { _id: 79, name: 'Kỹ Thuật', alias: 'ky-thuat' },
  { _id: 81, name: 'Thiết Kế - Mỹ Thuật', alias: 'thiet-ke-my-thuat' },
  { _id: 83, name: 'Bảo Hiểm', alias: 'bao-hiem' },
  { _id: 85, name: 'Bảo Vệ', alias: 'bao-ve' },
  { _id: 87, name: 'Dệt May - Da Giày', alias: 'det-may-da-giay' },
  { _id: 89, name: 'Hóa Học - Sinh Học', alias: 'hoa-hoc-sinh-hoc' },
  { _id: 91, name: 'Hoạch Định - Dự án', alias: 'hoach-dinh-du-an' },
  { _id: 93, name: 'Lao Động Phổ Thông', alias: 'lao-dong-pho-thong' },
  {
    _id: 95,
    name: 'Mỹ Phẩm - Thời Trang',
    alias: 'my-pham-thoi-trang-trang-suc'
  },
  { _id: 97, name: 'Ngân hàng', alias: 'ngan-hang-chung-khoan' },
  { _id: 99, name: 'Dịch Vụ', alias: 'dich-vu' },
  { _id: 101, name: 'Kỹ Thuật Ứng Dụng', alias: 'ky-thuat-ung-dung' },
  {
    _id: 103,
    name: 'Nông Lâm Ngư nghiệp',
    alias: 'nong-lam-ngu-nghiep'
  },
  { _id: 105, name: 'Quan Hệ Đối Ngoại', alias: 'quan-he-doi-ngoai' },
  { _id: 107, name: 'Thể dục - Thể thao', alias: 'the-duc-the-thao' },
  { _id: 109, name: 'Thực phẩm - Đồ uống', alias: 'thuc-pham-do-uong' },
  { _id: 111, name: 'Vận tải - Lái xe', alias: 'van-tai-lai-xe' },
  { _id: 113, name: 'Làm đẹp - Spa', alias: 'lam-dep-the-luc-spa' },
  { _id: 153, name: 'Việc Làm Phục Vụ', alias: 'viec-lam-phuc-vu' },
  {
    _id: 157,
    name: 'Việc Làm Trái Ngành ',
    alias: 'viec-lam-trai-nganh'
  },
  { _id: 159, name: 'Việc Làm Telesale', alias: 'viec-lam-telesale' },
  { _id: 161, name: 'Việc Làm Lễ Tân', alias: 'viec-lam-le-tan' },
  { _id: 163, name: 'Thống Kê', alias: 'thong-ke' },
  { _id: 165, name: 'Copywriter', alias: 'copywriter' },
  { _id: 167, name: 'Công Nghệ Cao ', alias: 'cong-nghe-cao' },
  { _id: 169, name: 'Logistic', alias: 'logistic' },
  { _id: 171, name: 'Tài Chính', alias: 'tai-chinh' },
  {
    _id: 149,
    name: 'Trợ Giảng Tiếng Anh ',
    alias: 'tro-giang-tieng-anh'
  },
  {
    _id: 151,
    name: 'Việc Làm Giáo Dục ',
    alias: 'viec-lam-nganh-giao-duc'
  },
  { _id: 125, name: 'Trắc Địa', alias: 'trac-dia' },
  { _id: 127, name: 'Nấu Ăn', alias: 'nau-an' },
  { _id: 129, name: 'Hàng Hải', alias: 'hang-hai' },
  { _id: 131, name: 'Bảo Trì ', alias: 'bao-tri' },
  { _id: 137, name: 'Địa Chất', alias: 'dia-chat' },
  { _id: 139, name: 'Thư Viện', alias: 'thu-vien' },
  {
    _id: 173,
    name: 'Khu chế xuất - khu công nghiệp',
    alias: 'khu-che-xuat-khu-cong-nghiep'
  },
  { _id: 175, name: 'Startup', alias: 'startup' }
];

exports.takelistcate = () => {
  return listcate;
} 