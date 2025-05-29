import mongoose from 'mongoose';
const CategoryCompanyLk = new mongoose.Schema({
    lk_id: {
        type: Number,
        required: true,
        unique:true
    },
    lk_name: {
        type: String,
    },
    lk_pr: {
        type: Number,
    },
    lk_order: {
        type: Number,
    },
    lk_index: {
        type: Number,
        default: 0
    },
    lk_count: {
        type: Number,
        default: 0
    },
    lk_create_time: {
        type: Number,
    },
    lk_update_time: {
        type: Number,
    },
}, {
    collection: 'CategoryCompanyLk',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CategoryCompanyLk", CategoryCompanyLk);