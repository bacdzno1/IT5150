import mongoose from 'mongoose';
const TblPointCompany = new mongoose.Schema({
    usc_id: {
        type: Number,
        required: true,
        unique:true
    },
    point: {
        type: Number,

    },
    point_usc: {
        type: Number,

    },
    day_reset_point: {
        type: Number,

    },
    day_end: {
        type: Number,

    }
}, {
    collection: 'TblPointCompany',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblPointCompany", TblPointCompany);