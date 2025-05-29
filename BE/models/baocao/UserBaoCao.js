import mongoose from "mongoose";

const UserBaoCao = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    UserName: {
        type: String,
    },
    PassWord: {
        type: String,
    }
}, {
    collection: 'UserBaoCao',
    versionKey: false,
    timestamp: true
})

export default mongoose.model("UserBaoCao", UserBaoCao);