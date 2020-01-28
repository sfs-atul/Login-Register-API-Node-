const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var mongoDB = 'mongodb+srv://admin:admin@cluster0-hhdvk.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });