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
async function ejecutar(){
    try{
        console.log(1+1);
        const respuesta = await descargarClientes("cosa");
        console.log('2+2');
        console.log(respuesta);
        document.querySelector('.dato').classList.add('superado')
        document.querySelector('.dato').innerHTML = respuesta
    }catch(error){
        console.log(error);
        document.querySelector('.dato').classList.add('error')
        document.querySelector('.dato').innerHTML =error
    }
}

ejecutar();