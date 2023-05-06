 descargarNuevosClientes = ()=>{
    return new Promise(resolve =>{
        console.log('Descargando datos de CLIENTES .......');
        setTimeout(()=>{
            resolve('Se han descargando todos los clientes')
        },3000 )
    })
}
 descargarPedidos = ()=>{
    return new Promise(resolve =>{
        console.log('Descargando PEDIDOS .......');
        setTimeout(()=>{
            resolve('Se han descargando PEDIDOS')
        },2000 )
    })
}


// const app = async () =>{
//     try {
//         const clientes = await descargarNuevosClientes();
//         console.log(clientes);
//     } catch (error) {
//         console.log(error);
//     }
// }

const app = async() =>{
    try {
        const respuestas = await Promise.all([descargarPedidos(), descargarNuevosClientes()]);
        respuestas.forEach(respuesta => console.log(respuesta))
       // console.log(respuesta)
    } catch (error) {
        console.log(error)
    }

}

app();
