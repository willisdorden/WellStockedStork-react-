
const authController = require('../controllers/authController');
module.exports = app => {

//    login user route handlers

    app.post('/register', authController.userRegister);

    app.post('/login', authController.userLogin)
};
