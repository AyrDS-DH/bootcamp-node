const db = require('../database/models');
const generateJWT = require('../helpers/generateJWT');

const getUsers = async (req, res) => {

   try {

      const users = await db.User.findAll();

      res.json(users);

   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Error inesperado'
      });
   }
}

const getUser = async (req, res) => {

   const { id } = req.params;

   try {
      const user = await db.User.findByPk(id);

      if (!user) {
         return res.status(404).json({
            msg: `El usuario con el ID ${id} no existe`
         });
      }

      res.json(user);
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Error inesperado'
      });
   }
}

const createUser = async (req, res) => {

   const { body } = req;

   try {

      const existEmail = await db.User.findOne({
         where: {
            email: body.email
         }
      });

      if (existEmail) {
         return res.status(400).json({
            msg: 'El email ya esta registrado'
         });
      }

      /* const user = db.User.build(body);
      await user.save(); */
      await db.User.create(body);

      res.status(201).json({
         ...body
      });

   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Error inesperado'
      });
   }
}

const login = async (req, res) => {
   const { email, password } = req.body;

   try {

      const user = await db.User.findOne({
         where: {
            email: email
         }
      });

      if (!user) {
         return res.status(400).json({
            msg: 'El usuario no se encuentra registrado'
         });
      };

      const passDB = user.getDataValue('password');

      if (password !== Number(passDB)) {
         return res.status(400).json({
            msg: 'Email o password incorrectas'
         });
      }

      const userPayload = {
         id: user.getDataValue('id'),
         name: user.getDataValue('name'),
         email: user.getDataValue('email'),
         role: user.getDataValue('role'),
      }

      const token = await generateJWT(userPayload);

      res.status(201).json({
         ...userPayload,
         token
      });

   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Error inesperado'
      });
   }
}

const deleteUser = async (req, res) => {
   const { id } = req.params;

   try {
      await db.User.destroy({
         where: {
            id: id
         }
      });

      res.json({
         msg: 'Usuario borrado'
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Server error.' });
   }
}



module.exports = {
   createUser,
   getUsers,
   getUser,
   login,
   deleteUser
}