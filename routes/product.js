// const router = express.Router();
// another way to configure express and router

const router = require('express').Router();
let auth = require('../middleware/auth');
let ProductController = require("../controllers/productController");
router.get("/",  ProductController.getAllProduct);
router.get("/:id",  ProductController.getProduct);
router.post("/",  ProductController.createProduct);
router.delete("/:id", ProductController.deleteProduct);
router.put("/:id", ProductController.editProduct);
module.exports = router;