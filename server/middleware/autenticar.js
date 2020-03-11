const jwt = require('jsonwebtoken');

let verificatoken = (req, res, next) => {
    // El req es para el cliente3
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }
        req.usuario = decoded.usuario;
        next();

    });



}
module.exports = { verificatoken };