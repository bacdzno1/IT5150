import mongoose from 'mongoose';
const LienHe = new mongoose.Schema({
    lh_id: {
        type: Number,
        required: true,
        unique:true
    },
    lh_email: {
        type: String,
        default: null
    },
    lh_name: {
        type: String,
    },
    lh_phone: {
        type: String,
    },
    lh_nd: {
        type: String,
    },
}, {
    collection: 'LienHe',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("LienHe", LienHe);