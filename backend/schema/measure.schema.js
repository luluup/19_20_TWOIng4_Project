const mongoose = require('mongoose');
const measureSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true,
    },

    creationDate: {
        type: Date,
        required: true,

    },

    sensorID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sensor'
    },

    value: {
        type: Number,
        required: true,
    }
},
    { collection: 'Measure' });


module.exports = mongoose.model('Measure', measureSchema);