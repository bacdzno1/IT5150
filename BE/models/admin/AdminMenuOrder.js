import mongoose from 'mongoose';
const AdminMenuOrder = new mongoose.Schema({
    amo_admin: {
        type: Number,
        required: true,
        default: 0,
        // unique:true
    },
    amo_module: {
        type: String,
        required: true,
        default: 0
    },
    amo_order: {
        type: Number,
        default: 0
    },
}, {
    collection: 'AdminMenuOrder',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("AdminMenuOrder", AdminMenuOrder);