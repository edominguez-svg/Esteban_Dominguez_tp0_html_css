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

const tarea = document.getElementById("input");
const agregar = document.getElementById("agragar");
const lista = document.getElementById("lista");


