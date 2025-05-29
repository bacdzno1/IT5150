import mongoose from 'mongoose';
const TblTagsSalary = new mongoose.Schema({
    tag_id: {
        type: Number,
        required: true,
        unique:true
    },
    tag_name: {
        type: String,
        default: null
    },
    tag_alias: {
        type: Number,
        default: null
    },
    cat_id: {
        type: Number,
        default: null
    },
}, {
    collection: 'TblTagsSalary',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblTagsSalary", TblTagsSalary);