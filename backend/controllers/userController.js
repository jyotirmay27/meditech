const { uuid } = require('uuidv4');
const { validationResult } = require('express-validator');
const User= require('../models/Users');
const Allergy= require('../models/Allergy');
const HttpError = require('../HttpError');
const Doctor = require('../models/Doctors');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose');
const Combo = require('../models/Combo');
const signup =async  (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser =await User.findOne({ email: email})
      
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
  const createdUser =new User ({

    name, 
    email,
    password : hashedPassword,
    prescriptions:[],
    medication:[]
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
      'supersecret_dont_share',
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }
  res.status(201).json({user: createdUser.toObject({ getters: true }),token: token});
};

const addallergy =async  (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }
  const { from, reaction, creator } = req.body;


  const createdAllergy =new Allergy ({
    from, 
    reaction,
    creator
  });
  let patientId;

  try {
    patientId = await User.findOne({ email:creator  })
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


  try {
    const sess = await mongoose.startSession();
     sess.startTransaction()
    await createdAllergy.save();
    patientId.allergy.push(createdAllergy);
    await patientId.save({ session: sess }); 
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      ' failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({allergy: createdAllergy.toObject({ getters: true })});
};

const addDoctors =async  (req, res, next) => {

  const { doctor,patient } = req.body;

  const createdCombo =new Combo({
    
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

  let docId;
  try {
    docId = await Doctor.findOne({ email:doctor })
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }
  if (!docId) {
    const error = new HttpError('Could not find doctor for provided id.', 404);
    return next(error);
  }
  console.log(docId);

  
  try {
    const sess = await mongoose.startSession();
     sess.startTransaction()
     await createdCombo.save({ session: sess }); 
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      ' failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({doctors: patientId.doctors});
};


const login =async  (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser ) {
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
      'supersecret_dont_share',
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
  user: existingUser.toObject({getters: true}),
  token:token});
};

exports.addDoctors=addDoctors;
exports.addallergy=addallergy;
exports.signup = signup;
exports.login = login;