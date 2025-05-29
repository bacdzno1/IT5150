import mongoose from 'mongoose';
const CategoryCompany = new mongoose.Schema({
    cate_id: {
        type: Number,
        required: true,
        unique:true
    },
    cate_name: {
        type: String,
    },
    cate_order: {
        type: Number,
        default: 0
    },
    cate_pr_lk: {
        type: Number,
        default: 0
    },
    cate_pr: {
        type: Number,
        default: 0
    },
    cate_count: {
        type: Number,
        default: 0
    },
    cate_type: {
        type: Number,
        default: 0
    },
    cat_index: {
        type: Number,
        default: 0
    },
}, {
    collection: 'CategoryCompany',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CategoryCompany", CategoryCompany);