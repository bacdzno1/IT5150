import mongoose from "mongoose";

const TblDonHang = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    goi: { // 1 - Gói ghim tin, 2 - Gói lọc hồ sơ, 3 - Cả 2
        type: Number,
    },
    usc_id: { // NTD
        type: Number,
    },
    timecreate: { // Ngày giao dịch
        type: Number
    },
    price: { // Giá trị giao dịch
        type: Number
    },
    kd_id: { // id kd giao dịch
        type: Number
    }
}, {
    collection: 'TblDonHang',
    versionKey: false,
    timestamp: true
})

export default mongoose.model('TblDonHang', TblDonHang)