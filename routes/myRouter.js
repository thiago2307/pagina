const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/myController');

router.get('/eventos', eventosController.getEventos);

router.get('/eventos/:id', eventosController.getEventoById);

router.post('/eventos', eventosController.createEvento);

router.post('/eventos/:id/editar', eventosController.updateEvento);

router.post('/eventos/:id/eliminar', eventosController.deleteEvento);


module.exports = router;