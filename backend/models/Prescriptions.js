const mongoose=require('mongoose');

const Schema = mongoose.Schema;

  
const prescriptionsSchema = new Schema({
   patname: { type: String , required: true},//the database will contain a row for '' in it and same for all below
   hospitalname: { type: String , required: true},
    age: { type: String , required: true},
    date:{ type: String , required: true},
    note:{ type: String , required: true},
    meds: [{ type: String , required: true}],
    doze: [{ type: String , required: true}],
    docID:{ type: String , required: true},
    patID:{ type: String , required: true} 
});

module.exports = mongoose.model('Prescription', prescriptionsSchema);