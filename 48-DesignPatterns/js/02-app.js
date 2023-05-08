//Constructor Pattern

class Persona{
    constructor(nombre, email){
         this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa, direccion){
        super(nombre, email);
        this.empresa = empresa;
        this.direccion = direccion;
    }
}

const persona = new Persona("Juan","correo@correo.es")
let clienteDireccion = "Puerta del Sol Nº 15 - 15627 - Madrid";
const cliente = new Cliente('Miguel','sincor@gas.es', 'enParo S.A.', clienteDireccion)

console.log(persona , cliente)

console.log(cliente.nombre)