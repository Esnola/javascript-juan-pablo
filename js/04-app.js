 descargarNuevosClientes = ()=>{
    return new Promise(resolve =>{
        console.log('Descargando datos de clientes .......');
        setTimeout(()=>{
            resolve('Se han descargando todos los clientes')
        },5000 )
    })
}
 descargarPedidos = ()=>{
    return new Promise(resolve =>{
        console.log('Descargando Pedidos .......');
        setTimeout(()=>{
            resolve('Se han descargando PEDIDOS')
        },3000 )
    })
}


const app = async () =>{
    try {
        const clientes = await descargarNuevosClientes();
        console.log(clientes);
    } catch (error) {
        console.log(error);
    }
}

app();

const app2 = async () =>{
    try {
        const clientes = await descargarPedidos();
        console.log(clientes);
    } catch (error) {
        console.log(error);
    }
}

app2();