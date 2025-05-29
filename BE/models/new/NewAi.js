import mongoose from 'mongoose';
const NewAI = new mongoose.Schema({
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
        default: 0
    },
    new_cate_id: {
        type: String,
        default: 0
    },
    new_category: {
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
        default: 0
    },
    new_money: {
        type: String,
        default: 0
    },
    new_cap_bac: {
        type: String,
        default: 0
    },
    new_exp: {
        type: String,
        default: 0
    },
    new_bang_cap: {
        type: String,
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
        type: String,
        default: 0
    },
    new_create_time: {
        type: String,
        default: 0
    },
    new_create_time2: {
        type: Number,
        default: 0
    },
    new_han_nop: {
        type: String,
        default: 0
    },
    new_usercontact: {
        type: String,
        default: 0
    },
    new_addcontact: {
        type: String,
        default: 0
    },
    new_phonecontact: {
        type: String,
        default: 0
    },
    new_emailcontact: {
        type: String,
        default: 0
    },
    new_mota: {
        type: String,
        default: 0
    },
    new_yeucau: {
        type: String,
        default: 0
    },
    new_quyenloi: {
        type: String,
        default: 0
    },
    new_company_name:{
        type: String,
        default:0
    }
}, {
    collection: 'NewAI',
    versionKey: false,
    timestamp: true
});
NewAI
export default mongoose.model("NewAI", NewAI);