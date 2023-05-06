function descargarClientes(entrada){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(entrada){
                resolve('El listado de clientes se ha descargado correctamente')
            }else{
                reject('Error de conexión')
            }
        }, 3000);
    })
}

//Async Await
//async function ejecutar(){
ejecutar = async ()=>{
    try{
        console.log(1+1);
        const respuesta = await descargarClientes("");
        console.log('2+2');
        console.log(respuesta);
        document.querySelector('.entrada').innerHTML = `<p class="dato"> ${respuesta}</p>`
        document.querySelector('.dato').classList.add('superado')
    }catch(error){
        console.log(error);
        document.querySelector('.entrada').innerHTML = `<p class="dato"> ${error}</p>`
        document.querySelector('.dato').classList.add('error')
    }
}

ejecutar();