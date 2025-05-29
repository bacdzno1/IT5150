import mongoose from 'mongoose';
const Languages = new mongoose.Schema({
    lang_id: {
        type: Number,
        required: true,
        unique:true
    },
    lang_name: {
        type: String,
        default: null
    },
    lang_path: {
        type: String,
        default: null
    },
    lang_image: {
        type: String,
        default: "home"
    },
    lang_domain: {
        type: String,
        default: null
    },
}, {
    collection: 'Languages',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("Languages", Languages);