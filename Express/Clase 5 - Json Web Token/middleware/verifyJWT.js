const jwt = require('jsonwebtoken');
const { request } = require('express')

const verifyJWT = (req = request, res, next) => {

   // console.log(req.headers);
   const { authorization: token } = req.headers;

   try {
      const { name } = jwt.verify(token, process.env.JWT_PRIVATE);

      req.name = name;

      next();
   } catch (error) {
      console.log(error);
      return res.status(401).json({
         ok: false,
         msg: "Token invalido"
      })
   }

}

module.exports = verifyJWT;