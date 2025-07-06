const cityList = [
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
const jobList = [
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
const data_tags = [
    {
        value: 0,
        label: "bác sĩ tai mũi họng",
        alias: "bac-si-tai-mui-hong"
    },
    {
        value: 0,
        label: "bác sĩ tư vấn",
        alias: "bac-si-tu-van"
    },
    {
        value: 0,
        label: "bác sĩ y học cổ truyền",
        alias: "bac-si-y-hoc-co-truyen"
    },
    {
        value: 0,
        label: "chuyên viên dinh dưỡng",
        alias: "chuyen-vien-dinh-duong"
    },
    {
        value: 0,
        label: "dược sĩ bán thuốc",
        alias: "duoc-si-ban-thuoc"
    },
    {
        value: 0,
        label: "điều dưỡng đi Đức",
        alias: "dieu-duong-di-duc"
    },
    {
        value: 0,
        label: "Điều Dưỡng Phòng Khám",
        alias: "dieu-duong-phong-kham"
    },
    {
        value: 0,
        label: "Y Tá Phòng Khám",
        alias: "y-ta-phong-kham"
    },
    {
        value: 0,
        label: "quản trị",
        alias: "quan-tri"
    },
    {
        value: 0,
        label: "chuyên viên kiểm soát nội bộ",
        alias: "chuyen-vien-kiem-soat-noi-bo"
    },
    {
        value: 0,
        label: "trưởng phòng kiểm soát nội bộ",
        alias: "truong-phong-kiem-soat-noi-bo"
    },
    {
        value: 0,
        label: "business development manager",
        alias: "business-development-manager"
    },
    {
        value: 0,
        label: "phó phòng kinh doanh",
        alias: "pho-phong-kinh-doanh"
    },
    {
        value: 0,
        label: "quản lý kinh doanh",
        alias: "quan-ly-kinh-doanh"
    },
    {
        value: 0,
        label: "trưởng nhóm kinh doanh",
        alias: "truong-nhom-kinh-doanh"
    },
    {
        value: 0,
        label: "trưởng phòng kinh doanh",
        alias: "truong-phong-kinh-doanh"
    },
    {
        value: 0,
        label: "kiểm soát nội bộ",
        alias: "kiem-soat-noi-bo"
    },
    {
        value: 0,
        label: "nhân viên kiểm soát",
        alias: "nhan-vien-kiem-soat"
    },
    {
        value: 0,
        label: "nhân viên phát triển kinh doanh",
        alias: "nhan-vien-phat-trien-kinh-doanh"
    },
    {
        value: 0,
        label: "cố vấn dịch vụ",
        alias: "co-van-dich-vu"
    },
    {
        value: 0,
        label: "cố vấn dịch vụ ô tô",
        alias: "co-van-dich-vu-o-to"
    },
    {
        value: 0,
        label: "nhân viên dịch vụ khách hàng",
        alias: "nhan-vien-dich-vu-khach-hang"
    },
    {
        value: 0,
        label: "service engineer",
        alias: "service-engineer"
    },
    {
        value: 0,
        label: "quản lý chất lượng dịch vụ",
        alias: "quan-ly-chat-luong-dich-vu"
    },
    {
        value: 0,
        label: "giám sát dịch vụ tòa nhà",
        alias: "giam-sat-dich-vu-toa-nha"
    },
    {
        value: 0,
        label: "giao dịch viên FPT",
        alias: "giao-dich-vien-fpt"
    },
    {
        value: 0,
        label: "giao dịch viên viettel",
        alias: "giao-dich-vien-viettel"
    },
    {
        value: 0,
        label: "biên kịch",
        alias: "bien-kich"
    },
    {
        value: 0,
        label: "biên tập video",
        alias: "bien-tap-video"
    },
    {
        value: 0,
        label: "biên tập viên",
        alias: "bien-tap-vien"
    },
    {
        value: 0,
        label: "biên tập sách",
        alias: "bien-tap-sach"
    },
    {
        value: 0,
        label: "biên tập viên tạp chí",
        alias: "bien-tap-vien-tap-chi"
    },
    {
        value: 0,
        label: "biên tập viên tiếng anh",
        alias: "bien-tap-vien-tieng-anh"
    },
    {
        value: 0,
        label: "biên tập viên website",
        alias: "bien-tap-vien-website"
    },
    {
        value: 0,
        label: "nhà báo",
        alias: "nha-bao"
    },
    {
        value: 0,
        label: "phóng viên",
        alias: "phong-vien"
    },
    {
        value: 0,
        label: "phóng viên ảnh",
        alias: "phong-vien-anh"
    },
    {
        value: 0,
        label: "đài truyền hình",
        alias: "dai-truyen-hinh"
    },
    {
        value: 0,
        label: "viết kịch bản",
        alias: "viet-kich-ban"
    },
    {
        value: 0,
        label: "biên tập viên truyền hình",
        alias: "bien-tap-vien-truyen-hinh"
    },
    {
        value: 0,
        label: "nhân viên sơ chế thực phẩm",
        alias: "nhan-vien-so-che-thuc-pham"
    },
    {
        value: 0,
        label: "quản lý thiết bị",
        alias: "quan-ly-thiet-bi"
    },
    {
        value: 0,
        label: "giám sát kho",
        alias: "giam-sat-kho"
    },
    {
        value: 0,
        label: "kho",
        alias: "kho"
    },
    {
        value: 0,
        label: "nhân viên quản lý kho",
        alias: "nhan-vien-quan-ly-kho"
    },
    {
        value: 0,
        label: "kỹ sư thiết bị y tế",
        alias: "ky-su-thiet-bi-y-te"
    },
    {
        value: 0,
        label: "nhân viên vật tư",
        alias: "nhan-vien-vat-tu"
    },
    {
        value: 0,
        label: "nhân viên kho",
        alias: "nhan-vien-kho"
    },
    {
        value: 0,
        label: "nhân viên kiểm hàng",
        alias: "nhan-vien-kiem-hang"
    },
    {
        value: 0,
        label: "quản lý kho",
        alias: "quan-ly-kho"
    },
    {
        value: 0,
        label: "trưởng phòng cung ứng",
        alias: "truong-phong-cung-ung"
    },
    {
        value: 0,
        label: "trưởng phòng vật tư",
        alias: "truong-phong-vat-tu"
    },
    {
        value: 0,
        label: "trưởng phòng kho vận",
        alias: "truong-phong-kho-van"
    },
    {
        value: 0,
        label: "công nhân kho",
        alias: "cong-nhan-kho"
    },
    {
        value: 0,
        label: "thủ kho dược",
        alias: "thu-kho-duoc"
    },
    {
        value: 0,
        label: "nhân viên thu mua vật tư",
        alias: "nhan-vien-thu-mua-vat-tu"
    },
    {
        value: 0,
        label: "quản lý kho vật tư",
        alias: "quan-ly-kho-vat-tu"
    },
    {
        value: 0,
        label: "quản lý vật tư",
        alias: "quan-ly-vat-tu"
    },
    {
        value: 0,
        label: "nhân viên kho nữ",
        alias: "nhan-vien-kho-nu"
    },
    {
        value: 0,
        label: "phụ kho",
        alias: "phu-kho"
    },
    {
        value: 0,
        label: "thủ kho nữ",
        alias: "thu-kho-nu"
    },
    {
        value: 0,
        label: "nhân viên kho siêu thị",
        alias: "nhan-vien-kho-sieu-thi"
    },
    {
        value: 0,
        label: "nhân viên thiết kế website",
        alias: "nhan-vien-thiet-ke-website"
    },
    {
        value: 0,
        label: "nhân viên in ấn",
        alias: "nhan-vien-in-an"
    },
    {
        value: 0,
        label: "nhân viên chế bản",
        alias: "nhan-vien-che-ban"
    },
    {
        value: 0,
        label: "công nhân ngành in ấn",
        alias: "cong-nhan-nganh-in-an"
    },
    {
        value: 0,
        label: "sửa máy in",
        alias: "sua-may-in"
    },
    {
        value: 0,
        label: "nhân viên photocopy",
        alias: "nhan-vien-photocopy"
    },
    {
        value: 0,
        label: "kỹ thuật viên máy in",
        alias: "ky-thuat-vien-may-in"
    },
    {
        value: 0,
        label: "thợ in",
        alias: "tho-in"
    },
    {
        value: 0,
        label: "nhân viên thiết kế in ấn",
        alias: "nhan-vien-thiet-ke-in-an"
    },
    {
        value: 0,
        label: "thợ in lụa",
        alias: "tho-in-lua"
    },
    {
        value: 0,
        label: "thợ in offset",
        alias: "tho-in-offset"
    },
    {
        value: 0,
        label: "kỹ sư lâm nghiệp",
        alias: "ky-su-lam-nghiep"
    },
    {
        value: 0,
        label: "trang trại",
        alias: "trang-trai"
    },
    {
        value: 0,
        label: "kỹ thuật nông nghiệp",
        alias: "ky-thuat-nong-nghiep"
    },
    {
        value: 0,
        label: "nông trại",
        alias: "nong-trai"
    },
    {
        value: 0,
        label: "Kỹ Sư Chăn Nuôi",
        alias: "ky-su-chan-nuoi"
    },
    {
        value: 0,
        label: "Kỹ Sư Trồng Trọt",
        alias: "ky-su-trong-trot"
    },
    {
        value: 0,
        label: "nhân viên order",
        alias: "nhan-vien-order"
    },
    {
        value: 0,
        label: "nhân viên thương mại điện tử",
        alias: "nhan-vien-thuong-mai-dien-tu"
    },
    {
        value: 0,
        label: "trực tổng đài",
        alias: "truc-tong-dai"
    },
    {
        value: 0,
        label: "trực tổng đài viettel",
        alias: "truc-tong-dai-viettel"
    },
    {
        value: 0,
        label: "nhân viên trực điện thoại",
        alias: "nhan-vien-truc-dien-thoai"
    },
    {
        value: 0,
        label: "nhân viên chăm sóc khách hàng viettel",
        alias: "nhan-vien-cham-soc-khach-hang-viettel"
    },
    {
        value: 0,
        label: "trưởng phòng chăm sóc khách hàng",
        alias: "truong-phong-cham-soc-khach-hang"
    },
    {
        value: 0,
        label: "nhân viên tổng đài viettel",
        alias: "nhan-vien-tong-dai-viettel"
    },
    {
        value: 0,
        label: "nhân viên hỗ trợ khách hàng",
        alias: "nhan-vien-ho-tro-khach-hang"
    },
    {
        value: 0,
        label: "nhân viên cs",
        alias: "nhan-vien-cs"
    },
    {
        value: 0,
        label: "chuyên viên chăm sóc khách hàng",
        alias: "chuyen-vien-cham-soc-khach-hang"
    },
    {
        value: 0,
        label: "nhân viên chăm sóc khách hàng online",
        alias: "nhan-vien-cham-soc-khach-hang-online"
    },
    {
        value: 0,
        label: "nhân viên tổng đài",
        alias: "nhan-vien-tong-dai"
    },
    {
        value: 0,
        label: "trưởng bộ phận chăm sóc khách hàng",
        alias: "truong-bo-phan-cham-soc-khach-hang"
    },
    {
        value: 0,
        label: "trưởng nhóm chăm sóc khách hàng",
        alias: "truong-nhom-cham-soc-khach-hang"
    },
    {
        value: 0,
        label: "trực tổng đài taxi",
        alias: "truc-tong-dai-taxi"
    },
    {
        value: 0,
        label: "Nhân Viên Chăm Sóc Khách Hàng Mobifone",
        alias: "nhan-vien-cham-soc-khach-hang-mobifone"
    },
    {
        value: 0,
        label: "thực tập kế toán",
        alias: "thuc-tap-ke-toan"
    },
    {
        value: 0,
        label: "thực tập kiểm toán",
        alias: "thuc-tap-kiem-toan"
    },
    {
        value: 0,
        label: "thực tập nhân sự",
        alias: "thuc-tap-nhan-su"
    },
    {
        value: 0,
        label: "thực tập seo",
        alias: "thuc-tap-seo"
    },
    {
        value: 0,
        label: "thực tập sinh",
        alias: "thuc-tap-sinh"
    },
    {
        value: 0,
        label: "thực tập sinh it",
        alias: "thuc-tap-sinh-it"
    },
    {
        value: 0,
        label: "thực tập sinh marketing",
        alias: "thuc-tap-sinh-marketing"
    },
    {
        value: 0,
        label: "thực tập sinh thư ký",
        alias: "thuc-tap-sinh-thu-ky"
    },
    {
        value: 0,
        label: "thực tập tester",
        alias: "thuc-tap-tester"
    },
    {
        value: 0,
        label: "kỹ sư mới ra trường",
        alias: "ky-su-moi-ra-truong"
    },
    {
        value: 0,
        label: "nhân viên học việc",
        alias: "nhan-vien-hoc-viec"
    },
    {
        value: 0,
        label: "quản trị viên tập sự",
        alias: "quan-tri-vien-tap-su"
    },
    {
        value: 0,
        label: "kiến trúc sư mới ra trường",
        alias: "kien-truc-su-moi-ra-truong"
    },
    {
        value: 0,
        label: "kỹ sư điện mới ra trường",
        alias: "ky-su-dien-moi-ra-truong"
    },
    {
        value: 0,
        label: "nhân viên kế toán mới ra trường",
        alias: "nhan-vien-ke-toan-moi-ra-truong"
    },
    {
        value: 0,
        label: "nhân viên marketing mới ra trường",
        alias: "nhan-vien-marketing-moi-ra-truong"
    },
    {
        value: 0,
        label: "thực tập có lương",
        alias: "thuc-tap-co-luong"
    },
    {
        value: 0,
        label: "thực tập du lịch",
        alias: "thuc-tap-du-lich"
    },
    {
        value: 0,
        label: "thực tập kinh doanh",
        alias: "thuc-tap-kinh-doanh"
    },
    {
        value: 0,
        label: "thực tập lập trình viên",
        alias: "thuc-tap-lap-trinh-vien"
    },
    {
        value: 0,
        label: "thực tập sinh chứng khoán",
        alias: "thuc-tap-sinh-chung-khoan"
    },
    {
        value: 0,
        label: "thực tập sinh content",
        alias: "thuc-tap-sinh-content"
    },
    {
        value: 0,
        label: "thực tập sinh hành chính",
        alias: "thuc-tap-sinh-hanh-chinh"
    },
    {
        value: 0,
        label: "thực tập sinh hành chính nhân sự",
        alias: "thuc-tap-sinh-hanh-chinh-nhan-su"
    },
    {
        value: 0,
        label: "thực tập sinh kỹ thuật",
        alias: "thuc-tap-sinh-ky-thuat"
    },
    {
        value: 0,
        label: "thực tập sinh nhân sự",
        alias: "thuc-tap-sinh-nhan-su"
    },
    {
        value: 0,
        label: "thực tập sinh part time",
        alias: "thuc-tap-sinh-part-time"
    },
    {
        value: 0,
        label: "thực tập sinh tài chính",
        alias: "thuc-tap-sinh-tai-chinh"
    },
    {
        value: 0,
        label: "thực tập sinh thiết kế",
        alias: "thuc-tap-sinh-thiet-ke"
    },
    {
        value: 0,
        label: "thực tập sinh thu mua",
        alias: "thuc-tap-sinh-thu-mua"
    },
    {
        value: 0,
        label: "thực tập sinh tiếng nhật",
        alias: "thuc-tap-sinh-tieng-nhat"
    },
    {
        value: 0,
        label: "thực tập android",
        alias: "thuc-tap-android"
    },
    {
        value: 0,
        label: "Thực Tập Lập Trình PHP",
        alias: "thuc-tap-lap-trinh-php"
    },
    {
        value: 0,
        label: "thực tập marketing online",
        alias: "thuc-tap-marketing-online"
    },
    {
        value: 0,
        label: "thực tập quản trị kinh doanh",
        alias: "thuc-tap-quan-tri-kinh-doanh"
    },
    {
        value: 0,
        label: "thực tập sinh digital marketing",
        alias: "thuc-tap-sinh-digital-marketing"
    },
    {
        value: 0,
        label: "thực tập sinh du lịch",
        alias: "thuc-tap-sinh-du-lich"
    },
    {
        value: 0,
        label: "thực tập sinh php",
        alias: "thuc-tap-sinh-php"
    },
    {
        value: 0,
        label: "thực tập sinh tiếng Trung",
        alias: "thuc-tap-sinh-tieng-trung"
    },
    {
        value: 0,
        label: "thực tập sinh truyền thông",
        alias: "thuc-tap-sinh-truyen-thong"
    },
    {
        value: 0,
        label: "thực tập sinh xây dựng",
        alias: "thuc-tap-sinh-xay-dung"
    },
    {
        value: 0,
        label: "thực tập sinh xuất nhập khẩu",
        alias: "thuc-tap-sinh-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "học việc kế toán",
        alias: "hoc-viec-ke-toan"
    },
    {
        value: 0,
        label: "sinh viên IT mới ra trường",
        alias: "sinh-vien-it-moi-ra-truong"
    },
    {
        value: 0,
        label: "sinh viên năm cuối",
        alias: "sinh-vien-nam-cuoi"
    },
    {
        value: 0,
        label: "phó giám đốc",
        alias: "pho-giam-doc"
    },
    {
        value: 0,
        label: "phó giám đốc điều hành",
        alias: "pho-giam-doc-dieu-hanh"
    },
    {
        value: 0,
        label: "team leader",
        alias: "team-leader"
    },
    {
        value: 0,
        label: "phó tổng giám đốc",
        alias: "pho-tong-giam-doc"
    },
    {
        value: 0,
        label: "giám đốc",
        alias: "giam-doc"
    },
    {
        value: 0,
        label: "giám đốc chất lượng",
        alias: "giam-doc-chat-luong"
    },
    {
        value: 0,
        label: "giám đốc bán hàng",
        alias: "giam-doc-ban-hang"
    },
    {
        value: 0,
        label: "giám đốc chi nhánh",
        alias: "giam-doc-chi-nhanh"
    },
    {
        value: 0,
        label: "giám đốc chiến lược",
        alias: "giam-doc-chien-luoc"
    },
    {
        value: 0,
        label: "giám đốc công nghệ",
        alias: "giam-doc-cong-nghe"
    },
    {
        value: 0,
        label: "giám đốc dự án",
        alias: "giam-doc-du-an"
    },
    {
        value: 0,
        label: "giám đốc điều hành",
        alias: "giam-doc-dieu-hanh"
    },
    {
        value: 0,
        label: "giám đốc it",
        alias: "giam-doc-it"
    },
    {
        value: 0,
        label: "giám đốc khu vực",
        alias: "giam-doc-khu-vuc"
    },
    {
        value: 0,
        label: "giám đốc kinh doanh",
        alias: "giam-doc-kinh-doanh"
    },
    {
        value: 0,
        label: "giám đốc kỹ thuật",
        alias: "giam-doc-ky-thuat"
    },
    {
        value: 0,
        label: "giám đốc marketing",
        alias: "giam-doc-marketing"
    },
    {
        value: 0,
        label: "giám đốc mua hàng",
        alias: "giam-doc-mua-hang"
    },
    {
        value: 0,
        label: "giám đốc ngân hàng",
        alias: "giam-doc-ngan-hang"
    },
    {
        value: 0,
        label: "giám đốc nhà hàng",
        alias: "giam-doc-nha-hang"
    },
    {
        value: 0,
        label: "giám đốc nhà máy",
        alias: "giam-doc-nha-may"
    },
    {
        value: 0,
        label: "giám đốc nhân sự",
        alias: "giam-doc-nhan-su"
    },
    {
        value: 0,
        label: "giám đốc sản xuất",
        alias: "giam-doc-san-xuat"
    },
    {
        value: 0,
        label: "giám đốc siêu thị",
        alias: "giam-doc-sieu-thi"
    },
    {
        value: 0,
        label: "giám đốc tài chính",
        alias: "giam-doc-tai-chinh"
    },
    {
        value: 0,
        label: "giám đốc thiết kế",
        alias: "giam-doc-thiet-ke"
    },
    {
        value: 0,
        label: "giám đốc thương hiệu",
        alias: "giam-doc-thuong-hieu"
    },
    {
        value: 0,
        label: "giám đốc vùng",
        alias: "giam-doc-vung"
    },
    {
        value: 0,
        label: "quản lý giám sát",
        alias: "quan-ly-giam-sat"
    },
    {
        value: 0,
        label: "deputy manager",
        alias: "deputy-manager"
    },
    {
        value: 0,
        label: "giám đốc ban quản lý dự án",
        alias: "giam-doc-ban-quan-ly-du-an"
    },
    {
        value: 0,
        label: "operation executive",
        alias: "operation-executive"
    },
    {
        value: 0,
        label: "phó giám đốc kinh doanh",
        alias: "pho-giam-doc-kinh-doanh"
    },
    {
        value: 0,
        label: "phó giám đốc sản xuất",
        alias: "pho-giam-doc-san-xuat"
    },
    {
        value: 0,
        label: "planning manager",
        alias: "planning-manager"
    },
    {
        value: 0,
        label: "plant manager",
        alias: "plant-manager"
    },
    {
        value: 0,
        label: "procurement manager",
        alias: "procurement-manager"
    },
    {
        value: 0,
        label: "quản lý cấp cao",
        alias: "quan-ly-cap-cao"
    },
    {
        value: 0,
        label: "quản lý công nghiệp",
        alias: "quan-ly-cong-nghiep"
    },
    {
        value: 0,
        label: "quản lý khu vực",
        alias: "quan-ly-khu-vuc"
    },
    {
        value: 0,
        label: "recruitment executive",
        alias: "recruitment-executive"
    },
    {
        value: 0,
        label: "trưởng phòng nghiệp vụ",
        alias: "truong-phong-nghiep-vu"
    },
    {
        value: 0,
        label: "quản lý trung tâm tiếng anh",
        alias: "quan-ly-trung-tam-tieng-anh"
    },
    {
        value: 0,
        label: "giám đốc kinh doanh bất động sản",
        alias: "giam-doc-kinh-doanh-bat-dong-san"
    },
    {
        value: 0,
        label: "nhân viên hành chính nhân sự",
        alias: "nhan-vien-hanh-chinh-nhan-su"
    },
    {
        value: 0,
        label: "nhân sự cấp cao",
        alias: "nhan-su-cap-cao"
    },
    {
        value: 0,
        label: "chuyên viên tiền lương",
        alias: "chuyen-vien-tien-luong"
    },
    {
        value: 0,
        label: "hr director",
        alias: "hr-director"
    },
    {
        value: 0,
        label: "hr manager",
        alias: "hr-manager"
    },
    {
        value: 0,
        label: "nhân sự tiền lương",
        alias: "nhan-su-tien-luong"
    },
    {
        value: 0,
        label: "nhân sự tiếng anh",
        alias: "nhan-su-tieng-anh"
    },
    {
        value: 0,
        label: "nhân sự tiếng nhật",
        alias: "nhan-su-tieng-nhat"
    },
    {
        value: 0,
        label: "chuyên viên nhân sự",
        alias: "chuyen-vien-nhan-su"
    },
    {
        value: 0,
        label: "giám sát nhân sự",
        alias: "giam-sat-nhan-su"
    },
    {
        value: 0,
        label: "hành chính nhân sự",
        alias: "hanh-chinh-nhan-su"
    },
    {
        value: 0,
        label: "cộng tác viên nhân sự",
        alias: "cong-tac-vien-nhan-su"
    },
    {
        value: 0,
        label: "phó phòng nhân sự",
        alias: "pho-phong-nhan-su"
    },
    {
        value: 0,
        label: "trưởng phòng hành chính nhân sự",
        alias: "truong-phong-hanh-chinh-nhan-su"
    },
    {
        value: 0,
        label: "trưởng phòng nhân sự",
        alias: "truong-phong-nhan-su"
    },
    {
        value: 0,
        label: "chuyên viên lao động tiền lương",
        alias: "chuyen-vien-lao-dong-tien-luong"
    },
    {
        value: 0,
        label: "chuyên viên nhân sự tiền lương",
        alias: "chuyen-vien-nhan-su-tien-luong"
    },
    {
        value: 0,
        label: "nhân viên lao động tiền lương",
        alias: "nhan-vien-lao-dong-tien-luong"
    },
    {
        value: 0,
        label: "nhân viên nhân sự tiền lương",
        alias: "nhan-vien-nhan-su-tien-luong"
    },
    {
        value: 0,
        label: "chuyên viên c&b",
        alias: "chuyen-vien-cb"
    },
    {
        value: 0,
        label: "nhân viên c&b",
        alias: "nhan-vien-cb"
    },
    {
        value: 0,
        label: "giám đốc hành chính nhân sự",
        alias: "giam-doc-hanh-chinh-nhan-su"
    },
    {
        value: 0,
        label: "chuyên viên hành chính nhân sự",
        alias: "chuyen-vien-hanh-chinh-nhan-su"
    },
    {
        value: 0,
        label: "hr executive",
        alias: "hr-executive"
    },
    {
        value: 0,
        label: "nhân sự cao cấp",
        alias: "nhan-su-cao-cap"
    },
    {
        value: 0,
        label: "nhân sự ngân hàng",
        alias: "nhan-su-ngan-hang"
    },
    {
        value: 0,
        label: "nhân viên phòng nhân sự",
        alias: "nhan-vien-phong-nhan-su"
    },
    {
        value: 0,
        label: "phó phòng hành chính nhân sự",
        alias: "pho-phong-hanh-chinh-nhan-su"
    },
    {
        value: 0,
        label: "quản trị nhân lực",
        alias: "quan-tri-nhan-luc"
    },
    {
        value: 0,
        label: "trưởng nhóm nhân sự",
        alias: "truong-nhom-nhan-su"
    },
    {
        value: 0,
        label: "pha chế barista",
        alias: "pha-che-barista"
    },
    {
        value: 0,
        label: "nhân viên lotte",
        alias: "nhan-vien-lotte"
    },
    {
        value: 0,
        label: "lương 6 triệu",
        alias: "luong-6-trieu"
    },
    {
        value: 0,
        label: "lương 7 triệu",
        alias: "luong-7-trieu"
    },
    {
        value: 0,
        label: "tình nguyện viên",
        alias: "tinh-nguyen-vien"
    },
    {
        value: 0,
        label: "thư ký công trình",
        alias: "thu-ky-cong-trinh"
    },
    {
        value: 0,
        label: "thư ký dự án",
        alias: "thu-ky-du-an"
    },
    {
        value: 0,
        label: "thư ký giám đốc",
        alias: "thu-ky-giam-doc"
    },
    {
        value: 0,
        label: "thư ký tòa án",
        alias: "thu-ky-toa-an"
    },
    {
        value: 0,
        label: "thư ký văn phòng",
        alias: "thu-ky-van-phong"
    },
    {
        value: 0,
        label: "thư ký y khoa",
        alias: "thu-ky-y-khoa"
    },
    {
        value: 0,
        label: "admin assistant",
        alias: "admin-assistant"
    },
    {
        value: 0,
        label: "assistant brand manager",
        alias: "assistant-brand-manager"
    },
    {
        value: 0,
        label: "trợ lý dự án",
        alias: "tro-ly-du-an"
    },
    {
        value: 0,
        label: "trợ lý giám đốc",
        alias: "tro-ly-giam-doc"
    },
    {
        value: 0,
        label: "trợ lý giám đốc kinh doanh",
        alias: "tro-ly-giam-doc-kinh-doanh"
    },
    {
        value: 0,
        label: "trợ lý giám đốc tài chính",
        alias: "tro-ly-giam-doc-tai-chinh"
    },
    {
        value: 0,
        label: "trợ lý giám đốc tiếng anh",
        alias: "tro-ly-giam-doc-tieng-anh"
    },
    {
        value: 0,
        label: "trợ lý kế toán",
        alias: "tro-ly-ke-toan"
    },
    {
        value: 0,
        label: "trợ lý kiểm toán",
        alias: "tro-ly-kiem-toan"
    },
    {
        value: 0,
        label: "trợ lý nhân sự",
        alias: "tro-ly-nhan-su"
    },
    {
        value: 0,
        label: "trợ lý quản lý nhà hàng",
        alias: "tro-ly-quan-ly-nha-hang"
    },
    {
        value: 0,
        label: "trợ lý sản xuất",
        alias: "tro-ly-san-xuat"
    },
    {
        value: 0,
        label: "trợ lý tiếng trung",
        alias: "tro-ly-tieng-trung"
    },
    {
        value: 0,
        label: "trợ lý văn phòng",
        alias: "tro-ly-van-phong"
    },
    {
        value: 0,
        label: "thư ký công trường",
        alias: "thu-ky-cong-truong"
    },
    {
        value: 0,
        label: "thư ký hội đồng quản trị",
        alias: "thu-ky-hoi-dong-quan-tri"
    },
    {
        value: 0,
        label: "thư ký tổng giám đốc",
        alias: "thu-ky-tong-giam-doc"
    },
    {
        value: 0,
        label: "thư ký trợ lý giám đốc",
        alias: "thu-ky-tro-ly-giam-doc"
    },
    {
        value: 0,
        label: "trợ lý giám đốc marketing",
        alias: "tro-ly-giam-doc-marketing"
    },
    {
        value: 0,
        label: "trợ lý giám đốc sản xuất",
        alias: "tro-ly-giam-doc-san-xuat"
    },
    {
        value: 0,
        label: "trợ lý kỹ thuật",
        alias: "tro-ly-ky-thuat"
    },
    {
        value: 0,
        label: "trợ lý phiên dịch tiếng trung",
        alias: "tro-ly-phien-dich-tieng-trung"
    },
    {
        value: 0,
        label: "trợ lý phó tổng giám đốc",
        alias: "tro-ly-pho-tong-giam-doc"
    },
    {
        value: 0,
        label: "trợ lý phòng thí nghiệm",
        alias: "tro-ly-phong-thi-nghiem"
    },
    {
        value: 0,
        label: "trợ lý thời trang",
        alias: "tro-ly-thoi-trang"
    },
    {
        value: 0,
        label: "trợ lý tiếng anh",
        alias: "tro-ly-tieng-anh"
    },
    {
        value: 0,
        label: "trợ lý tiếng nhật",
        alias: "tro-ly-tieng-nhat"
    },
    {
        value: 0,
        label: "trợ lý tổng giám đốc",
        alias: "tro-ly-tong-giam-doc"
    },
    {
        value: 0,
        label: "Trợ Lý Luật Sư",
        alias: "tro-ly-luat-su"
    },
    {
        value: 0,
        label: "thiết kế cảnh quan",
        alias: "thiet-ke-canh-quan"
    },
    {
        value: 0,
        label: "thiết kế đồ họa",
        alias: "thiet-ke-do-hoa"
    },
    {
        value: 0,
        label: "thiết kế đồ họa 2d",
        alias: "thiet-ke-do-hoa-2d"
    },
    {
        value: 0,
        label: "thiết kế đồ họa game",
        alias: "thiet-ke-do-hoa-game"
    },
    {
        value: 0,
        label: "thiết kế in ấn",
        alias: "thiet-ke-in-an"
    },
    {
        value: 0,
        label: "thiết kế kiến trúc",
        alias: "thiet-ke-kien-truc"
    },
    {
        value: 0,
        label: "graphic design",
        alias: "graphic-design"
    },
    {
        value: 0,
        label: "designer",
        alias: "designer"
    },
    {
        value: 0,
        label: "designer game",
        alias: "designer-game"
    },
    {
        value: 0,
        label: "ui ux designer",
        alias: "ui-ux-designer"
    },
    {
        value: 0,
        label: "cộng tác viên thiết kế",
        alias: "cong-tac-vien-thiet-ke"
    },
    {
        value: 0,
        label: "thợ vẽ",
        alias: "tho-ve"
    },
    {
        value: 0,
        label: "thiết kế ô tô",
        alias: "thiet-ke-o-to"
    },
    {
        value: 0,
        label: "thiết kế rập",
        alias: "thiet-ke-rap"
    },
    {
        value: 0,
        label: "thiết kế sản phẩm",
        alias: "thiet-ke-san-pham"
    },
    {
        value: 0,
        label: "thiết kế sự kiện",
        alias: "thiet-ke-su-kien"
    },
    {
        value: 0,
        label: "thiết kế thời trang",
        alias: "thiet-ke-thoi-trang"
    },
    {
        value: 0,
        label: "chuyên viên thiết kế",
        alias: "chuyen-vien-thiet-ke"
    },
    {
        value: 0,
        label: "họa sĩ",
        alias: "hoa-si"
    },
    {
        value: 0,
        label: "họa viên 2d",
        alias: "hoa-vien-2d"
    },
    {
        value: 0,
        label: "họa viên 3d",
        alias: "hoa-vien-3d"
    },
    {
        value: 0,
        label: "họa viên kết cấu",
        alias: "hoa-vien-ket-cau"
    },
    {
        value: 0,
        label: "họa viên kiến trúc",
        alias: "hoa-vien-kien-truc"
    },
    {
        value: 0,
        label: "họa viên revit",
        alias: "hoa-vien-revit"
    },
    {
        value: 0,
        label: "chuyên viên thiết kế đồ họa",
        alias: "chuyen-vien-thiet-ke-do-hoa"
    },
    {
        value: 0,
        label: "shop drawing",
        alias: "shop-drawing"
    },
    {
        value: 0,
        label: "nhân viên thiết kế thời trang",
        alias: "nhan-vien-thiet-ke-thoi-trang"
    },
    {
        value: 0,
        label: "nhân viên thiết kế đồ họa",
        alias: "nhan-vien-thiet-ke-do-hoa"
    },
    {
        value: 0,
        label: "nhân viên thiết kế 3d",
        alias: "nhan-vien-thiet-ke-3d"
    },
    {
        value: 0,
        label: "nhân viên thiết kế rập",
        alias: "nhan-vien-thiet-ke-rap"
    },
    {
        value: 0,
        label: "nhân viên thiết kế bao bì",
        alias: "nhan-vien-thiet-ke-bao-bi"
    },
    {
        value: 0,
        label: "nhân viên thiết kế quảng cáo",
        alias: "nhan-vien-thiet-ke-quang-cao"
    },
    {
        value: 0,
        label: "nhân viên thiết kế autocad",
        alias: "nhan-vien-thiet-ke-autocad"
    },
    {
        value: 0,
        label: "kỹ thuật viên đồ họa",
        alias: "ky-thuat-vien-do-hoa"
    },
    {
        value: 0,
        label: "3d animation",
        alias: "3d-animation"
    },
    {
        value: 0,
        label: "senior designer",
        alias: "senior-designer"
    },
    {
        value: 0,
        label: "ui designer",
        alias: "ui-designer"
    },
    {
        value: 0,
        label: "kỹ sư thiết kế cad",
        alias: "ky-su-thiet-ke-cad"
    },
    {
        value: 0,
        label: "nhân viên thiết kế",
        alias: "nhan-vien-thiet-ke"
    },
    {
        value: 0,
        label: "nhân viên thiết kế kỹ thuật",
        alias: "nhan-vien-thiet-ke-ky-thuat"
    },
    {
        value: 0,
        label: "nhân viên thiết kế mẫu",
        alias: "nhan-vien-thiet-ke-mau"
    },
    {
        value: 0,
        label: "nhân viên thiết kế nội ngoại thất",
        alias: "nhan-vien-thiet-ke-noi-ngoai-that"
    },
    {
        value: 0,
        label: "thiết kế đồ gỗ",
        alias: "thiet-ke-do-go"
    },
    {
        value: 0,
        label: "thiết kế part time",
        alias: "thiet-ke-part-time"
    },
    {
        value: 0,
        label: "nhân viên chỉnh sửa hình ảnh",
        alias: "nhan-vien-chinh-sua-hinh-anh"
    },
    {
        value: 0,
        label: "nhân viên vẽ autocad",
        alias: "nhan-vien-ve-autocad"
    },
    {
        value: 0,
        label: "Concept Art",
        alias: "concept-art"
    },
    {
        value: 0,
        label: "thiết kế đồ họa tại nhà",
        alias: "thiet-ke-do-hoa-tai-nha"
    },
    {
        value: 0,
        label: "thiết kế banner",
        alias: "thiet-ke-banner"
    },
    {
        value: 0,
        label: "Thiết Kế Nữ Trang",
        alias: "thiet-ke-nu-trang"
    },
    {
        value: 0,
        label: "Thiết Kế Online",
        alias: "thiet-ke-online"
    },
    {
        value: 0,
        label: "Thiết Kế Quà Tặng",
        alias: "thiet-ke-qua-tang"
    },
    {
        value: 0,
        label: "Thiết Kế Trang Sức 3D",
        alias: "thiet-ke-trang-suc-3d"
    },
    {
        value: 0,
        label: "Thiết Kế Vi Mạch",
        alias: "thiet-ke-vi-mach"
    },
    {
        value: 0,
        label: "graphic designer part time",
        alias: "graphic-designer-part-time"
    },
    {
        value: 0,
        label: "Trưởng Phòng Thiết Kế Đồ Họa",
        alias: "truong-phong-thiet-ke-do-hoa"
    },
    {
        value: 0,
        label: "họa viên Autocad",
        alias: "hoa-vien-autocad"
    },
    {
        value: 0,
        label: "Nhân Viên Thiết Kế Khuôn Mẫu",
        alias: "nhan-vien-thiet-ke-khuon-mau"
    },
    {
        value: 0,
        label: "thiết kế nội thất",
        alias: "thiet-ke-noi-that"
    },
    {
        value: 0,
        label: "kiến trúc sư",
        alias: "kien-truc-su"
    },
    {
        value: 0,
        label: "trang trí nội thất",
        alias: "trang-tri-noi-that"
    },
    {
        value: 0,
        label: "giám sát nội thất",
        alias: "giam-sat-noi-that"
    },
    {
        value: 0,
        label: "kiến trúc sư cảnh quan",
        alias: "kien-truc-su-canh-quan"
    },
    {
        value: 0,
        label: "kiến trúc sư chủ trì",
        alias: "kien-truc-su-chu-tri"
    },
    {
        value: 0,
        label: "kiến trúc sư công trình",
        alias: "kien-truc-su-cong-trinh"
    },
    {
        value: 0,
        label: "kiến trúc sư quy hoạch",
        alias: "kien-truc-su-quy-hoach"
    },
    {
        value: 0,
        label: "kiến trúc sư thiết kế nội thất",
        alias: "kien-truc-su-thiet-ke-noi-that"
    },
    {
        value: 0,
        label: "giám sát thi công nội thất",
        alias: "giam-sat-thi-cong-noi-that"
    },
    {
        value: 0,
        label: "họa viên 3d nội thất",
        alias: "hoa-vien-3d-noi-that"
    },
    {
        value: 0,
        label: "chuyên viên thiết kế nội thất",
        alias: "chuyen-vien-thiet-ke-noi-that"
    },
    {
        value: 0,
        label: "dự toán nội thất",
        alias: "du-toan-noi-that"
    },
    {
        value: 0,
        label: "giám sát công trình nội thất",
        alias: "giam-sat-cong-trinh-noi-that"
    },
    {
        value: 0,
        label: "kiến trúc sư quản lý dự án",
        alias: "kien-truc-su-quan-ly-du-an"
    },
    {
        value: 0,
        label: "revit",
        alias: "revit"
    },
    {
        value: 0,
        label: "nhân viên tư vấn bán hàng",
        alias: "nhan-vien-tu-van-ban-hang"
    },
    {
        value: 0,
        label: "nhân viên tư vấn dinh dưỡng",
        alias: "nhan-vien-tu-van-dinh-duong"
    },
    {
        value: 0,
        label: "nhân viên tư vấn giáo dục",
        alias: "nhan-vien-tu-van-giao-duc"
    },
    {
        value: 0,
        label: "nhân viên tư vấn khóa học",
        alias: "nhan-vien-tu-van-khoa-hoc"
    },
    {
        value: 0,
        label: "nhân viên tư vấn online",
        alias: "nhan-vien-tu-van-online"
    },
    {
        value: 0,
        label: "nhân viên tư vấn qua điện thoại",
        alias: "nhan-vien-tu-van-qua-dien-thoai"
    },
    {
        value: 0,
        label: "nhân viên tư vấn spa",
        alias: "nhan-vien-tu-van-spa"
    },
    {
        value: 0,
        label: "nhân viên tư vấn thẩm mỹ",
        alias: "nhan-vien-tu-van-tham-my"
    },
    {
        value: 0,
        label: "nhân viên tư vấn tín dụng",
        alias: "nhan-vien-tu-van-tin-dung"
    },
    {
        value: 0,
        label: "nhân viên tư vấn trả góp",
        alias: "nhan-vien-tu-van-tra-gop"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn",
        alias: "chuyen-vien-tu-van"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn du học",
        alias: "chuyen-vien-tu-van-du-hoc"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn đầu tư",
        alias: "chuyen-vien-tu-van-dau-tu"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn khách hàng",
        alias: "chuyen-vien-tu-van-khach-hang"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn tài chính",
        alias: "chuyen-vien-tu-van-tai-chinh"
    },
    {
        value: 0,
        label: "tư vấn du lịch",
        alias: "tu-van-du-lich"
    },
    {
        value: 0,
        label: "tư vấn giáo dục",
        alias: "tu-van-giao-duc"
    },
    {
        value: 0,
        label: "tư vấn tài chính",
        alias: "tu-van-tai-chinh"
    },
    {
        value: 0,
        label: "tư vấn tâm lý",
        alias: "tu-van-tam-ly"
    },
    {
        value: 0,
        label: "kỹ sư tư vấn giám sát",
        alias: "ky-su-tu-van-giam-sat"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn thẩm mỹ",
        alias: "chuyen-vien-tu-van-tham-my"
    },
    {
        value: 0,
        label: "nhân viên tư vấn khách hàng",
        alias: "nhan-vien-tu-van-khach-hang"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn tuyển sinh",
        alias: "chuyen-vien-tu-van-tuyen-sinh"
    },
    {
        value: 0,
        label: "tư vấn tuyển sinh",
        alias: "tu-van-tuyen-sinh"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn ngân hàng",
        alias: "chuyen-vien-tu-van-ngan-hang"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn tâm lý",
        alias: "chuyen-vien-tu-van-tam-ly"
    },
    {
        value: 0,
        label: "nhân viên tư vấn thẻ tín dụng",
        alias: "nhan-vien-tu-van-the-tin-dung"
    },
    {
        value: 0,
        label: "tư vấn du học",
        alias: "tu-van-du-hoc"
    },
    {
        value: 0,
        label: "tư vấn online",
        alias: "tu-van-online"
    },
    {
        value: 0,
        label: "tư vấn viên trung tâm tiếng anh",
        alias: "tu-van-vien-trung-tam-tieng-anh"
    },
    {
        value: 0,
        label: "nhân viên tư vấn luật",
        alias: "nhan-vien-tu-van-luat"
    },
    {
        value: 0,
        label: "nhân viên tư vấn sức khỏe",
        alias: "nhan-vien-tu-van-suc-khoe"
    },
    {
        value: 0,
        label: "nhân viên tư vấn thuế",
        alias: "nhan-vien-tu-van-thue"
    },
    {
        value: 0,
        label: "nhân viên tư vấn trung tâm anh ngữ",
        alias: "nhan-vien-tu-van-trung-tam-anh-ngu"
    },
    {
        value: 0,
        label: "nhân viên tư vấn visa",
        alias: "nhan-vien-tu-van-visa"
    },
    {
        value: 0,
        label: "bảo vệ chung cư",
        alias: "bao-ve-chung-cu"
    },
    {
        value: 0,
        label: "bảo vệ khách sạn",
        alias: "bao-ve-khach-san"
    },
    {
        value: 0,
        label: "bảo vệ ngân hàng",
        alias: "bao-ve-ngan-hang"
    },
    {
        value: 0,
        label: "bảo vệ nhà hàng",
        alias: "bao-ve-nha-hang"
    },
    {
        value: 0,
        label: "bảo vệ nội bộ",
        alias: "bao-ve-noi-bo"
    },
    {
        value: 0,
        label: "vệ sĩ",
        alias: "ve-si"
    },
    {
        value: 0,
        label: "vệ sĩ nữ",
        alias: "ve-si-nu"
    },
    {
        value: 0,
        label: "nhân viên giữ xe",
        alias: "nhan-vien-giu-xe"
    },
    {
        value: 0,
        label: "giám sát",
        alias: "giam-sat"
    },
    {
        value: 0,
        label: "giám sát an ninh",
        alias: "giam-sat-an-ninh"
    },
    {
        value: 0,
        label: "giám sát an toàn",
        alias: "giam-sat-an-toan"
    },
    {
        value: 0,
        label: "giám sát camera",
        alias: "giam-sat-camera"
    },
    {
        value: 0,
        label: "security manager",
        alias: "security-manager"
    },
    {
        value: 0,
        label: "trưởng phòng an ninh",
        alias: "truong-phong-an-ninh"
    },
    {
        value: 0,
        label: "nhân viên an ninh nội bộ",
        alias: "nhan-vien-an-ninh-noi-bo"
    },
    {
        value: 0,
        label: "bảo vệ bao ăn ở",
        alias: "bao-ve-bao-an-o"
    },
    {
        value: 0,
        label: "nhân viên an ninh",
        alias: "nhan-vien-an-ninh"
    },
    {
        value: 0,
        label: "an ninh nội bộ",
        alias: "an-ninh-noi-bo"
    },
    {
        value: 0,
        label: "Bảo Vệ Bệnh Viện",
        alias: "bao-ve-benh-vien"
    },
    {
        value: 0,
        label: "bảo vệ ca đêm",
        alias: "bao-ve-ca-dem"
    },
    {
        value: 0,
        label: "bảo vệ chuyên nghiệp",
        alias: "bao-ve-chuyen-nghiep"
    },
    {
        value: 0,
        label: "bảo vệ công trình",
        alias: "bao-ve-cong-trinh"
    },
    {
        value: 0,
        label: "bảo vệ giữ xe",
        alias: "bao-ve-giu-xe"
    },
    {
        value: 0,
        label: "bảo vệ siêu thị",
        alias: "bao-ve-sieu-thi"
    },
    {
        value: 0,
        label: "đội trưởng bảo vệ",
        alias: "doi-truong-bao-ve"
    },
    {
        value: 0,
        label: "qa",
        alias: "qa"
    },
    {
        value: 0,
        label: "qa manager",
        alias: "qa-manager"
    },
    {
        value: 0,
        label: "qc",
        alias: "qc"
    },
    {
        value: 0,
        label: "qc manager",
        alias: "qc-manager"
    },
    {
        value: 0,
        label: "qc ngành may mặc",
        alias: "qc-nganh-may-mac"
    },
    {
        value: 0,
        label: "qc thực phẩm",
        alias: "qc-thuc-pham"
    },
    {
        value: 0,
        label: "nhân viên qa",
        alias: "nhan-vien-qa"
    },
    {
        value: 0,
        label: "chuyên viên iso",
        alias: "chuyen-vien-iso"
    },
    {
        value: 0,
        label: "nhân viên qa qc",
        alias: "nhan-vien-qa-qc"
    },
    {
        value: 0,
        label: "nhân viên qc",
        alias: "nhan-vien-qc"
    },
    {
        value: 0,
        label: "nhân viên quản lý chất lượng",
        alias: "nhan-vien-quan-ly-chat-luong"
    },
    {
        value: 0,
        label: "chuyên viên thẩm định",
        alias: "chuyen-vien-tham-dinh"
    },
    {
        value: 0,
        label: "chuyên viên thẩm định giá",
        alias: "chuyen-vien-tham-dinh-gia"
    },
    {
        value: 0,
        label: "chuyên viên thẩm định tín dụng",
        alias: "chuyen-vien-tham-dinh-tin-dung"
    },
    {
        value: 0,
        label: "nhân viên thẩm định",
        alias: "nhan-vien-tham-dinh"
    },
    {
        value: 0,
        label: "nhân viên thẩm định qua điện thoại",
        alias: "nhan-vien-tham-dinh-qua-dien-thoai"
    },
    {
        value: 0,
        label: "nhân viên thẩm định tín dụng",
        alias: "nhan-vien-tham-dinh-tin-dung"
    },
    {
        value: 0,
        label: "thẩm định giá",
        alias: "tham-dinh-gia"
    },
    {
        value: 0,
        label: "phó phòng định giá",
        alias: "pho-phong-dinh-gia"
    },
    {
        value: 0,
        label: "kỹ sư qa",
        alias: "ky-su-qa"
    },
    {
        value: 0,
        label: "kỹ sư qc",
        alias: "ky-su-qc"
    },
    {
        value: 0,
        label: "trưởng phòng quản lý chất lượng",
        alias: "truong-phong-quan-ly-chat-luong"
    },
    {
        value: 0,
        label: "trưởng phòng qa",
        alias: "truong-phong-qa"
    },
    {
        value: 0,
        label: "trưởng phòng qc",
        alias: "truong-phong-qc"
    },
    {
        value: 0,
        label: "phó phòng chất lượng",
        alias: "pho-phong-chat-luong"
    },
    {
        value: 0,
        label: "QA QC Manager",
        alias: "qa-qc-manager"
    },
    {
        value: 0,
        label: "qa software",
        alias: "qa-software"
    },
    {
        value: 0,
        label: "qc dược phẩm",
        alias: "qc-duoc-pham"
    },
    {
        value: 0,
        label: "qa ngành may",
        alias: "qa-nganh-may"
    },
    {
        value: 0,
        label: "qa qc ngành may",
        alias: "qa-qc-nganh-may"
    },
    {
        value: 0,
        label: "qa thực phẩm",
        alias: "qa-thuc-pham"
    },
    {
        value: 0,
        label: "nhân viên chất lượng",
        alias: "nhan-vien-chat-luong"
    },
    {
        value: 0,
        label: "nhân viên iso",
        alias: "nhan-vien-iso"
    },
    {
        value: 0,
        label: "nhân viên kcs",
        alias: "nhan-vien-kcs"
    },
    {
        value: 0,
        label: "nhân viên kiểm soát chất lượng",
        alias: "nhan-vien-kiem-soat-chat-luong"
    },
    {
        value: 0,
        label: "nhân viên kiểm tra chất lượng",
        alias: "nhan-vien-kiem-tra-chat-luong"
    },
    {
        value: 0,
        label: "nhân viên thẩm định giá",
        alias: "nhan-vien-tham-dinh-gia"
    },
    {
        value: 0,
        label: "nhân viên thẩm định hồ sơ",
        alias: "nhan-vien-tham-dinh-ho-so"
    },
    {
        value: 0,
        label: "nhân viên thẩm định thực địa",
        alias: "nhan-vien-tham-dinh-thuc-dia"
    },
    {
        value: 0,
        label: "quản lý chất lượng thực phẩm",
        alias: "quan-ly-chat-luong-thuc-pham"
    },
    {
        value: 0,
        label: "tái thẩm định",
        alias: "tai-tham-dinh"
    },
    {
        value: 0,
        label: "nhân viên thẩm định tại nhà",
        alias: "nhan-vien-tham-dinh-tai-nha"
    },
    {
        value: 0,
        label: "giám định viên bảo hiểm",
        alias: "giam-dinh-vien-bao-hiem"
    },
    {
        value: 0,
        label: "giám định viên xe cơ giới",
        alias: "giam-dinh-vien-xe-co-gioi"
    },
    {
        value: 0,
        label: "QA QC thực phẩm",
        alias: "qa-qc-thuc-pham"
    },
    {
        value: 0,
        label: "nhân viên qc cơ khí",
        alias: "nhan-vien-qc-co-khi"
    },
    {
        value: 0,
        label: "bưu điện",
        alias: "buu-dien"
    },
    {
        value: 0,
        label: "nhân viên bưu cục",
        alias: "nhan-vien-buu-cuc"
    },
    {
        value: 0,
        label: "trưởng bưu cục",
        alias: "truong-buu-cuc"
    },
    {
        value: 0,
        label: "nhân viên bưu điện",
        alias: "nhan-vien-buu-dien"
    },
    {
        value: 0,
        label: "khai thác mỏ",
        alias: "khai-thac-mo"
    },
    {
        value: 0,
        label: "địa chất",
        alias: "dia-chat"
    },
    {
        value: 0,
        label: "kỹ sư địa chất",
        alias: "ky-su-dia-chat"
    },
    {
        value: 0,
        label: "Giám Đốc Điều Hành Mỏ",
        alias: "giam-doc-dieu-hanh-mo"
    },
    {
        value: 0,
        label: "kỹ sư khai thác mỏ",
        alias: "ky-su-khai-thac-mo"
    },
    {
        value: 0,
        label: "kỹ sư giao thông",
        alias: "ky-su-giao-thong"
    },
    {
        value: 0,
        label: "kỹ sư cảnh quan",
        alias: "ky-su-canh-quan"
    },
    {
        value: 0,
        label: "kỹ sư cấp thoát nước",
        alias: "ky-su-cap-thoat-nuoc"
    },
    {
        value: 0,
        label: "kỹ sư cầu đường",
        alias: "ky-su-cau-duong"
    },
    {
        value: 0,
        label: "kỹ sư cầu nối",
        alias: "ky-su-cau-noi"
    },
    {
        value: 0,
        label: "kỹ sư thủy điện",
        alias: "ky-su-thuy-dien"
    },
    {
        value: 0,
        label: "kỹ sư thủy lợi",
        alias: "ky-su-thuy-loi"
    },
    {
        value: 0,
        label: "giám sát cấp thoát nước",
        alias: "giam-sat-cap-thoat-nuoc"
    },
    {
        value: 0,
        label: "kỹ sư thiết kế cấp thoát nước",
        alias: "ky-su-thiet-ke-cap-thoat-nuoc"
    },
    {
        value: 0,
        label: "kỹ sư thiết kế cầu đường",
        alias: "ky-su-thiet-ke-cau-duong"
    },
    {
        value: 0,
        label: "kỹ sư thiết kế giao thông",
        alias: "ky-su-thiet-ke-giao-thong"
    },
    {
        value: 0,
        label: "nhân viên vận hành hệ thống xử lý nước thải",
        alias: "nhan-vien-van-hanh-he-thong-xu-ly-nuoc-thai"
    },
    {
        value: 0,
        label: "kỹ sư công trình thủy",
        alias: "ky-su-cong-trinh-thuy"
    },
    {
        value: 0,
        label: "Nhân Viên Cấp Thoát Nước",
        alias: "nhan-vien-cap-thoat-nuoc"
    },
    {
        value: 0,
        label: "công nhân khu công nghiệp",
        alias: "cong-nhan-khu-cong-nghiep"
    },
    {
        value: 0,
        label: "kỹ sư công nghiệp",
        alias: "ky-su-cong-nghiep"
    },
    {
        value: 0,
        label: "spa",
        alias: "spa"
    },
    {
        value: 0,
        label: "spa manager",
        alias: "spa-manager"
    },
    {
        value: 0,
        label: "massage",
        alias: "massage"
    },
    {
        value: 0,
        label: "chuyên viên thẩm mỹ",
        alias: "chuyen-vien-tham-my"
    },
    {
        value: 0,
        label: "chuyên viên spa",
        alias: "chuyen-vien-spa"
    },
    {
        value: 0,
        label: "nhân viên spa",
        alias: "nhan-vien-spa"
    },
    {
        value: 0,
        label: "trang điểm",
        alias: "trang-diem"
    },
    {
        value: 0,
        label: "thợ nối mi",
        alias: "tho-noi-mi"
    },
    {
        value: 0,
        label: "thợ phụ",
        alias: "tho-phu"
    },
    {
        value: 0,
        label: "quản lý spa",
        alias: "quan-ly-spa"
    },
    {
        value: 0,
        label: "quản lý thẩm mỹ viện",
        alias: "quan-ly-tham-my-vien"
    },
    {
        value: 0,
        label: "kỹ thuật viên spa",
        alias: "ky-thuat-vien-spa"
    },
    {
        value: 0,
        label: "thợ tóc",
        alias: "tho-toc"
    },
    {
        value: 0,
        label: "kỹ thuật viên chăm sóc da",
        alias: "ky-thuat-vien-cham-soc-da"
    },
    {
        value: 0,
        label: "nhân viên chăm sóc da",
        alias: "nhan-vien-cham-soc-da"
    },
    {
        value: 0,
        label: "nhân viên phòng gym",
        alias: "nhan-vien-phong-gym"
    },
    {
        value: 0,
        label: "thẩm mỹ viện",
        alias: "tham-my-vien"
    },
    {
        value: 0,
        label: "kỹ thuật viên massage",
        alias: "ky-thuat-vien-massage"
    },
    {
        value: 0,
        label: "nhân viên massage",
        alias: "nhan-vien-massage"
    },
    {
        value: 0,
        label: "luật sư",
        alias: "luat-su"
    },
    {
        value: 0,
        label: "chuyên viên pháp chế",
        alias: "chuyen-vien-phap-che"
    },
    {
        value: 0,
        label: "chuyên viên pháp lý",
        alias: "chuyen-vien-phap-ly"
    },
    {
        value: 0,
        label: "điều tra viên",
        alias: "dieu-tra-vien"
    },
    {
        value: 0,
        label: "phó phòng pháp chế",
        alias: "pho-phong-phap-che"
    },
    {
        value: 0,
        label: "trưởng phòng pháp chế",
        alias: "truong-phong-phap-che"
    },
    {
        value: 0,
        label: "kiểm soát viên",
        alias: "kiem-soat-vien"
    },
    {
        value: 0,
        label: "công chứng viên",
        alias: "cong-chung-vien"
    },
    {
        value: 0,
        label: "trưởng phòng pháp lý",
        alias: "truong-phong-phap-ly"
    },
    {
        value: 0,
        label: "thám tử",
        alias: "tham-tu"
    },
    {
        value: 0,
        label: "chuyên viên pháp lý dự án",
        alias: "chuyen-vien-phap-ly-du-an"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn luật",
        alias: "chuyen-vien-tu-van-luat"
    },
    {
        value: 0,
        label: "nhân viên luật",
        alias: "nhan-vien-luat"
    },
    {
        value: 0,
        label: "nhân viên pháp lý",
        alias: "nhan-vien-phap-ly"
    },
    {
        value: 0,
        label: "pháp chế",
        alias: "phap-che"
    },
    {
        value: 0,
        label: "pháp chế doanh nghiệp",
        alias: "phap-che-doanh-nghiep"
    },
    {
        value: 0,
        label: "luật sư tập sự",
        alias: "luat-su-tap-su"
    },
    {
        value: 0,
        label: "quản lý môi trường",
        alias: "quan-ly-moi-truong"
    },
    {
        value: 0,
        label: "nhân viên an toàn môi trường",
        alias: "nhan-vien-an-toan-moi-truong"
    },
    {
        value: 0,
        label: "nhân viên tư vấn môi trường",
        alias: "nhan-vien-tu-van-moi-truong"
    },
    {
        value: 0,
        label: "nhân viên kỹ thuật môi trường",
        alias: "nhan-vien-ky-thuat-moi-truong"
    },
    {
        value: 0,
        label: "giám sát môi trường",
        alias: "giam-sat-moi-truong"
    },
    {
        value: 0,
        label: "kinh doanh mỹ phẩm",
        alias: "kinh-doanh-my-pham"
    },
    {
        value: 0,
        label: "bán mỹ phẩm",
        alias: "ban-my-pham"
    },
    {
        value: 0,
        label: "nhân viên bán hàng mỹ phẩm",
        alias: "nhan-vien-ban-hang-my-pham"
    },
    {
        value: 0,
        label: "nhân viên tư vấn mỹ phẩm",
        alias: "nhan-vien-tu-van-my-pham"
    },
    {
        value: 0,
        label: "stylist",
        alias: "stylist"
    },
    {
        value: 0,
        label: "quản lý thời trang",
        alias: "quan-ly-thoi-trang"
    },
    {
        value: 0,
        label: "cửa hàng trưởng thời trang",
        alias: "cua-hang-truong-thoi-trang"
    },
    {
        value: 0,
        label: "nhân viên bán mỹ phẩm",
        alias: "nhan-vien-ban-my-pham"
    },
    {
        value: 0,
        label: "nhân viên bán shop thời trang",
        alias: "nhan-vien-ban-shop-thoi-trang"
    },
    {
        value: 0,
        label: "nhân viên mỹ phẩm",
        alias: "nhan-vien-my-pham"
    },
    {
        value: 0,
        label: "Trưởng Phòng Thiết Kế Thời Trang",
        alias: "truong-phong-thiet-ke-thoi-trang"
    },
    {
        value: 0,
        label: "chuyên viên ngân hàng",
        alias: "chuyen-vien-ngan-hang"
    },
    {
        value: 0,
        label: "nhân viên ngân hàng",
        alias: "nhan-vien-ngan-hang"
    },
    {
        value: 0,
        label: "nhân viên tín dụng ngân hàng",
        alias: "nhan-vien-tin-dung-ngan-hang"
    },
    {
        value: 0,
        label: "giám sát tín dụng",
        alias: "giam-sat-tin-dung"
    },
    {
        value: 0,
        label: "giao dịch viên",
        alias: "giao-dich-vien"
    },
    {
        value: 0,
        label: "nhân viên môi giới chứng khoán",
        alias: "nhan-vien-moi-gioi-chung-khoan"
    },
    {
        value: 0,
        label: "phân tích đầu tư",
        alias: "phan-tich-dau-tu"
    },
    {
        value: 0,
        label: "nhân viên hỗ trợ tín dụng",
        alias: "nhan-vien-ho-tro-tin-dung"
    },
    {
        value: 0,
        label: "phó phòng đầu tư",
        alias: "pho-phong-dau-tu"
    },
    {
        value: 0,
        label: "chuyên viên tín dụng",
        alias: "chuyen-vien-tin-dung"
    },
    {
        value: 0,
        label: "trưởng phòng tín dụng",
        alias: "truong-phong-tin-dung"
    },
    {
        value: 0,
        label: "trưởng phòng giao dịch",
        alias: "truong-phong-giao-dich"
    },
    {
        value: 0,
        label: "trưởng phòng ngân hàng",
        alias: "truong-phong-ngan-hang"
    },
    {
        value: 0,
        label: "chuyên viên khách hàng",
        alias: "chuyen-vien-khach-hang"
    },
    {
        value: 0,
        label: "chuyên viên quan hệ khách hàng cá nhân",
        alias: "chuyen-vien-quan-he-khach-hang-ca-nhan"
    },
    {
        value: 0,
        label: "quan hệ khách hàng",
        alias: "quan-he-khach-hang"
    },
    {
        value: 0,
        label: "chuyên viên khách hàng cá nhân",
        alias: "chuyen-vien-khach-hang-ca-nhan"
    },
    {
        value: 0,
        label: "chuyên viên khách hàng doanh nghiệp",
        alias: "chuyen-vien-khach-hang-doanh-nghiep"
    },
    {
        value: 0,
        label: "chuyên viên đầu tư",
        alias: "chuyen-vien-dau-tu"
    },
    {
        value: 0,
        label: "chuyên viên hỗ trợ tín dụng",
        alias: "chuyen-vien-ho-tro-tin-dung"
    },
    {
        value: 0,
        label: "chuyên viên phân tích đầu tư",
        alias: "chuyen-vien-phan-tich-dau-tu"
    },
    {
        value: 0,
        label: "hỗ trợ tín dụng",
        alias: "ho-tro-tin-dung"
    },
    {
        value: 0,
        label: "môi giới chứng khoán",
        alias: "moi-gioi-chung-khoan"
    },
    {
        value: 0,
        label: "nhân viên chứng khoán",
        alias: "nhan-vien-chung-khoan"
    },
    {
        value: 0,
        label: "nhân viên thu hồi nợ tại nhà",
        alias: "nhan-vien-thu-hoi-no-tai-nha"
    },
    {
        value: 0,
        label: "nhân viên tín dụng",
        alias: "nhan-vien-tin-dung"
    },
    {
        value: 0,
        label: "nhân viên xử lý nợ",
        alias: "nhan-vien-xu-ly-no"
    },
    {
        value: 0,
        label: "quản lý ngân hàng",
        alias: "quan-ly-ngan-hang"
    },
    {
        value: 0,
        label: "quỹ đầu tư",
        alias: "quy-dau-tu"
    },
    {
        value: 0,
        label: "trưởng nhóm tín dụng",
        alias: "truong-nhom-tin-dung"
    },
    {
        value: 0,
        label: "cộng tác viên ngân hàng",
        alias: "cong-tac-vien-ngan-hang"
    },
    {
        value: 0,
        label: "giao dịch viên ngân hàng",
        alias: "giao-dich-vien-ngan-hang"
    },
    {
        value: 0,
        label: "xử lý nợ ngân hàng",
        alias: "xu-ly-no-ngan-hang"
    },
    {
        value: 0,
        label: "sale admin ngân hàng",
        alias: "sale-admin-ngan-hang"
    },
    {
        value: 0,
        label: "nhân viên phát triển mặt bằng",
        alias: "nhan-vien-phat-trien-mat-bang"
    },
    {
        value: 0,
        label: "sale thị trường",
        alias: "sale-thi-truong"
    },
    {
        value: 0,
        label: "nhân viên r&d",
        alias: "nhan-vien-rd"
    },
    {
        value: 0,
        label: "quản lý thị trường",
        alias: "quan-ly-thi-truong"
    },
    {
        value: 0,
        label: "chuyên viên nghiên cứu thị trường",
        alias: "chuyen-vien-nghien-cuu-thi-truong"
    },
    {
        value: 0,
        label: "nghiên cứu thị trường",
        alias: "nghien-cuu-thi-truong"
    },
    {
        value: 0,
        label: "nhân viên khảo sát thị trường",
        alias: "nhan-vien-khao-sat-thi-truong"
    },
    {
        value: 0,
        label: "nhân viên thị trường",
        alias: "nhan-vien-thi-truong"
    },
    {
        value: 0,
        label: "nhân viên thị trường thức ăn chăn nuôi",
        alias: "nhan-vien-thi-truong-thuc-an-chan-nuoi"
    },
    {
        value: 0,
        label: "relationship manager",
        alias: "relationship-manager"
    },
    {
        value: 0,
        label: "giám đốc đối ngoại",
        alias: "giam-doc-doi-ngoai"
    },
    {
        value: 0,
        label: "trưởng phòng đối ngoại",
        alias: "truong-phong-doi-ngoai"
    },
    {
        value: 0,
        label: "chuyên viên đối ngoại",
        alias: "chuyen-vien-doi-ngoai"
    },
    {
        value: 0,
        label: "nhân viên đối ngoại",
        alias: "nhan-vien-doi-ngoai"
    },
    {
        value: 0,
        label: "công nhân sản xuất",
        alias: "cong-nhan-san-xuat"
    },
    {
        value: 0,
        label: "quản đốc",
        alias: "quan-doc"
    },
    {
        value: 0,
        label: "quản đốc xưởng",
        alias: "quan-doc-xuong"
    },
    {
        value: 0,
        label: "kỹ sư sản xuất",
        alias: "ky-su-san-xuat"
    },
    {
        value: 0,
        label: "nhân viên quản lý sản xuất",
        alias: "nhan-vien-quan-ly-san-xuat"
    },
    {
        value: 0,
        label: "tổ trưởng sản xuất",
        alias: "to-truong-san-xuat"
    },
    {
        value: 0,
        label: "giám sát sản xuất",
        alias: "giam-sat-san-xuat"
    },
    {
        value: 0,
        label: "thợ thủ công",
        alias: "tho-thu-cong"
    },
    {
        value: 0,
        label: "nhân viên phát triển sản phẩm",
        alias: "nhan-vien-phat-trien-san-pham"
    },
    {
        value: 0,
        label: "nhân viên sản xuất",
        alias: "nhan-vien-san-xuat"
    },
    {
        value: 0,
        label: "gia công",
        alias: "gia-cong"
    },
    {
        value: 0,
        label: "gia công tại nhà",
        alias: "gia-cong-tai-nha"
    },
    {
        value: 0,
        label: "product specialist",
        alias: "product-specialist"
    },
    {
        value: 0,
        label: "production manager",
        alias: "production-manager"
    },
    {
        value: 0,
        label: "quản lý sản phẩm",
        alias: "quan-ly-san-pham"
    },
    {
        value: 0,
        label: "quản lý sản xuất",
        alias: "quan-ly-san-xuat"
    },
    {
        value: 0,
        label: "quản lý xưởng sản xuất",
        alias: "quan-ly-xuong-san-xuat"
    },
    {
        value: 0,
        label: "trưởng ca sản xuất",
        alias: "truong-ca-san-xuat"
    },
    {
        value: 0,
        label: "kỹ thuật viên sản xuất",
        alias: "ky-thuat-vien-san-xuat"
    },
    {
        value: 0,
        label: "trưởng phòng sản xuất",
        alias: "truong-phong-san-xuat"
    },
    {
        value: 0,
        label: "nhân viên sản xuất dược phẩm",
        alias: "nhan-vien-san-xuat-duoc-pham"
    },
    {
        value: 0,
        label: "công nhân sản xuất thuốc",
        alias: "cong-nhan-san-xuat-thuoc"
    },
    {
        value: 0,
        label: "nhân viên kỹ thuật sản xuất",
        alias: "nhan-vien-ky-thuat-san-xuat"
    },
    {
        value: 0,
        label: "chuyên viên phát triển sản phẩm",
        alias: "chuyen-vien-phat-trien-san-pham"
    },
    {
        value: 0,
        label: "nhân viên phòng kế hoạch sản xuất",
        alias: "nhan-vien-phong-ke-hoach-san-xuat"
    },
    {
        value: 0,
        label: "nhân viên phòng sản xuất",
        alias: "nhan-vien-phong-san-xuat"
    },
    {
        value: 0,
        label: "nhân viên sản xuất thuốc",
        alias: "nhan-vien-san-xuat-thuoc"
    },
    {
        value: 0,
        label: "nhân viên vận hành sản xuất",
        alias: "nhan-vien-van-hanh-san-xuat"
    },
    {
        value: 0,
        label: "quản đốc nhà máy",
        alias: "quan-doc-nha-may"
    },
    {
        value: 0,
        label: "quản đốc sản xuất",
        alias: "quan-doc-san-xuat"
    },
    {
        value: 0,
        label: "quản lý sản xuất biết tiếng hàn",
        alias: "quan-ly-san-xuat-biet-tieng-han"
    },
    {
        value: 0,
        label: "trưởng phòng kế hoạch sản xuất",
        alias: "truong-phong-ke-hoach-san-xuat"
    },
    {
        value: 0,
        label: "thủ công tại nhà",
        alias: "thu-cong-tai-nha"
    },
    {
        value: 0,
        label: "quản đốc xưởng gỗ",
        alias: "quan-doc-xuong-go"
    },
    {
        value: 0,
        label: "Quản Lý Xưởng Gỗ",
        alias: "quan-ly-xuong-go"
    },
    {
        value: 0,
        label: "nhân viên hồ bơi",
        alias: "nhan-vien-ho-boi"
    },
    {
        value: 0,
        label: "công nghệ hóa học",
        alias: "cong-nghe-hoa-hoc"
    },
    {
        value: 0,
        label: "kỹ sư hóa học",
        alias: "ky-su-hoa-hoc"
    },
    {
        value: 0,
        label: "công nghệ sinh học",
        alias: "cong-nghe-sinh-hoc"
    },
    {
        value: 0,
        label: "nhân viên hóa nghiệm",
        alias: "nhan-vien-hoa-nghiem"
    },
    {
        value: 0,
        label: "nhân viên phòng thí nghiệm",
        alias: "nhan-vien-phong-thi-nghiem"
    },
    {
        value: 0,
        label: "kỹ thuật viên xét nghiệm",
        alias: "ky-thuat-vien-xet-nghiem"
    },
    {
        value: 0,
        label: "trưởng phòng thí nghiệm",
        alias: "truong-phong-thi-nghiem"
    },
    {
        value: 0,
        label: "chuyên viên công nghệ sinh học",
        alias: "chuyen-vien-cong-nghe-sinh-hoc"
    },
    {
        value: 0,
        label: "kỹ sư công nghệ sinh học",
        alias: "ky-su-cong-nghe-sinh-hoc"
    },
    {
        value: 0,
        label: "cử nhân hóa học",
        alias: "cu-nhan-hoa-hoc"
    },
    {
        value: 0,
        label: "kỹ sư hóa silicat",
        alias: "ky-su-hoa-silicat"
    },
    {
        value: 0,
        label: "Quản Lý Phòng Thí Nghiệm",
        alias: "quan-ly-phong-thi-nghiem"
    },
    {
        value: 0,
        label: "nhân viên tư vấn bảo hiểm",
        alias: "nhan-vien-tu-van-bao-hiem"
    },
    {
        value: 0,
        label: "nhân viên bán bảo hiểm",
        alias: "nhan-vien-ban-bao-hiem"
    },
    {
        value: 0,
        label: "nhân viên bảo hiểm nhân thọ",
        alias: "nhan-vien-bao-hiem-nhan-tho"
    },
    {
        value: 0,
        label: "nhân viên bảo hiểm xã hội",
        alias: "nhan-vien-bao-hiem-xa-hoi"
    },
    {
        value: 0,
        label: "compliance officer",
        alias: "compliance-officer"
    },
    {
        value: 0,
        label: "cán bộ kỹ thuật",
        alias: "can-bo-ky-thuat"
    },
    {
        value: 0,
        label: "cán bộ kỹ thuật hiện trường",
        alias: "can-bo-ky-thuat-hien-truong"
    },
    {
        value: 0,
        label: "cán bộ dự án",
        alias: "can-bo-du-an"
    },
    {
        value: 0,
        label: "cán bộ quản lý dự án",
        alias: "can-bo-quan-ly-du-an"
    },
    {
        value: 0,
        label: "cơ quan nhà nước",
        alias: "co-quan-nha-nuoc"
    },
    {
        value: 0,
        label: "truyền thông nội bộ",
        alias: "truyen-thong-noi-bo"
    },
    {
        value: 0,
        label: "phiên dịch dự án",
        alias: "phien-dich-du-an"
    },
    {
        value: 0,
        label: "phiên dịch tiếng anh",
        alias: "phien-dich-tieng-anh"
    },
    {
        value: 0,
        label: "phiên dịch tiếng hàn",
        alias: "phien-dich-tieng-han"
    },
    {
        value: 0,
        label: "phiên dịch tiếng nga",
        alias: "phien-dich-tieng-nga"
    },
    {
        value: 0,
        label: "phiên dịch tiếng nhật",
        alias: "phien-dich-tieng-nhat"
    },
    {
        value: 0,
        label: "phiên dịch tiếng nhật tại nhà",
        alias: "phien-dich-tieng-nhat-tai-nha"
    },
    {
        value: 0,
        label: "phiên dịch tiếng trung",
        alias: "phien-dich-tieng-trung"
    },
    {
        value: 0,
        label: "biên dịch",
        alias: "bien-dich"
    },
    {
        value: 0,
        label: "biên dịch tiếng anh",
        alias: "bien-dich-tieng-anh"
    },
    {
        value: 0,
        label: "biên dịch tiếng hàn",
        alias: "bien-dich-tieng-han"
    },
    {
        value: 0,
        label: "biên dịch tiếng nhật",
        alias: "bien-dich-tieng-nhat"
    },
    {
        value: 0,
        label: "biên dịch tiếng trung",
        alias: "bien-dich-tieng-trung"
    },
    {
        value: 0,
        label: "tiếng hàn",
        alias: "tieng-han"
    },
    {
        value: 0,
        label: "tiếng nhật",
        alias: "tieng-nhat"
    },
    {
        value: 0,
        label: "tiếng nhật n1",
        alias: "tieng-nhat-n1"
    },
    {
        value: 0,
        label: "tiếng nhật n2",
        alias: "tieng-nhat-n2"
    },
    {
        value: 0,
        label: "tiếng nhật n3",
        alias: "tieng-nhat-n3"
    },
    {
        value: 0,
        label: "tiếng nhật n4",
        alias: "tieng-nhat-n4"
    },
    {
        value: 0,
        label: "tiếng pháp",
        alias: "tieng-phap"
    },
    {
        value: 0,
        label: "tiếng thái",
        alias: "tieng-thai"
    },
    {
        value: 0,
        label: "tiếng trung",
        alias: "tieng-trung"
    },
    {
        value: 0,
        label: "chuyên viên tiếng anh",
        alias: "chuyen-vien-tieng-anh"
    },
    {
        value: 0,
        label: "thông dịch viên",
        alias: "thong-dich-vien"
    },
    {
        value: 0,
        label: "nhân viên biết tiếng trung",
        alias: "nhan-vien-biet-tieng-trung"
    },
    {
        value: 0,
        label: "phiên dịch",
        alias: "phien-dich"
    },
    {
        value: 0,
        label: "nhân viên dịch thuật tiếng anh",
        alias: "nhan-vien-dich-thuat-tieng-anh"
    },
    {
        value: 0,
        label: "biên phiên dịch tiếng trung",
        alias: "bien-phien-dich-tieng-trung"
    },
    {
        value: 0,
        label: "nhân viên biên phiên dịch tiếng trung",
        alias: "nhan-vien-bien-phien-dich-tieng-trung"
    },
    {
        value: 0,
        label: "nhân viên phiên dịch tiếng trung",
        alias: "nhan-vien-phien-dich-tieng-trung"
    },
    {
        value: 0,
        label: "nhân viên tiếng trung",
        alias: "nhan-vien-tieng-trung"
    },
    {
        value: 0,
        label: "thông dịch viên tiếng trung",
        alias: "thong-dich-vien-tieng-trung"
    },
    {
        value: 0,
        label: "biên dịch tiếng nhật tại nhà",
        alias: "bien-dich-tieng-nhat-tai-nha"
    },
    {
        value: 0,
        label: "nhân viên biết tiếng nhật",
        alias: "nhan-vien-biet-tieng-nhat"
    },
    {
        value: 0,
        label: "nhân viên phiên dịch tiếng nhật",
        alias: "nhan-vien-phien-dich-tieng-nhat"
    },
    {
        value: 0,
        label: "nhân viên tiếng nhật",
        alias: "nhan-vien-tieng-nhat"
    },
    {
        value: 0,
        label: "part time tiếng nhật",
        alias: "part-time-tieng-nhat"
    },
    {
        value: 0,
        label: "nhân viên biết tiếng hàn",
        alias: "nhan-vien-biet-tieng-han"
    },
    {
        value: 0,
        label: "nhân viên tiếng hàn",
        alias: "nhan-vien-tieng-han"
    },
    {
        value: 0,
        label: "phiên dịch viên tiếng hàn",
        alias: "phien-dich-vien-tieng-han"
    },
    {
        value: 0,
        label: "thông dịch viên tiếng hàn",
        alias: "thong-dich-vien-tieng-han"
    },
    {
        value: 0,
        label: "nhân viên tiếng đức",
        alias: "nhan-vien-tieng-duc"
    },
    {
        value: 0,
        label: "nhân viên tiếng pháp",
        alias: "nhan-vien-tieng-phap"
    },
    {
        value: 0,
        label: "dịch sách",
        alias: "dich-sach"
    },
    {
        value: 0,
        label: "nhân viên tiếng tây ban nha",
        alias: "nhan-vien-tieng-tay-ban-nha"
    },
    {
        value: 0,
        label: "ngôn ngữ anh",
        alias: "ngon-ngu-anh"
    },
    {
        value: 0,
        label: "nhân viên dịch thuật",
        alias: "nhan-vien-dich-thuat"
    },
    {
        value: 0,
        label: "phiên dịch viên",
        alias: "phien-dich-vien"
    },
    {
        value: 0,
        label: "tiếng nhật tại nhà",
        alias: "tieng-nhat-tai-nha"
    },
    {
        value: 0,
        label: "biên dịch tiếng hàn tại nhà",
        alias: "bien-dich-tieng-han-tai-nha"
    },
    {
        value: 0,
        label: "Phiên Dịch Part Time",
        alias: "phien-dich-part-time"
    },
    {
        value: 0,
        label: "phiên dịch tiếng anh tại nhà",
        alias: "phien-dich-tieng-anh-tai-nha"
    },
    {
        value: 0,
        label: "Phiên Dịch Tiếng Đức",
        alias: "phien-dich-tieng-duc"
    },
    {
        value: 0,
        label: "phiên dịch tiếng trung tại nhà",
        alias: "phien-dich-tieng-trung-tai-nha"
    },
    {
        value: 0,
        label: "chứng từ xuất nhập khẩu",
        alias: "chung-tu-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "nhân viên chứng từ xuất nhập khẩu",
        alias: "nhan-vien-chung-tu-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "quản đốc xưởng may",
        alias: "quan-doc-xuong-may"
    },
    {
        value: 0,
        label: "tổ trưởng",
        alias: "to-truong"
    },
    {
        value: 0,
        label: "tổ trưởng chuyền may",
        alias: "to-truong-chuyen-may"
    },
    {
        value: 0,
        label: "tổ trưởng tổ cắt",
        alias: "to-truong-to-cat"
    },
    {
        value: 0,
        label: "may gia công",
        alias: "may-gia-cong"
    },
    {
        value: 0,
        label: "nhân viên may mặc",
        alias: "nhan-vien-may-mac"
    },
    {
        value: 0,
        label: "kỹ thuật chuyền may",
        alias: "ky-thuat-chuyen-may"
    },
    {
        value: 0,
        label: "kỹ thuật may",
        alias: "ky-thuat-may"
    },
    {
        value: 0,
        label: "nhân viên may mẫu",
        alias: "nhan-vien-may-mau"
    },
    {
        value: 0,
        label: "cắt chỉ tại nhà",
        alias: "cat-chi-tai-nha"
    },
    {
        value: 0,
        label: "nhân viên ie ngành may",
        alias: "nhan-vien-ie-nganh-may"
    },
    {
        value: 0,
        label: "thợ phụ may",
        alias: "tho-phu-may"
    },
    {
        value: 0,
        label: "thợ sửa máy may",
        alias: "tho-sua-may-may"
    },
    {
        value: 0,
        label: "thợ may mẫu",
        alias: "tho-may-mau"
    },
    {
        value: 0,
        label: "công nghệ ô tô",
        alias: "cong-nghe-o-to"
    },
    {
        value: 0,
        label: "thợ máy ô tô",
        alias: "tho-may-o-to"
    },
    {
        value: 0,
        label: "kỹ sư ô tô",
        alias: "ky-su-o-to"
    },
    {
        value: 0,
        label: "sửa chữa xe máy",
        alias: "sua-chua-xe-may"
    },
    {
        value: 0,
        label: "thợ sửa chữa ô tô",
        alias: "tho-sua-chua-o-to"
    },
    {
        value: 0,
        label: "kỹ thuật viên ô tô",
        alias: "ky-thuat-vien-o-to"
    },
    {
        value: 0,
        label: "thợ sửa xe",
        alias: "tho-sua-xe"
    },
    {
        value: 0,
        label: "Thợ Sơn Ô Tô",
        alias: "tho-son-o-to"
    },
    {
        value: 0,
        label: "thợ sửa xe máy",
        alias: "tho-sua-xe-may"
    },
    {
        value: 0,
        label: "chuyên viên phát triển mặt bằng",
        alias: "chuyen-vien-phat-trien-mat-bang"
    },
    {
        value: 0,
        label: "telesale bất động sản",
        alias: "telesale-bat-dong-san"
    },
    {
        value: 0,
        label: "quản lý nhà trọ",
        alias: "quan-ly-nha-tro"
    },
    {
        value: 0,
        label: "admin bất động sản",
        alias: "admin-bat-dong-san"
    },
    {
        value: 0,
        label: "chuyên viên kinh doanh bất động sản",
        alias: "chuyen-vien-kinh-doanh-bat-dong-san"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn bất động sản",
        alias: "chuyen-vien-tu-van-bat-dong-san"
    },
    {
        value: 0,
        label: "nhân viên bất động sản",
        alias: "nhan-vien-bat-dong-san"
    },
    {
        value: 0,
        label: "nhân viên cho thuê căn hộ",
        alias: "nhan-vien-cho-thue-can-ho"
    },
    {
        value: 0,
        label: "nhân viên tư vấn bất động sản",
        alias: "nhan-vien-tu-van-bat-dong-san"
    },
    {
        value: 0,
        label: "quản lý dự án bất động sản",
        alias: "quan-ly-du-an-bat-dong-san"
    },
    {
        value: 0,
        label: "trưởng phòng kinh doanh bất động sản",
        alias: "truong-phong-kinh-doanh-bat-dong-san"
    },
    {
        value: 0,
        label: "dựng phim",
        alias: "dung-phim"
    },
    {
        value: 0,
        label: "nhân viên dựng phim",
        alias: "nhan-vien-dung-phim"
    },
    {
        value: 0,
        label: "ca sĩ",
        alias: "ca-si"
    },
    {
        value: 0,
        label: "mc",
        alias: "mc"
    },
    {
        value: 0,
        label: "diễn viên",
        alias: "dien-vien"
    },
    {
        value: 0,
        label: "phát thanh viên",
        alias: "phat-thanh-vien"
    },
    {
        value: 0,
        label: "quản lý ca sĩ",
        alias: "quan-ly-ca-si"
    },
    {
        value: 0,
        label: "đạo diễn",
        alias: "dao-dien"
    },
    {
        value: 0,
        label: "diễn viên hài",
        alias: "dien-vien-hai"
    },
    {
        value: 0,
        label: "người mẫu",
        alias: "nguoi-mau"
    },
    {
        value: 0,
        label: "nhân viên âm thanh ánh sáng",
        alias: "nhan-vien-am-thanh-anh-sang"
    },
    {
        value: 0,
        label: "kỹ sư phần cứng",
        alias: "ky-su-phan-cung"
    },
    {
        value: 0,
        label: "nhân viên it",
        alias: "nhan-vien-it"
    },
    {
        value: 0,
        label: "kỹ thuật máy tính",
        alias: "ky-thuat-may-tinh"
    },
    {
        value: 0,
        label: "kỹ thuật viên máy tính",
        alias: "ky-thuat-vien-may-tinh"
    },
    {
        value: 0,
        label: "kỹ thuật viên it",
        alias: "ky-thuat-vien-it"
    },
    {
        value: 0,
        label: "chuyên viên quản trị mạng",
        alias: "chuyen-vien-quan-tri-mang"
    },
    {
        value: 0,
        label: "quản trị mạng",
        alias: "quan-tri-mang"
    },
    {
        value: 0,
        label: "kỹ sư thiết kế phần cứng",
        alias: "ky-su-thiet-ke-phan-cung"
    },
    {
        value: 0,
        label: "nhân viên it phần cứng",
        alias: "nhan-vien-it-phan-cung"
    },
    {
        value: 0,
        label: "sửa chữa laptop",
        alias: "sua-chua-laptop"
    },
    {
        value: 0,
        label: "kỹ sư mạng máy tính",
        alias: "ky-su-mang-may-tinh"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh thương mại điện tử",
        alias: "nhan-vien-kinh-doanh-thuong-mai-dien-tu"
    },
    {
        value: 0,
        label: "trưởng nhóm thương mại điện tử",
        alias: "truong-nhom-thuong-mai-dien-tu"
    },
    {
        value: 0,
        label: "nhân viên quản lý sàn thương mại điện tử",
        alias: "nhan-vien-quan-ly-san-thuong-mai-dien-tu"
    },
    {
        value: 0,
        label: "thực tập sinh Thương mại điện tử",
        alias: "thuc-tap-sinh-thuong-mai-dien-tu"
    },
    {
        value: 0,
        label: "trợ lý dự án thương mại điện tử",
        alias: "tro-ly-du-an-thuong-mai-dien-tu"
    },
    {
        value: 0,
        label: "quản lý bán hàng kênh thương mại điện tử",
        alias: "quan-ly-ban-hang-kenh-thuong-mai-dien-tu"
    },
    {
        value: 0,
        label: "chuyên viên thương mại điện tử",
        alias: "chuyen-vien-thuong-mai-dien-tu"
    },
    {
        value: 0,
        label: "thực tập sinh nhân sự part time",
        alias: "thuc-tap-sinh-nhan-su-part-time"
    },
    {
        value: 0,
        label: "thực tập sinh ngành ô tô",
        alias: "thuc-tap-sinh-nganh-o-to"
    },
    {
        value: 0,
        label: "thực tập sinh âm nhạc",
        alias: "thuc-tap-sinh-am-nhac"
    },
    {
        value: 0,
        label: "thực tập sinh ngành dược",
        alias: "thuc-tap-sinh-nganh-duoc"
    },
    {
        value: 0,
        label: "thực tập sinh nhà hàng khách sạn",
        alias: "thuc-tap-sinh-nha-hang-khach-san"
    },
    {
        value: 0,
        label: "thực tập sinh thanh toán quốc tế",
        alias: "thuc-tap-sinh-thanh-toan-quoc-te"
    },
    {
        value: 0,
        label: "thực tập biên phiên dịch tiếng anh",
        alias: "thuc-tap-bien-phien-dich-tieng-anh"
    },
    {
        value: 0,
        label: "thực tập business analyst",
        alias: "thuc-tap-business-analyst"
    },
    {
        value: 0,
        label: "thực tập hướng dẫn viên du lịch",
        alias: "thuc-tap-huong-dan-vien-du-lich"
    },
    {
        value: 0,
        label: "thực tập lễ tân khách sạn",
        alias: "thuc-tap-le-tan-khach-san"
    },
    {
        value: 0,
        label: "thực tập machine learning",
        alias: "thuc-tap-machine-learning"
    },
    {
        value: 0,
        label: "thực tập nodejs",
        alias: "thuc-tap-nodejs"
    },
    {
        value: 0,
        label: "thực tập reactjs",
        alias: "thuc-tap-reactjs"
    },
    {
        value: 0,
        label: "thực tập sinh báo chí",
        alias: "thuc-tap-sinh-bao-chi"
    },
    {
        value: 0,
        label: "thực tập sinh bếp bánh",
        alias: "thuc-tap-sinh-bep-banh"
    },
    {
        value: 0,
        label: "thực tập sinh cơ điện tử",
        alias: "thuc-tap-sinh-co-dien-tu"
    },
    {
        value: 0,
        label: "thực tập sinh dịch thuật",
        alias: "thuc-tap-sinh-dich-thuat"
    },
    {
        value: 0,
        label: "thực tập sinh đài truyền hình",
        alias: "thuc-tap-sinh-dai-truyen-hinh"
    },
    {
        value: 0,
        label: "thực tập sinh điện tử",
        alias: "thuc-tap-sinh-dien-tu"
    },
    {
        value: 0,
        label: "thực tập sinh ios",
        alias: "thuc-tap-sinh-ios"
    },
    {
        value: 0,
        label: "thực tập sinh kế toán part time",
        alias: "thuc-tap-sinh-ke-toan-part-time"
    },
    {
        value: 0,
        label: "thực tập sinh kinh doanh quốc tế",
        alias: "thuc-tap-sinh-kinh-doanh-quoc-te"
    },
    {
        value: 0,
        label: "thực tập sinh supply chain",
        alias: "thuc-tap-sinh-supply-chain"
    },
    {
        value: 0,
        label: "thực tập sinh thiết kế nội thất",
        alias: "thuc-tap-sinh-thiet-ke-noi-that"
    },
    {
        value: 0,
        label: "thực tập sinh tiếng anh thương mại",
        alias: "thuc-tap-sinh-tieng-anh-thuong-mai"
    },
    {
        value: 0,
        label: "thực tập sinh ui ux",
        alias: "thuc-tap-sinh-ui-ux"
    },
    {
        value: 0,
        label: "thực tập unity",
        alias: "thuc-tap-unity"
    },
    {
        value: 0,
        label: "thực tập chứng từ xuất nhập khẩu",
        alias: "thuc-tap-chung-tu-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "thực tập sinh lễ tân",
        alias: "thuc-tap-sinh-le-tan"
    },
    {
        value: 0,
        label: "thực tập sinh điện tử viễn thông",
        alias: "thuc-tap-sinh-dien-tu-vien-thong"
    },
    {
        value: 0,
        label: "cộng tác viên đọc truyện",
        alias: "cong-tac-vien-doc-truyen"
    },
    {
        value: 0,
        label: "cộng tác viên thu âm sách nói",
        alias: "cong-tac-vien-thu-am-sach-noi"
    },
    {
        value: 0,
        label: "cộng tác viên viết bài du lịch",
        alias: "cong-tac-vien-viet-bai-du-lich"
    },
    {
        value: 0,
        label: "ctv bán mỹ phẩm",
        alias: "ctv-ban-my-pham"
    },
    {
        value: 0,
        label: "cộng tác viên làm phụ đề",
        alias: "cong-tac-vien-lam-phu-de"
    },
    {
        value: 0,
        label: "dịch truyện tiếng trung",
        alias: "dich-truyen-tieng-trung"
    },
    {
        value: 0,
        label: "cộng tác viên bán mỹ phẩm hàn quốc",
        alias: "cong-tac-vien-ban-my-pham-han-quoc"
    },
    {
        value: 0,
        label: "cộng tác viên đăng bài",
        alias: "cong-tac-vien-dang-bai"
    },
    {
        value: 0,
        label: "cộng tác viên đọc audiobook",
        alias: "cong-tac-vien-doc-audiobook"
    },
    {
        value: 0,
        label: "ctv thu âm truyện",
        alias: "ctv-thu-am-truyen"
    },
    {
        value: 0,
        label: "dịch truyện tiếng nhật",
        alias: "dich-truyen-tieng-nhat"
    },
    {
        value: 0,
        label: "cộng tác viên dịch truyện tranh tiếng anh",
        alias: "cong-tac-vien-dich-truyen-tranh-tieng-anh"
    },
    {
        value: 0,
        label: "thợ chụp ảnh part time",
        alias: "tho-chup-anh-part-time"
    },
    {
        value: 0,
        label: "ctv bán quần áo online facebook",
        alias: "ctv-ban-quan-ao-online-facebook"
    },
    {
        value: 0,
        label: "ctv viết bài cho học sinh",
        alias: "ctv-viet-bai-cho-hoc-sinh"
    },
    {
        value: 0,
        label: "ví điện tử",
        alias: "vi-dien-tu"
    },
    {
        value: 0,
        label: "nhân viên vật tư xây dựng",
        alias: "nhan-vien-vat-tu-xay-dung"
    },
    {
        value: 0,
        label: "kỹ sư quản lý dự án xây dựng",
        alias: "ky-su-quan-ly-du-an-xay-dung"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh xây dựng",
        alias: "nhan-vien-kinh-doanh-xay-dung"
    },
    {
        value: 0,
        label: "trợ lý kiểm toán xây dựng cơ bản",
        alias: "tro-ly-kiem-toan-xay-dung-co-ban"
    },
    {
        value: 0,
        label: "hồ sơ thanh quyết toán",
        alias: "ho-so-thanh-quyet-toan"
    },
    {
        value: 0,
        label: "cộng tác viên thiết kế xây dựng",
        alias: "cong-tac-vien-thiet-ke-xay-dung"
    },
    {
        value: 0,
        label: "thầu phụ xây dựng",
        alias: "thau-phu-xay-dung"
    },
    {
        value: 0,
        label: "kỹ sư xây dựng nhà phố",
        alias: "ky-su-xay-dung-nha-pho"
    },
    {
        value: 0,
        label: "quản lý dự án chủ đầu tư",
        alias: "quan-ly-du-an-chu-dau-tu"
    },
    {
        value: 0,
        label: "kinh tế xây dựng",
        alias: "kinh-te-xay-dung"
    },
    {
        value: 0,
        label: "kỹ sư an toàn xây dựng",
        alias: "ky-su-an-toan-xay-dung"
    },
    {
        value: 0,
        label: "chuyên viên quản lý dự án xây dựng",
        alias: "chuyen-vien-quan-ly-du-an-xay-dung"
    },
    {
        value: 0,
        label: "kỹ sư xây dựng biết revit",
        alias: "ky-su-xay-dung-biet-revit"
    },
    {
        value: 0,
        label: "thí nghiệm vật liệu xây dựng",
        alias: "thi-nghiem-vat-lieu-xay-dung"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh máy xây dựng",
        alias: "nhan-vien-kinh-doanh-may-xay-dung"
    },
    {
        value: 0,
        label: "ban quản lý dự án xây dựng",
        alias: "ban-quan-ly-du-an-xay-dung"
    },
    {
        value: 0,
        label: "kỹ sư cầu đường biết tiếng anh",
        alias: "ky-su-cau-duong-biet-tieng-anh"
    },
    {
        value: 0,
        label: "thí nghiệm viên cầu đường",
        alias: "thi-nghiem-vien-cau-duong"
    },
    {
        value: 0,
        label: "chỉ huy trưởng cầu đường",
        alias: "chi-huy-truong-cau-duong"
    },
    {
        value: 0,
        label: "kỹ sư kinh tế xây dựng giao thông",
        alias: "ky-su-kinh-te-xay-dung-giao-thong"
    },
    {
        value: 0,
        label: "chỉ huy trưởng công trình giao thông",
        alias: "chi-huy-truong-cong-trinh-giao-thong"
    },
    {
        value: 0,
        label: "ctv bán bảo hiểm xe máy",
        alias: "ctv-ban-bao-hiem-xe-may"
    },
    {
        value: 0,
        label: "kế toán bảo hiểm y tế",
        alias: "ke-toan-bao-hiem-y-te"
    },
    {
        value: 0,
        label: "nhân viên tư vấn bảo hiểm ô tô",
        alias: "nhan-vien-tu-van-bao-hiem-o-to"
    },
    {
        value: 0,
        label: "bác sĩ thẩm định bảo hiểm",
        alias: "bac-si-tham-dinh-bao-hiem"
    },
    {
        value: 0,
        label: "nhân viên bán bảo hiểm ô tô",
        alias: "nhan-vien-ban-bao-hiem-o-to"
    },
    {
        value: 0,
        label: "bảo hiểm kênh ngân hàng",
        alias: "bao-hiem-kenh-ngan-hang"
    },
    {
        value: 0,
        label: "bảo hiểm phi nhân thọ",
        alias: "bao-hiem-phi-nhan-tho"
    },
    {
        value: 0,
        label: "cs bảo hiểm",
        alias: "cs-bao-hiem"
    },
    {
        value: 0,
        label: "định phí bảo hiểm",
        alias: "dinh-phi-bao-hiem"
    },
    {
        value: 0,
        label: "thẩm định bảo hiểm",
        alias: "tham-dinh-bao-hiem"
    },
    {
        value: 0,
        label: "tư vấn bảo hiểm tại ngân hàng",
        alias: "tu-van-bao-hiem-tai-ngan-hang"
    },
    {
        value: 0,
        label: "sinh viên dạy vẽ thiếu nhi",
        alias: "sinh-vien-day-ve-thieu-nhi"
    },
    {
        value: 0,
        label: "sinh viên làm thêm tổ chức sự kiện",
        alias: "sinh-vien-lam-them-to-chuc-su-kien"
    },
    {
        value: 0,
        label: "sinh viên làm thêm hướng dẫn viên du lịch",
        alias: "sinh-vien-lam-them-huong-dan-vien-du-lich"
    },
    {
        value: 0,
        label: "sinh viên trợ giảng tiếng anh",
        alias: "sinh-vien-tro-giang-tieng-anh"
    },
    {
        value: 0,
        label: "sinh viên bán cafe",
        alias: "sinh-vien-ban-cafe"
    },
    {
        value: 0,
        label: "sinh viên cntt làm thêm",
        alias: "sinh-vien-cntt-lam-them"
    },
    {
        value: 0,
        label: "sinh viên hát phòng trà",
        alias: "sinh-vien-hat-phong-tra"
    },
    {
        value: 0,
        label: "sinh viên luật làm thêm",
        alias: "sinh-vien-luat-lam-them"
    },
    {
        value: 0,
        label: "sinh viên phục vụ cafe",
        alias: "sinh-vien-phuc-vu-cafe"
    },
    {
        value: 0,
        label: "sinh viên phụ tour",
        alias: "sinh-vien-phu-tour"
    },
    {
        value: 0,
        label: "sinh viên xây dựng làm thêm",
        alias: "sinh-vien-xay-dung-lam-them"
    },
    {
        value: 0,
        label: "sinh viên làm thêm buổi tối",
        alias: "sinh-vien-lam-them-buoi-toi"
    },
    {
        value: 0,
        label: "sinh viên làm tết",
        alias: "sinh-vien-lam-tet"
    },
    {
        value: 0,
        label: "sinh viên dịch thuật",
        alias: "sinh-vien-dich-thuat"
    },
    {
        value: 0,
        label: "brand marketing",
        alias: "brand-marketing"
    },
    {
        value: 0,
        label: "bảo vệ ca 24h",
        alias: "bao-ve-ca-24h"
    },
    {
        value: 0,
        label: "bảo vệ có bằng b2",
        alias: "bao-ve-co-bang-b2"
    },
    {
        value: 0,
        label: "bảo vệ trên 60 tuổi",
        alias: "bao-ve-tren-60-tuoi"
    },
    {
        value: 0,
        label: "bảo vệ biết lái xe ô tô",
        alias: "bao-ve-biet-lai-xe-o-to"
    },
    {
        value: 0,
        label: "bảo vệ lớn tuổi",
        alias: "bao-ve-lon-tuoi"
    },
    {
        value: 0,
        label: "bảo vệ ngân hàng ca đêm",
        alias: "bao-ve-ngan-hang-ca-dem"
    },
    {
        value: 0,
        label: "quản lý bảo vệ",
        alias: "quan-ly-bao-ve"
    },
    {
        value: 0,
        label: "bảo vệ nữ",
        alias: "bao-ve-nu"
    },
    {
        value: 0,
        label: "trưởng bộ phận bảo vệ",
        alias: "truong-bo-phan-bao-ve"
    },
    {
        value: 0,
        label: "ca trưởng bảo vệ",
        alias: "ca-truong-bao-ve"
    },
    {
        value: 0,
        label: "bảo vệ ca 8 tiếng",
        alias: "bao-ve-ca-8-tieng"
    },
    {
        value: 0,
        label: "bảo vệ cửa hàng",
        alias: "bao-ve-cua-hang"
    },
    {
        value: 0,
        label: "bảo vệ part time",
        alias: "bao-ve-part-time"
    },
    {
        value: 0,
        label: "giám sát bảo vệ",
        alias: "giam-sat-bao-ve"
    },
    {
        value: 0,
        label: "bảo vệ ca tối",
        alias: "bao-ve-ca-toi"
    },
    {
        value: 0,
        label: "bảo vệ kho",
        alias: "bao-ve-kho"
    },
    {
        value: 0,
        label: "bảo vệ dân phố",
        alias: "bao-ve-dan-pho"
    },
    {
        value: 0,
        label: "bảo vệ quán ăn",
        alias: "bao-ve-quan-an"
    },
    {
        value: 0,
        label: "bảo vệ trên 50 tuổi",
        alias: "bao-ve-tren-50-tuoi"
    },
    {
        value: 0,
        label: "bảo vệ văn phòng",
        alias: "bao-ve-van-phong"
    },
    {
        value: 0,
        label: "bảo vệ nhà máy",
        alias: "bao-ve-nha-may"
    },
    {
        value: 0,
        label: "đội trưởng an ninh",
        alias: "doi-truong-an-ninh"
    },
    {
        value: 0,
        label: "trưởng bộ phận an ninh",
        alias: "truong-bo-phan-an-ninh"
    },
    {
        value: 0,
        label: "giám đốc an ninh",
        alias: "giam-doc-an-ninh"
    },
    {
        value: 0,
        label: "trưởng ban an ninh",
        alias: "truong-ban-an-ninh"
    },
    {
        value: 0,
        label: "biên dịch game",
        alias: "bien-dich-game"
    },
    {
        value: 0,
        label: "biên dịch tiếng nga",
        alias: "bien-dich-tieng-nga"
    },
    {
        value: 0,
        label: "biên phiên dịch tiếng hàn",
        alias: "bien-phien-dich-tieng-han"
    },
    {
        value: 0,
        label: "biên phiên dịch tiếng nga",
        alias: "bien-phien-dich-tieng-nga"
    },
    {
        value: 0,
        label: "biên phiên dịch tiếng nhật",
        alias: "bien-phien-dich-tieng-nhat"
    },
    {
        value: 0,
        label: "biên phiên dịch tiếng pháp",
        alias: "bien-phien-dich-tieng-phap"
    },
    {
        value: 0,
        label: "cộng tác viên dịch thuật tiếng anh tại nhà",
        alias: "cong-tac-vien-dich-thuat-tieng-anh-tai-nha"
    },
    {
        value: 0,
        label: "ctv dịch báo tiếng anh",
        alias: "ctv-dich-bao-tieng-anh"
    },
    {
        value: 0,
        label: "ctv dịch phim tiếng anh",
        alias: "ctv-dich-phim-tieng-anh"
    },
    {
        value: 0,
        label: "ctv dịch sách tiếng anh",
        alias: "ctv-dich-sach-tieng-anh"
    },
    {
        value: 0,
        label: "dịch phim tiếng anh",
        alias: "dich-phim-tieng-anh"
    },
    {
        value: 0,
        label: "dịch phim tiếng trung",
        alias: "dich-phim-tieng-trung"
    },
    {
        value: 0,
        label: "dịch sách tiếng anh",
        alias: "dich-sach-tieng-anh"
    },
    {
        value: 0,
        label: "dịch thuật tiếng anh",
        alias: "dich-thuat-tieng-anh"
    },
    {
        value: 0,
        label: "dịch truyện tiếng anh",
        alias: "dich-truyen-tieng-anh"
    },
    {
        value: 0,
        label: "dịch truyện tiếng hàn",
        alias: "dich-truyen-tieng-han"
    },
    {
        value: 0,
        label: "phiên dịch công trình tiếng trung",
        alias: "phien-dich-cong-trinh-tieng-trung"
    },
    {
        value: 0,
        label: "phiên dịch tiếng anh kỹ thuật",
        alias: "phien-dich-tieng-anh-ky-thuat"
    },
    {
        value: 0,
        label: "phiên dịch tiếng tây ban nha",
        alias: "phien-dich-tieng-tay-ban-nha"
    },
    {
        value: 0,
        label: "phiên dịch triển lãm",
        alias: "phien-dich-trien-lam"
    },
    {
        value: 0,
        label: "phiên dịch y tế",
        alias: "phien-dich-y-te"
    },
    {
        value: 0,
        label: "thông dịch viên tiếng anh bán thời gian",
        alias: "thong-dich-vien-tieng-anh-ban-thoi-gian"
    },
    {
        value: 0,
        label: "trợ lý phiên dịch tiếng anh",
        alias: "tro-ly-phien-dich-tieng-anh"
    },
    {
        value: 0,
        label: "lái xe bưu chính",
        alias: "lai-xe-buu-chinh"
    },
    {
        value: 0,
        label: "lái xe bưu điện",
        alias: "lai-xe-buu-dien"
    },
    {
        value: 0,
        label: "nhân viên bưu chính",
        alias: "nhan-vien-buu-chinh"
    },
    {
        value: 0,
        label: "quản lý bưu cục",
        alias: "quan-ly-buu-cuc"
    },
    {
        value: 0,
        label: "nhân viên chăm sóc khách hàng qua điện thoại",
        alias: "nhan-vien-cham-soc-khach-hang-qua-dien-thoai"
    },
    {
        value: 0,
        label: "nhân viên chăm sóc khách hàng part time",
        alias: "nhan-vien-cham-soc-khach-hang-part-time"
    },
    {
        value: 0,
        label: "quản lý chăm sóc khách hàng",
        alias: "quan-ly-cham-soc-khach-hang"
    },
    {
        value: 0,
        label: "chăm sóc khách hàng bệnh viện",
        alias: "cham-soc-khach-hang-benh-vien"
    },
    {
        value: 0,
        label: "viên chức giáo dục",
        alias: "vien-chuc-giao-duc"
    },
    {
        value: 0,
        label: "cán bộ phòng đào tạo",
        alias: "can-bo-phong-dao-tao"
    },
    {
        value: 0,
        label: "viên chức y tế",
        alias: "vien-chuc-y-te"
    },
    {
        value: 0,
        label: "thực tập sinh cơ khí",
        alias: "thuc-tap-sinh-co-khi"
    },
    {
        value: 0,
        label: "kỹ sư đúc",
        alias: "ky-su-duc"
    },
    {
        value: 0,
        label: "kỹ sư luyện kim",
        alias: "ky-su-luyen-kim"
    },
    {
        value: 0,
        label: "giảng viên cơ khí",
        alias: "giang-vien-co-khi"
    },
    {
        value: 0,
        label: "kỹ sư cơ khí lương cao",
        alias: "ky-su-co-khi-luong-cao"
    },
    {
        value: 0,
        label: "giám sát cơ khí",
        alias: "giam-sat-co-khi"
    },
    {
        value: 0,
        label: "nhà thép tiền chế",
        alias: "nha-thep-tien-che"
    },
    {
        value: 0,
        label: "phụ cơ khí cửa sắt",
        alias: "phu-co-khi-cua-sat"
    },
    {
        value: 0,
        label: "gia công tranh đính đá",
        alias: "gia-cong-tranh-dinh-da"
    },
    {
        value: 0,
        label: "lái xe xăng dầu",
        alias: "lai-xe-xang-dau"
    },
    {
        value: 0,
        label: "công nhân mỏ than",
        alias: "cong-nhan-mo-than"
    },
    {
        value: 0,
        label: "kcs may mặc",
        alias: "kcs-may-mac"
    },
    {
        value: 0,
        label: "kỹ sư dệt sợi",
        alias: "ky-su-det-soi"
    },
    {
        value: 0,
        label: "kỹ thuật máy dệt kim tròn",
        alias: "ky-thuat-may-det-kim-tron"
    },
    {
        value: 0,
        label: "may balo túi xách",
        alias: "may-balo-tui-xach"
    },
    {
        value: 0,
        label: "ngành sợi dệt",
        alias: "nganh-soi-det"
    },
    {
        value: 0,
        label: "thợ dệt",
        alias: "tho-det"
    },
    {
        value: 0,
        label: "thợ dệt bao pp",
        alias: "tho-det-bao-pp"
    },
    {
        value: 0,
        label: "thợ gò giày",
        alias: "tho-go-giay"
    },
    {
        value: 0,
        label: "thợ may ghế sofa",
        alias: "tho-may-ghe-sofa"
    },
    {
        value: 0,
        label: "thợ may hàng thời trang",
        alias: "tho-may-hang-thoi-trang"
    },
    {
        value: 0,
        label: "thợ may khẩu trang",
        alias: "tho-may-khau-trang"
    },
    {
        value: 0,
        label: "thợ may váy cưới",
        alias: "tho-may-vay-cuoi"
    },
    {
        value: 0,
        label: "thợ may vest",
        alias: "tho-may-vest"
    },
    {
        value: 0,
        label: "nhân viên giác sơ đồ",
        alias: "nhan-vien-giac-so-do"
    },
    {
        value: 0,
        label: "trưởng phòng dịch vụ khách hàng",
        alias: "truong-phong-dich-vu-khach-hang"
    },
    {
        value: 0,
        label: "quản lý căn hộ dịch vụ",
        alias: "quan-ly-can-ho-dich-vu"
    },
    {
        value: 0,
        label: "trưởng phòng dịch vụ ô tô",
        alias: "truong-phong-dich-vu-o-to"
    },
    {
        value: 0,
        label: "giám đốc dịch vụ khách hàng",
        alias: "giam-doc-dich-vu-khach-hang"
    },
    {
        value: 0,
        label: "cộng tác viên bán combo du lịch",
        alias: "cong-tac-vien-ban-combo-du-lich"
    },
    {
        value: 0,
        label: "ctv bán voucher du lịch",
        alias: "ctv-ban-voucher-du-lich"
    },
    {
        value: 0,
        label: "du lịch tiếng trung",
        alias: "du-lich-tieng-trung"
    },
    {
        value: 0,
        label: "hướng dẫn viên du lịch tiếng thái",
        alias: "huong-dan-vien-du-lich-tieng-thai"
    },
    {
        value: 0,
        label: "kế toán du lịch",
        alias: "ke-toan-du-lich"
    },
    {
        value: 0,
        label: "kế toán phòng vé máy bay",
        alias: "ke-toan-phong-ve-may-bay"
    },
    {
        value: 0,
        label: "lái xe du lịch 45 chỗ",
        alias: "lai-xe-du-lich-45-cho"
    },
    {
        value: 0,
        label: "lái xe du lịch 7 chỗ",
        alias: "lai-xe-du-lich-7-cho"
    },
    {
        value: 0,
        label: "nhân viên giao vé máy bay",
        alias: "nhan-vien-giao-ve-may-bay"
    },
    {
        value: 0,
        label: "cộng tác viên bán hàng điện tử",
        alias: "cong-tac-vien-ban-hang-dien-tu"
    },
    {
        value: 0,
        label: "kỹ sư năng lượng",
        alias: "ky-su-nang-luong"
    },
    {
        value: 0,
        label: "kỹ sư qs cơ điện",
        alias: "ky-su-qs-co-dien"
    },
    {
        value: 0,
        label: "kỹ sư thiết kế tủ điện",
        alias: "ky-su-thiet-ke-tu-dien"
    },
    {
        value: 0,
        label: "lái xe điện",
        alias: "lai-xe-dien"
    },
    {
        value: 0,
        label: "nhân viên bán hàng điện tử",
        alias: "nhan-vien-ban-hang-dien-tu"
    },
    {
        value: 0,
        label: "nhân viên bảo hành điện gia dụng",
        alias: "nhan-vien-bao-hanh-dien-gia-dung"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh điện mặt trời",
        alias: "nhan-vien-kinh-doanh-dien-mat-troi"
    },
    {
        value: 0,
        label: "nhân viên kỹ thuật điện lạnh",
        alias: "nhan-vien-ky-thuat-dien-lanh"
    },
    {
        value: 0,
        label: "quản lý dự án cơ điện",
        alias: "quan-ly-du-an-co-dien"
    },
    {
        value: 0,
        label: "thợ điện lạnh ô tô",
        alias: "tho-dien-lanh-o-to"
    },
    {
        value: 0,
        label: "thợ học việc điện lạnh",
        alias: "tho-hoc-viec-dien-lanh"
    },
    {
        value: 0,
        label: "thợ học việc điện tử",
        alias: "tho-hoc-viec-dien-tu"
    },
    {
        value: 0,
        label: "thợ phụ điện công trình",
        alias: "tho-phu-dien-cong-trinh"
    },
    {
        value: 0,
        label: "thợ sơn tĩnh điện",
        alias: "tho-son-tinh-dien"
    },
    {
        value: 0,
        label: "trưởng ca nhà máy điện mặt trời",
        alias: "truong-ca-nha-may-dien-mat-troi"
    },
    {
        value: 0,
        label: "tư vấn giám sát cơ điện",
        alias: "tu-van-giam-sat-co-dien"
    },
    {
        value: 0,
        label: "nhân viên hàn mạch điện tử",
        alias: "nhan-vien-han-mach-dien-tu"
    },
    {
        value: 0,
        label: "văn phòng đại diện",
        alias: "van-phong-dai-dien"
    },
    {
        value: 0,
        label: "kế toán hành chính sự nghiệp",
        alias: "ke-toan-hanh-chinh-su-nghiep"
    },
    {
        value: 0,
        label: "nhân viên hành chính biết tiếng hàn",
        alias: "nhan-vien-hanh-chinh-biet-tieng-han"
    },
    {
        value: 0,
        label: "nhân viên hành chính biết tiếng nhật",
        alias: "nhan-vien-hanh-chinh-biet-tieng-nhat"
    },
    {
        value: 0,
        label: "nhân viên hành chính tiếng anh",
        alias: "nhan-vien-hanh-chinh-tieng-anh"
    },
    {
        value: 0,
        label: "nhân viên văn phòng lương cao",
        alias: "nhan-vien-van-phong-luong-cao"
    },
    {
        value: 0,
        label: "văn phòng không cần kinh nghiệm",
        alias: "van-phong-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "nhân viên văn phòng không cần bằng cấp",
        alias: "nhan-vien-van-phong-khong-can-bang-cap"
    },
    {
        value: 0,
        label: "văn phòng luật",
        alias: "van-phong-luat"
    },
    {
        value: 0,
        label: "nhân viên cho thuê văn phòng",
        alias: "nhan-vien-cho-thue-van-phong"
    },
    {
        value: 0,
        label: "nhân viên hành chính không cần kinh nghiệm",
        alias: "nhan-vien-hanh-chinh-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "nhân viên hành chính part time",
        alias: "nhan-vien-hanh-chinh-part-time"
    },
    {
        value: 0,
        label: "quản lý tòa nhà văn phòng",
        alias: "quan-ly-toa-nha-van-phong"
    },
    {
        value: 0,
        label: "nhân viên văn phòng trình độ 12/12",
        alias: "nhan-vien-van-phong-trinh-do-1212"
    },
    {
        value: 0,
        label: "tạp vụ văn phòng lương cao",
        alias: "tap-vu-van-phong-luong-cao"
    },
    {
        value: 0,
        label: "dược sĩ thực tập",
        alias: "duoc-si-thuc-tap"
    },
    {
        value: 0,
        label: "kỹ sư công nghệ hóa học",
        alias: "ky-su-cong-nghe-hoa-hoc"
    },
    {
        value: 0,
        label: "bảo vệ thực vật",
        alias: "bao-ve-thuc-vat"
    },
    {
        value: 0,
        label: "kỹ sư hóa chất",
        alias: "ky-su-hoa-chat"
    },
    {
        value: 0,
        label: "kỹ sư hóa vô cơ",
        alias: "ky-su-hoa-vo-co"
    },
    {
        value: 0,
        label: "kỹ thuật hóa học",
        alias: "ky-thuat-hoa-hoc"
    },
    {
        value: 0,
        label: "phân bón",
        alias: "phan-bon"
    },
    {
        value: 0,
        label: "xét nghiệm",
        alias: "xet-nghiem"
    },
    {
        value: 0,
        label: "thạc sĩ công nghệ sinh học",
        alias: "thac-si-cong-nghe-sinh-hoc"
    },
    {
        value: 0,
        label: "giảng viên công nghệ sinh học",
        alias: "giang-vien-cong-nghe-sinh-hoc"
    },
    {
        value: 0,
        label: "kiểm nghiệm viên dược",
        alias: "kiem-nghiem-vien-duoc"
    },
    {
        value: 0,
        label: "kiểm nghiệm viên hóa lý",
        alias: "kiem-nghiem-vien-hoa-ly"
    },
    {
        value: 0,
        label: "r&d công nghệ sinh học",
        alias: "rd-cong-nghe-sinh-hoc"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh thuốc bảo vệ thực vật",
        alias: "nhan-vien-kinh-doanh-thuoc-bao-ve-thuc-vat"
    },
    {
        value: 0,
        label: "bao bì giấy",
        alias: "bao-bi-giay"
    },
    {
        value: 0,
        label: "bao bì nhựa",
        alias: "bao-bi-nhua"
    },
    {
        value: 0,
        label: "nhân viên thiết kế chế bản in",
        alias: "nhan-vien-thiet-ke-che-ban-in"
    },
    {
        value: 0,
        label: "thiết kế dàn trang",
        alias: "thiet-ke-dan-trang"
    },
    {
        value: 0,
        label: "thợ xén giấy",
        alias: "tho-xen-giay"
    },
    {
        value: 0,
        label: "nhân viên chế bản điện tử",
        alias: "nhan-vien-che-ban-dien-tu"
    },
    {
        value: 0,
        label: "nhân viên chế bản ctp",
        alias: "nhan-vien-che-ban-ctp"
    },
    {
        value: 0,
        label: "thợ pha màu in lụa",
        alias: "tho-pha-mau-in-lua"
    },
    {
        value: 0,
        label: "thợ đứng máy in flexo",
        alias: "tho-dung-may-in-flexo"
    },
    {
        value: 0,
        label: "quản lý xưởng in lụa",
        alias: "quan-ly-xuong-in-lua"
    },
    {
        value: 0,
        label: "công nhân bao bì",
        alias: "cong-nhan-bao-bi"
    },
    {
        value: 0,
        label: "kỹ sư hệ thống mạng",
        alias: "ky-su-he-thong-mang"
    },
    {
        value: 0,
        label: "nhân viên bán laptop",
        alias: "nhan-vien-ban-laptop"
    },
    {
        value: 0,
        label: "nhân viên bán linh kiện máy tính",
        alias: "nhan-vien-ban-linh-kien-may-tinh"
    },
    {
        value: 0,
        label: "nhân viên học việc sửa chữa máy tính",
        alias: "nhan-vien-hoc-viec-sua-chua-may-tinh"
    },
    {
        value: 0,
        label: "nhân viên lắp ráp cài đặt máy tính",
        alias: "nhan-vien-lap-rap-cai-dat-may-tinh"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh nhà phố",
        alias: "nhan-vien-kinh-doanh-nha-pho"
    },
    {
        value: 0,
        label: "giám đốc sàn",
        alias: "giam-doc-san"
    },
    {
        value: 0,
        label: "cộng tác viên môi giới bđs",
        alias: "cong-tac-vien-moi-gioi-bds"
    },
    {
        value: 0,
        label: "cộng tác viên bán đất nền",
        alias: "cong-tac-vien-ban-dat-nen"
    },
    {
        value: 0,
        label: "môi giới cho thuê nhà",
        alias: "moi-gioi-cho-thue-nha"
    },
    {
        value: 0,
        label: "cộng tác viên cho thuê nhà",
        alias: "cong-tac-vien-cho-thue-nha"
    },
    {
        value: 0,
        label: "cộng tác viên cho thuê căn hộ",
        alias: "cong-tac-vien-cho-thue-can-ho"
    },
    {
        value: 0,
        label: "sale căn hộ",
        alias: "sale-can-ho"
    },
    {
        value: 0,
        label: "môi giới nhà phố",
        alias: "moi-gioi-nha-pho"
    },
    {
        value: 0,
        label: "nhân viên marketing bds",
        alias: "nhan-vien-marketing-bds"
    },
    {
        value: 0,
        label: "kế toán công ty nước ngoài",
        alias: "ke-toan-cong-ty-nuoc-ngoai"
    },
    {
        value: 0,
        label: "kế toán doanh thu",
        alias: "ke-toan-doanh-thu"
    },
    {
        value: 0,
        label: "kế toán kho không cần kinh nghiệm",
        alias: "ke-toan-kho-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "kế toán làm báo cáo thuế",
        alias: "ke-toan-lam-bao-cao-thue"
    },
    {
        value: 0,
        label: "kế toán logistics",
        alias: "ke-toan-logistics"
    },
    {
        value: 0,
        label: "kế toán lương 10 triệu",
        alias: "ke-toan-luong-10-trieu"
    },
    {
        value: 0,
        label: "kế toán lương cao",
        alias: "ke-toan-luong-cao"
    },
    {
        value: 0,
        label: "kế toán nam",
        alias: "ke-toan-nam"
    },
    {
        value: 0,
        label: "kế toán nhận sổ sách về nhà làm",
        alias: "ke-toan-nhan-so-sach-ve-nha-lam"
    },
    {
        value: 0,
        label: "kế toán nội bộ",
        alias: "ke-toan-noi-bo"
    },
    {
        value: 0,
        label: "kế toán siêu thị",
        alias: "ke-toan-sieu-thi"
    },
    {
        value: 0,
        label: "kế toán thuế bán thời gian",
        alias: "ke-toan-thue-ban-thoi-gian"
    },
    {
        value: 0,
        label: "kế toán thuế không cần kinh nghiệm",
        alias: "ke-toan-thue-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "kế toán trưởng lương cao",
        alias: "ke-toan-truong-luong-cao"
    },
    {
        value: 0,
        label: "kế toán xây dựng cơ bản",
        alias: "ke-toan-xay-dung-co-ban"
    },
    {
        value: 0,
        label: "kế toán xuất nhập khẩu",
        alias: "ke-toan-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "kiểm toán ngân hàng",
        alias: "kiem-toan-ngan-hang"
    },
    {
        value: 0,
        label: "kiểm toán nội bộ ngân hàng",
        alias: "kiem-toan-noi-bo-ngan-hang"
    },
    {
        value: 0,
        label: "nhân viên kiểm toán",
        alias: "nhan-vien-kiem-toan"
    },
    {
        value: 0,
        label: "nhân viên triển khai phần mềm kế toán",
        alias: "nhan-vien-trien-khai-phan-mem-ke-toan"
    },
    {
        value: 0,
        label: "trợ lý kiểm toán xây dựng",
        alias: "tro-ly-kiem-toan-xay-dung"
    },
    {
        value: 0,
        label: "trưởng phòng kiểm toán nội bộ",
        alias: "truong-phong-kiem-toan-noi-bo"
    },
    {
        value: 0,
        label: "2d game artist",
        alias: "2d-game-artist"
    },
    {
        value: 0,
        label: "fresher ios",
        alias: "fresher-ios"
    },
    {
        value: 0,
        label: "kỹ sư cầu nối tiếng nhật",
        alias: "ky-su-cau-noi-tieng-nhat"
    },
    {
        value: 0,
        label: "junior data analyst",
        alias: "junior-data-analyst"
    },
    {
        value: 0,
        label: "lập trình viên iot",
        alias: "lap-trinh-vien-iot"
    },
    {
        value: 0,
        label: "fresher nodejs",
        alias: "fresher-nodejs"
    },
    {
        value: 0,
        label: "business analyst fresher",
        alias: "business-analyst-fresher"
    },
    {
        value: 0,
        label: "tester không yêu cầu kinh nghiệm",
        alias: "tester-khong-yeu-cau-kinh-nghiem"
    },
    {
        value: 0,
        label: "data warehouse",
        alias: "data-warehouse"
    },
    {
        value: 0,
        label: "it fresher",
        alias: "it-fresher"
    },
    {
        value: 0,
        label: "it recruiter",
        alias: "it-recruiter"
    },
    {
        value: 0,
        label: "fresher c++",
        alias: "fresher-c"
    },
    {
        value: 0,
        label: "tester ngân hàng",
        alias: "tester-ngan-hang"
    },
    {
        value: 0,
        label: "3d game artist",
        alias: "3d-game-artist"
    },
    {
        value: 0,
        label: "giáo viên dạy lập trình",
        alias: "giao-vien-day-lap-trinh"
    },
    {
        value: 0,
        label: "lập trình viên winform",
        alias: "lap-trinh-vien-winform"
    },
    {
        value: 0,
        label: "fresher javascript",
        alias: "fresher-javascript"
    },
    {
        value: 0,
        label: "fresher machine learning",
        alias: "fresher-machine-learning"
    },
    {
        value: 0,
        label: "kỹ sư cầu nối tiếng anh",
        alias: "ky-su-cau-noi-tieng-anh"
    },
    {
        value: 0,
        label: "lập trình viên java part time",
        alias: "lap-trinh-vien-java-part-time"
    },
    {
        value: 0,
        label: "lập trình viên java web",
        alias: "lap-trinh-vien-java-web"
    },
    {
        value: 0,
        label: "lập trình viên không cần bằng cấp",
        alias: "lap-trinh-vien-khong-can-bang-cap"
    },
    {
        value: 0,
        label: "lập trình viên php làm việc online",
        alias: "lap-trinh-vien-php-lam-viec-online"
    },
    {
        value: 0,
        label: "lập trình viên php mới ra trường",
        alias: "lap-trinh-vien-php-moi-ra-truong"
    },
    {
        value: 0,
        label: "lập trình viên python django",
        alias: "lap-trinh-vien-python-django"
    },
    {
        value: 0,
        label: "front end part time",
        alias: "front-end-part-time"
    },
    {
        value: 0,
        label: "giảng viên lập trình",
        alias: "giang-vien-lap-trinh"
    },
    {
        value: 0,
        label: "kỹ sư trí tuệ nhân tạo",
        alias: "ky-su-tri-tue-nhan-tao"
    },
    {
        value: 0,
        label: "lập trình flutter",
        alias: "lap-trinh-flutter"
    },
    {
        value: 0,
        label: "tester part time",
        alias: "tester-part-time"
    },
    {
        value: 0,
        label: "thực tập sinh python",
        alias: "thuc-tap-sinh-python"
    },
    {
        value: 0,
        label: "lập trình viên java không cần kinh nghiệm",
        alias: "lap-trinh-vien-java-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "bellman",
        alias: "bellman"
    },
    {
        value: 0,
        label: "đầu bếp khách sạn 5 sao",
        alias: "dau-bep-khach-san-5-sao"
    },
    {
        value: 0,
        label: "kỹ sư trưởng khách sạn",
        alias: "ky-su-truong-khach-san"
    },
    {
        value: 0,
        label: "kỹ thuật khách sạn",
        alias: "ky-thuat-khach-san"
    },
    {
        value: 0,
        label: "lái xe khách sạn",
        alias: "lai-xe-khach-san"
    },
    {
        value: 0,
        label: "nhân viên quán ăn",
        alias: "nhan-vien-quan-an"
    },
    {
        value: 0,
        label: "nhân viên spa khách sạn 5 sao",
        alias: "nhan-vien-spa-khach-san-5-sao"
    },
    {
        value: 0,
        label: "part time khách sạn",
        alias: "part-time-khach-san"
    },
    {
        value: 0,
        label: "phụ quán cơm chay",
        alias: "phu-quan-com-chay"
    },
    {
        value: 0,
        label: "qc nhà hàng",
        alias: "qc-nha-hang"
    },
    {
        value: 0,
        label: "quản trị khách sạn",
        alias: "quan-tri-khach-san"
    },
    {
        value: 0,
        label: "rửa chén khách sạn",
        alias: "rua-chen-khach-san"
    },
    {
        value: 0,
        label: "họa viên kiến trúc bán thời gian",
        alias: "hoa-vien-kien-truc-ban-thoi-gian"
    },
    {
        value: 0,
        label: "part time kiến trúc",
        alias: "part-time-kien-truc"
    },
    {
        value: 0,
        label: "đồ gỗ nội thất",
        alias: "do-go-noi-that"
    },
    {
        value: 0,
        label: "kỹ sư cảnh quan cây xanh",
        alias: "ky-su-canh-quan-cay-xanh"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh đồ gỗ nội thất",
        alias: "nhan-vien-kinh-doanh-do-go-noi-that"
    },
    {
        value: 0,
        label: "nhân viên vẽ autocad 2d",
        alias: "nhan-vien-ve-autocad-2d"
    },
    {
        value: 0,
        label: "thiết kế nội thất không cần kinh nghiệm",
        alias: "thiet-ke-noi-that-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "trưởng phòng kinh doanh nội thất",
        alias: "truong-phong-kinh-doanh-noi-that"
    },
    {
        value: 0,
        label: "trưởng phòng thiết kế nội thất",
        alias: "truong-phong-thiet-ke-noi-that"
    },
    {
        value: 0,
        label: "công nhân lắp ráp ô tô",
        alias: "cong-nhan-lap-rap-o-to"
    },
    {
        value: 0,
        label: "giám đốc kinh doanh ô tô",
        alias: "giam-doc-kinh-doanh-o-to"
    },
    {
        value: 0,
        label: "giám định bảo hiểm ô tô",
        alias: "giam-dinh-bao-hiem-o-to"
    },
    {
        value: 0,
        label: "ctv bán ô tô",
        alias: "ctv-ban-o-to"
    },
    {
        value: 0,
        label: "giám đốc đại lý ô tô",
        alias: "giam-doc-dai-ly-o-to"
    },
    {
        value: 0,
        label: "thợ phụ nội thất ô tô",
        alias: "tho-phu-noi-that-o-to"
    },
    {
        value: 0,
        label: "nhân viên bán xe ô tô cũ",
        alias: "nhan-vien-ban-xe-o-to-cu"
    },
    {
        value: 0,
        label: "thợ phụ sơn ô tô",
        alias: "tho-phu-son-o-to"
    },
    {
        value: 0,
        label: "sale admin ô tô",
        alias: "sale-admin-o-to"
    },
    {
        value: 0,
        label: "sinh viên ô tô mới ra trường",
        alias: "sinh-vien-o-to-moi-ra-truong"
    },
    {
        value: 0,
        label: "cán bộ kỹ thuật thi công",
        alias: "can-bo-ky-thuat-thi-cong"
    },
    {
        value: 0,
        label: "giám sát kỹ thuật tòa nhà",
        alias: "giam-sat-ky-thuat-toa-nha"
    },
    {
        value: 0,
        label: "ktv x quang",
        alias: "ktv-x-quang"
    },
    {
        value: 0,
        label: "kỹ sư địa kỹ thuật",
        alias: "ky-su-dia-ky-thuat"
    },
    {
        value: 0,
        label: "kỹ thuật bê tông",
        alias: "ky-thuat-be-tong"
    },
    {
        value: 0,
        label: "kỹ thuật điện nước",
        alias: "ky-thuat-dien-nuoc"
    },
    {
        value: 0,
        label: "kỹ thuật nhôm kính",
        alias: "ky-thuat-nhom-kinh"
    },
    {
        value: 0,
        label: "kỹ thuật pha màu",
        alias: "ky-thuat-pha-mau"
    },
    {
        value: 0,
        label: "kỹ thuật sơn gỗ",
        alias: "ky-thuat-son-go"
    },
    {
        value: 0,
        label: "kỹ thuật sửa chữa đồng hồ",
        alias: "ky-thuat-sua-chua-dong-ho"
    },
    {
        value: 0,
        label: "kỹ thuật thang máy",
        alias: "ky-thuat-thang-may"
    },
    {
        value: 0,
        label: "kỹ thuật thêu vi tính",
        alias: "ky-thuat-theu-vi-tinh"
    },
    {
        value: 0,
        label: "kỹ thuật viên chẩn đoán hình ảnh",
        alias: "ky-thuat-vien-chan-doan-hinh-anh"
    },
    {
        value: 0,
        label: "kỹ thuật viên gis",
        alias: "ky-thuat-vien-gis"
    },
    {
        value: 0,
        label: "kỹ thuật viên máy photocopy",
        alias: "ky-thuat-vien-may-photocopy"
    },
    {
        value: 0,
        label: "kỹ thuật viên ndt",
        alias: "ky-thuat-vien-ndt"
    },
    {
        value: 0,
        label: "kỹ thuật viên phòng thí nghiệm",
        alias: "ky-thuat-vien-phong-thi-nghiem"
    },
    {
        value: 0,
        label: "kỹ thuật viên phòng thu",
        alias: "ky-thuat-vien-phong-thu"
    },
    {
        value: 0,
        label: "kỹ thuật viên phục hình răng",
        alias: "ky-thuat-vien-phuc-hinh-rang"
    },
    {
        value: 0,
        label: "kỹ thuật viên phục hồi chức năng",
        alias: "ky-thuat-vien-phuc-hoi-chuc-nang"
    },
    {
        value: 0,
        label: "kỹ thuật viên siêu âm",
        alias: "ky-thuat-vien-sieu-am"
    },
    {
        value: 0,
        label: "kỹ thuật viên spa chưa có kinh nghiệm",
        alias: "ky-thuat-vien-spa-chua-co-kinh-nghiem"
    },
    {
        value: 0,
        label: "kỹ thuật viên spa lương cao",
        alias: "ky-thuat-vien-spa-luong-cao"
    },
    {
        value: 0,
        label: "kỹ thuật wash jeans",
        alias: "ky-thuat-wash-jeans"
    },
    {
        value: 0,
        label: "nhân viên kỹ thuật bảo trì tòa nhà",
        alias: "nhan-vien-ky-thuat-bao-tri-toa-nha"
    },
    {
        value: 0,
        label: "nhân viên kỹ thuật điện tử viễn thông",
        alias: "nhan-vien-ky-thuat-dien-tu-vien-thong"
    },
    {
        value: 0,
        label: "nhân viên kỹ thuật thiết bị y tế",
        alias: "nhan-vien-ky-thuat-thiet-bi-y-te"
    },
    {
        value: 0,
        label: "quản lý kỹ thuật tòa nhà",
        alias: "quan-ly-ky-thuat-toa-nha"
    },
    {
        value: 0,
        label: "trưởng bộ phận kỹ thuật tòa nhà",
        alias: "truong-bo-phan-ky-thuat-toa-nha"
    },
    {
        value: 0,
        label: "điều dưỡng thẩm mỹ viện",
        alias: "dieu-duong-tham-my-vien"
    },
    {
        value: 0,
        label: "huấn luyện viên gym",
        alias: "huan-luyen-vien-gym"
    },
    {
        value: 0,
        label: "huấn luyện viên cá nhân",
        alias: "huan-luyen-vien-ca-nhan"
    },
    {
        value: 0,
        label: "tạp vụ spa",
        alias: "tap-vu-spa"
    },
    {
        value: 0,
        label: "foot massage",
        alias: "foot-massage"
    },
    {
        value: 0,
        label: "giám đốc điều hành thẩm mỹ viện",
        alias: "giam-doc-dieu-hanh-tham-my-vien"
    },
    {
        value: 0,
        label: "giám sát spa",
        alias: "giam-sat-spa"
    },
    {
        value: 0,
        label: "bác sĩ laser thẩm mỹ",
        alias: "bac-si-laser-tham-my"
    },
    {
        value: 0,
        label: "sale thẩm mỹ",
        alias: "sale-tham-my"
    },
    {
        value: 0,
        label: "cộng tác viên phun xăm",
        alias: "cong-tac-vien-phun-xam"
    },
    {
        value: 0,
        label: "thợ nail part time",
        alias: "tho-nail-part-time"
    },
    {
        value: 0,
        label: "huấn luyện viên bóng đá",
        alias: "huan-luyen-vien-bong-da"
    },
    {
        value: 0,
        label: "nhân viên trang điểm vừa học vừa làm",
        alias: "nhan-vien-trang-diem-vua-hoc-vua-lam"
    },
    {
        value: 0,
        label: "thợ nail vừa học vừa làm",
        alias: "tho-nail-vua-hoc-vua-lam"
    },
    {
        value: 0,
        label: "nhân viên spa chưa biết nghề",
        alias: "nhan-vien-spa-chua-biet-nghe"
    },
    {
        value: 0,
        label: "luật kinh tế",
        alias: "luat-kinh-te"
    },
    {
        value: 0,
        label: "trợ lý pháp lý",
        alias: "tro-ly-phap-ly"
    },
    {
        value: 0,
        label: "giám đốc pháp chế",
        alias: "giam-doc-phap-che"
    },
    {
        value: 0,
        label: "part time ngành luật",
        alias: "part-time-nganh-luat"
    },
    {
        value: 0,
        label: "điều tra viên xã hội học",
        alias: "dieu-tra-vien-xa-hoi-hoc"
    },
    {
        value: 0,
        label: "chuyên viên điều tra gian lận",
        alias: "chuyen-vien-dieu-tra-gian-lan"
    },
    {
        value: 0,
        label: "luật sư tố tụng",
        alias: "luat-su-to-tung"
    },
    {
        value: 0,
        label: "pháp chế không yêu cầu kinh nghiệm",
        alias: "phap-che-khong-yeu-cau-kinh-nghiem"
    },
    {
        value: 0,
        label: "nhân viên pháp lý mới ra trường",
        alias: "nhan-vien-phap-ly-moi-ra-truong"
    },
    {
        value: 0,
        label: "điều tra viên dự án",
        alias: "dieu-tra-vien-du-an"
    },
    {
        value: 0,
        label: "công nhân biết tiếng nhật",
        alias: "cong-nhan-biet-tieng-nhat"
    },
    {
        value: 0,
        label: "công nhân biết tiếng trung",
        alias: "cong-nhan-biet-tieng-trung"
    },
    {
        value: 0,
        label: "công nhân cắt chỉ",
        alias: "cong-nhan-cat-chi"
    },
    {
        value: 0,
        label: "công nhân cây xanh",
        alias: "cong-nhan-cay-xanh"
    },
    {
        value: 0,
        label: "công nhân dệt bao bì",
        alias: "cong-nhan-det-bao-bi"
    },
    {
        value: 0,
        label: "công nhân làm lông mi giả",
        alias: "cong-nhan-lam-long-mi-gia"
    },
    {
        value: 0,
        label: "công nhân lắp ráp linh kiện điện tử",
        alias: "cong-nhan-lap-rap-linh-kien-dien-tu"
    },
    {
        value: 0,
        label: "công nhân nuôi tôm",
        alias: "cong-nhan-nuoi-tom"
    },
    {
        value: 0,
        label: "công nhân trồng rau",
        alias: "cong-nhan-trong-rau"
    },
    {
        value: 0,
        label: "công nhân vận hành nhà máy nhiệt điện",
        alias: "cong-nhan-van-hanh-nha-may-nhiet-dien"
    },
    {
        value: 0,
        label: "công nhân vận hành nhà máy thủy điện",
        alias: "cong-nhan-van-hanh-nha-may-thuy-dien"
    },
    {
        value: 0,
        label: "công nhân xếp quần áo",
        alias: "cong-nhan-xep-quan-ao"
    },
    {
        value: 0,
        label: "thợ cắt tóc",
        alias: "tho-cat-toc"
    },
    {
        value: 0,
        label: "thợ chính tóc nữ",
        alias: "tho-chinh-toc-nu"
    },
    {
        value: 0,
        label: "thợ cửa sắt",
        alias: "tho-cua-sat"
    },
    {
        value: 0,
        label: "thợ dán phim cách nhiệt",
        alias: "tho-dan-phim-cach-nhiet"
    },
    {
        value: 0,
        label: "thợ đan ghế nhựa giả mây",
        alias: "tho-dan-ghe-nhua-gia-may"
    },
    {
        value: 0,
        label: "thợ gia công sau in",
        alias: "tho-gia-cong-sau-in"
    },
    {
        value: 0,
        label: "thợ hàn thời vụ",
        alias: "tho-han-thoi-vu"
    },
    {
        value: 0,
        label: "thợ học việc sửa xe máy",
        alias: "tho-hoc-viec-sua-xe-may"
    },
    {
        value: 0,
        label: "thợ in lưới",
        alias: "tho-in-luoi"
    },
    {
        value: 0,
        label: "thợ làm lốp",
        alias: "tho-lam-lop"
    },
    {
        value: 0,
        label: "thợ mộc gỗ công nghiệp",
        alias: "tho-moc-go-cong-nghiep"
    },
    {
        value: 0,
        label: "thợ mộc gỗ tự nhiên",
        alias: "tho-moc-go-tu-nhien"
    },
    {
        value: 0,
        label: "thợ nữ cạo mặt ráy tai",
        alias: "tho-nu-cao-mat-ray-tai"
    },
    {
        value: 0,
        label: "thợ phụ cắm hoa",
        alias: "tho-phu-cam-hoa"
    },
    {
        value: 0,
        label: "thợ phụ nail",
        alias: "tho-phu-nail"
    },
    {
        value: 0,
        label: "thợ rang cà phê",
        alias: "tho-rang-ca-phe"
    },
    {
        value: 0,
        label: "thợ ráp đầm",
        alias: "tho-rap-dam"
    },
    {
        value: 0,
        label: "thợ ráp đầm áo kiểu",
        alias: "tho-rap-dam-ao-kieu"
    },
    {
        value: 0,
        label: "thợ vắt sổ",
        alias: "tho-vat-so"
    },
    {
        value: 0,
        label: "thợ xăm hình nghệ thuật",
        alias: "tho-xam-hinh-nghe-thuat"
    },
    {
        value: 0,
        label: "kỹ sư thủy văn",
        alias: "ky-su-thuy-van"
    },
    {
        value: 0,
        label: "nhân viên ehs",
        alias: "nhan-vien-ehs"
    },
    {
        value: 0,
        label: "nhân viên iso môi trường",
        alias: "nhan-vien-iso-moi-truong"
    },
    {
        value: 0,
        label: "lái xe môi trường",
        alias: "lai-xe-moi-truong"
    },
    {
        value: 0,
        label: "kỹ sư quản lý tài nguyên rừng",
        alias: "ky-su-quan-ly-tai-nguyen-rung"
    },
    {
        value: 0,
        label: "kỹ sư lâm nghiệp đô thị",
        alias: "ky-su-lam-nghiep-do-thi"
    },
    {
        value: 0,
        label: "kỹ sư xử lý nước thải",
        alias: "ky-su-xu-ly-nuoc-thai"
    },
    {
        value: 0,
        label: "thạc sĩ môi trường",
        alias: "thac-si-moi-truong"
    },
    {
        value: 0,
        label: "cộng tác viên thời trang cao cấp",
        alias: "cong-tac-vien-thoi-trang-cao-cap"
    },
    {
        value: 0,
        label: "giám đốc kinh doanh mỹ phẩm",
        alias: "giam-doc-kinh-doanh-my-pham"
    },
    {
        value: 0,
        label: "giao hàng mỹ phẩm",
        alias: "giao-hang-my-pham"
    },
    {
        value: 0,
        label: "nhân viên bán hàng thời trang cao cấp",
        alias: "nhan-vien-ban-hang-thoi-trang-cao-cap"
    },
    {
        value: 0,
        label: "quản lý showroom thời trang",
        alias: "quan-ly-showroom-thoi-trang"
    },
    {
        value: 0,
        label: "thiết kế rập thời trang",
        alias: "thiet-ke-rap-thoi-trang"
    },
    {
        value: 0,
        label: "thiết kế thời trang trẻ em",
        alias: "thiet-ke-thoi-trang-tre-em"
    },
    {
        value: 0,
        label: "thiết kế trang sức",
        alias: "thiet-ke-trang-suc"
    },
    {
        value: 0,
        label: "trainer mỹ phẩm",
        alias: "trainer-my-pham"
    },
    {
        value: 0,
        label: "trưởng phòng kinh doanh mỹ phẩm",
        alias: "truong-phong-kinh-doanh-my-pham"
    },
    {
        value: 0,
        label: "trưởng phòng kinh doanh thời trang",
        alias: "truong-phong-kinh-doanh-thoi-trang"
    },
    {
        value: 0,
        label: "bảo vệ nội bộ ngân hàng",
        alias: "bao-ve-noi-bo-ngan-hang"
    },
    {
        value: 0,
        label: "chuyên viên đầu tư dự án",
        alias: "chuyen-vien-dau-tu-du-an"
    },
    {
        value: 0,
        label: "chuyên viên quản trị rủi ro",
        alias: "chuyen-vien-quan-tri-rui-ro"
    },
    {
        value: 0,
        label: "chuyên viên thanh toán quốc tế",
        alias: "chuyen-vien-thanh-toan-quoc-te"
    },
    {
        value: 0,
        label: "cộng tác viên tín dụng ngân hàng",
        alias: "cong-tac-vien-tin-dung-ngan-hang"
    },
    {
        value: 0,
        label: "nhân viên chăm sóc khách hàng ngân hàng",
        alias: "nhan-vien-cham-soc-khach-hang-ngan-hang"
    },
    {
        value: 0,
        label: "nhân viên giao dịch chứng khoán",
        alias: "nhan-vien-giao-dich-chung-khoan"
    },
    {
        value: 0,
        label: "nhân viên tư vấn chứng khoán",
        alias: "nhan-vien-tu-van-chung-khoan"
    },
    {
        value: 0,
        label: "sale ngân hàng",
        alias: "sale-ngan-hang"
    },
    {
        value: 0,
        label: "tổng đài viên ngân hàng",
        alias: "tong-dai-vien-ngan-hang"
    },
    {
        value: 0,
        label: "trưởng nhóm ngân hàng",
        alias: "truong-nhom-ngan-hang"
    },
    {
        value: 0,
        label: "trưởng phòng đầu tư",
        alias: "truong-phong-dau-tu"
    },
    {
        value: 0,
        label: "trưởng phòng kinh doanh ngân hàng",
        alias: "truong-phong-kinh-doanh-ngan-hang"
    },
    {
        value: 0,
        label: "diễn viên đóng mv",
        alias: "dien-vien-dong-mv"
    },
    {
        value: 0,
        label: "diễn viên quảng cáo",
        alias: "dien-vien-quang-cao"
    },
    {
        value: 0,
        label: "diễn viên đóng thế",
        alias: "dien-vien-dong-the"
    },
    {
        value: 0,
        label: "diễn viên phim học đường",
        alias: "dien-vien-phim-hoc-duong"
    },
    {
        value: 0,
        label: "diễn viên phim truyền hình",
        alias: "dien-vien-phim-truyen-hinh"
    },
    {
        value: 0,
        label: "ca sĩ bolero",
        alias: "ca-si-bolero"
    },
    {
        value: 0,
        label: "nhân viên phụ quay phim",
        alias: "nhan-vien-phu-quay-phim"
    },
    {
        value: 0,
        label: "dựng phim bán thời gian",
        alias: "dung-phim-ban-thoi-gian"
    },
    {
        value: 0,
        label: "chuyên viên đào tạo nội bộ",
        alias: "chuyen-vien-dao-tao-noi-bo"
    },
    {
        value: 0,
        label: "nhân sự bất động sản",
        alias: "nhan-su-bat-dong-san"
    },
    {
        value: 0,
        label: "nhân sự không yêu cầu kinh nghiệm",
        alias: "nhan-su-khong-yeu-cau-kinh-nghiem"
    },
    {
        value: 0,
        label: "nhân sự tổng hợp",
        alias: "nhan-su-tong-hop"
    },
    {
        value: 0,
        label: "nhân viên tuyển dụng",
        alias: "nhan-vien-tuyen-dung"
    },
    {
        value: 0,
        label: "trợ lý giám đốc nhân sự",
        alias: "tro-ly-giam-doc-nhan-su"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn tuyển dụng",
        alias: "chuyen-vien-tu-van-tuyen-dung"
    },
    {
        value: 0,
        label: "talent acquisition",
        alias: "talent-acquisition"
    },
    {
        value: 0,
        label: "HR admin",
        alias: "hr-admin"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh thuốc thú y",
        alias: "nhan-vien-kinh-doanh-thuoc-thu-y"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh đèn led",
        alias: "nhan-vien-kinh-doanh-den-led"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh gạch ốp lát",
        alias: "nhan-vien-kinh-doanh-gach-op-lat"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh cám",
        alias: "nhan-vien-kinh-doanh-cam"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh camera",
        alias: "nhan-vien-kinh-doanh-camera"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh cửa nhôm",
        alias: "nhan-vien-kinh-doanh-cua-nhom"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh đồng phục",
        alias: "nhan-vien-kinh-doanh-dong-phuc"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh không cần kinh nghiệm",
        alias: "nhan-vien-kinh-doanh-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh ngoại hối",
        alias: "nhan-vien-kinh-doanh-ngoai-hoi"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh rèm cửa",
        alias: "nhan-vien-kinh-doanh-rem-cua"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh sàn gỗ",
        alias: "nhan-vien-kinh-doanh-san-go"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh thiết bị vệ sinh",
        alias: "nhan-vien-kinh-doanh-thiet-bi-ve-sinh"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh thức ăn thủy sản",
        alias: "nhan-vien-kinh-doanh-thuc-an-thuy-san"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh b2b",
        alias: "nhan-vien-kinh-doanh-b2b"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh đồ chơi trẻ em",
        alias: "nhan-vien-kinh-doanh-do-choi-tre-em"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh gạch",
        alias: "nhan-vien-kinh-doanh-gach"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh giáo dục",
        alias: "nhan-vien-kinh-doanh-giao-duc"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh lốp ô tô",
        alias: "nhan-vien-kinh-doanh-lop-o-to"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh may mặc",
        alias: "nhan-vien-kinh-doanh-may-mac"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh phụ gia thực phẩm",
        alias: "nhan-vien-kinh-doanh-phu-gia-thuc-pham"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh sự kiện",
        alias: "nhan-vien-kinh-doanh-su-kien"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh vải",
        alias: "nhan-vien-kinh-doanh-vai"
    },
    {
        value: 0,
        label: "trưởng phòng kinh doanh vật liệu xây dựng",
        alias: "truong-phong-kinh-doanh-vat-lieu-xay-dung"
    },
    {
        value: 0,
        label: "nhân viên nhập liệu excel",
        alias: "nhan-vien-nhap-lieu-excel"
    },
    {
        value: 0,
        label: "nhân viên nhập liệu chứng từ",
        alias: "nhan-vien-nhap-lieu-chung-tu"
    },
    {
        value: 0,
        label: "nhân viên phát triển thị trường nhật bản",
        alias: "nhan-vien-phat-trien-thi-truong-nhat-ban"
    },
    {
        value: 0,
        label: "kiểm lâm",
        alias: "kiem-lam"
    },
    {
        value: 0,
        label: "kỹ sư chế biến lâm sản",
        alias: "ky-su-che-bien-lam-san"
    },
    {
        value: 0,
        label: "người nuôi cá",
        alias: "nguoi-nuoi-ca"
    },
    {
        value: 0,
        label: "nông nghiệp công nghệ cao",
        alias: "nong-nghiep-cong-nghe-cao"
    },
    {
        value: 0,
        label: "nông sản",
        alias: "nong-san"
    },
    {
        value: 0,
        label: "quản lý nông nghiệp",
        alias: "quan-ly-nong-nghiep"
    },
    {
        value: 0,
        label: "nhân viên đối ngoại tiếng nhật",
        alias: "nhan-vien-doi-ngoai-tieng-nhat"
    },
    {
        value: 0,
        label: "cửa hàng trưởng mỹ phẩm",
        alias: "cua-hang-truong-my-pham"
    },
    {
        value: 0,
        label: "giám đốc kho vận",
        alias: "giam-doc-kho-van"
    },
    {
        value: 0,
        label: "giám đốc kinh doanh miền bắc",
        alias: "giam-doc-kinh-doanh-mien-bac"
    },
    {
        value: 0,
        label: "giám đốc miền",
        alias: "giam-doc-mien"
    },
    {
        value: 0,
        label: "giám đốc kinh doanh miền trung",
        alias: "giam-doc-kinh-doanh-mien-trung"
    },
    {
        value: 0,
        label: "giám đốc phát triển thị trường",
        alias: "giam-doc-phat-trien-thi-truong"
    },
    {
        value: 0,
        label: "giám đốc quản lý tòa nhà",
        alias: "giam-doc-quan-ly-toa-nha"
    },
    {
        value: 0,
        label: "giám đốc sáng tạo",
        alias: "giam-doc-sang-tao"
    },
    {
        value: 0,
        label: "giám đốc trung tâm tiếng anh",
        alias: "giam-doc-trung-tam-tieng-anh"
    },
    {
        value: 0,
        label: "giám đốc vận hành",
        alias: "giam-doc-van-hanh"
    },
    {
        value: 0,
        label: "giám đốc vận tải",
        alias: "giam-doc-van-tai"
    },
    {
        value: 0,
        label: "giám đốc vùng ngân hàng",
        alias: "giam-doc-vung-ngan-hang"
    },
    {
        value: 0,
        label: "giám sát dịch vụ",
        alias: "giam-sat-dich-vu"
    },
    {
        value: 0,
        label: "giám sát quán cafe",
        alias: "giam-sat-quan-cafe"
    },
    {
        value: 0,
        label: "phó giám đốc kỹ thuật",
        alias: "pho-giam-doc-ky-thuat"
    },
    {
        value: 0,
        label: "phó phòng sản xuất",
        alias: "pho-phong-san-xuat"
    },
    {
        value: 0,
        label: "phó tổng giám đốc kinh doanh",
        alias: "pho-tong-giam-doc-kinh-doanh"
    },
    {
        value: 0,
        label: "quản lý bán hàng miền trung",
        alias: "quan-ly-ban-hang-mien-trung"
    },
    {
        value: 0,
        label: "quản lý bếp ăn",
        alias: "quan-ly-bep-an"
    },
    {
        value: 0,
        label: "quản lý cắt",
        alias: "quan-ly-cat"
    },
    {
        value: 0,
        label: "quản lý cửa hàng điện thoại",
        alias: "quan-ly-cua-hang-dien-thoai"
    },
    {
        value: 0,
        label: "quản lý khu vui chơi trẻ em",
        alias: "quan-ly-khu-vui-choi-tre-em"
    },
    {
        value: 0,
        label: "quản lý kinh doanh khu vực",
        alias: "quan-ly-kinh-doanh-khu-vuc"
    },
    {
        value: 0,
        label: "quản lý lớp học",
        alias: "quan-ly-lop-hoc"
    },
    {
        value: 0,
        label: "quản lý marketing",
        alias: "quan-ly-marketing"
    },
    {
        value: 0,
        label: "quản lý quán trà sữa",
        alias: "quan-ly-quan-tra-sua"
    },
    {
        value: 0,
        label: "quản lý trạm trộn bê tông",
        alias: "quan-ly-tram-tron-be-tong"
    },
    {
        value: 0,
        label: "quản lý trường học",
        alias: "quan-ly-truong-hoc"
    },
    {
        value: 0,
        label: "quản lý vệ sinh công nghiệp",
        alias: "quan-ly-ve-sinh-cong-nghiep"
    },
    {
        value: 0,
        label: "quản lý xưởng",
        alias: "quan-ly-xuong"
    },
    {
        value: 0,
        label: "quản lý xưởng cơ khí",
        alias: "quan-ly-xuong-co-khi"
    },
    {
        value: 0,
        label: "quản lý xưởng thêu vi tính",
        alias: "quan-ly-xuong-theu-vi-tinh"
    },
    {
        value: 0,
        label: "tổng giám đốc",
        alias: "tong-giam-doc"
    },
    {
        value: 0,
        label: "trưởng phòng bán lẻ",
        alias: "truong-phong-ban-le"
    },
    {
        value: 0,
        label: "trưởng phòng bảo hành",
        alias: "truong-phong-bao-hanh"
    },
    {
        value: 0,
        label: "trưởng phòng đấu thầu",
        alias: "truong-phong-dau-thau"
    },
    {
        value: 0,
        label: "trưởng phòng phát triển mặt bằng",
        alias: "truong-phong-phat-trien-mat-bang"
    },
    {
        value: 0,
        label: "trưởng phòng smt",
        alias: "truong-phong-smt"
    },
    {
        value: 0,
        label: "trưởng phòng thẩm định giá",
        alias: "truong-phong-tham-dinh-gia"
    },
    {
        value: 0,
        label: "trưởng phòng xây dựng",
        alias: "truong-phong-xay-dung"
    },
    {
        value: 0,
        label: "trưởng phòng xử lý nợ",
        alias: "truong-phong-xu-ly-no"
    },
    {
        value: 0,
        label: "truyền thông sự kiện",
        alias: "truyen-thong-su-kien"
    },
    {
        value: 0,
        label: "giảng viên giáo dục thể chất",
        alias: "giang-vien-giao-duc-the-chat"
    },
    {
        value: 0,
        label: "giáo viên giáo dục thể chất",
        alias: "giao-vien-giao-duc-the-chat"
    },
    {
        value: 0,
        label: "giáo viên dạy thể dục nhịp điệu",
        alias: "giao-vien-day-the-duc-nhip-dieu"
    },
    {
        value: 0,
        label: "ctv bán giày thể thao",
        alias: "ctv-ban-giay-the-thao"
    },
    {
        value: 0,
        label: "nhân viên bán đồ thể thao",
        alias: "nhan-vien-ban-do-the-thao"
    },
    {
        value: 0,
        label: "cứu hộ bể bơi",
        alias: "cuu-ho-be-boi"
    },
    {
        value: 0,
        label: "cộng tác viên kinh doanh nhà phố",
        alias: "cong-tac-vien-kinh-doanh-nha-pho"
    },
    {
        value: 0,
        label: "cử nhân quản trị kinh doanh",
        alias: "cu-nhan-quan-tri-kinh-doanh"
    },
    {
        value: 0,
        label: "giám đốc kinh doanh miền nam",
        alias: "giam-doc-kinh-doanh-mien-nam"
    },
    {
        value: 0,
        label: "giám đốc kinh doanh thức ăn chăn nuôi",
        alias: "giam-doc-kinh-doanh-thuc-an-chan-nuoi"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh nhà hàng",
        alias: "nhan-vien-kinh-doanh-nha-hang"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh rượu",
        alias: "nhan-vien-kinh-doanh-ruou"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh sơn nước",
        alias: "nhan-vien-kinh-doanh-son-nuoc"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh thời trang",
        alias: "nhan-vien-kinh-doanh-thoi-trang"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh xe máy",
        alias: "nhan-vien-kinh-doanh-xe-may"
    },
    {
        value: 0,
        label: "thạc sĩ quản trị kinh doanh",
        alias: "thac-si-quan-tri-kinh-doanh"
    },
    {
        value: 0,
        label: "trưởng phòng kinh doanh dự án",
        alias: "truong-phong-kinh-doanh-du-an"
    },
    {
        value: 0,
        label: "công nhân sản xuất mỹ phẩm",
        alias: "cong-nhan-san-xuat-my-pham"
    },
    {
        value: 0,
        label: "công nhân sản xuất sơn",
        alias: "cong-nhan-san-xuat-son"
    },
    {
        value: 0,
        label: "công nhân xưởng gỗ",
        alias: "cong-nhan-xuong-go"
    },
    {
        value: 0,
        label: "dược sĩ sản xuất",
        alias: "duoc-si-san-xuat"
    },
    {
        value: 0,
        label: "kỹ sư vận hành tòa nhà",
        alias: "ky-su-van-hanh-toa-nha"
    },
    {
        value: 0,
        label: "quản đốc xưởng sơn",
        alias: "quan-doc-xuong-son"
    },
    {
        value: 0,
        label: "quản đốc xưởng sửa chữa ô tô",
        alias: "quan-doc-xuong-sua-chua-o-to"
    },
    {
        value: 0,
        label: "quản lý sản xuất biết tiếng nhật",
        alias: "quan-ly-san-xuat-biet-tieng-nhat"
    },
    {
        value: 0,
        label: "quản lý vận hành",
        alias: "quan-ly-van-hanh"
    },
    {
        value: 0,
        label: "thư ký sản xuất",
        alias: "thu-ky-san-xuat"
    },
    {
        value: 0,
        label: "trợ lý sản xuất chương trình truyền hình",
        alias: "tro-ly-san-xuat-chuong-trinh-truyen-hinh"
    },
    {
        value: 0,
        label: "trợ lý sản xuất phim",
        alias: "tro-ly-san-xuat-phim"
    },
    {
        value: 0,
        label: "chuyên viên giám định bồi thường",
        alias: "chuyen-vien-giam-dinh-boi-thuong"
    },
    {
        value: 0,
        label: "thẩm định hiện trường",
        alias: "tham-dinh-hien-truong"
    },
    {
        value: 0,
        label: "thẩm định ngân hàng",
        alias: "tham-dinh-ngan-hang"
    },
    {
        value: 0,
        label: "thẩm định tài chính",
        alias: "tham-dinh-tai-chinh"
    },
    {
        value: 0,
        label: "quản lý chất lượng bệnh viện",
        alias: "quan-ly-chat-luong-benh-vien"
    },
    {
        value: 0,
        label: "qc ngành giày da",
        alias: "qc-nganh-giay-da"
    },
    {
        value: 0,
        label: "qc ngành gỗ",
        alias: "qc-nganh-go"
    },
    {
        value: 0,
        label: "qc vi sinh",
        alias: "qc-vi-sinh"
    },
    {
        value: 0,
        label: "tư vấn giám sát trưởng",
        alias: "tu-van-giam-sat-truong"
    },
    {
        value: 0,
        label: "tư vấn triển khai erp",
        alias: "tu-van-trien-khai-erp"
    },
    {
        value: 0,
        label: "nhân viên tư vấn tiếng anh",
        alias: "nhan-vien-tu-van-tieng-anh"
    },
    {
        value: 0,
        label: "chuyên gia tư vấn iso",
        alias: "chuyen-gia-tu-van-iso"
    },
    {
        value: 0,
        label: "nhân viên tư vấn pháp lý",
        alias: "nhan-vien-tu-van-phap-ly"
    },
    {
        value: 0,
        label: "tư vấn bảo hiểm nhân thọ",
        alias: "tu-van-bao-hiem-nhan-tho"
    },
    {
        value: 0,
        label: "tư vấn du học nhật bản",
        alias: "tu-van-du-hoc-nhat-ban"
    },
    {
        value: 0,
        label: "tư vấn nha khoa",
        alias: "tu-van-nha-khoa"
    },
    {
        value: 0,
        label: "tư vấn tâm lý học đường",
        alias: "tu-van-tam-ly-hoc-duong"
    },
    {
        value: 0,
        label: "bác sĩ tư vấn online",
        alias: "bac-si-tu-van-online"
    },
    {
        value: 0,
        label: "nhân viên tư vấn online tại nhà",
        alias: "nhan-vien-tu-van-online-tai-nha"
    },
    {
        value: 0,
        label: "họa sĩ vẽ áo dài",
        alias: "hoa-si-ve-ao-dai"
    },
    {
        value: 0,
        label: "họa sĩ vẽ phim hoạt hình",
        alias: "hoa-si-ve-phim-hoat-hinh"
    },
    {
        value: 0,
        label: "vẽ 3d tại nhà",
        alias: "ve-3d-tai-nha"
    },
    {
        value: 0,
        label: "vẽ solidworks tại nhà",
        alias: "ve-solidworks-tai-nha"
    },
    {
        value: 0,
        label: "thiết kế rập thời trang không cần kinh nghiệm",
        alias: "thiet-ke-rap-thoi-trang-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "thiết kế web bán thời gian",
        alias: "thiet-ke-web-ban-thoi-gian"
    },
    {
        value: 0,
        label: "thực tập thiết kế web",
        alias: "thuc-tap-thiet-ke-web"
    },
    {
        value: 0,
        label: "nhân viên ra mẫu rập",
        alias: "nhan-vien-ra-mau-rap"
    },
    {
        value: 0,
        label: "thiết kế rập bán thời gian",
        alias: "thiet-ke-rap-ban-thoi-gian"
    },
    {
        value: 0,
        label: "thiết kế rập gerber ngành may",
        alias: "thiet-ke-rap-gerber-nganh-may"
    },
    {
        value: 0,
        label: "thiết kế rập túi xách",
        alias: "thiet-ke-rap-tui-xach"
    },
    {
        value: 0,
        label: "nhân viên thiết kế đồ gỗ nội thất",
        alias: "nhan-vien-thiet-ke-do-go-noi-that"
    },
    {
        value: 0,
        label: "thiết kế khuôn đột dập",
        alias: "thiet-ke-khuon-dot-dap"
    },
    {
        value: 0,
        label: "thiết kế khuôn nhựa",
        alias: "thiet-ke-khuon-nhua"
    },
    {
        value: 0,
        label: "3ds max",
        alias: "3ds-max"
    },
    {
        value: 0,
        label: "họa sĩ chép tranh",
        alias: "hoa-si-chep-tranh"
    },
    {
        value: 0,
        label: "illustrator",
        alias: "illustrator"
    },
    {
        value: 0,
        label: "kỹ sư revit mep",
        alias: "ky-su-revit-mep"
    },
    {
        value: 0,
        label: "kỹ sư thiết kế máy",
        alias: "ky-su-thiet-ke-may"
    },
    {
        value: 0,
        label: "nhân viên autocad 2d không cần kinh nghiệm",
        alias: "nhan-vien-autocad-2d-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "thiết kế đồ họa không cần bằng cấp",
        alias: "thiet-ke-do-hoa-khong-can-bang-cap"
    },
    {
        value: 0,
        label: "nhân viên thiết kế corel",
        alias: "nhan-vien-thiet-ke-corel"
    },
    {
        value: 0,
        label: "nhân viên thiết kế nhôm kính",
        alias: "nhan-vien-thiet-ke-nhom-kinh"
    },
    {
        value: 0,
        label: "thiết kế biết tiếng nhật",
        alias: "thiet-ke-biet-tieng-nhat"
    },
    {
        value: 0,
        label: "thiết kế cơ khí bán thời gian",
        alias: "thiet-ke-co-khi-ban-thoi-gian"
    },
    {
        value: 0,
        label: "thiết kế đồ họa không cần kinh nghiệm",
        alias: "thiet-ke-do-hoa-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "thư ký iso",
        alias: "thu-ky-iso"
    },
    {
        value: 0,
        label: "thư ký không cần kinh nghiệm",
        alias: "thu-ky-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "thư ký kỹ thuật",
        alias: "thu-ky-ky-thuat"
    },
    {
        value: 0,
        label: "thư ký tiếng hàn",
        alias: "thu-ky-tieng-han"
    },
    {
        value: 0,
        label: "thư ký trường quay",
        alias: "thu-ky-truong-quay"
    },
    {
        value: 0,
        label: "trợ lý ảo",
        alias: "tro-ly-ao"
    },
    {
        value: 0,
        label: "trợ lý cá nhân",
        alias: "tro-ly-ca-nhan"
    },
    {
        value: 0,
        label: "trợ lý chủ tịch hội đồng quản trị",
        alias: "tro-ly-chu-tich-hoi-dong-quan-tri"
    },
    {
        value: 0,
        label: "trợ lý chụp ảnh",
        alias: "tro-ly-chup-anh"
    },
    {
        value: 0,
        label: "trợ lý công chứng viên",
        alias: "tro-ly-cong-chung-vien"
    },
    {
        value: 0,
        label: "trợ lý giám đốc không cần kinh nghiệm",
        alias: "tro-ly-giam-doc-khong-can-kinh-nghiem"
    },
    {
        value: 0,
        label: "trợ lý kỹ sư trưởng",
        alias: "tro-ly-ky-su-truong"
    },
    {
        value: 0,
        label: "trợ lý nghiên cứu",
        alias: "tro-ly-nghien-cuu"
    },
    {
        value: 0,
        label: "trợ lý nha khoa",
        alias: "tro-ly-nha-khoa"
    },
    {
        value: 0,
        label: "trợ lý nhãn hàng",
        alias: "tro-ly-nhan-hang"
    },
    {
        value: 0,
        label: "trợ lý quản lý tòa nhà",
        alias: "tro-ly-quan-ly-toa-nha"
    },
    {
        value: 0,
        label: "trợ lý stylist",
        alias: "tro-ly-stylist"
    },
    {
        value: 0,
        label: "trợ lý thu mua",
        alias: "tro-ly-thu-mua"
    },
    {
        value: 0,
        label: "trợ lý xuất nhập khẩu",
        alias: "tro-ly-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "lái máy ủi",
        alias: "lai-may-ui"
    },
    {
        value: 0,
        label: "lái xe buýt",
        alias: "lai-xe-buyt"
    },
    {
        value: 0,
        label: "lái xe đưa đón học sinh",
        alias: "lai-xe-dua-don-hoc-sinh"
    },
    {
        value: 0,
        label: "lái xe cẩu tự hành",
        alias: "lai-xe-cau-tu-hanh"
    },
    {
        value: 0,
        label: "tài xế biết tiếng hoa",
        alias: "tai-xe-biet-tieng-hoa"
    },
    {
        value: 0,
        label: "lái xe tuyến cố định",
        alias: "lai-xe-tuyen-co-dinh"
    },
    {
        value: 0,
        label: "tài xế lái xe cấp cứu",
        alias: "tai-xe-lai-xe-cap-cuu"
    },
    {
        value: 0,
        label: "giám sát vận tải",
        alias: "giam-sat-van-tai"
    },
    {
        value: 0,
        label: "lái xe 3 chân",
        alias: "lai-xe-3-chan"
    },
    {
        value: 0,
        label: "lái xe cuối tuần",
        alias: "lai-xe-cuoi-tuan"
    },
    {
        value: 0,
        label: "phụ xe cẩu",
        alias: "phu-xe-cau"
    },
    {
        value: 0,
        label: "quản lý vận tải",
        alias: "quan-ly-van-tai"
    },
    {
        value: 0,
        label: "lái máy san",
        alias: "lai-may-san"
    },
    {
        value: 0,
        label: "lái xe bê tông",
        alias: "lai-xe-be-tong"
    },
    {
        value: 0,
        label: "giáo viên dạy thực hành lái xe",
        alias: "giao-vien-day-thuc-hanh-lai-xe"
    },
    {
        value: 0,
        label: "thợ phụ máy xúc",
        alias: "tho-phu-may-xuc"
    },
    {
        value: 0,
        label: "giáo viên dạy thực hành lái xe ô tô",
        alias: "giao-vien-day-thuc-hanh-lai-xe-o-to"
    },
    {
        value: 0,
        label: "lái xe bơm bê tông",
        alias: "lai-xe-bom-be-tong"
    },
    {
        value: 0,
        label: "lái xe cho đại sứ quán",
        alias: "lai-xe-cho-dai-su-quan"
    },
    {
        value: 0,
        label: "phụ xe bốc hàng",
        alias: "phu-xe-boc-hang"
    },
    {
        value: 0,
        label: "lái xe tải 500kg",
        alias: "lai-xe-tai-500kg"
    },
    {
        value: 0,
        label: "tài xế xe lu rung",
        alias: "tai-xe-xe-lu-rung"
    },
    {
        value: 0,
        label: "lái xe 4 chân",
        alias: "lai-xe-4-chan"
    },
    {
        value: 0,
        label: "lái xe 29 chỗ",
        alias: "lai-xe-29-cho"
    },
    {
        value: 0,
        label: "tài xế b2 ca đêm",
        alias: "tai-xe-b2-ca-dem"
    },
    {
        value: 0,
        label: "y sĩ đông y",
        alias: "y-si-dong-y"
    },
    {
        value: 0,
        label: "thực tập sinh công nghệ thông tin",
        alias: "thuc-tap-sinh-cong-nghe-thong-tin"
    },
    {
        value: 0,
        label: "tổ chức phi chính phủ",
        alias: "to-chuc-phi-chinh-phu"
    },
    {
        value: 0,
        label: "báo chí truyền thông",
        alias: "bao-chi-truyen-thong"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh bảo hiểm",
        alias: "nhan-vien-kinh-doanh-bao-hiem"
    },
    {
        value: 0,
        label: "bảo trì điện",
        alias: "bao-tri-dien"
    },
    {
        value: 0,
        label: "bảo trì tòa nhà",
        alias: "bao-tri-toa-nha"
    },
    {
        value: 0,
        label: "bảo trì thang máy",
        alias: "bao-tri-thang-may"
    },
    {
        value: 0,
        label: "kỹ sư bảo trì",
        alias: "ky-su-bao-tri"
    },
    {
        value: 0,
        label: "nhân viên bảo trì",
        alias: "nhan-vien-bao-tri"
    },
    {
        value: 0,
        label: "nhân viên bảo trì điện",
        alias: "nhan-vien-bao-tri-dien"
    },
    {
        value: 0,
        label: "trưởng phòng bảo trì",
        alias: "truong-phong-bao-tri"
    },
    {
        value: 0,
        label: "nhân viên kỹ thuật bảo trì",
        alias: "nhan-vien-ky-thuat-bao-tri"
    },
    {
        value: 0,
        label: "sửa chữa ô tô",
        alias: "sua-chua-o-to"
    },
    {
        value: 0,
        label: "sửa chữa máy tính",
        alias: "sua-chua-may-tinh"
    },
    {
        value: 0,
        label: "sửa chữa điện thoại",
        alias: "sua-chua-dien-thoai"
    },
    {
        value: 0,
        label: "sửa chữa điện thoại",
        alias: "sua-chua-dien-thoai"
    },
    {
        value: 0,
        label: "thực tập sinh bất động sản",
        alias: "thuc-tap-sinh-bat-dong-san"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh bất động sản",
        alias: "nhan-vien-kinh-doanh-bat-dong-san"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh hóa chất",
        alias: "nhan-vien-kinh-doanh-hoa-chat"
    },
    {
        value: 0,
        label: "chuyên viên dịch vụ khách hàng",
        alias: "chuyen-vien-dich-vu-khach-hang"
    },
    {
        value: 0,
        label: "kỹ sư điện tử viễn thông",
        alias: "ky-su-dien-tu-vien-thong"
    },
    {
        value: 0,
        label: "thực tập sinh điện tử viễn thông",
        alias: "thuc-tap-sinh-dien-tu-vien-thong"
    },
    {
        value: 0,
        label: "tiếp viên hàng không",
        alias: "tiep-vien-hang-khong"
    },
    {
        value: 0,
        label: "thực tập sinh hành chính văn phòng",
        alias: "thuc-tap-sinh-hanh-chinh-van-phong"
    },
    {
        value: 0,
        label: "an ninh mạng",
        alias: "an-ninh-mang"
    },
    {
        value: 0,
        label: "nhân viên quản trị mạng",
        alias: "nhan-vien-quan-tri-mang"
    },
    {
        value: 0,
        label: "kế toán tổng hợp",
        alias: "ke-toan-tong-hop"
    },
    {
        value: 0,
        label: "kế toán bán hàng",
        alias: "ke-toan-ban-hang"
    },
    {
        value: 0,
        label: "kế toán thanh toán",
        alias: "ke-toan-thanh-toan"
    },
    {
        value: 0,
        label: "kế toán công nợ",
        alias: "ke-toan-cong-no"
    },
    {
        value: 0,
        label: "thực tập kiểm toán",
        alias: "thuc-tap-kiem-toan"
    },
    {
        value: 0,
        label: "trợ lý kiểm toán viên",
        alias: "tro-ly-kiem-toan-vien"
    },
    {
        value: 0,
        label: "kế toán viên",
        alias: "ke-toan-vien"
    },
    {
        value: 0,
        label: "lễ tân khách sạn",
        alias: "le-tan-khach-san"
    },
    {
        value: 0,
        label: "quản lý khách sạn",
        alias: "quan-ly-khach-san"
    },
    {
        value: 0,
        label: "nhân viên khách sạn",
        alias: "nhan-vien-khach-san"
    },
    {
        value: 0,
        label: "nhân viên phục vụ nhà hàng",
        alias: "nhan-vien-phuc-vu-nha-hang"
    },
    {
        value: 0,
        label: "giám sát nhà hàng",
        alias: "giam-sat-nha-hang"
    },
    {
        value: 0,
        label: "lễ tân nhà hàng",
        alias: "le-tan-nha-hang"
    },
    {
        value: 0,
        label: "quản lý nhà hàng",
        alias: "quan-ly-nha-hang"
    },
    {
        value: 0,
        label: "nhân viên nhà hàng",
        alias: "nhan-vien-nha-hang"
    },
    {
        value: 0,
        label: "thực tập sinh kiến trúc",
        alias: "thuc-tap-sinh-kien-truc"
    },
    {
        value: 0,
        label: "logistics intern",
        alias: "logistics-intern"
    },
    {
        value: 0,
        label: "bee logistics",
        alias: "bee-logistics"
    },
    {
        value: 0,
        label: "ali logistics",
        alias: "ali-logistics"
    },
    {
        value: 0,
        label: "sale logistics",
        alias: "sale-logistics"
    },
    {
        value: 0,
        label: "thực tập logistics",
        alias: "thuc-tap-logistics"
    },
    {
        value: 0,
        label: "nhân viên logistics",
        alias: "nhan-vien-logistics"
    },
    {
        value: 0,
        label: "kinh doanh logistics",
        alias: "kinh-doanh-logistics"
    },
    {
        value: 0,
        label: "thực tập sinh logistics",
        alias: "thuc-tap-sinh-logistics"
    },
    {
        value: 0,
        label: "luật pháp lý",
        alias: "luat-phap-ly"
    },
    {
        value: 0,
        label: "trợ lý luật sư",
        alias: "tro-ly-luat-su"
    },
    {
        value: 0,
        label: "thực tập sinh pháp lý",
        alias: "thuc-tap-sinh-phap-ly"
    },
    {
        value: 0,
        label: "hành chính pháp lý",
        alias: "hanh-chinh-phap-ly"
    },
    {
        value: 0,
        label: "tư vấn pháp lý",
        alias: "tu-van-phap-ly"
    },
    {
        value: 0,
        label: "thực tập sinh ngành luật",
        alias: "thuc-tap-sinh-nganh-luat"
    },
    {
        value: 0,
        label: "thư viện pháp luật",
        alias: "thu-vien-phap-luat"
    },
    {
        value: 0,
        label: "công ty luật",
        alias: "cong-ty-luat"
    },
    {
        value: 0,
        label: "giám sát an toàn lao động",
        alias: "giam-sat-an-toan-lao-dong"
    },
    {
        value: 0,
        label: "nhân viên an toàn lao động",
        alias: "nhan-vien-an-toan-lao-dong"
    },
    {
        value: 0,
        label: "xuất nhập khẩu tiếng trung",
        alias: "xuat-nhap-khau-tieng-trung"
    },
    {
        value: 0,
        label: "xuất nhập khẩu logistics",
        alias: "xuat-nhap-khau-logistics"
    },
    {
        value: 0,
        label: "thực tập sinh xuất nhập khẩu",
        alias: "thuc-tap-sinh-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "sale xuất nhập khẩu",
        alias: "sale-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "kinh doanh xuất nhập khẩu",
        alias: "kinh-doanh-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "giám sát xây dựng",
        alias: "giam-sat-xay-dung"
    },
    {
        value: 0,
        label: "kế toán xây dựng",
        alias: "ke-toan-xay-dung"
    },
    {
        value: 0,
        label: "thực tập sinh kho vận",
        alias: "thuc-tap-sinh-kho-van"
    },
    {
        value: 0,
        label: "trưởng phòng kho vận",
        alias: "truong-phong-kho-van"
    },
    {
        value: 0,
        label: "nhân viên kho vận",
        alias: "nhan-vien-kho-van"
    },
    {
        value: 0,
        label: "nhân viên điều phối vận tải",
        alias: "nhan-vien-dieu-phoi-van-tai"
    },
    {
        value: 0,
        label: "điều hành vận tải",
        alias: "dieu-hanh-van-tai"
    },
    {
        value: 0,
        label: "điều phối vận tải",
        alias: "dieu-phoi-van-tai"
    },
    {
        value: 0,
        label: "nhân viên tổ chức sự kiện",
        alias: "nhan-vien-to-chuc-su-kien"
    },
    {
        value: 0,
        label: "chuyên viên tổ chức sự kiện",
        alias: "chuyen-vien-to-chuc-su-kien"
    },
    {
        value: 0,
        label: "thực tập sinh tổ chức sự kiện",
        alias: "thuc-tap-sinh-to-chuc-su-kien"
    },
    {
        value: 0,
        label: "nhân viên qc thực phẩm",
        alias: "nhan-vien-qc-thuc-pham"
    },
    {
        value: 0,
        label: "qa thực phẩm",
        alias: "qa-thuc-pham"
    },
    {
        value: 0,
        label: "r&d thực phẩm",
        alias: "rd-thuc-pham"
    },
    {
        value: 0,
        label: "sale thực phẩm",
        alias: "sale-thuc-pham"
    },
    {
        value: 0,
        label: "qa qc thực phẩm",
        alias: "qa-qc-thuc-pham"
    },
    {
        value: 0,
        label: "công nghệ thực phẩm",
        alias: "cong-nghe-thuc-pham"
    },
    {
        value: 0,
        label: "thiết kế thời trang",
        alias: "thiet-ke-thoi-trang"
    },
    {
        value: 0,
        label: "nhân viên thiết kế thời trang",
        alias: "nhan-vien-thiet-ke-thoi-trang"
    },
    {
        value: 0,
        label: "nhân viên thiết kế nội thất",
        alias: "nhan-vien-thiet-ke-noi-that"
    },
    {
        value: 0,
        label: "thực tập sinh thiết kế nội thất",
        alias: "thuc-tap-sinh-thiet-ke-noi-that"
    },
    {
        value: 0,
        label: "kỹ sư nông nghiệp",
        alias: "ky-su-nong-nghiep"
    },
    {
        value: 0,
        label: "quản lý chất lượng cuộc gọi",
        alias: "quan-ly-chat-luong-cuoc-goi"
    },
    {
        value: 0,
        label: "nhân sự tiếng trung",
        alias: "nhan-su-tieng-trung"
    },
    {
        value: 0,
        label: "đối tác nhân sự",
        alias: "doi-tac-nhan-su"
    },
    {
        value: 0,
        label: "quản lý nhân sự",
        alias: "quan-ly-nhan-su"
    },
    {
        value: 0,
        label: "kỹ sư môi trường",
        alias: "ky-su-moi-truong"
    },
    {
        value: 0,
        label: "nhân viên môi trường",
        alias: "nhan-vien-moi-truong"
    },
    {
        value: 0,
        label: "lễ tân spa",
        alias: "le-tan-spa"
    },
    {
        value: 0,
        label: "tư vấn spa",
        alias: "tu-van-spa"
    },
    {
        value: 0,
        label: "quản lý spa",
        alias: "quan-ly-spa"
    },
    {
        value: 0,
        label: "nhân viên spa",
        alias: "nhan-vien-spa"
    },
    {
        value: 0,
        label: "kỹ thuật viên spa",
        alias: "ky-thuat-vien-spa"
    },
    {
        value: 0,
        label: "nhân viên lễ tân spa",
        alias: "nhan-vien-le-tan-spa"
    },
    {
        value: 0,
        label: "trợ lý sản xuất",
        alias: "tro-ly-san-xuat"
    },
    {
        value: 0,
        label: "tổ chức sản xuất",
        alias: "to-chuc-san-xuat"
    },
    {
        value: 0,
        label: "giám đốc sản xuất",
        alias: "giam-doc-san-xuat"
    },
    {
        value: 0,
        label: "giám sát sản xuất",
        alias: "giam-sat-san-xuat"
    },
    {
        value: 0,
        label: "biên dịch viên",
        alias: "bien-dich-vien"
    },
    {
        value: 0,
        label: "thực tập sinh biên dịch",
        alias: "thuc-tap-sinh-bien-dich"
    },
    {
        value: 0,
        label: "thực tập sinh chứng khoán",
        alias: "thuc-tap-sinh-chung-khoan"
    },
    {
        value: 0,
        label: "công ty chứng khoán",
        alias: "cong-ty-chung-khoan"
    },
    {
        value: 0,
        label: "cổng vàng",
        alias: "cong-vang"
    },
    {
        value: 0,
        label: "người bạn vàng",
        alias: "nguoi-ban-vang"
    },
    {
        value: 0,
        label: "kỹ sư cơ khí chế tạo máy",
        alias: "ky-su-co-khi-che-tao-may"
    },
    {
        value: 0,
        label: "thiết kế cơ khí",
        alias: "thiet-ke-co-khi"
    },
    {
        value: 0,
        label: "thực tập cơ khí",
        alias: "thuc-tap-co-khi"
    },
    {
        value: 0,
        label: "kỹ thuật cơ khí",
        alias: "ky-thuat-co-khi"
    },
    {
        value: 0,
        label: "nhân viên cơ khí",
        alias: "nhan-vien-co-khi"
    },
    {
        value: 0,
        label: "kỹ sư thiết kế cơ khí",
        alias: "ky-su-thiet-ke-co-khi"
    },
    {
        value: 0,
        label: "nhân viên thiết kế cơ khí",
        alias: "nhan-vien-thiet-ke-co-khi"
    },
    {
        value: 0,
        label: "điện tự động hóa",
        alias: "dien-tu-dong-hoa"
    },
    {
        value: 0,
        label: "kỹ sư tự động hóa",
        alias: "ky-su-tu-dong-hoa"
    },
    {
        value: 0,
        label: "kỹ sư điện tự động hóa",
        alias: "ky-su-dien-tu-dong-hoa"
    },
    {
        value: 0,
        label: "thực tập sinh tự động hóa",
        alias: "thuc-tap-sinh-tu-dong-hoa"
    },
    {
        value: 0,
        label: "sale du lịch",
        alias: "sale-du-lich"
    },
    {
        value: 0,
        label: "tour du lịch",
        alias: "tour-du-lich"
    },
    {
        value: 0,
        label: "công ty du lịch",
        alias: "cong-ty-du-lich"
    },
    {
        value: 0,
        label: "thực tập du lịch",
        alias: "thuc-tap-du-lich"
    },
    {
        value: 0,
        label: "nhân viên du lịch",
        alias: "nhan-vien-du-lich"
    },
    {
        value: 0,
        label: "điều hành du lịch",
        alias: "dieu-hanh-du-lich"
    },
    {
        value: 0,
        label: "hướng dẫn viên du lịch",
        alias: "huong-dan-vien-du-lich"
    },
    {
        value: 0,
        label: "nhân viên kinh doanh du lịch",
        alias: "nhan-vien-kinh-doanh-du-lich"
    },
    {
        value: 0,
        label: "kỹ sư dự án",
        alias: "ky-su-du-an"
    },
    {
        value: 0,
        label: "trợ lý dự án",
        alias: "tro-ly-du-an"
    },
    {
        value: 0,
        label: "thư ký dự án",
        alias: "thu-ky-du-an"
    },
    {
        value: 0,
        label: "hỗ trợ dự án",
        alias: "ho-tro-du-an"
    },
    {
        value: 0,
        label: "quản lý dự án",
        alias: "quan-ly-du-an"
    },
    {
        value: 0,
        label: "kế toán dự án",
        alias: "ke-toan-du-an"
    },
    {
        value: 0,
        label: "pháp lý dự án",
        alias: "phap-ly-du-an"
    },
    {
        value: 0,
        label: "quản lý dự án xây dựng",
        alias: "quan-ly-du-an-xay-dung"
    },
    {
        value: 0,
        label: "giám đốc dự án",
        alias: "giam-doc-du-an"
    },
    {
        value: 0,
        label: "thiết kế đồ họa designer",
        alias: "thiet-ke-do-hoa-designer"
    },
    {
        value: 0,
        label: "thiết kế đồ họa",
        alias: "thiet-ke-do-hoa"
    },
    {
        value: 0,
        label: "thiết kế đồ họa designer online",
        alias: "thiet-ke-do-hoa-designer-online"
    },
    {
        value: 0,
        label: "thiết kế đồ họa 3d",
        alias: "thiet-ke-do-hoa-3d"
    },
    {
        value: 0,
        label: "nhân viên thiết kế đồ họa",
        alias: "nhan-vien-thiet-ke-do-hoa"
    },
    {
        value: 0,
        label: "thực tập sinh thiết kế đồ họa",
        alias: "thuc-tap-sinh-thiet-ke-do-hoa"
    },
    {
        value: 0,
        label: "thực tập sinh thiết kế đồ họa designer",
        alias: "thuc-tap-sinh-thiet-ke-do-hoa-designer"
    },
    {
        value: 0,
        label: "dược mỹ phẩm",
        alias: "duoc-my-pham"
    },
    {
        value: 0,
        label: "sale mỹ phẩm",
        alias: "sale-my-pham"
    },
    {
        value: 0,
        label: "nhân viên bán hàng trang sức",
        alias: "nhan-vien-ban-hang-trang-suc"
    },
    {
        value: 0,
        label: "y tế công cộng",
        alias: "y-te-cong-cong"
    },
    {
        value: 0,
        label: "y tế học đường",
        alias: "y-te-hoc-duong"
    },
    {
        value: 0,
        label: "thiết bị y tế",
        alias: "thiet-bi-y-te"
    },
    {
        value: 0,
        label: "nhân viên y tế",
        alias: "nhan-vien-y-te"
    },
    {
        value: 0,
        label: "kỹ sư thiết bị y tế",
        alias: "ky-su-thiet-bi-y-te"
    },
    {
        value: 0,
        label: "dược phẩm",
        alias: "duoc-pham"
    },
    {
        value: 0,
        label: "dược mỹ phẩm",
        alias: "duoc-my-pham"
    },
    {
        value: 0,
        label: "dược sĩ bán hàng",
        alias: "duoc-si-ban-hang"
    },
    {
        value: 0,
        label: "dược sĩ bệnh viện",
        alias: "duoc-si-benh-vien"
    },
    {
        value: 0,
        label: "dược sĩ tư vấn",
        alias: "duoc-si-tu-van"
    },
    {
        value: 0,
        label: "dược hậu giang",
        alias: "duoc-hau-giang"
    },
    {
        value: 0,
        label: "dược sĩ phòng khám",
        alias: "duoc-si-phong-kham"
    },
    {
        value: 0,
        label: "tâm dược",
        alias: "tam-duoc"
    },
    {
        value: 0,
        label: "thư ký kinh doanh",
        alias: "thu-ky-kinh-doanh"
    },
    {
        value: 0,
        label: "thư ký sản xuất",
        alias: "thu-ky-san-xuat"
    },
    {
        value: 0,
        label: "trợ lý kinh doanh",
        alias: "tro-ly-kinh-doanh"
    },
    {
        value: 0,
        label: "trợ lý marketing",
        alias: "tro-ly-marketing"
    },
    {
        value: 0,
        label: "tài chính ngân hàng",
        alias: "tai-chinh-ngan-hang"
    },
    {
        value: 0,
        label: "tài chính doanh nghiệp",
        alias: "tai-chinh-doanh-nghiep"
    },
    {
        value: 0,
        label: "tài chính kế toán",
        alias: "tai-chinh-ke-toan"
    },
    {
        value: 0,
        label: "tài chính đầu tư",
        alias: "tai-chinh-dau-tu"
    },
    {
        value: 0,
        label: "tư vấn tài chính",
        alias: "tu-van-tai-chinh"
    },
    {
        value: 0,
        label: "công ty tài chính",
        alias: "cong-ty-tai-chinh"
    },
    {
        value: 0,
        label: "kế toán tài chính",
        alias: "ke-toan-tai-chinh"
    },
    {
        value: 0,
        label: "giám đốc tài chính",
        alias: "giam-doc-tai-chinh"
    },
    {
        value: 0,
        label: "nhân viên tài chính",
        alias: "nhan-vien-tai-chinh"
    },
    {
        value: 0,
        label: "tư vấn đầu tư",
        alias: "tu-van-dau-tu"
    },
    {
        value: 0,
        label: "phân tích đầu tư",
        alias: "phan-tich-dau-tu"
    },
    {
        value: 0,
        label: "chuyên viên tư vấn đầu tư",
        alias: "chuyen-vien-tu-van-dau-tu"
    },
    {
        value: 0,
        label: "nhân viên ngân hàng",
        alias: "nhan-vien-ngan-hang"
    },
    {
        value: 0,
        label: "thực tập ngân hàng",
        alias: "thuc-tap-ngan-hang"
    },
    {
        value: 0,
        label: "tín dụng ngân hàng",
        alias: "tin-dung-ngan-hang"
    },
    {
        value: 0,
        label: "kế toán ngân hàng",
        alias: "ke-toan-ngan-hang"
    },
    {
        value: 0,
        label: "ngân hàng vib",
        alias: "ngan-hang-vib"
    },
    {
        value: 0,
        label: "ngân hàng quân đội",
        alias: "ngan-hang-quan-doi"
    },
    {
        value: 0,
        label: "ngân hàng shb",
        alias: "ngan-hang-shb"
    },
    {
        value: 0,
        label: "ngân hàng tmcp việt nam thịnh vượng",
        alias: "ngan-hang-tmcp-viet-nam-thinh-vuong"
    },
    {
        value: 0,
        label: "marketing online",
        alias: "marketing-online"
    },
    {
        value: 0,
        label: "marketing manager",
        alias: "marketing-manager"
    },
    {
        value: 0,
        label: "marketing executive",
        alias: "marketing-executive"
    },
    {
        value: 0,
        label: "marketing intern",
        alias: "marketing-intern"
    },
    {
        value: 0,
        label: "marketing specialist",
        alias: "marketing-specialist"
    },
    {
        value: 0,
        label: "marketing planner",
        alias: "marketing-planner"
    },
    {
        value: 0,
        label: "marketing leader",
        alias: "marketing-leader"
    },
    {
        value: 0,
        label: "marketing facebook",
        alias: "marketing-facebook"
    },
    {
        value: 0,
        label: "marketing director",
        alias: "marketing-director"
    },
    {
        value: 0,
        label: "truyền thông thương hiệu",
        alias: "truyen-thong-thuong-hieu"
    },
    {
        value: 0,
        label: "truyền thông marketing",
        alias: "truyen-thong-marketing"
    },
    {
        value: 0,
        label: "truyền thông đa phương tiện",
        alias: "truyen-thong-da-phuong-tien"
    },
    {
        value: 0,
        label: "truyền thông báo chí",
        alias: "truyen-thong-bao-chi"
    },
    {
        value: 0,
        label: "công ty truyền thông",
        alias: "cong-ty-truyen-thong"
    },
    {
        value: 0,
        label: "thực tập truyền thông",
        alias: "thuc-tap-truyen-thong"
    },
    {
        value: 0,
        label: "chạy quảng cáo",
        alias: "chay-quang-cao"
    },
    {
        value: 0,
        label: "nhân viên quảng cáo",
        alias: "nhan-vien-quang-cao"
    },
    {
        value: 0,
        label: "nhân viên chạy quảng cáo",
        alias: "nhan-vien-chay-quang-cao"
    },
    {
        value: 0,
        label: "kinh doanh quốc tế",
        alias: "kinh-doanh-quoc-te"
    },
    {
        value: 0,
        label: "kinh doanh nội thất",
        alias: "kinh-doanh-noi-that"
    },
    {
        value: 0,
        label: "kinh doanh dự án",
        alias: "kinh-doanh-du-an"
    },
    {
        value: 0,
        label: "kinh doanh phần mềm",
        alias: "kinh-doanh-phan-mem"
    },
    {
        value: 0,
        label: "kinh doanh online",
        alias: "kinh-doanh-online"
    },
    {
        value: 0,
        label: "kinh doanh xuất khẩu",
        alias: "kinh-doanh-xuat-khau"
    },
    {
        value: 0,
        label: "kinh doanh ô tô",
        alias: "kinh-doanh-o-to"
    },
    {
        value: 0,
        label: "kinh doanh thị trường",
        alias: "kinh-doanh-thi-truong"
    },
    {
        value: 0,
        label: "kinh doanh xuất nhập khẩu",
        alias: "kinh-doanh-xuat-nhap-khau"
    },
    {
        value: 0,
        label: "bán hàng online",
        alias: "ban-hang-online"
    },
    {
        value: 0,
        label: "bán hàng kỹ thuật",
        alias: "ban-hang-ky-thuat"
    },
    {
        value: 0,
        label: "bán hàng thời trang",
        alias: "ban-hang-thoi-trang"
    },
    {
        value: 0,
        label: "bán hàng showroom",
        alias: "ban-hang-showroom"
    },
    {
        value: 0,
        label: "bán hàng qua điện thoại",
        alias: "ban-hang-qua-dien-thoai"
    },
    {
        value: 0,
        label: "bán hàng part time",
        alias: "ban-hang-part-time"
    },
    {
        value: 0,
        label: "kỹ sư bán hàng",
        alias: "ky-su-ban-hang"
    },
    {
        value: 0,
        label: "tư vấn bán hàng",
        alias: "tu-van-ban-hang"
    },
    {
        value: 0,
        label: "kế toán bán hàng",
        alias: "ke-toan-ban-hang"
    },
    {
        value: 0,
        label: "giáo dục đặc biệt",
        alias: "giao-duc-dac-biet"
    },
    {
        value: 0,
        label: "tư vấn giáo dục",
        alias: "tu-van-giao-duc"
    },
    {
        value: 0,
        label: "tổ chức giáo dục fpt",
        alias: "to-chuc-giao-duc-fpt"
    },
    {
        value: 0,
        label: "quản lý giáo dục",
        alias: "quan-ly-giao-duc"
    },
    {
        value: 0,
        label: "đào tạo nội bộ",
        alias: "dao-tao-noi-bo"
    },
    {
        value: 0,
        label: "trợ lý đào tạo",
        alias: "tro-ly-dao-tao"
    },
    {
        value: 0,
        label: "quản lý đào tạo",
        alias: "quan-ly-dao-tao"
    },
    {
        value: 0,
        label: "giám đốc đào tạo",
        alias: "giam-doc-dao-tao"
    },
    {
        value: 0,
        label: "nhân viên đào tạo",
        alias: "nhan-vien-dao-tao"
    },
    {
        value: 0,
        label: "tuyển dụng đào tạo",
        alias: "tuyen-dung-dao-tao"
    },
    {
        value: 0,
        label: "chuyên viên đào tạo",
        alias: "chuyen-vien-dao-tao"
    },
    {
        value: 0,
        label: "trưởng nhóm đào tạo",
        alias: "truong-nhom-dao-tao"
    },
    {
        value: 0,
        label: "điện tử viễn thông",
        alias: "dien-tu-vien-thong"
    },
    {
        value: 0,
        label: "điện tự động hóa",
        alias: "dien-tu-dong-hoa"
    },
    {
        value: 0,
        label: "cơ điện tử",
        alias: "co-dien-tu"
    },
    {
        value: 0,
        label: "kỹ sư điện tử",
        alias: "ky-su-dien-tu"
    },
    {
        value: 0,
        label: "kỹ sư điện tử viễn thông",
        alias: "ky-su-dien-tu-vien-thong"
    },
    {
        value: 0,
        label: "kỹ sư điện tự động hóa",
        alias: "ky-su-dien-tu-dong-hoa"
    },
    {
        value: 0,
        label: "kỹ sư điện tự động",
        alias: "ky-su-dien-tu-dong"
    },
    {
        value: 0,
        label: "kỹ sư cơ điện tử",
        alias: "ky-su-co-dien-tu"
    },
    {
        value: 0,
        label: "điện điện tử",
        alias: "dien-dien-tu"
    },
    {
        value: 0,
        label: "điện nhẹ",
        alias: "dien-nhe"
    },
    {
        value: 0,
        label: "điện công nghiệp",
        alias: "dien-cong-nghiep"
    },
    {
        value: 0,
        label: "điện máy xanh",
        alias: "dien-may-xanh"
    },
    {
        value: 0,
        label: "điện máy chợ lớn",
        alias: "dien-may-cho-lon"
    },
]
function convertToUrl(name) {
    return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase();
}
function getCategoryIdByName(cat_name) {
    const category = jobList.find(category => category.cat_name === cat_name);
    return category ? category.cat_id : null;
}

function getCityNameById(id) {
    const city = cityList.find(city => city.cit_id === id);
    return city ? city.cit_name : null;
}
$('#cit_id').CustomSelect({
    placeholder: 'Chọn địa điểm',
    searchPlaceholder: 'Tìm kiếm...'
});
$('#exp_id').CustomSelect({
    placeholder: 'Chọn kinh nghiệm',
    searchPlaceholder: 'Tìm kiếm...'
});
$('#sal_id').CustomSelect({
    placeholder: 'Chọn mức lương',
    searchPlaceholder: 'Tìm kiếm...'
});
$('#district').CustomSelect({
    placeholder: 'Chọn quận huyện',
    searchPlaceholder: 'Tìm kiếm...'
});
$('#fomati').CustomSelect({
    placeholder: 'Chọn hình thức làm việc',
    searchPlaceholder: 'Tìm kiếm...'
});
$('#lever').CustomSelect({
    placeholder: 'Chọn cấp độ',
    searchPlaceholder: 'Tìm kiếm...'
});
$('#edu').CustomSelect({
    placeholder: 'Chọn học vấn',
    searchPlaceholder: 'Tìm kiếm...'
});
$('#cit_id').change(function () {
    var id = parseInt($(this).val());
    if (isNaN(id) || id === 0) {
        $('#district').empty();
        $('#district').trigger('update');
        return;
    }
    $.ajax({
        url: '/api/getDistrict',
        method: 'POST',
        data: { id: id },
        success: function (response) {
            if (response.district.length > 0) {
                $('#district').empty();
                $('#district').append('<option value="">Tất cả quận huyện</option>');
                response.district.forEach(function (city) {
                    $('#district').append('<option value="' + city.cit_id + '">' + city.cit_name + '</option>');
                });

                $('#district').trigger('update');

            }
        },
        error: function (err) {
            console.error('Error:', err);
        }
    });
});
$(document).ready(function () {
    const $select = $('#cit_id');

    cityList.forEach(city => {
        const $option = $('<option>', {
            value: city.cit_id,
            text: city.cit_name
        });
        $select.append($option);
    });
    $('#cit_id').trigger('update');
});
$(document).ready(function () {
    $('#s_key').focus(function () {
        $('.search-remind').addClass('active');
    });
    $(document).click(function (event) {
        var target = $(event.target);
        if (!target.closest('#s_key').length && !target.closest('.search-remind').length) {
            $('.search-remind').removeClass('active');
        }
    });
});

var cateItems = [];
jobList.forEach(function (category) {
    var item = '<li class="fw-500">' + category.cat_name + '</li>';
    cateItems.push(item);
    $('.remind-lis-box').append(item);
});

var tagItems = [];
data_tags.forEach(function (tag) {
    var item = '<li class="">' + tag.label + '</li>';
    tagItems.push(item);
});

function loadSearchHistory() {
    var searchKeywords = localStorage.getItem('searchKeywords');
    if (searchKeywords) {
        searchKeywords = JSON.parse(searchKeywords);
        searchKeywords.reverse();
        var $remindHisBox = $('.remind-his-box').empty();
        searchKeywords.forEach(function (keyword) {
            var item;
            if (cateItems.some(item => item.includes(keyword))) {
                item = '<li class="fw-500">' + keyword + '</li>';
            } else {
                item = '<li>' + keyword + '</li>';
            }
            $remindHisBox.append(item);
        });
    }
}

// Load search history initially
loadSearchHistory();

$('.remind-lis-box').on('click', 'li', function () {
    var text = $(this).text();
    $('#s_key').val(text);
    $('.search-remind').removeClass('active');
});

$('.remind-his-box').on('click', 'li', function () {
    var text = $(this).text();
    $('#s_key').val(text);
    $('.search-remind').removeClass('active');
});

$('#s_key').on('input', function () {
    var inputText = removeDiacritics($(this).val().toLowerCase());

    if (inputText === '') {
        // If input is empty, load search history
        loadSearchHistory();
        return;
    }

    var filteredCateItems = cateItems.filter(function (item) {
        var listItemText = removeDiacritics($(item).text().toLowerCase());
        return listItemText.includes(inputText);
    });

    var filteredTagItems = tagItems.filter(function (item) {
        var listItemText = removeDiacritics($(item).text().toLowerCase());
        return listItemText.includes(inputText);
    });

    var filteredItems = filteredCateItems.concat(filteredTagItems);
    var $remindHisBox = $('.remind-his-box').empty();

    filteredItems.forEach(function (item) {
        var $item = $(item);
        if ($item.hasClass('fw-500')) {
            $item.addClass('fw-500');
        }
        $remindHisBox.append($item);
    });

    $('.search-remind').addClass('active');
});

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

$('.search-res-tool').on('click', function () {
    if (!$('.adv_fil').is(':visible')) {
        $('.adv_fil').css('display', 'flex').hide().slideToggle(300);
    } else {
        $('.adv_fil').slideToggle(300);
    }
});
