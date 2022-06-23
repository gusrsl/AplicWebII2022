const express = require('express')
const app = express()

const respuesta = {
    data : [],
    arquitectura : 'Microservicio',
    descripcion : 'Pruducto Micro'
}


app.get('/api/v2/productos' , (req,res) =>{
    respuesta.data.push("Hamburguesa","Salchipapa");
    console.log( 'Microservicio producto')
    return res.send (respuesta);
})

module.exports = app;