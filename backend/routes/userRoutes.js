const express = require('express');
const  {check} = require('express-validator')


const usersControllers = require('../controllers/userController');


const router = express.Router();


router.get('/', usersControllers.getUsers)

router.post('/signup', [
    check('name').not().isEmpty(),
    check('email').
    normalizeEmail(). // Test@test.com => test@test.com
    isEmail(),
    check('password').isLength({min : 6})
],usersControllers.signup);

router.post('/login', usersControllers.login);






module.exports  = router;