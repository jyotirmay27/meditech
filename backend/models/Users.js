const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: { type: String , required: true},
    email: { type: String , required: true , unique: true},
    password:{ type: String , required: true , minlength: 6},
    //image:{ type: String , required: true},
    doctors: [{type: String}],
    prescriptions: [{ type: mongoose.Types.ObjectId , required: true, ref: 'Prescription'}],
    medication:[{ type: mongoose.Types.ObjectId , required: true, ref: 'Medication'}],
    vitals:[{ type: mongoose.Types.ObjectId , required: true, ref: 'Vital'}],
    allergy:[{ type: mongoose.Types.ObjectId , required: true, ref: 'Allergy'}]
    
    
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);