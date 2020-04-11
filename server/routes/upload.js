const express = require('express');
const Evaluacion = require('../models/evaluacion');
const multipart = require('connect-multiparty');
const app = express();

const multiPartMiddleware = multipart({
    uploadDir: '../models/evaluacion'

});


app.post('/subir', multiPartMiddleware, (req, res) => {
    let body = req.body;
    let evaluacion = new Evaluacion({
        cv: body.cv,
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
            message: "Fichero subido correctamente",
            evaluacionDB
        });
    });

});
module.exports = app;