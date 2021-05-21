const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: { type: String , required: true},
    email: { type: String , required: true , unique: true}, //the database will contain a row for '' in it
    password:{ type: String , required: true , minlength: 6},
    //image:{ type: String , required: true},
    doctors: [{type: String}],
    prescriptions: [{ type: mongoose.Types.ObjectId , required: true, ref: 'Prescription'}],
    // this array is designed to stord object Id created by mongodb
    medication:[{ type: mongoose.Types.ObjectId , required: true, ref: 'Medication'}],
    vitals:[{ type: mongoose.Types.ObjectId , required: true, ref: 'Vital'}],
    allergy:[{ type: mongoose.Types.ObjectId , required: true, ref: 'Allergy'}]
    
    
});

userSchema.plugin(uniqueValidator); // just to ensure the user is unique
module.exports = mongoose.model('User', userSchema);