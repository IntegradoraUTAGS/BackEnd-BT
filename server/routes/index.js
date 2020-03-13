const express = require('express');
const app = express();

app.use(require('./vacantes'));
// app.use(require('./registrarEmpresa'));
app.use(require('./usuario'));



module.exports = app;