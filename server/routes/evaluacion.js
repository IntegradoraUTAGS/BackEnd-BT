const express = require('express');
const _ = require('underscore');
const Evaluacion = require('../models/evaluacion');
const app = express();

app.get('/obtener', (req, res) => {
    Evaluacion.find()
        .exec((err, evaluacion) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: evaluacion.length,
                evaluacion
            })
        });
});

app.post('/registrar', (req, res) => {
    let body = req.body;

    console.log(body);


    let evaluacion = new Evaluacion({
        perfil: body.perfil,
        cv: body.cv,
        aceptado: body.aceptado


    });
    evaluacion.save((err, evaluacionDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            evaluacionDB
        });
    });
});
app.delete('/eliminar', (req, res) => {
    let id = req.body.id;
    Evaluacion.findByIdAndUpdate(id, { new: true, runValidators: true, context: 'query' }, (err, evaluacionDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            evaluacionDB
        });
    });
});

module.exports = app