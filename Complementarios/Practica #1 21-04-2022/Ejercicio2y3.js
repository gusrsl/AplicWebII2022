// Ejercicio 2
var comida = new Object();

  comida.nombre = "Pizza";
  comida.ingredientes = "Tomate, peperonie, queso";
  comida.tipo = "Plato fuerte";
  comida.precio = 20,00;
    
  
  // console.log(comida);

  // Ejercicio 3
  
  const comidasFav = [ comida.nombre, "Hamburguesa", "Papas fritas" ]

  
  // console.log(comidasFav);

  // Ejercicio 4

  //1ra estructura 

  for (let i = 0; i < comidasFav.length; i++) {
    console.log(comidasFav[i]);
}
  //2da estructura 

comidasFav.forEach( (i) =>{

  console.log(i);

})

//3da estructura 

let i = 0;
while (i < comidasFav.length) {
    console.log(comidasFav[i]);
    i++;
}

//4da estructura 

i = 0;
do {
    console.log(comidasFav[i]);
    i++;
} while (i < comidasFav);




//Ejercicio  5

comidasFav.forEach( (letra) =>{

  console.log("--------" +letra.toLocaleUpperCase()+"--------");

})