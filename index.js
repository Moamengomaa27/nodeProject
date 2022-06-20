let mongoose = require('mongoose');
let express = require('express');
let app = express();
let cors = require('cors');

let product = require('./routes/product')
let category = require('./routes/category')
let cart = require('./routes/cart')
let order =require('./routes/order')

let bcrypt = require('bcrypt');
//let jwt = require('jsonwebtoken');
let User = require('./models/user');
 let auth = require('./middleware/auth')

 app.use(cors());


mongoose.connect('mongodb://localhost/ecommerce')
    .then(console.log('connected'))
    .catch(err => console.log('err: ' + err));

app.use(express.json());

    app.post('/login', async(req, res) => {
        try {
            let user = await User.findByCradentails(req.body.email, req.body.password);
            let token = user.generateAuthToken();
            res.send({ user, token });
        } catch (error) {
            res.status(400).send(error);
        }
    })
    app.post('/register', async(req, res) => {
        try {
            let user = await User.create({...req.body, password: await bcrypt.hash(req.body.password, 8) });
            let token = user.generateAuthToken();
            res.send({ user, token });
        } catch (error) {
            res.status(400).send(error);
        }
    }
    )
 
     app.post('/logout', auth, async(req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
            await req.user.save();
            res.send();
        } catch (error) {
            res.status(500).send(error);
        }
    }
    )


 app.use('/product', product);
 app.use('/category', category);
 app.use('/cart', cart);
 app.use('/order', order);
// app.use('/user', user);



app.listen(5000)