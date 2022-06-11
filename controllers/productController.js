let Product = require('../models/Product');
let getAllProduct = async(req, res) => {
    res.send(await Product.find().populate('category_id'));
}
let createProduct = async(req, res) => {
    try {
        res.send(await Product.create(req.body));
    } catch (error) {
        res.status(400).send(error);
        // res.send(error, 400);
    }
}
let deleteProduct = async(req, res) => {
    res.send(await Product.findByIdAndDelete(req.params.id));
}

let editProduct = async(req, res) => {
    res.send(await Product.findByIdAndUpdate(req.params.id, req.body));
}

module.exports = {
    getAllProduct,
    createProduct,
    deleteProduct,
    editProduct
}