import mongoose from 'mongoose';
const Users = new mongoose.Schema({
    use_id: {
        type: Number,
        required: true,
        unique: true
    },
    use_mail: {
        type: String,
    },
    use_phone: {
        type: String,
    },
    use_pass: {
        type: String,
        default: null
    },
    use_time: {
        type: String,
    },
    use_authentic: {
        type: Number,
        default: 0
    },
    use_otp: {
        type: Number,
        default: 0
    },
    use_name: {
        type: String,
        default: null
    },
    use_city: {
        type: Number,
        default: 0
    },
    use_district: {
        type: String,
    },
    address: {
        type: String,
    },
    use_logo: {
        type: String,
        default: null
    },
    birthday: {
        type: Number,
        default: 0
    },
    use_job_name: {
        type: String,
    },
    use_city_job: [{
        id: { type: String },
    }],
    use_nganh_nghe: [{
        id: { type: String },
    }],
    use_district_job: [{
        id: { type: String },
    }],
    gender: {
        type: Number,
        default: 0
    },
    exp_years: {
        type: Number,
        default: 0
    },
    salary: {
        type: Number,
        default: 0
    }, // Check sau
    use_view_count: {
        type: Number,
        default: 0
    },
    use_create_time: {
        type: Number,
        required: true,
    },
    use_update_time: {
        type: Number,
        required: true,
    },
    usc_search: {
        type: Number,
        default: 1
    },
}, {
    collection: 'Users',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("Users", Users);