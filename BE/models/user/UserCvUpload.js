import mongoose from 'mongoose';
const UserCvUpload = new mongoose.Schema({
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
}, {
    collection: 'UserCvUpload',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserCvUpload", UserCvUpload);