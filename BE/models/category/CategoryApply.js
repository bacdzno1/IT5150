import mongoose from 'mongoose';
const CategoryApply = new mongoose.Schema({
    cat_id: {
        type: Number,
        required: true,
        unique:true
    },
    cat_name: {
        type: String,
    },
    cat_alias: {
        type: String,
    },
    meta_tit: {
        type: String,
    },
    meta_des: {
        type: String,
    },
    meta_key: {
        type: String,
    },
    meta_h1: {
        type: String,
    },
    meta_sapo: {
        type: String,
    },
    content: {
        type: String,
    },
    cat_index: {
        type: Number,
    },
    timecreate: {
        type: Number,
    },
    time_edit: {
        type: Number,
    },
}, {
    collection: 'CategoryApply',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CategoryApply", CategoryApply);