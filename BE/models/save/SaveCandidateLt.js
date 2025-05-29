import mongoose from 'mongoose';
const SaveCandidateLt = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    iduser: {
        type: Number,
    },
    idlt: {
        type: Number,
    },
    lang: {
        type: String,
    },
    html: {
        type: String,
    },
    nameimg: {
        type: String,
    },
    timeedit: {
        type: Number,
    },
    createdate: {
        type: Number,
    }
}, {
    collection: 'SaveCandidateLt',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("SaveCandidateLt", SaveCandidateLt);