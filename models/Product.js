const mongoose = require('mongoose');
const productSchema = require('../database/product')
// 2 ways to create exports
// module.exports = productSchema;
module.exports = mongoose.model("Product", productSchema);
