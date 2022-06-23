const express = require('express')
const app = express()

const respuesta = {
    data : [],
    arquitectura : 'Microservicio',
    descripcion : 'Usuario Micro'
}


app.get('/api/v2/usuarios' , (req,res) =>{
    respuesta.data.push("Sministrador","Clientes");
    console.log( 'Microservicio usuario')
    return res.send (respuesta);
})

module.exports = app;