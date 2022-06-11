const express = require('express');
// const { requireSignin, userMiddleware } = require('../common-middleware');
const  cartController  = require('../controllers/cartcontroller');
const router = express.Router();


router.post('/user/cart/addtocart', cartController.addItemToCart);


module.exports = router;