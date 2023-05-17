let a = 3, b = 2, c = "3"

let z = a == b // se revisa el valor sin importar el tipo
console.log( z )

//Evalua los valores y tambien el tipo de dato
z = a === c
console.log( z )

z = a != c
console.log( z )

//revisar el valor de manera estricta
z = a !== c
console.log( z ) // devuelve true porque el valor es diferente