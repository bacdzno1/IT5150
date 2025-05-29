const data_get = require('./data');
const listCateCv = data_get.listCateCv;
const listLangCv = data_get.listLangCv;
const data_tags = data_get.data_tags2;
const listCities = [
    {
        "_id": "66666d51e2b01fd29e8e18e1",
        "cit_id": 1,
        "cit_name": "Hà Nội"
    },
    {
        "_id": "66666d51e2b01fd29e8e18e3",
        "cit_id": 2,
        "cit_name": "Hải Phòng"
    },
    {
        "_id": "66666d51e2b01fd29e8e18e5",
        "cit_id": 3,
        "cit_name": "Bắc Giang"
    },
    {
        "_id": "66666d51e2b01fd29e8e18e7",
        "cit_id": 4,
        "cit_name": "Bắc Kạn"
    },
    {
        "_id": "66666d51e2b01fd29e8e18e9",
        "cit_id": 5,
        "cit_name": "Bắc Ninh"
    },
    {
        "_id": "66666d51e2b01fd29e8e18eb",
        "cit_id": 6,
        "cit_name": "Cao Bằng"
    },
    {
        "_id": "66666d51e2b01fd29e8e18ed",
        "cit_id": 7,
        "cit_name": "Điện Biên"
    },
    {
        "_id": "66666d51e2b01fd29e8e18ef",
        "cit_id": 8,
        "cit_name": "Hòa Bình"
    },
    {
        "_id": "66666d51e2b01fd29e8e18f1",
        "cit_id": 9,
        "cit_name": "Hải Dương"
    },
    {
        "_id": "66666d51e2b01fd29e8e18f3",
        "cit_id": 10,
        "cit_name": "Hà Giang"
    },
    {
        "_id": "66666d51e2b01fd29e8e18f5",
        "cit_id": 11,
        "cit_name": "Hà Nam"
    },
    {
        "_id": "66666d51e2b01fd29e8e18f7",
        "cit_id": 12,
        "cit_name": "Hưng Yên"
    },
    {
        "_id": "66666d51e2b01fd29e8e18f9",
        "cit_id": 13,
        "cit_name": "Lào Cai"
    },
    {
        "_id": "66666d51e2b01fd29e8e18fb",
        "cit_id": 14,
        "cit_name": "Lai Châu"
    },
    {
        "_id": "66666d51e2b01fd29e8e18fd",
        "cit_id": 15,
        "cit_name": "Lạng Sơn"
    },
    {
        "_id": "66666d51e2b01fd29e8e18ff",
        "cit_id": 16,
        "cit_name": "Ninh Bình"
    },
    {
        "_id": "66666d51e2b01fd29e8e1901",
        "cit_id": 17,
        "cit_name": "Nam Định"
    },
    {
        "_id": "66666d51e2b01fd29e8e1903",
        "cit_id": 18,
        "cit_name": "Phú Thọ"
    },
    {
        "_id": "66666d51e2b01fd29e8e1905",
        "cit_id": 19,
        "cit_name": "Quảng Ninh"
    },
    {
        "_id": "66666d51e2b01fd29e8e1907",
        "cit_id": 20,
        "cit_name": "Sơn La"
    },
    {
        "_id": "66666d51e2b01fd29e8e1909",
        "cit_id": 21,
        "cit_name": "Thái Bình"
    },
    {
        "_id": "66666d51e2b01fd29e8e190b",
        "cit_id": 22,
        "cit_name": "Thái Nguyên"
    },
    {
        "_id": "66666d51e2b01fd29e8e190d",
        "cit_id": 23,
        "cit_name": "Tuyên Quang"
    },
    {
        "_id": "66666d51e2b01fd29e8e190f",
        "cit_id": 24,
        "cit_name": "Vĩnh Phúc"
    },
    {
        "_id": "66666d51e2b01fd29e8e1911",
        "cit_id": 25,
        "cit_name": "Yên Bái"
    },
    {
        "_id": "66666d51e2b01fd29e8e1913",
        "cit_id": 26,
        "cit_name": "Đà Nẵng"
    },
    {
        "_id": "66666d51e2b01fd29e8e1915",
        "cit_id": 27,
        "cit_name": "Thừa Thiên Huế"
    },
    {
        "_id": "66666d51e2b01fd29e8e1917",
        "cit_id": 28,
        "cit_name": "Khánh Hòa"
    },
    {
        "_id": "66666d51e2b01fd29e8e1919",
        "cit_id": 29,
        "cit_name": "Lâm Đồng"
    },
    {
        "_id": "66666d51e2b01fd29e8e191b",
        "cit_id": 30,
        "cit_name": "Bình Định"
    },
    {
        "_id": "66666d51e2b01fd29e8e191d",
        "cit_id": 31,
        "cit_name": "Bình Thuận"
    },
    {
        "_id": "66666d51e2b01fd29e8e191f",
        "cit_id": 32,
        "cit_name": "Đắk Lắk"
    },
    {
        "_id": "66666d51e2b01fd29e8e1921",
        "cit_id": 33,
        "cit_name": "Đắk Nông"
    },
    {
        "_id": "66666d51e2b01fd29e8e1923",
        "cit_id": 34,
        "cit_name": "Gia Lai"
    },
    {
        "_id": "66666d51e2b01fd29e8e1925",
        "cit_id": 35,
        "cit_name": "Hà Tĩnh"
    },
    {
        "_id": "66666d51e2b01fd29e8e1927",
        "cit_id": 36,
        "cit_name": "Kon Tum"
    },
    {
        "_id": "66666d51e2b01fd29e8e1929",
        "cit_id": 37,
        "cit_name": "Nghệ An"
    },
    {
        "_id": "66666d51e2b01fd29e8e192b",
        "cit_id": 38,
        "cit_name": "Ninh Thuận"
    },
    {
        "_id": "66666d51e2b01fd29e8e192d",
        "cit_id": 39,
        "cit_name": "Phú Yên"
    },
    {
        "_id": "66666d51e2b01fd29e8e192f",
        "cit_id": 40,
        "cit_name": "Quảng Bình"
    },
    {
        "_id": "66666d51e2b01fd29e8e1931",
        "cit_id": 41,
        "cit_name": "Quảng Nam"
    },
    {
        "_id": "66666d51e2b01fd29e8e1933",
        "cit_id": 42,
        "cit_name": "Quảng Ngãi"
    },
    {
        "_id": "66666d51e2b01fd29e8e1935",
        "cit_id": 43,
        "cit_name": "Quảng Trị"
    },
    {
        "_id": "66666d51e2b01fd29e8e1937",
        "cit_id": 44,
        "cit_name": "Thanh Hóa"
    },
    {
        "_id": "66666d51e2b01fd29e8e1939",
        "cit_id": 45,
        "cit_name": "Hồ Chí Minh"
    },
    {
        "_id": "66666d51e2b01fd29e8e193b",
        "cit_id": 46,
        "cit_name": "Bình Dương"
    },
    {
        "_id": "66666d51e2b01fd29e8e193d",
        "cit_id": 47,
        "cit_name": "Bà Rịa Vũng Tàu"
    },
    {
        "_id": "66666d51e2b01fd29e8e193f",
        "cit_id": 48,
        "cit_name": "Cần Thơ"
    },
    {
        "_id": "66666d51e2b01fd29e8e1941",
        "cit_id": 49,
        "cit_name": "An Giang"
    },
    {
        "_id": "66666d51e2b01fd29e8e1943",
        "cit_id": 50,
        "cit_name": "Bạc Liêu"
    },
    {
        "_id": "66666d51e2b01fd29e8e1945",
        "cit_id": 51,
        "cit_name": "Bình Phước"
    },
    {
        "_id": "66666d51e2b01fd29e8e1947",
        "cit_id": 52,
        "cit_name": "Bến Tre"
    },
    {
        "_id": "66666d51e2b01fd29e8e1949",
        "cit_id": 53,
        "cit_name": "Cà Mau"
    },
    {
        "_id": "66666d51e2b01fd29e8e194b",
        "cit_id": 54,
        "cit_name": "Đồng Tháp"
    },
    {
        "_id": "66666d51e2b01fd29e8e194d",
        "cit_id": 55,
        "cit_name": "Đồng Nai"
    },
    {
        "_id": "66666d51e2b01fd29e8e194f",
        "cit_id": 56,
        "cit_name": "Hậu Giang"
    },
    {
        "_id": "66666d51e2b01fd29e8e1951",
        "cit_id": 57,
        "cit_name": "Kiên Giang"
    },
    {
        "_id": "66666d51e2b01fd29e8e1953",
        "cit_id": 58,
        "cit_name": "Long An"
    },
    {
        "_id": "66666d51e2b01fd29e8e1955",
        "cit_id": 59,
        "cit_name": "Sóc Trăng"
    },
    {
        "_id": "66666d51e2b01fd29e8e1957",
        "cit_id": 60,
        "cit_name": "Tiền Giang"
    },
    {
        "_id": "66666d51e2b01fd29e8e1959",
        "cit_id": 61,
        "cit_name": "Tây Ninh"
    },
    {
        "_id": "66666d51e2b01fd29e8e195b",
        "cit_id": 62,
        "cit_name": "Trà Vinh"
    },
    {
        "_id": "66666d51e2b01fd29e8e195d",
        "cit_id": 63,
        "cit_name": "Vĩnh Long"
    }
];
const listSizeCompany = [
    { 0: "Chưa cập nhật" },
    { 1: "Ít hơn 10 nhân viên" },
    { 2: "10 - 24 nhân viên" },
    { 3: "25 - 99 nhân viên" },
    { 4: "100 - 499 nhân viên" },
    { 5: "500 - 999 nhân viên" },
    { 6: "Trên 1000 nhân viên" }
];
const listSizeExp = [
    { 0: "Chưa có kinh nghiệm" },
    { 1: "0 - 1 năm kinh nghiệm" },
    { 2: "Hơn 1 năm kinh nghiệm" },
    { 3: "Hơn 2 năm kinh nghiệm" },
    { 4: "Hơn 3 năm kinh nghiệm" },
    { 5: "Hơn 4 năm kinh nghiệm" },
    { 6: "Hơn 5 năm kinh nghiệm" },
    { 7: "Hơn 10 năm kinh nghiệm" },
];
const listTypeWork = [
    { 1: "Toàn thời gian cố định" },
    { 2: "Toàn thời gian tạm thời" },
    { 3: "Bán thời gian" },
    { 4: "Bán thời gian tạm thời" },
    { 5: "Hợp đồng" },
    { 6: "Khác" },
];
const genderList = [
    { 0: "Không yêu cầu" },
    { 1: "Nam" },
    { 2: "Nữ" },
];
const cateList = [
    {
        cat_id: 1,
        cat_name: "Kế toán - Kiểm toán",
    },
    {
        cat_id: 2,
        cat_name: "Hành chính - Văn phòng",
    },
    {
        cat_id: 83,
        cat_name: "Việc làm thời vụ",
    },
    {
        cat_id: 3,
        cat_name: "Sinh viên làm thêm",
    },
    {
        cat_id: 4,
        cat_name: "Xây dựng",
    },
    {
        cat_id: 5,
        cat_name: "Điện - Điện tử",
    },
    {
        cat_id: 6,
        cat_name: "Làm bán thời gian",
    },
    {
        cat_id: 7,
        cat_name: "Vận tải - Lái xe",
    },
    {
        cat_id: 8,
        cat_name: "Khách sạn - Nhà hàng",
    },
    {
        cat_id: 9,
        cat_name: "Nhân viên kinh doanh",
    },
    {
        cat_id: 10,
        cat_name: "Bán hàng",
    },
    {
        cat_id: 11,
        cat_name: "Cơ khí - Chế tạo",
    },
    {
        cat_id: 12,
        cat_name: "Lao động phổ thông",
    },
    {
        cat_id: 13,
        cat_name: "IT phần mềm",
    },
    {
        cat_id: 14,
        cat_name: "Marketing - PR",
    },
    {
        cat_id: 43,
        cat_name: "Nhập liệu",
    },
    {
        cat_id: 17,
        cat_name: "Giáo dục - Đào tạo",
    },
    {
        cat_id: 18,
        cat_name: "Kỹ thuật",
    },
    {
        cat_id: 19,
        cat_name: "Y tế - Dược",
    },
    {
        cat_id: 20,
        cat_name: "Quản trị kinh doanh",
    },
    {
        cat_id: 21,
        cat_name: "Dịch vụ",
    },
    {
        cat_id: 22,
        cat_name: "Biên - Phiên dịch",
    },
    {
        cat_id: 23,
        cat_name: "Dệt may - Da giày",
    },
    {
        cat_id: 87,
        cat_name: "Tìm việc làm thêm",
    },
    {
        cat_id: 24,
        cat_name: "Kiến trúc - Tk nội thất",
    },
    {
        cat_id: 25,
        cat_name: "Xuất nhập khẩu",
    },
    {
        cat_id: 26,
        cat_name: "IT Phần cứng - mạng",
    },
    {
        cat_id: 27,
        cat_name: "Nhân sự",
    },
    {
        cat_id: 28,
        cat_name: "Thiết kế - Mỹ thuật",
    },
    {
        cat_id: 29,
        cat_name: "Tư vấn",
    },
    {
        cat_id: 30,
        cat_name: "Bảo vệ",
    },
    {
        cat_id: 31,
        cat_name: "Ô tô - xe máy",
    },
    {
        cat_id: 32,
        cat_name: "Thư ký - Trợ lý",
    },
    {
        cat_id: 33,
        cat_name: "KD bất động sản",
    },
    {
        cat_id: 34,
        cat_name: "Du lịch",
    },
    {
        cat_id: 35,
        cat_name: "Báo chí",
    },
    {
        cat_id: 36,
        cat_name: "Thực phẩm - Đồ uống",
    },
    {
        cat_id: 37,
        cat_name: "Ngành nghề khác",
    },
    {
        cat_id: 38,
        cat_name: "Vật tư - Thiết bị",
    },
    {
        cat_id: 39,
        cat_name: "Thiết kế web",
    },
    {
        cat_id: 40,
        cat_name: "In ấn - Xuất bản",
    },
    {
        cat_id: 41,
        cat_name: "Nông - Lâm - Ngư - Nghiệp",
    },
    {
        cat_id: 42,
        cat_name: "Thương mại điện tử",
    },
    {
        cat_id: 44,
        cat_name: "Việc làm thêm tại nhà",
    },
    {
        cat_id: 45,
        cat_name: "Chăm sóc khách hàng",
    },
    {
        cat_id: 46,
        cat_name: "Sinh viên mới tốt nghiệp - Thực tập",
    },
    {
        cat_id: 47,
        cat_name: "Kỹ thuật ứng dụng",
    },
    {
        cat_id: 48,
        cat_name: "Bưu chính viễn thông",
    },
    {
        cat_id: 112,
        cat_name: "Telesales",
    },
    {
        cat_id: 49,
        cat_name: "Dầu khí - Địa chất",
    },
    {
        cat_id: 50,
        cat_name: "Giao thông vận tải - Thủy lợi - Cầu đường",
    },
    {
        cat_id: 51,
        cat_name: "Khu chế xuất - Khu công nghiệp",
    },
    {
        cat_id: 52,
        cat_name: "Làm đẹp - Thể lực - Spa",
    },
    {
        cat_id: 53,
        cat_name: "Luật - Pháp lý",
    },
    {
        cat_id: 54,
        cat_name: "Môi trường - Xử lý chất thải",
    },
    {
        cat_id: 55,
        cat_name: "Mỹ phẩm - Thời trang - Trang sức",
    },
    {
        cat_id: 56,
        cat_name: "Ngân hàng - Chứng khoán - Đầu tư",
    },
    {
        cat_id: 57,
        cat_name: "Nghệ thuật - Điện ảnh",
    },
    {
        cat_id: 58,
        cat_name: "Phát triển thị trường",
    },
    {
        cat_id: 59,
        cat_name: "Phục vụ - Tạp vụ",
    },
    {
        cat_id: 60,
        cat_name: "Quan hệ đối ngoại",
    },
    {
        cat_id: 61,
        cat_name: "Quản lý điều hành",
    },
    {
        cat_id: 62,
        cat_name: "Sản xuất - Vận hành sản xuất",
    },
    {
        cat_id: 63,
        cat_name: "Thẩm định - Giám thẩm định - Quản lý chất lượng",
    },
    {
        cat_id: 64,
        cat_name: "Thể dục - Thể thao",
    },
    {
        cat_id: 65,
        cat_name: "Hóa học - Sinh học",
    },
    {
        cat_id: 66,
        cat_name: "Bảo hiểm",
    },
    {
        cat_id: 67,
        cat_name: "Freelancer",
    },
    {
        cat_id: 68,
        cat_name: "Công chức - Viên chức ",
    },
    {
        cat_id: 71,
        cat_name: "Điện tử viễn thông",
    },
    {
        cat_id: 73,
        cat_name: "Hoạch định - Dự án",
    },
    {
        cat_id: 75,
        cat_name: "Lương cao",
    },
    {
        cat_id: 77,
        cat_name: "Tiếp thị - Quảng cáo",
    },
    {
        cat_id: 79,
        cat_name: "Việc làm Tết",
    },
    {
        cat_id: 81,
        cat_name: "Giúp việc",
    },
    {
        cat_id: 88,
        cat_name: "Thủy sản",
    },
    {
        cat_id: 89,
        cat_name: "Công nghệ thực phẩm",
    },
    {
        cat_id: 90,
        cat_name: "Chăn nuôi / Thú y",
    },
    {
        cat_id: 91,
        cat_name: "An toàn lao động",
    },
    {
        cat_id: 92,
        cat_name: "Hàng không",
    },
    {
        cat_id: 102,
        cat_name: "Thư viện",
    },
    {
        cat_id: 94,
        cat_name: "Tổ chức sự kiện",
    },
    {
        cat_id: 95,
        cat_name: "Trắc địa",
    },
    {
        cat_id: 103,
        cat_name: "Thống kê",
    },
    {
        cat_id: 97,
        cat_name: "Bảo trì",
    },
    {
        cat_id: 98,
        cat_name: "Hàng hải",
    },
    {
        cat_id: 99,
        cat_name: "Nấu ăn",
    },
    {
        cat_id: 100,
        cat_name: "Truyền thông",
    },
    {
        cat_id: 101,
        cat_name: "Startup",
    },
    {
        cat_id: 104,
        cat_name: "Copywriter",
    },
    {
        cat_id: 105,
        cat_name: "Xuất khẩu lao động",
    },
    {
        cat_id: 106,
        cat_name: "Công nghệ cao",
    },
    {
        cat_id: 107,
        cat_name: "Tài chính",
    },
    {
        cat_id: 108,
        cat_name: "Thu ngân",
    },
    {
        cat_id: 114,
        cat_name: "Lễ tân - PG - PB",
    },
    {
        cat_id: 115,
        cat_name: "Pha chế - Bar",
    },
    {
        cat_id: 116,
        cat_name: "Đầu bếp - phụ bếp",
    },
    {
        cat_id: 117,
        cat_name: "Logistic",
    },
    {
        cat_id: 118,
        cat_name: "Vận chuyển - giao nhận",
    },
    {
        cat_id: 119,
        cat_name: "Quản lý đơn hàng",
    },
    {
        cat_id: 120,
        cat_name: "It",
    },
    {
        cat_id: 121,
        cat_name: "Tài chính - Ngân hàng",
    },
    {
        cat_id: 122,
        cat_name: "An ninh - Bảo vệ",
    },
    {
        cat_id: 123,
        cat_name: "Dịch vụ du lịch",
    },
    {
        cat_id: 124,
        cat_name: "Giao thông vận tải",
    },
    {
        cat_id: 125,
        cat_name: "Bất động sản",
    },
    {
        cat_id: 126,
        cat_name: "Kiến trúc - Nội thất",
    },
    {
        cat_id: 127,
        cat_name: "Môi trường",
    },
    {
        cat_id: 128,
        cat_name: "Sức khỏe - Spa",
    },
    {
        cat_id: 129,
        cat_name: "Mỹ phẩm - Thời trang",
    },
    {
        cat_id: 130,
        cat_name: "Marketing",
    },
    {
        cat_id: 131,
        cat_name: "Kinh doanh - Bán hàng",
    },
    {
        cat_id: 132,
        cat_name: "Thiết kế",
    },
    {
        cat_id: 133,
        cat_name: "Truyền thông PR",
    },
    {
        cat_id: 134,
        cat_name: "Y tế",
    },
    {
        cat_id: 135,
        cat_name: "Việc làm online",
    },
    {
        cat_id: 136,
        cat_name: "Việc làm nước ngoài",
    },
    {
        cat_id: 137,
        cat_name: "Phi chính phủ - Phi lợi nhuận",
    },
];
const city_array = [
    {
        cit_id: 1,
        cit_name: "Hà Nội",
        cit_parent: 0,
    },
    {
        cit_id: 2,
        cit_name: "Hải Phòng",
        cit_parent: 0,
    },
    {
        cit_id: 3,
        cit_name: "Bắc Giang",
        cit_parent: 0,
    },
    {
        cit_id: 4,
        cit_name: "Bắc Kạn",
        cit_parent: 0,
    },
    {
        cit_id: 5,
        cit_name: "Bắc Ninh",
        cit_parent: 0,
    },
    {
        cit_id: 6,
        cit_name: "Cao Bằng",
        cit_parent: 0,
    },
    {
        cit_id: 7,
        cit_name: "Điện Biên",
        cit_parent: 0,
    },
    {
        cit_id: 8,
        cit_name: "Hòa Bình",
        cit_parent: 0,
    },
    {
        cit_id: 9,
        cit_name: "Hải Dương",
        cit_parent: 0,
    },
    {
        cit_id: 10,
        cit_name: "Hà Giang",
        cit_parent: 0,
    },
    {
        cit_id: 11,
        cit_name: "Hà Nam",
        cit_parent: 0,
    },
    {
        cit_id: 12,
        cit_name: "Hưng Yên",
        cit_parent: 0,
    },
    {
        cit_id: 13,
        cit_name: "Lào Cai",
        cit_parent: 0,
    },
    {
        cit_id: 14,
        cit_name: "Lai Châu",
        cit_parent: 0,
    },
    {
        cit_id: 15,
        cit_name: "Lạng Sơn",
        cit_parent: 0,
    },
    {
        cit_id: 16,
        cit_name: "Ninh Bình",
        cit_parent: 0,
    },
    {
        cit_id: 17,
        cit_name: "Nam Định",
        cit_parent: 0,
    },
    {
        cit_id: 18,
        cit_name: "Phú Thọ",
        cit_parent: 0,
    },
    {
        cit_id: 19,
        cit_name: "Quảng Ninh",
        cit_parent: 0,
    },
    {
        cit_id: 20,
        cit_name: "Sơn La",
        cit_parent: 0,
    },
    {
        cit_id: 21,
        cit_name: "Thái Bình",
        cit_parent: 0,
    },
    {
        cit_id: 22,
        cit_name: "Thái Nguyên",
        cit_parent: 0,
    },
    {
        cit_id: 23,
        cit_name: "Tuyên Quang",
        cit_parent: 0,
    },
    {
        cit_id: 24,
        cit_name: "Vĩnh Phúc",
        cit_parent: 0,
    },
    {
        cit_id: 25,
        cit_name: "Yên Bái",
        cit_parent: 0,
    },
    {
        cit_id: 26,
        cit_name: "Đà Nẵng",
        cit_parent: 0,
    },
    {
        cit_id: 27,
        cit_name: "Thừa Thiên Huế",
        cit_parent: 0,
    },
    {
        cit_id: 28,
        cit_name: "Khánh Hòa",
        cit_parent: 0,
    },
    {
        cit_id: 29,
        cit_name: "Lâm Đồng",
        cit_parent: 0,
    },
    {
        cit_id: 30,
        cit_name: "Bình Định",
        cit_parent: 0,
    },
    {
        cit_id: 31,
        cit_name: "Bình Thuận",
        cit_parent: 0,
    },
    {
        cit_id: 32,
        cit_name: "Đắk Lắk",
        cit_parent: 0,
    },
    {
        cit_id: 33,
        cit_name: "Đắk Nông",
        cit_parent: 0,
    },
    {
        cit_id: 34,
        cit_name: "Gia Lai",
        cit_parent: 0,
    },
    {
        cit_id: 35,
        cit_name: "Hà Tĩnh",
        cit_parent: 0,
    },
    {
        cit_id: 36,
        cit_name: "Kon Tum",
        cit_parent: 0,
    },
    {
        cit_id: 37,
        cit_name: "Nghệ An",
        cit_parent: 0,
    },
    {
        cit_id: 38,
        cit_name: "Ninh Thuận",
        cit_parent: 0,
    },
    {
        cit_id: 39,
        cit_name: "Phú Yên",
        cit_parent: 0,
    },
    {
        cit_id: 40,
        cit_name: "Quảng Bình",
        cit_parent: 0,
    },
    {
        cit_id: 41,
        cit_name: "Quảng Nam",
        cit_parent: 0,
    },
    {
        cit_id: 42,
        cit_name: "Quảng Ngãi",
        cit_parent: 0,
    },
    {
        cit_id: 43,
        cit_name: "Quảng Trị",
        cit_parent: 0,
    },
    {
        cit_id: 44,
        cit_name: "Thanh Hóa",
        cit_parent: 0,
    },
    {
        cit_id: 45,
        cit_name: "Hồ Chí Minh",
        cit_parent: 0,
    },
    {
        cit_id: 46,
        cit_name: "Bình Dương",
        cit_parent: 0,
    },
    {
        cit_id: 47,
        cit_name: "Bà Rịa Vũng Tàu",
        cit_parent: 0,
    },
    {
        cit_id: 48,
        cit_name: "Cần Thơ",
        cit_parent: 0,
    },
    {
        cit_id: 49,
        cit_name: "An Giang",
        cit_parent: 0,
    },
    {
        cit_id: 50,
        cit_name: "Bạc Liêu",
        cit_parent: 0,
    },
    {
        cit_id: 51,
        cit_name: "Bình Phước",
        cit_parent: 0,
    },
    {
        cit_id: 52,
        cit_name: "Bến Tre",
        cit_parent: 0,
    },
    {
        cit_id: 53,
        cit_name: "Cà Mau",
        cit_parent: 0,
    },
    {
        cit_id: 54,
        cit_name: "Đồng Tháp",
        cit_parent: 0,
    },
    {
        cit_id: 55,
        cit_name: "Đồng Nai",
        cit_parent: 0,
    },
    {
        cit_id: 56,
        cit_name: "Hậu Giang",
        cit_parent: 0,
    },
    {
        cit_id: 57,
        cit_name: "Kiên Giang",
        cit_parent: 0,
    },
    {
        cit_id: 58,
        cit_name: "Long An",
        cit_parent: 0,
    },
    {
        cit_id: 59,
        cit_name: "Sóc Trăng",
        cit_parent: 0,
    },
    {
        cit_id: 60,
        cit_name: "Tiền Giang",
        cit_parent: 0,
    },
    {
        cit_id: 61,
        cit_name: "Tây Ninh",
        cit_parent: 0,
    },
    {
        cit_id: 62,
        cit_name: "Trà Vinh",
        cit_parent: 0,
    },
    {
        cit_id: 63,
        cit_name: "Vĩnh Long",
        cit_parent: 0,
    },
    {
        cit_id: 66,
        cit_name: "Quận Ba Đình",
        cit_parent: 1,
    },
    {
        cit_id: 67,
        cit_name: "Quận Hoàn Kiếm",
        cit_parent: 1,
    },
    {
        cit_id: 68,
        cit_name: "Quận Tây Hồ",
        cit_parent: 1,
    },
    {
        cit_id: 69,
        cit_name: "Quận Long Biên",
        cit_parent: 1,
    },
    {
        cit_id: 70,
        cit_name: "Quận Cầu Giấy",
        cit_parent: 1,
    },
    {
        cit_id: 71,
        cit_name: "Quận Đống Đa",
        cit_parent: 1,
    },
    {
        cit_id: 72,
        cit_name: "Quận Hai Bà Trưng",
        cit_parent: 1,
    },
    {
        cit_id: 73,
        cit_name: "Quận Hoàng Mai",
        cit_parent: 1,
    },
    {
        cit_id: 74,
        cit_name: "Quận Thanh Xuân",
        cit_parent: 1,
    },
    {
        cit_id: 75,
        cit_name: "Huyện Sóc Sơn",
        cit_parent: 1,
    },
    {
        cit_id: 76,
        cit_name: "Huyện Đông Anh",
        cit_parent: 1,
    },
    {
        cit_id: 77,
        cit_name: "Huyện Gia Lâm",
        cit_parent: 1,
    },
    {
        cit_id: 78,
        cit_name: "Quận Nam Từ Liêm",
        cit_parent: 1,
    },
    {
        cit_id: 79,
        cit_name: "Huyện Thanh Trì",
        cit_parent: 1,
    },
    {
        cit_id: 80,
        cit_name: "Quận Bắc Từ Liêm",
        cit_parent: 1,
    },
    {
        cit_id: 81,
        cit_name: "Huyện Mê Linh",
        cit_parent: 1,
    },
    {
        cit_id: 82,
        cit_name: "Quận Hà Đông",
        cit_parent: 1,
    },
    {
        cit_id: 83,
        cit_name: "Thị xã Sơn Tây",
        cit_parent: 1,
    },
    {
        cit_id: 84,
        cit_name: "Huyện Ba Vì",
        cit_parent: 1,
    },
    {
        cit_id: 85,
        cit_name: "Huyện Phúc Thọ",
        cit_parent: 1,
    },
    {
        cit_id: 86,
        cit_name: "Huyện Đan Phượng",
        cit_parent: 1,
    },
    {
        cit_id: 87,
        cit_name: "Huyện Hoài Đức",
        cit_parent: 1,
    },
    {
        cit_id: 88,
        cit_name: "Huyện Quốc Oai",
        cit_parent: 1,
    },
    {
        cit_id: 89,
        cit_name: "Huyện Thạch Thất",
        cit_parent: 1,
    },
    {
        cit_id: 90,
        cit_name: "Huyện Chương Mỹ",
        cit_parent: 1,
    },
    {
        cit_id: 91,
        cit_name: "Huyện Thanh Oai",
        cit_parent: 1,
    },
    {
        cit_id: 92,
        cit_name: "Huyện Thường Tín",
        cit_parent: 1,
    },
    {
        cit_id: 93,
        cit_name: "Huyện Phú Xuyên",
        cit_parent: 1,
    },
    {
        cit_id: 94,
        cit_name: "Huyện Ứng Hòa",
        cit_parent: 1,
    },
    {
        cit_id: 95,
        cit_name: "Huyện Mỹ Đức",
        cit_parent: 1,
    },
    {
        cit_id: 96,
        cit_name: "Thành phố Hà Giang",
        cit_parent: 10,
    },
    {
        cit_id: 97,
        cit_name: "Huyện Đồng Văn",
        cit_parent: 10,
    },
    {
        cit_id: 98,
        cit_name: "Huyện Mèo Vạc",
        cit_parent: 10,
    },
    {
        cit_id: 99,
        cit_name: "Huyện Yên Minh",
        cit_parent: 10,
    },
    {
        cit_id: 100,
        cit_name: "Huyện Quản Bạ",
        cit_parent: 10,
    },
    {
        cit_id: 101,
        cit_name: "Huyện Vị Xuyên",
        cit_parent: 10,
    },
    {
        cit_id: 102,
        cit_name: "Huyện Bắc Mê",
        cit_parent: 10,
    },
    {
        cit_id: 103,
        cit_name: "Huyện Hoàng Su Phì",
        cit_parent: 10,
    },
    {
        cit_id: 104,
        cit_name: "Huyện Xín Mần",
        cit_parent: 10,
    },
    {
        cit_id: 105,
        cit_name: "Huyện Bắc Quang",
        cit_parent: 10,
    },
    {
        cit_id: 106,
        cit_name: "Huyện Quang Bình",
        cit_parent: 10,
    },
    {
        cit_id: 107,
        cit_name: "Thành phố Cao Bằng",
        cit_parent: 6,
    },
    {
        cit_id: 108,
        cit_name: "Huyện Bảo Lâm",
        cit_parent: 6,
    },
    {
        cit_id: 109,
        cit_name: "Huyện Bảo Lạc",
        cit_parent: 6,
    },
    {
        cit_id: 110,
        cit_name: "Huyện Thông Nông",
        cit_parent: 6,
    },
    {
        cit_id: 111,
        cit_name: "Huyện Hà Quảng",
        cit_parent: 6,
    },
    {
        cit_id: 112,
        cit_name: "Huyện Trà Lĩnh",
        cit_parent: 6,
    },
    {
        cit_id: 113,
        cit_name: "Huyện Trùng Khánh",
        cit_parent: 6,
    },
    {
        cit_id: 114,
        cit_name: "Huyện Hạ Lang",
        cit_parent: 6,
    },
    {
        cit_id: 115,
        cit_name: "Huyện Quảng Uyên",
        cit_parent: 6,
    },
    {
        cit_id: 116,
        cit_name: "Huyện Phục Hoà",
        cit_parent: 6,
    },
    {
        cit_id: 117,
        cit_name: "Huyện Hoà An",
        cit_parent: 6,
    },
    {
        cit_id: 118,
        cit_name: "Huyện Nguyên Bình",
        cit_parent: 6,
    },
    {
        cit_id: 119,
        cit_name: "Huyện Thạch An",
        cit_parent: 6,
    },
    {
        cit_id: 120,
        cit_name: "Thành Phố Bắc Kạn",
        cit_parent: 4,
    },
    {
        cit_id: 121,
        cit_name: "Huyện Pác Nặm",
        cit_parent: 4,
    },
    {
        cit_id: 122,
        cit_name: "Huyện Ba Bể",
        cit_parent: 4,
    },
    {
        cit_id: 123,
        cit_name: "Huyện Ngân Sơn",
        cit_parent: 4,
    },
    {
        cit_id: 124,
        cit_name: "Huyện Bạch Thông",
        cit_parent: 4,
    },
    {
        cit_id: 125,
        cit_name: "Huyện Chợ Đồn",
        cit_parent: 4,
    },
    {
        cit_id: 126,
        cit_name: "Huyện Chợ Mới",
        cit_parent: 4,
    },
    {
        cit_id: 127,
        cit_name: "Huyện Na Rì",
        cit_parent: 4,
    },
    {
        cit_id: 128,
        cit_name: "Thành phố Tuyên Quang",
        cit_parent: 23,
    },
    {
        cit_id: 129,
        cit_name: "Huyện Lâm Bình",
        cit_parent: 23,
    },
    {
        cit_id: 130,
        cit_name: "Huyện Nà Hang",
        cit_parent: 23,
    },
    {
        cit_id: 131,
        cit_name: "Huyện Chiêm Hóa",
        cit_parent: 23,
    },
    {
        cit_id: 132,
        cit_name: "Huyện Hàm Yên",
        cit_parent: 23,
    },
    {
        cit_id: 133,
        cit_name: "Huyện Yên Sơn",
        cit_parent: 23,
    },
    {
        cit_id: 134,
        cit_name: "Huyện Sơn Dương",
        cit_parent: 23,
    },
    {
        cit_id: 135,
        cit_name: "Thành phố Lào Cai",
        cit_parent: 13,
    },
    {
        cit_id: 136,
        cit_name: "Huyện Bát Xát",
        cit_parent: 13,
    },
    {
        cit_id: 137,
        cit_name: "Huyện Mường Khương",
        cit_parent: 13,
    },
    {
        cit_id: 138,
        cit_name: "Huyện Si Ma Cai",
        cit_parent: 13,
    },
    {
        cit_id: 139,
        cit_name: "Huyện Bắc Hà",
        cit_parent: 13,
    },
    {
        cit_id: 140,
        cit_name: "Huyện Bảo Thắng",
        cit_parent: 13,
    },
    {
        cit_id: 141,
        cit_name: "Huyện Bảo Yên",
        cit_parent: 13,
    },
    {
        cit_id: 142,
        cit_name: "Thị xã Sa Pa",
        cit_parent: 13,
    },
    {
        cit_id: 143,
        cit_name: "Huyện Văn Bàn",
        cit_parent: 13,
    },
    {
        cit_id: 144,
        cit_name: "Thành phố Điện Biên Phủ",
        cit_parent: 7,
    },
    {
        cit_id: 145,
        cit_name: "Thị Xã Mường Lay",
        cit_parent: 7,
    },
    {
        cit_id: 146,
        cit_name: "Huyện Mường Nhé",
        cit_parent: 7,
    },
    {
        cit_id: 147,
        cit_name: "Huyện Mường Chà",
        cit_parent: 7,
    },
    {
        cit_id: 148,
        cit_name: "Huyện Tủa Chùa",
        cit_parent: 7,
    },
    {
        cit_id: 149,
        cit_name: "Huyện Tuần Giáo",
        cit_parent: 7,
    },
    {
        cit_id: 150,
        cit_name: "Huyện Điện Biên",
        cit_parent: 7,
    },
    {
        cit_id: 151,
        cit_name: "Huyện Điện Biên Đông",
        cit_parent: 7,
    },
    {
        cit_id: 152,
        cit_name: "Huyện Mường Ảng",
        cit_parent: 7,
    },
    {
        cit_id: 153,
        cit_name: "Huyện Nậm Pồ",
        cit_parent: 7,
    },
    {
        cit_id: 154,
        cit_name: "Thành phố Lai Châu",
        cit_parent: 14,
    },
    {
        cit_id: 155,
        cit_name: "Huyện Tam Đường",
        cit_parent: 14,
    },
    {
        cit_id: 156,
        cit_name: "Huyện Mường Tè",
        cit_parent: 14,
    },
    {
        cit_id: 157,
        cit_name: "Huyện Sìn Hồ",
        cit_parent: 14,
    },
    {
        cit_id: 158,
        cit_name: "Huyện Phong Thổ",
        cit_parent: 14,
    },
    {
        cit_id: 159,
        cit_name: "Huyện Than Uyên",
        cit_parent: 14,
    },
    {
        cit_id: 160,
        cit_name: "Huyện Tân Uyên",
        cit_parent: 14,
    },
    {
        cit_id: 161,
        cit_name: "Huyện Nậm Nhùn",
        cit_parent: 14,
    },
    {
        cit_id: 162,
        cit_name: "Thành phố Sơn La",
        cit_parent: 20,
    },
    {
        cit_id: 163,
        cit_name: "Huyện Quỳnh Nhai",
        cit_parent: 20,
    },
    {
        cit_id: 164,
        cit_name: "Huyện Thuận Châu",
        cit_parent: 20,
    },
    {
        cit_id: 165,
        cit_name: "Huyện Mường La",
        cit_parent: 20,
    },
    {
        cit_id: 166,
        cit_name: "Huyện Bắc Yên",
        cit_parent: 20,
    },
    {
        cit_id: 167,
        cit_name: "Huyện Phù Yên",
        cit_parent: 20,
    },
    {
        cit_id: 168,
        cit_name: "Huyện Mộc Châu",
        cit_parent: 20,
    },
    {
        cit_id: 169,
        cit_name: "Huyện Yên Châu",
        cit_parent: 20,
    },
    {
        cit_id: 170,
        cit_name: "Huyện Mai Sơn",
        cit_parent: 20,
    },
    {
        cit_id: 171,
        cit_name: "Huyện Sông Mã",
        cit_parent: 20,
    },
    {
        cit_id: 172,
        cit_name: "Huyện Sốp Cộp",
        cit_parent: 20,
    },
    {
        cit_id: 173,
        cit_name: "Huyện Vân Hồ",
        cit_parent: 20,
    },
    {
        cit_id: 174,
        cit_name: "Thành phố Yên Bái",
        cit_parent: 25,
    },
    {
        cit_id: 175,
        cit_name: "Thị xã Nghĩa Lộ",
        cit_parent: 25,
    },
    {
        cit_id: 176,
        cit_name: "Huyện Lục Yên",
        cit_parent: 25,
    },
    {
        cit_id: 177,
        cit_name: "Huyện Văn Yên",
        cit_parent: 25,
    },
    {
        cit_id: 178,
        cit_name: "Huyện Mù Căng Chải",
        cit_parent: 25,
    },
    {
        cit_id: 179,
        cit_name: "Huyện Trấn Yên",
        cit_parent: 25,
    },
    {
        cit_id: 180,
        cit_name: "Huyện Trạm Tấu",
        cit_parent: 25,
    },
    {
        cit_id: 181,
        cit_name: "Huyện Văn Chấn",
        cit_parent: 25,
    },
    {
        cit_id: 182,
        cit_name: "Huyện Yên Bình",
        cit_parent: 25,
    },
    {
        cit_id: 183,
        cit_name: "Thành phố Hòa Bình",
        cit_parent: 8,
    },
    {
        cit_id: 184,
        cit_name: "Huyện Đà Bắc",
        cit_parent: 8,
    },
    {
        cit_id: 185,
        cit_name: "Huyện Kỳ Sơn",
        cit_parent: 8,
    },
    {
        cit_id: 186,
        cit_name: "Huyện Lương Sơn",
        cit_parent: 8,
    },
    {
        cit_id: 187,
        cit_name: "Huyện Kim Bôi",
        cit_parent: 8,
    },
    {
        cit_id: 188,
        cit_name: "Huyện Cao Phong",
        cit_parent: 8,
    },
    {
        cit_id: 189,
        cit_name: "Huyện Tân Lạc",
        cit_parent: 8,
    },
    {
        cit_id: 190,
        cit_name: "Huyện Mai Châu",
        cit_parent: 8,
    },
    {
        cit_id: 191,
        cit_name: "Huyện Lạc Sơn",
        cit_parent: 8,
    },
    {
        cit_id: 192,
        cit_name: "Huyện Yên Thủy",
        cit_parent: 8,
    },
    {
        cit_id: 193,
        cit_name: "Huyện Lạc Thủy",
        cit_parent: 8,
    },
    {
        cit_id: 194,
        cit_name: "Thành phố Thái Nguyên",
        cit_parent: 22,
    },
    {
        cit_id: 195,
        cit_name: "Thành phố Sông Công",
        cit_parent: 22,
    },
    {
        cit_id: 196,
        cit_name: "Huyện Định Hóa",
        cit_parent: 22,
    },
    {
        cit_id: 197,
        cit_name: "Huyện Phú Lương",
        cit_parent: 22,
    },
    {
        cit_id: 198,
        cit_name: "Huyện Đồng Hỷ",
        cit_parent: 22,
    },
    {
        cit_id: 199,
        cit_name: "Huyện Võ Nhai",
        cit_parent: 22,
    },
    {
        cit_id: 200,
        cit_name: "Huyện Đại Từ",
        cit_parent: 22,
    },
    {
        cit_id: 201,
        cit_name: "Thị xã Phổ Yên",
        cit_parent: 22,
    },
    {
        cit_id: 202,
        cit_name: "Huyện Phú Bình",
        cit_parent: 22,
    },
    {
        cit_id: 203,
        cit_name: "Thành phố Lạng Sơn",
        cit_parent: 15,
    },
    {
        cit_id: 204,
        cit_name: "Huyện Tràng Định",
        cit_parent: 15,
    },
    {
        cit_id: 205,
        cit_name: "Huyện Bình Gia",
        cit_parent: 15,
    },
    {
        cit_id: 206,
        cit_name: "Huyện Văn Lãng",
        cit_parent: 15,
    },
    {
        cit_id: 207,
        cit_name: "Huyện Cao Lộc",
        cit_parent: 15,
    },
    {
        cit_id: 208,
        cit_name: "Huyện Văn Quan",
        cit_parent: 15,
    },
    {
        cit_id: 209,
        cit_name: "Huyện Bắc Sơn",
        cit_parent: 15,
    },
    {
        cit_id: 210,
        cit_name: "Huyện Hữu Lũng",
        cit_parent: 15,
    },
    {
        cit_id: 211,
        cit_name: "Huyện Chi Lăng",
        cit_parent: 15,
    },
    {
        cit_id: 212,
        cit_name: "Huyện Lộc Bình",
        cit_parent: 15,
    },
    {
        cit_id: 213,
        cit_name: "Huyện Đình Lập",
        cit_parent: 15,
    },
    {
        cit_id: 214,
        cit_name: "Thành phố Hạ Long",
        cit_parent: 19,
    },
    {
        cit_id: 215,
        cit_name: "Thành phố Móng Cái",
        cit_parent: 19,
    },
    {
        cit_id: 216,
        cit_name: "Thành phố Cẩm Phả",
        cit_parent: 19,
    },
    {
        cit_id: 217,
        cit_name: "Thành phố Uông Bí",
        cit_parent: 19,
    },
    {
        cit_id: 218,
        cit_name: "Huyện Bình Liêu",
        cit_parent: 19,
    },
    {
        cit_id: 219,
        cit_name: "Huyện Tiên Yên",
        cit_parent: 19,
    },
    {
        cit_id: 220,
        cit_name: "Huyện Đầm Hà",
        cit_parent: 19,
    },
    {
        cit_id: 221,
        cit_name: "Huyện Hải Hà",
        cit_parent: 19,
    },
    {
        cit_id: 222,
        cit_name: "Huyện Ba Chẽ",
        cit_parent: 19,
    },
    {
        cit_id: 223,
        cit_name: "Huyện Vân Đồn",
        cit_parent: 19,
    },
    {
        cit_id: 225,
        cit_name: "Thị xã Đông Triều",
        cit_parent: 19,
    },
    {
        cit_id: 226,
        cit_name: "Thị xã Quảng Yên",
        cit_parent: 19,
    },
    {
        cit_id: 227,
        cit_name: "Huyện Cô Tô",
        cit_parent: 19,
    },
    {
        cit_id: 228,
        cit_name: "Thành phố Bắc Giang",
        cit_parent: 3,
    },
    {
        cit_id: 229,
        cit_name: "Huyện Yên Thế",
        cit_parent: 3,
    },
    {
        cit_id: 230,
        cit_name: "Huyện Tân Yên",
        cit_parent: 3,
    },
    {
        cit_id: 231,
        cit_name: "Huyện Lạng Giang",
        cit_parent: 3,
    },
    {
        cit_id: 232,
        cit_name: "Huyện Lục Nam",
        cit_parent: 3,
    },
    {
        cit_id: 233,
        cit_name: "Huyện Lục Ngạn",
        cit_parent: 3,
    },
    {
        cit_id: 234,
        cit_name: "Huyện Sơn Động",
        cit_parent: 3,
    },
    {
        cit_id: 235,
        cit_name: "Huyện Yên Dũng",
        cit_parent: 3,
    },
    {
        cit_id: 236,
        cit_name: "Huyện Việt Yên",
        cit_parent: 3,
    },
    {
        cit_id: 237,
        cit_name: "Huyện Hiệp Hòa",
        cit_parent: 3,
    },
    {
        cit_id: 238,
        cit_name: "Thành phố Việt Trì",
        cit_parent: 18,
    },
    {
        cit_id: 239,
        cit_name: "Thị xã Phú Thọ",
        cit_parent: 18,
    },
    {
        cit_id: 240,
        cit_name: "Huyện Đoan Hùng",
        cit_parent: 18,
    },
    {
        cit_id: 241,
        cit_name: "Huyện Hạ Hoà",
        cit_parent: 18,
    },
    {
        cit_id: 242,
        cit_name: "Huyện Thanh Ba",
        cit_parent: 18,
    },
    {
        cit_id: 243,
        cit_name: "Huyện Phù Ninh",
        cit_parent: 18,
    },
    {
        cit_id: 244,
        cit_name: "Huyện Yên Lập",
        cit_parent: 18,
    },
    {
        cit_id: 245,
        cit_name: "Huyện Cẩm Khê",
        cit_parent: 18,
    },
    {
        cit_id: 246,
        cit_name: "Huyện Tam Nông",
        cit_parent: 18,
    },
    {
        cit_id: 247,
        cit_name: "Huyện Lâm Thao",
        cit_parent: 18,
    },
    {
        cit_id: 248,
        cit_name: "Huyện Thanh Sơn",
        cit_parent: 18,
    },
    {
        cit_id: 249,
        cit_name: "Huyện Thanh Thuỷ",
        cit_parent: 18,
    },
    {
        cit_id: 250,
        cit_name: "Huyện Tân Sơn",
        cit_parent: 18,
    },
    {
        cit_id: 251,
        cit_name: "Thành phố Vĩnh Yên",
        cit_parent: 24,
    },
    {
        cit_id: 252,
        cit_name: "Thành phố Phúc Yên",
        cit_parent: 24,
    },
    {
        cit_id: 253,
        cit_name: "Huyện Lập Thạch",
        cit_parent: 24,
    },
    {
        cit_id: 254,
        cit_name: "Huyện Tam Dương",
        cit_parent: 24,
    },
    {
        cit_id: 255,
        cit_name: "Huyện Tam Đảo",
        cit_parent: 24,
    },
    {
        cit_id: 256,
        cit_name: "Huyện Bình Xuyên",
        cit_parent: 24,
    },
    {
        cit_id: 257,
        cit_name: "Huyện Yên Lạc",
        cit_parent: 24,
    },
    {
        cit_id: 258,
        cit_name: "Huyện Vĩnh Tường",
        cit_parent: 24,
    },
    {
        cit_id: 259,
        cit_name: "Huyện Sông Lô",
        cit_parent: 24,
    },
    {
        cit_id: 260,
        cit_name: "Thành phố Bắc Ninh",
        cit_parent: 5,
    },
    {
        cit_id: 261,
        cit_name: "Huyện Yên Phong",
        cit_parent: 5,
    },
    {
        cit_id: 262,
        cit_name: "Huyện Quế Võ",
        cit_parent: 5,
    },
    {
        cit_id: 263,
        cit_name: "Huyện Tiên Du",
        cit_parent: 5,
    },
    {
        cit_id: 264,
        cit_name: "Thị xã Từ Sơn",
        cit_parent: 5,
    },
    {
        cit_id: 265,
        cit_name: "Huyện Thuận Thành",
        cit_parent: 5,
    },
    {
        cit_id: 266,
        cit_name: "Huyện Gia Bình",
        cit_parent: 5,
    },
    {
        cit_id: 267,
        cit_name: "Huyện Lương Tài",
        cit_parent: 5,
    },
    {
        cit_id: 268,
        cit_name: "Thành phố Hải Dương",
        cit_parent: 9,
    },
    {
        cit_id: 269,
        cit_name: "Thành phố Chí Linh",
        cit_parent: 9,
    },
    {
        cit_id: 270,
        cit_name: "Huyện Nam Sách",
        cit_parent: 9,
    },
    {
        cit_id: 271,
        cit_name: "Huyện Kinh Môn",
        cit_parent: 9,
    },
    {
        cit_id: 272,
        cit_name: "Huyện Kim Thành",
        cit_parent: 9,
    },
    {
        cit_id: 273,
        cit_name: "Huyện Thanh Hà",
        cit_parent: 9,
    },
    {
        cit_id: 274,
        cit_name: "Huyện Cẩm Giàng",
        cit_parent: 9,
    },
    {
        cit_id: 275,
        cit_name: "Huyện Bình Giang",
        cit_parent: 9,
    },
    {
        cit_id: 276,
        cit_name: "Huyện Gia Lộc",
        cit_parent: 9,
    },
    {
        cit_id: 277,
        cit_name: "Huyện Tứ Kỳ",
        cit_parent: 9,
    },
    {
        cit_id: 278,
        cit_name: "Huyện Ninh Giang",
        cit_parent: 9,
    },
    {
        cit_id: 279,
        cit_name: "Huyện Thanh Miện",
        cit_parent: 9,
    },
    {
        cit_id: 280,
        cit_name: "Quận Hồng Bàng",
        cit_parent: 2,
    },
    {
        cit_id: 281,
        cit_name: "Quận Ngô Quyền",
        cit_parent: 2,
    },
    {
        cit_id: 282,
        cit_name: "Quận Lê Chân",
        cit_parent: 2,
    },
    {
        cit_id: 283,
        cit_name: "Quận Hải An",
        cit_parent: 2,
    },
    {
        cit_id: 284,
        cit_name: "Quận Kiến An",
        cit_parent: 2,
    },
    {
        cit_id: 285,
        cit_name: "Quận Đồ Sơn",
        cit_parent: 2,
    },
    {
        cit_id: 286,
        cit_name: "Quận Dương Kinh",
        cit_parent: 2,
    },
    {
        cit_id: 287,
        cit_name: "Huyện Thuỷ Nguyên",
        cit_parent: 2,
    },
    {
        cit_id: 288,
        cit_name: "Huyện An Dương",
        cit_parent: 2,
    },
    {
        cit_id: 289,
        cit_name: "Huyện An Lão",
        cit_parent: 2,
    },
    {
        cit_id: 290,
        cit_name: "Huyện Kiến Thuỵ",
        cit_parent: 2,
    },
    {
        cit_id: 291,
        cit_name: "Huyện Tiên Lãng",
        cit_parent: 2,
    },
    {
        cit_id: 292,
        cit_name: "Huyện Vĩnh Bảo",
        cit_parent: 2,
    },
    {
        cit_id: 293,
        cit_name: "Huyện Cát Hải",
        cit_parent: 2,
    },
    {
        cit_id: 294,
        cit_name: "Thành phố Hưng Yên",
        cit_parent: 12,
    },
    {
        cit_id: 295,
        cit_name: "Huyện Văn Lâm",
        cit_parent: 12,
    },
    {
        cit_id: 296,
        cit_name: "Huyện Văn Giang",
        cit_parent: 12,
    },
    {
        cit_id: 297,
        cit_name: "Huyện Yên Mỹ",
        cit_parent: 12,
    },
    {
        cit_id: 298,
        cit_name: "Thị xã Mỹ Hào",
        cit_parent: 12,
    },
    {
        cit_id: 299,
        cit_name: "Huyện Ân Thi",
        cit_parent: 12,
    },
    {
        cit_id: 300,
        cit_name: "Huyện Khoái Châu",
        cit_parent: 12,
    },
    {
        cit_id: 301,
        cit_name: "Huyện Kim Động",
        cit_parent: 12,
    },
    {
        cit_id: 302,
        cit_name: "Huyện Tiên Lữ",
        cit_parent: 12,
    },
    {
        cit_id: 303,
        cit_name: "Huyện Phù Cừ",
        cit_parent: 12,
    },
    {
        cit_id: 304,
        cit_name: "Thành phố Thái Bình",
        cit_parent: 21,
    },
    {
        cit_id: 305,
        cit_name: "Huyện Quỳnh Phụ",
        cit_parent: 21,
    },
    {
        cit_id: 306,
        cit_name: "Huyện Hưng Hà",
        cit_parent: 21,
    },
    {
        cit_id: 307,
        cit_name: "Huyện Đông Hưng",
        cit_parent: 21,
    },
    {
        cit_id: 308,
        cit_name: "Huyện Thái Thụy",
        cit_parent: 21,
    },
    {
        cit_id: 309,
        cit_name: "Huyện Tiền Hải",
        cit_parent: 21,
    },
    {
        cit_id: 310,
        cit_name: "Huyện Kiến Xương",
        cit_parent: 21,
    },
    {
        cit_id: 311,
        cit_name: "Huyện Vũ Thư",
        cit_parent: 21,
    },
    {
        cit_id: 312,
        cit_name: "Thành phố Phủ Lý",
        cit_parent: 11,
    },
    {
        cit_id: 313,
        cit_name: "Thị xã Duy Tiên",
        cit_parent: 11,
    },
    {
        cit_id: 314,
        cit_name: "Huyện Kim Bảng",
        cit_parent: 11,
    },
    {
        cit_id: 315,
        cit_name: "Huyện Thanh Liêm",
        cit_parent: 11,
    },
    {
        cit_id: 316,
        cit_name: "Huyện Bình Lục",
        cit_parent: 11,
    },
    {
        cit_id: 317,
        cit_name: "Huyện Lý Nhân",
        cit_parent: 11,
    },
    {
        cit_id: 318,
        cit_name: "Thành phố Nam Định",
        cit_parent: 17,
    },
    {
        cit_id: 319,
        cit_name: "Huyện Mỹ Lộc",
        cit_parent: 17,
    },
    {
        cit_id: 320,
        cit_name: "Huyện Vụ Bản",
        cit_parent: 17,
    },
    {
        cit_id: 321,
        cit_name: "Huyện Ý Yên",
        cit_parent: 17,
    },
    {
        cit_id: 322,
        cit_name: "Huyện Nghĩa Hưng",
        cit_parent: 17,
    },
    {
        cit_id: 323,
        cit_name: "Huyện Nam Trực",
        cit_parent: 17,
    },
    {
        cit_id: 324,
        cit_name: "Huyện Trực Ninh",
        cit_parent: 17,
    },
    {
        cit_id: 325,
        cit_name: "Huyện Xuân Trường",
        cit_parent: 17,
    },
    {
        cit_id: 326,
        cit_name: "Huyện Giao Thủy",
        cit_parent: 17,
    },
    {
        cit_id: 327,
        cit_name: "Huyện Hải Hậu",
        cit_parent: 17,
    },
    {
        cit_id: 328,
        cit_name: "Thành phố Ninh Bình",
        cit_parent: 16,
    },
    {
        cit_id: 329,
        cit_name: "Thành phố Tam Điệp",
        cit_parent: 16,
    },
    {
        cit_id: 330,
        cit_name: "Huyện Nho Quan",
        cit_parent: 16,
    },
    {
        cit_id: 331,
        cit_name: "Huyện Gia Viễn",
        cit_parent: 16,
    },
    {
        cit_id: 332,
        cit_name: "Huyện Hoa Lư",
        cit_parent: 16,
    },
    {
        cit_id: 333,
        cit_name: "Huyện Yên Khánh",
        cit_parent: 16,
    },
    {
        cit_id: 334,
        cit_name: "Huyện Kim Sơn",
        cit_parent: 16,
    },
    {
        cit_id: 335,
        cit_name: "Huyện Yên Mô",
        cit_parent: 16,
    },
    {
        cit_id: 336,
        cit_name: "Thành phố Thanh Hóa",
        cit_parent: 44,
    },
    {
        cit_id: 337,
        cit_name: "Thị xã Bỉm Sơn",
        cit_parent: 44,
    },
    {
        cit_id: 338,
        cit_name: "Thành phố Sầm Sơn",
        cit_parent: 44,
    },
    {
        cit_id: 339,
        cit_name: "Huyện Mường Lát",
        cit_parent: 44,
    },
    {
        cit_id: 340,
        cit_name: "Huyện Quan Hóa",
        cit_parent: 44,
    },
    {
        cit_id: 341,
        cit_name: "Huyện Bá Thước",
        cit_parent: 44,
    },
    {
        cit_id: 342,
        cit_name: "Huyện Quan Sơn",
        cit_parent: 44,
    },
    {
        cit_id: 343,
        cit_name: "Huyện Lang Chánh",
        cit_parent: 44,
    },
    {
        cit_id: 344,
        cit_name: "Huyện Ngọc Lặc",
        cit_parent: 44,
    },
    {
        cit_id: 345,
        cit_name: "Huyện Cẩm Thủy",
        cit_parent: 44,
    },
    {
        cit_id: 346,
        cit_name: "Huyện Thạch Thành",
        cit_parent: 44,
    },
    {
        cit_id: 347,
        cit_name: "Huyện Hà Trung",
        cit_parent: 44,
    },
    {
        cit_id: 348,
        cit_name: "Huyện Vĩnh Lộc",
        cit_parent: 44,
    },
    {
        cit_id: 349,
        cit_name: "Huyện Yên Định",
        cit_parent: 44,
    },
    {
        cit_id: 350,
        cit_name: "Huyện Thọ Xuân",
        cit_parent: 44,
    },
    {
        cit_id: 351,
        cit_name: "Huyện Thường Xuân",
        cit_parent: 44,
    },
    {
        cit_id: 352,
        cit_name: "Huyện Triệu Sơn",
        cit_parent: 44,
    },
    {
        cit_id: 353,
        cit_name: "Huyện Thiệu Hóa",
        cit_parent: 44,
    },
    {
        cit_id: 354,
        cit_name: "Huyện Hoằng Hóa",
        cit_parent: 44,
    },
    {
        cit_id: 355,
        cit_name: "Huyện Hậu Lộc",
        cit_parent: 44,
    },
    {
        cit_id: 356,
        cit_name: "Huyện Nga Sơn",
        cit_parent: 44,
    },
    {
        cit_id: 357,
        cit_name: "Huyện Như Xuân",
        cit_parent: 44,
    },
    {
        cit_id: 358,
        cit_name: "Huyện Như Thanh",
        cit_parent: 44,
    },
    {
        cit_id: 359,
        cit_name: "Huyện Nông Cống",
        cit_parent: 44,
    },
    {
        cit_id: 360,
        cit_name: "Huyện Đông Sơn",
        cit_parent: 44,
    },
    {
        cit_id: 361,
        cit_name: "Huyện Quảng Xương",
        cit_parent: 44,
    },
    {
        cit_id: 362,
        cit_name: "Huyện Tĩnh Gia",
        cit_parent: 44,
    },
    {
        cit_id: 363,
        cit_name: "Thành phố Vinh",
        cit_parent: 37,
    },
    {
        cit_id: 364,
        cit_name: "Thị xã Cửa Lò",
        cit_parent: 37,
    },
    {
        cit_id: 365,
        cit_name: "Thị xã Thái Hoà",
        cit_parent: 37,
    },
    {
        cit_id: 366,
        cit_name: "Huyện Quế Phong",
        cit_parent: 37,
    },
    {
        cit_id: 367,
        cit_name: "Huyện Quỳ Châu",
        cit_parent: 37,
    },
    {
        cit_id: 368,
        cit_name: "Huyện Tương Dương",
        cit_parent: 37,
    },
    {
        cit_id: 369,
        cit_name: "Huyện Nghĩa Đàn",
        cit_parent: 37,
    },
    {
        cit_id: 370,
        cit_name: "Huyện Quỳ Hợp",
        cit_parent: 37,
    },
    {
        cit_id: 371,
        cit_name: "Huyện Quỳnh Lưu",
        cit_parent: 37,
    },
    {
        cit_id: 372,
        cit_name: "Huyện Con Cuông",
        cit_parent: 37,
    },
    {
        cit_id: 373,
        cit_name: "Huyện Tân Kỳ",
        cit_parent: 37,
    },
    {
        cit_id: 374,
        cit_name: "Huyện Anh Sơn",
        cit_parent: 37,
    },
    {
        cit_id: 375,
        cit_name: "Huyện Diễn Châu",
        cit_parent: 37,
    },
    {
        cit_id: 376,
        cit_name: "Huyện Yên Thành",
        cit_parent: 37,
    },
    {
        cit_id: 377,
        cit_name: "Huyện Đô Lương",
        cit_parent: 37,
    },
    {
        cit_id: 378,
        cit_name: "Huyện Thanh Chương",
        cit_parent: 37,
    },
    {
        cit_id: 379,
        cit_name: "Huyện Nghi Lộc",
        cit_parent: 37,
    },
    {
        cit_id: 380,
        cit_name: "Huyện Nam Đàn",
        cit_parent: 37,
    },
    {
        cit_id: 381,
        cit_name: "Huyện Hưng Nguyên",
        cit_parent: 37,
    },
    {
        cit_id: 382,
        cit_name: "Thị xã Hoàng Mai",
        cit_parent: 37,
    },
    {
        cit_id: 383,
        cit_name: "Thành phố Hà Tĩnh",
        cit_parent: 35,
    },
    {
        cit_id: 384,
        cit_name: "Thị xã Hồng Lĩnh",
        cit_parent: 35,
    },
    {
        cit_id: 385,
        cit_name: "Huyện Hương Sơn",
        cit_parent: 35,
    },
    {
        cit_id: 386,
        cit_name: "Huyện Đức Thọ",
        cit_parent: 35,
    },
    {
        cit_id: 387,
        cit_name: "Huyện Vũ Quang",
        cit_parent: 35,
    },
    {
        cit_id: 388,
        cit_name: "Huyện Nghi Xuân",
        cit_parent: 35,
    },
    {
        cit_id: 389,
        cit_name: "Huyện Can Lộc",
        cit_parent: 35,
    },
    {
        cit_id: 390,
        cit_name: "Huyện Hương Khê",
        cit_parent: 35,
    },
    {
        cit_id: 391,
        cit_name: "Huyện Thạch Hà",
        cit_parent: 35,
    },
    {
        cit_id: 392,
        cit_name: "Huyện Cẩm Xuyên",
        cit_parent: 35,
    },
    {
        cit_id: 393,
        cit_name: "Huyện Kỳ Anh",
        cit_parent: 35,
    },
    {
        cit_id: 394,
        cit_name: "Huyện Lộc Hà",
        cit_parent: 35,
    },
    {
        cit_id: 395,
        cit_name: "Thị xã Kỳ Anh",
        cit_parent: 35,
    },
    {
        cit_id: 396,
        cit_name: "Thành Phố Đồng Hới",
        cit_parent: 40,
    },
    {
        cit_id: 397,
        cit_name: "Huyện Minh Hóa",
        cit_parent: 40,
    },
    {
        cit_id: 398,
        cit_name: "Huyện Tuyên Hóa",
        cit_parent: 40,
    },
    {
        cit_id: 399,
        cit_name: "Huyện Quảng Trạch",
        cit_parent: 40,
    },
    {
        cit_id: 400,
        cit_name: "Huyện Bố Trạch",
        cit_parent: 40,
    },
    {
        cit_id: 401,
        cit_name: "Huyện Quảng Ninh",
        cit_parent: 40,
    },
    {
        cit_id: 402,
        cit_name: "Huyện Lệ Thủy",
        cit_parent: 40,
    },
    {
        cit_id: 403,
        cit_name: "Thị xã Ba Đồn",
        cit_parent: 40,
    },
    {
        cit_id: 404,
        cit_name: "Thành phố Đông Hà",
        cit_parent: 43,
    },
    {
        cit_id: 405,
        cit_name: "Thị xã Quảng Trị",
        cit_parent: 43,
    },
    {
        cit_id: 406,
        cit_name: "Huyện Vĩnh Linh",
        cit_parent: 43,
    },
    {
        cit_id: 407,
        cit_name: "Huyện Hướng Hóa",
        cit_parent: 43,
    },
    {
        cit_id: 408,
        cit_name: "Huyện Gio Linh",
        cit_parent: 43,
    },
    {
        cit_id: 409,
        cit_name: "Huyện Đa Krông",
        cit_parent: 43,
    },
    {
        cit_id: 410,
        cit_name: "Huyện Cam Lộ",
        cit_parent: 43,
    },
    {
        cit_id: 411,
        cit_name: "Huyện Triệu Phong",
        cit_parent: 43,
    },
    {
        cit_id: 412,
        cit_name: "Huyện Hải Lăng",
        cit_parent: 43,
    },
    {
        cit_id: 413,
        cit_name: "Thành phố Huế",
        cit_parent: 27,
    },
    {
        cit_id: 414,
        cit_name: "Huyện Phong Điền",
        cit_parent: 27,
    },
    {
        cit_id: 415,
        cit_name: "Huyện Quảng Điền",
        cit_parent: 27,
    },
    {
        cit_id: 416,
        cit_name: "Huyện Phú Vang",
        cit_parent: 27,
    },
    {
        cit_id: 417,
        cit_name: "Thị xã Hương Thủy",
        cit_parent: 27,
    },
    {
        cit_id: 418,
        cit_name: "Thị xã Hương Trà",
        cit_parent: 27,
    },
    {
        cit_id: 419,
        cit_name: "Huyện A Lưới",
        cit_parent: 27,
    },
    {
        cit_id: 420,
        cit_name: "Huyện Phú Lộc",
        cit_parent: 27,
    },
    {
        cit_id: 421,
        cit_name: "Huyện Nam Đông",
        cit_parent: 27,
    },
    {
        cit_id: 422,
        cit_name: "Quận Liên Chiểu",
        cit_parent: 26,
    },
    {
        cit_id: 423,
        cit_name: "Quận Thanh Khê",
        cit_parent: 26,
    },
    {
        cit_id: 424,
        cit_name: "Quận Hải Châu",
        cit_parent: 26,
    },
    {
        cit_id: 425,
        cit_name: "Quận Sơn Trà",
        cit_parent: 26,
    },
    {
        cit_id: 426,
        cit_name: "Quận Ngũ Hành Sơn",
        cit_parent: 26,
    },
    {
        cit_id: 427,
        cit_name: "Quận Cẩm Lệ",
        cit_parent: 26,
    },
    {
        cit_id: 428,
        cit_name: "Huyện Hòa Vang",
        cit_parent: 26,
    },
    {
        cit_id: 429,
        cit_name: "Thành phố Tam Kỳ",
        cit_parent: 41,
    },
    {
        cit_id: 430,
        cit_name: "Thành phố Hội An",
        cit_parent: 41,
    },
    {
        cit_id: 431,
        cit_name: "Huyện Tây Giang",
        cit_parent: 41,
    },
    {
        cit_id: 432,
        cit_name: "Huyện Đông Giang",
        cit_parent: 41,
    },
    {
        cit_id: 433,
        cit_name: "Huyện Đại Lộc",
        cit_parent: 41,
    },
    {
        cit_id: 434,
        cit_name: "Thị xã Điện Bàn",
        cit_parent: 41,
    },
    {
        cit_id: 435,
        cit_name: "Huyện Duy Xuyên",
        cit_parent: 41,
    },
    {
        cit_id: 436,
        cit_name: "Huyện Quế Sơn",
        cit_parent: 41,
    },
    {
        cit_id: 437,
        cit_name: "Huyện Nam Giang",
        cit_parent: 41,
    },
    {
        cit_id: 438,
        cit_name: "Huyện Phước Sơn",
        cit_parent: 41,
    },
    {
        cit_id: 439,
        cit_name: "Huyện Hiệp Đức",
        cit_parent: 41,
    },
    {
        cit_id: 440,
        cit_name: "Huyện Thăng Bình",
        cit_parent: 41,
    },
    {
        cit_id: 441,
        cit_name: "Huyện Tiên Phước",
        cit_parent: 41,
    },
    {
        cit_id: 442,
        cit_name: "Huyện Bắc Trà My",
        cit_parent: 41,
    },
    {
        cit_id: 443,
        cit_name: "Huyện Nam Trà My",
        cit_parent: 41,
    },
    {
        cit_id: 444,
        cit_name: "Huyện Núi Thành",
        cit_parent: 41,
    },
    {
        cit_id: 445,
        cit_name: "Huyện Phú Ninh",
        cit_parent: 41,
    },
    {
        cit_id: 446,
        cit_name: "Huyện Nông Sơn",
        cit_parent: 41,
    },
    {
        cit_id: 447,
        cit_name: "Thành phố Quảng Ngãi",
        cit_parent: 42,
    },
    {
        cit_id: 448,
        cit_name: "Huyện Bình Sơn",
        cit_parent: 42,
    },
    {
        cit_id: 449,
        cit_name: "Huyện Trà Bồng",
        cit_parent: 42,
    },
    {
        cit_id: 450,
        cit_name: "Huyện Tây Trà",
        cit_parent: 42,
    },
    {
        cit_id: 451,
        cit_name: "Huyện Sơn Tịnh",
        cit_parent: 42,
    },
    {
        cit_id: 452,
        cit_name: "Huyện Tư Nghĩa",
        cit_parent: 42,
    },
    {
        cit_id: 453,
        cit_name: "Huyện Sơn Hà",
        cit_parent: 42,
    },
    {
        cit_id: 454,
        cit_name: "Huyện Sơn Tây",
        cit_parent: 42,
    },
    {
        cit_id: 455,
        cit_name: "Huyện Minh Long",
        cit_parent: 42,
    },
    {
        cit_id: 456,
        cit_name: "Huyện Nghĩa Hành",
        cit_parent: 42,
    },
    {
        cit_id: 457,
        cit_name: "Huyện Mộ Đức",
        cit_parent: 42,
    },
    {
        cit_id: 458,
        cit_name: "Thị xã Đức Phổ",
        cit_parent: 42,
    },
    {
        cit_id: 459,
        cit_name: "Huyện Ba Tơ",
        cit_parent: 42,
    },
    {
        cit_id: 460,
        cit_name: "Huyện Lý Sơn",
        cit_parent: 42,
    },
    {
        cit_id: 461,
        cit_name: "Thành phố Quy Nhơn",
        cit_parent: 30,
    },
    {
        cit_id: 462,
        cit_name: "Huyện Hoài Nhơn",
        cit_parent: 30,
    },
    {
        cit_id: 463,
        cit_name: "Huyện Hoài Ân",
        cit_parent: 30,
    },
    {
        cit_id: 464,
        cit_name: "Huyện Phù Mỹ",
        cit_parent: 30,
    },
    {
        cit_id: 465,
        cit_name: "Huyện Vĩnh Thạnh",
        cit_parent: 30,
    },
    {
        cit_id: 466,
        cit_name: "Huyện Tây Sơn",
        cit_parent: 30,
    },
    {
        cit_id: 467,
        cit_name: "Huyện Phù Cát",
        cit_parent: 30,
    },
    {
        cit_id: 468,
        cit_name: "Thị xã An Nhơn",
        cit_parent: 30,
    },
    {
        cit_id: 469,
        cit_name: "Huyện Tuy Phước",
        cit_parent: 30,
    },
    {
        cit_id: 470,
        cit_name: "Huyện Vân Canh",
        cit_parent: 30,
    },
    {
        cit_id: 471,
        cit_name: "Thành phố Tuy Hoà",
        cit_parent: 39,
    },
    {
        cit_id: 472,
        cit_name: "Thị xã Sông Cầu",
        cit_parent: 39,
    },
    {
        cit_id: 473,
        cit_name: "Huyện Đồng Xuân",
        cit_parent: 39,
    },
    {
        cit_id: 474,
        cit_name: "Huyện Tuy An",
        cit_parent: 39,
    },
    {
        cit_id: 475,
        cit_name: "Huyện Sơn Hòa",
        cit_parent: 39,
    },
    {
        cit_id: 476,
        cit_name: "Huyện Sông Hinh",
        cit_parent: 39,
    },
    {
        cit_id: 477,
        cit_name: "Huyện Tây Hoà",
        cit_parent: 39,
    },
    {
        cit_id: 478,
        cit_name: "Huyện Phú Hoà",
        cit_parent: 39,
    },
    {
        cit_id: 479,
        cit_name: "Huyện Đông Hòa",
        cit_parent: 39,
    },
    {
        cit_id: 480,
        cit_name: "Thành phố Nha Trang",
        cit_parent: 28,
    },
    {
        cit_id: 481,
        cit_name: "Thành phố Cam Ranh",
        cit_parent: 28,
    },
    {
        cit_id: 482,
        cit_name: "Huyện Cam Lâm",
        cit_parent: 28,
    },
    {
        cit_id: 483,
        cit_name: "Huyện Vạn Ninh",
        cit_parent: 28,
    },
    {
        cit_id: 484,
        cit_name: "Thị xã Ninh Hòa",
        cit_parent: 28,
    },
    {
        cit_id: 485,
        cit_name: "Huyện Khánh Vĩnh",
        cit_parent: 28,
    },
    {
        cit_id: 486,
        cit_name: "Huyện Diên Khánh",
        cit_parent: 28,
    },
    {
        cit_id: 487,
        cit_name: "Huyện Khánh Sơn",
        cit_parent: 28,
    },
    {
        cit_id: 488,
        cit_name: "Huyện Trường Sa",
        cit_parent: 28,
    },
    {
        cit_id: 489,
        cit_name: "Thành phố Phan Rang-Tháp Chàm",
        cit_parent: 38,
    },
    {
        cit_id: 490,
        cit_name: "Huyện Bác Ái",
        cit_parent: 38,
    },
    {
        cit_id: 491,
        cit_name: "Huyện Ninh Sơn",
        cit_parent: 38,
    },
    {
        cit_id: 492,
        cit_name: "Huyện Ninh Hải",
        cit_parent: 38,
    },
    {
        cit_id: 493,
        cit_name: "Huyện Ninh Phước",
        cit_parent: 38,
    },
    {
        cit_id: 494,
        cit_name: "Huyện Thuận Bắc",
        cit_parent: 38,
    },
    {
        cit_id: 495,
        cit_name: "Huyện Thuận Nam",
        cit_parent: 38,
    },
    {
        cit_id: 496,
        cit_name: "Thành phố Phan Thiết",
        cit_parent: 31,
    },
    {
        cit_id: 497,
        cit_name: "Thị xã La Gi",
        cit_parent: 31,
    },
    {
        cit_id: 498,
        cit_name: "Huyện Tuy Phong",
        cit_parent: 31,
    },
    {
        cit_id: 499,
        cit_name: "Huyện Bắc Bình",
        cit_parent: 31,
    },
    {
        cit_id: 500,
        cit_name: "Huyện Hàm Thuận Bắc",
        cit_parent: 31,
    },
    {
        cit_id: 501,
        cit_name: "Huyện Hàm Thuận Nam",
        cit_parent: 31,
    },
    {
        cit_id: 502,
        cit_name: "Huyện Tánh Linh",
        cit_parent: 31,
    },
    {
        cit_id: 503,
        cit_name: "Huyện Đức Linh",
        cit_parent: 31,
    },
    {
        cit_id: 504,
        cit_name: "Huyện Hàm Tân",
        cit_parent: 31,
    },
    {
        cit_id: 505,
        cit_name: "Huyện Phú Quí",
        cit_parent: 31,
    },
    {
        cit_id: 506,
        cit_name: "Thành phố Kon Tum",
        cit_parent: 36,
    },
    {
        cit_id: 507,
        cit_name: "Huyện Đắk Glei",
        cit_parent: 36,
    },
    {
        cit_id: 508,
        cit_name: "Huyện Ngọc Hồi",
        cit_parent: 36,
    },
    {
        cit_id: 509,
        cit_name: "Huyện Đắk Tô",
        cit_parent: 36,
    },
    {
        cit_id: 510,
        cit_name: "Huyện Kon Plông",
        cit_parent: 36,
    },
    {
        cit_id: 511,
        cit_name: "Huyện Kon Rẫy",
        cit_parent: 36,
    },
    {
        cit_id: 512,
        cit_name: "Huyện Đắk Hà",
        cit_parent: 36,
    },
    {
        cit_id: 513,
        cit_name: "Huyện Sa Thầy",
        cit_parent: 36,
    },
    {
        cit_id: 514,
        cit_name: "Huyện Tu Mơ Rông",
        cit_parent: 36,
    },
    {
        cit_id: 515,
        cit_name: "Huyện Ia H' Drai",
        cit_parent: 36,
    },
    {
        cit_id: 516,
        cit_name: "Thành phố Pleiku",
        cit_parent: 34,
    },
    {
        cit_id: 517,
        cit_name: "Thị xã An Khê",
        cit_parent: 34,
    },
    {
        cit_id: 518,
        cit_name: "Thị xã Ayun Pa",
        cit_parent: 34,
    },
    {
        cit_id: 519,
        cit_name: "Huyện KBang",
        cit_parent: 34,
    },
    {
        cit_id: 520,
        cit_name: "Huyện Đăk Đoa",
        cit_parent: 34,
    },
    {
        cit_id: 521,
        cit_name: "Huyện Chư Păh",
        cit_parent: 34,
    },
    {
        cit_id: 522,
        cit_name: "Huyện Ia Grai",
        cit_parent: 34,
    },
    {
        cit_id: 523,
        cit_name: "Huyện Mang Yang",
        cit_parent: 34,
    },
    {
        cit_id: 524,
        cit_name: "Huyện Kông Chro",
        cit_parent: 34,
    },
    {
        cit_id: 525,
        cit_name: "Huyện Đức Cơ",
        cit_parent: 34,
    },
    {
        cit_id: 526,
        cit_name: "Huyện Chư Prông",
        cit_parent: 34,
    },
    {
        cit_id: 527,
        cit_name: "Huyện Chư Sê",
        cit_parent: 34,
    },
    {
        cit_id: 528,
        cit_name: "Huyện Đăk Pơ",
        cit_parent: 34,
    },
    {
        cit_id: 529,
        cit_name: "Huyện Ia Pa",
        cit_parent: 34,
    },
    {
        cit_id: 530,
        cit_name: "Huyện Krông Pa",
        cit_parent: 34,
    },
    {
        cit_id: 531,
        cit_name: "Huyện Phú Thiện",
        cit_parent: 34,
    },
    {
        cit_id: 532,
        cit_name: "Huyện Chư Pưh",
        cit_parent: 34,
    },
    {
        cit_id: 533,
        cit_name: "Thành phố Buôn Ma Thuột",
        cit_parent: 32,
    },
    {
        cit_id: 534,
        cit_name: "Thị Xã Buôn Hồ",
        cit_parent: 32,
    },
    {
        cit_id: 535,
        cit_name: "Huyện Ea H'leo",
        cit_parent: 32,
    },
    {
        cit_id: 536,
        cit_name: "Huyện Ea Súp",
        cit_parent: 32,
    },
    {
        cit_id: 537,
        cit_name: "Huyện Buôn Đôn",
        cit_parent: 32,
    },
    {
        cit_id: 538,
        cit_name: "Huyện Cư M'gar",
        cit_parent: 32,
    },
    {
        cit_id: 539,
        cit_name: "Huyện Krông Búk",
        cit_parent: 32,
    },
    {
        cit_id: 679,
        cit_name: "Thành phố Vĩnh Long",
        cit_parent: 63,
    },
    {
        cit_id: 541,
        cit_name: "Huyện Krông Năng",
        cit_parent: 32,
    },
    {
        cit_id: 542,
        cit_name: "Huyện Ea Kar",
        cit_parent: 32,
    },
    {
        cit_id: 543,
        cit_name: "Huyện M'Đrắk",
        cit_parent: 32,
    },
    {
        cit_id: 544,
        cit_name: "Huyện Krông Bông",
        cit_parent: 32,
    },
    {
        cit_id: 545,
        cit_name: "Huyện Krông Pắc",
        cit_parent: 32,
    },
    {
        cit_id: 546,
        cit_name: "Huyện Krông A Na",
        cit_parent: 32,
    },
    {
        cit_id: 547,
        cit_name: "Huyện Lắk",
        cit_parent: 32,
    },
    {
        cit_id: 548,
        cit_name: "Huyện Cư Kuin",
        cit_parent: 32,
    },
    {
        cit_id: 549,
        cit_name: "Thị xã Gia Nghĩa",
        cit_parent: 33,
    },
    {
        cit_id: 550,
        cit_name: "Huyện Đăk Glong",
        cit_parent: 33,
    },
    {
        cit_id: 551,
        cit_name: "Huyện Cư Jút",
        cit_parent: 33,
    },
    {
        cit_id: 552,
        cit_name: "Huyện Đắk Mil",
        cit_parent: 33,
    },
    {
        cit_id: 553,
        cit_name: "Huyện Krông Nô",
        cit_parent: 33,
    },
    {
        cit_id: 554,
        cit_name: "Huyện Đắk Song",
        cit_parent: 33,
    },
    {
        cit_id: 555,
        cit_name: "Huyện Đắk R'Lấp",
        cit_parent: 33,
    },
    {
        cit_id: 556,
        cit_name: "Huyện Tuy Đức",
        cit_parent: 33,
    },
    {
        cit_id: 557,
        cit_name: "Thành phố Đà Lạt",
        cit_parent: 29,
    },
    {
        cit_id: 558,
        cit_name: "Thành phố Bảo Lộc",
        cit_parent: 29,
    },
    {
        cit_id: 559,
        cit_name: "Huyện Đam Rông",
        cit_parent: 29,
    },
    {
        cit_id: 560,
        cit_name: "Huyện Lạc Dương",
        cit_parent: 29,
    },
    {
        cit_id: 561,
        cit_name: "Huyện Lâm Hà",
        cit_parent: 29,
    },
    {
        cit_id: 562,
        cit_name: "Huyện Đơn Dương",
        cit_parent: 29,
    },
    {
        cit_id: 563,
        cit_name: "Huyện Đức Trọng",
        cit_parent: 29,
    },
    {
        cit_id: 564,
        cit_name: "Huyện Di Linh",
        cit_parent: 29,
    },
    {
        cit_id: 565,
        cit_name: "Huyện Đạ Huoai",
        cit_parent: 29,
    },
    {
        cit_id: 566,
        cit_name: "Huyện Đạ Tẻh",
        cit_parent: 29,
    },
    {
        cit_id: 567,
        cit_name: "Huyện Cát Tiên",
        cit_parent: 29,
    },
    {
        cit_id: 568,
        cit_name: "Thị xã Phước Long",
        cit_parent: 51,
    },
    {
        cit_id: 569,
        cit_name: "Thị xã Đồng Xoài",
        cit_parent: 51,
    },
    {
        cit_id: 570,
        cit_name: "Thị xã Bình Long",
        cit_parent: 51,
    },
    {
        cit_id: 571,
        cit_name: "Huyện Bù Gia Mập",
        cit_parent: 51,
    },
    {
        cit_id: 572,
        cit_name: "Huyện Lộc Ninh",
        cit_parent: 51,
    },
    {
        cit_id: 573,
        cit_name: "Huyện Bù Đốp",
        cit_parent: 51,
    },
    {
        cit_id: 574,
        cit_name: "Huyện Hớn Quản",
        cit_parent: 51,
    },
    {
        cit_id: 575,
        cit_name: "Huyện Đồng Phú",
        cit_parent: 51,
    },
    {
        cit_id: 576,
        cit_name: "Huyện Bù Đăng",
        cit_parent: 51,
    },
    {
        cit_id: 577,
        cit_name: "Huyện Chơn Thành",
        cit_parent: 51,
    },
    {
        cit_id: 578,
        cit_name: "Huyện Phú Riềng",
        cit_parent: 51,
    },
    {
        cit_id: 579,
        cit_name: "Thành phố Tây Ninh",
        cit_parent: 61,
    },
    {
        cit_id: 580,
        cit_name: "Huyện Tân Biên",
        cit_parent: 61,
    },
    {
        cit_id: 581,
        cit_name: "Huyện Tân Châu",
        cit_parent: 61,
    },
    {
        cit_id: 582,
        cit_name: "Huyện Dương Minh Châu",
        cit_parent: 61,
    },
    {
        cit_id: 583,
        cit_name: "Huyện Châu Thành",
        cit_parent: 61,
    },
    {
        cit_id: 584,
        cit_name: "Thị xã Hòa Thành",
        cit_parent: 61,
    },
    {
        cit_id: 585,
        cit_name: "Huyện Gò Dầu",
        cit_parent: 61,
    },
    {
        cit_id: 586,
        cit_name: "Huyện Bến Cầu",
        cit_parent: 61,
    },
    {
        cit_id: 587,
        cit_name: "Thị xã Trảng Bàng",
        cit_parent: 61,
    },
    {
        cit_id: 588,
        cit_name: "Thành phố Thủ Dầu Một",
        cit_parent: 46,
    },
    {
        cit_id: 589,
        cit_name: "Huyện Bàu Bàng",
        cit_parent: 46,
    },
    {
        cit_id: 590,
        cit_name: "Huyện Dầu Tiếng",
        cit_parent: 46,
    },
    {
        cit_id: 591,
        cit_name: "Thị xã Bến Cát",
        cit_parent: 46,
    },
    {
        cit_id: 592,
        cit_name: "Huyện Phú Giáo",
        cit_parent: 46,
    },
    {
        cit_id: 593,
        cit_name: "Thị xã Tân Uyên",
        cit_parent: 46,
    },
    {
        cit_id: 594,
        cit_name: "Thành phố Dĩ An",
        cit_parent: 46,
    },
    {
        cit_id: 595,
        cit_name: "Thành phố Thuận An",
        cit_parent: 46,
    },
    {
        cit_id: 596,
        cit_name: "Huyện Bắc Tân Uyên",
        cit_parent: 46,
    },
    {
        cit_id: 597,
        cit_name: "Thành phố Biên Hòa",
        cit_parent: 55,
    },
    {
        cit_id: 598,
        cit_name: "Thành phố Long Khánh",
        cit_parent: 55,
    },
    {
        cit_id: 599,
        cit_name: "Huyện Tân Phú",
        cit_parent: 55,
    },
    {
        cit_id: 600,
        cit_name: "Huyện Vĩnh Cửu",
        cit_parent: 55,
    },
    {
        cit_id: 601,
        cit_name: "Huyện Định Quán",
        cit_parent: 55,
    },
    {
        cit_id: 602,
        cit_name: "Huyện Trảng Bom",
        cit_parent: 55,
    },
    {
        cit_id: 603,
        cit_name: "Huyện Thống Nhất",
        cit_parent: 55,
    },
    {
        cit_id: 604,
        cit_name: "Huyện Cẩm Mỹ",
        cit_parent: 55,
    },
    {
        cit_id: 605,
        cit_name: "Huyện Long Thành",
        cit_parent: 55,
    },
    {
        cit_id: 606,
        cit_name: "Huyện Xuân Lộc",
        cit_parent: 55,
    },
    {
        cit_id: 607,
        cit_name: "Huyện Nhơn Trạch",
        cit_parent: 55,
    },
    {
        cit_id: 608,
        cit_name: "Thành phố Vũng Tàu",
        cit_parent: 47,
    },
    {
        cit_id: 609,
        cit_name: "Thành phố Bà Rịa",
        cit_parent: 47,
    },
    {
        cit_id: 610,
        cit_name: "Huyện Châu Đức",
        cit_parent: 47,
    },
    {
        cit_id: 611,
        cit_name: "Huyện Xuyên Mộc",
        cit_parent: 47,
    },
    {
        cit_id: 612,
        cit_name: "Huyện Long Điền",
        cit_parent: 47,
    },
    {
        cit_id: 613,
        cit_name: "Huyện Đất Đỏ",
        cit_parent: 47,
    },
    {
        cit_id: 614,
        cit_name: "Huyện Tân Thành",
        cit_parent: 47,
    },
    {
        cit_id: 615,
        cit_name: "Quận 1",
        cit_parent: 45,
    },
    {
        cit_id: 616,
        cit_name: "Quận 12",
        cit_parent: 45,
    },
    {
        cit_id: 617,
        cit_name: "Quận Thủ Đức",
        cit_parent: 45,
    },
    {
        cit_id: 618,
        cit_name: "Quận 9",
        cit_parent: 45,
    },
    {
        cit_id: 619,
        cit_name: "Quận Gò Vấp",
        cit_parent: 45,
    },
    {
        cit_id: 620,
        cit_name: "Quận Bình Thạnh",
        cit_parent: 45,
    },
    {
        cit_id: 621,
        cit_name: "Quận Tân Bình",
        cit_parent: 45,
    },
    {
        cit_id: 622,
        cit_name: "Quận Tân Phú",
        cit_parent: 45,
    },
    {
        cit_id: 623,
        cit_name: "Quận Phú Nhuận",
        cit_parent: 45,
    },
    {
        cit_id: 624,
        cit_name: "Quận 2",
        cit_parent: 45,
    },
    {
        cit_id: 625,
        cit_name: "Quận 3",
        cit_parent: 45,
    },
    {
        cit_id: 626,
        cit_name: "Quận 10",
        cit_parent: 45,
    },
    {
        cit_id: 627,
        cit_name: "Quận 11",
        cit_parent: 45,
    },
    {
        cit_id: 628,
        cit_name: "Quận 4",
        cit_parent: 45,
    },
    {
        cit_id: 629,
        cit_name: "Quận 5",
        cit_parent: 45,
    },
    {
        cit_id: 630,
        cit_name: "Quận 6",
        cit_parent: 45,
    },
    {
        cit_id: 631,
        cit_name: "Quận 8",
        cit_parent: 45,
    },
    {
        cit_id: 632,
        cit_name: "Quận Bình Tân",
        cit_parent: 45,
    },
    {
        cit_id: 633,
        cit_name: "Quận 7",
        cit_parent: 45,
    },
    {
        cit_id: 634,
        cit_name: "Huyện Củ Chi",
        cit_parent: 45,
    },
    {
        cit_id: 635,
        cit_name: "Huyện Hóc Môn",
        cit_parent: 45,
    },
    {
        cit_id: 636,
        cit_name: "Huyện Bình Chánh",
        cit_parent: 45,
    },
    {
        cit_id: 637,
        cit_name: "Huyện Nhà Bè",
        cit_parent: 45,
    },
    {
        cit_id: 638,
        cit_name: "Huyện Cần Giờ",
        cit_parent: 45,
    },
    {
        cit_id: 639,
        cit_name: "Thành phố Tân An",
        cit_parent: 58,
    },
    {
        cit_id: 640,
        cit_name: "Thị xã Kiến Tường",
        cit_parent: 58,
    },
    {
        cit_id: 641,
        cit_name: "Huyện Tân Hưng",
        cit_parent: 58,
    },
    {
        cit_id: 774,
        cit_name: "Huyện Châu Thành",
        cit_parent: 62,
    },
    {
        cit_id: 643,
        cit_name: "Huyện Mộc Hóa",
        cit_parent: 58,
    },
    {
        cit_id: 644,
        cit_name: "Huyện Tân Thạnh",
        cit_parent: 58,
    },
    {
        cit_id: 645,
        cit_name: "Huyện Thạnh Hóa",
        cit_parent: 58,
    },
    {
        cit_id: 646,
        cit_name: "Huyện Đức Huệ",
        cit_parent: 58,
    },
    {
        cit_id: 647,
        cit_name: "Huyện Đức Hòa",
        cit_parent: 58,
    },
    {
        cit_id: 648,
        cit_name: "Huyện Bến Lức",
        cit_parent: 58,
    },
    {
        cit_id: 649,
        cit_name: "Huyện Thủ Thừa",
        cit_parent: 58,
    },
    {
        cit_id: 650,
        cit_name: "Huyện Tân Trụ",
        cit_parent: 58,
    },
    {
        cit_id: 651,
        cit_name: "Huyện Cần Đước",
        cit_parent: 58,
    },
    {
        cit_id: 652,
        cit_name: "Huyện Cần Giuộc",
        cit_parent: 58,
    },
    {
        cit_id: 653,
        cit_name: "Thành phố Mỹ Tho",
        cit_parent: 60,
    },
    {
        cit_id: 654,
        cit_name: "Thị xã Gò Công",
        cit_parent: 60,
    },
    {
        cit_id: 655,
        cit_name: "Thị xã Cai Lậy",
        cit_parent: 60,
    },
    {
        cit_id: 656,
        cit_name: "Huyện Tân Phước",
        cit_parent: 60,
    },
    {
        cit_id: 657,
        cit_name: "Huyện Cái Bè",
        cit_parent: 60,
    },
    {
        cit_id: 658,
        cit_name: "Huyện Cai Lậy",
        cit_parent: 60,
    },
    {
        cit_id: 772,
        cit_name: "Huyện Châu Thành",
        cit_parent: 52,
    },
    {
        cit_id: 660,
        cit_name: "Huyện Gò Công Tây",
        cit_parent: 60,
    },
    {
        cit_id: 661,
        cit_name: "Huyện Gò Công Đông",
        cit_parent: 60,
    },
    {
        cit_id: 662,
        cit_name: "Huyện Tân Phú Đông",
        cit_parent: 60,
    },
    {
        cit_id: 663,
        cit_name: "Thành phố Bến Tre",
        cit_parent: 52,
    },
    {
        cit_id: 664,
        cit_name: "Huyện Chợ Lách",
        cit_parent: 52,
    },
    {
        cit_id: 665,
        cit_name: "Huyện Mỏ Cày Nam",
        cit_parent: 52,
    },
    {
        cit_id: 666,
        cit_name: "Huyện Giồng Trôm",
        cit_parent: 52,
    },
    {
        cit_id: 667,
        cit_name: "Huyện Bình Đại",
        cit_parent: 52,
    },
    {
        cit_id: 668,
        cit_name: "Huyện Ba Tri",
        cit_parent: 52,
    },
    {
        cit_id: 669,
        cit_name: "Huyện Thạnh Phú",
        cit_parent: 52,
    },
    {
        cit_id: 670,
        cit_name: "Huyện Mỏ Cày Bắc",
        cit_parent: 52,
    },
    {
        cit_id: 671,
        cit_name: "Thành phố Trà Vinh",
        cit_parent: 62,
    },
    {
        cit_id: 672,
        cit_name: "Huyện Càng Long",
        cit_parent: 62,
    },
    {
        cit_id: 673,
        cit_name: "Huyện Cầu Kè",
        cit_parent: 62,
    },
    {
        cit_id: 674,
        cit_name: "Huyện Tiểu Cần",
        cit_parent: 62,
    },
    {
        cit_id: 675,
        cit_name: "Huyện Cầu Ngang",
        cit_parent: 62,
    },
    {
        cit_id: 676,
        cit_name: "Huyện Trà Cú",
        cit_parent: 62,
    },
    {
        cit_id: 677,
        cit_name: "Huyện Duyên Hải",
        cit_parent: 62,
    },
    {
        cit_id: 678,
        cit_name: "Thị xã Duyên Hải",
        cit_parent: 62,
    },
    {
        cit_id: 680,
        cit_name: "Huyện Long Hồ",
        cit_parent: 63,
    },
    {
        cit_id: 681,
        cit_name: "Huyện Mang Thít",
        cit_parent: 63,
    },
    {
        cit_id: 682,
        cit_name: "Huyện  Vũng Liêm",
        cit_parent: 63,
    },
    {
        cit_id: 683,
        cit_name: "Huyện Tam Bình",
        cit_parent: 63,
    },
    {
        cit_id: 684,
        cit_name: "Thị xã Bình Minh",
        cit_parent: 63,
    },
    {
        cit_id: 685,
        cit_name: "Huyện Trà Ôn",
        cit_parent: 63,
    },
    {
        cit_id: 686,
        cit_name: "Huyện Bình Tân",
        cit_parent: 63,
    },
    {
        cit_id: 687,
        cit_name: "Thành phố Cao Lãnh",
        cit_parent: 54,
    },
    {
        cit_id: 688,
        cit_name: "Thành phố Sa Đéc",
        cit_parent: 54,
    },
    {
        cit_id: 689,
        cit_name: "Huyện Hồng Ngự",
        cit_parent: 54,
    },
    {
        cit_id: 690,
        cit_name: "Huyện Tân Hồng",
        cit_parent: 54,
    },
    {
        cit_id: 691,
        cit_name: "Thành phố Hồng Ngự",
        cit_parent: 54,
    },
    {
        cit_id: 692,
        cit_name: "Huyện Tháp Mười",
        cit_parent: 54,
    },
    {
        cit_id: 693,
        cit_name: "Huyện Cao Lãnh",
        cit_parent: 54,
    },
    {
        cit_id: 694,
        cit_name: "Huyện Thanh Bình",
        cit_parent: 54,
    },
    {
        cit_id: 695,
        cit_name: "Huyện Lấp Vò",
        cit_parent: 54,
    },
    {
        cit_id: 696,
        cit_name: "Huyện Lai Vung",
        cit_parent: 54,
    },
    {
        cit_id: 697,
        cit_name: "Thành phố Long Xuyên",
        cit_parent: 49,
    },
    {
        cit_id: 698,
        cit_name: "Thành phố Châu Đốc",
        cit_parent: 49,
    },
    {
        cit_id: 699,
        cit_name: "Huyện An Phú",
        cit_parent: 49,
    },
    {
        cit_id: 700,
        cit_name: "Thị xã Tân Châu",
        cit_parent: 49,
    },
    {
        cit_id: 701,
        cit_name: "Huyện Phú Tân",
        cit_parent: 49,
    },
    {
        cit_id: 702,
        cit_name: "Huyện Châu Phú",
        cit_parent: 49,
    },
    {
        cit_id: 703,
        cit_name: "Huyện Tịnh Biên",
        cit_parent: 49,
    },
    {
        cit_id: 704,
        cit_name: "Huyện Tri Tôn",
        cit_parent: 49,
    },
    {
        cit_id: 705,
        cit_name: "Huyện Thoại Sơn",
        cit_parent: 49,
    },
    {
        cit_id: 706,
        cit_name: "Thành phố Rạch Giá",
        cit_parent: 57,
    },
    {
        cit_id: 707,
        cit_name: "Thành phố Hà Tiên",
        cit_parent: 57,
    },
    {
        cit_id: 708,
        cit_name: "Huyện Kiên Lương",
        cit_parent: 57,
    },
    {
        cit_id: 709,
        cit_name: "Huyện Hòn Đất",
        cit_parent: 57,
    },
    {
        cit_id: 717,
        cit_name: "Huyện Phú Quốc",
        cit_parent: 57,
    },
    {
        cit_id: 711,
        cit_name: "Huyện Tân Hiệp",
        cit_parent: 57,
    },
    {
        cit_id: 712,
        cit_name: "Huyện Giồng Riềng",
        cit_parent: 57,
    },
    {
        cit_id: 713,
        cit_name: "Huyện Gò Quao",
        cit_parent: 57,
    },
    {
        cit_id: 714,
        cit_name: "Huyện An Biên",
        cit_parent: 57,
    },
    {
        cit_id: 715,
        cit_name: "Huyện An Minh",
        cit_parent: 57,
    },
    {
        cit_id: 716,
        cit_name: "Huyện Vĩnh Thuận",
        cit_parent: 57,
    },
    {
        cit_id: 718,
        cit_name: "Huyện Kiên Hải",
        cit_parent: 57,
    },
    {
        cit_id: 719,
        cit_name: "Huyện U Minh Thượng",
        cit_parent: 57,
    },
    {
        cit_id: 720,
        cit_name: "Huyện Giang Thành",
        cit_parent: 57,
    },
    {
        cit_id: 721,
        cit_name: "Quận Ninh Kiều",
        cit_parent: 48,
    },
    {
        cit_id: 722,
        cit_name: "Quận Ô Môn",
        cit_parent: 48,
    },
    {
        cit_id: 723,
        cit_name: "Quận Bình Thuỷ",
        cit_parent: 48,
    },
    {
        cit_id: 724,
        cit_name: "Quận Cái Răng",
        cit_parent: 48,
    },
    {
        cit_id: 725,
        cit_name: "Quận Thốt Nốt",
        cit_parent: 48,
    },
    {
        cit_id: 726,
        cit_name: "Huyện Cờ Đỏ",
        cit_parent: 48,
    },
    {
        cit_id: 727,
        cit_name: "Huyện Thới Lai",
        cit_parent: 48,
    },
    {
        cit_id: 728,
        cit_name: "Thành phố Vị Thanh",
        cit_parent: 56,
    },
    {
        cit_id: 729,
        cit_name: "Thành phố Ngã Bảy",
        cit_parent: 56,
    },
    {
        cit_id: 730,
        cit_name: "Huyện Châu Thành A",
        cit_parent: 56,
    },
    {
        cit_id: 731,
        cit_name: "Huyện Phụng Hiệp",
        cit_parent: 56,
    },
    {
        cit_id: 732,
        cit_name: "Huyện Vị Thuỷ",
        cit_parent: 56,
    },
    {
        cit_id: 733,
        cit_name: "Huyện Long Mỹ",
        cit_parent: 56,
    },
    {
        cit_id: 734,
        cit_name: "Thị xã Long Mỹ",
        cit_parent: 56,
    },
    {
        cit_id: 735,
        cit_name: "Thành phố Sóc Trăng",
        cit_parent: 59,
    },
    {
        cit_id: 736,
        cit_name: "Huyện Kế Sách",
        cit_parent: 59,
    },
    {
        cit_id: 737,
        cit_name: "Huyện Mỹ Tú",
        cit_parent: 59,
    },
    {
        cit_id: 738,
        cit_name: "Huyện Cù Lao Dung",
        cit_parent: 59,
    },
    {
        cit_id: 739,
        cit_name: "Huyện Long Phú",
        cit_parent: 59,
    },
    {
        cit_id: 740,
        cit_name: "Huyện Mỹ Xuyên",
        cit_parent: 59,
    },
    {
        cit_id: 741,
        cit_name: "Thị xã Ngã Năm",
        cit_parent: 59,
    },
    {
        cit_id: 742,
        cit_name: "Huyện Thạnh Trị",
        cit_parent: 59,
    },
    {
        cit_id: 743,
        cit_name: "Thị xã Vĩnh Châu",
        cit_parent: 59,
    },
    {
        cit_id: 744,
        cit_name: "Huyện Trần Đề",
        cit_parent: 59,
    },
    {
        cit_id: 745,
        cit_name: "Thành phố Bạc Liêu",
        cit_parent: 50,
    },
    {
        cit_id: 746,
        cit_name: "Huyện Hồng Dân",
        cit_parent: 50,
    },
    {
        cit_id: 747,
        cit_name: "Huyện Phước Long",
        cit_parent: 50,
    },
    {
        cit_id: 748,
        cit_name: "Huyện Vĩnh Lợi",
        cit_parent: 50,
    },
    {
        cit_id: 749,
        cit_name: "Thị xã Giá Rai",
        cit_parent: 50,
    },
    {
        cit_id: 750,
        cit_name: "Huyện Đông Hải",
        cit_parent: 50,
    },
    {
        cit_id: 751,
        cit_name: "Huyện Hoà Bình",
        cit_parent: 50,
    },
    {
        cit_id: 752,
        cit_name: "Thành phố Cà Mau",
        cit_parent: 53,
    },
    {
        cit_id: 753,
        cit_name: "Huyện U Minh",
        cit_parent: 53,
    },
    {
        cit_id: 754,
        cit_name: "Huyện Thới Bình",
        cit_parent: 53,
    },
    {
        cit_id: 755,
        cit_name: "Huyện Trần Văn Thời",
        cit_parent: 53,
    },
    {
        cit_id: 756,
        cit_name: "Huyện Cái Nước",
        cit_parent: 53,
    },
    {
        cit_id: 757,
        cit_name: "Huyện Đầm Dơi",
        cit_parent: 53,
    },
    {
        cit_id: 758,
        cit_name: "Huyện Năm Căn",
        cit_parent: 53,
    },
    {
        cit_id: 759,
        cit_name: "Huyện Ngọc Hiển",
        cit_parent: 53,
    },
    {
        cit_id: 760,
        cit_name: "Huyện Chợ Mới",
        cit_parent: 49,
    },
    {
        cit_id: 761,
        cit_name: "Huyện Châu Thành",
        cit_parent: 56,
    },
    {
        cit_id: 762,
        cit_name: "Huyện Châu Thành",
        cit_parent: 49,
    },
    {
        cit_id: 763,
        cit_name: "Thành phố Cam Đường",
        cit_parent: 13,
    },
    {
        cit_id: 764,
        cit_name: "Huyện Châu Thành",
        cit_parent: 54,
    },
    {
        cit_id: 765,
        cit_name: "Huyện Tam Nông",
        cit_parent: 54,
    },
    {
        cit_id: 766,
        cit_name: "Huyện Bạch Long Vĩ",
        cit_parent: 2,
    },
    {
        cit_id: 767,
        cit_name: "Huyện Bảo Lâm",
        cit_parent: 29,
    },
    {
        cit_id: 768,
        cit_name: "Huyện Vĩnh Hưng",
        cit_parent: 58,
    },
    {
        cit_id: 769,
        cit_name: "Huyện Châu Thành",
        cit_parent: 58,
    },
    {
        cit_id: 771,
        cit_name: "Huyện Châu Thành",
        cit_parent: 60,
    },
    {
        cit_id: 777,
        cit_name: "Thị xã Phú Mỹ",
        cit_parent: 47,
    },
    {
        cit_id: 775,
        cit_name: "Huyện Phong Điền",
        cit_parent: 48,
    },
    {
        cit_id: 776,
        cit_name: "Huyện Vĩnh Thạnh",
        cit_parent: 48,
    },
    {
        cit_id: 778,
        cit_name: "Thị xã Nghi Sơn",
        cit_parent: 44,
    },
    {
        cit_id: 779,
        cit_name: "Huyện Châu Thành",
        cit_parent: 59,
    },
];
const levelList = [
    { 1: "Mới Tốt Nghiệp" },
    { 2: "Nhân viên" },
    { 3: "Trưởng Nhóm" },
    { 4: "Trưởng Phòng" },
    { 5: "Giám Đốc" },
    { 6: "Thực tập sinh" },
    { 7: "Quản lý cấp trung" },
    { 8: "Quản lý cấp cao" },
    { 9: "Phó tổ trưởng" },
    { 10: "Tổ trưởng" },
    { 11: "Phó giám đốc" },
    { 12: "Phó tổng giám đốc" },
    { 13: "Tổng giám đốc" },
    { 14: "Phó trưởng phòng" },
]
const listRangeMoney = [
    { 1: "Thỏa thuận" },
    { 2: "1 triệu - 3 triệu" },
    { 3: "3 triệu - 5 triệu" },
    { 4: "5 triệu - 7 triệu" },
    { 5: "7 triệu - 10 triệu" },
    { 6: "10 triệu - 15 triệu" },
    { 7: "15 triệu - 20 triệu" },
    { 8: "20 triệu - 30 triệu" },
    { 9: "Trên 30 triệu" },
    { 10: "Trên 50 triệu" },
    { 11: "Trên 100 triệu" },
];
const listEdu = [
    { 0: "Không yêu cầu" },
    { 1: "PTCS" },
    { 2: "Trung học" },
    { 3: "Chứng chỉ" },
    { 4: "Trung cấp" },
    { 5: "Cao đẳng" },
    { 6: "Cử nhân" },
    { 7: "Đại học" },
    { 8: "Thạc sĩ" },
    { 9: "Thạc sĩ Nghệ thuật" },
    { 10: "Thạc sĩ Thương mại" },
    { 11: "Thạc sĩ Khoa học" },
    { 12: "Thạc sĩ Kiến trúc" },
    { 13: "Thạc sĩ QTKD" },
    { 14: "Thạc sĩ Kỹ thuật ứng dụng" },
    { 15: "Thạc sĩ Luật" },
    { 16: "Thạc sĩ Y học" },
    { 17: "Thạc sĩ Dược phẩm" },
    { 18: "Tiến sĩ" },
    { 19: "Khác" },
];
const arrCateBlog = [
    { cate_name: 'Bí quyết viết CV', id: 2, limit: 4, order: 'first', link: '/bi-quyet-viet-cv' },
    { cate_name: 'Cẩm nang tìm việc', id: 1, limit: 6, order: 'second', link: '/blog/c1/cam-nang-tim-viec' },
    { cate_name: 'Biểu mẫu', id: 3, limit: 5, order: 'third', link: '/blog/c3/bieu-mau' }
];
const litsNewsCate = [
    {
        "cat_id": 1,
        "cat_name": "Cẩm nang tìm việc",
        "cat_keyword": "cẩm nang tìm việc",
        "cat_name_rewrite": "cam-nang-tim-viec",
        "cat_link": "cam-nang-tim-viec"
    },
    {
        "cat_id": 2,
        "cat_name": "Bí quyết viết CV",
        "cat_keyword": "bí quyết CV",
        "cat_name_rewrite": "bi-quyet-viet-cv",
        "cat_link": "bi-quyet-viet-cv"
    },
    {
        "cat_id": 3,
        "cat_name": "Biểu mẫu",
        "cat_keyword": "Biểu mẫu",
        "cat_name_rewrite": "bieu-mau",
        "cat_link": "bieu-mau"
    },
    {
        "cat_id": 4,
        "cat_name": "Ngành kế toán",
        "cat_keyword": "Tư vấn việc làm ngành kế toán",
        "cat_name_rewrite": "tu-van-viec-lam-nganh-ke-toan",
        "cat_link": "tu-van-viec-lam-nganh-ke-toan"
    },
    {
        "cat_id": 5,
        "cat_name": "Việc làm thêm, cộng tác viên, parttime",
        "cat_keyword": "Tư vấn việc làm thêm, cộng tác viên, parttime",
        "cat_name_rewrite": "tu-van-viec-lam-them-cong-tac-vien-parttime",
        "cat_link": "tu-van-viec-lam-lam-them-parttime"
    },
    {
        "cat_id": 6,
        "cat_name": "Kỹ sư IT phần mềm",
        "cat_keyword": "Tư vấn việc làm Kỹ sư IT phần mềm",
        "cat_name_rewrite": "tu-van-viec-lam-ky-su-it-phan-mem",
        "cat_link": "tu-van-viec-lam-ky-su-it-phan-mem"
    },
    {
        "cat_id": 7,
        "cat_name": "Biên dịch, phiên dịch",
        "cat_keyword": "Tư vấn việc làm Biên dịch, phiên dịch",
        "cat_name_rewrite": "tu-van-viec-lam-bien-dich-phien-dich",
        "cat_link": "tu-van-viec-lam-bien-dich-phien-dich"
    },
    {
        "cat_id": 8,
        "cat_name": "Thư ký, trợ lý",
        "cat_keyword": "Tư vấn việc làm Thư ký, trợ lý",
        "cat_name_rewrite": "tu-van-viec-lam-thu-ky-tro-ly",
        "cat_link": "tu-van-viec-lam-thu-ky-tro-ly"
    },
    {
        "cat_id": 9,
        "cat_name": "Nhập liệu",
        "cat_keyword": "Tư vấn việc làm Nhập liệu",
        "cat_name_rewrite": "tu-van-viec-lam-nhap-lieu",
        "cat_link": "tu-van-viec-lam-nhap-lieu"
    },
    {
        "cat_id": 10,
        "cat_name": "Ngành du lịch",
        "cat_keyword": "Tư vấn việc làm Ngành du lịch",
        "cat_name_rewrite": "tu-van-viec-lam-nganh-du-lich",
        "cat_link": "tu-van-viec-lam-nganh-du-lich"
    },
    {
        "cat_id": 11,
        "cat_name": "Nhân sự, tuyển dụng",
        "cat_keyword": "Tư vấn việc làm Nhân sự, tuyển dụng",
        "cat_name_rewrite": "nhan-su-tuyen-dung",
        "cat_link": "tu-van-viec-lam-nhan-su-tuyen-dung"
    },
    {
        "cat_id": 12,
        "cat_name": "Ngành báo chí",
        "cat_keyword": "Tư vấn việc làm Ngành báo chí",
        "cat_name_rewrite": "nganh-bao-chi",
        "cat_link": "tu-van-viec-lam-nganh-bao-chi"
    },
    {
        "cat_id": 13,
        "cat_name": "Lái xe, tài xế",
        "cat_keyword": "Tư vấn việc làm Lái xe, tài xế",
        "cat_name_rewrite": "lai-xe-tai-xe",
        "cat_link": "tu-van-viec-lam-lai-xe-tai-xe"
    },
    {
        "cat_id": 14,
        "cat_name": "Nhân viên văn phòng",
        "cat_keyword": "Tư vấn việc làm Nhân viên văn phòng",
        "cat_name_rewrite": "nhan-vien-van-phong",
        "cat_link": "tu-van-viec-lam-nhan-vien-van-phong"
    },
    {
        "cat_id": 15,
        "cat_name": "Ngành bảo hiểm",
        "cat_keyword": "Tư vấn việc làm Ngành bảo hiểm",
        "cat_name_rewrite": "nganh-bao-hiem",
        "cat_link": "tu-van-viec-lam-nganh-bao-hiem"
    },
    {
        "cat_id": 16,
        "cat_name": "Lao động phổ thông, công nhân",
        "cat_keyword": "Lao động phổ thông, công nhân",
        "cat_name_rewrite": "lao-dong-pho-thong-cong-nhan",
        "cat_link": "tu-van-viec-lam-lao-dong-pho-thong"
    },
    {
        "cat_id": 17,
        "cat_name": "Sinh viên mới tốt nghiệp",
        "cat_keyword": "Tư vấn việc làm cho Sinh viên mới tốt nghiệp",
        "cat_name_rewrite": "sinh-vien-moi-tot-nghiep",
        "cat_link": "tu-van-viec-lam-cho-sinh-vien-moi-tot-nghiep"
    },
    {
        "cat_id": 18,
        "cat_name": "Nhân viên phát triển thị trường",
        "cat_keyword": "Tư vấn việc làm Nhân viên phát triển thị trường",
        "cat_name_rewrite": "nhan-vien-phat-trien-thi-truong",
        "cat_link": "tu-van-viec-lam-nhan-vien-phat-trien-thi-truong"
    },
    {
        "cat_id": 19,
        "cat_name": "Ngành thiết kế",
        "cat_keyword": "Việc làm Ngành thiết kế",
        "cat_name_rewrite": "viec-lam-nganh-thiet-ke",
        "cat_link": "tu-van-viec-lam-thiet-ke"
    },
    {
        "cat_id": 20,
        "cat_name": "Ngành xây dựng",
        "cat_keyword": "Tư vấn việc làm Ngành xây dựng",
        "cat_name_rewrite": "viec-lam-nganh-xay-dung",
        "cat_link": "tu-van-viec-lam-nganh-xay-dung"
    },
    {
        "cat_id": 21,
        "cat_name": "Kinh doanh bất động sản",
        "cat_keyword": "Tư vấn việc làm Kinh doanh bất động sản",
        "cat_name_rewrite": "kinh-doanh-bat-dong-san",
        "cat_link": "tu-van-viec-lam-kinh-doanh-bat-dong-san"
    },
    {

        "cat_id": 22,
        "cat_name": "Marketing",
        "cat_keyword": "Tư vấn việc làm Marketing",
        "cat_name_rewrite": "marketing",
        "cat_link": "tu-van-viec-lam-marketing"
    },
    {
        "cat_id": 23,
        "cat_name": "Xuất khẩu nhập khẩu",
        "cat_keyword": "Tư vấn việc làm Xuất khẩu nhập khẩu",
        "cat_name_rewrite": "xuat-khau-nhap-khau",
        "cat_link": "tu-van-viec-lam-xuat-khau-nhap-khau"
    },
    {
        "cat_id": 24,
        "cat_name": "Tư vấn viên",
        "cat_keyword": "Tư vấn việc làm Tư vấn viên",
        "cat_name_rewrite": "tu-van-vien",
        "cat_link": "tu-van-viec-lam-tu-van-vien"
    },
    {
        "cat_id": 25,
        "cat_name": "Ngành Bưu chính viễn thông",
        "cat_keyword": "Tư vấn việc làm ngành bưu chính viễn thông",
        "cat_name_rewrite": "nganh-buu-chinh-vien-thong",
        "cat_link": "tu-van-viec-lam-nganh-buu-chinh-vien-thong"
    },
    {
        "cat_id": 26,
        "cat_name": "Chăm sóc khách hàng",
        "cat_keyword": "Tư vấn việc làm Chăm sóc khách hàng",
        "cat_name_rewrite": "cham-soc-khach-hang",
        "cat_link": "tu-van-viec-lam-cham-soc-khach-hang"
    },
    {
        "cat_id": 27,
        "cat_name": "Quản lý, giám đốc",
        "cat_keyword": "Tư vấn việc làm Quản lý, giám đốc",
        "cat_name_rewrite": "quan-ly-giam-doc",
        "cat_link": "tu-van-viec-lam-quan-ly-giam-doc"
    },
    {
        "cat_id": 28,
        "cat_name": "Ngành kỹ thuật",
        "cat_keyword": "Tư vấn việc làm Ngành kỹ thuật",
        "cat_name_rewrite": "nganh-ky-thuat",
        "cat_link": "tu-van-viec-lam-nganh-ky-thuat"
    },
    {
        "cat_id": 29,
        "cat_name": "Luật - Pháp lý",
        "cat_keyword": "Tư vấn việc làm Luật - Pháp lý",
        "cat_name_rewrite": "luat-phap-ly",
        "cat_link": "tu-van-viec-lam-nganh-luat-phap-ly"
    },
    {
        "cat_id": 30,
        "cat_name": "Ngành tài chính",
        "cat_keyword": "Tư vấn việc làm Ngành tài chính",
        "cat_name_rewrite": "nganh-tai-chinh",
        "cat_link": "tu-van-viec-lam-nganh-tai-chinh"
    },
    {
        "cat_id": 31,
        "cat_name": "Y tế - Dược",
        "cat_keyword": "Tư vấn việc làm ngành Y tế - Dược",
        "cat_name_rewrite": "y-te-duoc",
        "cat_link": "tu-van-viec-lam-nganh-y-te-duoc"
    },
    {
        "cat_id": 32,
        "cat_name": "Khách sạn - Nhà hàng",
        "cat_keyword": "Tư vấn việc làm Khách sạn - Nhà hàng",
        "cat_name_rewrite": "khach-san-nha-hang",
        "cat_link": "tu-van-viec-lam-nganh-khach-san-nha-hang"
    },
    {
        "cat_id": 33,
        "cat_name": "Tin tức",
        "cat_keyword": "Tin tức",
        "cat_name_rewrite": "tin-tuc",
        "cat_link": "tin-tuc-tong-hop"
    },
    {
        "cat_id": 34,
        "cat_name": "Tư vấn việc làm nhân viên Kinh doanh\t",
        "cat_keyword": "Tư vấn việc làm nhân viên Kinh doanh",
        "cat_name_rewrite": "kinh-doanh",
        "cat_link": "tu-van-viec-lam-nhan-vien-kinh-doanh"
    },
    {
        "cat_id": 35,
        "cat_name": "Bán hàng",
        "cat_keyword": "Tư vấn việc làm Bán hàng",
        "cat_name_rewrite": "ban-hang",
        "cat_link": "tu-van-viec-lam-ban-hang"
    },
    {
        "cat_id": 37,
        "cat_name": "Giáo dục - Đào tạo",
        "cat_keyword": "Tư vấn việc làm ngành Giáo dục - Đào tạo",
        "cat_name_rewrite": "giao-duc-dao-tao",
        "cat_link": "tu-van-viec-lam-nganh-giao-duc-dao-tao"
    },
    {
        "cat_id": 38,
        "cat_name": "Ngành ngân hàng",
        "cat_keyword": "Tư vấn việc làm Ngành ngân hàng",
        "cat_name_rewrite": "nganh-ngan-hang",
        "cat_link": "tu-van-viec-lam-ngan-hang"
    },
    {
        "cat_id": 39,
        "cat_name": "Tổ chức sự kiện",
        "cat_keyword": "Tư vấn việc làm Tổ chức sự kiện",
        "cat_name_rewrite": "to-chuc-su-kien",
        "cat_link": "tu-van-viec-lam-nganh-to-chuc-su-kien"
    },
    {
        "cat_id": 40,
        "cat_name": "Ngành môi trường",
        "cat_keyword": "Tư vấn việc làm Ngành môi trường",
        "cat_name_rewrite": "nganh-moi-truong",
        "cat_link": "tu-van-viec-lam-nganh-moi-truong"
    },
    {
        "cat_id": 41,
        "cat_name": "Telesales",
        "cat_keyword": "Tư vấn việc làm Telesales",
        "cat_name_rewrite": "telesales",
        "cat_link": "tu-van-viec-lam-telesale"
    },
    {
        "cat_id": 43,
        "cat_name": "Ngành sản xuất",
        "cat_keyword": "Tư vấn việc làm ngành sản xuất",
        "cat_name_rewrite": "nganh-san-xuat",
        "cat_link": "tu-van-viec-lam-nganh-san-xuat"
    },
    {
        "cat_id": 44,
        "cat_name": "Thu ngân",
        "cat_keyword": "Tư vấn việc làm Thu ngân",
        "cat_name_rewrite": "thu-ngan",
        "cat_link": "tu-van-viec-lam-thu-ngan"
    },
    {
        "cat_id": 45,
        "cat_name": "Nông - Lâm - Ngư nghiệp",
        "cat_keyword": "Tư vấn việc làm Nông - Lâm - Ngư nghiệp",
        "cat_name_rewrite": "nong-lam-ngu-nghiep",
        "cat_link": "tu-van-viec-lam-nong-lam-ngu-nghiep"
    },
    {
        "cat_id": 46,
        "cat_name": "Ngành làm đẹp, thể lực, spa",
        "cat_keyword": "Tư vấn việc làm Ngành làm đẹp, thể lực, spa",
        "cat_name_rewrite": "nganh-lam-dep-the-luc-spa",
        "cat_link": "tu-van-viec-lam-nganh-lam-nganh-lam-dep"
    },
    {
        "cat_id": 47,
        "cat_name": "An toàn lao động",
        "cat_keyword": "Tư vấn việc làm An toàn lao động",
        "cat_name_rewrite": "an-toan-lao-dong",
        "cat_link": "tu-van-viec-lam-an-toan-lam-dong"
    },
    {
        "_id": {
            "$oid": "666677f0281c2a6ebc03eeb5"
        },
        "cat_id": 48,
        "cat_name": "Hóa học - Sinh học",
        "cat_keyword": "Tư vấn việc làm Hóa học - Sinh học",
        "cat_name_rewrite": "hoa-hoc-sinh-hoc",
        "cat_link": "tu-van-viec-lam-hoa-hoc-sinh-hoc"
    },
    {
        "cat_id": 49,
        "cat_name": "Điện - Điện tử",
        "cat_keyword": "Tư vấn việc làm Điện - Điện tử",
        "cat_name_rewrite": "dien-dien-tu",
        "cat_link": "tu-van-viec-lam-dien-dien-tu"
    },
    {
        "cat_id": 50,
        "cat_name": "Quảng cáo - Tiếp Thị",
        "cat_keyword": "Tư vấn việc làm Quảng cáo - Tiếp Thị",
        "cat_name_rewrite": "quang-cao-tiep-thi",
        "cat_link": "tu-van-viec-lam-quang-cao-tiep-thi"
    },
    {
        "cat_id": 51,
        "cat_name": "Thẩm định, Giám sát",
        "cat_keyword": "Tư vấn việc làm Thẩm định, Giám sát",
        "cat_name_rewrite": "tham-dinh-giam-sat",
        "cat_link": "tu-van-viec-lam-tham-dinh-giam-sat"
    },
    {
        "cat_id": 52,
        "cat_name": "Phục vụ - Tạp vụ",
        "cat_keyword": "Tư vấn việc làm Phục vụ - Tạp vụ",
        "cat_name_rewrite": "phuc-vu-tap-vu",
        "cat_link": "tu-van-viec-lam-phuc-vu-tap-vu"
    },
    {
        "cat_id": 53,
        "cat_name": "Mô tả công việc",
        "cat_keyword": "Mô tả công việc",
        "cat_name_rewrite": "mo-ta-cong-viec",
        "cat_link": "mo-ta-cong-viec"
    },
    {
        "cat_id": 54,
        "cat_name": "Công chức viên chức",
        "cat_keyword": "Tư vấn việc làm Công chức viên chức",
        "cat_name_rewrite": "cong-chuc-vien-chuc",
        "cat_link": "tu-van-viec-lam-cong-chuc-vien-chuc"
    },
    {
        "cat_id": 58,
        "cat_name": "Dành cho ứng viên",
        "cat_title": "Kinh nghiệm phỏng vấn dành cho ứng viên",
        "cat_keyword": "Kinh nghiệm phỏng vấn dành cho ứng viên",
        "cat_name_rewrite": "danh-cho-ung-vien",
        "cat_link": "kinh-nghiem-phong-van-danh-cho-ung-vien"
    },
    {
        "cat_id": 57,
        "cat_name": "Kinh nghiệm viết Đơn Xin Việc",
        "cat_title": "Kinh Nghiệm Viết Đơn Xin Việc Hay Nhất",
        "cat_keyword": "Kinh nghiệm viết Đơn Xin Việc",
        "cat_name_rewrite": "kinh-nghiem-viet-don-xin-viec",
        "cat_link": "kinh-nghiem-viet-don-xin-viec"
    },
    {
        "cat_id": 59,
        "cat_name": "Ngành Công An, Quân Đội",
        "cat_keyword": "Tư vấn việc làm Ngành Công An, Quân Đội",
        "cat_name_rewrite": "nganh-cong-an-quan-doi",
        "cat_link": "tu-van-viec-lam-nganh-cong-an-quan-doi"
    },
    {
        "_id": {
            "$oid": "666677f0281c2a6ebc03eec9"
        },
        "cat_id": 60,
        "cat_name": "Định hướng nghề nghiệp",
        "cat_keyword": "Định hướng nghề nghiệp",
        "cat_name_rewrite": "dinh-huong-nghe-nghiep",
        "cat_link": "dinh-huong-nghe-nghiep"
    },
    {
        "cat_id": 61,
        "cat_name": "Vật tư - Thiết bị - Kho vận",
        "cat_keyword": "Vật tư - Thiết bị - Kho vận",
        "cat_name_rewrite": "vat-tu-thiet-bi-kho-van",
        "cat_link": "vat-tu-thiet-bi-kho-van"
    },
    {
        "cat_id": 62,
        "cat_name": "Kinh nghiệm viết Thư Xin Việc",
        "cat_keyword": "Kinh nghiệm viết Thư Xin Việc",
        "cat_name_rewrite": "kinh-nghiem-viet-thu-xin-viec",
        "cat_link": "kinh-nghiem-viet-thu-xin-viec"
    },
    {
        "cat_id": 63,
        "cat_name": "Kinh nghiệm viết hồ sơ xin việc",
        "cat_keyword": "Hồ sơ xin việc",
        "cat_name_rewrite": "ho-so-xin-viec",
        "cat_link": "ho-so-xin-viec"
    },
    {
        "cat_id": 64,
        "cat_name": "Kinh nghiệm viết sơ yếu lý lịch",
        "cat_keyword": "Sơ yếu lý lịch",
        "cat_name_rewrite": "so-yeu-ly-lich",
        "cat_link": "kinh-nghiem-viet-so-yeu-ly-lich"
    },
    {
        "cat_id": 65,
        "cat_name": "Cẩm nang gia sư",
        "cat_keyword": "Cẩm nang gia sư",
        "cat_name_rewrite": "cam-nang-gia-su",
        "cat_link": "cam-nang-gia-su"
    },
    {
        "cat_id": 66,
        "cat_name": "Tìm việc làm theo phường",
        "cat_keyword": "Tìm việc làm theo phường",
        "cat_name_rewrite": "tim-viec-lam-theo-phuong",
        "cat_link": "tim-viec-lam-theo-phuong"
    },
    {
        "cat_id": 67,
        "cat_name": "Kinh nghiệm chấm công",
        "cat_keyword": "Kinh nghiệm chấm công",
        "cat_name_rewrite": "kinh-nghiem-cham-cong",
        "cat_link": "kinh-nghiem-cham-cong"
    },
    {
        "cat_id": 68,
        "cat_name": "Lễ Tân",
        "cat_keyword": "Danh mục bài viết Lễ Tân",
        "cat_name_rewrite": "le-tan",
        "cat_link": "le-tan"
    },
    {

        "cat_id": 69,
        "cat_name": "Bữa cơm văn phòng",
        "cat_keyword": "cơm văn phòng",
        "cat_name_rewrite": "bua-com-van-phong",
        "cat_link": "bua-com-van-phong"
    }
]
function findCateBlog(type_id) {
    const cate = arrCateBlog.find(cate => cate.id === type_id);
    return cate ? cate : '';
}
function findCateNewsAlias(cat_alias) {
    const cate = litsNewsCate.find(cate => cate.cat_link === cat_alias);
    return cate ? cate : '';
}
function findCateNewsById(cat_id) {
    const cate = litsNewsCate.find(cate => cate.cat_id === cat_id);
    return cate ? cate : '';
}
function findGender(gen_id) {
    if (!gen_id) return "Chưa cập nhật"; 
    const gender = genderList.find(item => item.hasOwnProperty(gen_id.toString()));
    return gender ? gender[gen_id] : "Chưa cập nhật";
}
function findTypeWork(type_id) {
    if (!type_id) return "Chưa cập nhật"; 
    const Exp = listTypeWork.find(item => item.hasOwnProperty(type_id.toString()));
    return Exp ? Exp[type_id] : "Chưa cập nhật";
}
function findCompSize(size_id) {
    if (!size_id) return "Chưa cập nhật"; 
    const companySize = listSizeCompany.find(item => item.hasOwnProperty(size_id.toString()));
    return companySize ? companySize[size_id] : "Chưa cập nhật";
}
function findExp(exp_id) {
    if (!exp_id) return "Chưa có kinh nghiệm"; 
    const Exp = listSizeExp.find(item => item.hasOwnProperty(exp_id.toString()));
    return Exp ? Exp[exp_id] : "Chưa cập nhật";
}
function findEdu(edu_id) {
    if (!edu_id) return "Chưa cập nhật"; 
    const Edu = listEdu.find(item => item.hasOwnProperty(edu_id.toString()));
    return Edu ? Edu[edu_id] : "Chưa cập nhật";
}
function findLevel(level_id) {
    if (!level_id) return "Chưa cập nhật"; 
    const Level = levelList.find(item => item.hasOwnProperty(level_id.toString()));
    return Level ? Level[level_id] : "Chưa cập nhật";
}
function findCity(cit_id) {
    const city = listCities.find(city => city.cit_id === cit_id);
    return city ? city.cit_name : 'City not found';
}
function findDistrict(parentId) {
    return city_array.filter(city => city.cit_parent === parentId);
}

function findCate(cateId) {
    if (!cateId) return "Chưa cập nhật"; 
    const cate = cateList.find(cate => cate.cat_id === cateId);
    return cate ? cate.cat_name : '';
}

function checkDeadline(secondsRemaining) {
    const milliseconds = secondsRemaining * 1000;

    const endDate = new Date(milliseconds);
    const currentDate = new Date();

    const timeDifference = endDate.getTime() - currentDate.getTime();
    const absTimeDifference = timeDifference;

    if (absTimeDifference >= 365 * 24 * 60 * 60 * 1000) {
        const yearsRemaining = Math.floor(absTimeDifference / (365 * 24 * 60 * 60 * 1000));
        return { value: yearsRemaining, type: "năm" };
    } else if (absTimeDifference >= 30 * 24 * 60 * 60 * 1000) {
        const monthsRemaining = Math.floor(absTimeDifference / (30 * 24 * 60 * 60 * 1000));
        return { value: monthsRemaining, type: "tháng" };
    } else if (absTimeDifference >= 24 * 60 * 60 * 1000) {
        const daysRemaining = Math.floor(absTimeDifference / (24 * 60 * 60 * 1000));
        return { value: daysRemaining, type: "ngày" };
    } else if (absTimeDifference > 0) {
        const hoursRemaining = Math.floor(absTimeDifference / (60 * 60 * 1000));
        return { value: hoursRemaining, type: "giờ" };
    }
    else {
        return { value: timeDifference, type: "" };
    }
}
function checkElapsedTime(timestamp) {
    const currentTime = Math.floor(Date.now() / 1000);
    const elapsedTime = currentTime - timestamp;

    let absElapsedTime = Math.abs(elapsedTime);

    if (absElapsedTime >= 365 * 24 * 60 * 60) {
        const yearsElapsed = Math.floor(absElapsedTime / (365 * 24 * 60 * 60));
        return { value: yearsElapsed, type: "năm" };
    } else if (absElapsedTime >= 30 * 24 * 60 * 60) {
        const monthsElapsed = Math.floor(absElapsedTime / (30 * 24 * 60 * 60));
        return { value: monthsElapsed, type: "tháng" };
    } else if (absElapsedTime >= 24 * 60 * 60) {
        const daysElapsed = Math.floor(absElapsedTime / (24 * 60 * 60));
        return { value: daysElapsed, type: "ngày" };
    } else if (absElapsedTime >= 60 * 60) {
        const hoursElapsed = Math.floor(absElapsedTime / (60 * 60));
        return { value: hoursElapsed, type: "giờ" };
    } else {
        const minutesElapsed = Math.floor(absElapsedTime / 60);
        return { value: minutesElapsed, type: "phút" };
    }
}
function convertTimestamp(time) {
    const date = new Date(time * 1000);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();


    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}
function convertTimestampDetail(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getUTCDate().toString().padStart(2, '0');
    let month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    let year = date.getUTCFullYear();
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}
const getMucLuong = (
    new_money_type,
    new_money_from,
    new_money_to,
    new_money,
) => {
    try {
        if (new_money_type == 0 || new_money_type == 5) {
            return new_money != 0 ? array_muc_luong[new_money] : "Thoả thuận";
        } else if (new_money_type == 1) return "Thoả thuận";
        else if (new_money_type == 2) return `Từ ${(new_money_from / 1000000)} triệu`;
        else if (new_money_type == 3) return `Đến ${(new_money_to / 1000000)} triệu`;
        else if (new_money_type == 4)
            return `${(new_money_from / 1000000)} - ${(
                new_money_to / 1000000 + ' triệu'
            )}`
    } catch (error) {
        return "Chưa cập nhật";
    }
};
function getMucLuong2(new_money_type, new_money_from, new_money_to, new_money) {
    try {
        switch (new_money_type) {
            case 0:
            case 5:
                return new_money !== 0 ? listRangeMoney.find(item => item[new_money])[new_money] : "Thoả thuận";
            case 1:
                return "Thoả thuận";
            case 2:
                if (new_money_from > 100) {
                    new_money_from = new_money_from / 1000000;
                }
                return `Từ ${new_money_from} triệu`;
            case 3:
                if (new_money_to > 100) {
                    new_money_to = new_money_to / 1000000;
                }
                return `Đến ${new_money_to} triệu`;
            case 4:
                if (new_money_from > 100) {
                    new_money_from = new_money_from / 1000000;
                }
                if (new_money_to > 100) {
                    new_money_to = new_money_to / 1000000;
                }
                if (new_money_from > new_money_to) {
                    [new_money_from, new_money_to] = [new_money_to, new_money_from];
                }
                return `${new_money_from} - ${new_money_to} triệu`.replace(/\.000\.000|00\.000/g, "");
            default:
                return "Chưa cập nhật";
        }
    } catch (error) {
        return "Chưa cập nhật";
    }
}
function formatCurrency(amount) {
    try {
        return amount.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND"
        });
    } catch (error) {
        return "Chưa cập nhật";
    }
}

const getCookie = (cookieHeader, name) => {
    const value = `; ${cookieHeader}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};
function convertToUrl(name) {
    return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase();
}

// Hàm tìm cat_id dựa trên cat_name đã được chuyển đổi
function getCategoryIdByUrl(urlName) {
    for (const category of cateList) {
        if (convertToUrl(category.cat_name) === urlName) {
            return category.cat_id;
        }
    }
    return null;
}
function getCityIdByUrl(urlName) {
    for (const city of listCities) {
        if (convertToUrl(city.cit_name) === urlName) {
            return city.cit_id;
        }
    }
    return null;
}
// function parseUrl(req, res, next) {
//     const urlParts = req.path.replace('/tim-viec-lam', '').split('-').filter(part => part);

//     let city = '';
//     let category = '';

//     if (urlParts.includes('tai')) {
//         const taiIndex = urlParts.indexOf('tai');
//         city = urlParts.slice(taiIndex + 1).join('-');
//         category = urlParts.slice(0, taiIndex).join('-');
//     } else {
//         category = urlParts.join('-');
//     }

//     if (city) {
//         req.query.city = city;
//     }

//     if (category) {
//             req.query.category = category;
//     }

//     next();
// }
function parseUrl(req, res, next) {
    let path = req.path.replace('/tim-viec-lam-', '');

    var city = '';
    var category = '';

    for (let cityObj of listCities) {
        const cityUrl = convertToUrl(cityObj.cit_name);
        if (path.includes(cityUrl)) {
            city = cityUrl;
            path = path.replace(`tai-${cityUrl}`, '');
            break;
        }
    }

    if (path) {
        category = path.split('-').filter(part => part).join('-');
    }

    if (city) {
        req.query.city = city;
    }

    if (category) {
        req.query.category = category;
    }

    next();
}
function findRangeMoney(id) {
    const money = listRangeMoney.find(item => item.hasOwnProperty(id.toString()));
    return money ? money[id] : "Thỏa thuận";
}
function findCateCV(alias) {
    const cateCV = listCateCv.find(cateCV => cateCV.alias === alias);
    return cateCV ? cateCV : '';
}
function findLangCV(alias) {
    const langCV = listLangCv.find(langCV => langCV.alias === alias);
    return langCV ? langCV : '';
}
// function capitalizeFirstLetter(text) {
//     return text.replace(/\b\w/g, function(char) {
//         return char.toUpperCase();
//     });
// }
function getTimeRemain(timeup){
    const currentTime = Math.floor(Date.now() / 1000);
    const time = currentTime - timeup; 
    if(time > 946080000 ){
        return {value : Math.round(time / (60 * 60 * 24 * 30 * 365)), type : 'năm'};
    }
    else if(time > 2592000){
        return {value : Math.round(time / (60 * 60 * 24 * 30)), type : 'tháng'};
    }
    else if(time > 86400 ){
        return {value : Math.round(time / (60 * 60 * 24)), type : 'ngày'};
    }
    else if(time > 3600){
        return {value : Math.round(time / (60 * 60)), type : 'giờ'};
    }
    else{
        return {value : Math.round(time / (60)), type : 'phút'};
    }
}
function findTagByalias(alias) {
    const tag = data_tags.find(tag => tag.tag_alias === alias);
    return tag ? tag.tag_name : '';
}
// function capitalizeFirstLetter(text) {
//     return text.split(' ').map(function(word) {
//         if (word.length > 0) {
//             return word[0].toUpperCase() + word.slice(1).toLowerCase();
//         } else {
//             return word;
//         }
//     }).join(' ');
// }
function capitalizeFirstLetter(text) {
    return text.split(' ').map(function (word) {
        if (word === 'Cv' || word == 'CV' || word == 'cv' || word == 'cV') {
            return 'CV';
        } else if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word;
        }
    }).join(' ');
}
function toLowerCaseString(text) {
    return text.toLowerCase();
}

function renderOTP() {
    return Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
}

module.exports = { parseUrl };
module.exports = {
    listCities, findCity, checkDeadline, findCompSize, getMucLuong,
    checkElapsedTime, convertTimestamp, findExp,findEdu, findTypeWork, findGender, findCate,getTimeRemain,
    levelList, cateList, listTypeWork, listRangeMoney, listSizeExp, listEdu, genderList,
    findDistrict, convertTimestampDetail, findCateBlog, listSizeCompany, city_array, arrCateBlog, findLevel, getCookie, getCategoryIdByUrl, getCityIdByUrl, parseUrl, findCateNewsAlias, convertToUrl, findRangeMoney, findCateCV, findLangCV, capitalizeFirstLetter, toLowerCaseString, findTagByalias, getMucLuong2, litsNewsCate, findCateNewsById, renderOTP
};
