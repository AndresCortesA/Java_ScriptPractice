/*
Funciones js
*/

function  esUnArreglo  ( a )  {
    if( Array.isArray(a) || a instanceof Array ){
        console.log("Es un arreglo")
    }
    else{
        console.log("No es un arreglo")
    }
}

//Funciones que se llaman a si misma
(function () {
    console.log("Funcion que se llama a si misma")
})()


const arr = [1,2,3,4]
esUnArreglo( arr )

//Funciones de tipo expresion o funciones anonimas
let esMayor = function (a, b) {
    //si es mayor
    var mayor = Math.max( a , b )
    return mayor
}

let resultado = esMayor (90 , 30)
console.log ( resultado )

// Funcion como objetos
function suma(a, b){
    console.log(arguments.length)
    return a + b
}

console.log(suma(2, 5))
console.log(suma.toString())//propiedades y metodos de la funcion

//Funciones flecha con funcion de expresion

const sumarFuncTipoFlecha = (a, b) => a + b

resultado = sumarFuncTipoFlecha(5, 7)
console.log( resultado )

//Parametros y argumentos
/*
en algunos casos si queremos acceder a valores que nos estan por default
en nuestra funcion, podemos hacerlo mediande arguments para usarlo 
 */
function division(a , b){
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    return a / b / arguments[2]
}

resultado = division(2, 5, 10)
console.log( resultado )