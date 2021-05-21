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
const nodemailer = require("nodemailer");

const signup =async  (req, res, next) => {
  const errors = validationResult(req); // this will validate the checks we put on user router file for name email and password.
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }
  const { name, email, password } = req.body; // will recieve json data from front to process further

  let existingUser;
  try {
    existingUser =await User.findOne({ email: email}) // find the email in database
      
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
      hashedPassword = await bcrypt.hash(password,12); // hash the password to 12 digits
      }
      catch(err)
      {
        const error = new HttpError('could not create', 500);  
        return next(error);
      }
  const createdUser =new User ({ // create new user template to enter in database

    name, 
    email,
    password : hashedPassword,
    prescriptions:[],
    medication:[]
  });

  try {
    await createdUser.save(); // save the data in database by this line
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
      { userId: createdUser.id, email: createdUser.email }, // it will create a token storing email and user ID in it
      'supersecret_dont_share', // this is the key which is very specific and could lead to system hack
      { expiresIn: '1h' }// token will be expired in 1hr
    );
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }
  res.status(201).json({user: createdUser.toObject({ getters: true }),token: token}); // returns the object of created user and token
};// getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically

// this fetch the Prescriptions for the particular user

const addallergy =async  (req, res, next) => {
  const errors = validationResult(req);// this will validate the checks we put on user router file for the entries not to be empty.
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }
  const { from, reaction, creator } = req.body;


  const createdAllergy =new Allergy ({ // create a template for the database to store
    from, 
    reaction,
    creator
  });
  let patientId;

  try {
    patientId = await User.findOne({ email:creator  }) // find a user in database
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
    const sess = await mongoose.startSession();// start a session
     sess.startTransaction()// to transport data to database with condition the things inside 
                            //start transaction and commit transaction either all tasks will be executed or none will.
    await createdAllergy.save();// save the data in database by this line
    patientId.allergy.push(createdAllergy); // push in the array in user entry in database
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
};// getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically

// this fetch the Prescriptions for the particular user

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
    docId = await Doctor.findOne({ email:doctor }) // find the data in database
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
     sess.startTransaction()// to transport data to database with condition the things inside 
                          //start transaction and commit transaction either all tasks will be executed or none will.
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


const Appointment =async  (req, res, next) => {
  const { date, name, patEmail, docEmail } = req.body;
  


var patName = name;


var transporter = nodemailer.createTransport({ // it will provide the mail id password from the the site has to send mails whenever required.
    service: 'gmail',
    auth: {
      user: 'meditech.atyourhelp@gmail.com',
      pass: 'HelloWorld'
    }
  });
  
  var mailOptions = { // this will set the content of the mail which the nodemailer will send.
    from: 'meditech.atyourhelp@gmail.com',
    to: docEmail,
    subject: 'Book an appointment',
    html: `<p>Hello Doctor,</p>
            <p>The patient ${patName} (${patEmail}) wants to book an appointment with you for ${date}.</p>
            <p>Regards MediTech</p>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){ // it will trigger and a mail will be sent to the id provided by user 
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.json({message: 'Mail Sent!'});
};


const login =async  (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email }) // find the entry in database
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
  isValidPassword= await bcrypt.compare(password,existingUser.password) // will conpare the password you entered and which is saved hashed in database.
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
      { userId: existingUser.id, email: existingUser.email }, // it will create a token using ur user ID and email.
      'supersecret_dont_share',// this is the key which is very specific and could lead to system hack
      { expiresIn: '1h' } // token will be expired in 1hr
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
  token:token});// getters: true will send response object ID as 'id' instead of '_id' which mongoDB created automatically

  // this fetch the Prescriptions for the particular user
};

// and finally export all files.
exports.addDoctors=addDoctors;
exports.addallergy=addallergy;
exports.signup = signup;
exports.login = login;
exports.Appointment=Appointment;