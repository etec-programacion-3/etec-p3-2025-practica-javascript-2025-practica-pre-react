// URL base de la API de productos
const BASE_URL = 'http://localhost:5000/products';

// Referencias a los elementos del DOM
const list = document.getElementById('product-list');
const form = document.getElementById('product-form');

// Obtiene y muestra la lista de productos desde la API usando axios
async function fetchProducts() {
  try {
    const res = await axios.get(BASE_URL); // Realiza una petición GET
    const products = res.data; // Axios retorna los datos en la propiedad 'data'
    list.innerHTML = '';
    products.forEach(prod => {
      const li = document.createElement('li');
      li.textContent = `${prod.name} - $${prod.price}`;
      // Llama a showDetails al hacer clic en el nombre del producto
      li.onclick = () => showDetails(prod.id);
      // Crea el botón de eliminar y llama a deleteProduct
      const btn = document.createElement('button');
      btn.textContent = 'Eliminar';
      btn.onclick = e => {
        e.stopPropagation(); // Evita que se dispare el evento de detalles
        deleteProduct(prod.id).then(fetchProducts);
      };
      li.appendChild(btn);
      list.appendChild(li);
    });
  } catch (err) {
    alert('Error al obtener productos');
  }
}

// EJERCICIO 1: Crear producto
// Completa esta función para enviar los datos del formulario usando axios POST
async function createProduct(name, price, description) {
  try {
    // Envía los datos como objeto a la API usando POST
    await axios.post('http://localhost:5000/products', {
      name,
      price: Number(price), // Convierte el precio a número
      description
    });
  } catch (error) {
    alert('Error al crear el producto');
  }
}

// EJERCICIO 2: Eliminar producto
// Completa esta función para eliminar un producto usando axios DELETE
async function deleteProduct(id) {
  try {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts(); // Recarga la lista después de eliminar
  } catch (error) {
    alert('Error al eliminar el producto');
  }
}

// EJERCICIO 3: Ver detalles de producto
// Completa esta función para mostrar detalles usando axios GET /products/:id
async function showDetails(id) {
  try {
    // Obtiene los detalles del producto por su id
    const res = await axios.get(`http://localhost:5000/products/${id}`);
    const prod = res.data;
    // Muestra los detalles en un alert (puedes mejorarlo en el DOM si quieres)
    alert(
      `Nombre: ${prod.name}\nPrecio: $${prod.price}\nDescripción: ${prod.description}`
    );
  } catch (error) {
    alert('Error al obtener detalles del producto');
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
  form.reset();
  fetchProducts();
};

// Llama a la función para mostrar los productos al cargar la página
fetchProducts(); 