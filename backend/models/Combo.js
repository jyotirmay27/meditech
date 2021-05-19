const mongoose=require('mongoose');

const Schema = mongoose.Schema;

  
const ComboSchema = new Schema({
   patient: { type: String , required: true},
   doctor: { type: String , required: true}

});

module.exports = mongoose.model('Combo', ComboSchema);