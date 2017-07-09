
const express = require('express');
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require('path');

const app = express();

app.set('port', process.env.PORT);

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/", express.static(path.resolve(__dirname, '../app/build')));

//login and register routes
require('./routes/authRoutes')(app);

//require all api routes. User needs to be authenticated to use these routes
require('./routes/apiRoutes')(app);

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port') }`)
});