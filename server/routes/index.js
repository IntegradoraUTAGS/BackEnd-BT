const express = require('express');
const app = express();

app.use(require('./vacantes'));


module.exports = app;