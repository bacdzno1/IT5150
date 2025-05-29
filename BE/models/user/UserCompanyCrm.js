import mongoose from 'mongoose';
const UserCompanyCrm = new mongoose.Schema({
    id_crm: {
        type: Number,
        required: true,
        unique:true
    },
    usc_id: {
        type: Number,
    },
    usc_group: {
        type: Number,
    },
    use_status: {
        //1: đăng tin;2 sửa tin,3 làm mới tin,4: đăng nhập;5:chỉnh sửa thông tin công ty
        type: Number,
    },
    admin: {
        type: Number,
    },
    time_created: {
        type: Number,
    },
    active: {
        type: Number,
    },
}, {
    collection: 'UserCompanyCrm',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("UserCompanyCrm", UserCompanyCrm);