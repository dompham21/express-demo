
var db = require('../db');

module.exports.requireAuth = function(req,res,next){
	
	if(!req.signedCookies.usersId){
		res.redirect('/auth/login');
		return;
	}	

	var user = db.get('users').find({ id : req.signedCookies.usersId}).value();
	if(!user){
		res.redirect('/auth/login');
		return;
	}

next();


};