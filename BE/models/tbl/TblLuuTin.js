import mongoose from 'mongoose';
const TblLuuTin = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    id_tin: {
        type: Number,
    },
    id_uv: {
        type: Number,
    },
    create_time: {
        type: Number,
    },

}, {
    collection: 'TblLuuTin',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblLuuTin", TblLuuTin);