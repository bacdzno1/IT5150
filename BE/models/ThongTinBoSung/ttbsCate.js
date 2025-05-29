import mongoose from "mongoose";

const ttbsCate = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
    },
    alias: {
        type: String,
    },

}, {
    collection: 'ttbsCate',
    versionKey: false,
    timestamp: true
})

export default mongoose.model('ttbsCate', ttbsCate)