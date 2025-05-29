import mongoose from 'mongoose';
const BangGia = new mongoose.Schema({
    bg_id: {
        type: Number,
        required: true,
        unique:true
    },
    bg_tuan: {
        type: String,
    },
    bg_gia: {
        type: String,
    },
    bg_chiet_khau: {
        type: String,
    },
    bg_the: {
        type: String,
    },
    bg_vat: {
        type: String,
    },
    bg_quyenloi: {
        type: String,
    },
    bg_uudai: {
        type: String,
    },
    bg_mota: {
        type: String,
    },
    bg_cm1: {
        type: String,
    },
    bg_cm2: {
        type: String,
    },
    bg_cm3: {
        type: String,
    },
    bg_show: {
        type: Number,
        default: 0
    },
    bg_tk: {
        type: String,
    },
    bg_point: {
        type: Number,
    },
    bg_type: {
        type: String,
    },
}, {
    collection: 'BangGia',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("BangGia", BangGia);