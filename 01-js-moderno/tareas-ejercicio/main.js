import { getTasks, addTask, removeTask, editTask, toggleTaskCompleted } from './tareas.js';

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

function renderTasks() {
  list.innerHTML = '';
  getTasks().forEach((task, idx) => {
    const li = document.createElement('li');

    // Checkbox para marcar completada/pendiente
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.onchange = () => {
      toggleTaskCompleted(idx);
      renderTasks();
    };
    li.appendChild(checkbox);

    // Texto de la tarea
    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) {
      span.style.textDecoration = 'line-through';
    }
    li.appendChild(span);

    // Botón para editar la tarea
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.onclick = () => {
      const nuevoTexto = prompt('Edita la tarea:', task.text);
      if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
        editTask(idx, nuevoTexto);
        renderTasks();
      }
    };
    li.appendChild(editBtn);

    // Botón para eliminar la tarea
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = () => {
      removeTask(idx);
      renderTasks();
    };
    li.appendChild(btn);

    list.appendChild(li);
  });
}

form.onsubmit = e => {
  e.preventDefault();
  addTask(input.value);
  input.value = '';
  renderTasks();
};

renderTasks();