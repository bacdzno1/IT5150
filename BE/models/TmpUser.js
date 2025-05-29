import mongoose from 'mongoose';
const TmpUser = new mongoose.Schema({
    tmp_id: {
        type: Number,
        required: true,
        unique:true
    },
    tmp_email: {
        type: String,
    },
    tmp_phone_tk: {
        type: String,
        default: null
    },
    tmp_email_lh: {
        type: String,
        default: null
    },
    tmp_pass: {
        type: String,
    },
    tmp_name: {
        type: String,
    },
    tmp_phone: {
        type: String,
    },
    tmp_city: {
        type: Number,
    },
    tmp_distric: {
        type: Number,
        default: null
    },
    tmp_address: {
        type: String,
    },
    tmp_job_name: {
        type: String,
    },
    tmp_job_city: {
        type: String,
    },
    tmp_job_district: {
        type: String,
    },
    tmp_nganh_nghe: {
        type: String,
    },
    tmp_authentic: {
        type: Number,
    },
    tmp_time: {
        type: Number,
    },
    tmp_register: {
        type: Number,
        default: 1
    },
    tmp_image: {
        type: String,
        default: null
    },
    tmp_emp: {
        //chia ứng viên lỗi cho nhập liệu gọi
        type: Number,
        default: 0
    },
    error: {
        //ứng viên lỗi
        type: Number,
        default: 0
    },
    client_ip: {
        type: String,
        default: null
    },
    deny: { // Bị loại ở UV đăng ký lỗi 
        type: Number,
        default: 0
    }
}, {
    collection: 'TmpUser',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TmpUser", TmpUser);