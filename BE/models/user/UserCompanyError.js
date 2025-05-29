import mongoose from 'mongoose';
const UserCompanyError = new mongoose.Schema({
    err_id: {
        type: Number,
        required: true,
        unique:true
    },
    err_usc_email: {
        type: String,
        default: null
    },
    err_usc_phone_tk: {
        type: String,
        default: null
    },
    err_usc_company: {
        type: String,
        default: null
    },
    err_usc_phone: {
        type: String,
        default: null
    },
    err_email_lh: {
        type: String,
        default: null
    },
    err_usc_address: {
        type: String,
        default: null
    },
    err_usc_city: {
        type: String,
        default: 0
    },
    err_usc_district: {
        type: Number,
        default: 0
    },
    err_usc_multi: {
        type: String,
        default: null
    },
    err_usc_create: {
        type: Number,
        default: 0
    },
    err_usc_kd: {
        type: Number,
        default: 0,
    }
}, {
    collection: 'UserCompanyError',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserCompanyError", UserCompanyError);