import mongoose from 'mongoose';
const NewLangApply = new mongoose.Schema({
    new_id: {
        type: Number,
        required: true,
        unique:true
    },
    new_title: {
        type: String,
    },
    id_lang: {
        type: Number,
    },
    meta_tit: {
        type: String,
    },
    meta_des: {
        type: String,
    },

    meta_key: {
        type: String,
    },
    meta_sapo: {
        type: String,
    },
    content: {
        type: String,
    },
    time_created: {
        type: Number,
    },
    time_edited: {
        type: Number,
    },
    adm_cr: {
        type: Number,
    },
    adm_update: {
        type: Number,
        default: 0
    },
}, {
    collection: 'NewLangApply',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("NewLangApply", NewLangApply);