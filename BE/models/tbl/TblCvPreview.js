import mongoose from 'mongoose';
const TblCvPreview = new mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true,
    //     unique:true
    // },
    // lang: {
    //     type: String,
    // },
    // html: {
    //     type: String,
    // },
    // name_img: {
    //     type: String,
    // },
    // time_update: {
    //     type: Number,
    //     default: 1
    // },
    // name_device: {
    //     type: String,
    // }
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
    height_cv: {
        type: Number,
        default: 0
    },
}, {
    collection: 'TblCvPreview',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblCvPreview", TblCvPreview);