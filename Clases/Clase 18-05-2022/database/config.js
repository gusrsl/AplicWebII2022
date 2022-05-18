const mongoose = require ('mongoose');

const conexion = async ()=> {

    try {
        
        await mongoose.connect(procces.env.MONGODB_CNN);
        console.log('Connected to Mongo');

    }catch(error) {

        console.log('Nose pude conectar');
        throw new Error('')
    }
    

}


module.exports = {
    dbConnection
}