import mongoose from 'mongoose';
const SampleApply = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
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
        type: Number,
    },
    idlang: {
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
        type: String,
    },
    status: {
        type: String,
        default: 0
    },
    timecreated: {
        type: String,
    },
}, {
    collection: 'SampleApply',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("SampleApply", SampleApply);