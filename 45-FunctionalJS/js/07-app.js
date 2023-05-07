const obtenerCliente = () => () => console.log('Mi nombre'); //Función dentro de otra función.

const fn = obtenerCliente();

fn();