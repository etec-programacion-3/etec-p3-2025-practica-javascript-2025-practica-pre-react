// Módulo de tareas usando ES6+
// Provee funciones para obtener, agregar y eliminar tareas usando localStorage

const STORAGE_KEY = 'tasks'; // Clave para localStorage

// Devuelve la lista de tareas almacenadas
export function getTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Agrega una tarea nueva y la guarda en localStorage
export function addTask(task) {
  const tasks = getTasks();
  const newTask = {
    id: Date.now(), // ID único para la tarea
    text: task,
    completed: false
  };
  tasks.push(newTask);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function toggleTaskCompletion(taskId) {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
}

// Elimina una tarea por índice y actualiza localStorage
export function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
