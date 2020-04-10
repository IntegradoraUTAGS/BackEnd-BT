const express = require('express');
const _ = require('underscore');
const Satisfaccion = require('../models/satisfaccion');
const app = express();

app.get('/obtenerSatisfaccion', (req, res) => {
    Satisfaccion.find()
        .exec((err, satisfaccion) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: satisfaccion.length,
                satisfaccion
            })
        });
});

app.post('/registrarSatisfaccion', (req, res) => {
    let body = req.body;

    console.log(body);


    let satisfaccion = new Satisfaccion({
        email: body.email,
        nomEmpresa: body.nomEmpresa,
        organizacion: body.organizacion,
        tamanoOrg: body.tamanoOrg,
        ubicacionEmpleo: body.ubicacionEmpleo,
        carrera: body.carrera,
        nombreAlum: body.nombreAlum,
        perfilContrato: body.perfilContrato,
        sueldo: body.sueldo,
        conocimientos: body.conocimientos,
        desempenio: body.desempenio,
        creatividad: body.creatividad,
        capacidad: body.capacidad,
        nivelAcademico: body.nivelAcademico,
        adaptarse: body.adaptarse,
        requerimientos: body.requerimientos,
        trabajoDesemp: body.trabajoDesemp,
        comentarios: body.comentarios

    });
    satisfaccion.save((err, satisfaccionDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            satisfaccionDB
        });
    });
});

app.put('/actualizarSatisfaccion', (req, res) => {
    let id = req.body.id;
    let body = _.pick(req.body, [
        'email',
        'nomEmpresa',
        'organizacion',
        'tamanoOrg',
        'ubicacionEmpleo',
        'carrera',
        'nombreAlum',
        'perfilContrato',
        'sueldo',
        'conocimientos',
        'desempenio',
        'creatividad',
        'capacidad',
        'nivelAcademico',
        'adaptarse',
        'requerimientos',
        'trabajoDesemp',
        'comentarios'

    ]);

    satisfaccion.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, satisfaccionDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };
        return res.status(200).json({
            ok: true,
            satisfaccionDB
        });
    });
});




app.delete('/eliminarSatisfaccion', (req, res) => {
    let id = req.body.id;
    satisfaccion.findByIdAndUpdate(id, { new: true, runValidators: true, context: 'query' }, (err, satisfaccionDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            satisfaccionDB
        });
    });
});

module.exports = app