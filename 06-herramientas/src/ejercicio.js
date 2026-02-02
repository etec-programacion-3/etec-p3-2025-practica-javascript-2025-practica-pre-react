// EJERCICIO: Instala la dependencia dayjs con npm y úsala para mostrar la fecha, con TODOs y comentarios guía.
// import dayjs from 'dayjs';
import dayjs from 'dayjs'; // Importa la librería dayjs
const fecha = document.getElementById('fecha'); // Obtiene el elemento donde se mostrará la fecha


// TODO: Usa dayjs para obtener la fecha y hora actual y mostrarla en el DOM
// const now = ...
// document.body.innerHTML = ...

const now = dayjs();
fecha.innerHTML = ' fecha y hora actual: ' + now.format("DD/MM/YYYY"); // Formatea la fecha y hora actual y la muestra en el elemento


// Puedes ejecutar este archivo con Vite y ver el resultado en el navegador 