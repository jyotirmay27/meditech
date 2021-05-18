const mongoose=require('mongoose');

const Schema = mongoose.Schema;


const medicationsSchema = new Schema({

    meds: [{ type: String , required: true}],
    docID:{type: String , required: true },
    patID:{ type: String , required: true},
    date: {type: String , required: true }
});

module.exports = mongoose.model('Medication', medicationsSchema);