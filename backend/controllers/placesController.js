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
const getAllVitals = async(req,res,next) =>{
    const userId=req.params.uid;
    let vitall;
    try {
        vitall = await Vital.find({ creator: userId});
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({vitals: vitall.map(v => v.toObject({ getters: true }))});
  };

  const getAllMedicines = async(req,res,next) => {
    const emailId=req.params.uid;
    

    let allmeds;
    try {
        
        allmeds = await Medication.find({ patID: emailId});
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    console.log(allmeds);

    res.json({Medicines: allmeds.map(m => m.toObject({ getters: true }))});
  
  };

 
    
 const getAllAllergy = async(req,res,next) => {
    const emailId=req.params.uid;
  let allergy;
  try {
    allergy = await Allergy.find({ creator: emailId});
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({allergies: allergy.map(a => a.toObject({ getters: true }))});
};

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
  const getAllDocPrescriptions = async(req,res,next) =>{
    const emailId=req.params.did;
   

    let allpres;
    try {
        allpres = await Prescription.find({ docID: emailId});
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({Prescriptions: allpres.map(pres => pres.toObject({ getters: true }))});
  };

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

const getVitalbyId = async(req,res,next) =>{
    const vitalId=req.params.vid;
    let vitals;
    try {
        vitals = await Vital.findById( vitalId );
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
            pres = await Prescription.findById(presId);
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



    const getMedicinesById =async(req,res,next)=>{
        const MedId=req.params.mid;
        let med ;
        try {
            med  = await Prescription.findById(MedId);
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
  

    const createVitals =async  (req, res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
          );
        }

        const { sugar,BPS,BPD,pulse,temperature,date,weight,height,creator} = req.body;

        const createdVitals =new Vital({
    
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
            user = await User.find({email : creator});
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
        console.log(createdVitals);
        console.log(user);
      
        try {
            
            const sess = await mongoose.startSession();
            sess.startTransaction();
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
        
 
          const { age, patname,date , hospitalname,note,doze,meds,docID,patID } = req.body;
          const createPrescriptions= new Prescription({
         
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
          const createMedication =new Medication({
      
              meds, 
              date,           
              docID,
              patID
          });

          let patientId;

          try {
            patientId = await User.findOne({ email:patID  })
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
            const sess = await mongoose.startSession();
            sess.startTransaction()
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
    await vital.remove({session: sess});
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