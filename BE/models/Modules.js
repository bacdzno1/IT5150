import mongoose from 'mongoose';
const Modules = new mongoose.Schema({
    mod_id: {
        type: Number,
        required: true,
        unique:true
    },
    mod_name: {
        type: String,
        default: null
    },
    mod_path: {
        type: String,
        default: null
    },
    mod_listname: {
        type: String,
        default: null
    },
    mod_listfile: {
        type: String,
        default: null
    },
    mod_order: {
        type: Number,
        default: 0
    },
    mod_help: {
        type: String,
        default: null
    },
    lang_id: {
        type: Number,
        default: 1
    },
    mod_checkloca: {
        type: Number,
        default: 0
    },
}, {
    collection: 'Modules',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("Modules", Modules);