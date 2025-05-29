import mongoose from 'mongoose';
const BaoCao = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    tong_so_don_hang: {
        type: String,
    },
    tong_so_don_hang_thanh_cong: {
        type: String,
    },
    tong_so_don_hang_khong_thanh_cong: {
        type: String,
    },
    tong_gia_tri_giao_dich: {
        type: String,
    }
}, {
    collection: 'BaoCao',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("BaoCao", BaoCao);