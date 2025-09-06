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
    let amigo = document.getElementById('amigo').value;

    //Validamos que el valor no sea nulo, ni vacío 
    validarValorInput(amigo);

}

//Se crea una función para validar si el campo es nulo, vacío o no esta definido
function validarValorInput(amigo) {
    //Validamos que el campo no este vacio
    if (!regex.test(amigo.trim())){
        //Mostrar el alert
        abrirAlerta('Por favor, inserte un nombre.');
    }else{
        //Insertar el nombre en la lista
        listaAmigos.push(amigo.trim());
        //Limpiar el input
        limpiarInput();
    }
}

// Función encargada de crear y mostrar la alerta
function abrirAlerta(mensaje) {

    //Validar si el alert no existe
    if (!miAlerta) {
        // Crear div contenedor del alert
        const alert = document.createElement("div");
        // Asignar clases a la alerta
        alert.className = "alert alert-info alert-dismissable clear in";
        //Asignar Id a la alerta
        alert.setAttribute('id', 'myAlert');
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
    
  }

//Función encargada de cerrar la alerta
function cerrarAlerta() {
    // Se elimina la clase y se transparenta la alerta
    miAlerta.classList.remove("in");
    // Elimina la alerta
    setTimeout(() => {
      miAlerta.remove(); 
    }, 500);
}

// Función encargada de limpiar el campo de texto
function limpiarInput(){
    //Restablecemos el valor del objeto a vacío
    document.getElementById("amigo").value = "";
}