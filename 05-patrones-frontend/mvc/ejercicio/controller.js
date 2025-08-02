// Controlador: Conecta el modelo y la vista, y gestiona la lógica de la app
import { TaskModel } from './model.js';
import { TaskView } from './view.js';

class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Renderiza la vista inicial con las tareas actuales
    this.view.render(this.model.getTasks());
    // Asocia el evento de agregar tarea
    this.view.bindAddTask(this.handleAddTask);
    // TODO: Asocia los eventos de eliminar y editar tarea
    this.view.bindRemoveTask(this.handleRemoveTask);
    this.view.bindEditTask(this.handleEditTask);
    // Renderiza la vista con las tareas actuales
  }

  // Maneja el evento de agregar tarea
  handleAddTask = task => {
    this.model.addTask(task); // Actualiza el modelo
    this.view.render(this.model.getTasks()); // Actualiza la vista
  };

  // TODO: Maneja el evento de eliminar tarea
  handleRemoveTask = idx => {
    this.model.removeTask(idx); // Actualiza el modelo
    this.view.render(this.model.getTasks()); // Actualiza la vista
  }
  
  // TODO: Maneja el evento de editar tarea
  handleEditTask = idx => {
    const nuevoTexto = prompt('Editar tarea:', this.model.getTasks()[idx]);
    if (nuevoTexto) {
      this.model.tasks[idx] = nuevoTexto; // Actualiza la tarea en el modelo
      this.model._commit(); // Guarda el estado
      this.view.render(this.model.getTasks()); // Actualiza la vista
    }
  }
  
}

// Instancia el controlador con el modelo y la vista
new TaskController(new TaskModel(), new TaskView()); 