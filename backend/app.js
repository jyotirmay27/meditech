const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const HttpError = require('./HttpError');


const usersRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const placesRoutes=require('./routes/placesRoutes');


const app = express();

// bodyparser is used to parse the body to make connection smoother
app.use(bodyParser.json());

// headers ar set to make transfer of JSON data from frontend to backend even in different ports like 3000 and 5000
app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PATCH');
    next();
});

// will redirect all users logged in with doctor's portal
app.use('/api/doctors',doctorRoutes);

// will redirect all users logged in with user's portal
app.use('/api/users', usersRoutes);

// will redirect all doctors and users to diiferent diiferent places in website accordingly
app.use('/api/places', placesRoutes);

// error message is thrown if the route user want to access is not present
app.use((req,res,next)=>{ 
    const error = new HttpError('Could not find this shit' , 404);
    throw error;

}
);

//sends the error if present
app.use((error,req,res,next)=> {
    if(res.headerSent)
    {
        return next(error);
    }

    res.status(error.code || 500)
    res.json({message: error.message || 'unknown error'})

});

// it will connect the node server with mongoDB database
mongoose
.connect('mongodb+srv://jyotirmay:jyotirmay27@cluster0.8su5b.mongodb.net/meditech?retryWrites=true&w=majority')
.then(()=> {
    app.listen(5000);
})
.catch(err => {
console.log(err);
});

