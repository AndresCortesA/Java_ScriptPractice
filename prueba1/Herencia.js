class Persona {

    //atributos estaticos, se relacionan con la clase no con los objetos
    static contadorObjetosPersona = 0
    static get MAX_OBJ(){
        return 5
    }

    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido

        if(Persona.contadorObjetosPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorObjetosPersona
        }
        else{
            console.log( "Maximos objetos permitidos: 5" )
        }
    }
    get nombre(){
        return this._nombre
    }
    get apellido(){
        return this._apellido
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    //metodo padre
    nombreCompleto(){
        return this.idPersona+' '+ this._nombre + ' ' + this._apellido
    }
    toString(){
        //Existe polimorfismo ( multiples formas en tiempo de ejecucion )
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hijo con las propiedades del hijo.
        return this.nombreCompleto()
    }
    //metodos estaticos se asocian con una clase pero no con un objeto
    //se va a asociar con nuestra clase y no con los objetos que se creen de esta clase
    static saludar(){
        console.log("Metodo static");
    }

    static saludar2(persona){
        console.log(persona.nombreCompleto());
    }
}

class Empleado extends Persona {
    constructor (nombre, apellido, departamento) {
        super(nombre, apellido)
        this._departamento = departamento
    }
    get departamento () {
        return this._departamento
    }

    set departamento (departamento) {
        this._departamento = departamento
    }

    //metodo hijo sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ' departamento: ' + this._departamento
    }
}

let empleado = new Empleado("Andres", "Lopez", "Cauca")
console.log(empleado)
console.log(empleado.nombre)
console.log(empleado.nombre = "Mario")
console.log(empleado.nombreCompleto())
console.log(empleado.toString())

let persona1 = new Persona("Juan", "Correa")
let persona2 = new Persona("Juana", "Correa")
//no es posible llamar un metodo static desde un objeto
Persona.saludar()
Persona.saludar2(persona1)
console.log(persona1.contadorObjetosPersona)
console.log(Persona.contadorObjetosPersona)
console.log(persona1.toString())
console.log(persona2.toString())

//Se puede heredar a los hijos
Empleado.saludar()
Empleado.saludar2(empleado)
console.log(Empleado.contadorObjetosPersona)
console.log(empleado.toString())

//Variable de tipo static y que nos sea modificable solo de lectura.
console.log( Persona.MAX_OBJ )
let persona3 = new Persona ("Nartin", "Lara")
let persona4 = new Persona ("Mauricio", "Correa")
let persona5 = new Persona ("Pedro", "Alcazar")

console.log(persona3.idPersona)
console.log(persona4.idPersona)
console.log(persona5.idPersona)