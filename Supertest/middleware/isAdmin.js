
const isAdmin = (req, res, next) => {

   const role = req.role;

   if (role !== 'ADMIN') {
      return res.status(401).json({
         msg: 'No tiene permisos para esta petición'
      });
   }

   next();

}

module.exports = isAdmin;