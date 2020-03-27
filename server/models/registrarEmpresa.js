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
    rfc: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el rfc de la empresa']
    },
    password: {
        type: String,
        required: [true, 'Por favor ingresa la contraseña']

    },
    ubicacion: {
        type: String,
        required: [true, 'Por favor ingresa la ubicación']
    },
    giro: {
        type: String,
        required: [true, 'Por favor ingresa el giro de la empresa']
    },
    tamano: {
        type: String,
        required: [true, 'Por favor ingresa el tamaño de la empresa']
    }


});

empresaSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Empresa', empresaSchema);