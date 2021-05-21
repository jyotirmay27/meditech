const mongoose=require('mongoose');

const Schema = mongoose.Schema; //syntax

  
const AllergySchema = new Schema({
   from: { type: String , required: true}, //the database will contain a row for 'from' in it
   reaction: { type: String , required: true},//the database will contain a row for 'reaction' in it
    creator: { type: String , required: true}//the database will contain a row for 'creator' in it

});

module.exports = mongoose.model('Allergy', AllergySchema); //'Allergy' written here will form a database of 'allergies' in mongo db