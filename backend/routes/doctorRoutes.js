const express = require('express');
// express-validator will info entered is coorect like if email is an email or not like that
const  {check} = require('express-validator')


const doctorControllers = require('../controllers/doctorController');


const router = express.Router();

// this show all doctors in the database to user to select or book appointments
router.get('/all', doctorControllers.getDoctors)

// this will fetch all the patients of doctors
router.get('/:did/yourPatients', doctorControllers.getYourPatients);

// when a user enters his/her credentials this router will send the request to POST to doctor controller
router.post('/signup', [
    check('name').not().isEmpty(),
    check('email').
    normalizeEmail(). // Test@test.com => test@test.com
    isEmail(),
    check('password').isLength({min : 6})
],doctorControllers.signup);
// when a user enters his/her credentials this router will send the request to doctor controller to verify if its correct
router.post('/login', doctorControllers.login);



module.exports  = router;