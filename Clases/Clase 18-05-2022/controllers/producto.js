const express = require('express');
const {Producto} = require('../models');

const obtenerproductos = async (req, res = response) => {
    
    const {limite=10, desde=0} = req.query;
    const query = {estado:true};

    const [total, productos] = await Promise.all([
        await Producto.conuntDocument(query),
        await Producto.find(query)
    ])

    res.json(total, productos)
    
}

const optenerproducto = async (req, res = response) => {
    const {id} = req.params;
    const producto = await Producto.findbyid(id);
    req.json(producto);
}

const crearProducto = async (req, res) => {
    const {estado,  ...body} = req.body;

    Producto.findOne({nombre: body.nombre});
    if (productoExists) {
        res.status(400).json({
            message: `Producto ya existe ${productoexiste.nombre}`})
    }

    const producto = new Producto(body);
    const productoNuevo = await producto.save();
    res.status(201).json(productoNuevo)
}

const actualizarProducto = async (req, res) => {
    const {id} = req.params.id;
    const {estado, ...data} = req.body;

    const productomodificado = await Producto.findByIdAndUpdate(id, data, {new: true});
    res.json(productomodificado);

}

const BorrarProducto = async (req, res) => {
    const {id} = req.params.id;

    const productoeliminado = await Producto.findByIdAndUpdate(id, {estado:false}, {new: true});
    res.json(productoeliminado); 
}

module.exports = {
    optenerproducto,
    obtenerproductos,
    crearProducto,
    actualizarProducto,
    BorrarProducto
}