// URL base de la API de productos
const BASE_URL = 'http://localhost:5000/api/products';

// Referencias a los elementos del DOM
const list = document.getElementById('product-list');
const form = document.getElementById('product-form');

const cors = require('cors');
app.use(cors());
// CORS para permitir peticiones desde el frontend

// Obtiene y muestra la lista de productos desde la API
async function fetchProducts() {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('No se pudo obtener la lista de productos');
    const products = await res.json();
    list.innerHTML = '';
    products.forEach(prod => {
      const li = document.createElement('li');
      li.textContent = `${prod.name} - $${prod.price} `;

      // Botón Detalles
      const detailsBtn = document.createElement('button');
      detailsBtn.textContent = 'Detalles';
      detailsBtn.onclick = async e => {
        e.stopPropagation();
        await showDetails(prod.id);
      };
      li.appendChild(detailsBtn);

      // Botón Eliminar
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.onclick = async e => {
        e.stopPropagation();
        await deleteProduct(prod.id);
        fetchProducts();
      };
      li.appendChild(deleteBtn);

      list.appendChild(li);
    });
  } catch (err) {
    alert('Error al cargar productos: ' + err.message);
  }
}

// EJERCICIO 1: Crear producto
// Completa esta función para enviar los datos del formulario usando fetch POST
async function createProduct(name, price, description) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, description })
    });
    if (!res.ok) throw new Error('Error al crear producto');
  } catch (err) {
    alert('No se pudo crear el producto: ' + err.message);
  }
}

// EJERCICIO 2: Eliminar producto
// Completa esta función para eliminar un producto usando fetch DELETE
async function deleteProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error('Error al eliminar producto');
  } catch (err) {
    alert('No se pudo eliminar el producto: ' + err.message);
  }
}

// EJERCICIO 3: Ver detalles de producto
// Completa esta función para mostrar detalles usando fetch GET /products/:id
async function showDetails(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error('Error al obtener detalles del producto');
    const product = await res.json();
    alert(`Detalles del producto:\nNombre: ${product.name}\nPrecio: $${product.price}\nDescripción: ${product.description}`);
  } catch (err) {
    alert('No se pudieron obtener los detalles del producto: ' + err.message);
  }
}

// Maneja el submit del formulario para crear un producto
form.onsubmit = async e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  // Llama a la función de crear producto
  await createProduct(name, price, description);
  await fetchProducts(); // Actualiza la lista de productos
  form.reset();
  fetchProducts();
};

// Llama a la función para mostrar los productos al cargar la página
fetchProducts(); 