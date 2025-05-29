import mongoose from 'mongoose';
const NganhCv = new mongoose.Schema({
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
    collection: 'NganhCv',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("NganhCv", NganhCv);