import mongoose from 'mongoose';
const AdminUserRight = new mongoose.Schema({
    adu_admin_id: {
        type: Number,
        required: true,
    },
    adu_admin_module_id: {
        type: Number,
        required: true,
        default: 0
    },
    adu_add: {
        type: Number,
        default: 0
    },
    adu_edit: {
        type: Number,
        default: 0
    },
    adu_delete: {
        type: Number,
        default: 0
    }
}, {
    collection: 'AdminUserRight',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("AdminUserRight", AdminUserRight);