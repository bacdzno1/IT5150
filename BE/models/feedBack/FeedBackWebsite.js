import mongoose from 'mongoose';
const FeedBackWebsite = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    feedback_from: {
        type: Number,
    },
    bosung: {
        type: String,
    },
    danhgia: {
        type: String,
    },
    rate: {
        type: Number,
    },
    usc_id: {
        type: Number,
    },
}, {
    collection: 'FeedBackWebsite',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("FeedBackWebsite", FeedBackWebsite);