import mongoose from 'mongoose';
const CategoryLetter = new mongoose.Schema({
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
    meta_key: {
        type: String,
    },
    meta_des: {
        type: String,
    },
    meta_tit: {
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
    timecreate: {
        type: Number,
    },
    cat_edit_date: {
        type: Number,
    },
    cat_index: {
        type: Number,
        default: 0
    }

}, {
    collection: 'CategoryLetter',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CategoryLetter", CategoryLetter);