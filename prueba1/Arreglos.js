
/*
Arreglos
*/

let arr = [1,2,3,4]
arr.forEach (function (elemento, i) {
    console.log("Posicion ->",i, " Elemento en el arreglo ->", elemento )
}
)

const autos = ["BMW", "MERCEDES BENZ", "VOLVO"]
autos.forEach (function ( elemento, i ) {
    console.log("Posicion ->",i, " Elemento en el arreglo ->", elemento )
 } )

//modificar un arreglo
//trim() es una funcion que elimina los espacios en blanco al inicio y al final de una cadena
autos.forEach( function(elemento, i ){
    autos[i] = autos[i].trim().replace(" ","")
    //Esta funcion solo afectara o agregara datos al arreglo si hay un espacio vacio para el
    if(autos[i] !== elemento){
        autos.push("WOLKS", "TERMA")
    }
})

console.log(autos)
//preguntar si estamos trabajando con un arreglo
if ( Array.isArray(autos) || autos instanceof Array ){
    console.log("Es un arreglo")
}
else{
    console.log("No es un arreglo")
}
