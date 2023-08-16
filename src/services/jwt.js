const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'clave_secreta_labymed';

exports.createToken = function (usuario) {
    let payload = {
        usuario: usuario.usuario,
        iat: moment().unix(),
        exp: moment().day(10, 'days').unix()
    }

    return jwt.encode(payload, secret);
}