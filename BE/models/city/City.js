import mongoose from 'mongoose';
const City = new mongoose.Schema({
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
    cit_count_vl: {
        type: Number,
        default: 0
    },
    postcode: {
        type: String,
    },
}, {
    collection: 'City',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("City", City);