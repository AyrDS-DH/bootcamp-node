

const test = (req, res, next) => {
   console.log('Middleware global especifico ruta productos');

   next();
}

module.exports = test;