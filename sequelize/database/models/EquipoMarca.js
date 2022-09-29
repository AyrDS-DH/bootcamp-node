module.exports = (sequelize, DataTypes) => {

    const alias = "Equipo_marca"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        equipo_id: {
            type: DataTypes.INTEGER,
        },
        marca_id: {
            type: DataTypes.INTEGER,
        }
    }
    const extra = {
        tableName: "equipo_marca",
        timestamps: true,
        createdAt: "creado",
        updatedAt: false

    }

    const EquipoMarca = sequelize.define(alias,cols,extra)
    return EquipoMarca
}