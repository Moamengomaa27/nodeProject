const mongoose = require('mongoose');
const productSchema = require('../database/product')
// 2 ways to create exports
// module.exports = productSchema;
let Product = mongoose.model('products', productSchema);
module.exports = Product;

// module.exports = mongoose.model("Product", productSchema);
