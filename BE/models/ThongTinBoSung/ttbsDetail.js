import mongoose from "mongoose";

const ttbsDetail = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
    },
    mota: {
        type: String,
    },
    idcate: {
        type: Number,
        default: 1
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
    collection: 'ttbsDetail',
    versionKey: false,
    timestamp: true
})

export default mongoose.model('ttbsDetail', ttbsDetail)