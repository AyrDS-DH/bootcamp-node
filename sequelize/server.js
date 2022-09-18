const express = require('express')
const { sequelize } = require('./database/models')
const db = require('./database/models')

const app = express()

app.get('/',async (req,res) => {
    const id = 4
   
        const result = await db.Personas.findAll({
            where:{
                id_persona: 2
            }
        })
        .then(data => {
            console.log(data);
            res.send(data)
        })
        .catch(err => console.log(err))     
   
})

app.post('/create',async (req,res) => {

    const crear = await db.Personas.create({
        nombre: "Nacho"
    })

    res.send("Persona creada")
})



app.listen(3000, async () => {
   await sequelize.sync({ force: false });
    console.log("Server corriendo en puerto 3000")
})