let tareas = [];

const input = document.getElementById("tareaInput");
const btn = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");
const error = document.getElementById("error");

btn.addEventListener("click", agregarTarea);

function agregarTarea() {
    const texto = input.value.trim();

    if (texto === "") {
        error.textContent = "No podés agregar una tarea vacía";
        return;
    }

    if (texto.length > 50) {
        error.textContent = "Máximo 50 caracteres";
        return;
    }

    error.textContent = "";

    const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        completada: false,
        fecha: new Date().toLocaleString()
    };

    tareas.push(nuevaTarea);
    input.value = "";

    render();
}

function render() {
    lista.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");

        if (tarea.completada) {
            li.classList.add("completada");
        }

        const span = document.createElement("span");
        span.textContent = tarea.texto + " (" + tarea.fecha + ")";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;

        checkbox.addEventListener("change", function() {
            tareas[index].completada = this.checked;
            render();
        });

        li.appendChild(span);
        li.appendChild(checkbox);

        lista.appendChild(li);
    });

    actualizarContadores();
}

function actualizarContadores() {
    const total = tareas.length;
    const completadas = tareas.filter(t => t.completada).length;
    const pendientes = total - completadas;

    document.getElementById("total").textContent = total;
    document.getElementById("completadas").textContent = completadas;
    document.getElementById("pendientes").textContent = pendientes;
}