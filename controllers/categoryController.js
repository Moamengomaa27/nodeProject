let Category = require('../models/category');
let Joi = require('joi');

let schema = Joi.object({
    name: Joi.string().min(5).max(15).required()
})

let getAllCategory = async(req, res) => {
    res.send(await Category.find({}));
}
let createCategory = async(req, res) => {
try {
    let result = await schema.validateAsync(req.body);
    let category = await Category.create(result);
    res.send(category);

    } catch (error) {
        res.status(400).send(error);
    }
}



    //validate
//     try {
//         // console.log(req.bo);
//         await schema.validateAsync(req.body);
//         res.send(await Category.create({...req.body, pic: req.file.filename }));
//     } catch (error) {
//         res.send(error, 400);
//     }
// }

let deleteCategory = async(req, res) => {
    res.send(await Category.findByIdAndDelete(req.params.id));
}

let editCategory = async(req, res) => {
    res.send(await Category.findByIdAndUpdate(req.params.id, req.body));
}

module.exports = {
    getAllCategory,
    createCategory,
    deleteCategory,
    editCategory
}