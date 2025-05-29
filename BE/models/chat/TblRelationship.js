import mongoose from 'mongoose';
const TblRelationship = new mongoose.Schema({
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
    user_partner: {
        type: Number,
    },
    partner_type: {
        type: Number,
    },
    rela_type: {
        //	0: Ứng viên - NTD, 1: Ứng viên - ứng viên, 2: NTD - NTD
        type: Number,
    },
    rela_status: {
        //	0: Gửi lời mời, 1: Đồng ý, 2: Từ chối
        type: Number,
    },
    room: {
        type: String,
    },
    created_at: {
        type: Number,
    },
    updated_at: {
        type: Number,
    },

}, {
    collection: 'TblRelationship',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblRelationship", TblRelationship);