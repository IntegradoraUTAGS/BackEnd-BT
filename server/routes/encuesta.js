const express = require('express');
const _ = require('underscore');
const Encuesta = require('../models/encuesta');
const app = express();

app.get('/obtener', (req, res) => {
    Encuesta.find()
        .exec((err, encuesta) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: encuesta.length,
                encuesta
            })
        });
});

app.post('/registrar', (req, res) => {
    let body = req.body;

    console.log(body);


    let encuesta = new Encuesta({
        email: body.email,
        nomEmpresa: body.nomEmpresa,
        organizacion: body.organizacion,
        tamanoOrg: body.tamanoOrg,
        ubicacionEmpleo: body.ubicacionEmpleo,
        dirigidoA: body.dirigidoA,
        dirigidoPersona: body.dirigidoPersona,
        sueldo: body.sueldo,
        conocimiento: body.conocimiento,
        creatividad: body.creatividad,
        nivelAcademico: body.nivelAcademico,
        adaptarse: body.adaptarse,
        satisfaccion: body.satisfaccion,
        comentarios: body.comentarios

    });
    encuesta.save((err, encuestaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            encuestaDB
        });
    });
});

app.put('/actualizar', (req, res) => {
    let id = req.body.id;
    let body = _.pick(req.body, [
        'email',
        'nomEmpresa',
        'organizacion',
        'tamanoOrg',
        'ubicacionEmpleo',
        'dirigidoA',
        'dirigidoPersona',
        'sueldo',
        'conocimiento',
        'creatividad',
        'nivelAcademico',
        'adaptarse',
        'satisfaccion',
        'comentarios'

    ]);

    encuesta.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, encuestaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };
        return res.status(200).json({
            ok: true,
            encuestaDB
        });
    });
});




app.delete('/eliminar', (req, res) => {
    let id = req.body.id;
    encuesta.findByIdAndUpdate(id, { new: true, runValidators: true, context: 'query' }, (err, encuestaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            encuestaDB
        });
    });
});

module.exports = app