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
}, {
    collection: 'City',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("City", City);