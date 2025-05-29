import mongoose from 'mongoose';
const TblChatNickName = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    user_id: {
        type: Number,
    },
    user_type: {
        type: Number,
    },
    user_target: {
        type: Number,
    },
    user_target_type: {
        //	0. Ứng viên, 1. NTD
        type: Number,
    },
    nickname: {
        type: String,
    }
}, {
    collection: 'TblChatNickName',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblChatNickName", TblChatNickName);