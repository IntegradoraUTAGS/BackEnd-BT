const express = require('express');
const app = express();

app.use(require('./vacantes'));
app.use(require('./registrarEmpresa'));



module.exports = app;