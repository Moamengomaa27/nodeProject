// const express = require('express');
// const router = express.Router();
// another way to configure express and router

const router = require('express').Router();

let ProductController = require("../controllers/productController");
router.get("/", ProductController.getAllProduct);
router.post("/", ProductController.createProduct);
router.delete("/:id", ProductController.deleteProduct);
router.put("/:id", ProductController.editProduct);
module.exports = router;