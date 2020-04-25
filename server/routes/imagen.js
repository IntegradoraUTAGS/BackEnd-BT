const express = require('express');
const { verificatoken } = require('../middlewares/autenticacion');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/imagen/:ruta/:img', (req, res) => {
    let ruta = req.params.ruta;
    let img = req.params.img;
    let rutaImagen = path.resolve(__dirname, `../../uploads/${ruta}/${img}`);
    let noimage = path.resolve(__dirname, `../assets/noimage.jpg`);

    if (fs.existsSync(rutaImagen)) {
        return res.sendFile(rutaImagen);
    } else {
        return res.sendFile(noimage);
    }
});

module.exports = app;