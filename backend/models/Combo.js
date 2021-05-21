const mongoose=require('mongoose');

const Schema = mongoose.Schema;

  
const ComboSchema = new Schema({
   patient: { type: String , required: true},//the database will contain a row for 'patient' in it
   doctor: { type: String , required: true}//the database will contain a row for 'doctor' in it

});

module.exports = mongoose.model('Combo', ComboSchema);//'Combo' written here will form a database of 'combos' in mongo db