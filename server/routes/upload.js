const express = require('express');

const fileupload = require('express-fileupload');
const uniqid = require('uniqid');
const path = require('path');
const fs = require('fs');
const app = express();

const Evaluacion = require('../models/evaluacion');


app.use(fileupload());

app.put('/upload/:ruta/:id', (req, res) => {
    let id = req.params.id;
    let ruta = req.params.ruta;
    let archivo = req.files.archivo;
    let nombre = uniqid() + path.extname(archivo.name);

    if (!req.files) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No se ha seleccionado ningun archivo'
            }
        });
    }

    let validExtensions = ['file/docx', 'file/pdf'];
    if (!validExtensions.includes(archivo.mimetype)) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Solo las extensiones <docx, pdf> son validas'
            }
        });
    }

    archivo.mv(`uploads/${ruta}/${nombre}`, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    });

    switch (ruta) {
        case 'libro':
            imgEvaluacion(id, res, nombre);
            break;

        default:
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Ruta no valida'
                }
            });
            break;
    }

});

function imgEvaluacion(id, res, nombreImagen) {
    Usuario.findById(id, (err, ev) => {
        if (err) {
            borrarArchivo(nombreImagen, 'evaluacion');
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!ev) {
            borrarArchivo(nombreImagen, 'evaluacion');
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no existe'
                }
            });
        }

        ev.img = nombreImagen;

        ev.save((err, usrDB) => {
            if (err) {
                borrarArchivo(nombreImagen, 'evaluacion');
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                usrDB
            });
        });
    });
}



module.exports = app;