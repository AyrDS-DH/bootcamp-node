const express = require('express')
const { sequelize } = require('./database/models')
const db = require('./database/models')
const Op = db.Sequelize.Op


const app = express()

app.get('/create',async (req,res) => {
try{
    const createpersona = await db.Persona.create({
        nombre: "Juan",
        apellido: "Perez",
        email: "perez@correo.com"
    })
    res.send("Persona creada")
} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("Completa todos los datos requeridos")
}   
})

app.get('/update',async (req,res) => {
try{
    const updatepersona = await db.Persona.update({
        nombre: "Hernan",
        email: "hernan@cencosud.com"
        },
        {
            where: {
                nombre: "Juan"
            }
        })
    res.send("Persona actualizada")
} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("Completa todos los datos requeridos")
}   
})

app.get('/delete',async (req,res) => {
try{
    const deletepersona = await db.Persona.destroy({
        where: {
                id_persona: "4"
            }
        })
    console.log("Delete",deletepersona)    
    res.send("Persona borrada")
} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("Completa todos los datos requeridos")
}   
})






app.get('/find',async (req,res) => {
try{
        const findpersona = await db.Persona.findAll({
            order: [["edad","ASC"],["nombre","DESC"]]
        })
        res.send(findpersona)
} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("No se encontraron registros")
}   
})




app.listen(3000, async () => {
    sequelize.sync({force: false}) //danger
    console.log("Server corriendo en puerto 3000")
})