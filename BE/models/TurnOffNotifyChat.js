import mongoose from 'mongoose';
const TurnOffNotifyChat = new mongoose.Schema({
    turnoff_id: {
        type: Number,
        required: true,
        unique:true
    },
    user_id: {
        type: Number,
    },
    user_type: {
        type: Number,
    },
    room: {
        type: String,
    },
}, {
    collection: 'TurnOffNotifyChat',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TurnOffNotifyChat", TurnOffNotifyChat);