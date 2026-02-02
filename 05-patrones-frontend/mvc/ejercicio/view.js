// Vista: Se encarga de la presentación y la interacción con el usuario
export class TaskView {
  constructor() {
    // Referencias a los elementos del DOM
    this.list = document.getElementById('task-list');
    this.form = document.getElementById('task-form');
    this.input = document.getElementById('task-input');
    this.feedback = document.getElementById('feedback');
  }

  // Renderiza la lista de tareas en el DOM
  render(tasks) {
    this.list.innerHTML = '';
    tasks.forEach((task, idx) => {
      const li = document.createElement('li');
      li.textContent = task;

      // Botón eliminar
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.className = 'eliminao';
      btnEliminar.dataset.idx = idx;

      // Botón editar
      const btnEditar = document.createElement('button');
      btnEditar.textContent = 'Editar';
      btnEditar.className = 'editao';
      btnEditar.dataset.idx = idx;

      li.appendChild(btnEliminar);
      li.appendChild(btnEditar);
      this.list.appendChild(li);
    });
  }

  // Asocia el evento de agregar tarea al formulario
  bindAddTask(handler) {
    this.form.onsubmit = e => {
      e.preventDefault();
      if (this.input.value.length > 30) {
        this.feedback.textContent = 'La tarea no puede tener más de 30 caracteres';
        return;
      }
      this.feedback.textContent = ''; // Limpia el feedback
      handler(this.input.value); // Llama al controlador con el valor ingresado
      this.input.value = '';
    };
  }

  // asocia el evento de eliminar tarea a la lista
  bindRemoveTask(handler) {
    if (!this._delegatedHandler) {
      this._delegatedHandler = (e) => {
        if (e.target.className === 'eliminao') {
          const idx = Number(e.target.dataset.idx);
          handler(idx);
        }
      };
      this.list.addEventListener('click', this._delegatedHandler);
    }
  }

  // asocia el evento de editar tarea a la lista
  bindEditTask(handler) {
    if (!this._delegatedEditHandler) {
      this._delegatedEditHandler = (e) => {
        if (e.target.className === 'editao') {
          const idx = Number(e.target.dataset.idx);
          const li = e.target.parentElement;
          const currentTask = li.firstChild.textContent;
          const newTask = prompt('Editar tarea:', currentTask);
          if (newTask) {
            handler(idx, newTask);
          }
        }
      };
      this.list.addEventListener('click', this._delegatedEditHandler);
    }
  }
}