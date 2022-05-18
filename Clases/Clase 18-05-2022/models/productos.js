const {Schema, model} = require('mongoose')

ProductoSchema = Schema({
    nombre: {
        type : String,
        required : [true, `El nombre del prudcto es obligatorio`],
        unique : true
    },
    estado: {
        type : String,
        required : true,
        default : true,
    },
    precio: {
        type : Number,
        default : 0
    },
    costo: {
        type : Number,
        default: 0,
    },
    minimo: {
        type : Number,
        default : 0,
    },
    stock: {
        type : Number,
        default : 0,

    }

})


module. exports =  model('Producto', ProductoSchema);