var db = require('../db');

module.exports.addToCart = function(req,res,next){
var productId = req.params.productId;
var sessionId = req.signedCookies.sessionId;
	if(!sessionId){
		res.redirect('/products');
		return;
	}

var count = db.get('sessions')
	.find({id:sessionId})
	.get('cart.'+ productId, 0)
	.value();

	db.get('sessions')
	.find({id:sessionId})
	.set('cart.' + productId, count+1)
	.write();



res.redirect('/products');

};
module.exports.cart = function(req,res){
	var sessionId = req.signedCookies.sessionId;
	var cartCount = Object.values(db.get('sessions')
		.find({id: sessionId})
		.get('cart')
		.value());
	var cartId = Object.keys(db.get('sessions')
	 	.find({id:sessionId})
	 	.get('cart')
	 	.value());
	var cartName=[];
	for(var i=0;i<cartId.length;i++){
		cartName[i] = db.get('products').find({id: cartId[i]}).value();
	}
	res.render('cart/cart',
	{	
		cartCount: cartCount,
		cartName: cartName
	});
};
