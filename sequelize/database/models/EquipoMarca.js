module.exports = (sequelize, DataTypes) => {

    const alias = "equipo_marca"
    const cols = {
        equipo_id: {
            type: DataTypes.INTEGER,
        },
        marca_id: {
            type: DataTypes.INTEGER,
        }
    }
    const extra = {
        tableName: "equipo_marca",
        timestamps: false,

    }

    const EquipoMarca = sequelize.define(alias,cols,extra)
    return EquipoMarca
}