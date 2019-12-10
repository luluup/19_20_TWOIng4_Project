const Measure = require('../schema/measure.schema.js');
const mongoose = require('mongoose');
const querystring = require('querystring');

// REQUETES CRUD Measure

/*GET tous les measure*/
exports.findAll = (req, res) => {
    console.log("Find Measure");
    Measure.find()
        .then(measures => {
            console.log(measures);
            res.send(measures);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
};

/*GET 1 measure by ID*/
exports.find_measure = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id)
    Measure.findById(id)
        .then(measure => {

            if (!measure) {
                res.status(404).send({ success: false, msg: 'Measure non trouve' });
            } else {
                res.send(measure);
            }
        })
};


/*AJOUT measure*/
exports.post = (req, res) => {
    console.log("Test post");

    if (!req.body.type || !req.body.creationDate || !req.body.value || !req.body.sensorID) {
        console.log("Ajout impossible : champ vide");
        res.send('Ajout impossible : champ vide');
    }

    else {
        //var sensorID = new mongoose.Types.ObjectId();

        const measure = new Measure({
            type: req.body.type,
            creationDate: req.body.creationDate,
            value: req.body.value,
            sensorID: req.body.sensorID


        });
        measure.save(function (err) {
            if (err) {
                return (err);
            }
            res.send('Measure cree avec succes');
            console.log("Measure cree");
        });
    }
};

// SUPPRIMER Measure PAR ID
exports.delete = (req, res) => {
    console.log("Delete Measure");

    Measure.findByIdAndRemove(req.params.id)
        .then(measure => {
            res.send('Measure supprime');
            console.log("Measure supprime");
        })
};

// UPDATE Measure PAR ID
exports.update = (req, res) => {
    console.log("Update Measure");


    Measure.findOneAndUpdate({ _id: req.params.id }, { type: req.body.type, creationDate:req.body.creationDate, value: req.body.value })
        .then(measure => {
            res.send('Measure update :' + req.params.id);
            console.log("Measure update");
        })
};