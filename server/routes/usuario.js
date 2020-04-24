const express = require('express');
const app = express();
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.post('/login', (req, res) => {

    let body = req.body;
    Usuario.findOne({ correo: body.correo }, (err, UsrDB) => {
        if (err) {

            return res.status(400).json({
                ok: true,
                err

            });

        }

        if (!UsrDB) {

            return res.status(500).json({
                ok: false,
                err: {

                    message: 'El usuario y/o contraseña son incorrectos'
                }
            });
        }
        //
        if (!bcrypt.compareSync(body.contrasena, UsrDB.contrasena)) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El usuario y/o contraseña* son incorrectos'
                }
            });
        }

        // if (UsrDB.role != "ADMIN") {
        //     return res.status(500).json({
        //         ok: false,
        //         err: {
        //             message: 'El usuario y/o contraseña son incorrectos'
        //         }
        //     });
        // }
        let token = jwt.sign({
                usuario: UsrDB
            },
            process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
        return res.status(200).json({
            ok: true,
            UsrDB,
            token: token
        });


    });

});
app.post('/agregar', (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        usuario: body.usuario,
        correo: body.correo,
        contrasena: bcrypt.hashSync(body.contrasena, 10),
        role: body.role,
        estado: body.estado

    });
    usuario.save((err, UsrDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });

        }
        return res.status(200).json({
            ok: true,
            UsrDB
        });
    });

});

app.get('/usuario', (req, res) => {
    Usuario.find({ estado: true })
        .exec((err, UsrDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: UsrDB.length,
                UsrDB
            });
        });
});
app.delete('/usuario', (req, res) => {
    let nombre = req.body.nombre;

    Usuario.findOneAndUpdate({ nombre: nombre }, { estado: false }, { new: true, runValidators: true, context: 'query' }, (err, resp) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };
        return res.status(200).json({
            ok: true,
            resp
        });
    });
});
module.exports = app;