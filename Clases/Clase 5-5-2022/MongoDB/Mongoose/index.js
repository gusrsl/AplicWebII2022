const mongoose = require('mongoose');

const conexion = "mongodb+srv://admin:203004@cluster0.5r4br.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

( async() => {
    const estadoConexion = await mongoose.connect(conexion);
    const Usuario   = mongoose.model("Usuario",{ nombre: String } );
    const usuario1  = new Usuario({nombre: "Prueba Sexto A"});
    const guardado = await usuario1.save();
    const resultado = await Usuario.find();
    console.log(resultado)

})();