import mongoose from 'mongoose';
const UserUnset = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    email: {
        type: String,
        default: null
    },
    avatar: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
    pass: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    job_cates: {
        type: String,
        default: null
    },
    job_position: {
        type: String,
        default: null
    },
    city_jobs: {
        type: String,
        default: null
    },
    err_time: {
        type: String,
        default: 0
    },
    use_delete: {
        //	1: bị loại, 0: không loại
        type: Number,
        default: 0
    },
    use_active: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    collection: 'UserUnset',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserUnset", UserUnset);