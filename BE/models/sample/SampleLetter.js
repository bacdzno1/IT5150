import mongoose from 'mongoose';
const SampleLetter = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    idcate: {
        type: Number,
        default: null
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
        type: Number,
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
    status: {
        type: Number,
        default: 0
    },
    timecreated: {
        type: Number,
    }
}, {
    collection: 'SampleLetter',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("SampleLetter", SampleLetter);