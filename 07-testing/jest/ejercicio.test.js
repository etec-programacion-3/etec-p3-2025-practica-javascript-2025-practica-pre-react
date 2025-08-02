// Ejercicio: pruebas unitarias con Jest

function suma(a, b) {
  return a + b;
}

// EJERCICIO: Implementa la función totalCarrito que reciba un array de productos y devuelva el total
function totalCarrito(carrito) {
  return carrito.reduce((total, prod) => total + prod.precio * (prod.cantidad || 1), 0);
}


test('suma 2 + 2 es 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('suma -1 + 1 es 0', () => {
  expect(suma(-1, 1)).toBe(0);
});

// EJERCICIO: Agrega tests para totalCarrito
test('suma 2 + 2 es 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('suma -1 + 1 es 0', () => {
  expect(suma(-1, 1)).toBe(0);
});

test('totalCarrito con productos y cantidades', () => {
  const carrito = [
    { nombre: 'Pan', precio: 100, cantidad: 2 },
    { nombre: 'Leche', precio: 150, cantidad: 1 }
  ];
  expect(totalCarrito(carrito)).toBe(350);
});

test('totalCarrito sin cantidades explícitas', () => {
  const carrito = [
    { nombre: 'Galletas', precio: 50 },
    { nombre: 'Jugo', precio: 120 }
  ];
  expect(totalCarrito(carrito)).toBe(170);
});
