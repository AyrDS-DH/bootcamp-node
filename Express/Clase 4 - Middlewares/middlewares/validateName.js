

const validateName = (req, res, next) => {
   const { nombre } = req.body;

   if(!nombre){
      return res.status(400).json({
         ok: false,
         msg: 'El nombre es obligatorio'
      })
   }

   next();
}

module.exports = validateName;