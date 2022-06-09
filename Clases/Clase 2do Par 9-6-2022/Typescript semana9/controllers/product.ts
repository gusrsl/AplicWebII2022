import { Producto } from "../models";
import { IProducto } from "../interfaces";
import { Request, Response } from "express";

const obtenerProductos = async  ( req: Request, res: Response)=>{
    const { limite='10', desde='0' } =  req.query;
    const query = { estado:true };
   const [ total, productos ]: [ Number, IProducto[]] = await  Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
   ])

   res.json({
       total,
       productos
   })
}
const obtenerProducto = async (req: Request, res: Response) =>{
   const {id} = req.params;
   const producto: IProducto|null = await  Producto.findById(id);
   res.json(producto);
}
const crearProducto = async (req: Request, res: Response)=>{
       const {  estado,  ...body } =  req.body as IProducto;

       const productoExiste = await Producto.findOne({ nombre:body.nombre });
       if (productoExiste)
       {
           return res.status(400).json({
               message:
               `El producto con ese nombre ya existe ${productoExiste.nombre}`
           })
       }
       const producto = new Producto(body);
       const productoNuevo =  await producto.save();
       res.status(201).json(productoNuevo);

}
const actualizarProducto = async (req: Request, res: Response)=>{
   const {id} = req.params;
   const { estado, ...data } =  req.body;
   const productoModificado= await Producto.findByIdAndUpdate(id, data , { new:true } );
     res.json(productoModificado);
}
const borrarProducto = async (req: Request, res: Response)=>{
   const { id } = req.params
   const productoBorrado= await Producto.findByIdAndUpdate(id,{estado:false}
       , {new:true});
   res.json(productoBorrado);
}

export  {
   obtenerProductos,
   obtenerProducto,
   crearProducto,
}
