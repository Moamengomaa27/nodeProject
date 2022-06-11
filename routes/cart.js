const express = require('express');
// const { requireSignin, userMiddleware } = require('../common-middleware');
const  addItem  = require('../controllers/cartcontroller');
const router = express.Router();


router.post('/user/cart/addtocart',  addItem.addItemToCart );


module.exports = router;