const mongoose=require('mongoose');

const Schema = mongoose.Schema;


const vitalsSchema = new Schema({
    sugar: { type: String , required: true},
    BP: { type: String , required: true },
    pulse:{ type: String , required: true },
    date:{ type: String , required: true },
    creator:{ type: mongoose.Types.ObjectId , required: true, ref: 'User'}

    
    
});


module.exports = mongoose.model('Vital', vitalsSchema);