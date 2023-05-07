import{mostrarAlerta} from './funciones.js';
import{nuevoCliente} from './API.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente)
    
    async function validarCliente(e){
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        
        const cliente = {
            nombre,
            email, 
            telefono,
            empresa
        }
        if(!validarDatos(cliente)){
            mostrarAlerta('Hay campos vacios'); //Archivo funciones.js
            return
        }
       // console.log('Validación superada');
      await nuevoCliente(cliente)
    }

    function validarDatos(datosFrom){
      return  Object.values(datosFrom).every(input => input !== '')
    }

})();