// Vista: Se encarga de la presentación y la interacción con el usuario
export class TaskView {
  constructor() {
    // Referencias a los elementos del DOM
    this.list = document.getElementById('task-list');
    this.form = document.getElementById('task-form');
    this.input = document.getElementById('task-input');
  }

  // Renderiza la lista de tareas en el DOM
  render(tasks) {
    this.list.innerHTML = '';
    tasks.forEach((task, idx) => {
      const li = document.createElement('li');
      li.textContent = task;
      // TODO: Agrega aquí el botón y la lógica para eliminar la tarea
      const btnDel = document.createElement('button');
      btnDel.textContent = 'Borrar';
      btnDel.classList.add('delete');
      btnDel.dataset.index = idx;
      li.appendChild(btnDel);
      this.list.appendChild(li);
      // TODO: Agrega aquí el botón y la lógica para editar la tarea
      const btnEdit = document.createElement('button');
      btnEdit.textContent = 'Editar';
      btnEdit.dataset.index = idx;
      btnEdit.classList.add('edit');
      li.appendChild(btnEdit);
      // Agrega el botón de editar a la lista
      li.appendChild(btnEdit);
      // Finalmente, agrega el elemento li a la lista
      this.list.appendChild(li);
    });
  }

  // Asocia el evento de agregar tarea al formulario
  bindAddTask(handler) {
    this.form.onsubmit = e => {
      e.preventDefault();
      handler(this.input.value); // Llama al controlador con el valor ingresado
      this.input.value = '';
    };
  }

  // TODO: Asocia el evento de eliminar tarea a la lista
  bindRemoveTask(handler) {
    this.list.addEventListener('click', e => {
      if (e.target.classList.contains('delete')) {
        const index = parseInt(e.target.dataset.index);
        handler(index); // Llama al controlador con el índice de la tarea a eliminar
      }
    });
  }
  // TODO: Asocia el evento de editar tarea a la lista

  bindEditTask(handler) {
    this.list.addEventListener('click', e => {
      if (e.target.classList.contains('edit')) {
        const index = parseInt(e.target.dataset.index);
        const nuevoTexto = prompt('Editar tarea:', this.list.children[index].firstChild.textContent);
        if (nuevoTexto) {
          handler(index, nuevoTexto);
        }
      }
    });
  }
}