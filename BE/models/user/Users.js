import mongoose from 'mongoose';
const Users = new mongoose.Schema({
    use_id: {
        type: Number,
        required: true,
        unique: true
    },
    use_mail: {
        type: String,
    },
    use_phone_tk: {
        //	tk ứng viên đăng ký bằng sđt
        type: String,
        default: null
    },
    use_phone: {
        type: String,
    },
    use_email_contact: {
        //email liên hệ
        type: String,
        default: null
    },
    use_pass: {
        type: String,
        default: null
    },
    use_time: {
        type: String,
    },
    use_authentic: {
        type: Number,
        default: 0
    },
    use_otp: {
        type: Number,
        default: 0
    },
    register_way: {
        type: Number,
        default: 0
    },
    use_name: {
        type: String,
        default: null
    },
    is_login: {
        type: Number,
        default: 0
    },
    last_login: {
        type: Number,
        default: 0
    },
    use_city: {
        type: Number,
        default: 0
    },
    use_district: {
        type: String,
    },
    address: {
        type: String,
    },
    use_logo: {
        type: String,
        default: null
    },
    birthday: {
        type: Number,
        default: 0
    },
    use_job_name: {
        type: String,
    },
    use_city_job: [{
        id: { type: String },
    }],
    use_nganh_nghe: [{
        id: { type: String },
    }],
    use_district_job: [{
        id: { type: String },
    }],
    gender: {
        type: Number,
        default: 0
    },
    lg_honnhan: {
        type: Number,
        default: null
    },
    school_name: {
        type: String,
        default: null
    },
    rank: {
        type: Number,
        default: null
    },
    exp_years: {
        type: Number,
        default: 0
    },
    salary: {
        type: Number,
        default: 0
    },
    work_option: {
        type: Number,
        default: 0
    },
    cap_bac_mong_muon: {
        type: String,
        default: null
    },
    muc_tieu_nghe_nghiep: {
        type: String,
        default: null
    },
    ki_nang_ban_than: {
        type: String,
        default: null
    },
    use_view_count: {
        type: Number,
        default: 0
    },
    use_create_time: {
        type: Number,
        required: true,
    },
    use_update_time: {
        type: Number,
        required: true,
    },
    use_hocvan: {
        type: Number,
        default: 0
    },
    use_show: {
        type: Number,
        default: 1
    },
    use_lat: {
        type: String
    },
    use_long: {
        type: String
    },
    register: {
        type: Number,
        default: 0
    },
    update_latlng: {
        type: Number,
        default: 0
    },
    usc_search: {
        type: Number,
        default: 1
    },
    use_passCV: {
        type: Number,
        default: 0
    },
    use_config: {
        type: Number,
        default: 0
    },
    use_stop_mail: {
        type: Number,
        default: 0
    },
    use_sent_blog: {
        type: Number,
        default: 0
    },
    use_sent_job: {
        type: Number,
        default: 0
    },
    site_from: {
        type: Number,
        default: 0
    },
    scan_logo: {
        type: Number,
        default: 0
    },
    sent_uv: {
        type: Number,
        default: 0
    },
    use_lock: {
        type: Number,
        default: 1
    },
    tmp_id: {
        type: Number,
        default: 0
    },
    quet_cds: {
        type: Number,
        default: 0
    },
    scan_ai: {
        //1: đã đẩy dữ liệu sang api	
        type: Number,
        default: 0
    },
    idChat: {
        type: Number,
        default: 0
    },
    checkImgCV:{ // Check ảnh cv xem có chưa
        type:Number,
        default : 1
    },
    timeExp: {
        type: Number,
        default: 0
    }
}, {
    collection: 'Users',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("Users", Users);