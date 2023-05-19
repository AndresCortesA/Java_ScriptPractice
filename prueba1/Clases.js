/*
 * Clase o plantilla 
 * Objeto como instancia de una clase
 * Atributos / mmetodos,  ya no tenemos que usar la coma
 */

class Persona {
    //Atributos
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //Metodos

    //getters
    get nombre(){
        return this._nombre;
    }
    //setters
    set nombre(nNombre){
        this._nombre = nNombre
    }


}

let persona1 = new Persona("Juan", "Correa")
console.log( persona1 )
console.log( persona1.nombre )
console.log( persona1.nombre = "Camilo")