import mongoose from 'mongoose';
const CategoryBieuMau = new mongoose.Schema({
    cate_id: {
        type: Number,
        required: true,
        unique:true
    },
    cate_name: {
        type: String,
    },
    cate_alias: {
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
    }
}, {
    collection: 'CategoryBieuMau',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CategoryBieuMau", CategoryBieuMau);