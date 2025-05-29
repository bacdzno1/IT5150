import mongoose from 'mongoose';
const TblLuuHoSoUv = new mongoose.Schema({
    id_hoso: {
        type: Number,
        required: true,
        unique:true
    },
    id_ntd: {
        type: Number,
    },
    id_uv: {
        type: Number,
    },
    create_time: {
        type: Number,
    },

}, {
    collection: 'TblLuuHoSoUv',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblLuuHoSoUv", TblLuuHoSoUv);