module.exports = (sequelize, DataTypes) => {
   const alias = 'User';

   const cols = {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      name: {
         type: DataTypes.STRING,
      },
      email: {
         type: DataTypes.STRING,
      },
      password: {
         type: DataTypes.STRING,
      }
   }

   const config = {
      timestamps: true
   }

   const User = sequelize.define(alias, cols, config);

   return User;
}