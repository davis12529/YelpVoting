var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
