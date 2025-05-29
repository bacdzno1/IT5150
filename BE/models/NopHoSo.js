import mongoose from 'mongoose';
const NopHoSo = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    nhs_use_id: {
        type: Number,
    },
    nhs_com_id: {
        type: Number,
    },
    nhs_new_id: {
        type: Number,
    },
    nhs_time: {
        type: Number,
    },
    date_interview: {
        type: Number,
        default: null
    },
    note_interview: {
        type: String,
        default: null
    },
    note: {
        type: String,
        default: null
    },
    result: {
        type: Number,
        default: 0
    },
    type: {
        type: Number,
        default: 1
    },
    date_result: {
        type: Number,
    },
    letter: {
        type: String,
        default: null
    },
}, {
    collection: 'NopHoSo',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("NopHoSo", NopHoSo);