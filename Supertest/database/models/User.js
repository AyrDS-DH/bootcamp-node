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
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false
      },
      role: {
         type: DataTypes.STRING,
         defaultValue: 'USER'
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }

   const config = {
      timestamps: true
   }

   const User = sequelize.define(alias, cols, config);

   return User;
}