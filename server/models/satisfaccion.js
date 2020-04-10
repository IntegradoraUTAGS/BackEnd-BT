const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let satisfaccionSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Por favor ingresa el nombre del email']
    },
    nomEmpresa: {
        type: String,
        required: [true, 'Ingrese nombre de empresa']
    },
    organizacion: {
        type: String,
        required: [true, 'Por favor ingresa el tipo de organizacion']
    },
    tamanoOrg: {
        type: String,
        required: [true, 'Por favor ingresa el tamaño de la organizacion']

    },
    ubicacionEmpleo: {
        type: String,
        required: [true, 'Por favor ingresa la ubicacion del empleo']
    },
    carrera: {
        type: String,
        required: [true, 'Por favor ingresa la carrera']
    },
    nombreAlum: {
        type: String,
        required: [true, 'Por favor ingresa el nombre del becario/egresado']
    },
    perfilContrato: {
        type: String,
        required: [true, 'Por favor ingresa el sueldo del usuario']
    },
    sueldo: {
        type: String,
        required: [true, 'Por favor ingresa el sueldo']

    },
    conocimientos: {
        type: String,
        required: [true, 'Por favor ingresa los conocimientos']

    },
    desempenio: {
        type: String,
        required: [true, 'Por favor ingresa el desempeño']
    },
    creatividad: {
        type: String,
        required: [true, 'Por favor ingresa la creatividad']

    },
    capacidad: {
        type: String,
        required: [true, 'Por favor ingresa la capacidad']
    },
    nivelAcademico: {
        type: String,
        required: [true, 'Por favor ingresa el el nivel academico']

    },
    adaptarse: {
        type: String,
        required: [true, 'Por favor ingresa el tiempo en adaptarse']

    },
    requerimientos: {
        type: String,
        required: [true, 'Por favor ingresa los requerimientos']

    },
    trabajoDesemp: {
        type: String,
        required: [true, 'Por favor ingresa el trabajo desempeñado']
    },
    comentarios: {
        type: String,
        required: [true, 'Por favor ingresa algun comentario']

    },
    estado: {
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model('Satisfaccion', satisfaccionSchema);