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
    usc_company_info: {
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
}, {
    collection: 'UserCompany',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserCompany", UserCompany);