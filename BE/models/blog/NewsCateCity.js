import mongoose from 'mongoose';
const NewsCateCity = new mongoose.Schema({
    new_id: {
        type: Number,
        required: true,
        unique:true
    },
    cat_id: {
        type: Number,
    },
    cit_id: {
        type: Number,
    },
    meta_tit: {
        type: String,
    },
    meta_des: {
        type: String,
    },
    meta_key: {
        type: String,
    },
    meta_content: {
        type: String,
    },
    timecreate: {
        type: Number,
    },
    timeupdate: {
        type: Number,
    },
}, {
    collection: 'NewsCateCity',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("NewsCateCity", NewsCateCity);