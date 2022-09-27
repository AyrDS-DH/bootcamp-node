const { DataTypes } = require('sequelize')

module.exports = (sequelize  ) => {

    const alias = "Cart"
    const cols = {
        id_cart: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart: {
            type: DataTypes.JSON,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER,
            unique: true
        }
    }
    const extra = {
        timestamps: true,

    }

    const Cart = sequelize.define(alias,cols,extra)
    Cart.associate = (models) => {
        Cart.belongsTo(models.Persona,{
            as:"personacart",
            foreignKey:"cart_id"
        })
    }
    return Cart
}