// EJERCICIO: Instala la dependencia dayjs con npm y úsala para mostrar la fecha, con TODOs y comentarios guía.
// import dayjs from 'dayjs';
import dayjs from 'dayjs';

// TODO: Usa dayjs para obtener la fecha y hora actual y mostrarla en el DOM
// const now = ...
const now = dayjs();
// document.body.innerHTML = ...
document.body.innerHTML = `<h1>Fecha y hora actual: ${now.format('YYYY-MM-DD HH:mm:ss')}</h1>`;

// Puedes ejecutar este archivo con Vite y ver el resultado en el navegador 