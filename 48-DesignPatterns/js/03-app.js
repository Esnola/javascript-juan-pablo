//Singleton

class Persona{
    constructor(nombre, email){
         this.nombre = nombre;
        this.email = email;
    }
}
const persona = new Persona('Juan', 'correo@email')
console.log(persona)