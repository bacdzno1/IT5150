import mongoose from 'mongoose';
const View = new mongoose.Schema({
    id_user: {
        type: Number,
        required: true,
        unique:true
    },
    id_affected: {
        type: Number,
    },
    type: {
        type: Number,
    },
    create_date: {
        type: Date,
    },
    view_count: {
        type: Number,
    },
}, {
    collection: 'View',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("View", View);