import mongoose from 'mongoose';
const TblComment = new mongoose.Schema({
    cmt_id: {
        type: Number,
        required: true,
        unique:true
    },
    cmt_username: {
        type: String,
    },
    cmt_url_blog: {
        type: String,
    },
    cmt_content: {
        type: String,
    },
    cmt_check: {
        type: Number,
        default: 1
    },
    cmt_time: {
        type: Number,
    }
}, {
    collection: 'TblComment',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblComment", TblComment);