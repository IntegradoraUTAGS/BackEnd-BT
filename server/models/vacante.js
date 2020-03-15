cconst mongoose = require('mongoose');
let Schema = mongoose.Schema;


let vacanteSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Por favor ingresa el nombre del email']
    },
    nomEmpresa: {
        type: String,
        required: [true, 'Ingrese nombre de empresa']
    },
    organizacion: { //opcion
        type: String,
        required: [true, 'Por favor ingresa la hora del trabajo']
    },
    tamanoOrg: { //opcion
        type: String,

    },
    ubicacionEmpleo: {
        type: String
    },
    carrera: {
        type: String
    },
    nombreAlum: {
        type: String
    },
    perfilContrato: {
        type: String,
        required: [true, 'Por favor ingresa el sueldo del usuario']
    },
    sueldo: { //opcion
        type: Number,

    },
    conocimientos: { //OPCION
        type: String,

    },
    creatividad: { //opcion
        type: String,

    },
    nivelAcademico: { //OPCION
        type: String,

    },
    adaptarse: { //OPCION
        type: String,

    },
    satisfaccion: { //opcion
        type: String,

    },
    comentarios: { //opcion
        type: String,

    },
    fecchaLimite: { //fecha
        type: Date,

    },


    estado: {
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model('Vacante', vacanteSchema);