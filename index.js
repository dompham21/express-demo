require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./router/user.router');
const authRouter = require('./router/auth.router');
const productsRouter = require('./router/products.router');
const cartRouter = require('./router/cart.router');
const sessionsMiddlewares = require('./middlewares/sessions.middlewares');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const md5 = require('md5');

const app = express();
const port = 8080;	

mongoose.connect(process.env.MONGO_URL);
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(sessionsMiddlewares);
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',function(req,res){
	res.render('index.pug');
});

app.use('/users',userRouter);
app.use('/auth',authRouter);
app.use('/products',productsRouter);
app.use('/cart',cartRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

