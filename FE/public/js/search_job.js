
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

const data_tags2 = [{
    "_id": {
        "$oid": "66c693273c7168f1036eb8d0"
    },
    "tag_id": 1,
    "tag_name": "Chuyên viên kế toán",
    "tag_alias": "chuyen-vien-ke-toan",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8e0"
    },
    "tag_id": 2,
    "tag_name": "Trưởng kế toán",
    "tag_alias": "truong-ke-toan",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8e2"
    },
    "tag_id": 3,
    "tag_name": "Thực tập sinh kế toán",
    "tag_alias": "thuc-tap-sinh-ke-toan",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8e4"
    },
    "tag_id": 4,
    "tag_name": "Nhân viên kế toán",
    "tag_alias": "nhan-vien-ke-toan",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8e6"
    },
    "tag_id": 5,
    "tag_name": "Kế toán viên nội bộ",
    "tag_alias": "ke-toan-vien-noi-bo",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8e8"
    },
    "tag_id": 6,
    "tag_name": "Kế toán viên cao cấp",
    "tag_alias": "ke-toan-vien-cao-cap",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8ea"
    },
    "tag_id": 7,
    "tag_name": "Kế toán tổng hợp",
    "tag_alias": "ke-toan-tong-hop",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8ec"
    },
    "tag_id": 8,
    "tag_name": "Kế toán công chứng",
    "tag_alias": "ke-toan-cong-chung",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8ee"
    },
    "tag_id": 9,
    "tag_name": "Kế toán kho",
    "tag_alias": "ke-toan-kho",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8f0"
    },
    "tag_id": 10,
    "tag_name": "Kế toán bán hàng",
    "tag_alias": "ke-toan-ban-hang",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8f2"
    },
    "tag_id": 11,
    "tag_name": "Cộng tác viên kế toán",
    "tag_alias": "cong-tac-vien-ke-toan",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8f4"
    },
    "tag_id": 12,
    "tag_name": "Kế toán tài chính",
    "tag_alias": "ke-toan-tai-chinh",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8f6"
    },
    "tag_id": 13,
    "tag_name": "Kế toán viên thủ quỹ",
    "tag_alias": "ke-toan-vien-thu-quy",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8f8"
    },
    "tag_id": 14,
    "tag_name": "Kế toán thuế",
    "tag_alias": "ke-toan-thue",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8fa"
    },
    "tag_id": 15,
    "tag_name": "Kế toán xây dựng",
    "tag_alias": "ke-toan-xay-dung",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8fc"
    },
    "tag_id": 16,
    "tag_name": "Kế toán bảo hiểm",
    "tag_alias": "ke-toan-bao-hiem",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb8fe"
    },
    "tag_id": 17,
    "tag_name": "Kế toán bất động sản",
    "tag_alias": "ke-toan-bat-dong-san",
    "tag_parent": 1,
    "tag_index": 1,
    "tag_type": 1,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb900"
    },
    "tag_id": 18,
    "tag_name": "Kiểm toán viên ",
    "tag_alias": "kiem-toan-vien",
    "tag_parent": 2,
    "tag_index": 1,
    "tag_type": 2,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb902"
    },
    "tag_id": 19,
    "tag_name": "Kiểm toán trưởng",
    "tag_alias": "kiem-toan-truong",
    "tag_parent": 2,
    "tag_index": 1,
    "tag_type": 2,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb904"
    },
    "tag_id": 20,
    "tag_name": "Giám đốc kiểm toán",
    "tag_alias": "giam-doc-kiem-toan",
    "tag_parent": 2,
    "tag_index": 1,
    "tag_type": 2,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb906"
    },
    "tag_id": 21,
    "tag_name": "Giám đốc kiểm toán nội bộ",
    "tag_alias": "giam-doc-kiem-toan-noi-bo",
    "tag_parent": 2,
    "tag_index": 1,
    "tag_type": 2,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb908"
    },
    "tag_id": 22,
    "tag_name": "Kiểm toán viên nội bộ",
    "tag_alias": "kiem-toan-vien-noi-bo",
    "tag_parent": 2,
    "tag_index": 1,
    "tag_type": 2,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb90a"
    },
    "tag_id": 23,
    "tag_name": "Kiểm toán viên độc lập",
    "tag_alias": "kiem-toan-vien-doc-lap",
    "tag_parent": 2,
    "tag_index": 1,
    "tag_type": 2,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb90c"
    },
    "tag_id": 24,
    "tag_name": "Kiểm toán tài chính",
    "tag_alias": "kiem-toan-tai-chinh",
    "tag_parent": 2,
    "tag_index": 1,
    "tag_type": 2,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb90e"
    },
    "tag_id": 25,
    "tag_name": "Trợ lý hành chính",
    "tag_alias": "tro-ly-hanh-chinh",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb910"
    },
    "tag_id": 26,
    "tag_name": "Quản lý hành chính",
    "tag_alias": "quan-ly-hanh-chinh",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb912"
    },
    "tag_id": 27,
    "tag_name": "Điều phối viên hành chính",
    "tag_alias": "dieu-phoi-vien-hanh-chinh",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb914"
    },
    "tag_id": 28,
    "tag_name": "Nhân viên hành chính",
    "tag_alias": "nhan-vien-hanh-chinh",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb916"
    },
    "tag_id": 29,
    "tag_name": "Giám sát viên hành chính",
    "tag_alias": "giam-sat-vien-hanh-chinh",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb918"
    },
    "tag_id": 30,
    "tag_name": "Trưởng phòng hành chính",
    "tag_alias": "truong-phong-hanh-chinh",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb91a"
    },
    "tag_id": 31,
    "tag_name": "Giám đốc nhân sự",
    "tag_alias": "giam-doc-nhan-su",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb91c"
    },
    "tag_id": 32,
    "tag_name": "Trưởng phòng nhân sự",
    "tag_alias": "truong-phong-nhan-su",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb91e"
    },
    "tag_id": 33,
    "tag_name": "Chuyên viên hành chính nhân sự",
    "tag_alias": "chuyen-vien-hanh-chinh-nhan-su",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb920"
    },
    "tag_id": 34,
    "tag_name": "Tuyển dụng nhân sự",
    "tag_alias": "tuyen-dung-nhan-su",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb922"
    },
    "tag_id": 35,
    "tag_name": "Tư vấn nhân sự",
    "tag_alias": "tu-van-nhan-su",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb924"
    },
    "tag_id": 36,
    "tag_name": "Cộng tác viên tuyển dụng",
    "tag_alias": "cong-tac-vien-tuyen-dung",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb926"
    },
    "tag_id": 37,
    "tag_name": "Hành chính tổng hợp",
    "tag_alias": "hanh-chinh-tong-hop",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb928"
    },
    "tag_id": 38,
    "tag_name": "Nhập dữ liệu",
    "tag_alias": "nhap-du-lieu",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb92a"
    },
    "tag_id": 39,
    "tag_name": "Quản lý hồ sơ",
    "tag_alias": "quan-ly-ho-so",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb92c"
    },
    "tag_id": 40,
    "tag_name": "Quản lý hợp đồng",
    "tag_alias": "quan-ly-hop-dong",
    "tag_parent": 3,
    "tag_index": 1,
    "tag_type": 3,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb92e"
    },
    "tag_id": 41,
    "tag_name": "Quản lý quảng cáo",
    "tag_alias": "quan-ly-quang-cao",
    "tag_parent": 4,
    "tag_index": 1,
    "tag_type": 4,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb930"
    },
    "tag_id": 42,
    "tag_name": "Giám đốc quảng cáo",
    "tag_alias": "giam-doc-quang-cao",
    "tag_parent": 4,
    "tag_index": 1,
    "tag_type": 4,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb932"
    },
    "tag_id": 43,
    "tag_name": "Nhân viên chạy quảng cáo",
    "tag_alias": "nhan-vien-chay-quang-cao",
    "tag_parent": 4,
    "tag_index": 1,
    "tag_type": 4,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb934"
    },
    "tag_id": 44,
    "tag_name": "Tiếp thị quảng cáo",
    "tag_alias": "tiep-thi-quang-cao",
    "tag_parent": 4,
    "tag_index": 1,
    "tag_type": 4,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb936"
    },
    "tag_id": 45,
    "tag_name": "Quảng cáo sự kiện",
    "tag_alias": "quang-cao-su-kien",
    "tag_parent": 4,
    "tag_index": 1,
    "tag_type": 4,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb938"
    },
    "tag_id": 46,
    "tag_name": "Nhân viên viết quảng cáo",
    "tag_alias": "nhan-vien-viet-quang-cao",
    "tag_parent": 4,
    "tag_index": 1,
    "tag_type": 4,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb93a"
    },
    "tag_id": 47,
    "tag_name": "Chuyên gia quảng cáo google",
    "tag_alias": "chuyen-gia-quang-cao-google",
    "tag_parent": 4,
    "tag_index": 1,
    "tag_type": 4,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb93c"
    },
    "tag_id": 48,
    "tag_name": "Chuyên gia quảng cáo trên mạng xã hội",
    "tag_alias": "chuyen-gia-quang-cao-tren-mang-xa-hoi",
    "tag_parent": 4,
    "tag_index": 1,
    "tag_type": 4,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb93e"
    },
    "tag_id": 49,
    "tag_name": "Trưởng phòng nông nghiệp",
    "tag_alias": "truong-phong-nong-nghiep",
    "tag_parent": 5,
    "tag_index": 1,
    "tag_type": 5,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb940"
    },
    "tag_id": 50,
    "tag_name": "Kỹ sư nông nghiệp",
    "tag_alias": "ky-su-nong-nghiep",
    "tag_parent": 5,
    "tag_index": 1,
    "tag_type": 5,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb942"
    },
    "tag_id": 51,
    "tag_name": "Nhân viên kỹ thuật nông nghiệp",
    "tag_alias": "nhan-vien-ky-thuat-nong-nghiep",
    "tag_parent": 5,
    "tag_index": 1,
    "tag_type": 5,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb944"
    },
    "tag_id": 52,
    "tag_name": "Kinh doanh nông nghiệp",
    "tag_alias": "kinh-doanh-nong-nghiep",
    "tag_parent": 5,
    "tag_index": 1,
    "tag_type": 5,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb946"
    },
    "tag_id": 53,
    "tag_name": "Nghiên cứu nông nghiệp",
    "tag_alias": "nghien-cuu-nong-nghiep",
    "tag_parent": 5,
    "tag_index": 1,
    "tag_type": 5,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb948"
    },
    "tag_id": 54,
    "tag_name": "Tiếp thị nông nghiệp",
    "tag_alias": "tiep-thi-nong-nghiep",
    "tag_parent": 5,
    "tag_index": 1,
    "tag_type": 5,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb94a"
    },
    "tag_id": 55,
    "tag_name": "Kinh doanh phân bón",
    "tag_alias": "kinh-doanh-phan-bon",
    "tag_parent": 5,
    "tag_index": 1,
    "tag_type": 5,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb94c"
    },
    "tag_id": 56,
    "tag_name": "Kinh doanh thuốc trừ sâu",
    "tag_alias": "kinh-doanh-thuoc-tru-sau",
    "tag_parent": 5,
    "tag_index": 1,
    "tag_type": 5,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb94e"
    },
    "tag_id": 57,
    "tag_name": "Quản lý trang trại",
    "tag_alias": "quan-ly-trang-trai",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb950"
    },
    "tag_id": 58,
    "tag_name": "Chuyên gia chăn nuôi",
    "tag_alias": "chuyen-gia-chan-nuoi",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb952"
    },
    "tag_id": 59,
    "tag_name": "Kỹ sư chăn nuôi",
    "tag_alias": "ky-su-chan-nuoi",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb954"
    },
    "tag_id": 60,
    "tag_name": "Nghiên cứu chăn nuôi",
    "tag_alias": "nghien-cuu-chan-nuoi",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb956"
    },
    "tag_id": 61,
    "tag_name": "Chuyên viên dinh dưỡng động vật",
    "tag_alias": "chuyen-vien-dinh-duong-dong-vat",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb958"
    },
    "tag_id": 62,
    "tag_name": "Bác sĩ thú y",
    "tag_alias": "bac-si-thu-y",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb95a"
    },
    "tag_id": 63,
    "tag_name": "Bán thuốc thú y",
    "tag_alias": "ban-thuoc-thu-y",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb95c"
    },
    "tag_id": 64,
    "tag_name": "Giám sát lâm nghiệp",
    "tag_alias": "giam-sat-lam-nghiep",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb95e"
    },
    "tag_id": 65,
    "tag_name": "Nghiên cứu lâm nghiệp",
    "tag_alias": "nghien-cuu-lam-nghiep",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb960"
    },
    "tag_id": 66,
    "tag_name": "Kỹ thuật nuôi trồng thủy sản",
    "tag_alias": "ky-thuat-nuoi-trong-thuy-san",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb962"
    },
    "tag_id": 67,
    "tag_name": "Đánh bắt thủy sản",
    "tag_alias": "danh-bat-thuy-san",
    "tag_parent": 6,
    "tag_index": 1,
    "tag_type": 6,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb964"
    },
    "tag_id": 68,
    "tag_name": "Đào tạo hàng không",
    "tag_alias": "dao-tao-hang-khong",
    "tag_parent": 7,
    "tag_index": 1,
    "tag_type": 7,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb966"
    },
    "tag_id": 69,
    "tag_name": "Kỹ sư bảo dưỡng máy bay",
    "tag_alias": "ky-su-bao-duong-may-bay",
    "tag_parent": 7,
    "tag_index": 1,
    "tag_type": 7,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb968"
    },
    "tag_id": 70,
    "tag_name": "An toàn hàng không",
    "tag_alias": "an-toan-hang-khong",
    "tag_parent": 7,
    "tag_index": 1,
    "tag_type": 7,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb96a"
    },
    "tag_id": 71,
    "tag_name": "Quản lý hàng không",
    "tag_alias": "quan-ly-hang-khong",
    "tag_parent": 7,
    "tag_index": 1,
    "tag_type": 7,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb96c"
    },
    "tag_id": 72,
    "tag_name": "Nhân viên sân bay",
    "tag_alias": "nhan-vien-san-bay",
    "tag_parent": 7,
    "tag_index": 1,
    "tag_type": 7,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb96e"
    },
    "tag_id": 73,
    "tag_name": "Tiếp viên hàng không",
    "tag_alias": "tiep-vien-hang-khong",
    "tag_parent": 7,
    "tag_index": 1,
    "tag_type": 7,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb970"
    },
    "tag_id": 74,
    "tag_name": "Giám sát sân bay",
    "tag_alias": "giam-sat-san-bay",
    "tag_parent": 7,
    "tag_index": 1,
    "tag_type": 7,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb972"
    },
    "tag_id": 75,
    "tag_name": "Bán vé máy bay",
    "tag_alias": "ban-ve-may-bay",
    "tag_parent": 7,
    "tag_index": 1,
    "tag_type": 7,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb974"
    },
    "tag_id": 76,
    "tag_name": "Kiến trúc sư",
    "tag_alias": "kien-truc-su",
    "tag_parent": 8,
    "tag_index": 1,
    "tag_type": 8,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb976"
    },
    "tag_id": 77,
    "tag_name": "Kiến trúc sư xây dựng",
    "tag_alias": "kien-truc-su-xay-dung",
    "tag_parent": 8,
    "tag_index": 1,
    "tag_type": 8,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb978"
    },
    "tag_id": 78,
    "tag_name": "Thiết kế kiến trúc",
    "tag_alias": "thiet-ke-kien-truc",
    "tag_parent": 8,
    "tag_index": 1,
    "tag_type": 8,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb97a"
    },
    "tag_id": 79,
    "tag_name": "Thực tập sinh kiến trúc",
    "tag_alias": "thuc-tap-sinh-kien-truc",
    "tag_parent": 8,
    "tag_index": 1,
    "tag_type": 8,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb97c"
    },
    "tag_id": 80,
    "tag_name": "Kiến trúc sư nội thất",
    "tag_alias": "kien-truc-su-noi-that",
    "tag_parent": 8,
    "tag_index": 1,
    "tag_type": 8,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb97e"
    },
    "tag_id": 81,
    "tag_name": "Chuyên gia tư vấn làm đẹp",
    "tag_alias": "chuyen-gia-tu-van-lam-dep",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb980"
    },
    "tag_id": 82,
    "tag_name": "Chuyên gia làm đẹp",
    "tag_alias": "chuyen-gia-lam-dep",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb982"
    },
    "tag_id": 83,
    "tag_name": "Nhân viên chăm sóc sắc đẹp",
    "tag_alias": "nhan-vien-cham-soc-sac-dep",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb984"
    },
    "tag_id": 84,
    "tag_name": "Chuyên viên massage",
    "tag_alias": "chuyen-vien-massage",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb986"
    },
    "tag_id": 85,
    "tag_name": "Chuyên gia thẩm mỹ",
    "tag_alias": "chuyen-gia-tham-my",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb988"
    },
    "tag_id": 86,
    "tag_name": "Lễ tân thẩm mỹ viện",
    "tag_alias": "le-tan-tham-my-vien",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb98a"
    },
    "tag_id": 87,
    "tag_name": "Chuyên viên chăm sóc da",
    "tag_alias": "chuyen-vien-cham-soc-da",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb98c"
    },
    "tag_id": 88,
    "tag_name": "Thẩm mỹ viện",
    "tag_alias": "tham-my-vien",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb98e"
    },
    "tag_id": 89,
    "tag_name": "Tư vấn bán sản phẩm làm đẹp",
    "tag_alias": "tu-van-ban-san-pham-lam-dep",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb990"
    },
    "tag_id": 90,
    "tag_name": "Cung cấp sản phẩm làm đẹp",
    "tag_alias": "cung-cap-san-pham-lam-dep",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb992"
    },
    "tag_id": 91,
    "tag_name": "Giám đốc sản phẩm làm đẹp",
    "tag_alias": "giam-doc-san-pham-lam-dep",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb994"
    },
    "tag_id": 92,
    "tag_name": "Chuyên gia sản phẩm làm đẹp",
    "tag_alias": "chuyen-gia-san-pham-lam-dep",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb996"
    },
    "tag_id": 93,
    "tag_name": "Việc làm sản xuất mỹ phẩm",
    "tag_alias": "viec-lam-san-xuat-my-pham",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb998"
    },
    "tag_id": 94,
    "tag_name": "Nhân viên bán mỹ phẩm",
    "tag_alias": "nhan-vien-ban-my-pham",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb99a"
    },
    "tag_id": 95,
    "tag_name": "Kinh doanh mỹ phẩm",
    "tag_alias": "kinh-doanh-my-pham",
    "tag_parent": 9,
    "tag_index": 1,
    "tag_type": 9,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb99c"
    },
    "tag_id": 96,
    "tag_name": "Giám đốc ngân hàng",
    "tag_alias": "giam-doc-ngan-hang",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb99e"
    },
    "tag_id": 97,
    "tag_name": "Quản lý ngân hàng",
    "tag_alias": "quan-ly-ngan-hang",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9a0"
    },
    "tag_id": 98,
    "tag_name": "Chuyên viên ngân hàng",
    "tag_alias": "chuyen-vien-ngan-hang",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9a2"
    },
    "tag_id": 99,
    "tag_name": "Nhân viên giao dịch ngân hàng",
    "tag_alias": "nhan-vien-giao-dich-ngan-hang",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9a4"
    },
    "tag_id": 100,
    "tag_name": "Nhân viên tín dụng ngân hàng",
    "tag_alias": "nhan-vien-tin-dung-ngan-hang",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9a6"
    },
    "tag_id": 101,
    "tag_name": "Chuyên viên phân tích ngân hàng",
    "tag_alias": "chuyen-vien-phan-tich-ngan-hang",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9a8"
    },
    "tag_id": 102,
    "tag_name": "Dịch vụ tài chính ngân hàng",
    "tag_alias": "dich-vu-tai-chinh-ngan-hang",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9aa"
    },
    "tag_id": 103,
    "tag_name": "Ngân hàng thương mại",
    "tag_alias": "ngan-hang-thuong-mai",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9ac"
    },
    "tag_id": 104,
    "tag_name": "Ngân hàng đầu tư",
    "tag_alias": "ngan-hang-dau-tu",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9ae"
    },
    "tag_id": 105,
    "tag_name": "Ngân hàng doanh nghiệp",
    "tag_alias": "ngan-hang-doanh-nghiep",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9b0"
    },
    "tag_id": 106,
    "tag_name": "Ngân hàng quốc tế",
    "tag_alias": "ngan-hang-quoc-te",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9b2"
    },
    "tag_id": 107,
    "tag_name": "Ngân hàng số",
    "tag_alias": "ngan-hang-so",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9b4"
    },
    "tag_id": 108,
    "tag_name": "Chuyên viên tư vấn ngân hàng",
    "tag_alias": "chuyen-vien-tu-van-ngan-hang",
    "tag_parent": 10,
    "tag_index": 1,
    "tag_type": 10,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9b6"
    },
    "tag_id": 109,
    "tag_name": "Quản lý xây dựng",
    "tag_alias": "quan-ly-xay-dung",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9b8"
    },
    "tag_id": 110,
    "tag_name": "Giám sát thi công",
    "tag_alias": "giam-sat-thi-cong",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9ba"
    },
    "tag_id": 111,
    "tag_name": "Tư vấn kỹ thuật xây dựng",
    "tag_alias": "tu-van-ky-thuat-xay-dung",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9bc"
    },
    "tag_id": 112,
    "tag_name": "Kỹ sư xây dựng",
    "tag_alias": "ky-su-xay-dung",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9be"
    },
    "tag_id": 113,
    "tag_name": "Quản lý dự án xây dựng",
    "tag_alias": "quan-ly-du-an-xay-dung",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9c0"
    },
    "tag_id": 114,
    "tag_name": "Giám đốc xây dựng",
    "tag_alias": "giam-doc-xay-dung",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9c2"
    },
    "tag_id": 115,
    "tag_name": "Nhân viên xây dựng",
    "tag_alias": "nhan-vien-xay-dung",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9c4"
    },
    "tag_id": 116,
    "tag_name": "Kỹ sư dự án xây dựng",
    "tag_alias": "ky-su-du-an-xay-dung",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9c6"
    },
    "tag_id": 117,
    "tag_name": "Trợ lý dự án xây dựng",
    "tag_alias": "tro-ly-du-an-xay-dung",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9c8"
    },
    "tag_id": 118,
    "tag_name": "Quản lý an toàn công trình",
    "tag_alias": "quan-ly-an-toan-cong-trinh",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9ca"
    },
    "tag_id": 119,
    "tag_name": "Xây dựng dân dụng",
    "tag_alias": "xay-dung-dan-dung",
    "tag_parent": 11,
    "tag_index": 1,
    "tag_type": 11,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9cc"
    },
    "tag_id": 120,
    "tag_name": "Giám đốc quản lý dịch vụ khách hàng",
    "tag_alias": "giam-doc-quan-ly-dich-vu-khach-hang",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9ce"
    },
    "tag_id": 121,
    "tag_name": "Nhân viên phục vụ khách hàng",
    "tag_alias": "nhan-vien-phuc-vu-khach-hang",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9d0"
    },
    "tag_id": 122,
    "tag_name": "Đại diện dịch vụ khách hàng",
    "tag_alias": "dai-dien-dich-vu-khach-hang",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9d2"
    },
    "tag_id": 123,
    "tag_name": "Quản lý dịch vụ khách hàng",
    "tag_alias": "quan-ly-dich-vu-khach-hang",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9d4"
    },
    "tag_id": 124,
    "tag_name": "Cộng tác viên dịch vụ khách hàng",
    "tag_alias": "cong-tac-vien-dich-vu-khach-hang",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9d6"
    },
    "tag_id": 125,
    "tag_name": "Chuyên gia dịch vụ khách hàng",
    "tag_alias": "chuyen-gia-dich-vu-khach-hang",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9d8"
    },
    "tag_id": 126,
    "tag_name": "Chuyên gia chăm sóc khách hàng",
    "tag_alias": "chuyen-gia-cham-soc-khach-hang",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9da"
    },
    "tag_id": 127,
    "tag_name": "Giám đốc trung tâm cuộc gọi",
    "tag_alias": "giam-doc-trung-tam-cuoc-goi",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9dc"
    },
    "tag_id": 128,
    "tag_name": "Tổng đài viên",
    "tag_alias": "tong-dai-vien",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9de"
    },
    "tag_id": 129,
    "tag_name": "Giám sát viên tổng đài",
    "tag_alias": "giam-sat-vien-tong-dai",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9e0"
    },
    "tag_id": 130,
    "tag_name": "Hỗ trợ khách hàng qua tổng đài",
    "tag_alias": "ho-tro-khach-hang-qua-tong-dai",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9e2"
    },
    "tag_id": 131,
    "tag_name": "Chuyên viên hỗ trợ khách hàng",
    "tag_alias": "chuyen-vien-ho-tro-khach-hang",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9e4"
    },
    "tag_id": 132,
    "tag_name": "Cộng tác viên hỗ trợ khách hàng",
    "tag_alias": "cong-tac-vien-ho-tro-khach-hang",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9e6"
    },
    "tag_id": 133,
    "tag_name": "Dịch vụ khách hàng trực tuyến",
    "tag_alias": "dich-vu-khach-hang-truc-tuyen",
    "tag_parent": 12,
    "tag_index": 1,
    "tag_type": 12,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9e8"
    },
    "tag_id": 134,
    "tag_name": "Kỹ sư thiết kế",
    "tag_alias": "ky-su-thiet-ke",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9ea"
    },
    "tag_id": 135,
    "tag_name": "Giám đốc thiết kế",
    "tag_alias": "giam-doc-thiet-ke",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9ec"
    },
    "tag_id": 136,
    "tag_name": "Trợ lý thiết kế",
    "tag_alias": "tro-ly-thiet-ke",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9ee"
    },
    "tag_id": 137,
    "tag_name": "Nhân viên thiết kế",
    "tag_alias": "nhan-vien-thiet-ke",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9f0"
    },
    "tag_id": 138,
    "tag_name": "Quản lý kỹ thuật thiết kế",
    "tag_alias": "quan-ly-ky-thuat-thiet-ke",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9f2"
    },
    "tag_id": 139,
    "tag_name": "Thiết kế online",
    "tag_alias": "thiet-ke-online",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9f4"
    },
    "tag_id": 140,
    "tag_name": "Cộng tác viên thiết kế",
    "tag_alias": "cong-tac-vien-thiet-ke",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9f6"
    },
    "tag_id": 141,
    "tag_name": "Thiết kế kỹ thuật",
    "tag_alias": "thiet-ke-ky-thuat",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9f8"
    },
    "tag_id": 142,
    "tag_name": "Thiết kế đồ họa",
    "tag_alias": "thiet-ke-do-hoa",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9fa"
    },
    "tag_id": 143,
    "tag_name": "Thiết kế UI UX",
    "tag_alias": "thiet-ke-ui-ux",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9fc"
    },
    "tag_id": 144,
    "tag_name": "Thiết kế web",
    "tag_alias": "thiet-ke-web",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eb9fe"
    },
    "tag_id": 145,
    "tag_name": "Thiết kế đa phương tiện",
    "tag_alias": "thiet-ke-da-phuong-tien",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba00"
    },
    "tag_id": 146,
    "tag_name": "Thiết kế nội thất",
    "tag_alias": "thiet-ke-noi-that",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba02"
    },
    "tag_id": 147,
    "tag_name": "Thiết kế đồ họa",
    "tag_alias": "thiet-ke-do-hoa",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba04"
    },
    "tag_id": 148,
    "tag_name": "Thiết kế sản phẩm",
    "tag_alias": "thiet-ke-san-pham",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba06"
    },
    "tag_id": 149,
    "tag_name": "Thiết kế quảng cáo",
    "tag_alias": "thiet-ke-quang-cao",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba08"
    },
    "tag_id": 150,
    "tag_name": "Thiết kế thời trang",
    "tag_alias": "thiet-ke-thoi-trang",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba0a"
    },
    "tag_id": 151,
    "tag_name": "Thiết kế công trình",
    "tag_alias": "thiet-ke-cong-trinh",
    "tag_parent": 13,
    "tag_index": 1,
    "tag_type": 13,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba0c"
    },
    "tag_id": 152,
    "tag_name": "Giám đốc thời trang",
    "tag_alias": "giam-doc-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba0e"
    },
    "tag_id": 153,
    "tag_name": "Trợ lý thời trang",
    "tag_alias": "tro-ly-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba10"
    },
    "tag_id": 154,
    "tag_name": "Nhà tạo mẫu thời trang",
    "tag_alias": "nha-tao-mau-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba12"
    },
    "tag_id": 155,
    "tag_name": "Người mẫu thời trang",
    "tag_alias": "nguoi-mau-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba14"
    },
    "tag_id": 156,
    "tag_name": "Quản lý thời trang",
    "tag_alias": "quan-ly-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba16"
    },
    "tag_id": 157,
    "tag_name": "Tư vấn thời trang",
    "tag_alias": "tu-van-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba18"
    },
    "tag_id": 158,
    "tag_name": "Nghiên cứu thị trường thời trang",
    "tag_alias": "nghien-cuu-thi-truong-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba1a"
    },
    "tag_id": 159,
    "tag_name": "Quản lý sự kiện thời trang",
    "tag_alias": "quan-ly-su-kien-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba1c"
    },
    "tag_id": 160,
    "tag_name": "Cửa hàng thời trang",
    "tag_alias": "cua-hang-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba1e"
    },
    "tag_id": 161,
    "tag_name": "Quản lý cửa hàng thời trang",
    "tag_alias": "quan-ly-cua-hang-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba20"
    },
    "tag_id": 162,
    "tag_name": "Bán lẻ thời trang",
    "tag_alias": "ban-le-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba22"
    },
    "tag_id": 163,
    "tag_name": "Tiếp thị thời trang",
    "tag_alias": "tiep-thi-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba24"
    },
    "tag_id": 164,
    "tag_name": "Sản xuất thời trang",
    "tag_alias": "san-xuat-thoi-trang",
    "tag_parent": 14,
    "tag_index": 1,
    "tag_type": 14,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba26"
    },
    "tag_id": 165,
    "tag_name": "Quản lý vận tải",
    "tag_alias": "quan-ly-van-tai",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba28"
    },
    "tag_id": 166,
    "tag_name": "Kỹ sư vận tải",
    "tag_alias": "ky-su-van-tai",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba2a"
    },
    "tag_id": 167,
    "tag_name": "Chuyên gia vận tải",
    "tag_alias": "chuyen-gia-van-tai",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba2c"
    },
    "tag_id": 168,
    "tag_name": "Nhân viên vận chuyển",
    "tag_alias": "nhan-vien-van-chuyen",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba2e"
    },
    "tag_id": 169,
    "tag_name": "Nhân viên kinh doanh vận tải",
    "tag_alias": "nhan-vien-kinh-doanh-van-tai",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba30"
    },
    "tag_id": 170,
    "tag_name": "Vận tải đường bộ",
    "tag_alias": "van-tai-duong-bo",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba32"
    },
    "tag_id": 171,
    "tag_name": "Vận tải đường sắt",
    "tag_alias": "van-tai-duong-sat",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba34"
    },
    "tag_id": 172,
    "tag_name": "Vận tải đường biển",
    "tag_alias": "van-tai-duong-bien",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba36"
    },
    "tag_id": 173,
    "tag_name": "Vận tải hàng không",
    "tag_alias": "van-tai-hang-khong",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba38"
    },
    "tag_id": 174,
    "tag_name": "Lái xe tải",
    "tag_alias": "lai-xe-tai",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba3a"
    },
    "tag_id": 175,
    "tag_name": "Lái xe dịch vụ",
    "tag_alias": "lai-xe-dich-vu",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba3c"
    },
    "tag_id": 176,
    "tag_name": "Lái xe vận tải hàng hóa",
    "tag_alias": "lai-xe-van-tai-hang-hoa",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba3e"
    },
    "tag_id": 177,
    "tag_name": "Lái xe công trình",
    "tag_alias": "lai-xe-cong-trinh",
    "tag_parent": 15,
    "tag_index": 1,
    "tag_type": 15,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba40"
    },
    "tag_id": 178,
    "tag_name": "Giám đốc kỹ thuật",
    "tag_alias": "giam-doc-ky-thuat",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba42"
    },
    "tag_id": 179,
    "tag_name": "Trưởng phòng kỹ thuật",
    "tag_alias": "truong-phong-ky-thuat",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba44"
    },
    "tag_id": 180,
    "tag_name": "Giám sát kỹ thuật",
    "tag_alias": "giam-sat-ky-thuat",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba46"
    },
    "tag_id": 181,
    "tag_name": "Nhân viên kỹ thuật",
    "tag_alias": "nhan-vien-ky-thuat",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba48"
    },
    "tag_id": 182,
    "tag_name": "Trợ lý kỹ thuật",
    "tag_alias": "tro-ly-ky-thuat",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba4a"
    },
    "tag_id": 183,
    "tag_name": "Thực tập sinh kỹ thuật",
    "tag_alias": "thuc-tap-sinh-ky-thuat",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba4c"
    },
    "tag_id": 184,
    "tag_name": "Nhân viên kiểm soát tài liệu kỹ thuật",
    "tag_alias": "nhan-vien-kiem-soat-tai-lieu-ky-thuat",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba4e"
    },
    "tag_id": 185,
    "tag_name": "Nhân viên hỗ trợ kỹ thuật",
    "tag_alias": "nhan-vien-ho-tro-ky-thuat",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba50"
    },
    "tag_id": 186,
    "tag_name": "Kỹ thuật hàng không",
    "tag_alias": "ky-thuat-hang-khong",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba52"
    },
    "tag_id": 187,
    "tag_name": "Kỹ thuật ô tô",
    "tag_alias": "ky-thuat-o-to",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba54"
    },
    "tag_id": 188,
    "tag_name": "Kỹ thuật xây dựng",
    "tag_alias": "ky-thuat-xay-dung",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba56"
    },
    "tag_id": 189,
    "tag_name": "Kỹ thuật hóa học",
    "tag_alias": "ky-thuat-hoa-hoc",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba58"
    },
    "tag_id": 190,
    "tag_name": "Kỹ thuật điện",
    "tag_alias": "ky-thuat-dien",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba5a"
    },
    "tag_id": 191,
    "tag_name": "Kỹ thuật điện tử",
    "tag_alias": "ky-thuat-dien-tu",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba5c"
    },
    "tag_id": 192,
    "tag_name": "Kỹ thuật môi trường",
    "tag_alias": "ky-thuat-moi-truong",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba5e"
    },
    "tag_id": 193,
    "tag_name": "Kỹ thuật công nghiệp",
    "tag_alias": "ky-thuat-cong-nghiep",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba60"
    },
    "tag_id": 194,
    "tag_name": "Kỹ thuật cơ khí",
    "tag_alias": "ky-thuat-co-khi",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba62"
    },
    "tag_id": 195,
    "tag_name": "Kỹ thuật hệ thống",
    "tag_alias": "ky-thuat-he-thong",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba64"
    },
    "tag_id": 196,
    "tag_name": "Kỹ thuật phần mềm",
    "tag_alias": "ky-thuat-phan-mem",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba66"
    },
    "tag_id": 197,
    "tag_name": "Kỹ thuật dự án",
    "tag_alias": "ky-thuat-du-an",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba68"
    },
    "tag_id": 198,
    "tag_name": "Kỹ thuật sinh học",
    "tag_alias": "ky-thuat-sinh-hoc",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba6a"
    },
    "tag_id": 199,
    "tag_name": "Kỹ thuật quy trình",
    "tag_alias": "ky-thuat-quy-trinh",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba6c"
    },
    "tag_id": 200,
    "tag_name": "Kỹ thuật năng lượng",
    "tag_alias": "ky-thuat-nang-luong",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba6e"
    },
    "tag_id": 201,
    "tag_name": "Kỹ thuật hàng hải",
    "tag_alias": "ky-thuat-hang-hai",
    "tag_parent": 16,
    "tag_index": 1,
    "tag_type": 16,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba70"
    },
    "tag_id": 202,
    "tag_name": "Trưởng phòng đào tạo",
    "tag_alias": "truong-phong-dao-tao",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba72"
    },
    "tag_id": 203,
    "tag_name": "Cán bộ đào tạo",
    "tag_alias": "can-bo-dao-tao",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba74"
    },
    "tag_id": 204,
    "tag_name": "Trợ lý đào tạo",
    "tag_alias": "tro-ly-dao-tao",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba76"
    },
    "tag_id": 205,
    "tag_name": "Giáo viên mầm non",
    "tag_alias": "giao-vien-mam-non",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba78"
    },
    "tag_id": 206,
    "tag_name": "Giáo viên tiểu học",
    "tag_alias": "giao-vien-tieu-hoc",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba7a"
    },
    "tag_id": 207,
    "tag_name": "Giáo viên trung học",
    "tag_alias": "giao-vien-trung-hoc",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba7c"
    },
    "tag_id": 208,
    "tag_name": "Giảng viên đại học",
    "tag_alias": "giang-vien-dai-hoc",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba7e"
    },
    "tag_id": 209,
    "tag_name": "Giáo dục và đào tạo nghề nghiệp",
    "tag_alias": "giao-duc-va-dao-tao-nghe-nghiep",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba80"
    },
    "tag_id": 210,
    "tag_name": "Giáo viên giáo dục đặc biệt",
    "tag_alias": "giao-vien-giao-duc-dac-biet",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba82"
    },
    "tag_id": 211,
    "tag_name": "Giáo viên tiếng anh",
    "tag_alias": "giao-vien-tieng-anh",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba84"
    },
    "tag_id": 212,
    "tag_name": "Giáo viên toán",
    "tag_alias": "giao-vien-toan",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba86"
    },
    "tag_id": 213,
    "tag_name": "Giáo viên kỹ thuật",
    "tag_alias": "giao-vien-ky-thuat",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba88"
    },
    "tag_id": 214,
    "tag_name": "Giáo viên công nghệ thông tin",
    "tag_alias": "giao-vien-cong-nghe-thong-tin",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba8a"
    },
    "tag_id": 215,
    "tag_name": "Giáo viên nghệ thuật",
    "tag_alias": "giao-vien-nghe-thuat",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba8c"
    },
    "tag_id": 216,
    "tag_name": "Giảng viên kinh tế",
    "tag_alias": "giang-vien-kinh-te",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba8e"
    },
    "tag_id": 217,
    "tag_name": "Giáo viên hợp đồng",
    "tag_alias": "giao-vien-hop-dong",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba90"
    },
    "tag_id": 218,
    "tag_name": "Trợ lý giáo viên",
    "tag_alias": "tro-ly-giao-vien",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba92"
    },
    "tag_id": 219,
    "tag_name": "Gia sư",
    "tag_alias": "gia-su",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba94"
    },
    "tag_id": 220,
    "tag_name": "Nghiên cứu giáo dục",
    "tag_alias": "nghien-cuu-giao-duc",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba96"
    },
    "tag_id": 221,
    "tag_name": "Giáo dục kỹ thuật số",
    "tag_alias": "giao-duc-ky-thuat-so",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba98"
    },
    "tag_id": 222,
    "tag_name": "Quản lý thư viện",
    "tag_alias": "quan-ly-thu-vien",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba9a"
    },
    "tag_id": 223,
    "tag_name": "Quản lý trung tâm",
    "tag_alias": "quan-ly-trung-tam",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba9c"
    },
    "tag_id": 224,
    "tag_name": "Tư vấn giáo dục",
    "tag_alias": "tu-van-giao-duc",
    "tag_parent": 17,
    "tag_index": 1,
    "tag_type": 17,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036eba9e"
    },
    "tag_id": 225,
    "tag_name": "Kỹ sư điện",
    "tag_alias": "ky-su-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaa0"
    },
    "tag_id": 226,
    "tag_name": "Giám đốc dự án điện",
    "tag_alias": "giam-doc-du-an-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaa2"
    },
    "tag_id": 227,
    "tag_name": "Quản lý dự án điện",
    "tag_alias": "quan-ly-du-an-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaa4"
    },
    "tag_id": 228,
    "tag_name": "Quản lý điện",
    "tag_alias": "quan-ly-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaa6"
    },
    "tag_id": 229,
    "tag_name": "Giám sát điện",
    "tag_alias": "giam-sat-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaa8"
    },
    "tag_id": 230,
    "tag_name": "Kỹ thuật viên điện",
    "tag_alias": "ky-thuat-vien-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaaa"
    },
    "tag_id": 231,
    "tag_name": "Kỹ sư điện mới tốt nghiệp",
    "tag_alias": "ky-su-dien-moi-tot-nghiep",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaac"
    },
    "tag_id": 232,
    "tag_name": "Thợ điện",
    "tag_alias": "tho-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaae"
    },
    "tag_id": 233,
    "tag_name": "Điện công nghiệp",
    "tag_alias": "dien-cong-nghiep",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebab0"
    },
    "tag_id": 234,
    "tag_name": "Điện dân dụng",
    "tag_alias": "dien-dan-dung",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebab2"
    },
    "tag_id": 235,
    "tag_name": "Điện nước",
    "tag_alias": "dien-nuoc",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebab4"
    },
    "tag_id": 236,
    "tag_name": "Điện lạnh",
    "tag_alias": "dien-lanh",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebab6"
    },
    "tag_id": 237,
    "tag_name": "Kỹ sư điện mặt trời",
    "tag_alias": "ky-su-dien-mat-troi",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebab8"
    },
    "tag_id": 238,
    "tag_name": "Năng lượng điện",
    "tag_alias": "nang-luong-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaba"
    },
    "tag_id": 239,
    "tag_name": "Kỹ sư an toàn điện",
    "tag_alias": "ky-su-an-toan-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebabc"
    },
    "tag_id": 240,
    "tag_name": "Kỹ sư cơ điện",
    "tag_alias": "ky-su-co-dien",
    "tag_parent": 18,
    "tag_index": 1,
    "tag_type": 18,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebabe"
    },
    "tag_id": 241,
    "tag_name": "Kỹ sư điện tử",
    "tag_alias": "ky-su-dien-tu",
    "tag_parent": 19,
    "tag_index": 1,
    "tag_type": 19,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebac0"
    },
    "tag_id": 242,
    "tag_name": "Kỹ thuật viên điện tử",
    "tag_alias": "ky-thuat-vien-dien-tu",
    "tag_parent": 19,
    "tag_index": 1,
    "tag_type": 19,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebac2"
    },
    "tag_id": 243,
    "tag_name": "Thợ sửa chữa điện tử",
    "tag_alias": "tho-sua-chua-dien-tu",
    "tag_parent": 19,
    "tag_index": 1,
    "tag_type": 19,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebac4"
    },
    "tag_id": 244,
    "tag_name": "Lắp ráp điện tử",
    "tag_alias": "lap-rap-dien-tu",
    "tag_parent": 19,
    "tag_index": 1,
    "tag_type": 19,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebac6"
    },
    "tag_id": 245,
    "tag_name": "Điện tử công nghiệp",
    "tag_alias": "dien-tu-cong-nghiep",
    "tag_parent": 19,
    "tag_index": 1,
    "tag_type": 19,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebac8"
    },
    "tag_id": 246,
    "tag_name": "Diễn viên lồng tiếng",
    "tag_alias": "dien-vien-long-tieng",
    "tag_parent": 20,
    "tag_index": 1,
    "tag_type": 20,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebaca"
    },
    "tag_id": 247,
    "tag_name": "Người dẫn chương trình",
    "tag_alias": "nguoi-dan-chuong-trinh",
    "tag_parent": 20,
    "tag_index": 1,
    "tag_type": 20,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebacc"
    },
    "tag_id": 248,
    "tag_name": "Đạo diễn phim",
    "tag_alias": "dao-dien-phim",
    "tag_parent": 20,
    "tag_index": 1,
    "tag_type": 20,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebace"
    },
    "tag_id": 249,
    "tag_name": "Đạo diễn truyền hình",
    "tag_alias": "dao-dien-truyen-hinh",
    "tag_parent": 20,
    "tag_index": 1,
    "tag_type": 20,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebad0"
    },
    "tag_id": 250,
    "tag_name": "Biên kịch viên",
    "tag_alias": "bien-kich-vien",
    "tag_parent": 20,
    "tag_index": 1,
    "tag_type": 20,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebad2"
    },
    "tag_id": 251,
    "tag_name": "Kỹ sư âm thanh",
    "tag_alias": "ky-su-am-thanh",
    "tag_parent": 20,
    "tag_index": 1,
    "tag_type": 20,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebad4"
    },
    "tag_id": 252,
    "tag_name": "Kỹ thuật viên âm thanh",
    "tag_alias": "ky-thuat-vien-am-thanh",
    "tag_parent": 20,
    "tag_index": 1,
    "tag_type": 20,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebad6"
    },
    "tag_id": 253,
    "tag_name": "Chuyên gia năng lượng",
    "tag_alias": "chuyen-gia-nang-luong",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebad8"
    },
    "tag_id": 254,
    "tag_name": "Quản lý năng lượng",
    "tag_alias": "quan-ly-nang-luong",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693273c7168f1036ebada"
    },
    "tag_id": 255,
    "tag_name": "Kỹ sư năng lượng",
    "tag_alias": "ky-su-nang-luong",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebadc"
    },
    "tag_id": 256,
    "tag_name": "Kỹ sư năng lượng tái tạo",
    "tag_alias": "ky-su-nang-luong-tai-tao",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebade"
    },
    "tag_id": 257,
    "tag_name": "Kỹ sư năng lượng điện",
    "tag_alias": "ky-su-nang-luong-dien",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebae0"
    },
    "tag_id": 258,
    "tag_name": "Giám đốc khai thác mỏ",
    "tag_alias": "giam-doc-khai-thac-mo",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebae2"
    },
    "tag_id": 259,
    "tag_name": "Kỹ sư khai thác mỏ",
    "tag_alias": "ky-su-khai-thac-mo",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebae4"
    },
    "tag_id": 260,
    "tag_name": "Nghiên cứu năng lượng",
    "tag_alias": "nghien-cuu-nang-luong",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebae6"
    },
    "tag_id": 261,
    "tag_name": "Tư vấn năng lượng",
    "tag_alias": "tu-van-nang-luong",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebae8"
    },
    "tag_id": 262,
    "tag_name": "Kinh doanh năng lượng",
    "tag_alias": "kinh-doanh-nang-luong",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebaea"
    },
    "tag_id": 263,
    "tag_name": "Phát triển năng lượng",
    "tag_alias": "phat-trien-nang-luong",
    "tag_parent": 21,
    "tag_index": 1,
    "tag_type": 21,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebaec"
    },
    "tag_id": 264,
    "tag_name": "Quản lý thương mại điện tử",
    "tag_alias": "quan-ly-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebaee"
    },
    "tag_id": 265,
    "tag_name": "Trưởng nhóm thương mại điện tử",
    "tag_alias": "truong-nhom-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebaf0"
    },
    "tag_id": 266,
    "tag_name": "Trợ lý thương mại điện tử",
    "tag_alias": "tro-ly-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebaf2"
    },
    "tag_id": 267,
    "tag_name": "Chuyên gia thương mại điện tử",
    "tag_alias": "chuyen-gia-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebaf4"
    },
    "tag_id": 268,
    "tag_name": "Cộng tác viên thương mại điện tử",
    "tag_alias": "cong-tac-vien-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebaf6"
    },
    "tag_id": 269,
    "tag_name": "Bán hàng thương mại điện tử",
    "tag_alias": "ban-hang-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebaf8"
    },
    "tag_id": 270,
    "tag_name": "Nhân viên thương mại điện tử",
    "tag_alias": "nhan-vien-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebafa"
    },
    "tag_id": 271,
    "tag_name": "Trợ lý ảo thương mại điện tử",
    "tag_alias": "tro-ly-ao-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebafc"
    },
    "tag_id": 272,
    "tag_name": "Quản lý dự án thương mại điện tử",
    "tag_alias": "quan-ly-du-an-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebafe"
    },
    "tag_id": 273,
    "tag_name": "Nhân viên quản lý sàn thương mại điện tử",
    "tag_alias": "nhan-vien-quan-ly-san-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb00"
    },
    "tag_id": 274,
    "tag_name": "Chuyên viên phân tích dữ liệu thương mại điện tử",
    "tag_alias": "chuyen-vien-phan-tich-du-lieu-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb02"
    },
    "tag_id": 275,
    "tag_name": "Quản lý hoạt động thương mại điện tử",
    "tag_alias": "quan-ly-hoat-dong-thuong-mai-dien-tu",
    "tag_parent": 22,
    "tag_index": 1,
    "tag_type": 22,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb04"
    },
    "tag_id": 276,
    "tag_name": "Trợ lý biên tập báo chí",
    "tag_alias": "tro-ly-bien-tap-bao-chi",
    "tag_parent": 23,
    "tag_index": 1,
    "tag_type": 23,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb06"
    },
    "tag_id": 277,
    "tag_name": "Biên tập viên tin tức",
    "tag_alias": "bien-tap-vien-tin-tuc",
    "tag_parent": 23,
    "tag_index": 1,
    "tag_type": 23,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb08"
    },
    "tag_id": 278,
    "tag_name": "Sáng tạo nội dung",
    "tag_alias": "sang-tao-noi-dung",
    "tag_parent": 23,
    "tag_index": 1,
    "tag_type": 23,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb0a"
    },
    "tag_id": 279,
    "tag_name": "Biên tập nội dung",
    "tag_alias": "bien-tap-noi-dung",
    "tag_parent": 23,
    "tag_index": 1,
    "tag_type": 23,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb0c"
    },
    "tag_id": 280,
    "tag_name": "Sáng tạo nội dung số",
    "tag_alias": "sang-tao-noi-dung-so",
    "tag_parent": 23,
    "tag_index": 1,
    "tag_type": 23,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb0e"
    },
    "tag_id": 281,
    "tag_name": "Giám đốc khách sạn",
    "tag_alias": "giam-doc-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb10"
    },
    "tag_id": 282,
    "tag_name": "Quản lý khách sạn",
    "tag_alias": "quan-ly-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb12"
    },
    "tag_id": 283,
    "tag_name": "Thực tập sinh khách sạn",
    "tag_alias": "thuc-tap-sinh-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb14"
    },
    "tag_id": 284,
    "tag_name": "Nhân viên khách sạn",
    "tag_alias": "nhan-vien-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb16"
    },
    "tag_id": 285,
    "tag_name": "Nhân viên phục vụ khách sạn",
    "tag_alias": "nhan-vien-phuc-vu-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb18"
    },
    "tag_id": 286,
    "tag_name": "Nhân viên lễ tân khách sạn",
    "tag_alias": "nhan-vien-le-tan-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb1a"
    },
    "tag_id": 287,
    "tag_name": "Nhân viên bảo vệ khách sạn",
    "tag_alias": "nhan-vien-bao-ve-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb1c"
    },
    "tag_id": 288,
    "tag_name": "Nhân viên dọn dẹp khách sạn",
    "tag_alias": "nhan-vien-don-dep-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb1e"
    },
    "tag_id": 289,
    "tag_name": "Đầu bếp khách sạn",
    "tag_alias": "dau-bep-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb20"
    },
    "tag_id": 290,
    "tag_name": "Nhân viên bếp khách sạn",
    "tag_alias": "nhan-vien-bep-khach-san",
    "tag_parent": 24,
    "tag_index": 1,
    "tag_type": 24,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb22"
    },
    "tag_id": 291,
    "tag_name": "Giám đốc an toàn thực phẩm",
    "tag_alias": "giam-doc-an-toan-thuc-pham",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb24"
    },
    "tag_id": 292,
    "tag_name": "Chuyên gia an toàn thực phẩm",
    "tag_alias": "chuyen-gia-an-toan-thuc-pham",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb26"
    },
    "tag_id": 293,
    "tag_name": "Giám sát viên an toàn thực phẩm",
    "tag_alias": "giam-sat-vien-an-toan-thuc-pham",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb28"
    },
    "tag_id": 294,
    "tag_name": "Quản lý chế biến thực phẩm",
    "tag_alias": "quan-ly-che-bien-thuc-pham",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb2a"
    },
    "tag_id": 295,
    "tag_name": "Nhân viên chế biến thực phẩm",
    "tag_alias": "nhan-vien-che-bien-thuc-pham",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb2c"
    },
    "tag_id": 296,
    "tag_name": "Nhân viên bán thực phẩm",
    "tag_alias": "nhan-vien-ban-thuc-pham",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb2e"
    },
    "tag_id": 297,
    "tag_name": "Nhân viên kiểm tra an toàn thực phẩm",
    "tag_alias": "nhan-vien-kiem-tra-an-toan-thuc-pham",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb30"
    },
    "tag_id": 298,
    "tag_name": "Quản lý đồ uống",
    "tag_alias": "quan-ly-do-uong",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb32"
    },
    "tag_id": 299,
    "tag_name": "Phân phối đồ uống",
    "tag_alias": "phan-phoi-do-uong",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb34"
    },
    "tag_id": 300,
    "tag_name": "Nhân viên pha chế",
    "tag_alias": "nhan-vien-pha-che",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb36"
    },
    "tag_id": 301,
    "tag_name": "Nhân viên kiểm tra chất lượng đồ uống",
    "tag_alias": "nhan-vien-kiem-tra-chat-luong-do-uong",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb38"
    },
    "tag_id": 302,
    "tag_name": "Nhân viên bán hàng đồ uống",
    "tag_alias": "nhan-vien-ban-hang-do-uong",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb3a"
    },
    "tag_id": 303,
    "tag_name": "Nhân viên phục vụ đồ uống",
    "tag_alias": "nhan-vien-phuc-vu-do-uong",
    "tag_parent": 25,
    "tag_index": 1,
    "tag_type": 25,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb3c"
    },
    "tag_id": 304,
    "tag_name": "Giám đốc quản lý tài chính",
    "tag_alias": "giam-doc-quan-ly-tai-chinh",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb3e"
    },
    "tag_id": 305,
    "tag_name": "Quản lý tài chính",
    "tag_alias": "quan-ly-tai-chinh",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb40"
    },
    "tag_id": 306,
    "tag_name": "Trợ lý tài chính",
    "tag_alias": "tro-ly-tai-chinh",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb42"
    },
    "tag_id": 307,
    "tag_name": "Nhân viên tài chính",
    "tag_alias": "nhan-vien-tai-chinh",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb44"
    },
    "tag_id": 308,
    "tag_name": "Chuyên gia phân tích tài chính",
    "tag_alias": "chuyen-gia-phan-tich-tai-chinh",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb46"
    },
    "tag_id": 309,
    "tag_name": "Tư vấn tài chính",
    "tag_alias": "tu-van-tai-chinh",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb48"
    },
    "tag_id": 310,
    "tag_name": "Chuyên viên tài chính doanh nghiệp",
    "tag_alias": "chuyen-vien-tai-chinh-doanh-nghiep",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb4a"
    },
    "tag_id": 311,
    "tag_name": "Quản lý tài chính doanh nghiệp",
    "tag_alias": "quan-ly-tai-chinh-doanh-nghiep",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb4c"
    },
    "tag_id": 312,
    "tag_name": "Chuyên viên tài chính quốc tế",
    "tag_alias": "chuyen-vien-tai-chinh-quoc-te",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb4e"
    },
    "tag_id": 313,
    "tag_name": "Chuyên viên dịch vụ tài chính khách hàng",
    "tag_alias": "chuyen-vien-dich-vu-tai-chinh-khach-hang",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb50"
    },
    "tag_id": 314,
    "tag_name": "Kiểm soát tài chính",
    "tag_alias": "kiem-soat-tai-chinh",
    "tag_parent": 26,
    "tag_index": 1,
    "tag_type": 26,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb52"
    },
    "tag_id": 315,
    "tag_name": "Quản lý bệnh viện",
    "tag_alias": "quan-ly-benh-vien",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb54"
    },
    "tag_id": 316,
    "tag_name": "Bác sĩ y khoa",
    "tag_alias": "bac-si-y-khoa",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb56"
    },
    "tag_id": 317,
    "tag_name": "Bác sĩ chuyên khoa",
    "tag_alias": "bac-si-chuyen-khoa",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb58"
    },
    "tag_id": 318,
    "tag_name": "Nhân viên y tế",
    "tag_alias": "nhan-vien-y-te",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb5a"
    },
    "tag_id": 319,
    "tag_name": "Y tá trưởng",
    "tag_alias": "y-ta-truong",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb5c"
    },
    "tag_id": 320,
    "tag_name": "Điều dưỡng phẫu thuật",
    "tag_alias": "dieu-duong-phau-thuat",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb5e"
    },
    "tag_id": 321,
    "tag_name": "Điều dưỡng nhi khoa",
    "tag_alias": "dieu-duong-nhi-khoa",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb60"
    },
    "tag_id": 322,
    "tag_name": "Kỹ thuật viên xét nghiệm",
    "tag_alias": "ky-thuat-vien-xet-nghiem",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb62"
    },
    "tag_id": 323,
    "tag_name": "Kỹ thuật viên hình ảnh",
    "tag_alias": "ky-thuat-vien-hinh-anh",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb64"
    },
    "tag_id": 324,
    "tag_name": "Nhân viên siêu âm",
    "tag_alias": "nhan-vien-sieu-am",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb66"
    },
    "tag_id": 325,
    "tag_name": "Chuyên gia dinh dưỡng",
    "tag_alias": "chuyen-gia-dinh-duong",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb68"
    },
    "tag_id": 326,
    "tag_name": "Chuyên gia vật lý trị liệu",
    "tag_alias": "chuyen-gia-vat-ly-tri-lieu",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb6a"
    },
    "tag_id": 327,
    "tag_name": "Nhân viên hành chính y tế",
    "tag_alias": "nhan-vien-hanh-chinh-y-te",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb6c"
    },
    "tag_id": 328,
    "tag_name": "Chuyên gia y tế cộng đồng",
    "tag_alias": "chuyen-gia-y-te-cong-dong",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb6e"
    },
    "tag_id": 329,
    "tag_name": "Nghiên cứu khoa học",
    "tag_alias": "nghien-cuu-khoa-hoc",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb70"
    },
    "tag_id": 330,
    "tag_name": "Chuyên gia phát triển dược phẩm",
    "tag_alias": "chuyen-gia-phat-trien-duoc-pham",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb72"
    },
    "tag_id": 331,
    "tag_name": "Nghiên cứu dược phẩm",
    "tag_alias": "nghien-cuu-duoc-pham",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb74"
    },
    "tag_id": 332,
    "tag_name": "Phân tích dược phẩm",
    "tag_alias": "phan-tich-duoc-pham",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb76"
    },
    "tag_id": 333,
    "tag_name": "Kỹ sư y sinh",
    "tag_alias": "ky-su-y-sinh",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb78"
    },
    "tag_id": 334,
    "tag_name": "Tư vấn sức khỏe tâm lý",
    "tag_alias": "tu-van-suc-khoe-tam-ly",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb7a"
    },
    "tag_id": 335,
    "tag_name": "Nhân viên chăm sóc tại nhà",
    "tag_alias": "nhan-vien-cham-soc-tai-nha",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb7c"
    },
    "tag_id": 336,
    "tag_name": "Chuyên gia tư vấn y tế",
    "tag_alias": "chuyen-gia-tu-van-y-te",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb7e"
    },
    "tag_id": 337,
    "tag_name": "Nhân viên cấp cứu",
    "tag_alias": "nhan-vien-cap-cuu",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb80"
    },
    "tag_id": 338,
    "tag_name": "Nhân viên viện dưỡng lão",
    "tag_alias": "nhan-vien-vien-duong-lao",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb82"
    },
    "tag_id": 339,
    "tag_name": "Nhân viên bán hàng dược phẩm",
    "tag_alias": "nhan-vien-ban-hang-duoc-pham",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb84"
    },
    "tag_id": 340,
    "tag_name": "Chuyên gia tư vấn dược phẩm",
    "tag_alias": "chuyen-gia-tu-van-duoc-pham",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb86"
    },
    "tag_id": 341,
    "tag_name": "Giảng viên dược",
    "tag_alias": "giang-vien-duoc",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb88"
    },
    "tag_id": 342,
    "tag_name": "Quản lý dược phẩm",
    "tag_alias": "quan-ly-duoc-pham",
    "tag_parent": 27,
    "tag_index": 1,
    "tag_type": 27,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb8a"
    },
    "tag_id": 343,
    "tag_name": "Quản lý bảo trì",
    "tag_alias": "quan-ly-bao-tri",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb8c"
    },
    "tag_id": 344,
    "tag_name": "Kỹ sư bảo trì",
    "tag_alias": "ky-su-bao-tri",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb8e"
    },
    "tag_id": 345,
    "tag_name": "Nhân viên bảo trì",
    "tag_alias": "nhan-vien-bao-tri",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb90"
    },
    "tag_id": 346,
    "tag_name": "Nhân viên bảo trì thiết bị nặng",
    "tag_alias": "nhan-vien-bao-tri-thiet-bi-nang",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb92"
    },
    "tag_id": 347,
    "tag_name": "Bảo trì điện",
    "tag_alias": "bao-tri-dien",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb94"
    },
    "tag_id": 348,
    "tag_name": "Bảo trì cơ khí",
    "tag_alias": "bao-tri-co-khi",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb96"
    },
    "tag_id": 349,
    "tag_name": "Bảo trì nhiệt lạnh",
    "tag_alias": "bao-tri-nhiet-lanh",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb98"
    },
    "tag_id": 350,
    "tag_name": "Bảo trì tự động hóa",
    "tag_alias": "bao-tri-tu-dong-hoa",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb9a"
    },
    "tag_id": 351,
    "tag_name": "Bảo trì hệ thống đường ống",
    "tag_alias": "bao-tri-he-thong-duong-ong",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb9c"
    },
    "tag_id": 352,
    "tag_name": "Bảo trì cơ sở hạ tầng",
    "tag_alias": "bao-tri-co-so-ha-tang",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebb9e"
    },
    "tag_id": 353,
    "tag_name": "Bảo trì thiết bị y tế",
    "tag_alias": "bao-tri-thiet-bi-y-te",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebba0"
    },
    "tag_id": 354,
    "tag_name": "Bảo trì cơ điện",
    "tag_alias": "bao-tri-co-dien",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebba2"
    },
    "tag_id": 355,
    "tag_name": "Bảo trì tòa nhà",
    "tag_alias": "bao-tri-toa-nha",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebba4"
    },
    "tag_id": 356,
    "tag_name": "Lập kế hoạch bảo trì",
    "tag_alias": "lap-ke-hoach-bao-tri",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebba6"
    },
    "tag_id": 357,
    "tag_name": "Nhân viên bảo trì máy",
    "tag_alias": "nhan-vien-bao-tri-may",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebba8"
    },
    "tag_id": 358,
    "tag_name": "Sửa chữa ô tô",
    "tag_alias": "sua-chua-o-to",
    "tag_parent": 28,
    "tag_index": 1,
    "tag_type": 28,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbaa"
    },
    "tag_id": 359,
    "tag_name": "Kỹ sư cơ khí",
    "tag_alias": "ky-su-co-khi",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbac"
    },
    "tag_id": 360,
    "tag_name": "Giám sát cơ khí",
    "tag_alias": "giam-sat-co-khi",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbae"
    },
    "tag_id": 361,
    "tag_name": "Nhân viên cơ khí",
    "tag_alias": "nhan-vien-co-khi",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbb0"
    },
    "tag_id": 362,
    "tag_name": "Thực tập sinh cơ khí",
    "tag_alias": "thuc-tap-sinh-co-khi",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbb2"
    },
    "tag_id": 363,
    "tag_name": "Thợ lắp ráp cơ khí",
    "tag_alias": "tho-lap-rap-co-khi",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbb4"
    },
    "tag_id": 364,
    "tag_name": "Cơ khí chế tạo máy",
    "tag_alias": "co-khi-che-tao-may",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbb6"
    },
    "tag_id": 365,
    "tag_name": "Gia công cơ khí",
    "tag_alias": "gia-cong-co-khi",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbb8"
    },
    "tag_id": 366,
    "tag_name": "Thợ hàn cơ khí",
    "tag_alias": "tho-han-co-khi",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbba"
    },
    "tag_id": 367,
    "tag_name": "Chế tạo cơ khí máy móc",
    "tag_alias": "che-tao-co-khi-may-moc",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbbc"
    },
    "tag_id": 368,
    "tag_name": "Vận hành máy đúc",
    "tag_alias": "van-hanh-may-duc",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbbe"
    },
    "tag_id": 369,
    "tag_name": "Nhân viên vận hành máy ép nhựa",
    "tag_alias": "nhan-vien-van-hanh-may-ep-nhua",
    "tag_parent": 29,
    "tag_index": 1,
    "tag_type": 29,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbc0"
    },
    "tag_id": 370,
    "tag_name": "Giám đốc tiếp thị",
    "tag_alias": "giam-doc-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbc2"
    },
    "tag_id": 371,
    "tag_name": "Trợ lý tiếp thị",
    "tag_alias": "tro-ly-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbc4"
    },
    "tag_id": 372,
    "tag_name": "Trưởng phòng tiếp thị",
    "tag_alias": "truong-phong-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbc6"
    },
    "tag_id": 373,
    "tag_name": "Nhân viên tiếp thị",
    "tag_alias": "nhan-vien-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbc8"
    },
    "tag_id": 374,
    "tag_name": "Thực tập sinh tiếp thị",
    "tag_alias": "thuc-tap-sinh-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbca"
    },
    "tag_id": 375,
    "tag_name": "Chuyên gia tiếp thị",
    "tag_alias": "chuyen-gia-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbcc"
    },
    "tag_id": 376,
    "tag_name": "Cộng tác viên tiếp thị",
    "tag_alias": "cong-tac-vien-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbce"
    },
    "tag_id": 377,
    "tag_name": "Chuyên gia tiếp thị kỹ thuật số",
    "tag_alias": "chuyen-gia-tiep-thi-ky-thuat-so",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbd0"
    },
    "tag_id": 378,
    "tag_name": "Nhân viên tiếp thị kỹ thuật số",
    "tag_alias": "nhan-vien-tiep-thi-ky-thuat-so",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbd2"
    },
    "tag_id": 379,
    "tag_name": "Tư vấn tiếp thị",
    "tag_alias": "tu-van-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbd4"
    },
    "tag_id": 380,
    "tag_name": "Chuyên viên tiếp thị thị trường",
    "tag_alias": "chuyen-vien-tiep-thi-thi-truong",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbd6"
    },
    "tag_id": 381,
    "tag_name": "Tiếp thị nội dung",
    "tag_alias": "tiep-thi-noi-dung",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbd8"
    },
    "tag_id": 382,
    "tag_name": "Chuyên gia tiếp thị chiến lược",
    "tag_alias": "chuyen-gia-tiep-thi-chien-luoc",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbda"
    },
    "tag_id": 383,
    "tag_name": "Truyền thông tiếp thị",
    "tag_alias": "truyen-thong-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbdc"
    },
    "tag_id": 384,
    "tag_name": "Chuyên gia tiếp thị thương mại",
    "tag_alias": "chuyen-gia-tiep-thi-thuong-mai",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbde"
    },
    "tag_id": 385,
    "tag_name": "Chuyên gia phân tích dữ liệu tiếp thị",
    "tag_alias": "chuyen-gia-phan-tich-du-lieu-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbe0"
    },
    "tag_id": 386,
    "tag_name": "Quản lý hoạt động tiếp thị",
    "tag_alias": "quan-ly-hoat-dong-tiep-thi",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbe2"
    },
    "tag_id": 387,
    "tag_name": "Tiếp thị sản phẩm",
    "tag_alias": "tiep-thi-san-pham",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbe4"
    },
    "tag_id": 388,
    "tag_name": "Tiếp thị bán hàng",
    "tag_alias": "tiep-thi-ban-hang",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbe6"
    },
    "tag_id": 389,
    "tag_name": "Tiếp thị Online",
    "tag_alias": "tiep-thi-online",
    "tag_parent": 30,
    "tag_index": 1,
    "tag_type": 30,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbe8"
    },
    "tag_id": 390,
    "tag_name": "Giám đốc truyền thông",
    "tag_alias": "giam-doc-truyen-thong",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbea"
    },
    "tag_id": 391,
    "tag_name": "Nhân viên truyền thông",
    "tag_alias": "nhan-vien-truyen-thong",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbec"
    },
    "tag_id": 392,
    "tag_name": "Chuyên gia truyền thông",
    "tag_alias": "chuyen-gia-truyen-thong",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbee"
    },
    "tag_id": 393,
    "tag_name": "Quảng cáo phương tiện truyền thông",
    "tag_alias": "quang-cao-phuong-tien-truyen-thong",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbf0"
    },
    "tag_id": 394,
    "tag_name": "Nghiên cứu phương tiện truyền thông",
    "tag_alias": "nghien-cuu-phuong-tien-truyen-thong",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbf2"
    },
    "tag_id": 395,
    "tag_name": "Trợ lý truyền thông",
    "tag_alias": "tro-ly-truyen-thong",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbf4"
    },
    "tag_id": 396,
    "tag_name": "Điều phối viên truyền thông xã hội",
    "tag_alias": "dieu-phoi-vien-truyen-thong-xa-hoi",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbf6"
    },
    "tag_id": 397,
    "tag_name": "Chuyên viên phân tích dữ liệu truyền thông",
    "tag_alias": "chuyen-vien-phan-tich-du-lieu-truyen-thong",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbf8"
    },
    "tag_id": 398,
    "tag_name": "Tư vấn truyền thông",
    "tag_alias": "tu-van-truyen-thong",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbfa"
    },
    "tag_id": 399,
    "tag_name": "Truyền thông nội bộ",
    "tag_alias": "truyen-thong-noi-bo",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbfc"
    },
    "tag_id": 400,
    "tag_name": "Truyền thông đối ngoại",
    "tag_alias": "truyen-thong-doi-ngoai",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebbfe"
    },
    "tag_id": 401,
    "tag_name": "Truyền thông đa phương tiện",
    "tag_alias": "truyen-thong-da-phuong-tien",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc00"
    },
    "tag_id": 402,
    "tag_name": "Truyền thông sự kiện",
    "tag_alias": "truyen-thong-su-kien",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc02"
    },
    "tag_id": 403,
    "tag_name": "Tiếp thị truyền thông",
    "tag_alias": "tiep-thi-truyen-thong",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc04"
    },
    "tag_id": 404,
    "tag_name": "Chuyên viên quản lý mạng xã hội",
    "tag_alias": "chuyen-vien-quan-ly-mang-xa-hoi",
    "tag_parent": 31,
    "tag_index": 1,
    "tag_type": 31,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc06"
    },
    "tag_id": 405,
    "tag_name": "Giám đốc hàng hải",
    "tag_alias": "giam-doc-hang-hai",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc08"
    },
    "tag_id": 406,
    "tag_name": "Quản lý hàng hải",
    "tag_alias": "quan-ly-hang-hai",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc0a"
    },
    "tag_id": 407,
    "tag_name": "Kỹ sư hàng hải",
    "tag_alias": "ky-su-hang-hai",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc0c"
    },
    "tag_id": 408,
    "tag_name": "Giám định viên hàng hải",
    "tag_alias": "giam-dinh-vien-hang-hai",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc0e"
    },
    "tag_id": 409,
    "tag_name": "Kỹ sư cơ khí hàng hải",
    "tag_alias": "ky-su-co-khi-hang-hai",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc10"
    },
    "tag_id": 410,
    "tag_name": "Chuyên viên an toàn hàng hải",
    "tag_alias": "chuyen-vien-an-toan-hang-hai",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc12"
    },
    "tag_id": 411,
    "tag_name": "Chuyên viên quản lý cảng",
    "tag_alias": "chuyen-vien-quan-ly-cang",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc14"
    },
    "tag_id": 412,
    "tag_name": "Nhân viên hải quan",
    "tag_alias": "nhan-vien-hai-quan",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc16"
    },
    "tag_id": 413,
    "tag_name": "Thuyền trưởng tàu",
    "tag_alias": "thuyen-truong-tau",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc18"
    },
    "tag_id": 414,
    "tag_name": "Thuyền viên",
    "tag_alias": "thuyen-vien",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc1a"
    },
    "tag_id": 415,
    "tag_name": "Điện hàng hải",
    "tag_alias": "dien-hang-hai",
    "tag_parent": 32,
    "tag_index": 1,
    "tag_type": 32,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc1c"
    },
    "tag_id": 416,
    "tag_name": "Chuyên gia bảo hiểm",
    "tag_alias": "chuyen-gia-bao-hiem",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc1e"
    },
    "tag_id": 417,
    "tag_name": "Tư vấn bán bảo hiểm",
    "tag_alias": "tu-van-ban-bao-hiem",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc20"
    },
    "tag_id": 418,
    "tag_name": "Nhân viên bán bảo hiểm",
    "tag_alias": "nhan-vien-ban-bao-hiem",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc22"
    },
    "tag_id": 419,
    "tag_name": "Môi giới bảo hiểm",
    "tag_alias": "moi-gioi-bao-hiem",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc24"
    },
    "tag_id": 420,
    "tag_name": "Xử lý khiếu nại bảo hiểm",
    "tag_alias": "xu-ly-khieu-nai-bao-hiem",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc26"
    },
    "tag_id": 421,
    "tag_name": "Điều phối viên bảo hiểm",
    "tag_alias": "dieu-phoi-vien-bao-hiem",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc28"
    },
    "tag_id": 422,
    "tag_name": "Chuyên viên phân tích bảo hiểm",
    "tag_alias": "chuyen-vien-phan-tich-bao-hiem",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc2a"
    },
    "tag_id": 423,
    "tag_name": "Quản lý dự án bảo hiểm",
    "tag_alias": "quan-ly-du-an-bao-hiem",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc2c"
    },
    "tag_id": 424,
    "tag_name": "Nhân viên bảo hiểm y tế",
    "tag_alias": "nhan-vien-bao-hiem-y-te",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc2e"
    },
    "tag_id": 425,
    "tag_name": "Chuyên gia tiếp thị bảo hiểm",
    "tag_alias": "chuyen-gia-tiep-thi-bao-hiem",
    "tag_parent": 33,
    "tag_index": 1,
    "tag_type": 33,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc30"
    },
    "tag_id": 426,
    "tag_name": "Nhân viên IT phần cứng",
    "tag_alias": "nhan-vien-it-phan-cung",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc32"
    },
    "tag_id": 427,
    "tag_name": "Nhân viên kiểm tra phần cứng",
    "tag_alias": "nhan-vien-kiem-tra-phan-cung",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc34"
    },
    "tag_id": 428,
    "tag_name": "Nhân viên bảo trì phần cứng",
    "tag_alias": "nhan-vien-bao-tri-phan-cung",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc36"
    },
    "tag_id": 429,
    "tag_name": "Chuyên viên hỗ trợ phần cứng",
    "tag_alias": "chuyen-vien-ho-tro-phan-cung",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc38"
    },
    "tag_id": 430,
    "tag_name": "Kỹ sư hệ thống nhúng",
    "tag_alias": "ky-su-he-thong-nhung",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc3a"
    },
    "tag_id": 431,
    "tag_name": "Chuyên gia quản lý cấu hình phần cứng",
    "tag_alias": "chuyen-gia-quan-ly-cau-hinh-phan-cung",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc3c"
    },
    "tag_id": 432,
    "tag_name": "Chuyên gia an ninh phần cứng",
    "tag_alias": "chuyen-gia-an-ninh-phan-cung",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc3e"
    },
    "tag_id": 433,
    "tag_name": "Sửa chữa phần cứng máy tính",
    "tag_alias": "sua-chua-phan-cung-may-tinh",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc40"
    },
    "tag_id": 434,
    "tag_name": "Nhân viên lắp ráp máy tính",
    "tag_alias": "nhan-vien-lap-rap-may-tinh",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc42"
    },
    "tag_id": 435,
    "tag_name": "Kỹ sư phát triển sản phẩm phần cứng",
    "tag_alias": "ky-su-phat-trien-san-pham-phan-cung",
    "tag_parent": 34,
    "tag_index": 1,
    "tag_type": 34,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc44"
    },
    "tag_id": 436,
    "tag_name": "Kỹ sư phần mềm",
    "tag_alias": "ky-su-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc46"
    },
    "tag_id": 437,
    "tag_name": "Kỹ sư phần mềm hệ thống",
    "tag_alias": "ky-su-phan-mem-he-thong",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc48"
    },
    "tag_id": 438,
    "tag_name": "Kỹ sư trí tuệ nhân tạo",
    "tag_alias": "ky-su-tri-tue-nhan-tao",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc4a"
    },
    "tag_id": 439,
    "tag_name": "Chuyên viên kiểm thử phần mềm",
    "tag_alias": "chuyen-vien-kiem-thu-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc4c"
    },
    "tag_id": 440,
    "tag_name": "Chuyên viên QA QC",
    "tag_alias": "chuyen-vien-qa-qc",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc4e"
    },
    "tag_id": 441,
    "tag_name": "Chuyên gia bảo mật phần mềm",
    "tag_alias": "chuyen-gia-bao-mat-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc50"
    },
    "tag_id": 442,
    "tag_name": "Chuyên viên phân tích nghiệp vụ",
    "tag_alias": "chuyen-vien-phan-tich-nghiep-vu",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc52"
    },
    "tag_id": 443,
    "tag_name": "Chuyên viên PO",
    "tag_alias": "chuyen-vien-po",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc54"
    },
    "tag_id": 444,
    "tag_name": "Chuyên viên hỗ trợ kỹ thuật phần mềm",
    "tag_alias": "chuyen-vien-ho-tro-ky-thuat-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc56"
    },
    "tag_id": 445,
    "tag_name": "Quản lý dự án phần mềm",
    "tag_alias": "quan-ly-du-an-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc58"
    },
    "tag_id": 446,
    "tag_name": "Nhân viên xử lý dữ liệu",
    "tag_alias": "nhan-vien-xu-ly-du-lieu",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc5a"
    },
    "tag_id": 447,
    "tag_name": "Thực tập sinh phần mềm",
    "tag_alias": "thuc-tap-sinh-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc5c"
    },
    "tag_id": 448,
    "tag_name": "Fresher phần mềm",
    "tag_alias": "fresher-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc5e"
    },
    "tag_id": 449,
    "tag_name": "Junior phần mềm",
    "tag_alias": "junior-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc60"
    },
    "tag_id": 450,
    "tag_name": "Lập trình viên phần mềm",
    "tag_alias": "lap-trinh-vien-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc62"
    },
    "tag_id": 451,
    "tag_name": "Chuyên viên phân tích phần mềm",
    "tag_alias": "chuyen-vien-phan-tich-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc64"
    },
    "tag_id": 452,
    "tag_name": "Triển khai phần mềm",
    "tag_alias": "trien-khai-phan-mem",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc66"
    },
    "tag_id": 453,
    "tag_name": "Phát triển di động",
    "tag_alias": "phat-trien-di-dong",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc68"
    },
    "tag_id": 454,
    "tag_name": "Phát triển ứng dụng",
    "tag_alias": "phat-trien-ung-dung",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc6a"
    },
    "tag_id": 455,
    "tag_name": "Lập trình viên web",
    "tag_alias": "lap-trinh-vien-web",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc6c"
    },
    "tag_id": 456,
    "tag_name": "Lập trình viên Game",
    "tag_alias": "lap-trinh-vien-game",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc6e"
    },
    "tag_id": 457,
    "tag_name": "Lập trình viên Java",
    "tag_alias": "lap-trinh-vien-java",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc70"
    },
    "tag_id": 458,
    "tag_name": "Lập trình viên PHP",
    "tag_alias": "lap-trinh-vien-php",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc72"
    },
    "tag_id": 459,
    "tag_name": "Lập trình viên Python",
    "tag_alias": "lap-trinh-vien-python",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc74"
    },
    "tag_id": 460,
    "tag_name": "Lập trình viên C#",
    "tag_alias": "lap-trinh-vien-c",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc76"
    },
    "tag_id": 461,
    "tag_name": "Lập trình viên Ruby",
    "tag_alias": "lap-trinh-vien-ruby",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc78"
    },
    "tag_id": 462,
    "tag_name": "Lập trình viên ASP.Net",
    "tag_alias": "lap-trinh-vien-aspnet",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc7a"
    },
    "tag_id": 463,
    "tag_name": "Lập trình viên Full Stack",
    "tag_alias": "lap-trinh-vien-full-stack",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc7c"
    },
    "tag_id": 464,
    "tag_name": "Lập trình viên Angular JS",
    "tag_alias": "lap-trinh-vien-angular-js",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc7e"
    },
    "tag_id": 465,
    "tag_name": "Lập trình viên backend",
    "tag_alias": "lap-trinh-vien-backend",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc80"
    },
    "tag_id": 466,
    "tag_name": "Lập trình viên frontend",
    "tag_alias": "lap-trinh-vien-frontend",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc82"
    },
    "tag_id": 467,
    "tag_name": "Lập trình C++",
    "tag_alias": "lap-trinh-c",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc84"
    },
    "tag_id": 468,
    "tag_name": "Lập trình JavaScript",
    "tag_alias": "lap-trinh-javascript",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc86"
    },
    "tag_id": 469,
    "tag_name": "Lập trình UI/UX",
    "tag_alias": "lap-trinh-uiux",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc88"
    },
    "tag_id": 470,
    "tag_name": "Lập trình HTML",
    "tag_alias": "lap-trinh-html",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc8a"
    },
    "tag_id": 471,
    "tag_name": "Lập trình Unity",
    "tag_alias": "lap-trinh-unity",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc8c"
    },
    "tag_id": 472,
    "tag_name": "Lập trình Kotlin",
    "tag_alias": "lap-trinh-kotlin",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc8e"
    },
    "tag_id": 473,
    "tag_name": "IT Security",
    "tag_alias": "it-security",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc90"
    },
    "tag_id": 474,
    "tag_name": "IT Support",
    "tag_alias": "it-support",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc92"
    },
    "tag_id": 475,
    "tag_name": "IT Helpdesk",
    "tag_alias": "it-helpdesk",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc94"
    },
    "tag_id": 476,
    "tag_name": "Lập trình NodeJS",
    "tag_alias": "lap-trinh-nodejs",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc96"
    },
    "tag_id": 477,
    "tag_name": "Lập trình ReactJS",
    "tag_alias": "lap-trinh-reactjs",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc98"
    },
    "tag_id": 478,
    "tag_name": "Lập trình VueJS",
    "tag_alias": "lap-trinh-vuejs",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc9a"
    },
    "tag_id": 479,
    "tag_name": "Lập trình Laravel",
    "tag_alias": "lap-trinh-laravel",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc9c"
    },
    "tag_id": 480,
    "tag_name": "Lập trình Magento",
    "tag_alias": "lap-trinh-magento",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebc9e"
    },
    "tag_id": 481,
    "tag_name": "Lập trình Xamarin",
    "tag_alias": "lap-trinh-xamarin",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebca0"
    },
    "tag_id": 482,
    "tag_name": "Lập trình SAP",
    "tag_alias": "lap-trinh-sap",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebca2"
    },
    "tag_id": 483,
    "tag_name": "Lập trình ERP",
    "tag_alias": "lap-trinh-erp",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebca4"
    },
    "tag_id": 484,
    "tag_name": "Lập trình WordPress",
    "tag_alias": "lap-trinh-wordpress",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebca6"
    },
    "tag_id": 485,
    "tag_name": "Lập trình NetWork",
    "tag_alias": "lap-trinh-network",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebca8"
    },
    "tag_id": 486,
    "tag_name": "Lập trình Embedded",
    "tag_alias": "lap-trinh-embedded",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcaa"
    },
    "tag_id": 487,
    "tag_name": "Lập trình Flutter",
    "tag_alias": "lap-trinh-flutter",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcac"
    },
    "tag_id": 488,
    "tag_name": "Lập trình React Native",
    "tag_alias": "lap-trinh-react-native",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcae"
    },
    "tag_id": 489,
    "tag_name": "Lập trình Golang",
    "tag_alias": "lap-trinh-golang",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcb0"
    },
    "tag_id": 490,
    "tag_name": "Lập trình viên IOS",
    "tag_alias": "lap-trinh-vien-ios",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcb2"
    },
    "tag_id": 491,
    "tag_name": "Lập trình viên Android",
    "tag_alias": "lap-trinh-vien-android",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcb4"
    },
    "tag_id": 492,
    "tag_name": "Phát triển đám mây",
    "tag_alias": "phat-trien-dam-may",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcb6"
    },
    "tag_id": 493,
    "tag_name": "Cơ sở dữ liệu SQL",
    "tag_alias": "co-so-du-lieu-sql",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcb8"
    },
    "tag_id": 494,
    "tag_name": "Cơ sở dữ liệu Oracle",
    "tag_alias": "co-so-du-lieu-oracle",
    "tag_parent": 35,
    "tag_index": 1,
    "tag_type": 35,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcba"
    },
    "tag_id": 495,
    "tag_name": "Kỹ sư công nghiệp",
    "tag_alias": "ky-su-cong-nghiep",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcbc"
    },
    "tag_id": 496,
    "tag_name": "Chuyên viên quản lý công nghiệp",
    "tag_alias": "chuyen-vien-quan-ly-cong-nghiep",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcbe"
    },
    "tag_id": 497,
    "tag_name": "Chuyên viên phân tích công nghiệp",
    "tag_alias": "chuyen-vien-phan-tich-cong-nghiep",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcc0"
    },
    "tag_id": 498,
    "tag_name": "Chuyên viên đảm bảo chất lượng công nghiệp",
    "tag_alias": "chuyen-vien-dam-bao-chat-luong-cong-nghiep",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcc2"
    },
    "tag_id": 499,
    "tag_name": "Tự động hóa công nghiệp",
    "tag_alias": "tu-dong-hoa-cong-nghiep",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcc4"
    },
    "tag_id": 500,
    "tag_name": "Công nghiệp ô tô",
    "tag_alias": "cong-nghiep-o-to",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcc6"
    },
    "tag_id": 501,
    "tag_name": "Công nghiệp thực phẩm",
    "tag_alias": "cong-nghiep-thuc-pham",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcc8"
    },
    "tag_id": 502,
    "tag_name": "Công nghiệp hóa chất",
    "tag_alias": "cong-nghiep-hoa-chat",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcca"
    },
    "tag_id": 503,
    "tag_name": "Cơ khí công nghiệp",
    "tag_alias": "co-khi-cong-nghiep",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebccc"
    },
    "tag_id": 504,
    "tag_name": "Chuyên viên nghiên cứu sản phẩm công nghiệp",
    "tag_alias": "chuyen-vien-nghien-cuu-san-pham-cong-nghiep",
    "tag_parent": 36,
    "tag_index": 1,
    "tag_type": 36,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcce"
    },
    "tag_id": 505,
    "tag_name": "Nhân viên pháp chế",
    "tag_alias": "nhan-vien-phap-che",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcd0"
    },
    "tag_id": 506,
    "tag_name": "Giám đốc pháp lý",
    "tag_alias": "giam-doc-phap-ly",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcd2"
    },
    "tag_id": 507,
    "tag_name": "Chuyên gia pháp lý",
    "tag_alias": "chuyen-gia-phap-ly",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcd4"
    },
    "tag_id": 508,
    "tag_name": "Tư vấn pháp lý",
    "tag_alias": "tu-van-phap-ly",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcd6"
    },
    "tag_id": 509,
    "tag_name": "Cố vấn pháp lý",
    "tag_alias": "co-van-phap-ly",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcd8"
    },
    "tag_id": 510,
    "tag_name": "Luật sư dân sự",
    "tag_alias": "luat-su-dan-su",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcda"
    },
    "tag_id": 511,
    "tag_name": "Chuyên viên pháp lý về gia đình",
    "tag_alias": "chuyen-vien-phap-ly-ve-gia-dinh",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcdc"
    },
    "tag_id": 512,
    "tag_name": "Luật thương mại",
    "tag_alias": "luat-thuong-mai",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcde"
    },
    "tag_id": 513,
    "tag_name": "Chuyên viên pháp lý về sở hữu trí tuệ",
    "tag_alias": "chuyen-vien-phap-ly-ve-so-huu-tri-tue",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebce0"
    },
    "tag_id": 514,
    "tag_name": "Luật sư lao động",
    "tag_alias": "luat-su-lao-dong",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebce2"
    },
    "tag_id": 515,
    "tag_name": "Chuyên viên pháp lý về an toàn lao động",
    "tag_alias": "chuyen-vien-phap-ly-ve-an-toan-lao-dong",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebce4"
    },
    "tag_id": 516,
    "tag_name": "Chuyên viên pháp lý về bảo vệ môi trường",
    "tag_alias": "chuyen-vien-phap-ly-ve-bao-ve-moi-truong",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebce6"
    },
    "tag_id": 517,
    "tag_name": "Luật sư quốc tế",
    "tag_alias": "luat-su-quoc-te",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebce8"
    },
    "tag_id": 518,
    "tag_name": "Chuyên viên pháp lý về thuế",
    "tag_alias": "chuyen-vien-phap-ly-ve-thue",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcea"
    },
    "tag_id": 519,
    "tag_name": "Luật sư tài chính",
    "tag_alias": "luat-su-tai-chinh",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcec"
    },
    "tag_id": 520,
    "tag_name": "Luật sư hành chính",
    "tag_alias": "luat-su-hanh-chinh",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcee"
    },
    "tag_id": 521,
    "tag_name": "Chuyên viên pháp lý trong cơ quan nhà nước",
    "tag_alias": "chuyen-vien-phap-ly-trong-co-quan-nha-nuoc",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcf0"
    },
    "tag_id": 522,
    "tag_name": "Chuyên viên pháp lý trong doanh nghiệp",
    "tag_alias": "chuyen-vien-phap-ly-trong-doanh-nghiep",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcf2"
    },
    "tag_id": 523,
    "tag_name": "Chuyên viên pháp lý về bảo hiểm",
    "tag_alias": "chuyen-vien-phap-ly-ve-bao-hiem",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcf4"
    },
    "tag_id": 524,
    "tag_name": "Nhân viên pháp lý chuyên về tố tụng",
    "tag_alias": "nhan-vien-phap-ly-chuyen-ve-to-tung",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcf6"
    },
    "tag_id": 525,
    "tag_name": "Nghiên cứu pháp luật",
    "tag_alias": "nghien-cuu-phap-luat",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcf8"
    },
    "tag_id": 526,
    "tag_name": "Nhà báo pháp luật",
    "tag_alias": "nha-bao-phap-luat",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcfa"
    },
    "tag_id": 527,
    "tag_name": "Chuyên viên hỗ trợ pháp lý",
    "tag_alias": "chuyen-vien-ho-tro-phap-ly",
    "tag_parent": 37,
    "tag_index": 1,
    "tag_type": 37,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcfc"
    },
    "tag_id": 528,
    "tag_name": "Nhân viên hậu cần",
    "tag_alias": "nhan-vien-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebcfe"
    },
    "tag_id": 529,
    "tag_name": "Thực tập sinh hậu cần",
    "tag_alias": "thuc-tap-sinh-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd00"
    },
    "tag_id": 530,
    "tag_name": "Quản lý hậu cần",
    "tag_alias": "quan-ly-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd02"
    },
    "tag_id": 531,
    "tag_name": "Quản lý hậu cần vận tải",
    "tag_alias": "quan-ly-hau-can-van-tai",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd04"
    },
    "tag_id": 532,
    "tag_name": "Trợ lý hậu cần",
    "tag_alias": "tro-ly-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd06"
    },
    "tag_id": 533,
    "tag_name": "Giám đốc hậu cần",
    "tag_alias": "giam-doc-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd08"
    },
    "tag_id": 534,
    "tag_name": "Điều phối viên hậu cần",
    "tag_alias": "dieu-phoi-vien-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd0a"
    },
    "tag_id": 535,
    "tag_name": "Quản lý chuỗi cung ứng",
    "tag_alias": "quan-ly-chuoi-cung-ung",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd0c"
    },
    "tag_id": 536,
    "tag_name": "Quản lý kho",
    "tag_alias": "quan-ly-kho",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd0e"
    },
    "tag_id": 537,
    "tag_name": "Nhân viên kho",
    "tag_alias": "nhan-vien-kho",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd10"
    },
    "tag_id": 538,
    "tag_name": "Nhân viên phụ kho",
    "tag_alias": "nhan-vien-phu-kho",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd12"
    },
    "tag_id": 539,
    "tag_name": "Giám sát kho",
    "tag_alias": "giam-sat-kho",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd14"
    },
    "tag_id": 540,
    "tag_name": "Nhân viên kiểm soát hàng tồn kho",
    "tag_alias": "nhan-vien-kiem-soat-hang-ton-kho",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd16"
    },
    "tag_id": 541,
    "tag_name": "Chuyên gia phân tích chuỗi cung ứng",
    "tag_alias": "chuyen-gia-phan-tich-chuoi-cung-ung",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd18"
    },
    "tag_id": 542,
    "tag_name": "Điều phối chuỗi cung ứng",
    "tag_alias": "dieu-phoi-chuoi-cung-ung",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd1a"
    },
    "tag_id": 543,
    "tag_name": "Chuyên gia về hệ thống hậu cần",
    "tag_alias": "chuyen-gia-ve-he-thong-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd1c"
    },
    "tag_id": 544,
    "tag_name": "Quản lý dự án hậu cần",
    "tag_alias": "quan-ly-du-an-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd1e"
    },
    "tag_id": 545,
    "tag_name": "Nhân viên chứng từ hậu cần",
    "tag_alias": "nhan-vien-chung-tu-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd20"
    },
    "tag_id": 546,
    "tag_name": "Quản lý chuỗi cung ứng hậu cần",
    "tag_alias": "quan-ly-chuoi-cung-ung-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd22"
    },
    "tag_id": 547,
    "tag_name": "Kinh doanh hậu cần",
    "tag_alias": "kinh-doanh-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd24"
    },
    "tag_id": 548,
    "tag_name": "Chuyên viên hỗ trợ hậu cần",
    "tag_alias": "chuyen-vien-ho-tro-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd26"
    },
    "tag_id": 549,
    "tag_name": "Tư vấn hậu cần",
    "tag_alias": "tu-van-hau-can",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd28"
    },
    "tag_id": 550,
    "tag_name": "Quản lý đơn hàng",
    "tag_alias": "quan-ly-don-hang",
    "tag_parent": 38,
    "tag_index": 1,
    "tag_type": 38,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd2a"
    },
    "tag_id": 551,
    "tag_name": "Kỹ sư dầu khí",
    "tag_alias": "ky-su-dau-khi",
    "tag_parent": 39,
    "tag_index": 1,
    "tag_type": 39,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd2c"
    },
    "tag_id": 552,
    "tag_name": "Nhân viên khai thác dầu khí",
    "tag_alias": "nhan-vien-khai-thac-dau-khi",
    "tag_parent": 39,
    "tag_index": 1,
    "tag_type": 39,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd2e"
    },
    "tag_id": 553,
    "tag_name": "Nhân viên kiểm soát chất lượng dầu khí",
    "tag_alias": "nhan-vien-kiem-soat-chat-luong-dau-khi",
    "tag_parent": 39,
    "tag_index": 1,
    "tag_type": 39,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd30"
    },
    "tag_id": 554,
    "tag_name": "Nhân viên khoan dầu khí",
    "tag_alias": "nhan-vien-khoan-dau-khi",
    "tag_parent": 39,
    "tag_index": 1,
    "tag_type": 39,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd32"
    },
    "tag_id": 555,
    "tag_name": "Chuyên viên phân tích dữ liệu dầu khí",
    "tag_alias": "chuyen-vien-phan-tich-du-lieu-dau-khi",
    "tag_parent": 39,
    "tag_index": 1,
    "tag_type": 39,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd34"
    },
    "tag_id": 556,
    "tag_name": "Quản lý dự án dầu khí",
    "tag_alias": "quan-ly-du-an-dau-khi",
    "tag_parent": 39,
    "tag_index": 1,
    "tag_type": 39,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd36"
    },
    "tag_id": 557,
    "tag_name": "Chuyên gia nghiên cứu dầu khí",
    "tag_alias": "chuyen-gia-nghien-cuu-dau-khi",
    "tag_parent": 39,
    "tag_index": 1,
    "tag_type": 39,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd38"
    },
    "tag_id": 558,
    "tag_name": "Vận hành cơ sở chế biến dầu khí",
    "tag_alias": "van-hanh-co-so-che-bien-dau-khi",
    "tag_parent": 39,
    "tag_index": 1,
    "tag_type": 39,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd3a"
    },
    "tag_id": 559,
    "tag_name": "Giám đốc kinh doanh bất động sản",
    "tag_alias": "giam-doc-kinh-doanh-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd3c"
    },
    "tag_id": 560,
    "tag_name": "Trưởng phòng kinh doanh bất động sản",
    "tag_alias": "truong-phong-kinh-doanh-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd3e"
    },
    "tag_id": 561,
    "tag_name": "Nhân viên bán bất động sản",
    "tag_alias": "nhan-vien-ban-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd40"
    },
    "tag_id": 562,
    "tag_name": "Chuyên gia bất động sản",
    "tag_alias": "chuyen-gia-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd42"
    },
    "tag_id": 563,
    "tag_name": "Môi giới bất động sản",
    "tag_alias": "moi-gioi-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd44"
    },
    "tag_id": 564,
    "tag_name": "Tư vấn bất động sản",
    "tag_alias": "tu-van-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd46"
    },
    "tag_id": 565,
    "tag_name": "Quản lý dự án bất động sản",
    "tag_alias": "quan-ly-du-an-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd48"
    },
    "tag_id": 566,
    "tag_name": "Chuyên viên phân tích đầu tư bất động sản",
    "tag_alias": "chuyen-vien-phan-tich-dau-tu-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd4a"
    },
    "tag_id": 567,
    "tag_name": "Chuyên viên tiếp thị bất động sản",
    "tag_alias": "chuyen-vien-tiep-thi-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd4c"
    },
    "tag_id": 568,
    "tag_name": "Trợ lý hành chính bất động sản",
    "tag_alias": "tro-ly-hanh-chinh-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd4e"
    },
    "tag_id": 569,
    "tag_name": "Kỹ sư cơ sở hạ tầng bất động sản",
    "tag_alias": "ky-su-co-so-ha-tang-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd50"
    },
    "tag_id": 570,
    "tag_name": "Chuyên viên thẩm định bất động sản",
    "tag_alias": "chuyen-vien-tham-dinh-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd52"
    },
    "tag_id": 571,
    "tag_name": "Cộng tác viên kinh doanh bất động sản",
    "tag_alias": "cong-tac-vien-kinh-doanh-bat-dong-san",
    "tag_parent": 40,
    "tag_index": 1,
    "tag_type": 40,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd54"
    },
    "tag_id": 572,
    "tag_name": "Nhân viên lễ tân",
    "tag_alias": "nhan-vien-le-tan",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd56"
    },
    "tag_id": 573,
    "tag_name": "Trợ lý lễ tân",
    "tag_alias": "tro-ly-le-tan",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd58"
    },
    "tag_id": 574,
    "tag_name": "Trưởng bộ phận lễ tân",
    "tag_alias": "truong-bo-phan-le-tan",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd5a"
    },
    "tag_id": 575,
    "tag_name": "Lễ tân hành chính",
    "tag_alias": "le-tan-hanh-chinh",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd5c"
    },
    "tag_id": 576,
    "tag_name": "Nhân viên đào tạo lễ tân",
    "tag_alias": "nhan-vien-dao-tao-le-tan",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd5e"
    },
    "tag_id": 577,
    "tag_name": "Lễ tân văn phòng",
    "tag_alias": "le-tan-van-phong",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd60"
    },
    "tag_id": 578,
    "tag_name": "Lễ tân sự kiện",
    "tag_alias": "le-tan-su-kien",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd62"
    },
    "tag_id": 579,
    "tag_name": "Lễ tân phòng khám",
    "tag_alias": "le-tan-phong-kham",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd64"
    },
    "tag_id": 580,
    "tag_name": "Lễ tân partime",
    "tag_alias": "le-tan-partime",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd66"
    },
    "tag_id": 581,
    "tag_name": "Lễ tân không cần kinh nghiệm",
    "tag_alias": "le-tan-khong-can-kinh-nghiem",
    "tag_parent": 41,
    "tag_index": 1,
    "tag_type": 41,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd68"
    },
    "tag_id": 582,
    "tag_name": "Quản lý nhà hàng",
    "tag_alias": "quan-ly-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd6a"
    },
    "tag_id": 583,
    "tag_name": "Giám sát nhà hàng",
    "tag_alias": "giam-sat-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd6c"
    },
    "tag_id": 584,
    "tag_name": "Nhân viên nhà hàng",
    "tag_alias": "nhan-vien-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd6e"
    },
    "tag_id": 585,
    "tag_name": "Nhân viên thu ngân nhà hàng",
    "tag_alias": "nhan-vien-thu-ngan-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd70"
    },
    "tag_id": 586,
    "tag_name": "Nhân viên phục vụ nhà hàng",
    "tag_alias": "nhan-vien-phuc-vu-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd72"
    },
    "tag_id": 587,
    "tag_name": "Lễ tân nhà hàng",
    "tag_alias": "le-tan-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd74"
    },
    "tag_id": 588,
    "tag_name": "Bếp trưởng nhà hàng",
    "tag_alias": "bep-truong-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd76"
    },
    "tag_id": 589,
    "tag_name": "Chuyên viên tiếp thị nhà hàng",
    "tag_alias": "chuyen-vien-tiep-thi-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd78"
    },
    "tag_id": 590,
    "tag_name": "Quản lý chất lượng dịch vụ nhà hàng",
    "tag_alias": "quan-ly-chat-luong-dich-vu-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd7a"
    },
    "tag_id": 591,
    "tag_name": "Bảo vệ nhà hàng",
    "tag_alias": "bao-ve-nha-hang",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd7c"
    },
    "tag_id": 592,
    "tag_name": "Nhân viên bếp",
    "tag_alias": "nhan-vien-bep",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd7e"
    },
    "tag_id": 593,
    "tag_name": "Nhân viên phụ bếp",
    "tag_alias": "nhan-vien-phu-bep",
    "tag_parent": 42,
    "tag_index": 1,
    "tag_type": 42,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd80"
    },
    "tag_id": 594,
    "tag_name": "Quản lý bảo mật",
    "tag_alias": "quan-ly-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd82"
    },
    "tag_id": 595,
    "tag_name": "Giám sát viên bảo mật",
    "tag_alias": "giam-sat-vien-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd84"
    },
    "tag_id": 596,
    "tag_name": "Quản lý hoạt động bảo mật",
    "tag_alias": "quan-ly-hoat-dong-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd86"
    },
    "tag_id": 597,
    "tag_name": "Trưởng phòng bảo mật",
    "tag_alias": "truong-phong-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd88"
    },
    "tag_id": 598,
    "tag_name": "Chuyên gia an toàn bảo mật",
    "tag_alias": "chuyen-gia-an-toan-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd8a"
    },
    "tag_id": 599,
    "tag_name": "Kỹ sư bảo mật",
    "tag_alias": "ky-su-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd8c"
    },
    "tag_id": 600,
    "tag_name": "Chuyên gia bảo mật thông tin",
    "tag_alias": "chuyen-gia-bao-mat-thong-tin",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd8e"
    },
    "tag_id": 601,
    "tag_name": "Quản trị viên bảo mật thông tin",
    "tag_alias": "quan-tri-vien-bao-mat-thong-tin",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd90"
    },
    "tag_id": 602,
    "tag_name": "Chuyên viên an ninh mạng",
    "tag_alias": "chuyen-vien-an-ninh-mang",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd92"
    },
    "tag_id": 603,
    "tag_name": "Quản lý an ninh thông tin",
    "tag_alias": "quan-ly-an-ninh-thong-tin",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd94"
    },
    "tag_id": 604,
    "tag_name": "Chuyên gia an ninh ứng dụng",
    "tag_alias": "chuyen-gia-an-ninh-ung-dung",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd96"
    },
    "tag_id": 605,
    "tag_name": "Chuyên gia đánh giá bảo mật",
    "tag_alias": "chuyen-gia-danh-gia-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd98"
    },
    "tag_id": 606,
    "tag_name": "Kỹ sư hệ thống bảo mật",
    "tag_alias": "ky-su-he-thong-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd9a"
    },
    "tag_id": 607,
    "tag_name": "Đánh giá rủi ro bảo mật",
    "tag_alias": "danh-gia-rui-ro-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd9c"
    },
    "tag_id": 608,
    "tag_name": "Chuyên viên quản lý bảo mật",
    "tag_alias": "chuyen-vien-quan-ly-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebd9e"
    },
    "tag_id": 609,
    "tag_name": "Chuyên viên đào tạo bảo mật",
    "tag_alias": "chuyen-vien-dao-tao-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebda0"
    },
    "tag_id": 610,
    "tag_name": "Phân tích mối đe dọa bảo mật",
    "tag_alias": "phan-tich-moi-de-doa-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebda2"
    },
    "tag_id": 611,
    "tag_name": "Nhân viên bảo mật",
    "tag_alias": "nhan-vien-bao-mat",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebda4"
    },
    "tag_id": 612,
    "tag_name": "Quản lý bảo mật doanh nghiệp",
    "tag_alias": "quan-ly-bao-mat-doanh-nghiep",
    "tag_parent": 43,
    "tag_index": 1,
    "tag_type": 43,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebda6"
    },
    "tag_id": 613,
    "tag_name": "Chuyên gia nghiên cứu khoa học",
    "tag_alias": "chuyen-gia-nghien-cuu-khoa-hoc",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebda8"
    },
    "tag_id": 614,
    "tag_name": "Nghiên cứu khoa học môi trường",
    "tag_alias": "nghien-cuu-khoa-hoc-moi-truong",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdaa"
    },
    "tag_id": 615,
    "tag_name": "Khoa học thí nghiệm",
    "tag_alias": "khoa-hoc-thi-nghiem",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdac"
    },
    "tag_id": 616,
    "tag_name": "Khoa học môi trường",
    "tag_alias": "khoa-hoc-moi-truong",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdae"
    },
    "tag_id": 617,
    "tag_name": "Khoa học máy tính",
    "tag_alias": "khoa-hoc-may-tinh",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdb0"
    },
    "tag_id": 618,
    "tag_name": "Phân tích khoa học dữ liệu",
    "tag_alias": "phan-tich-khoa-hoc-du-lieu",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdb2"
    },
    "tag_id": 619,
    "tag_name": "Trợ lý nghiên cứu khoa học",
    "tag_alias": "tro-ly-nghien-cuu-khoa-hoc",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdb4"
    },
    "tag_id": 620,
    "tag_name": "Kỹ sư công nghệ nano",
    "tag_alias": "ky-su-cong-nghe-nano",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdb6"
    },
    "tag_id": 621,
    "tag_name": "Quản lý dự án công nghệ",
    "tag_alias": "quan-ly-du-an-cong-nghe",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdb8"
    },
    "tag_id": 622,
    "tag_name": "Chuyên viên tiếp thị công nghệ",
    "tag_alias": "chuyen-vien-tiep-thi-cong-nghe",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdba"
    },
    "tag_id": 623,
    "tag_name": "Chuyên gia phân tích thị trường công nghệ",
    "tag_alias": "chuyen-gia-phan-tich-thi-truong-cong-nghe",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdbc"
    },
    "tag_id": 624,
    "tag_name": "Chuyên gia đào tạo công nghệ",
    "tag_alias": "chuyen-gia-dao-tao-cong-nghe",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdbe"
    },
    "tag_id": 625,
    "tag_name": "Nghiên cứu công nghệ",
    "tag_alias": "nghien-cuu-cong-nghe",
    "tag_parent": 44,
    "tag_index": 1,
    "tag_type": 44,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdc0"
    },
    "tag_id": 626,
    "tag_name": "Giám đốc bán hàng",
    "tag_alias": "giam-doc-ban-hang",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdc2"
    },
    "tag_id": 627,
    "tag_name": "Nhân viên bán hàng",
    "tag_alias": "nhan-vien-ban-hang",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdc4"
    },
    "tag_id": 628,
    "tag_name": "Bán hàng online",
    "tag_alias": "ban-hang-online",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdc6"
    },
    "tag_id": 629,
    "tag_name": "Cộng tác viên bán hàng",
    "tag_alias": "cong-tac-vien-ban-hang",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdc8"
    },
    "tag_id": 630,
    "tag_name": "Chuyên viên tư vấn bán hàng",
    "tag_alias": "chuyen-vien-tu-van-ban-hang",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdca"
    },
    "tag_id": 631,
    "tag_name": "Nhân viên bán hàng thu ngân",
    "tag_alias": "nhan-vien-ban-hang-thu-ngan",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdcc"
    },
    "tag_id": 632,
    "tag_name": "Nhân viên bán hàng điện tử",
    "tag_alias": "nhan-vien-ban-hang-dien-tu",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdce"
    },
    "tag_id": 633,
    "tag_name": "Nhân viên bán hàng trong trung tâm thương mại",
    "tag_alias": "nhan-vien-ban-hang-trong-trung-tam-thuong-mai",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdd0"
    },
    "tag_id": 634,
    "tag_name": "Nhân viên bán hàng không cần kinh nghiệm",
    "tag_alias": "nhan-vien-ban-hang-khong-can-kinh-nghiem",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdd2"
    },
    "tag_id": 635,
    "tag_name": "Chuyên viên bán hàng doanh nghiệp",
    "tag_alias": "chuyen-vien-ban-hang-doanh-nghiep",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdd4"
    },
    "tag_id": 636,
    "tag_name": "Chuyên viên bán hàng qua điện thoại",
    "tag_alias": "chuyen-vien-ban-hang-qua-dien-thoai",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdd6"
    },
    "tag_id": 637,
    "tag_name": "Chuyên viên bán hàng trực tuyến",
    "tag_alias": "chuyen-vien-ban-hang-truc-tuyen",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdd8"
    },
    "tag_id": 638,
    "tag_name": "Chuyên viên phát triển kinh doanh",
    "tag_alias": "chuyen-vien-phat-trien-kinh-doanh",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdda"
    },
    "tag_id": 639,
    "tag_name": "Chuyên viên tiếp thị bán hàng",
    "tag_alias": "chuyen-vien-tiep-thi-ban-hang",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebddc"
    },
    "tag_id": 640,
    "tag_name": "Đại diện bán hàng",
    "tag_alias": "dai-dien-ban-hang",
    "tag_parent": 45,
    "tag_index": 1,
    "tag_type": 45,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdde"
    },
    "tag_id": 641,
    "tag_name": "Huấn luyện viên thể thao",
    "tag_alias": "huan-luyen-vien-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebde0"
    },
    "tag_id": 642,
    "tag_name": "Giảng viên thể dục thể thao",
    "tag_alias": "giang-vien-the-duc-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebde2"
    },
    "tag_id": 643,
    "tag_name": "Quản lý câu lạc bộ thể thao",
    "tag_alias": "quan-ly-cau-lac-bo-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebde4"
    },
    "tag_id": 644,
    "tag_name": "Chuyên gia dinh dưỡng thể thao",
    "tag_alias": "chuyen-gia-dinh-duong-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebde6"
    },
    "tag_id": 645,
    "tag_name": "Chuyên gia y tế thể thao",
    "tag_alias": "chuyen-gia-y-te-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebde8"
    },
    "tag_id": 646,
    "tag_name": "Giám sát viên sự kiện thể thao",
    "tag_alias": "giam-sat-vien-su-kien-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdea"
    },
    "tag_id": 647,
    "tag_name": "Quản lý sự kiện thể thao",
    "tag_alias": "quan-ly-su-kien-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdec"
    },
    "tag_id": 648,
    "tag_name": "Chuyên gia phân tích thể thao",
    "tag_alias": "chuyen-gia-phan-tich-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdee"
    },
    "tag_id": 649,
    "tag_name": "Chuyên gia phát triển thể thao",
    "tag_alias": "chuyen-gia-phat-trien-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdf0"
    },
    "tag_id": 650,
    "tag_name": "Tư vấn thể thao",
    "tag_alias": "tu-van-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdf2"
    },
    "tag_id": 651,
    "tag_name": "Nhân viên phòng tập",
    "tag_alias": "nhan-vien-phong-tap",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdf4"
    },
    "tag_id": 652,
    "tag_name": "Chuyên viên tiếp thị thể thao",
    "tag_alias": "chuyen-vien-tiep-thi-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdf6"
    },
    "tag_id": 653,
    "tag_name": "Chuyên gia truyền thông thể thao",
    "tag_alias": "chuyen-gia-truyen-thong-the-thao",
    "tag_parent": 46,
    "tag_index": 1,
    "tag_type": 46,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdf8"
    },
    "tag_id": 654,
    "tag_name": "Quản lý dịch vụ khách hàng",
    "tag_alias": "quan-ly-dich-vu-khach-hang",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdfa"
    },
    "tag_id": 655,
    "tag_name": "Chuyên viên dịch vụ khách hàng",
    "tag_alias": "chuyen-vien-dich-vu-khach-hang",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdfc"
    },
    "tag_id": 656,
    "tag_name": "Trưởng phòng dịch vụ khách hàng",
    "tag_alias": "truong-phong-dich-vu-khach-hang",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebdfe"
    },
    "tag_id": 657,
    "tag_name": "Cố vấn dịch vụ",
    "tag_alias": "co-van-dich-vu",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe00"
    },
    "tag_id": 658,
    "tag_name": "Nhân viên hỗ trợ dịch vụ khách hàng",
    "tag_alias": "nhan-vien-ho-tro-dich-vu-khach-hang",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe02"
    },
    "tag_id": 659,
    "tag_name": "Quản lý chất lượng dịch vụ",
    "tag_alias": "quan-ly-chat-luong-dich-vu",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe04"
    },
    "tag_id": 660,
    "tag_name": "Nhân viên dịch vụ y tế",
    "tag_alias": "nhan-vien-dich-vu-y-te",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe06"
    },
    "tag_id": 661,
    "tag_name": "Chuyên viên dịch vụ cộng đồng",
    "tag_alias": "chuyen-vien-dich-vu-cong-dong",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe08"
    },
    "tag_id": 662,
    "tag_name": "Chuyên viên dịch vụ khách sạn",
    "tag_alias": "chuyen-vien-dich-vu-khach-san",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe0a"
    },
    "tag_id": 663,
    "tag_name": "Chuyên viên tư vấn dịch vụ khách hàng",
    "tag_alias": "chuyen-vien-tu-van-dich-vu-khach-hang",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe0c"
    },
    "tag_id": 664,
    "tag_name": "Chuyên viên phân tích dịch vụ",
    "tag_alias": "chuyen-vien-phan-tich-dich-vu",
    "tag_parent": 47,
    "tag_index": 1,
    "tag_type": 47,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe0e"
    },
    "tag_id": 665,
    "tag_name": "Thư ký giám đốc",
    "tag_alias": "thu-ky-giam-doc",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe10"
    },
    "tag_id": 666,
    "tag_name": "Thư ký tổng giám đốc",
    "tag_alias": "thu-ky-tong-giam-doc",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe12"
    },
    "tag_id": 667,
    "tag_name": "Thư ký hành chính",
    "tag_alias": "thu-ky-hanh-chinh",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe14"
    },
    "tag_id": 668,
    "tag_name": "Thư ký điều hành",
    "tag_alias": "thu-ky-dieu-hanh",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe16"
    },
    "tag_id": 669,
    "tag_name": "Thư ký kinh doanh",
    "tag_alias": "thu-ky-kinh-doanh",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe18"
    },
    "tag_id": 670,
    "tag_name": "Thư ký dự án",
    "tag_alias": "thu-ky-du-an",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe1a"
    },
    "tag_id": 671,
    "tag_name": "Thư ký tòa án",
    "tag_alias": "thu-ky-toa-an",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe1c"
    },
    "tag_id": 672,
    "tag_name": "Thư ký y tế",
    "tag_alias": "thu-ky-y-te",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe1e"
    },
    "tag_id": 673,
    "tag_name": "Thư ký văn phòng",
    "tag_alias": "thu-ky-van-phong",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe20"
    },
    "tag_id": 674,
    "tag_name": "Thư ký pháp lý",
    "tag_alias": "thu-ky-phap-ly",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe22"
    },
    "tag_id": 675,
    "tag_name": "Thư ký tài chính",
    "tag_alias": "thu-ky-tai-chinh",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe24"
    },
    "tag_id": 676,
    "tag_name": "Thư ký sự kiện",
    "tag_alias": "thu-ky-su-kien",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe26"
    },
    "tag_id": 677,
    "tag_name": "Thư ký công chứng",
    "tag_alias": "thu-ky-cong-chung",
    "tag_parent": 48,
    "tag_index": 1,
    "tag_type": 48,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe28"
    },
    "tag_id": 678,
    "tag_name": "Giám đốc du lịch",
    "tag_alias": "giam-doc-du-lich",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe2a"
    },
    "tag_id": 679,
    "tag_name": "Nhân viên du lịch",
    "tag_alias": "nhan-vien-du-lich",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe2c"
    },
    "tag_id": 680,
    "tag_name": "Thực tập sinh du lịch",
    "tag_alias": "thuc-tap-sinh-du-lich",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe2e"
    },
    "tag_id": 681,
    "tag_name": "Nhân viên tư vấn du lịch",
    "tag_alias": "nhan-vien-tu-van-du-lich",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe30"
    },
    "tag_id": 682,
    "tag_name": "Điều phối viên du lịch",
    "tag_alias": "dieu-phoi-vien-du-lich",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe32"
    },
    "tag_id": 683,
    "tag_name": "Hướng dẫn viên du lịch",
    "tag_alias": "huong-dan-vien-du-lich",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe34"
    },
    "tag_id": 684,
    "tag_name": "Chuyên viên tiếp thị du lịch",
    "tag_alias": "chuyen-vien-tiep-thi-du-lich",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe36"
    },
    "tag_id": 685,
    "tag_name": "Cộng tác viên du lịch trực tuyến",
    "tag_alias": "cong-tac-vien-du-lich-truc-tuyen",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe38"
    },
    "tag_id": 686,
    "tag_name": "Nhân viên kinh doanh du lịch",
    "tag_alias": "nhan-vien-kinh-doanh-du-lich",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe3a"
    },
    "tag_id": 687,
    "tag_name": "Nhân viên bán tour",
    "tag_alias": "nhan-vien-ban-tour",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe3c"
    },
    "tag_id": 688,
    "tag_name": "Nhân viên điều hành tour",
    "tag_alias": "nhan-vien-dieu-hanh-tour",
    "tag_parent": 49,
    "tag_index": 1,
    "tag_type": 49,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe3e"
    },
    "tag_id": 689,
    "tag_name": "Nhân viên kinh doanh",
    "tag_alias": "nhan-vien-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe40"
    },
    "tag_id": 690,
    "tag_name": "Chuyên viên kinh doanh",
    "tag_alias": "chuyen-vien-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe42"
    },
    "tag_id": 691,
    "tag_name": "Giám đốc kinh doanh",
    "tag_alias": "giam-doc-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe44"
    },
    "tag_id": 692,
    "tag_name": "Trưởng phòng kinh doanh",
    "tag_alias": "truong-phong-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe46"
    },
    "tag_id": 693,
    "tag_name": "Thực tập kinh doanh",
    "tag_alias": "thuc-tap-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe48"
    },
    "tag_id": 694,
    "tag_name": "Cộng tác viên kinh doanh",
    "tag_alias": "cong-tac-vien-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe4a"
    },
    "tag_id": 695,
    "tag_name": "Tư vấn kinh doanh",
    "tag_alias": "tu-van-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe4c"
    },
    "tag_id": 696,
    "tag_name": "Phân tích kinh doanh",
    "tag_alias": "phan-tich-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe4e"
    },
    "tag_id": 697,
    "tag_name": "Quản lý dự án kinh doanh",
    "tag_alias": "quan-ly-du-an-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe50"
    },
    "tag_id": 698,
    "tag_name": "Chuyên viên chiến lược kinh doanh",
    "tag_alias": "chuyen-vien-chien-luoc-kinh-doanh",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe52"
    },
    "tag_id": 699,
    "tag_name": "Nhân viên kinh doanh parttime",
    "tag_alias": "nhan-vien-kinh-doanh-parttime",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe54"
    },
    "tag_id": 700,
    "tag_name": "Kinh doanh thực phẩm",
    "tag_alias": "kinh-doanh-thuc-pham",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe56"
    },
    "tag_id": 701,
    "tag_name": "Kinh doanh đồ uống",
    "tag_alias": "kinh-doanh-do-uong",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe58"
    },
    "tag_id": 702,
    "tag_name": "Kinh doanh ô tô",
    "tag_alias": "kinh-doanh-o-to",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe5a"
    },
    "tag_id": 703,
    "tag_name": "Kinh doanh phụ tùng",
    "tag_alias": "kinh-doanh-phu-tung",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe5c"
    },
    "tag_id": 704,
    "tag_name": "Kinh doanh văn phòng phẩm",
    "tag_alias": "kinh-doanh-van-phong-pham",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe5e"
    },
    "tag_id": 705,
    "tag_name": "Kinh doanh quảng cáo",
    "tag_alias": "kinh-doanh-quang-cao",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe60"
    },
    "tag_id": 706,
    "tag_name": "Kinh doanh phần mềm",
    "tag_alias": "kinh-doanh-phan-mem",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe62"
    },
    "tag_id": 707,
    "tag_name": "Kinh doanh online",
    "tag_alias": "kinh-doanh-online",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe64"
    },
    "tag_id": 708,
    "tag_name": "Kinh doanh nội thất",
    "tag_alias": "kinh-doanh-noi-that",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe66"
    },
    "tag_id": 709,
    "tag_name": "Kinh doanh hóa chất",
    "tag_alias": "kinh-doanh-hoa-chat",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe68"
    },
    "tag_id": 710,
    "tag_name": "Kinh doanh xăng dầu",
    "tag_alias": "kinh-doanh-xang-dau",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe6a"
    },
    "tag_id": 711,
    "tag_name": "Kinh doanh thời trang",
    "tag_alias": "kinh-doanh-thoi-trang",
    "tag_parent": 50,
    "tag_index": 1,
    "tag_type": 50,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe6c"
    },
    "tag_id": 712,
    "tag_name": "Biên dịch tiếng Nhật",
    "tag_alias": "bien-dich-tieng-nhat",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe6e"
    },
    "tag_id": 713,
    "tag_name": "Biên dịch tiếng Anh",
    "tag_alias": "bien-dich-tieng-anh",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe70"
    },
    "tag_id": 714,
    "tag_name": "Biên dịch tiếng Trung",
    "tag_alias": "bien-dich-tieng-trung",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe72"
    },
    "tag_id": 715,
    "tag_name": "Biên dịch tiếng Hàn",
    "tag_alias": "bien-dich-tieng-han",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe74"
    },
    "tag_id": 716,
    "tag_name": "Biên dịch tiếng Tây Ban Nha",
    "tag_alias": "bien-dich-tieng-tay-ban-nha",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe76"
    },
    "tag_id": 717,
    "tag_name": "Nhân viên tiếng Anh",
    "tag_alias": "nhan-vien-tieng-anh",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe78"
    },
    "tag_id": 718,
    "tag_name": "Nhân viên tiếng Nhật",
    "tag_alias": "nhan-vien-tieng-nhat",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe7a"
    },
    "tag_id": 719,
    "tag_name": "Nhân viên tiếng Tây Ban Nha",
    "tag_alias": "nhan-vien-tieng-tay-ban-nha",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe7c"
    },
    "tag_id": 720,
    "tag_name": "Nhân viên bán thời gian",
    "tag_alias": "nhan-vien-ban-thoi-gian",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe7e"
    },
    "tag_id": 721,
    "tag_name": "Thực tập sinh partime",
    "tag_alias": "thuc-tap-sinh-partime",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe80"
    },
    "tag_id": 722,
    "tag_name": "Nhân viên thời vụ",
    "tag_alias": "nhan-vien-thoi-vu",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe82"
    },
    "tag_id": 723,
    "tag_name": "Việc làm trực tuyến",
    "tag_alias": "viec-lam-truc-tuyen",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
},
{
    "_id": {
        "$oid": "66c693283c7168f1036ebe84"
    },
    "tag_id": 724,
    "tag_name": "Việc làm cộng tác viên",
    "tag_alias": "viec-lam-cong-tac-vien",
    "tag_parent": 51,
    "tag_index": 1,
    "tag_type": 51,
    "tag_create_date": 1684728135,
    "tag_edit_date": 1684728135
}]

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
$(document).ready(function () {
    $('#s_loc').CustomSelect({
        placeholder: 'Tất cả địa điểm',
        searchPlaceholder: 'Tìm kiếm...'
    });
    var city_input = $('#city_input').val();
    $('#s_loc').val(city_input).trigger('change');

    $('#s_loc').change(function () {

    })
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
$('.search_input').one('click', function() {
    cateList.forEach(function(category) {
        var item = '<li class="fw-500">' + category.cat_name + '</li>';
        cateItems.push(item);
        $('.remind-lis-box').append(item);
    });
    loadSearchHistory();
});

var tagItems = [];
data_tags2.forEach(function (tag) {
    var item = '<li class="">' + tag.tag_name + '</li>';
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

$('.remind-lis-box').on('click', 'li', function () {
    var text = $(this).text();
    $('#s_key').val(text);
    $('.search-remind').removeClass('active');

    // Luồng mới - Chọn chuyển luôn
    handleSearch()
});

$('.remind-his-box').on('click', 'li', function () {
    var text = $(this).text();
    $('#s_key').val(text);
    $('.search-remind').removeClass('active');

    // Luồng mới - Chọn chuyển luôn
    handleSearch()
});

$('#s_key').on('input', function () {
    var inputText = removeDiacritics($(this).val().toLowerCase());

    if (inputText === '') {
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

function getCategoryIdByName(cat_name) {
    const category = cateList.find(category => category.cat_name === cat_name);
    return category ? category.cat_id : null;
}

function getCityNameById(id) {
    const city = listCities.find(city => city.cit_id === id);
    return city ? city.cit_name : null;
}

function findAliasByTag(label) {
    const tag = data_tags2.find(tag => tag.tag_name === label);
    return tag ? tag.tag_alias : '';
}

function convertToUrl(name) {
    return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase();
}

function handleSearch() {
    var keyword = $('#s_key').val();
    var cit_id = $('#s_loc').val();
    if (keyword) {
        var searchKeywords = localStorage.getItem('searchKeywords');

        if (searchKeywords) {
            searchKeywords = JSON.parse(searchKeywords);
            if (!searchKeywords.includes(keyword)) {
                searchKeywords.push(keyword);
                localStorage.setItem('searchKeywords', JSON.stringify(searchKeywords));
            }
        } else {
            searchKeywords = [keyword];
            localStorage.setItem('searchKeywords', JSON.stringify(searchKeywords));
        }
    }
    if (!keyword && (cit_id == 0 || cit_id == null)) {
        window.location.href = '/';
    } else {
        var url = '/tim-viec-lam';

        if (keyword && getCategoryIdByName(keyword) && (cit_id == 0 || cit_id == null)) {
            var convertCat = convertToUrl(keyword);
            url += '-' + convertCat;
        } else if (keyword && findAliasByTag(keyword) && (cit_id == 0 || cit_id == null)) {
            var convertCat = findAliasByTag(keyword);
            url += '-' + convertCat;
        } else if (keyword && findAliasByTag(keyword) && cit_id != 0) {
            var convertCat = findAliasByTag(keyword);
            var convertCit = convertToUrl(getCityNameById(parseInt(cit_id)));
            url += '-' + convertCat + '-tai-' + convertCit;
        } else if (keyword && getCategoryIdByName(keyword) && cit_id != 0) {
            var convertCat = convertToUrl(keyword);
            var convertCit = convertToUrl(getCityNameById(parseInt(cit_id)));
            url += '-' + convertCat + '-tai-' + convertCit;
        } else if (!keyword && !getCategoryIdByName(keyword) && cit_id != 0) {
            var convertCit = convertToUrl(getCityNameById(parseInt(cit_id)));
            url += '-tai-' + convertCit;
        } else if (keyword && !getCategoryIdByName(keyword) && cit_id != 0) {
            var convertCit = convertToUrl(getCityNameById(parseInt(cit_id)));
            url += '-tai-' + convertCit + '?name=' + encodeURIComponent(keyword);
        }

        var queryParams = [];
        if (keyword && !getCategoryIdByName(keyword) && !findAliasByTag(keyword) && (cit_id == 0 || cit_id == null)) {
            queryParams.push('name=' + keyword);
        }

        if (queryParams.length > 0) {
            url += '?' + queryParams.join('&');
        }

        window.location.href = url;
    }
}

$('.search-btn').click(function () {
    handleSearch()
});