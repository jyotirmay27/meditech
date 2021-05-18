const express = require('express');
const  {check} = require('express-validator')

const placesControllers = require('../controllers/placesController')

const router = express.Router();



router.get('/users/:uid/prescription/:pid',placesControllers.getPrescriptionById);

router.get('/users/:uid/prescription',placesControllers.getAllPrescriptions);

router.get('/users/:uid/vitals/:vid',placesControllers.getVitalbyId);

router.get('/users/:uid/vitals',placesControllers.getAllVitals);

router.get('/users/:uid/allergy',placesControllers.getAllAllergy);

router.get('/users/:uid/medicines', placesControllers.getAllMedicines);

router.get('/users/:uid/medicines/:mid', placesControllers.getMedicinesById);



router.post('/vitals',[
    check('sugar').not().isEmpty(),
    check('BP').not().isEmpty(),
    check('pulse').not().isEmpty(),
    check('date').not().isEmpty()] ,
     placesControllers.createVitals);

router.post('/prescription', placesControllers.createPrescription);


 router.delete('/:vid', placesControllers.deleteVital );

module.exports  = router;