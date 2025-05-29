import mongoose from 'mongoose';
const ConfigFireBaseOTP = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    config: {
        type: Object,
    },
    count: {
        type: Number,
    },
    time_reset:{
        type: Number,
        default:0,
    }
}, {
    collection: 'ConfigFireBaseOTP',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("ConfigFireBaseOTP", ConfigFireBaseOTP);