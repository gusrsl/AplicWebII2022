
import {  dbConnection } from './database/config';
import cors from 'cors';
import express,{Router, Express } from 'express'
import {router as productos} from './routers/product'


class Server 
{
    app: Router;
    router: Router;
    port: Number;
    paths: { [key:string]:string };
    private _express: Express;

    constructor(){
        this.app = Router();
        this.router = Router();
        this.port = Number (process.env["PORT"])
        this.paths = {
            productos:'/api/products',
            clientes:'/api/clientes',
        }
        this.conectarDb();
        this.middleware();
        this.routes();

        this.router.use('/v1/sextoa', this.app);
        this._express = express().use(this.router)

    }

    private async conectarDb(){
        await dbConnection();
    }

    private middleware(){
        this.app.use(cors())
        this.app.use(express.json())
        
    }
    
    private routes(){
        this.app.use(this.paths.productos, productos)
    }
    listen(){
        this._express.listen(this.port, ()=>{
            console.log (`Servidor listening on port http://localhost:${this.port}/v1/sextoa`)
        })
    }

}

export {
    Server
}