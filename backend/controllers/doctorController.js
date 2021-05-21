const { uuid } = require('uuidv4');
const mongoose=require('mongoose');
const { validationResult } = require('express-validator');
const Doctor= require('../models/Doctors');
const HttpError = require('../HttpError');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const Combo = require('../models/Combo');

const getDoctors = async(req,res,next) =>{
    let doctors;
    try {
        doctors = await Doctor.find({}, '-password');// find doctors in database and return all information except password.
    } catch (err) {
      const error = new HttpError(
        'Fetching Doctors failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({doctors: doctors.map(doctor => doctor.toObject({ getters: true }))});
  };// getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically

  // this fetch the Prescriptions for the particular user

  const getYourPatients = async(req,res,next) =>{
    const emailId=req.params.did; // gets the email id from url
   

    let user;
    try {
        user = await Combo.find({ doctor: emailId});// find the email in database
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({doctor: user.map(pres => pres.toObject({ getters: true }))});
  };// getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically

  // this fetch the Prescriptions for the particular user


const signup =async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser =await Doctor.findOne({ email: email})
      
  } catch (err) {
      const error = new HttpError('SigningUP failed',500);
        return next(error);
      
  }
  
      if (existingUser) {
          const error = new HttpError('User already exist',422);
        return next(error);
          
      }
      let hashedPassword;
      try{
      hashedPassword = await bcrypt.hash(password,12);// hash the password to 12 digits
      }
      catch(err)
      {
        const error = new HttpError('could not create', 500);  
        return next(error);
      }

  const createdUser =new Doctor({// create new user template to enter in database
    
    name, // name: name
    email,
    password : hashedPassword,
    prescriptions:[]
  });
  try {
    await createdUser.save();// save the data in database by this line
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again.',
      500
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },// it will create a token storing email and user ID in it
      'supersecret_dont_share_it', // this is the key which is very specific and could lead to system hack
      { expiresIn: '1h' }// token will be expired in 1hr
    );
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }
  res.status(201).json({doctors: createdUser.toObject({ getters: true }),token:token});
};// getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically

// this fetch the Prescriptions for the particular user


const login = async(req, res, next) => {
  const { email, password } = req.body;// will recieve json data from front to process further

  let existingUser;

  try {
    existingUser = await Doctor.findOne({ email: email })// find the email in database
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  let isValidPassword= false;
  try {
  isValidPassword= await bcrypt.compare(password,existingUser.password)// will conpare the password you entered and which is saved hashed in database.
  }
  catch(err)
  {
    const error = new HttpError(
      ' could not log you in.',
      401
    );
    return next(error);

  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },// it will create a token storing email and user ID in it
      'supersecret_dont_share_it',// this is the key which is very specific and could lead to system hack
      { expiresIn: '1h' }// token will be expired in 1hr
    );
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({message: 'Logged in!',
  doctors: existingUser.toObject({getters: true}),token:token});
};// getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically

// this fetch the Prescriptions for the particular user

// and finally export all files.
exports.getDoctors = getDoctors;
exports.signup = signup;
exports.login = login;
exports.getYourPatients=getYourPatients;