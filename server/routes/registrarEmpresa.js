const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
const Empresa = require('../models/registrarEmpresa');

app.get('/empresa', (req, res) => {
    Empresa.find({ disponible: true })
        .exec((err, empresas) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: empresas.length,
                empresas
            })
        });
});

app.post('/empresa/registrar', (req, res) => {
    let body = req.body;

    let empresa = new Empresa({
        nombre: body.nombre,
        direccion: body.direccion,
        email: body.email,
        telefono: body.telefono,
        rfc: body.rfc,
        password: bcrypt.hashSync(body.password, 10),
        ubicacion: body.ubicacion,
        giro: bofy.giro,
        tamano: body.tamano

    });

    empresa.save((err, empDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            empDB
        });

    });

});


app.put('/empresa/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['direccion', 'ubicacion', 'giro', 'tamano']);

    Empresa.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, empDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            empDB
        });
    });
});

app.delete('/empresa/:id', (req, res) => {
    let id = req.params.id;
    Empresa.deleteOne({ _id: id }, (err, resp) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (resp.deletedCount === 0) {
            return res.status(400).json({
                ok: false,
                err: {
                    id,
                    msg: 'Empresa no encontrada'
                }
            });
        }
        return res.status(200).json({
            ok: true,
            resp
        });
    });
});
module.exports = app;