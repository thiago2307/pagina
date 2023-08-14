const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventoSchema = new Schema({
    asunto: {
        type: String, 
        require :true
    },
    cadena: {
        type: String,
        require :true
    },
    fecha_hora: {
        type: Date,
        require :true
    }
});

const Evento = mongoose.model('Evento', EventoSchema);

module.exports = Evento;