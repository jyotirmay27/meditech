const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;


const doctorSchema = new Schema({
    name: { type: String , required: true},
    email: { type: String , required: true , unique: true},
    password:{ type: String , required: true },
   // image:{ type: String , required: true},
    prescriptions: [{ type: mongoose.Types.ObjectId , required: true, ref: 'Prescription'}],
    patients: [{ type: String }]
    
});

doctorSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Doctor', doctorSchema);