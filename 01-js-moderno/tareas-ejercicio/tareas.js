// Módulo de tareas usando ES6+
// Provee funciones para obtener, agregar y eliminar tareas usando localStorage

const STORAGE_KEY = 'tasks'; // Clave para localStorage

// Devuelve la lista de tareas almacenadas
export function getTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Agrega una tarea nueva y la guarda en localStorage
export function addTask(taskText) {
  const tasks = getTasks();
  tasks.push({text: taskText, completed: false});
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Elimina una tarea por índice y actualiza localStorage
export function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
} 

// Edita el texto de una tarea
export function editTask(index, newText) {
  const tasks = getTasks();
  if (tasks[index]) {
    tasks[index].text = newText;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
}

// Cambia el estado de completado de una tarea
export function toggleTaskCompleted(index) {
  const tasks = getTasks();
  if (tasks[index]) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
}