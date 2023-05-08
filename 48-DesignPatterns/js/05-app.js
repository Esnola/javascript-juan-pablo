//Mixins
class Persona{
    constructor(nombre, email){
         this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInfo(){
         console.log(`Nombre Persona: ${this.nombre} Email: ${this.email} `)
    },
    mostrarNombre(){
        console.log(`El nombre del cliente es ${this.nombre}`)
    }
}


//Añadir funcionesPersona a la clase Persona
Object.assign(Persona.prototype,funcionesPersona)


const cliente = new Persona('Pablo', 'correo@correo.com')
console.log(cliente);
cliente.mostrarInfo();
cliente.mostrarNombre();