var express = require('express');
var router = express.Router();
var user = require('../controleur/user.controleur');

// Routes requetes CRUD
router.get('/', user.findAll);
router.get('/:id', user.find_user);
router.post('/', user.post);
router.delete('/:id', user.delete);
router.put('/:id', user.update);


module.exports = router;
