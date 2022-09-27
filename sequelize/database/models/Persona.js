

module.exports = (sequelize, DataTypes) => {

    const alias = "Persona"
    const cols = {
        id_persona: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }

    const extra = {
        timestamps: false
    }

    const Persona = sequelize.define(alias,cols,extra)
    Persona.associate = (models) => {
        Persona.hasOne(models.Cart,{
            as: "cartpersona",
            foreignKey: "cart_id"
               })
    }


    return Persona

}