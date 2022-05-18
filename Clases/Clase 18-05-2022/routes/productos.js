const { Router }  = require('express');
const {check} = require('express-validator');

const { obtenerproductos,
        optenerproducto,
        crearProducto,
        actualizarProducto,
        BorrarProducto

} = require('../controllers').Producto;

const {ValidarCampos} = require('../middlewares')

const router = Router();

router.get('/', obtenerproductos);
router.get('/:id',[check ('id', 'El id no es valido').isMongoId()] ,    optenerproducto);
router.post('/', check(`nombre`,`El nombre es obligtorio`).isEmpty() ,validarCampos,  crearProducto);
router.put('/:id', [check ('id', 'El id no es valido').isMongoId()],    actualizarProducto);
router.delete('/:id',[check ('id', 'El id no es valido').isMongoId()],  BorrarProducto);


module.exports = router
