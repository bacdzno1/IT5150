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
    timeedit: {
        type: Number,
    },
    createdate: {
        type: Number,
    },
    height_cv: {
        type: Number,
        default: 0
    },
}, {
    collection: 'SaveCandidateCv',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("SaveCandidateCv", SaveCandidateCv);