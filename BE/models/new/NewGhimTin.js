import mongoose from 'mongoose';
const NewGhimTin = new mongoose.Schema({
    new_id: {
        type: Number,
        require: true,
    },
    new_hot: {
        type: Number,
        default: 0,
    },
    new_cao: {
        type: Number,
        default: 0,
    },
    expired: {
        type: Number,
    },
}, {
    collection: 'NewGhimTin',
    versionKey: false,
    timestamp: true
})

export default mongoose.model("NewGhimTin", NewGhimTin);
