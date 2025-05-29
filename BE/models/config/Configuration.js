import mongoose from 'mongoose';
const Configuration = new mongoose.Schema({
    con_id: {
        type: Number,
        required: true,
        unique:true
    },
    con_page_size: {
        type: String,
        default: null
    },
    con_left_size: {
        type: String,
        default: null
    },
    con_right_size: {
        type: String,
        default: null
    },
    con_admin_email: {
        type: String,
        default: null
    },
    con_site_title: {
        type: String,
        default: null
    },
    con_meta_description: {
        type: String,
        default: null
    },
    con_meta_keywords: {
        type: String,
        default: null
    },
    con_currency: {
        type: String,
        default: null
    },
    con_exchange: {
        type: Number,
        default: 0
    },
    con_lang_id: {
        type: Number,
        default: 1
    },
    lang_id: {
        type: Number,
        default: 1
    },
    con_static_footer: {
        type: Number,
        default: 0
    },
    con_static_header: {
        type: Number,
        default: 0
    },
    con_percent: {
        type: Number,
        default: 0
    },
    con_help_visitor: {
        type: String,
        default: null
    },
    con_help_estore: {
        type: String,
        default: null
    },
    con_help_product_model: {
        type: String,
        default: null
    },
    con_help_online_trading: {
        type: String,
        default: null
    },
    con_phone_1: {
        type: String,
        default: null
    },
    con_phone_2: {
        type: String,
        default: null
    },
    con_phone_3: {
        type: String,
        default: null
    },
    con_address: {
        type: String,
        default: null
    },
    con_map: {
        type: String,
        default: null
    },
    con_facebook: {
        type: String,
        default: null
    },
    con_googleplus: {
        type: String,
        default: null
    },
    con_youtube: {
        type: String,
        default: null
    },
    con_tw: {
        type: String,
        default: null
    },
    con_rss: {
        type: String,
        default: null
    },

}, {
    collection: 'Configuration',
    versionKey: false,
    timestamp: true
});

export default mongoose.model("Configuration", Configuration);