const express = require('express');
const {postReservaRecorrente, deleteReservaRecorrente, getReservaRecorrente, getReservaRecorrenteById} = require('../controllers/reserva.recorrente.controller.js');

const router = express.Router();

router.get('/', getReservaRecorrente);

// router.get('/:id', getReservaRecorrenteById);

// router.post('/', postReservaRecorrente);

// router.delete('/:id', deleteReservaRecorrente);

module.exports = router;