const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type: String,
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
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('category', PostSchema);