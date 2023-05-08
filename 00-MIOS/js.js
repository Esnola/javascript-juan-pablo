const url = "https://jsonplaceholder.typicode.com";
const urlExtend = "/todos";


const datos = async function(){
    const datos = await fetch(url+urlExtend);
    const respuesta = await datos.json();
  //  const salida = res;
    console.log(respuesta)
   const container = document.createElement('div');
   container.classList.add('container')
   document.querySelector('#seccion_principal').appendChild(container)
    container.innerHTML= `<div class="datosPrincipal">
    <div class="datosEncabezado">
    <div>User ID</div><div>ID</div><div>Titulo</div>
    </div>`
   respuesta.forEach(usuario =>{
       const {userId, id, title, completed} = usuario;
       container.innerHTML += `<div class="datosDatos">
                                <div class="user-id">${userId}</div>
                                <div class="id">${id}</div>
                                <div class="title">${title}</div>
                                </div>
                                </div>`
   })
    
  /*  
    fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
*/
}

datos()