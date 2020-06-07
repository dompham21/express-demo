const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
name: String,
email: String,
password: String,
avatar: String
});

const users = mongoose.model('users',userSchema,'users');

module.exports = users;