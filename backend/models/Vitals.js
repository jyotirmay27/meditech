const mongoose=require('mongoose');

const Schema = mongoose.Schema;


const vitalsSchema = new Schema({
    sugar: { type: String , required: true},//the database will contain a row for '' in it and same for all
    BPS: { type: String , required: true },
    BPD: { type: String , required: true },
    pulse:{ type: String , required: true },
    temperature: { type: String , required: true },
    date:{ type: String , required: true },
    weight: { type: String , required: true },
    height: { type: String , required: true },
    creator:{ type: String , required: true }

    
    
});


module.exports = mongoose.model('Vital', vitalsSchema);