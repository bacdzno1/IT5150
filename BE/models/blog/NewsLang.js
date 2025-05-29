import mongoose from 'mongoose';
const NewsLang = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
    },
    idlang: {
        type: Number,
    },
    mota: {
        type: String,
    },
    noidung: {
        type: String,
    },
    seo_tt: {
        type: String,
    },
    seo_key: {
        type: String,
    },
    seo_des: {
        type: String,
    },
    timecreate: {
        type: Number,
    },
    timeedit: {
        type: Number,
    },
}, {
    collection: 'NewsLang',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("NewsLang", NewsLang);