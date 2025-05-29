import mongoose from 'mongoose';
const TblChatReaction = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    msg_id: {
        type: Number,
    },
    user_reaction: {
        type: Number,
    },
    user_type: {
        type: Number,
    },
    type_reaction: {
        type: Number,
    },
    created_at: {
        type: Number,
    },
}, {
    collection: 'TblChatReaction',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblChatReaction", TblChatReaction);