import mongoose from "mongoose";

const CountView = mongoose.Schema({
    id: {
        type: Number,
        default: 1
    },
    count: {
        type: Number,
        default: 0
    }
}, {
    collection: 'CountView',
    versionKey: false,
    timestamp: true
})

export default mongoose.model('CountView', CountView)