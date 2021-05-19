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
        doctors = await Doctor.find({}, '-password');
    } catch (err) {
      const error = new HttpError(
        'Fetching Doctors failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({doctors: doctors.map(doctor => doctor.toObject({ getters: true }))});
  };

  const getYourPatients = async(req,res,next) =>{
    const emailId=req.params.did;
   

    let user;
    try {
        user = await Combo.find({ doctor: emailId});
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({doctor: user.map(pres => pres.toObject({ getters: true }))});
  };

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
      hashedPassword = await bcrypt.hash(password,12);
      }
      catch(err)
      {
        const error = new HttpError('could not create', 500);  
        return next(error);
      }

  const createdUser =new Doctor({
    
    name, // name: name
    email,
    password : hashedPassword,
    prescriptions:[]
  });
  try {
    await createdUser.save();
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
      { userId: createdUser.id, email: createdUser.email },
      'supersecret_dont_share_it',
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }
  res.status(201).json({doctors: createdUser.toObject({ getters: true }),token:token});
};

const login = async(req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await Doctor.findOne({ email: email })
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
  isValidPassword= await bcrypt.compare(password,existingUser.password)
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
      { userId: existingUser.id, email: existingUser.email },
      'supersecret_dont_share_it',
      { expiresIn: '1h' }
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
};

exports.getDoctors = getDoctors;
exports.signup = signup;
exports.login = login;
exports.getYourPatients=getYourPatients;