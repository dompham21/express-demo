var express = require('express');
var router = express.Router();
var multer  = require('multer');
var userController  = require('../controller/user.controller');
var authMiddlewares  = require('../middlewares/auth.middlewares');


var storage = multer.diskStorage({
	destination: function(req,file,cb){
 		cb(null,'/uploads');
		},
	filename: function(req,file,cb){
		cb(null,file.originalname);
		}
});
var upload = multer({storage:storage});

router.get('/',authMiddlewares.requireAuth,userController.index);


router.get('/search',authMiddlewares.requireAuth,userController.search);
router.get('/create',userController.create);
	
router.post('/create',upload.single('avatar'),userController.postCreate);


router.get('/:id',authMiddlewares.requireAuth,userController.viewUser);




module.exports = router;