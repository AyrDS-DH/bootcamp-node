const mysql = require('mysql');
const express = require('express')

const app = express()

const db = mysql.createConnection({
    user: "root",
    password: "",
    port: "3306",
    database: "movies_db",
    host: "localhost"
})

app.get('/',(req,res) => {
    const title = "Avatar"
    db.query(`SELECT * FROM movies`, (err,result) => {
    if(result) {
        console.table(result);
        res.send(result);
    }
    else console.log(err)
    })

})

app.listen(3000,() => {
    console.log("Servidor corriendo en puerto 3000")
})