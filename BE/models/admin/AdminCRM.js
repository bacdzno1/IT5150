import mongoose from 'mongoose';

const AdminCRM_Schema = new mongoose.Schema({
    admin_id: {
        type: Number,
        required: true,
        unique:true
    },
    adm_name: {
        type: String,
    },
    adm_bophan: {
        type: Number,
    },
    ep_id: {
        type: Number,
    },
}, {
    collection: 'AdminCRM',
    versionKey: false,
    timestamp: true
});

const AdminCRM = mongoose.model("AdminCRM", AdminCRM_Schema);
export default AdminCRM;