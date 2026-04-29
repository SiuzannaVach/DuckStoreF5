// 1. Cargar carrito desde localStorage
export const cart = JSON.parse(localStorage.getItem("cart")) || [];

// 2. Guardar carrito en localStorage
export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}



