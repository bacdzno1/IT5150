import mongoose from 'mongoose';
const GroupChat = new mongoose.Schema({
    group_id: {
        type: Number,
        required: true,
        unique:true
    },
    group_name: {
        type: String,
    },
    group_ava: {
        type: String,
        default: null
    },
    created_at: {
        type: Number,
    },
    updated_at: {
        type: Number,
    },
}, {
    collection: 'GroupChat',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("GroupChat", GroupChat);