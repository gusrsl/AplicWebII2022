const {check} = require('express-validator');

const validacion = [
    check("route").exists,

]

module.exports = validacion;