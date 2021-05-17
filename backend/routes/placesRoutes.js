const express = require('express');
const  {check} = require('express-validator')

const placesControllers = require('../controllers/placesControllers')

const router = express.Router();


router.get('/:pid', placesControllers.getPlaceById );

router.get('/users/:uid', placesControllers.getPlacesByUserId);

router.get('/doctors/:did', placesControllers.getPlacesByUserId);




module.exports  = router;