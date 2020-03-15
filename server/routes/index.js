const express = require('express');
const app = express();

app.use('/vacantes', require('./vacantes'));
// app.use(require('./registrarEmpresa'));
app.use('/usuario', require('./usuario'));



module.exports = app;