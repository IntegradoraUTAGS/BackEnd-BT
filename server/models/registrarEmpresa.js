const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let empresaSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el nombre de la empresa']
    },
    direccion: {
        type: String,
        required: [true, 'Por favor ingresa la dirección de la empresa']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el correo electronico']
    },
    telefono: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el numero de telefono']
    },
    rfc: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el RFC de la empresa']
    },
    password: {
        type: String,
        required: [true, 'Por favor ingresa la contraseña']

    },
    ubicacion: {
        type: String,
        required: [true, 'Por favor ingresa  la ubicación']
    },
    giro: {
        type: String,
        required: [true, 'Por favor ingresa  el giro']
    },
    tamano: {
        type: String,
        required: [true, 'Por favor ingresa  el tamaño']
    },


});

empresaSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Empresa', empresaSchema);