const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const HttpError = require('./HttpError');


const usersRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const placesRoutes=require('./routes/placesRoutes');


const app = express();

app.use(bodyParser.json());

app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PATCH');
    next();
});


app.use('/api/doctors',doctorRoutes);

app.use('/api/users', usersRoutes);

app.use('/api/places', placesRoutes);

app.use((req,res,next)=>{ 
    const error = new HttpError('Could not find this shit' , 404);
    throw error;

}
);

app.use((error,req,res,next)=> {
    if(res.headerSent)
    {
        return next(error);
    }

    res.status(error.code || 500)
    res.json({message: error.message || 'unknown error'})

});

mongoose
.connect('mongodb+srv://jyotirmay:jyotirmay27@cluster0.8su5b.mongodb.net/meditech?retryWrites=true&w=majority')
.then(()=> {
    app.listen(5000);
})
.catch(err => {
console.log(err);
});

