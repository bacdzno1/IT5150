import mongoose from 'mongoose';
const CategoryDes = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    city_id: {
        type: Number,
    },
    cate_des: {
        type: String,
    },
    cit_title: {
        type: String,
    },
    cit_description: {
        type: String,
    },
    cit_keyword: {
        type: String,
    }
}, {
    collection: 'CategoryDes',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CategoryDes", CategoryDes);