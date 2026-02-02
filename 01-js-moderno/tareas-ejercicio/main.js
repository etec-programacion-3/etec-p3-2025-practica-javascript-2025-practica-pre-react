// Importa las funciones del módulo de tareas
import { getTasks, addTask, removeTask, toggleTaskCompletion} from './tareas.js';

// Referencias a los elementos del DOM
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

// Renderiza la lista de tareas en el DOM
function renderTasks() {
  list.innerHTML = '';
  getTasks().forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task.text;
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

    const toggleButton = document.createElement('button');
    // Establece el texto inicial basado en el estado actual de la tarea
    toggleButton.textContent = task.completed ? "completo" : "incompleto";

    toggleButton.onclick = () => {
    // Alterna el estado de la tarea
    toggleTaskCompletion(task.id);
  
    // Actualiza el texto del botón
    toggleButton.textContent = task.completed ? "incompleto" : "completo";
  
    // Re-renderiza las tareas para reflejar los cambios
    renderTasks();
};

li.appendChild(toggleButton);
list.appendChild(li);

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