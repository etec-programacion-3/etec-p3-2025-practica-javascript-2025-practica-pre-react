// Importa las funciones del módulo de tareas
import { getTasks, addTask, removeTask, isComplete } from './tareas.js';

// Referencias a los elementos del DOM
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

// Renderiza la lista de tareas en el DOM
function renderTasks() {
  list.innerHTML = '';
  getTasks().forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task;
    // TODO: Agrega aquí el botón y la lógica para editar la tarea
    // TODO: Agrega aquí la lógica para filtrar tareas completadas/pendientes
    // Botón para eliminar la tarea
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = () => {
      removeTask(idx);
      renderTasks();
    };
    li.appendChild(btn);
    list.appendChild(li);

    const but = document.createElement('button');
    but.textContent = "editar";
    but.onclick = () => {
    const tareanueva = prompt("Editar tarea:", task);
    if (tareanueva) {
      removeTask(idx);
      addTask(tareanueva);
      renderTasks();
      }
    };
    li.appendChild(but);
    list.appendChild(li);

    const com = document.createElement('button');
    com.textContent = isComplete ? "completado" : "incompleto";

    com.onclick = () => {
      if (isComplete === false) {
        // Cambiar a completo
        com.id = "completa";
        com.textContent = "completado";
      } else {
        // Cambiar a incompleto
        com.id = "incompleta";
        com.textContent = "incompleto";
      }
    };
    li.appendChild(com);
    list.appendChild(li);
    return com;
  });
}

// Maneja el evento submit del formulario para agregar una tarea
form.onsubmit = e => {
  e.preventDefault();
  addTask(input.value);
  input.value = '';
  renderTasks();
};

// Render inicial de las tareas
renderTasks();