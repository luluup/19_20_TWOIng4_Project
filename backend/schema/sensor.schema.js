const mongoose = require('mongoose');
const sensorSchema = new mongoose.Schema({

    creationDate: {
        type: Date,
        required: true,
    },

    location: {
        type: String,
        required: true,

    },

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

}, { collection: 'Sensor' });
module.exports = mongoose.model('Sensor', sensorSchema);

