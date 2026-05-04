const titulo = document.getElementById("titulo");
titulo.textContent =  "Hola";

const parrafo = document.getElementsByClassName("parrafo");
for (let i = 0; i < parrafo.length; i++) {
console.log(parrafo[i].textContent)};

const botn = document.getElementById("bt")

botn.addEventListener("click", function () {
    alert("click detectado");
    botn.textContent (gracias);
});


const inputTarea = document.getElementById("tareaInput");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");

botonAgregar.addEventListener("click", function() {
  const texto = inputTarea.value;

  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  const eliminarBtn = document.createElement("button");
  eliminarBtn.textContent = "Eliminar";

  eliminarBtn.addEventListener("click", function() {

    li.parentNode.removeChild(li);
  });

  li.appendChild(eliminarBtn);
  lista.appendChild(li);

  inputTarea.value = "";
});


document.querySelector('input[type="email"]').style.border = "2px solid blue";

// Agregar placeholder a contraseña
document.querySelector('input[type="password"]').placeholder = "Ingrese su nombre aquí";



const inputComentario = document.getElementById("comentarioInput");
const botonPublicar = document.getElementById("publicarBtn");
const contenedor = document.getElementById("comentarios");

botonPublicar.addEventListener("click", function() {
  const texto = inputComentario.value;

  if (texto === "") return;

  const div = document.createElement("div");
  div.textContent = texto;

  const eliminarBtn = document.createElement("button");
  eliminarBtn.textContent = "Eliminar";

  eliminarBtn.addEventListener("click", function() {
    div.remove();
  });

  div.appendChild(eliminarBtn);
  contenedor.appendChild(div);

  inputComentario.value = "";
});