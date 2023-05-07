//Closures

// const cliente = "Juan";

// function mostrarCliente(){
//     const cliente = "Pablo";
    
//     console.log(cliente);
// }

// mostrarCliente();

const obtenerCliente = () => {
    const nombre = "Juan";
    
    function muestraNombre(){ 
        console.log(nombre)
    };
    
    return muestraNombre;
}

obtenerCliente();// Esto no retorna nada hay que recurrir a un closure

const cliente = obtenerCliente(); //Este es el closure.

cliente();