import mongoose from 'mongoose';
const TblRateCompany = new mongoose.Schema({
    rate_id: {
        type: Number,
        required: true,
        unique:true
    },
    usc_id: {
        type: Number,
    },
    countStar: {
        type: Number,
    },
    staff: {
        type: Number,
    },
    rate_com: {
        type: String,
    },
    strong: {
        type: String,
    },
    weakness: {
        type: String,
    },
    help_com: {
        type: String,
    },
    advice: {
        type: String,
    },
    culture_company: {
        type: Number,
    },

    welfare: {
        type: Number,
    },
    boss: {
        type: Number,
    },
    office: {
        type: Number,
    },
    promotion_opportunities: {
        type: Number,
    },
    recommend: {
        type: Number,
    },
    work_environment: {
        type: Number,
    },
    forBoss: {
        type: Number,
    },
    rate_like: {
        type: Number,
        default: 0
    },
    rate_active: {
        type: Number,
        default: 0
    },
    rate_time: {
        type: Number,
    }

}, {
    collection: 'TblRateCompany',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("TblRateCompany", TblRateCompany);