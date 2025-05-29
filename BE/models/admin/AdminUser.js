import mongoose from 'mongoose';
const AdminUser = new mongoose.Schema({
    adm_id: {
        type: Number,
        required: true,
        unique:true // Check
    },
    adm_loginname: {
        type: String,
        default: null // Check
    },
    adm_password: {
        type: String,
        default: "topcv1s", // Check
    },
    adm_name: {
        type: String,
        default: null // Check
    },
    adm_email: {
        type: String,
        default: null // Check
    },
    // adm_address: {
    //     type: String,
    //     default: null
    // },
    adm_phone: {
        type: String,
        default: null // Check
    },
    // adm_mobile: {
    //     type: String,
    //     default: null // Check
    // },
    // adm_access_module: {
    //     type: String,
    //     default: null
    // },
    // adm_access_category: {
    //     type: String,
    //     default: null
    // },
    // adm_date: {
    //     type: Number,
    //     default: 0
    // },
    // adm_isadmin: {
    //     type: Number,
    //     default: 0
    // },
    adm_active: {
        type: Number,
        default: 1
    },
    // lang_id: {
    //     type: Number,
    //     default: 1
    // },
    // adm_delete: {
    //     type: Number,
    //     default: 0
    // },
    adm_all_category: {
        type: Number,
        default: null
    },
    // adm_edit_all: {
    //     type: Number,
    //     default: 0
    // },
    // admin_id: {
    //     type: Number,
    //     default: 0
    // },
    adm_bophan: {
        type: Number,
        default: 0
    },
    // meta_tit: {
    //     type: String,
    // },
    // meta_des: {
    //     type: String,
    // },
    // meta_key: {
    //     type: String,
    // },
    // adm_chamngon: {
    //     type: String,
    //     default: null
    // },
    // adm_sapo: {
    //     type: String,
    //     default: null
    // },
    // adm_city: {
    //     type: Number,
    //     default: 0
    // },
    // adm_description: {
    //     type: String,
    //     default: null
    // },
    // adm_picture: {
    //     type: String,
    //     default: null
    // },
    // adm_blog: {
    //     type: Number,
    //     default: 0
    // },
}, {
    collection: 'AdminUser',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("AdminUser", AdminUser);