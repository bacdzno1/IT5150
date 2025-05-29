import mongoose from 'mongoose';
const SaveCandidateApply = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    iduser: {
        type: Number,
    },
    idappli: {
        type: Number,
    },
    lang: {
        type: Number,
    },
    html: {
        type: String,
    },
    timeedit: {
        type: Number,
    },
    nameimg: {
        type: String,
        default: null
    },
    name_appli: {
        type: String,
        default: null
    },
    createdate: {
        type: Number,
    }
}, {
    collection: 'SaveCandidateApply',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("SaveCandidateApply", SaveCandidateApply);