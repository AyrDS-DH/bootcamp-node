const express = require('express')
const { sequelize } = require('./database/models')
const db = require('./database/models')



const app = express()

app.get('/create',async (req,res) => {

    const jugadores = [{
        nombre: "Juan",
        apellido: "Perez",
        email: "perez@correo.com"
    },{
        nombre: "Rodrigo",
        apellido: "Alvarez",
        email: "perez@correo.com"
    },{
        nombre: "Pedro",
        apellido: "Gonzalez",
        email: "perez@correo.com"
    }]

    try{
    
        for(let i=0;i<jugadores.length;i++){
            const createpersona = await db.Persona.create(jugadores[i])
        }
    res.send("Personas creadas")
} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("Completa todos los datos requeridos")
}   
})

app.get('/buscar',async (req,res) => {
   try{
        const buscar = await db.Equipo.findAll({
              include: [{ association: "equipomarca"}]
        })
   
    res.send(buscar)

} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("Completa todos los datos requeridos")
}   
})

app.get('/setear',async (req,res) => {
   try{

   
    res.send(setmarca)
} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("Completa todos los datos requeridos")
}   
})

app.get('/crearsetear',async (req,res) => {
   try{

   
   
 


} catch(err){
    console.log("Err",err)
    res.send("Completa todos los datos requeridos")
}   
})






app.listen(3000, async () => {
    sequelize.sync() //danger
    console.log("Server corriendo en puerto 3000")
})