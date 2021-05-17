const mongoose=require('mongoose');

const Schema = mongoose.Schema;


const prescriptionsSchema = new Schema({
   name: { type: String , required: true},
    age: { type: String , required: true},
    date:{ type: String , required: true},
    meds: [{ type: String , required: true}],
    doctor:{ type: mongoose.Types.ObjectId , required: true, ref: 'Prescription'},
    patient:{ type: String , required: true} 
});

module.exports = mongoose.model('Place', prescriptionsSchema);