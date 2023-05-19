/* 
Esto no es programacion POO aún
*/

//constructor
function Persona (nombre, apellido, email, edad, idioma) {
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.edad = edad
    this.idioma = idioma

    //metodo
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido
    }
}

let persona = {
    //atributos
    nombre: 'Aulio',
    apellido: 'Varez',
    email: 'Vaulio@mail.com',
    edad: 28,
    idioma: 'es_col',

    //getters y setters
    get lang () {
        return this.idioma.toUpperCase()
    },
    set lang (lang) {
        this.idioma = lang.toUpperCase()
    }
    ,
    get nombreCompleto () {
        return this.nombre + ' ' + this.apellido
    }

} 

console.log(persona.nombreCompleto )
console.log(persona)

let persona2 = new Object()
persona2.nombre = 'Mario'
persona2.apellido = 'Lopez'
persona2.direccion = 'Cra 24'
persona2.telefono = '12435'
persona2.edad = 29

console.log(persona2)
//Acceder a las propiedades de los objetos
for(propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}

//borrar telefono de persona2
delete persona2.telefono

console.log( persona2 )

//Distintas formas de imprimir con js
for ( nombrePropiedad in persona ) {
    console.log(persona[nombrePropiedad])
}

let personArr = Object.values( persona )
console.log( personArr )

let personaString = JSON.stringify( persona )
console.log( personaString )

//Metodos get y set
console.log(persona.nombreCompleto)
console.log(persona.lang)
persona.lang = 'es_mx'
console.log(persona.lang)

//Metodo constructor

let padre = new Persona ('Andres', 'Arias', 'Aarias@mail.com', 30, 'es_col')
console.log( padre )
console.log( padre.nombreCompleto() )

//protype nos ayudara a agregar nuevos atributos a todos los objetos sin modificarla directamente
Persona.prototype.telefono = ''
padre.telefono = 2455688
console.log( padre.telefono )

/*
Metodo call
este nos va a permitir llamar un método que está definido en un
objeto desde otro objeto
*/

let persa1 = {
    nombre: 'Juan',
    apellido: 'Axki',
    nombreCompleto: function (titulo, telefono, direccion) {
        return titulo + ': '+ this.nombre + ' ' + this.apellido + ' telefono: '+telefono + ' direccion: ' + direccion
    }
}

let persa2 = {
    nombre: 'Mariana',
    apellido: 'Arxila',
    //Uso de call para usar el metodo perona1.nombreCompleto
}

console.log( persa1.nombreCompleto("Inge", 234456, "Cra 25 B # 14 - 15") )

//metodo call se pasa por separado los argumentos
console.log( persa1.nombreCompleto.call(persa2, "Inge", 3245667, "Cra 24 A") )

//Metodo Apply, podemos utilizarlo para hacer este tipo de llamadas, la diferencia es la manera en que vamos a pasar los parametros
// los argumentos en apply se pasan en un array
let arreglo = ["Inge", 32323465, "CRA 23 - 14 12"]
console.log( persa1.nombreCompleto.apply(persa2, arreglo))