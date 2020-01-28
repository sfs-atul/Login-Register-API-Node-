const mongoose = require('mongoose');


const post_schema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});   

module.exports = mongoose.model('Post', post_schema); 