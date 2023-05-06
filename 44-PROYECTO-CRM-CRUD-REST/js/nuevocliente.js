(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente)
    
    function validarCliente(e){
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
            console.log('Hay campos vacios')
            return
        }
        console.log('Validación superada');
        //if()
    }

    function validarDatos(datosFrom){
      return  Object.values(datosFrom).every(input => input !== '')
    }

})();