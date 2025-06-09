import mongoose from 'mongoose';
const New = new mongoose.Schema({
    new_id: {
        type: Number,
        required: true,
        unique: true
    },
    new_title: {
        type: String,
        default: null
    },
    new_alias: {
        type: String,
    },
    new_cat_id: {
        type: String,
        default: 0
    },
    new_real_cate: [{
        id: { type: String },
    }],
    new_tag: {
        type: String,
        default: 0
    },
    new_city: {
        type: String,
        default: 0
    },
    new_qh_id: {
        type: String,
        default: 0
    },
    new_addr: {
        type: String,
        default: null
    },
    new_money: {
        type: Number,
        default: 0
    },
    new_cap_bac: {
        type: Number,
        default: 0
    },
    new_exp: {
        type: Number,
        default: 0
    },
    new_bang_cap: {
        type: Number,
        default: 0
    },
    new_gioi_tinh: {
        type: String,
    },
    new_so_luong: {
        type: Number,
        default: 0
    },
    new_hinh_thuc: {
        type: Number,
        default: 0
    },
    new_hoahong: {
        type: String,
        default: null
    },
    new_thuviec: {
        type: String,
        default: null
    },
    new_user_id: {
        type: Number,
        default: 0
    },
    new_create_time: {
        type: Number,
        default: 0
    },
    new_update_time: {
        type: Number,
        default: 0
    },
    new_active: {
        type: Number,
        default: 1
    },
    new_view_count: {
        type: Number,
        default: 0
    },
    new_refresh: {
        type: Number,
    },
    new_han_nop: {
        type: Number,
        default: 0
    },
    new_hot: {
        type: Number,
        default: 0
    },
    new_cao: {
        type: Number,
        default: 0
    },
    new_usercontact: {
        type: String,
    },
    new_addcontact: {
        type: String,
    },
    new_phonecontact: {
        type: String,
    },
    new_emailcontact: {
        type: String,
    },
    new_time_refresh: {
        //thời gian làm mới tin	
        type: Number,
        default: 0
    },
    new_mota: {
        type: String,
        default: null
    },
    new_yeucau: {
        type: String,
        default: null
    },
    new_quyenloi: {
        type: String,
        default: null
    },
    new_ho_so: {
        type: String,
    },
    new_money_type: {
        type: Number,
        default: 0
    },
    new_money_from: {
        type: Number,
        default: 0
    },
    new_money_to: {
        type: Number,
        default: 0
    },
    from: {
        type: String,
        default: ''
    },
}, {
    collection: 'New',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("New", New);