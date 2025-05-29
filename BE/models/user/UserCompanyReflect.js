import mongoose from 'mongoose';
const UserCompanyReflect = new mongoose.Schema({
    reflect_id: {
        type: Number,
        required: true,
        unique:true
    },
    id_user: {
        type: Number,
    },
    id_company: {
        type: Number,
    },
    content: {
        type: String,
    },
    created_date: {
        type: Number,
    }
}, {
    collection: 'UserCompanyReflect',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserCompanyReflect", UserCompanyReflect);