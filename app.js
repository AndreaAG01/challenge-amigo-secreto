// En este archivo encontraras la lógica del programa y se realiza una documentación para facilitar el entendimiento del código.

// Se crea la variable encargada de almacenar los nombres de los amigos
// Tipo: Array
let listaAmigos = [];
//Creo una variable para almacenar el objeto alerta
let miAlerta = document.getElementById("myAlert");
const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

//Se crea una función que se encargue de añadir los amigos a la variable listaAmigos
function agregarAmigo() {
  //Inicializamos una variable para almacenar el valor del input
  //Capturamos el valor del input por Id (amigo)
  let amigo = document.getElementById("amigo").value;

  //Validamos que el valor no sea nulo, ni vacío
  validarValorInput(amigo);

};

//Se crea una función para validar si el campo es nulo, vacío o no esta definido
function validarValorInput(amigo) {
  //Validamos que el campo no este vacio
  if (!regex.test(amigo.trim())) {
    //Mostrar el alert
    abrirAlerta("Por favor, inserte un nombre.");
  } else {
    //Insertar el nombre en la lista
    listaAmigos.push(amigo.trim());
    // Actualizar lista de amigos
    actualizarListaAmigos();
    //Limpiar el input
    limpiarInput();
  };
  
};

// Función encargada de crear y mostrar la alerta
function abrirAlerta(mensaje) {
  //Validar si el alert no existe
  if (!miAlerta) {
    // Crear div contenedor del alert
    const alert = document.createElement("div");
    // Asignar clases a la alerta
    alert.className = "alert alert-info alert-dismissable clear in";
    //Asignar Id a la alerta
    alert.setAttribute("id", "myAlert");
    //Insertar estructura HTML de la alerta
    alert.innerHTML = `
            <div class="text">
                <strong>Advertencia</strong>
                <span>${mensaje}</span>
            </div>
            <button type="button" aria-label="close" class="close" onclick="cerrarAlerta()">
                <span aria-hidden="true">×</span>
            </button>
        `;

    // Insertar en el contenedor
    document.getElementById("demo-preview").appendChild(alert);
    // Eliminar la alerta después de 3 segundos
    setTimeout(() => {
      alert.remove(); // Elimina la alerta
    }, 3000);
  };
};

//Función encargada de cerrar la alerta
function cerrarAlerta() {
  // Se elimina la clase y se transparenta la alerta
  miAlerta.classList.remove("in");
  // Elimina la alerta
  setTimeout(() => {
    miAlerta.remove();
  }, 500);

};

// Función encargada de limpiar el campo de texto
function limpiarInput() {
  //Restablecemos el valor del objeto a vacío
  document.getElementById("amigo").value = "";
};

//Función para actualizar lista de amigos
function actualizarListaAmigos() {
  //Obtener el elemento lista
  let lista = document.getElementById("listaAmigos");
  // Limpiar la lista existente
  lista.innerHTML = "";
  //Iterar sobre el arreglo
  for (let i = 0; i < listaAmigos.length; i++) {
    //Se crea el objeto li
    let li = document.createElement("li");
    //Se asigna el contenido al li
    li.textContent = listaAmigos[i];
    //Agregar elementos a la lista
    lista.appendChild(li);
  };
};

//Función para obtener el amigo secreto
function sortearAmigo(){
    //Validamos que haya amigos disponibles
    if(listaAmigos.length !== 0){
        //Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length)+1;
        //Obtener el nombre sorteado
        let amigoSecreto = listaAmigos[indiceAleatorio];
        //Obtener la lista resultado
        let resultado = document.getElementById('resultado');
        //Se crea el objeto li y se le asigna el valor de amigoSecreto
        let li = document.createElement("li");
        li.textContent = amigoSecreto;
        //Mostrar el resultado
        resultado.appendChild(li);
    }
};