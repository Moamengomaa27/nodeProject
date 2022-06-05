let mongoose = require("mongoose");
let categorySchema = require("../database/category");
let Category = mongoose.model("categories", categorySchema);

module.exports = Category;
