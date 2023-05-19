class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    //metodo padre
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido
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
//no es posible llamar un metodo static desde un objeto
Persona.saludar()
Persona.saludar2(persona1)

//Se puede heredar a los hijos
Empleado.saludar()
Empleado.saludar2(empleado)