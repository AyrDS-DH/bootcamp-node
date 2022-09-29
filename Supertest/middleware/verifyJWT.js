const jwt = require('jsonwebtoken');
const extractToken = require('../helpers/extractToken');

const verifyJWT = (req, res, next) => {
   const token = extractToken(req);

   try {
      const { role, id } = jwt.verify(token, process.env.JWT_PRIVATE);

      req.role = role;
      req.id = id;

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