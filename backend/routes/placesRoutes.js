const express = require('express');
const  {check} = require('express-validator')

const placesControllers = require('../controllers/placesController')
const checkAuth = require('../middleware/check-auth');
const router = express.Router();




router.get('/users/:uid/prescription/:pid',placesControllers.getPrescriptionById);

router.get('/users/:uid/prescription',placesControllers.getAllPrescriptions);

router.get('/users/:did/docprescription',placesControllers.getAllDocPrescriptions);

router.get('/users/:uid/vitals/:vid',placesControllers.getVitalbyId);

router.get('/users/:uid/vitals',placesControllers.getAllVitals);

router.get('/users/:uid/allergies',placesControllers.getAllAllergy);

router.get('/users/:uid/medicines', placesControllers.getAllMedicines);

router.get('/users/:uid/medicines/:mid', placesControllers.getMedicinesById);

router.get('/users/:uid/yourdoctors', placesControllers.getYourDoctors);

router.post('/vitals',[
    check('sugar').not().isEmpty(),
    check('BP').not().isEmpty(),
    check('pulse').not().isEmpty(),
    check('date').not().isEmpty()] ,
     placesControllers.createVitals);

router.post('/prescription', placesControllers.createPrescription);

//router.use(checkAuth);
 router.delete('/:vid', placesControllers.deleteVital );

module.exports  = router;