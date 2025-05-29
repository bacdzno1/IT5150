import mongoose from 'mongoose';
const HistoryCountOtp = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    user_id: {
        type: Number,
    },
    type: {
        //	1: ứng viên, 0: ntd	
        type: Number,
    },
    usc_phone: {
        type: String,
    },
    send_otp: {
        type: Number,
    },
    create_time: {
        type: Number,
    },
}, {
    collection: 'HistoryCountOtp',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("HistoryCountOtp", HistoryCountOtp);