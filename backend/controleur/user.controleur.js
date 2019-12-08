const User = require('../schema/user.schema.js');

//tous les users
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            console.log(users);
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users.'
            });
        });
};
