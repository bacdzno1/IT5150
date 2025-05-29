import mongoose from 'mongoose';
const FeedBackCompany = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    chuyenvien_call: {
        type: Number,
    },
    deportment: {
        type: Number,
    },
    candi_support: {
        type: Number,
    },
    rate: {
        type: Number,
    },
    note: {
        type: String,
    },
    type: {
        type: Number,
    },
    usc_id: {
        type: Number,
    },
}, {
    collection: 'FeedBackCompany',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("FeedBackCompany", FeedBackCompany);