import mongoose from 'mongoose';
const TblPoint = new mongoose.Schema({
    point_id: {
        type: Number,
        required: true,
        unique:true
    },
    name: {
        type: String,
    },
    point: {
        type: Number,
    },
    status: {
        type: Number,
    }
}, {
    collection: 'TblPoint',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblPoint", TblPoint);