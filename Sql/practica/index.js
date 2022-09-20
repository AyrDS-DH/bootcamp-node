const mysql = require('mysql');
const express = require('express')

const app = express()

const db = mysql.createConnection({
    user: "root",
    password: "",
    port: "3306",
    database: "usuarios",
    host: "localhost"
})

app.get('/',(req,res) => {
    const title = "Avatar"
    const sql = `SELECT * FROM registrados`

    db.query(sql, (err,result) => {
    if(result) {
        console.log(result[0].estado);
        res.send(result);
    }
    else console.log(err)
    })

})

app.listen(3000,() => {
    db.connect(function(err) {  
        if (err) throw err;  
        console.log("Conectado a la db!");  
});  
    console.log("Servidor corriendo en puerto 3000")
})