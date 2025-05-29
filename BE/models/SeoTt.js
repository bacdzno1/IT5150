import mongoose from 'mongoose';
const SeoTt = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    name_page: {
        type: String,
        default: null
    },
    real_name_page: {
        type: String,
    },
    seo_tt: {
        type: String,
    },
    seo_des: {
        type: String,
    },
    seo_key: {
        type: String,
    },
    seo_h1: {
        type: String,
    },
    seo_sapo: {
        type: String,
    },
    seo_text: {
        type: String,
    },
}, {
    collection: 'SeoTt',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("SeoTt", SeoTt);