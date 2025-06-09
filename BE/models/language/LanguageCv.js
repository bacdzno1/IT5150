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
}, {
    collection: 'LanguageCv',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("LanguageCv", LanguageCv);