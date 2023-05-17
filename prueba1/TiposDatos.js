/*
Tipos de datos js
Las variables en java script son dinamicas (let, const, var)
cambian sin tener que tiparla, podemos hacerlo pero no es necesario
*/

// String
var nombre = "Carlos"
console.log(nombre)
// Enteros integer
var numero = 1000
console.log(typeof numero) // typeof previsualizacion del tipo de dato que devuelve
//Tipo dato object -> objeto (type script)
var object = 
{
    nombre : "Juan",
    apellido : "Perez",
    edad : 20,
    telefono : 1234556
}

console.log(object)

//boolean
var bandera = true
var bandera2 = false
console.log(bandera, bandera2)

//Funciones en js
function suma (a, b)
{
    var result = a + b
    return result 
}

console.log ( suma (2,4) )
//Dato symbol
var simbolo = Symbol("Mi simbolo") // este dato se utiliza para crear un valor unico de una variable
console.log( simbolo )
//Tipo clase es una function
class Persona
{
    constructor(nombre, apellido)
    {
        this.nombre = nombre
        this.apellido = apellido
    }
}

console.log( Persona )

//Tipo de dato undefined
var x
console.log( x )

//null = ausencia de valor (tipo de dato : object)

var y = null
console.log( y )

//Arrays tipo object

var autos = ['BMW','AUDI','VOLVO']
console.log( autos )
console.log( typeof autos )
