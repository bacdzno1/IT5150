import mongoose from 'mongoose';
const UserHocVan = new mongoose.Schema({
    id_hocvan: {
        type: Number,
        required: true,
        unique:true
    },
    use_id: {
        type: Number,
        default:0
    },
    truong_hoc: {
        type: String,
        default:null
    },
    bang_cap: {
        type: String,
        default:null
    },
    tg_batdau: {
        type: Number,
        default:0
    },
    tg_ketthuc: {
        type: Number,
        default:0
    },
    chuyen_nganh: {
        type: String,
        default:null
    },
    xep_loai: {
        type: Number,
        default:0
    },
    thongtin_bosung: {
        type: String,
        default:null
    },

}, {
    collection: 'UserHocVan',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserHocVan", UserHocVan);