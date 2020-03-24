const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let vacanteSchema = new Schema({
    perfil: {
        type: String,
        required: [true, 'Por favor ingresa el nombre del email']
    },
    requiere: {
        type: String,
        required: [true, 'Ingrese nombre de empresa']
    },
    horario: { //opcion
        type: String,
        required: [true, 'Por favor ingresa la hora del trabajo']
    },
    prestaciones: { //opcion
        type: String,

    },
    dirigidoA: {
        type: String
    },
    dirigidoPersona: {
        type: String
    },
    sueldo: {
        type: String
    },
    idioma: {
        type: String,
        required: [true, 'Por favor ingresa el sueldo del usuario']
    },
    fechaLimite: { //opcion
        type: String,
    },

    estado: {
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model('Vacante', vacanteSchema);