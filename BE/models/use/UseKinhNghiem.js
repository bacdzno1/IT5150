import mongoose from 'mongoose';
const UseKinhNghiem = new mongoose.Schema({
    id_kinhnghiem: {
        type: Number,
        required: true,
        unique: true
    },
    use_id: {
        type: Number,
    },
    use_chucdanh: {
        type: String,
    },
    use_cty_lamviec: {
        type: String,
    },
    tg_batdau: {
        type: Number,
    },
    tg_ketthuc: {
        type: Number,
    },
    them_thongtin: {
        type: String,
    }
}, {
    collection: 'UseKinhNghiem',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UseKinhNghiem", UseKinhNghiem);