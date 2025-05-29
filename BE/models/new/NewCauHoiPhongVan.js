import mongoose from 'mongoose';
const NewCauHoiPhongVan = new mongoose.Schema({
    new_id: {
        type: Number,
        required: true,
        unique:true
    },
    admin_id: {
        type: Number,
        default: 0
    },
    lang_id: {
        type: String,
        default: 1
    },
    new_title: {
        type: String,
    },
    new_title_rewrite: {
        type: String,
    },
    new_301: {
        type: String,
    },
    new_picture: {
        type: String,
    },
    new_picture_web: {
        type: String,
    },
    new_teaser: {
        type: String,
    },
    new_description: {
        type: String,
    },
    new_tt: {
        type: String,
    },
    new_des: {
        type: String,
    },
    new_keyword: {
        type: String,
    },
    new_category_id: {
        type: Number,
    },
    new_date: {
        type: Number,
    },
    new_admin_edit: {
        type: Number,
        default: 0
    },
    new_date_last_edit: {
        type: Number,
        default: 0
    },
    new_order: {
        type: Number,
        default: 0
    },
    new_hits: {
        type: Number,
        default: 0
    },
    new_active: {
        type: Number,
        default: 1
    },
    new_edited: {
        type: Number,
        default: 0
    },
    new_time_edit: {
        type: Number,
    },
    new_hot: {
        type: Number,
        default: 0
    },
    new_new: {
        type: Number,
        default: 0
    },
    new_view: {
        type: Number,
        default: 0
    },
    new_url_lq: {
        type: String,
    },
}, {
    collection: 'NewCauHoiPhongVan',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("NewCauHoiPhongVan", NewCauHoiPhongVan);