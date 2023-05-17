/*
Concatenacion de cadenas
*/

var nombre = " Juan "
var apellido = " Perez "

var nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)

var nombreCompleto2 = "Carlos "+ "Lara"
console.log(nombreCompleto2)

//la lectura de este dato es de izquierda a derecha, por eso toma el 1 como una cadena
var x = nombre + 1 + 4
console.log(x)

//prioridad algoritmica y se suma
x = nombre + (2 + 4)
console.log(x)

//da prioridad de izquierda a derecha, esto pasa en js
x = 2 + 4 + nombre
console.log(x)


/*
contexto string: si la lectura empieza con una cadena,
todos los demas datos también son cadenas 
*/
