const comida=[
    "tigrillo",
    "bolon mixto",
    "pizza",
    "chaulafan",
    "habmurguesa",
    function(){
        return "Bandera";
    }
]
//AGREGAR UNOBJETO CON POSISCION X 
comida["x"]="Parrillada";
//LLAMAR A LA FUNCIONQUE ESTA DENTRO DEL ARREGLO
const funcionA= comida[5];
funcionA();

console.log(comida)

//COMANDO EXPRES SON LOS 3 PUNTITOS SIRVEN PARA DESGLOSAR 
//UN ARREGLO Y DARLE VALORES A SUS PARAMETROS
const desayuno = [...comida] ;
desayuno [2] = "comida chatarra";
// console.log(desayuno);


//UINION DE ARREGLOS DESGLOSANDOLOS Y LUEGO UNIENDOLOS 
const alimentos = [...comida, ...desayuno];
// console.log(alimentos)


// desayuno[3] = "yogurt con ensalada"
// console.log(comida);

// comida[0] = "yogurt";
// console.log(comida); 

//DATOS: GENERALMENTE E JAVASCRIPT PARA DEFIIR COMOOBJETO SE 