const express = require('express');
// express-validator will info entered is coorect like if email is an email or not like that
const  {check} = require('express-validator')


const usersControllers = require('../controllers/userController');


const router = express.Router();

// when a user enters his/her allergy this router will send the request to POST to user controller
router.post('/allergy', [
    check('from').not().isEmpty(),
    check('reaction').not().isEmpty()
],usersControllers.addallergy);

// when a user enters his/her credentials this router will send the request to POST to user controller
router.post('/signup', [
    check('name').not().isEmpty(),
    check('email').
    normalizeEmail() // Test@test.com => test@test.com
    .isEmail(),
    check('password').isLength({min : 6})
],usersControllers.signup);

/* when a user enters his/her information this router will send the request to user controller 
it will send a mail to a particular doctor from our site to confirm the appointment and revert the mail to patient */
router.post('/appointment', usersControllers.Appointment);

// when a user enters his/her credentials this router will send the request to user controller to verify if its correct
router.post('/login', usersControllers.login);

// it will send the request to user controller to add the doctor to YOUR DOCTOR column in user portal 
router.post('/doctor/:uid', usersControllers.addDoctors);






module.exports  = router;