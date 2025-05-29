import mongoose from 'mongoose';
const TblCHPV = new mongoose.Schema({
    ch_id: {
        type: Number,
        required: true,
        unique:true
    },
    ch_name: {
        type: String,
    },
    ch_alias: {
        type: String,
    },
    meta_tit: {
        type: String,
    },
    meta_des: {
        type: String,
    },
    meta_key: {
        type: String,
    },
    content: {
        type: String,
    },
}, {
    collection: 'TblCHPV',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblCHPV", TblCHPV);