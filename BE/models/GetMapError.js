import mongoose from 'mongoose';
const GetMapError = new mongoose.Schema({
    id_user: {
        type: Number,
        required: true,
        unique:true
    },
    create_date: {
        type: Number,
        default: null
    },
    type: {
        type: Number,
        required: true,
    },
}, {
    collection: 'GetMapError',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("GetMapError", GetMapError);