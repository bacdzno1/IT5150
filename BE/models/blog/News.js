import mongoose from 'mongoose';
const News = new mongoose.Schema({
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
        type: Number,
        default: 1
    },
    new_title: {
        type: String,
        default: null
    },
    new_title_rewrite: {
        type: String,
        default: null
    },
    new_301: {
        type: String,
    },
    new_picture: {
        type: String,
        default: null
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
        default: null
    },
    new_category_id: {
        type: Number,
        default: 0
    },
    new_cate_bm: {
        type: Number,
        default: 0
    },
    new_date: {
        type: Number,
        default: null
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
    new_index: {
        type: Number,
    },
    new_edited: {
        type: Number,
        default: 0
    },
    new_time_edit: {
        type: Number,
        default: 0
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
    key_lq: {
        type: String,
        default: null
    },
    cat_new_lq: {
        type: String,
        default: null
    },
    title_suggest: {
        type: String,
    },
    content_suggest: {
        type: String,
    },
    new_audio: {
        type: Number,
        default: 0
    },
    new_audio_ai: {
        type: Number,
        default: 0
    },
}, {
    collection: 'News',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("News", News);