const { uuid } = require('uuidv4');
const mongoose=require('mongoose');
const { validationResult } = require('express-validator');
const Doctor= require('../models/Doctors');
const HttpError = require('../HttpError');



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

  const createdUser = {
    id: uuid(),
    name, // name: name
    email,
    password,
    prescriptions:[]
  };
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({doctors: createdUser.toObject({ getters: true })});
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

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  res.json({message: 'Logged in!',
  doctors: existingUser.toObject({getters: true})});
};

exports.getDoctors = getDoctors;
exports.signup = signup;
exports.login = login;