const fs = require('fs');
const generateJWT = require('../helpers/generateJWT');

const main = (req, res) => {
   res.json({
      ok: true,
      msg: 'Usuarios'
   })
}

const login = async (req, res) => {

   const { userName } = req.body;

   try {
      const dbUsers = fs.readFileSync("C:/Users/Smash/Desktop/Digital House/Bootcamp-node/Express/Clase 5 - Json Web Token/db/users.json", 'utf-8');
      const users = JSON.parse(dbUsers);

      const user = users.find(user => user.userName === userName);
      if (!user) {
         return res.status(400).json({
            ok: false,
            msg: "Este usuario no existe"
         })
      }

      const token = await generateJWT(user);

      res.json({
         ok: true,
         user,
         token
      })
   } catch (error) {
      console.log(error);
      res.status(500).json({
         ok: false,
         msg: 'Login'
      })
   }
}




module.exports = {
   login,
   main,
}