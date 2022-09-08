const jwt = require('jsonwebtoken');
const generateJWT = (payload) => {

   return new Promise((resolve, reject) => {

      jwt.sign(payload, process.env.JWT_PRIVATE, {
         expiresIn: '1h',
         algorithm: 'HS512'
      }, (err, token) => {
         if (err) {
            console.log(err);
            reject('No se pudo crear el token')
         }

         resolve(token);
      })
   })
}

module.exports = generateJWT;