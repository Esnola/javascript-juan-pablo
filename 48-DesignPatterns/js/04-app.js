//Factory
class inputHTML{
    constructor(tipo, nombre){
        this.tipo = tipo;
        this.nombre = nombre;
    }
    crearInput(){
        return `<input type="${this.tipo}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre){
        switch(tipo){
            case 'text':
            case 'submit':
            case 'hidden':
            return new inputHTML(tipo, nombre)
        default:
            return;
        }
    
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('hidden', 'nombre-cliente')
console.log(inputText.crearInput())