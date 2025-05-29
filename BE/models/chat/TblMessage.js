import mongoose from 'mongoose';
const TblMessage = new mongoose.Schema({
    mes_id: {
        type: Number,
        required: true,
        unique:true
    },
    id_sender: {
        type: Number,
    },
    id_receiver: {
        type: Number,
    },
    id_reply: {
        type: Number,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    created_date: {
        type: Number,
    }
}, {
    collection: 'TblMessage',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblMessage", TblMessage);