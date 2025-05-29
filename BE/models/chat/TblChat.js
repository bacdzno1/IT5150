import mongoose from 'mongoose';
const TblChat = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    user_id: {
        type: Number,
    },
    room: {
        type: String,
    },
    gr_id: {
        type: Number,
        default: 0
    },
    type: {
        type: Number,
    },

    message: {
        type: String,
    },
    mess_type: {
        type: String,
    },
    time: {
        type: Number,
    },
    view: {
        type: Number,
        default: 1
    },
    seen_notify: {
        type: Number,
        default: 0
    },

    sent_mail: {
        type: Number,
        default: 0
    },
    candi_delete: {
        type: Number,
        default: 0
    },
    company_delete: {
        type: Number,
        default: 0
    },
    is_pinned: {
        type: Number,
        default: 0
    },
    user_pinned: {
        type: Number,
        default: 0
    },
    user_pinned_type: {
        type: Number,
        default: 0
    },
    msg_rep_id: {
        type: Number,
        default: 0
    },
    user_remove: {
        type: Number,
        default: 0
    },

    user_remove_type: {
        type: Number,
        default: 0
    },
    msg_fw_id: {
        type: Number,
        default: 0
    },
    msg_fw_content: {
        type: Number,
        default: null
    },
    shared_id: {
        type: Number,
        default: 0
    },
    shared_type: {
        type: Number,
        default: 0
    },
}, {
    collection: 'TblChat',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblChat", TblChat);