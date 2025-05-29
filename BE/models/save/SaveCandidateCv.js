import mongoose from 'mongoose';
const SaveCandidateCv = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    iduser: {
        type: Number,
    },
    idcv: {
        type: Number,
    },
    lang: {
        type: String,
        default: 1
    },
    html: {
        type: String,
    },
    nameimg: {
        type: String,
    },
    cv_name: {
        type: String,
    },
    name_cv: {
        type: String,
    },
    name_cv_hide: {
        type: String,
    },
    status: {
        type: Number,
    },
    cv_order: {
        type: Number,
        default: 0
    },
    cv: {
        type: Number,
    },
    timeedit: {
        type: Number,
    },
    createdate: {
        type: Number,
    },
    scan_cv: {
        type: Number,
        default: 0
    },
    scan_cv_hide: {
        type: Number,
        default: 0
    },
    height_cv: {
        type: Number,
        default: 0
    },
    cv_check_exist: {
        //	1: file cv tồn tại	
        type: Number,
        default: 0
    },
}, {
    collection: 'SaveCandidateCv',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("SaveCandidateCv", SaveCandidateCv);