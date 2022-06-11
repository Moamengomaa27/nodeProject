let mongoose = require("mongoose");
let cartSchema = require("../database/cart");
let Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
