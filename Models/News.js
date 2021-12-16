const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    html:{
        type: String,
        required:true
    },
    thumbnail:{
        type: String,
        required:true
    },
    url:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('news', PostSchema);