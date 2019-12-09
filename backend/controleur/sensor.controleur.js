const Sensor = require('../schema/sensor.schema.js');

exports.findAll = (req, res) => {
    console.log("Find sensor");
    Sensor.find()
        .then(sensors => {
            console.log(sensors);
            res.send(sensors);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users.'
            });
        });
};
