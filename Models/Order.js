const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id_user:{
        type: String,
        required:true
    },
    fullName:{
        type: String,
        required:true
    },
    list_product:{
        type: Array,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    ticket:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('oder', PostSchema);