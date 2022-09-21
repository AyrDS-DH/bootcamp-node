const express = require('express')
const { sequelize } = require('./database/models')
const db = require('./database/models')
const {asociatepersona} = require('./database/models/Persona')
const Op = db.Sequelize.Op


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

app.get('/setteam',async (req,res) => {
try{
    
    const setearteam = await db.Persona.update({
        equipo_id: 1,        
        },
         {
        where: {
            nombre: "Pedro"
        }})

    res.send(setearteam)
} catch(err){
    console.log("Err",err)
    res.send("Completa todos los datos requeridos")
}   
})

app.get('/getteam',async (req,res) => {
try{
    const getteam = await db.Equipo.findAll({
        where: {
            nombre: "Boca Juniors"
        },
        include: [{model: db.Persona, attributes: ["nombre","email"]}],
        
    })
    console.log("modelos",db.Sequelize.HasMany)
    
    res.send("getteam")
} catch(err){
    console.log("Err",err)
    res.send("Completa todos los datos requeridos")
}   
})

app.get('/createteam',async (req,res) => {

const team = [{
        nombre: "Boca Juniors",

    },{
        nombre: "River Plate",

    },{
        nombre: "Peñarol",
    },{
        nombre: "Nacional",
    }]

    try{
        for(let i = 0;i < team.length;i++){
            const createteam = await db.Equipo.create(team[i])
        }
    res.send("Equipo creado")
} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("Completa todos los datos requeridos")
}   
})

app.get('/buscarmarcas',async (req,res) => {
try{
    const buscarmarcas = await db.Equipo.findAll({
        where: {
            nombre: "Boca Juniors"
        },
        include:[{association: "equiposmarca",attributes:["nombre"]},{model: db.Persona,attributes:["nombre"]}]

    })
    res.send(buscarmarcas)
} catch(err){
    console.log("Err",err)
    res.send("Completa todos los datos requeridos")
}   
})


app.get('/asociarmarca',async (req,res) => {
try{
    const asociarmarca = await db.equipo_marca.create({
        equipo_id: 1,
        marca_id: 3
    })
    res.send(asociarmarca)
} catch(err){
    console.log("Err",err)
    res.send("Completa todos los datos requeridos")
}   
})


app.listen(3000, async () => {
    sequelize.sync() //danger
    console.log("Server corriendo en puerto 3000")
})