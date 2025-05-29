import mongoose from 'mongoose';
const TvKeyCity = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    id_key: {
        type: Number,
    },
    id_city: {
        type: Number,
    },
    id_index: {
        type: Number,
        default:0
    },
}, {
    collection: 'TvKeyCity',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TvKeyCity", TvKeyCity);