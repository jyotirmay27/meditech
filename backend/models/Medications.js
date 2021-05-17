const mongoose=require('mongoose');

const Schema = mongoose.Schema;


const medicationsSchema = new Schema({

    meds: [{ type: String , required: true}],
    doctor:{ type: mongoose.Types.ObjectId , required: true, ref: 'Prescription'},
    patient:{ type: String , required: true},
    prescriptions: [{ type: String , required: true}]
});

module.exports = mongoose.model('Medication', medicationsSchema);