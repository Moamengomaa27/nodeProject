let Product = require("../models/Product");
// to show all products
let getAllProduct = async (req, res) => {
  res.send(await Product.find().populate("category_id"));
};
let getProduct = async (req, res) => {
  res.send(await Product.findById(req.params.id));
};
// to create a new product
let createProduct = async (req, res) => {
  try {
    res.send(await Product.create(req.body));
  } catch (error) {
    res.send(error, 400);
  }
};
// to delete a product
let deleteProduct = async (req, res) => {
  res.send(await Product.findByIdAndDelete(req.params.id));
};


// to update a product
let editProduct = async (req, res) => {
  res.send(await Product.findByIdAndUpdate(req.params.id, req.body));
};

module.exports = {
  getAllProduct,
  createProduct,
  deleteProduct,
  editProduct,
  getProduct
};
