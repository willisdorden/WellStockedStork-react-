var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var methodOverride = require("method-override");
var sequelize = require("sequelize");
var cookieParser = require ('cookie-parser');
var app = express();
var validator = require('express-validator');
var login = require('./backend/routes/backendlogin');
var router = express.Router();
var login = require('./backend/routes/backendlogin');
var bodyParser = require('body-parser');

app.listen(PORT, function() {
    console.log(`App running on port: ${PORT}`);
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login);

app.use('/api', router);
app.listen(4000);