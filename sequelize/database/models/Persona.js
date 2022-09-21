

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
            type: DataTypes.STRING,
            allowNull: true,
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }

    const extra = {
        timestamps: true,
        createdAt: "Creado",
        updatedAt: "Actualizado"
    }

    const Persona = sequelize.define(alias,cols,extra)
    Persona.associate = (models) => {
        Persona.belongsTo(models.Equipo,{
            as: "equipopersona",
            foreignKey: "equipo_id",
        })
    }


    return Persona

}