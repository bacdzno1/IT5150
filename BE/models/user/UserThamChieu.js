import mongoose from 'mongoose';
const UserThamChieu = new mongoose.Schema({
    id_thamchieu: {
        type: Number,
        required: true,
        unique: true
    },
    id_user: {
        type: Number,
    },
    email: {
        type: String,
        default: null
    },
    ho_ten: {
        type: String,
    },
    sdt: {
        type: String,
    },
    chuc_vu: {
        type: String,
    },
    company: {
        type: String,
    },
    tinh_thanh: {
        type: String,
    },

}, {
    collection: 'UserThamChieu',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserThamChieu", UserThamChieu);