// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//1.AGREGAR NOMBRES.

function agregarAmigo()
{
    //Guardamos el nombre capturado en una variable.
    let nombre = document.querySelector(".input-name").value; 

    //2.VALIDAMOS LA ENTRADA.
    if (nombre) { // Si el input no está vacío
    
    //Lo agregamos a la lista.
    amigos.push(nombre);
    
    console.log(amigos);

    //Actualizamos la lista ul con el nuevo amigo agregado.
    let lista = document.getElementById("listaAmigos");
    // Eliminar solo los <li>(Limpiar la lista antes de actualizarla.)
    let elementosLi = lista.querySelectorAll("li");
    elementosLi.forEach(li => li.remove());

    //Recorremos la lista y agregamos cada elemento a la lista ul.
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigo; // Agregar el texto del amigo
        lista.appendChild(li); // Agregar el <li> al <ul>
      });

    }else{
        alert("Por favor, ingresa un nombre válido(No vacío)."); // Mostrar alerta si el input está vacío
    }
    
}




