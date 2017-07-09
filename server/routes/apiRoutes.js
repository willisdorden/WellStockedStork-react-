
const apiController = require('../controllers/apiController');


module.exports = app => {
  //  route to handle testing the server
  app.get('/api/test',apiController.Register);


//    route to retrieve user profile

    app.get('api/:userId/profile',apiController.retrieveProfile)
};

