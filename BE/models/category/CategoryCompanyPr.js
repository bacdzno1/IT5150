import mongoose from 'mongoose';
const CategoryCompanyPr = new mongoose.Schema({
    pr_cateid: {
        type: Number,
        required: true,
        unique:true
    },
    pr_catename: {
        type: String,
    },
    pr_count: {
        type: Number,
        default: 0
    },
    pr_cateorder: {
        type: Number,
        default: 0
    },
    cate_child: {
        type: Number,
        default: 0
    },
}, {
    collection: 'CategoryCompanyPr',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CategoryCompanyPr", CategoryCompanyPr);