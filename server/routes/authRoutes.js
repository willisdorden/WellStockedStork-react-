
const authController = require('../controllers/authController');
module.exports = app => {

//    login user route handlers

    app.post('/register', authController.userRegister);

    app.post('/login', authController.userLogin);

    app.post('/questions', authController.Questions);

    app.post('/ecomom/bathingandgrooming', authController.grooming);

    app.post('/ecomom/forfun', authController.forfun);

    app.post('/ecomom/handyhelper', authController.handyhelper);

    app.post('/ecomom/kitchen', authController.kitchen);

    app.post('/ecomom/necessities', authController.necessities);

    app.post('/ecomom/nursery', authController.nursery);

    app.post('/chicmom/bathingandgrooming', authController.chicgrooming);

    app.post('/chicmom/forfun', authController.chicforfun);

    app.post('/chicmom/handyhelper', authController.chichandyhelper);

    app.post('/chicmom/kitchen', authController.chickitchen);

    app.post('/chicmom/necessities', authController.chicnecessities);

    app.post('/chicmom/nursery', authController.chicnursery);

    app.post('/practical/bathingandgrooming', authController.practicalgrooming);

    app.post('/practical/forfun', authController.practicalforfun);

    app.post('/practical/handyhelper', authController.practicalhandyhelper);

    app.post('/practical/kitchen', authController.practicalkitchen);

    app.post('/practical/necessities', authController.practicalnecessities);

    app.post('/practical/nursery', authController.practicalnursery);

};
