import mongoose from 'mongoose';
const TblTags = new mongoose.Schema({
    tag_id: {
        type: Number,
        required: true,
        unique:true
    },
    tag_vn: {
        type: String,
    },
    tag_name: {
        type: String,
    },
    tag_alias: {
        type: String,
    },
    tag_parent: {
        type: Number,
    },
    tag_key_id: {
        type: Number,
    },
    tag_city: {
        type: Number,
    },
    tag_district_id: {
        type: Number,
        default: 0
    },
    tag_cate_id: {
        type: Number,
        default: 0
    },
    tag_phase: {
        type: Number,
        default: 1
    },
    tag_index: {
        type: Number,
        default: 0
    },
    tag_type: {
        type: Number,
        default: 0
    },
    tag_create_date: {
        type: Number,
    },
    tag_edit_date: {
        type: Number,
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
    tag_sapo: {
        type: String,
    },
    tag_content: {
        type: String,
    },
    tag_group: {
        type: String,
        default: 0
    },
    redirect_301: {
        type: String,
        default: null
    }
}, {
    collection: 'TblTags',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblTags", TblTags);