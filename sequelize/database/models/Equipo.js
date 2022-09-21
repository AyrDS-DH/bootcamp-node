module.exports = (sequelize, DataTypes) => {

    const alias = "Equipo"
    const cols = {
        id_equipo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    const extra = {
        timestamps: false,

    }

    const Equipo = sequelize.define(alias,cols,extra)
    Equipo.associate = (models) => {
    Equipo.hasMany(models.Persona,{
            as: "personaequipo",
            foreignKey: "equipo_id"
        })
    Equipo.belongsToMany(models.Marca,{
            as: "marcaequipo",
            through: "equipo_marca",
            foreignKey: "equipo_id",
            otherKey: "marca_id"
        })
    }
    return Equipo
}