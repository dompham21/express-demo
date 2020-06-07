const shortid = require('shortid');
const md5 = require('md5');
const users = require('../models/user.model.js');


module.exports.index  = async function(req,res){
	let users = await users.find();
		res.render('users/users',{	
		users: users
		});	
};

module.exports.search = function(req,res){
	var q = req.query.name;
	var users = db.get('users').value();	
	var machedUsers = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/users',{
	users: machedUsers
	});
};	

module.exports.create = function(req,res){
	res.render('users/create');
};

module.exports.postCreate = function(req,res){
	req.body.id = shortid.generate();
	req.body.password = md5(req.body.password);
	req.body.avatar = req.file.path.split('/').splice(1).join('/');

	db.get('users').push(req.body).write();
	res.redirect('/');	
};

module.exports.viewUser = function(req,res){
	var id = req.params.id;
	var users= db.get('users').find({id : id}).value();
	console.log(users.avatar);
	res.render('views.pug',{
		users: users
	});
};