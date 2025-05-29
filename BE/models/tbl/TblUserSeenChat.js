import mongoose from 'mongoose';
const TblUserSeenChat = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    user: {
        type: Number,
    },
    user_type: {
        type: Number,
    },
    room: {
        type: String,
    },
    last_mess: {
        type: Number,
    },
    last_time: {
        type: Number,
    }
}, {
    collection: 'TblUserSeenChat',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblUserSeenChat", TblUserSeenChat);