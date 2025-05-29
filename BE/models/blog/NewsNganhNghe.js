import mongoose from 'mongoose';
const NewsNganhNghe = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    title: {
        type: String,
    },
    idlang: {
        type: Number,
        default: 1,
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
    idnganh: {
        type: Number,
    }
}, {
    collection: 'NewsNganhNghe',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("NewsNganhNghe", NewsNganhNghe);