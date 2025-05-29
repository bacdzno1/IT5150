import mongoose from 'mongoose';
const QrCron = new mongoose.Schema({
    qr_id: {
        type: Number,
        required: true,
        unique:true
    },
    new_id: {
        type: Number,
    },
    new_user_id: {
        type: Number,
    },
    url_new: {
        type: String,
    },
    qr_create_time: {
        type: String,
    },
    update_qr: {
        type: String,
        default: 0
    },
    qr_img: {
        type: String,
        default: null
    }
}, {
    collection: 'QrCron',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("QrCron", QrCron);