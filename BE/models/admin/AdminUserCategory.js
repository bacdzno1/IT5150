import mongoose from 'mongoose';
const AdminUserCategory = new mongoose.Schema({
    auc_admin_id: {
        type: Number,
        required: true,
        unique:true
    },
    auc_category_id: {
        type: String,
        required: true,
    },
}, {
    collection: 'AdminUserCategory',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("AdminUserCategory", AdminUserCategory);