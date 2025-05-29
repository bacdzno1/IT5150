import mongoose from 'mongoose';
const NewAddressApply = new mongoose.Schema({
    new_id: {
        type: Number,
        required: true,
        unique:true
    },
    new_title: {
        type: String,
    },
    new_alias: {
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
    add_index: {
        type: Number,
        default: 0
    },
    timecreate: {
        type: Number,
    },
}, {
    collection: 'NewAddressApply',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("NewAddressApply", NewAddressApply);