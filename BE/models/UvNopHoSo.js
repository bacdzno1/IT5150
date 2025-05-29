import mongoose from 'mongoose';
const UvNopHoSo = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    id_uv: {
        type: Number,
    },
    id_com: {
        type: Number,
    },
    id_new: {
        type: Number,
    },
    time: {
        type: Number,
    },
}, {
    collection: 'UvNopHoSo',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UvNopHoSo", UvNopHoSo);