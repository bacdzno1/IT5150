import mongoose from "mongoose";
const UserTempNoAuth = new mongoose.Schema({ // Cho luồng ứng viên không bắt buộc phải xác thực khi mới đăng ký 
    use_id: {
        type: Number,
        required: true,
        unique: true
    },
    token: {
        type: String,
        default: ''
    }
}, {
    collection: 'UserTempNoAuth',
    versionKey: false,
    timestamps: true
})

export default mongoose.model("UserTempNoAuth", UserTempNoAuth);