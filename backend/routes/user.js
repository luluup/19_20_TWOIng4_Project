var express = require('express');
var router = express.Router();
var user = require('../controleur/user.controleur');

/* CRUD */

/* GET tous les users*/
router.get('/', user.findAll);

module.exports = router;