const User = require('../schema/user.schema.js');
const mongoose = require('mongoose');
const querystring = require('querystring');

// REQUETES CRUD USER

/*GET tous les users*/
exports.findAll = (req, res) => {
    console.log("Find User");
    User.find()
        .then(users => {
            console.log(users);
            res.send(users);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
};

/*GET 1 user by ID*/
exports.find_user = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id)
    User.findById(id)
        .then(user => {

            if (!user) {
                res.status(404).send({ success: false, msg: 'User non trouve' });
            } else {
                res.send(user);
            }
        })
};


/*AJOUT user*/
exports.post = (req, res) => {
    console.log("Test post");

    if (!req.body.location || !req.body.personsInHouse || !req.body.houseSize) {
        console.log("Ajout impossible : champ vide");
        res.send('Ajout impossible : champ vide');
    }

    else {
        const user = new User({
            location: req.body.location,
            personsInHouse: req.body.personsInHouse,
            houseSize: req.body.houseSize
        });

        user.save(function (err) {
            if (err) {
                return (err);
            }
            res.send('User cree avec succes');
            console.log("User cree");
        });
    }
};

// SUPPRIMER USER PAR ID
exports.delete = (req, res) => {
    console.log("Delete User");

    User.findByIdAndRemove(req.params.id)
        .then(user => {
            res.send('User supprime');
            console.log("User supprime");
        })
};

// UPDATE USER PAR ID
exports.update = (req, res) => {
    console.log("Update User");

    User.findOneAndUpdate({ _id: req.params.id }, { location: req.body.location, personsInHouse: req.body.personsInHouse, houseSize: req.body.houseSize })
        .then(user => {
            res.send('User update :' + req.params.id);
            console.log("User update");
        })
};