import mongoose from 'mongoose';
const AdminUserLanguage = new mongoose.Schema({
    aul_admin_id: {
        type: Number,
        required: true,
    },
    aul_lang_id: {
        type: Number,
        required: true,
    },
}, {
    collection: 'AdminUserLanguage',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("AdminUserLanguage", AdminUserLanguage);