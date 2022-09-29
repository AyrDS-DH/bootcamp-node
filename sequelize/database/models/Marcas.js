module.exports = (sequelize, DataTypes) => {

    const alias = "Marca"
    const cols = {
        id_marca: {
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
        timestamps: true,
        createdAt: "Creado",
        updatedAt: "Actualizado"
    }

    const Marca = sequelize.define(alias,cols,extra);
    // Marca.associate = (models) => {
    //     Marca.belongsToMany(models.Equipo,{
    //         as: "equipomarca",
    //         through: "equipo_marca",
    //         foreignKey: "marca_id",
    //         otherKey: "equipo_id"
    //     })
    // }

    return Marca

}