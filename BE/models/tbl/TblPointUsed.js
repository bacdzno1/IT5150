import mongoose from 'mongoose';
const TblPointUsed = new mongoose.Schema({
    id_p: {
        type: Number,
        required: true,
        unique: true
    },
    usc_id: {
        type: Number,
        required: true,
    },
    use_id: {
        type: Number,
    },
    point: {
        type: Number,
    },
    type: {
        type: Number,
    },
    type_err: {
        type: Number,
        default: 0
    },
    note_uv: {
        type: String,
    },
    used_day: {
        type: Number,
    },
    return_point: {
        type: Number,
        default: 0
    }
}, {
    collection: 'TblPointUsed',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblPointUsed", TblPointUsed);