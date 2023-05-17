let resultado = sumarTodo (5, 4, 13, 19, 20)
function sumarTodo() {
    let suma = 0
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i] // suma = suma + arguments[i]
    }
    return suma
}

console.log( resultado )

//Paso por valor y paso por referencia (Esto lo aplicamos cuando utilizamos tipos que no son objetos)
let x = 10 //valor primitivo, no posee propiedades ni metodos

function cambiarValor(a){
    a = 20 // a = x , a = 10, a = 20
}

//paso por valor
cambiarValor( x ) // 10
console.log( x )

//paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25
}

function cambiarValorObjeto (p1) {
    p1.nombre = 'Carlos'
    p1.edad = 18
}

cambiarValorObjeto(persona)
console.log( persona )