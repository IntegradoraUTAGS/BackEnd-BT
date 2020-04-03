const express = require('express');
const app = express();

app.use('/vacantes', require('./vacantes'));
app.use('/registrarEmpresa', require('./registrarEmpresa'));
app.use('/usuario', require('./usuario'));
app.use('/evaluacion', require('./evaluacion'));



module.exports = app;