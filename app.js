const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const productRoute = require('./routes/products')
const categoryRoute = require("./routes/category");
let user = require("./routes/user");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 5000;
const app = express();
// connect mongodb to port
 mongoose.connect('mongodb://localhost/ecommerce')
 .then(console.log('connect mongodb to port'))
 .catch(err => console.log(err));

 let User = require("./models/User");
 mongoose
   .connect("mongodb://localhost/ecommerce")
   .then(console.log("connected"))
   .catch((err) => console.log("err: " + err));



app.post("/login", async (req, res) => {
  try {
    let user = await User.findByCradentails(req.body.email, req.body.password);
    let token = user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});



app.use(express.json());
// app.use("/products", productRoute);

app.use("/product", productRoute);
app.use("/category", categoryRoute);
app.use("/user", user);

app.listen(PORT, () => {
    console.log("connect")
 });
