const db = require("../database/models");


const verifyEmail = async (email) => {

   const exist = await db.User.findOne({
      where: { email: email }
   });
   
   if (exist) {
      throw new Error(`El email ${email} ya se encuentra registrado`)
   }
}

module.exports = verifyEmail;