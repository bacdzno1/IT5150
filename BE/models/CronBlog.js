import mongoose from 'mongoose';
const CronBlog = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    }
}, {
    collection: 'CronBlog',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CronBlog", CronBlog);