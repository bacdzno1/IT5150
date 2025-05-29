import mongoose from "mongoose";
const NewsCate = mongoose.Schema({
    cat_id: {
        type: Number,
        required: true,
        unique: true
    },
    admin_id: {
        type: Number,
        default: 4
    },
    lang_id: {
        type: Number,
        default: 1
    },
    cat_name: {
        type: String,
    },
    cat_title: {
        type: String,
        default: ""
    },
    cat_keyword: {
        type: String,
        default: ""
    },
    cat_name_rewrite: {
        type: String,
        default: ""
    },
    cat_link: {
        type: String,
        default: ""
    },
    cat_picture: {
        type: String,
        default: null
    },
    cat_type: {
        type: Number,
        default: null
    },
    cat_form: {
        type: String,
        default: null
    },
    cat_description: {
        type: String,
        default: ""
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
        default: 1
    },
    cat_date: {
        type: Number,
        default: 0
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
    collection: 'NewsCate',
    versionKey: false,
    timestamp: true
})

export default mongoose.model('NewsCate', NewsCate)