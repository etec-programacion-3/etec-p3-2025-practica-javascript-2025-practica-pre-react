// Modelo: Maneja los datos y la lógica de negocio de las tareas
export class TaskModel {
  constructor() {
    // Inicializa las tareas desde localStorage o como array vacío
    this.tasks = JSON.parse(localStorage.getItem('mvc-tasks')) || [];
  }

  // Devuelve una copia de la lista de tareas
  getTasks() {
    return [...this.tasks];
  }

  // Agrega una nueva tarea y guarda el estado y una validacion de 30 caracteres
  addTask(task) {
    if (task.length > 30) {
      throw new Error("La tarea no puede tener más de 30 caracteres");
    }else{
      this.tasks.push(task);
      this._commit();
    }
    
  }

  // Elimina una tarea por índice y guarda el estado
  removeTask(index) {
    this.tasks.splice(index, 1);
    this._commit();
  }

    // Nuevo método para editar una tarea
  editTask(index, newTask) {
    this.tasks[index] = newTask;
    this._commit();
  }

  // Guarda el estado actual de las tareas en localStorage
  _commit() {
    localStorage.setItem('mvc-tasks', JSON.stringify(this.tasks));
  }
} 