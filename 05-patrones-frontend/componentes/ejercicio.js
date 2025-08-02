// Componente Tarjeta: genera un elemento visual para mostrar información
export function Tarjeta({ titulo, contenido }) {
  const div = document.createElement('div');
  div.className = 'tarjeta';
  div.innerHTML = `<h2>${titulo}</h2><p>${contenido}</p>`;
  return div;
}

// EJERCICIO: Completa el componente Formulario para que sea reutilizable
// export function Formulario({ onSubmit }) { ... }
// Componente Formulario: genera un formulario para agregar nuevas tareas
export function Formulario({ onSubmit }) {
  const form = document.createElement('form');
  form.id = 'task-form';
  form.innerHTML = `
    <input type="text" id="task-input" placeholder="Nueva tarea" required>
    <button type="submit">Agregar</button>
  `;
  
  form.onsubmit = e => {
    e.preventDefault();
    const input = form.querySelector('#task-input');
    onSubmit(input.value);
    input.value = '';
  };
  
  return form;
}

// Montaje de componentes en la página
const app = document.getElementById('app');
app.appendChild(Formulario({ onSubmit: mostrarTarjeta }));

// EJERCICIO: Crea una función mostrarTarjeta que reciba un dato y agregue una tarjeta al DOM
// function mostrarTarjeta(dato) { ... }
export function mostrarTarjeta(dato) {
  const tarjeta = Tarjeta({ titulo: 'Nueva Tarjeta', contenido: dato });
  const app = document.getElementById('app');
  app.appendChild(tarjeta);
}

// EJERCICIO: Monta el formulario en la página y pásale la función mostrarTarjeta como callback
// app.appendChild(Formulario({ onSubmit: mostrarTarjeta })); 
// Monta el formulario en la página y pasa la función mostrarTarjeta como callback
app.appendChild(Formulario({ onSubmit: mostrarTarjeta }));