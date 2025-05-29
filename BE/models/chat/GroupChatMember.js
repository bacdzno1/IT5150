import mongoose from 'mongoose';
const GroupChatMember = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    group_id: {
        type: Number,
    },
    member_id: {
        type: Number,
    },
    member_type: {
        type: Number,
    },
    isAdmin: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Number,
    },
}, {
    collection: 'GroupChatMember',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("GroupChatMember", GroupChatMember);