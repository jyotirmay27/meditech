const mongoose=require('mongoose');

const Schema = mongoose.Schema;


const medicationsSchema = new Schema({

    meds: [{ type: String , required: true}],//the database will contain a row for '' in it
    docID:{type: String , required: true },//the database will contain a row for '' in it
    patID:{ type: String , required: true},//the database will contain a row for '' in it
    date: {type: String , required: true }//the database will contain a row for '' in it
});

module.exports = mongoose.model('Medication', medicationsSchema);