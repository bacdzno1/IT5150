import mongoose from 'mongoose';
const ConfigTemplateChat = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    user_id: {
        type: Number,
    },
    user_type: {
        type: Number,
    },
    config_value: {
        type: String,
    },
    config_type: {
        type: String,
    }
}, {
    collection: 'ConfigTemplateChat',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("ConfigTemplateChat", ConfigTemplateChat);