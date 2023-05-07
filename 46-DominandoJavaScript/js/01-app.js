una('Juan')

function una(nombre){
    console.log(nombre)
}


//dos('Pablo') //Dará error de acceso e inicialización.
const dos = function(nombre){
    console.log(nombre)
}
dos('Pablo')