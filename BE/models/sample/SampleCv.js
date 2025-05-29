import mongoose from 'mongoose';
const SampleCv = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    idcate: {
        type: Number,
    },
    name: {
        type: String,
    },
    alias: {
        type: String,
    },
    image: {
        type: String,
    },
    idnganh: {
        type: String,
    },
    idlang: {
        type: String,
        default: 1
    },
    htmlcss_vi: {
        type: String,
    },

    htmlcss_en: {
        type: String,
    },
    htmlcss_jp: {
        type: String,
    },
    htmlcss_cn: {
        type: String,
    },
    htmlcss_kr: {
        type: String,
    },
    codecolor: {
        type: String,
    },
    serial: {
        type: Number,
    },
    serial_CvOnl: {
        type: Number,
        default: 0
    },

    active_vi: {
        type: Number,
        default: 0
    },
    active_en: {
        type: Number,
        default: 0
    },
    active_kr: {
        type: Number,
        default: 0
    },
    active_jp: {
        type: Number,
        default: 0
    },
    active_cn: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
    },
    type: {
        type: Number,
    },
    price: {
        type: String,
    },

    meta_title: {
        type: String,
    },
    meta_key: {
        type: String,
    },
    meta_desciption: {
        type: String,
    },
    timecreated: {
        type: Number,
    },
    view: {
        type: Number,
        default: 0
    },
    love: {
        type: Number,
        default: 0
    },
    download: {
        type: Number,
        default: 0
    },
    full: {
        type: String,
    },
    cv_interface_name: {
        //	người cắt cv	
        type: String,
        default: null
    },
    image2: {
        type: String,
    },
    image3: {
        type: String,
    },
    cover_image: {
        type: String,
    },
    show: {
        type: Number,
    },
}, {
    collection: 'SampleCv',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("SampleCv", SampleCv);