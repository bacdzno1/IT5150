import mongoose from 'mongoose';
const DanhMucCv = new mongoose.Schema({
    emo_id: {
        type: Number,
        required: true,
        unique:true
    },
    name: {
        type: String,
    },
    alias:{
        type: String,
    },
    image:{
        type: String,
    },
    title_des:{
        type: String,
    },
    content_short:{
        type: String,
    },
    content:{
        type: String,
    },
    serial:{
        type: Number,
    },
    status:{
        type: Number,
    },
    meta_title:{
        type: String,
    },
    meta_key:{
        type: String,
    },
    meta_desciption:{
        type: String,
    },
    timecreated:{
        type: Number,
    },
}, {
    collection: 'DanhMucCv',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("DanhMucCv", DanhMucCv);