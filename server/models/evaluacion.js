const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let evaluacionSchema = new Schema({
    perfil: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el perfil']
    },
    cv: {
        type: String,
        required: [true, 'Por favor ingresa el cv']
    },
    aceptado: {
        type: String,
        required: [true, 'Por favor ingresa si esta aceptado o no']
    },

    estado: {
        type: Boolean,
        default: true
    }
});

evaluacionSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Evaluacion', evaluacionSchema);