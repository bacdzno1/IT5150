import mongoose from 'mongoose';
const UserAddFail = new mongoose.Schema({
    uf_id: {
        type: Number,
        required: true,
        unique:true
    },
    uf_id_fail: {
        type: Number,
        default: 0
    },
    uf_email: {
        type: String,
        default: null
    },
    uf_phone: {
        type: String,
        default: null
    },
    uf_time: {
        type: Date,
        default: new Date()
    },
    uf_reason: {
        type: String,
    }
}, {
    collection: 'UserAddFail',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserAddFail", UserAddFail);