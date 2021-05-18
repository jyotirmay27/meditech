const mongoose=require('mongoose');

const Schema = mongoose.Schema;

  
const AllergySchema = new Schema({
   from: { type: String , required: true},
   reaction: { type: String , required: true},
    creator: { type: String , required: true},

});

module.exports = mongoose.model('Allergy', AllergySchema);