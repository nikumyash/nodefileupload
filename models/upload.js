const mongoose = require('mongoose');
const URLs = mongoose.Schema({link:String,fileName:String});
const URLShortner = mongoose.model('URLShortner',URLs);

module.exports =  URLShortner;