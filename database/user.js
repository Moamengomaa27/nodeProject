let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [5, 'too short'],
        maxlength: 15,
    },
    email: String,
    password: String,
<<<<<<< HEAD
    token: [
        token, {
=======
    token: {
>>>>>>> 96be06911229b8a70ce0800de02ca491ff457841
            type: String,
            required: true
    }
})



module.exports = userSchema;
