import mongoose from 'mongoose';
const Category = new mongoose.Schema({
    cat_id: {
        type: Number,
        required: true,
        unique:true
    },
    cat_name_vn: {
        type: String,
        default: null
    },
    cat_name: {
        type: String,
        default: null
    },
    cat_alias: {
        type: String,
    },
    cat_title: {
        type: String,
        default: null
    },
    cat_tags: {
        type: String,
        default: null
    },
    cat_description: {
        type: String,
        default: null
    },
    cat_keyword: {
        type: String,
        default: null
    },
    cat_mota: {
        type: String,
    },
    cat_parent_id: {
        type: Number,
        default: 0
    },
    cat_count: {
        type: Number,
        default: 0
    },
    cat_count_vl: {
        type: Number,
        default: 0
    },
    cat_order: {
        type: Number,
        default: 0
    },
    cat_active: {
        type: Number,
        default: 1
    },
    cat_hot: {
        type: Number,
        default: 0
    },
    cat_ut: {
        type: String,
    },
    cat_img: {
        type: String,
        default: null
    },
    cat_h1: {
        type: String,
        default: null
    },
    cat_index_salary: {
        type: Number,
        default: 0
    },
    cat_301: {
        //đường dẫn 301
        type: String,
    },
    cat_new: {
        // 0: ngành nghề cũ; 1: ngành nghề mới	
        type: Number,
        default: 0
    },
    cat_id_301: {
        //id ngành nghề mới từ những ngành nghề có 301
        type: Number,
        default: 0
    },
    cat_user: {
        //1: danh mục dành cho ứng viên
        type: Number,
        default: 0
    }
}, {
    collection: 'Category',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("Category", Category);