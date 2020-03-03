const express = require('express');
const _ = require('underscore');
const Vacante = require('../models/vacante');
const app = express();

app.get('/vacante', (req, res) => {
    Vacante.find()
        .exec((err, vacante) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: vacante.length,
                vacante
            })
        });
});

app.post('/vacante', (req, res) => {
    let body = req.body;

    let vacante = new Vacante({
        perfil: body.perfil,
        requiere: body.requiere,
        horario: body.horario,
        carrera: body.carrera,
        prestaciones: body.prestaciones,
        dirigidoA: body.dirigidoA,
        dirigidoQuien: body.dirigidoQuien,
        sueldo: body.sueldo,
        ubicacion: body.ubicacion,
        idioma: body.idioma

    });
    vacante.save((err, vcDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            vcDB
        });
    });
});

app.put('/vacante', (req, res) => {
    let id = req.body.id;
    let body = _.pick(req.body, [
        'perfil',
        'requiere',
        'horario',
        'carrera',
        'prestaciones',
        'dirigido',
        'sueldo',
        'ubicacion',
        'idioma',
        'estado'
    ]);

    Prestamo.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, presDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };
        return res.status(200).json({
            ok: true,
            presDB
        });
    });
});




app.delete('/vacante', (req, res) => {
    let id = req.body.id;
    Vacante.findByIdAndUpdate(id, { new: true, runValidators: true, context: 'query' }, (err, vcDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            vcDB
        });
    });
});

module.exports = app