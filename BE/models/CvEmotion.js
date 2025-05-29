import mongoose from 'mongoose';
const CvEmotion = new mongoose.Schema({
    emo_id: {
        type: Number,
        required: true,
        unique:true
    },
    idcv: {
        type: Number,
    },
    iduser: {
        type: Number,
    },
    type: {
        type: Number,
    },
    emo_create_time: {
        type: Number,
    }
}, {
    collection: 'CvEmotion',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("CvEmotion", CvEmotion);