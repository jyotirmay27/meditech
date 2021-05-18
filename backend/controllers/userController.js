const { uuid } = require('uuidv4');
const { validationResult } = require('express-validator');
const User= require('../models/Users');
const Allergy= require('../models/Allergy');
const HttpError = require('../HttpError');



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

  const createdUser =new User ({

    name, 
    email,
    password,
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

  res.status(201).json({user: createdUser.toObject({ getters: true })});
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
    patientId.prescriptions.push(createPrescriptions);
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

  const { doctor,user } = req.body;

  let patientId;

  try {
    patientId = await User.findOne({ email:user  })
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
    patientId.doctors.push(doctor);
    await patientId.save({ session: sess }); 
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

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  res.json({message: 'Logged in!',
  user: existingUser.toObject({getters: true})});
};

exports.addDoctors=addDoctors;
exports.addallergy=addallergy;
exports.signup = signup;
exports.login = login;