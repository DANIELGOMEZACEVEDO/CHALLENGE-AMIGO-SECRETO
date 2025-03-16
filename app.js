// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creacion del array
let amigos = [];


// funcion que agrega amigos a una lista
function agregarAmigos() {
    console.log("boton presionado")
    const input = document.getElementById('amigos');
    const nombre = input.value.trim();

    // corroborar que no se añada un valor vacio
    if(nombre === '') {
        alert('Por favor ingresa un nombre valido.')
        return;
    }

    amigos.push(nombre);
    actualizarlista();
    input.value = '';

}

// funcion que actualiza los nombres en el html
function actualizarlista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((nombre,index) => {
        const item = document.createElement('li');
        item.textContent = nombre;
        lista.appendChild(item);

    })
}

// funcion que selecciona un amigo al azar
function sortearAmigo() {
    if(amigos.length === 0) {
        alert('la lista esta vacia. agregue nombres para realizar el sorteo. ');
        return;
    }

    const aleatorio = Math.floor(Math.random()* amigos.length);
    const seleccion_amigo = amigos[aleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es: ${seleccion_amigo}`;
    
}

//funcion que reinicia el juego poniendo todo a valores iniciales
    function reiniciar() {

        amigos = [];
        actualizarlista();
        document.getElementById('resultado').innerHTML = '';

    }