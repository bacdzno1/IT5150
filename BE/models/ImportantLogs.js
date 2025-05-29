import mongoose from "mongoose";

const ImportantLogs = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    logFrom: {
        type: String,
        default: ""
    },
    time: {
        type: Number,
        default: 0
    },
    logs: {
        type: String,
        default: ""
    }
}, {
    collection: 'ImportantLogs',
    versionKey: false,
    timestamp: true
})

export default mongoose.model("ImportantLogs", ImportantLogs)