import mongoose from 'mongoose';
const City2 = new mongoose.Schema({
    cit_id: {
        type: Number,
        required: true,
    },
    cit_name: {
        type: String,
        default: null
    },
    cit_alias: {
        type: String,
    },
    cit_order: {
        type: Number,
        required: true,
        default: 0
    },
    cit_type: {
        type: Number,
        default: null
    },
    cit_count: {
        type: Number,
        default: 0
    },
    cit_parent: {
        type: Number,
        required: true,
    },
    tag_active: {
        type: String,
        required: true,
        default: 0
    },

}, {
    collection: 'City2',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("City2", City2);