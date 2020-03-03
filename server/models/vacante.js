const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let vacanteSchema = new Schema({
    perfil: {
        type: String,
        required: [true, 'Por favor ingresa el nombre del perfil']
    },
    requiere: {
        type: String,
        required: [true, 'Ingrese que es lo que requiere']
    },
    horario: {
        type: String,
        required: [true, 'Por favor ingresa la hora del trabajo']
    },
    carrera: {
        type: String,

    },
    prestaciones: {
        type: String
    },
    dirigidoA: {
        type: String
    },
    dirigidoQuien: {
        type: String
    },
    sueldo: {
        type: Number,
        required: [true, 'Por favor ingresa el sueldo del usuario']
    },
    ubicacion: {
        type: String,

    },
    idioma: {
        type: String,

    },
    estado: {
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model('Vacante', vacanteSchema);