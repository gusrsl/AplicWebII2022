//ASINCRONIA EN JS - CALL BACK 
//MANEJO RECURSO DE FORMA ASINCRONIA

const platos = [

    {
        id:1,
        descripcion: 'Encebollado',
        idrestaurante:1,
    },
    {
        id:2,
        descripcion: 'Ceviche',
        idrestaurante:1,
    },
    {
        id:3,
        descripcion: 'Tigrillo',
        idrestaurante:2,
    },
    {
        id:4,
        descripcion: 'Tostadas',
        idrestaurante:2,
    }
]

const restaurantes = [

    {
        id:1,
        nombre: 'La carreta de Tono',
    },
    {
        id:2,
        nombre: 'Miguelito Restaurant',
    },
]

//callback es una funcion que tiene de parametro otra funcion

function buscarPlatoporID(id,callback){

    const plato = platos.find((plato)=> {return plato.id=== id;})
    if(!plato)
    {
        const error = new Error();
        error.message = `Plato no encontrado ${id}`;
        return callback(error);
    }

    return callback(null, plato);

}

function buscarrestauranteporID(id,callback){
    const restaurante = restaurantes.find((restaurante)=> restaurante.id===id);
    if(!restaurante)
    {
        const error = new Error();
        error.message = `Restaurante no encontrado con el id ${id}`;
        return callback(error);
    }
    return callback(null, restaurante);
}

// buscarPlatoporID(1, (err, plato)=>{

//     if (err){
//         console.log(err.message);
//         return;
//     }
//     console.log(plato);
// })

buscarPlatoporID(3, (err,plato)=>{
    if (err){
        console.log(err.message);
        return;
    }


    buscarrestauranteporID(plato.idrestaurante , (err, restaurante)=>{
        if(err)
        {
            console.log(err.message);
            return;
        }
    plato.restaurante = restaurante
    delete plato.idrestaurante;
    console.log(plato);

    })
})