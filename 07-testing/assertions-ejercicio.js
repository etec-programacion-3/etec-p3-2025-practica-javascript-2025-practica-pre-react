 // Implementación a testear
function totalCarrito(carrito) {
  return carrito.reduce((acc, prod) => acc + prod.precio * (prod.cantidad || 1), 0);
}

// Pruebas
console.assert(
  totalCarrito([{ precio: 10, cantidad: 2 }, { precio: 5, cantidad: 1 }]) === 25,
  'Debe devolver 25'
);

console.assert(
  totalCarrito([{ precio: 100 }]) === 100,
  'Si no se indica cantidad, debe asumir 1'
);

console.assert(
  totalCarrito([]) === 0,
  'Un carrito vacío debe dar total 0'
);

console.assert(
  totalCarrito([{ precio: 10, cantidad: 0 }]) === 0,
  'Cantidad 0 debe dar total 0'
);
