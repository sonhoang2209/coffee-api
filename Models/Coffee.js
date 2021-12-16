const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    options:{
        type: Array,
        required:true
    },
    images:{
        type: Array,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    thumbnail:{
        type: String,
        required:true
    },
    slug:{
        type: String,
        required:true
    },
    type_id:{
        type: Number,
        required:true
    },
    new:{
        type: Number,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Coffee', PostSchema);