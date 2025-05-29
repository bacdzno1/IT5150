import mongoose from "mongoose";
const TblPointAdded = mongoose.Schema({
    id_p: {
        type: Number,
        required: true,
        unique: true
    },
    usc_id: {
        type: Number,
        required: true,
    },
    point: {
        type: Number,
    },
    added_day: {
        type: Number,
    },
}, {
    collection: 'TblPointAdded',
    versionKey: false,
    timestamp: true
})

export default mongoose.model("TblPointAdded", TblPointAdded)