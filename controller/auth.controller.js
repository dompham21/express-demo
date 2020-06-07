var db = require('../db');
var shortid = require('shortid');
var md5 = require('md5');

module.exports.login = function(req,res){
	res.render('auth/login');
};

module.exports.postLogin = function(req,res){
	console.log(req.body.email);
var email = req.body.email;
var password = md5(req.body.password);
console.log(email);
var user =  db.get('users').find({email:email}).value();
if(!user){
	res.render('auth/login',{
	errors: ['User dose not exist .'],
	values: req.body	
	});
	return;
}
else 
	if(user.password != password){
		res.render('auth/login',{
			errors: ['Wrong password.'],
			values: req.body
		});
		return;
	}
res.cookie('usersId',user.id,{signed: true});
res.redirect('/users');	
}