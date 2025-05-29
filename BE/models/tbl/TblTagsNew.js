import mongoose from 'mongoose';
const TblTagsNew = new mongoose.Schema({
    tag_id: {
        type: Number,
        required: true,
        unique: true
    },
    tag_name: {
        type: String,
    },
    tag_alias: {
        type: String,
    },
    tag_parent: {
        type: Number,
        default: 0
    },
    tag_index: {
        type: Number,
        default: 0
    },
    tag_type: {
        type: Number,
        default: 0
    },
    tag_title: {
        type: String,
    },
    tag_des: {
        type: String,
    },
    tag_keyword: {
        type: String,
    },
    tag_create_date: {
        type: Number,
        default: 0
    },
    tag_edit_date: {
        type: Number,
        default: 0
    },
    redirect_301: {
        type: String,
        default: null
    }
}, {
    collection: 'TblTagsNew',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblTagsNew", TblTagsNew);