/*
Parsearemos datos para convertirlos, como ejemplo de string a
number
*/

let numero = "10"
console.log( typeof numero )

let edad = Number(numero)
console.log( typeof edad )

/*adicional agregarenmos si la persona puede votar o no
Edad minima 18, menor a eso no puede
*/
let edadMinima = 18

if ( edad >= edadMinima ){
    console.log("Puede votar")
}
else{
    console.log("No puede votar")
}

//operador ternario expresion ? respuesta : respuesta si la primera es incorrecta
let resultado = (edad >= edadMinima)? "Puede votar" : "No puede votar"
console.log( resultado )