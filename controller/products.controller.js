const Product = require('../models/product.model.js');


module.exports.index = async function(req,res){
	// const page = parseInt(req.query.page) || 1; // Page 
	// const perPage = 6;
	// var start = (page-1)*perPage;
	// var end = page*perPage;
	// var products = db.get('products').value().slice(start,end);
	let products = await Product.find();
		res.render('./products/products',{
		products: products
		});
};