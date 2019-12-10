var express = require('express');
var router = express.Router();
var sensor = require('../controleur/sensor.controleur');

// Routes requetes CRUD
/*Get all sensors*/
router.get('/', sensor.findAll);

/* Get sensor by id*/
router.get('/:id', sensor.find_sensor);

/*Post 1 sensor*/
router.post('/', sensor.post);

/*Delete 1 sensor by id*/
router.delete('/:id', sensor.delete);

/*Update 1 sensor by id*/
router.put('/:id', sensor.update);


module.exports = router;