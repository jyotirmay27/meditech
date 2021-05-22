const express = require('express');
// express-validator will check info entered is coorect like if email is an email or not like that
const  {check} = require('express-validator')

const placesControllers = require('../controllers/placesController')

const router = express.Router();

/* when request is made from Frontend to url http://localhost:5000/api/places/<url mentioned in get/post request>
the router will head those url to specific function in places controller */

// this get request will fetch the prescription of ID passed by frontend which will be recieved by backend by :pid
//same for user ID who has requested the prescription
router.get('/users/:uid/prescription/:pid',placesControllers.getPrescriptionById);

/* This get request will fetch all the prescription for a user ID recieved dynamically by :uid */
router.get('/users/:uid/prescription',placesControllers.getAllPrescriptions);

/* This request will fetch all the prescription for a particular doctor whose id is dynamically recieved by :did
 */
router.get('/users/:did/docprescription',placesControllers.getAllDocPrescriptions);

/* Earlier plan of the website was to show cards for vitals, after clicking on the card the particular quantities 
graph will be shown but some twicks in plan resulted in directly showing instead of cards first. So for now this
router is useless for this application but later addition subtraction can be done to make changs in the application
using it . */
router.get('/users/:uid/vitals/:vid',placesControllers.getVitalbyId);

/* This router will send all the vitals information for a particular user to frontend to make graph of them */
router.get('/users/:uid/vitals',placesControllers.getAllVitals);

/* This router will send all the substances and their reactions which user is allergic to  */
router.get('/users/:uid/allergies',placesControllers.getAllAllergy);

/* This router send all the medicines user has been prescribed by the doctor with the date on which it was prescribed
   and with the doze you were mention. */
router.get('/users/:uid/medicines', placesControllers.getAllMedicines);

/* Earlier plan of the website was to show cards for medicines, after clicking on the card the particular quantities 
medicine will be shown but some twicks in plan resulted in directly showing instead of cards first. So for now this
router is useless for this application but later addition subtraction can be done to make changs in the application
using it . */
router.get('/users/:uid/medicines/:mid', placesControllers.getMedicinesById);

/* this will fetch all patient's doctors */
router.get('/users/:uid/yourdoctors', placesControllers.getYourDoctors);

// this will route the post request for all the vitals entered by user to database
router.post('/vitals',[
    check('sugar').not().isEmpty(),
    check('BPS').not().isEmpty(),
    check('BPD').not().isEmpty(),
    check('pulse').not().isEmpty(),
    check('temperature').not().isEmpty(),
    check('date').not().isEmpty(),
    check('weight').not().isEmpty(),
    check('height').not().isEmpty()] ,
     placesControllers.createVitals);


// this will route the post request for the prescription entered by doctor to database
router.post('/prescription', placesControllers.createPrescription);

//For this application this route is of not of any use but delete functionality can be added to this application in future upates;
 router.delete('/:vid', placesControllers.deleteVital );

module.exports  = router;