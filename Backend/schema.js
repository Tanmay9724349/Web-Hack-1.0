const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    Name:{type:String,require},
    Email:{type:String,require},
    Phonenumber:{type:Number,require},
    Age:{type:Number,require},
    Gender:{type:String,require},
    IncidentDate:{type:String,require},
    IncidentLocation:{type:String,require},
    IncidentDescription:{type:String,require},
    Harassment:{type:String,require},
    Other:{type:String,require},
    Acknolegment:{type:String,require}
})
module.exports = mongoose.model('report',schema);