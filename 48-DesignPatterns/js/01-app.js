//Class Pattern

class Persona{
    constructor(nombre, email){
         this.nombre = nombre;
        this.email = email;
    }
}
const mnombre = 'Juan'
const correo = "email@fama.es"
const persona = new Persona('Juan', 'correo@email')
personaDos = new Persona(mnombre, correo)
console.log(persona)
console.log(personaDos)