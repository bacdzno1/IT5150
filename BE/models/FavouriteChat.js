import mongoose from 'mongoose';
const FavouriteChat = new mongoose.Schema({
    fav_id: {
        type: Number,
        required: true,
        unique:true
    },
    fav_user_id: {
        type: Number,
    },
    fav_user_type: {
        type: Number,
    },
    fav_room: {
        type: String,
    },
    fav_updated_at: {
        type: Number,
    }
}, {
    collection: 'FavouriteChat',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("FavouriteChat", FavouriteChat);