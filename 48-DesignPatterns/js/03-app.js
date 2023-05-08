//Singleton

let instancia = null;
class Persona{
    constructor(nombre, email){
    if(!instancia){
         this.nombre = nombre;
        this.email = email;
        instancia = this;
    }else{
            return instancia;
        }
    }
}
const persona = new Persona('Juan', 'correo@email')
console.log(persona)

const persona2 = new Persona('Karen', 'cisnbfasd@dsfas.es')
console.log(persona2)