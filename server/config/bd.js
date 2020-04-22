// PUERTO
process.env.PORT = process.env.PORT || 8099;
//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//CONECCION A LA BASE DE DATOS
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'http://172.17.1.7:8099/';
}
process.env.URLDB = urlDB;
// FIRMA DE JWT
process.env.SEED = process.env.SEED || 'firma-super-secreta';

// //EXPIRE TIME JWT
process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '3h';