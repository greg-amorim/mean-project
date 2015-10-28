var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 

var Article = new Schema({
    article: String,
    comment: String
});


module.exports = mongoose.model('Article', Article);