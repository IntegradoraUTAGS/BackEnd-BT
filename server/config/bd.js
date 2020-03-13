// PUERTO
process.env.PORT = process.env.PORT || 3000;
//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//CONECCION A LA BASE DE DATOS
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'http://localhost:27017';
}
process.env.URLDB = urlDB;