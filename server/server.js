require('./config/bd');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');




// parse aplication/x-www.form-uelencoded
app.use(bodyparser.urlencoded({ extended: false }));

//parse formato a application/json
app.use(bodyparser.json());

// Habilita CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, token'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});


// Archivo agrupador de rutas
app.use(require('./routes/index'));

//Conexion a base de datos
mongoose.connect('mongodb+srv://Admin:BolsaUT123@cluster0-qgmkk.mongodb.net/BolsaUT?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false

    },
    (err, resp) => {
        if (err) throw err;

        console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
            console.log('Escuchando por el puerto', process.env.PORT);