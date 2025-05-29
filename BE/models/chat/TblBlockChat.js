import mongoose from 'mongoose';
const TblBlockChat = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    user_block: {
        type: Number,
    },
    room: {
        type: String,
    },
    user_block_type: {
        type: Number,
    },
    created_at: {
        type: Number,
    },
}, {
    collection: 'TblBlockChat',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblBlockChat", TblBlockChat);