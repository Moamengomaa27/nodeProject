let mongoose = require('mongoose');
let express = require('express');
let app = express();
let product = require('./routes/product')
let category = require('./routes/category')
let cart = require('./routes/cart')
let order =require('/routes/order')
mongoose.connect('mongodb://localhost/ecommerce')
    .then(console.log('connected'))
    .catch(err => console.log('err: ' + err));




app.use('/product', product);
app.use('/category', category);
app.use('/cart', cart);
app.use('/order', order);



app.listen(5000)