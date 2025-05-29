import mongoose from 'mongoose';
const UserCompany = new mongoose.Schema({
    usc_id: {
        type: Number,
        required: true,
        unique: true
    },
    usc_phone_tk: {
        type: String,
        default: null
    },
    usc_email: {
        type: String,
        default: null
    },
    usc_name: {
        type: String,
        default: null
    },
    usc_name_add: {
        type: String,
        default: null
    },
    usc_name_phone: {
        type: String,
        default: null
    },
    usc_name_email: {
        type: String,
        default: null
    },
    usc_pass: {
        type: String,
        default: null
    },
    usc_company: {
        type: String,
        default: null
    },
    usc_alias: {
        type: String,
        default: null
    },
    usc_md5: {
        type: String,
        default: null
    },
    usc_redirect: {
        type: String,
        default: null
    },
    usc_type: {
        type: Number,
        default: 0
    },
    usc_order: {
        type: Number,
        default: 0
    },
    usc_address: {
        type: String,
        default: null
    },
    usc_phone: {
        type: String,
        default: null
    },
    usc_logo: {
        type: String,
        default: null
    },
    usc_size: {
        type: Number,
        default: 0
    },
    DateOfIncorporation: {
        type: Number,
        default: 0
    },
    usc_loai_hinh: {
        type: Number,
    },
    usc_website: {
        type: String,
        default: null
    },
    usc_city: {
        type: String,
        default: 0
    },
    usc_district: {
        type: String,
        default: 0
    },
    usc_create_time: {
        type: Number,
        default: 0
    },
    usc_update_time: {
        type: Number,
        default: 0
    },
    usc_time_signin: {
        type: Number,
    },
    usc_view_count: {
        type: Number,
        default: 0
    },
    usc_money: {
        type: Number,
        default: 0
    },
    usc_active: {
        type: Number,
        default: 1
    },
    usc_mail: {
        type: Number,
        default: 0
    },
    usc_mst: {
        type: String,
        default: null
    },
    usc_authentic: {
        type: Number,
        default: 0
    },
    usc_otp: {
        type: Number,
        default: 0
    },
    usc_security: {
        type: Number,
        default: 0
    },
    usc_show: {
        type: Number,
        default: 1
    },
    usc_lat: {
        type: String,
        default: null
    },
    usc_long: {
        type: String,
        default: null
    },
    usc_stop_mail: {
        type: Number,
        default: 0
    },
    usc_sent_blog: {
        type: Number,
        default: 0
    },
    meta_tit: {
        type: String,
    },
    meta_key: {
        type: String,
    },
    meta_des: {
        type: String,
    },
    update_latlng: {
        type: Number,
        default: 0
    },
    is_login: {
        type: Number,
        default: 0
    },
    register: {
        type: Number,
        default: 1
    },
    ip_address: {
        type: String,
    },
    ip_difference_login: {
        type: String,
        default: 0
    },
    usc_skype: {
        type: String,
        default: null
    },
    usc_sent_bg: {
        type: Number,
        default: 0
    },
    usc_new_hethan: {
        type: Number,
        default: 0
    },
    usc_index: {
        type: Number,
        default: 1
    },
    usc_kd: {
        type: Number,
        default: 0
    },
    usc_kd_crm: {
        type: Number,
        default: 0
    },
    usc_lock: {
        type: Number,
        default: 1
    },
    site_from: { // 1 - topcv
        type: Number,
        default: 0
    },
    scan_logo: {
        type: Number,
        default: 0
    },
    quet_cds: {
        type: Number,
        default: 0
    },
    usc_resouce: {
        // Nguồn khách hàng (CRM)	
        type: Number,
    },
    usc_group: {
        //	Nhóm khách hàng (CRM)	
        type: Number,

    },
    usc_status: {
        //Trạng thái khách hàng (CRM)
        type: Number,

    },
    usc_name_gender: {
        //Giới tính (CRM)
        type: Number,

    },
    usc_name_birth: {
        //Ngày sinh (CRM)
        type: String,

    },
    usc_crm: {
        type: Number,
        default: 0
    },
    up_crm: {
        type: Number,
        default: 0
    },
    dk: {
        //1: ntd tự đăng ký,2 : nhập liệu
        type: Number,
        default: 1
    },
    usc_company_info: {
        type: String,
        default: null
    },
    usc_note: {
        type: String,
        default: null
    },
    image_com: {
        type: String,
    },
    usc_boss: {
        type: String,

    },
    financial_sector: [{
        id: {
            type: String
        }
    }],
    usc_like: {
        type: Number,
        default: 0
    },
    baocao: { // Phục vụ cho quá trình báo cáo, 1 - Có tính vào, 2 - Không tính 
        type: Number,
        default: 0
    },
    idQLC: { // id hung ha tu chia gio
        type: Number,
        default: 0
    }
}, {
    collection: 'UserCompany',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserCompany", UserCompany);