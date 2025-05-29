import mongoose from 'mongoose';
const UseNgoaiNgu = new mongoose.Schema({
    id_ngoaingu: {
        type: Number,
        required: true,
        unique:true
    },
    use_id: {
        type: Number,
    },
    id_ngonngu: {
        type: Number,
    },
    chung_chi: {
        type: String,
    },
    ket_qua: {
        type: String,
    },

}, {
    collection: 'UseNgoaiNgu',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UseNgoaiNgu", UseNgoaiNgu);