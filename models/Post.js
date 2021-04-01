const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:String,
    description:String,
    imgUrl: String,
    price: String,
    categories:String
});

module.exports = mongoose.model('Posts', PostSchema);