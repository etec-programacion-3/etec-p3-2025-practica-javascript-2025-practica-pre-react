import { getTasks, addTask, removeTask, editTask } from './tareas.js';

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

function renderTasks() {
  list.innerHTML = '';
  const filtro = document.getElementById('filtro').value;
  let tareas = getTasks();
  if (filtro === 'completadas') tareas = tareas.filter(t => t.completada);
  if (filtro === 'pendientes') tareas = tareas.filter(t => !t.completada);

  tareas.forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task.texto;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.onclick = () => {
      li.innerHTML = '';
      const inputEdit = document.createElement('input');
      inputEdit.value = task.texto;
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Guardar';
      saveBtn.onclick = () => {
        editTask(idx, inputEdit.value); // O busca el índice real
        renderTasks();
      };
      li.appendChild(inputEdit);
      li.appendChild(saveBtn);
    };
    li.appendChild(editBtn);

    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = () => {
      removeTask(idx); // O busca el índice real
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

document.getElementById('filtro').onchange = renderTasks;
renderTasks();