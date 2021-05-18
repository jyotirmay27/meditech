const { uuid } = require('uuidv4');
const { validationResult } = require('express-validator');
const mongoose=require('mongoose');
const HttpError = require('../HttpError');
const Prescription = require('../models/Prescriptions');
const User= require('../models/Users');
const Medication= require('../models/Medications');
const Vital= require('../models/Vitals');



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
    const userId=req.params.uid;
    let emailId;
    try {
        emailId = await User.findById(userId)
        
    } catch (err) {
        const error = new HttpError(
            'Fetching user failed, please try again later',
            500
          );
    }
    if (!emailId ) {
        const error = new HttpError(
          'Invalid Email ID.',
          401
        );
    }
    let allmeds;
    try {
        allmeds = await Medication.find({ patient: emailId.email});
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    if (!allmeds ) {
        return next(
          new HttpError('Could not find places for the provided user id.', 404)
        );
      }
    res.json({Medicines: allmeds.map(meds => meds.toObject({ getters: true }))});
  
  };

  const getAllPrescriptions = async(req,res,next) =>{
    const userId=req.params.uid;
    let emailId;
    try {
        emailId = await User.findById(userId)
        
    } catch (err) {
        const error = new HttpError(
            'Fetching user failed, please try again later',
            500
          );
    }
    if (!emailId ) {
        const error = new HttpError(
          'Invalid Email ID.',
          401
        );
    }
    let allpres;
    try {
        allpres = await Prescription.find({ patient: emailId.email});
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({Prescriptions: allpres.map(pres => pres.toObject({ getters: true }))});
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
      
        res.json({ prescription: pres.toObject({ getters: true }) });
      };
  

    const createVitals =async  (req, res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
          );
        }

        const { sugar,BP,pulse,date} = req.body;

        const createVitals =new Vital({
    
            sugar,
            BP,
            pulse,
            date,
            creator 
        });

        let vital;
        try {
            vital = await User.find({email : creator});
        } catch (err) {
          const error = new HttpError(
            'Creating place failed, please try again.',
            500
          );
          return next(error);
        }
      
        if (!vital) {
          const error = new HttpError('Could not find user for provided id.', 404);
          return next(error);
        }
      
        console.log(vital);
      
        try {
          const sess = await mongoose.startSession();
          sess.startTransaction();
          await createVitals.save({ session: sess }); 
          await sess.commitTransaction();
        } catch (err) {
          const error = new HttpError(
            'Creating place failed, please try again.',
            500
          );
          return next(error);
        }
        res.status(201).json({ vital: createVitals });
    };

    const createPrescription = async (req,res,next) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(
              new HttpError('Invalid inputs passed, please check your data.', 422)
            );
          }
          const { age, name,date , meds,doctor,patient } = req.body;
          const createPrescriptions= new Prescription({
         
              age,
              name,
              date,
              meds,
              doctor,
              patient
          });
          const createMedication =new Medication({
      
              meds,            
              doctor,
              patient
          });

          let patientId;

          try {
            patientId = await User.findOne({ email:patient  })
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
            doc = await Doctor.findById(doctor);
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
            sess.startTransaction();
            await createPrescriptions.save({ session: sess }); 
            await createMedication .save({ session: sess });
            doc.prescriptions.push(createPrescriptions); 
            patientId.prescriptions.push(createPrescriptions);
            await doc.save({ session: sess });
            await patientId.save({ session: sess });  
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


const deleteVital = (req, res, next) => {
  const vitalId = req.params.vid;
  
  let vital;
  try {
    vital = await Vital.findById(vitalId);
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
