import mongoose from 'mongoose';
const CategoryMulti = new mongoose.Schema({
    cat_id: {
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
    cat_name: {
        type: String,
        default: null
    },
    cat_title: {
        type: String,
    },
    cat_keyword: {
        type: String,
    },
    cat_name_rewrite: {
        type: String,
    },
    cat_link: {
        type: String,
    },
    cat_picture: {
        type: String,
        default: null
    },
    cat_type: {
        type: String,
        default: null
    },
    cat_form: {
        type: String,
        default: null
    },
    cat_description: {
        type: String,
    },
    cat_parent_id: {
        type: Number,
        default: 0
    },
    cat_has_child: {
        type: Number,
        default: 1
    },
    cat_order: {
        type: Number,
    },
    cat_date: {
        type: Number,
    },
    cat_active: {
        type: Number,
        default: 1
    },
    cat_show: {
        type: Number,
        default: 0
    },
    cat_home: {
        type: Number,
        default: 0
    },
    cat_count: {
        type: Number,
        default: 0
    },
}, {
    collection: 'CategoryMulti',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CategoryMulti", CategoryMulti);