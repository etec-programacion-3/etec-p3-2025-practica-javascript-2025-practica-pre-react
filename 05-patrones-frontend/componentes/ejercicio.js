// Componente Tarjeta: genera un elemento visual para mostrar información
export function Tarjeta({ titulo, contenido }) {
  const div = document.createElement('div');
  div.className = 'tarjeta';
  div.innerHTML = `<h2>${titulo}</h2><p>${contenido}</p>`;
  return div;
}

// EJERCICIO: Completa el componente Formulario para que sea reutilizable
// export function Formulario({ onSubmit }) { ... }

export function Formulario({ onSubmit }) {
  const form = document.createElement('form');
  form.className = 'formulario premium';

  const data = document.createElement('input');
  data.type = 'text';
  data.placeholder = 'dataso';
  data.required = true;

  const agregardata = document.createElement('button');
  agregardata.type = 'submit';
  agregardata.textContent = 'Agregar Tarjeta';

  form.appendChild(data);
  form.appendChild(agregardata);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    onSubmit({
      titulo: "Dataso fue enviado",
      contenido: data.value
    });
    form.reset();
  });

  return form;
};

// Montaje de componentes en la página
const app = document.getElementById('app');

// EJERCICIO: Crea una función mostrarTarjeta que reciba un dato y agregue una tarjeta al DOM
// function mostrarTarjeta(dato) { ... }
function mostrarTarjeta(dato) {
  const tarjeta = Tarjeta(dato);
  app.appendChild(tarjeta);
};

// EJERCICIO: Monta el formulario en la página y pásale la función mostrarTarjeta como callback
// app.appendChild(Formulario({ onSubmit: mostrarTarjeta })); 
app.appendChild(Formulario({
  onSubmit: mostrarTarjeta
}));