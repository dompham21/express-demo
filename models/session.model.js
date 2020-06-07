const mongoose = require('mongoose');


const sessionSchema = new mongoose.Schema({

});
const session = mongoose.model('session',sessionSchema,'session');
module.exports = session;