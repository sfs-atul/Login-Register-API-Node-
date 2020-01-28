const mongoose = require('mongoose');

const register_schema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    
    
});   

module.exports = mongoose.model('Register', register_schema); 