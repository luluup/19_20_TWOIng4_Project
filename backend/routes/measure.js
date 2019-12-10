var express = require('express');
var router = express.Router();
var measure = require('../controleur/measure.controleur');

// Routes requetes CRUD
/*Get all measure*/
router.get('/', measure.findAll);

/* Get measure by id*/
router.get('/:id', measure.find_measure);

/*Post 1 measure*/
router.post('/', measure.post);

/*Delete 1 measure by id*/
router.delete('/:id', measure.delete);
var express = require('express');
var router = express.Router();
var measure = require('../controleur/measure.controleur');

// Routes requetes CRUD
/*Get all measure*/
router.get('/', measure.findAll);

/* Get measure by id*/
router.get('/:id', measure.find_measure);

/*Post 1 measure*/
router.post('/', measure.post);

/*Delete 1 measure by id*/
router.delete('/:id', measure.delete);

/*Update 1 measure by id*/
router.put('/:id', measure.update);


module.exports = router;