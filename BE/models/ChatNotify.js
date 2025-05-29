import mongoose from 'mongoose';
const ChatNotify = new mongoose.Schema({
    notify_id: {
        type: Number,
        required: true,
        unique:true
    },
    user_sent: {
        type: Number,
    },
    user_sent_type: {
        type: Number,
    },
    receiver: {
        type: Number,
    },
    receiver_type: {
        type: Number,
    },
    target_id: {
        type: Number,
    },
    type: {
        //	1: Tag khi nhắn tin, 2: Tag khi comment, 3: Thả cảm xúc tin nhắn
        type: Number,
    },
    time: {
        type: Number,
    },
    reaction_type: {
        type: Number,
        default: 0
    },
    seen: {
        type: Number,
        default: 0
    }

}, {
    collection: 'ChatNotify',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("ChatNotify", ChatNotify);