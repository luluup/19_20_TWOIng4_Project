const Sensor = require('../schema/sensor.schema.js');
const mongoose = require('mongoose');
const querystring = require('querystring');

// REQUETES CRUD USER

/*GET tous les sensors*/
exports.findAll = (req, res) => {
    console.log("Find Sensors");
    Sensor.find()
        .then(sensors => {
            console.log(sensors);
            res.send(sensors);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
};

/*GET 1 sensor by ID*/
exports.find_sensor = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id)
    Sensor.findById(id)
        .then(sensor => {

            if (!sensor) {
                res.status(404).send({ success: false, msg: 'Sensor non trouve' });
            } else {
                res.send(sensor);
            }
        })
};


/*AJOUT sensor*/
exports.post = (req, res) => {
    console.log("Test post");

    if (!req.body.creationDate || !req.body.location || !req.body.userID) {
        console.log("Ajout impossible : champ vide");
        res.send('Ajout impossible : champ vide');
    }

    else {
        // var userID = new mongoose.Types.ObjectId();

        const sensor = new Sensor({
            creationDate: req.body.creationDate,
            location: req.body.location,
            userID: req.body.userID


        });
        sensor.save(function (err) {
            if (err) {
                return (err);
            }
            res.send('Sensor cree avec succes');
            console.log("Sensor cree");
        });
    }
};

// SUPPRIMER USER PAR ID
exports.delete = (req, res) => {
    console.log("Delete sensor");

    Sensor.findByIdAndRemove(req.params.id)
        .then(sensor => {
            res.send('Sensor supprime');
            console.log("Sensor supprime");
        })
};

// UPDATE USER PAR ID
exports.update = (req, res) => {
    console.log("Update Sensor");


    Sensor.findOneAndUpdate({ _id: req.params.id }, { creationDate: req.body.creationDate, location: req.body.location })
        .then(sensor => {
            res.send('Snesor update :' + req.params.id);
            console.log("Sensor update");
        })
};
