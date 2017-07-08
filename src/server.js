var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var methodOverride = require("method-override");
var sequelize = require("sequelize");
var bcrypt = require('bcrypt');
var cookieParser = require ('cookie-parser');

var validator = require('express-validator');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8082;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(validator());

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");


//=================================
//      Routes
//================================
require("./routes/public/account-api.js")(app);
require("./routes/private/profile-api.js")(app);
require("./routes/private/survey-api.js")(app);


app.listen(PORT, function() {
    console.log(`App running on port: ${PORT}`);
});
