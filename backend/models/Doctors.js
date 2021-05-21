const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;


const doctorSchema = new Schema({
    name: { type: String , required: true},//the database will contain a row for 'name' in it
    email: { type: String , required: true , unique: true},//the database will contain a row for 'email' in it
    password:{ type: String , required: true },//the database will contain a row for 'password' in it
   // image:{ type: String , required: true},
    prescriptions: [{ type: mongoose.Types.ObjectId , required: true, ref: 'Prescription'}], 
    // this array is designed to stord object Id created by mongodb
    patients: [{ type: String }]
    
});

doctorSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Doctor', doctorSchema);//'Doctor' written here will form a database of 'doctors' in mongo db