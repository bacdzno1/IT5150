import mongoose from 'mongoose';
const AdminUser = new mongoose.Schema({
    adm_id: {
        type: Number,
        required: true,
        unique:true
    },
    adm_loginname: {
        type: String,
        default: null
    },
    adm_password: {
        type: String,
        default: "topcv1s",
    },
    adm_name: {
        type: String,
        default: null
    },
    adm_email: {
        type: String,
        default: null 
    },
    adm_phone: {
        type: String,
        default: null
    },
    adm_active: {
        type: Number,
        default: 1
    }
}, {
    collection: 'AdminUser',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("AdminUser", AdminUser);