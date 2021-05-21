const { uuid } = require('uuidv4');
const { validationResult } = require('express-validator');
const mongoose=require('mongoose');
const HttpError = require('../HttpError');
const Prescription = require('../models/Prescriptions');
const User= require('../models/Users');
const Medication= require('../models/Medications');
const Vital= require('../models/Vitals');
const Allergy=require('../models/Allergy');
const Combo = require('../models/Combo');
const Doctor = require('../models/Doctors');


// this fetch the vitals for the particular user
const getAllVitals = async(req,res,next) =>{
    const userId=req.params.uid;  // this will bind the user Id from url to a constant
    let vitall;
    try {
        vitall = await Vital.find({ creator: userId}); // this will search the user ID in vitals database
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({vitals: vitall.map(v => v.toObject({ getters: true }))}); // this will send the searched vitals or will send empty array
  };// getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically

  // this fetch the medicines for the particular user
  const getAllMedicines = async(req,res,next) => {
    const emailId=req.params.uid;
    

    let allmeds;
    try {
        
        allmeds = await Medication.find({ patID: emailId});// this will search the user ID in medications database
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }

    res.json({Medicines: allmeds.map(m => m.toObject({ getters: true }))});
  // getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically
  };

 
     // this fetch the Allergy for the particular user
 const getAllAllergy = async(req,res,next) => {
    const emailId=req.params.uid;
  let allergy;
  try {
    allergy = await Allergy.find({ creator: emailId});// this will search the user ID in allergies database
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({allergies: allergy.map(a => a.toObject({ getters: true }))});// this will send the searched allergies or will send empty array
}; // getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically

// this fetch the Prescriptions for the particular user
  const getAllPrescriptions = async(req,res,next) =>{
    const emailId=req.params.uid;
   

    let allpres;
    try {
        allpres = await Prescription.find({ patID: emailId});
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({Prescriptions: allpres.map(pres => pres.toObject({ getters: true }))});
  };

  // it will search all prescriptions by doctors for doctors portal
  const getAllDocPrescriptions = async(req,res,next) =>{
    const emailId=req.params.did;
   

    let allpres;
    try {
        allpres = await Prescription.find({ docID: emailId}); // this will search the doctor ID in database
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({Prescriptions: allpres.map(pres => pres.toObject({ getters: true }))});
  };

  // this will give you all doctors 
  const getYourDoctors = async(req,res,next) =>{
    const emailId=req.params.uid;
   

    let user;
    try {
        user = await Combo.find({ patient: emailId});
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({User: user.map(pres => pres.toObject({ getters: true }))});
  };

/* Earlier plan of the website was to show cards for vitals, after clicking on the card the particular quantities 
graph will be shown but some twicks in plan resulted in directly showing instead of cards first. So for now this
router is useless for this application but later addition subtraction can be done to make changs in the application
using it . */
const getVitalbyId = async(req,res,next) =>{
    const vitalId=req.params.vid;
    let vitals;
    try {
        vitals = await Vital.findById( vitalId );// this will search the particular vital in database
    } catch (err) {
      const error = new HttpError(
        'Fetching places failed, please try again later',
        500
      );
      return next(error);
    }
  
    if (!vitals ) {
      return next(
        new HttpError('Could not find places for the provided user id.', 404)
      );
    }
  
    res.json({ vitals: vitals.toObject({ getters: true }) });
  };


    const getPrescriptionById =async (req,res,next)=>{
        const presId = req.params.pid;
        let pres;
        try {
            pres = await Prescription.findById(presId);// this will search the particular prescription in database
        } catch (err) {
          const error = new HttpError(
            'Fetching places failed, please try again later',
            500
          );
          return next(error);
        }
      
        if (!pres || pres.length === 0) {
          return next(
            new HttpError('Could not find places for the provided user id.', 404)
          );
        }
      
        res.json({ prescription: pres.toObject({ getters: true }) });
      };


/* Earlier plan of the website was to show cards for medicines, after clicking on the card the particular quantities 
medicine will be shown but some twicks in plan resulted in directly showing instead of cards first. So for now this
router is useless for this application but later addition subtraction can be done to make changs in the application
using it . */
    const getMedicinesById =async(req,res,next)=>{
        const MedId=req.params.mid;
        let med ;
        try {
            med  = await Prescription.findById(MedId);// this will search the particular medicine in database
        } catch (err) {
          const error = new HttpError(
            'Fetching places failed, please try again later',
            500
          );
          return next(error);
        }
      
        if (!med  || med .length === 0) {
          return next(
            new HttpError('Could not find places for the provided user id.', 404)
          );
        }
      
        res.json({ prescription: med.toObject({ getters: true }) });
      };
  
// this functin will store the vital entries entered by the user
    const createVitals =async  (req, res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
          );
        }

        const { sugar,BPS,BPD,pulse,temperature,date,weight,height,creator} = req.body; // this will get json data from the form filled in frontend

        const createdVitals =new Vital({ // this will trigger Vital schema to form a template to enter in database
    
            sugar,
            BPS,
            BPD,
            pulse,
            temperature,
            date,
            weight,
            height,
            creator 
        });

        let user;
        try {
            user = await User.find({email : creator});// this will search the user ID in database
        } catch (err) {
          const error = new HttpError(
            'Creating place failed, please try again.',
            500
          );
          return next(error);
        }
      
        if (!user) {
          const error = new HttpError('Could not find user for provided id.', 404);
          return next(error);
        }
        
      
        try {
            
            const sess = await mongoose.startSession(); // start a session 
            sess.startTransaction(); // to transport data to database with condition the things inside 
                                      //start transaction and commit transaction either all tasks will be executed or none will.
          await createdVitals.save({ session: sess }); 
        
          await sess.commitTransaction();
        } catch (err) {
          const error = new HttpError(
            'Creating place failed, please try again.',
            500
          );
          return next(error);
        }
        res.status(201).json({ vital: createdVitals });
    };

    const createPrescription = async (req,res,next) =>{
        
 
          const { age, patname,date , hospitalname,note,doze,meds,docID,patID } = req.body;// this will get json data from the form filled in frontend
          const createPrescriptions= new Prescription({  // this will trigger prescription schema to form a template to enter in database
         
            age,
             patname,
             date ,
              hospitalname,
              note,
              doze,
              meds,
              docID,
              patID
          });
          const createMedication =new Medication({  // this will trigger medication schema to form a template to enter in database
      
              meds, 
              date,           
              docID,
              patID
          });

          let patientId;

          try {
            patientId = await User.findOne({ email:patID  })// this will search the user ID in database
          } catch (err) {
            const error = new HttpError(
              'Logging in failed, please try again later.',
              500
            );
            return next(error);
          }
          if (!patientId) {
            const error = new HttpError('Could not find patient for provided id.', 404);
            return next(error);
          }
          console.log(patientId);
          let doc;
          try {
            doc = await Doctor.findOne({ email:docID  });
          } catch (err) {
            const error = new HttpError(
              'Creating place failed, please try again.',
              500
            );
            return next(error);
          }
        
          if (!doc) {
            const error = new HttpError('Could not find user for provided id.', 404);
            return next(error);
          }
        
          console.log(doc);
        
          try {
            const sess = await mongoose.startSession();// to transport data to database with condition the things inside 
            sess.startTransaction()// this will trigger prescription schema to form a template to enter in database
            await createPrescriptions.save({ session: sess }); 
            await createMedication.save({ session: sess });
            //doc.prescriptions.push(createPrescriptions); 
            //doc.patients.push(patID);
           // patientId.prescriptions.push(createPrescriptions);
            //await doc.save({ session: sess });
           //await patientId.save({ session: sess });  
           await sess.commitTransaction();
          } catch (err) {
            const error = new HttpError(
              'Creating place failed, please try again.',
              500
            );
            return next(error);
          }

          res.status(201).json({ prescription: createPrescriptions , medication: createMedication });

    };

// this function is not of use for this application as delete functionality is not a part of this applicaton but an be later added.
const deleteVital =async (req, res, next) => {
  const vitalId = req.params.vid;
  
  let vital;
  try {
    vital = await Vital.findById(vitalId);
    patientEmail = Vital.creator;
    patient= await User.find({ email: patientEmail});
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete vitals.',
      500
    );
    return next(error);
  }

  if(!vital){
    const error = new HttpError(
      'Something went wrong, could not delete place.',
      500
    );
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await vital.remove({session: sess}); // this will simply delete the entry in the database
    patient.vitals.pull(place);
    await patient.save({session: sess});
    await sess.commitTransaction();
    await vital.remove();
   
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete place.',
      500
    );
    return next(error);
  }

  res.status(200).json({ message: 'Deleted place.' });
};


// at last all files are exported.

exports.createVitals = createVitals;
exports.deleteVital = deleteVital;
exports.getAllVitals = getAllVitals;
exports.getAllMedicines=getAllMedicines;
exports.getAllPrescriptions = getAllPrescriptions;
exports.getVitalbyId = getVitalbyId;
exports.getPrescriptionById=getPrescriptionById;
exports.createPrescription=createPrescription;
exports.getMedicinesById=getMedicinesById;
exports.getAllAllergy=getAllAllergy;
exports.getYourDoctors=getYourDoctors;
exports.getAllDocPrescriptions =getAllDocPrescriptions;