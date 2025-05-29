import mongoose from 'mongoose';

const AdminComment_Schema = new mongoose.Schema({
    admc_id: {
        type: Number,
        required: true,
        unique:true
    },
    admc_comment: {
        type: String,
        default: null
    },
    admc_date: {
        type: Number,
        default: 0
    },
    admin_id: {
        type: Number,
        default: 0
    },
    admc_keyword: {
        type: Number,
        default: 0
    },
}, {
    collection: 'AdminComment',
    versionKey: false,
    timestamp: true
});
const AdminComment = mongoose.model("AdminComment", AdminComment_Schema);
export default AdminComment;