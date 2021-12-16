const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors())
app.use(bodyParser.json());

const routerUser = require('./routes/Users')
const routerCoffee = require('./routes/Coffees')
const routerCategory = require('./routes/Categories')
const routerNews = require('./routes/News')
const routerOrder = require('./routes/Orders')
const routerTicket = require('./routes/Tickets')
const routerMenu = require('./routes/Menu')

app.use('/user', routerUser);
app.use('/coffee', routerCoffee);
app.use('/category', routerCategory);
app.use('/news', routerNews);
app.use('/order', routerOrder);
app.use('/ticket', routerTicket);
app.use('/menu', routerMenu);

app.get('/',( req, res ) => {
    res.send('hello home');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true  }, () => {
	console.log("Connected to DB")
});

app.listen(4000);