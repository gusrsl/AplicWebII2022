import { connect } from 'mongoose'

const dbConnection = async ()=> {
    try {

       await connect(process.env["MONGODB_CNN"] || '');
       console.log('Base de datos Conectada');
    } catch (err) {
        console.log(err);
        // throw new Error('ERROR AL CONECTARSE A LA BD');
    }

    }
    
export {dbConnection} 
