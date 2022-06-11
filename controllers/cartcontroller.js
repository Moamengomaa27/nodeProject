const Cart = require('../models/cart');

let addItemToCart = (req, res) => {
    console.log('ece')
    const cart = new Cart({
        user: req.user._id,
        cartItems: req.body.cartItems
    });

    cart.save((error, cart) => {
        if(error) return res.status(400).json({ error });

        if(cart){
            return res.status(201).json({ cart });
        }
    });

};

module.exports = { addItemToCart }