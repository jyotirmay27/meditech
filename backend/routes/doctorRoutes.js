const express = require('express');
const  {check} = require('express-validator')


const doctorControllers = require('../controllers/doctorController');


const router = express.Router();

router.get('/all', doctorControllers.getDoctors)

router.get('/:did/yourPatients', doctorControllers.getYourPatients);

router.post('/signup', [
    check('name').not().isEmpty(),
    check('email').
    normalizeEmail(). // Test@test.com => test@test.com
    isEmail(),
    check('password').isLength({min : 6})
],doctorControllers.signup);

router.post('/login', doctorControllers.login);






module.exports  = router;