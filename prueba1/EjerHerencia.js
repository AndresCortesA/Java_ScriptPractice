/*
Ejercicion: 

Clase padre

Persona: 
    Atributos:
    _idPersona number
    _nombre string
    _apellido string
    _edad number
    contadorPersonas static

    Metodos:
    getIdPersona() numbre
    getNombre() string
    setNombre(string)
    getApellido() string
    setApellido(string)
    getEdad() number
    getEdad(string)
    toString()

Clases hijas:
Empleado:
    Atributos:
        _idEmpleado long
        _sueldo number

    Metodos:
    getIdEmpleado() number
    getSueldo() number
    setSueldo(number)
    toString()

Cliente:
    Atributos:
        _idCliente long
        _fechaRegistro Date

    Metodos:
    getIdCliente
    getFechaRegistro() Date
    setFechaRegistro(Date)
    toString()
*/

class Persona {
    static contadorPersonas = 0
    constructor(nombre, apellido, edad){
        //Atributos
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
        this._idPersona = ++Persona.contadorPersonas
    }
    //Metodos -> setters y getters
    get getId(){
        return this._idPersona
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nombreNuevo){
        this._nombre = nombreNuevo
    }

    get apellido(){
        return this._apellido
    }
    set apellido(apellidoNuevo){
        this._apellido = apellidoNuevo
    }

    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }

    datosCompletos(){
        return "Persona: " + "Nombre: "+this._nombre
                +" Apellido: " + this._apellido +
                " Edad: " + this._edad +
                " Id: " + this._idPersona

    }

    toString(){
        return this.datosCompletos()
    }

    
}


class Empleado extends Persona {
    //Atributos
    static contadorEmpleados = 0
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._sueldo = sueldo
        this._idEmpleados = ++Empleado.contadorEmpleados
    }

    //Metodos
    get idEmpleado(){
        return this._idEmpleados
    }

    get sueldo(){
        return this._sueldo
    }
    set sueldo(sueldo){
        this._sueldo = sueldo
    }

    toString(){
        return super.datosCompletos() + " sueldo: " + this._sueldo + " idEmpleado: " + this._idEmpleados
    }

}

class Cliente extends Persona {
    //Atributos
    static contadorCliente = 0
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._fechaRegistro = fechaRegistro
        this._idCliente = ++Cliente.contadorCliente
    }

    //Metodos
    get fechaRegistro(){
        return this._fechaRegistro
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro
    }

    toString(){
        return super.datosCompletos()+" fecha registro:" + this.fechaRegistro + " idCliente: " + this._idCliente
    }
}

let persona = new Persona("Martha", "Cortes", 25)
console.log(persona.toString())
let empleado = new Empleado("Mario", "Martinez", 34, 234590)
console.log(empleado.toString())
let cliente = new Cliente("Aron", "Arialez", 29, new Date(2022, 7, 29))
console.log(cliente.toString())
console.log(cliente.getId);
cliente.nombre = "Alejandro"
cliente.fechaRegistro = new Date(2023, 0, 23)
console.log(cliente.toString())
