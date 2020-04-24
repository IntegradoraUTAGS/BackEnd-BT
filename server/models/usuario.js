const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');

let schema = mongoose.Schema;



let usuarioSchema = new schema({
    nombre: {
        type: String,
        require: [true, 'ingresa tu nombre']

    },
    usuario: {
        type: String,
        require: [true, 'ingresar tu usuario']
    },
    correo: {
        type: String,
        unique: true,
        require: [true, 'Ingresar tu correo.']
    },
    contrasena: {
        type: String,
        require: [true, 'Ingresar la constraseña']
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    }

});
usuarioSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Usuario', usuarioSchema);