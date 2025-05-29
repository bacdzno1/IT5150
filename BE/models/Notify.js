import mongoose from 'mongoose';
const Notify = new mongoose.Schema({
    NotifyID: {
        type: Number,
        required: true,
        unique:true
    },
    UserID: {
        type: Number,
        default: null
    },
    AffectedID: {
        type: Number,
    },
    DescNotify: {
        type: String,
        default: null
    },
    UserType: {
        type: Number,
        default: 0
    },
    Active: {
        type: Number,
        default: 1
    },
    isSeen: {
        type: Number,
        default: 0
    },
    CompanyID: {
        type: Number,
    },
    NewID: {
        type: Number,
        default: null
    },
    NotifyType: {
        type: Number,
        default: null
    },
    CreateDateNotify: {
        type: Number,
        default: null
    },
    url_notification: {
        type: String,
        default: null
    }
}, {
    collection: 'Notify',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("Notify", Notify);