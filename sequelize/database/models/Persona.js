module.exports = (sequelize, dataTypes) => {
    const alias = "Personas";
    const cols = {
        id_persona: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        }
    };
    const extra = {
        timestamps: true,
        createdAt: true,
        updateAt: "Actualizado"
    };

    const Persona = sequelize.define(alias,cols,extra);

    return Persona;
}