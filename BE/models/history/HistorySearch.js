import mongoose from 'mongoose';
const HistorySearch = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    user_id: {
        type: Number,
        default: 0
    },
    keywork: {
        type: String,
        default: null
    },
    city_id: {
        type: String,
        default: 0
    },
    cat_id: {
        type: Number,
        default: 0
    },
    tag_id: {
        type: Number,
        default: 0
    },
    url_search: {
        type: String,
        default: null
    },
    time_search: {
        type: Number,
        default: 0
    },
    ip: {
        type: String,
        default: null
    },
    type: {
        type: Number,
        default: 0
    },
}, {
    collection: 'HistorySearch',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("HistorySearch", HistorySearch);