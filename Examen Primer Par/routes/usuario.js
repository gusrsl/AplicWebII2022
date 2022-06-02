const express = require('express');
const routes = express.Router();
const validation = require('../midellware/index');

function abd (datos, array){
    array.push(datos)
};

routes.get ("/prueba1", validation,(req, res) => {
    res.status(200).send({ 
        message: 'Ruta /prueba1 existe y presenta el siguiente mensaje'});
    
});

routes.get ("/", validation, (req, res) => {
    res.status(200).send({
        message: 'Ruta expuesta no existe'});
    
});

module.exports = routes;