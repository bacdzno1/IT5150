import mongoose from 'mongoose';
const TblRateInterview = new mongoose.Schema({
    rate_id: {
        type: Number,
        required: true,
        unique:true
    },
    usc_id: {
        type: Number,
    },
    feel: {
        type: Number,
    },
    position: {
        type: String,
    },
    description: {
        type: String,
    },
    questions: {
        type: String,
    },
    answers: {
        type: String,
    },
    rate_time: {
        type: Number,
    },
    rate_active: {
        type: Number,
        default: 0
    },
    rate_like: {
        type: Number,
        default: 0
    }
}, {
    collection: 'TblRateInterview',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblRateInterview", TblRateInterview);