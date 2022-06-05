const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const productRoute = require('./routes/products')
const categoryRoute = require("./routes/category");

const PORT = process.env.PORT || 5000;
const app = express();
// connect mongodb to port
 mongoose.connect('mongodb://localhost/ecommerce')
 .then(console.log('connect mongodb to port'))
 .catch(err => console.log(err));






app.use(express.json());
// app.use("/products", productRoute);

app.use("/product", productRoute);
app.use("/category", categoryRoute);

app.listen(PORT, () => {
    console.log("connect")
 });
