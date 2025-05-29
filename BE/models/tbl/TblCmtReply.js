import mongoose from 'mongoose';
const TblCmtReply = new mongoose.Schema({
    repl_id: {
        type: Number,
        required: true,
        unique:true
    },
    repl_parent_id: {
        type: Number,
    },
    repl_content: {
        type: String,
    },
    repl_user: {
        type: String,
    },
    repl_time: {
        type: Number,
    },
    rep_ip: {
        type: Number,
        default: 0
    }
}, {
    collection: 'TblCmtReply',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblCmtReply", TblCmtReply);