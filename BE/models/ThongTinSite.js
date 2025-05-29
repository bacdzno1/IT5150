import mongoose from 'mongoose';
const ThongTinSite = new mongoose.Schema({
    tts_id: {
        type: Number,
        required: true,
        unique:true
    },
    tts_title: {
        type: String,
    },
    tts_email: {
        type: String,
    },
    tts_phone: {
        type: String,
    },
    tts_address: {
        type: String,
    },
}, {
    collection: 'ThongTinSite',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("ThongTinSite", ThongTinSite);