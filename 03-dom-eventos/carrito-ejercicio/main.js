// Asegúrate de que el HTML de los productos tenga los atributos data-id, data-name y data-price
// Ejemplo:
// <li data-id="1" data-name="Producto 1" data-price="100">
//   Producto 1 - $100 <button class="add">Agregar</button>
// </li>

// Referencias a los elementos del DOM
const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
const emptyCartBtn = document.getElementById('empty-cart');
const cartSummary = document.getElementById('cart-summary');

// Estado del carrito (array de productos)
let cart = [];

// Renderiza el carrito en el DOM y muestra el resumen
const renderCart = () => {
  cartList.innerHTML = '';
  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    // Asegúrate de convertir el precio a número
    // TODO: Agrega aquí el botón y la lógica para eliminar el producto del carrito
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    li.appendChild(btn);
    cartList.appendChild(li);

    btn.onclick = () => {
      cart.splice(idx, 1); // Elimina el producto del carrito
      renderCart();
    };
  });
  function suma(items) {
    let total = 0;
    for (let item of items) {
      total = total + parseInt(item.price);
    }
    return total;
  }
  const total = suma(cart);
  const productos = cart.length;
  // TODO: Calcula y muestra el total y la cantidad de productos
  cartSummary.textContent = 'Total: '+total+' | Productos: '+ productos};


// Maneja el evento de agregar productos al carrito usando delegación de eventos
productList.addEventListener('click', e => {
  if (e.target.classList.contains('add')) {
    const li = e.target.closest('li');
    const { id, name, price } = li.dataset;
    cart.push({ id, name, price});
    renderCart();
  }
});

// Ya no es necesario el evento de delegación para eliminar, se maneja con el botón generado en renderCart

// Maneja el evento de vaciar el carrito
emptyCartBtn.addEventListener('click', () => {
  cart = [];
  renderCart();
});

// Render inicial del carrito
renderCart();