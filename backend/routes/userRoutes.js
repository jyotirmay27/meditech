const express = require('express');
const  {check} = require('express-validator')


const usersControllers = require('../controllers/userController');


const router = express.Router();


router.post('/allergy', [
    check('from').not().isEmpty(),
    check('reaction').not().isEmpty()
],usersControllers.addallergy);

router.post('/signup', [
    check('name').not().isEmpty(),
    check('email').
    normalizeEmail(). // Test@test.com => test@test.com
    isEmail(),
    check('password').isLength({min : 6})
],usersControllers.signup);

router.post('/appointment', usersControllers.Appointment);

router.post('/login', usersControllers.login);

router.post('/doctor/:uid', usersControllers.addDoctors);






module.exports  = router;