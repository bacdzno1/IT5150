import mongoose from 'mongoose';
const AdminTranslate = new mongoose.Schema({
    tra_keyword: {
        type: String,
        required: true,
        unique:true
    },
    tra_text: {
        type: String,
        default: null
    },
    lang_id: {
        type: Number,
        default: null
    },
    tra_source: {
        type: String,
        default: null
    },
}, {
    collection: 'AdminTranslate',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("AdminTranslate", AdminTranslate);