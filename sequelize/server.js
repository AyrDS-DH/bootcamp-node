const express = require('express')
const { sequelize } = require('./database/models')
const db = require('./database/models')
const { parseparameters } = require('./database/utils/update')
const Op = db.Sequelize.Op

const app = express()

app.use(express.json())

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
   const keyword = req.query.keyword
    try{
        const buscar = await db.Persona.findAll({
            where:{
                nombre: {
                    [Op.like]: '%'+ `${keyword}`
                }
            }
        })
        // const retByKey = await db.Product.findAll({where : {[Op.or]: [
        //         {title : keyWord},
        //         {description : keyWord}]},
        //         include: [{association: 'productocategoria', 
        //                 where: {name: keyWord}}]})
        res.send(buscar)

} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("Completa todos los datos requeridos")
}   
})

app.get('/setcart',async (req,res) => {
   try{
    const setcart = db.Cart.create({
        cart_id: 1,
        cart: [{nombre: "leche",cant: "1"}]
    }).then(data => res.send("Cart Asignada"))
    .catch(err => res.send("Debe ser clave Única"))   
} catch(err){
    console.log("Err",err.sqlMessage)
    res.send("Completa todos los datos requeridos")
}   
})

app.post('/crearsetear',async (req,res) => {

    const parameters = req.body
    console.log(req.body)

    const obj = await parseparameters(parameters)

   try{
        const updatecart = await db.Persona.update(obj,{where:{id_persona:1}})
        res.send("Actualizado")
} catch(err){
    console.log("Err",err)
    res.send("Completa todos los datos requeridos")
}   
})






app.listen(3000, async () => {
    sequelize.sync({alter: true}) //danger
    console.log("Server corriendo en puerto 3000")
})