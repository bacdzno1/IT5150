import mongoose from "mongoose";
const UserVidUpload = new mongoose.Schema({
    id_upload: {
        type: Number,
        required: true,
        unique: true
    },
    use_id: {
        type: Number,
    },
    link: {
        type: String,
    },
    timecreate: {
        type: String,
        default: 0
    },
    link_scan: {
        type: String,
        default: null
    },
    scan: {
        //1: thành công, 2 lỗi file
        type: Number,
        default: 0
    },
}, {
    collection: 'UserVidUpload',
    versionKey: false,
    timestamp: true
})

export default mongoose.model("UserVidUpload", UserVidUpload);