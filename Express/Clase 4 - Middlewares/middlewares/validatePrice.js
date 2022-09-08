const validatePrice = (req, res, next) => {
   const { precio } = req.body;

   if(!precio){
      return res.status(400).json({
         ok: false,
         msg: 'El precio es obligatorio'
      })
   }

   req.test = 'Hola, estoy en el req'

   next();
}

module.exports = validatePrice;