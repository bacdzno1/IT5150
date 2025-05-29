import mongoose from 'mongoose';
const LanguageCv = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    name: {
        type: String,
    },
    alias: {
        type: String,
    },
    code: {
        type: String,
    },
    timecreated: {
        type: Number,
    },
}, {
    collection: 'LanguageCv',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("LanguageCv", LanguageCv);