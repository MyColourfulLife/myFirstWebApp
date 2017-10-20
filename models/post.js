var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

// 
var PostSchema = Schema({
    title:String,
    content:String
});

//表名
const PostModel = mongoose.model('Post',PostSchema);

module.exports = PostModel;