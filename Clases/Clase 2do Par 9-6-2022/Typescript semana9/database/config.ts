import { connect } from 'mongoose'

const dbConnection = async ()=> {
    try {

       await connect(process.env["MONGO_CNN"] || '');
       console.log(dbConnection);
       console.log('Base de datos Conectada');
    } catch (err) {
        console.log(err);
        throw new Error("Error al conectre")
    }

    }
    
export {dbConnection} 
