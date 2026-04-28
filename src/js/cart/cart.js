import { cart } from "./cartState.js";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  calculateTotal,
  calculateSubtotal,
} from "./cartLogic.js";

function renderCartItem(item) {
  return `
    <article class="cart-item">
      <div class="cart-item__image-wrapper">
        <img class="cart-item__image" src="${item.image}" alt="${item.name}">
        <button class="cart-item__remove-btn" data-id="${item.id}">
          <img src="../assets/icons/bin.svg" alt="">
        </button>
      </div>

      <div class="cart-item__info">
        <h2 class="cart-item__title">${item.name}</h2>
        <p class="cart-item__price">$${item.price}</p>

        <div class="cart-item__quantity">
          <button class="cart-item__btn cart-item__btn--decrease" data-id="${item.id}">−</button>
          <span class="cart-item__quantity-value">${item.quantity}</span>
          <button class="cart-item__btn cart-item__btn--increase" data-id="${item.id}">+</button>
        </div>

        <div class="cart-item__subtotal">
          <p class="cart-item__subtotal-value">$${calculateSubtotal(item.id)}</p>
          <p class="cart-item__subtotal-label">Subtotal</p>
        </div>
      </div>
    </article>
  `;
}

function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");
  const subtotalElement = document.getElementById("cart-subtotal");

  // 1. Si no hay contenedor, salimos de la función
  if (!cartContainer) return;

  // 2. Limpiar el contenido actual del carrito
  cartContainer.innerHTML = "";

  // 3. Si el carrito está vacío, mostraremos un mensaje
  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="cart__empty">Your cart is empty</p>`;
    if (totalElement) totalElement.textContent = "$0.00";
    if (subtotalElement) subtotalElement.textContent = "$0.00";
    return;
  }

  // 4. Pintar cada producto del carrito
  cart.forEach((item) => {
    cartContainer.innerHTML += renderCartItem(item);
  });

  // 5. Actualizar subtotal y total
  const total = calculateTotal();
  if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
  if (subtotalElement) subtotalElement.textContent = `$${total.toFixed(2)}`;
}

function setupCartEvents() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;

  cartContainer.addEventListener("click", (event) => {
    const target = event.target;

    // Si se hace clic en el <img> dentro del botón
    const button = target.closest("button");
    if (!button) return;

    const productId = Number(button.dataset.id);
    if (!productId) return;

    // Botón aumentar
    if (button.classList.contains("cart-item__btn--increase")) {
      incrementQuantity(productId);
      renderCart();
      return;
    }

    // Botón disminuir
    if (button.classList.contains("cart-item__btn--decrease")) {
      decrementQuantity(productId);
      renderCart();
      return;
    }

    // Botón eliminar
    if (button.classList.contains("cart-item__remove-btn")) {
      removeFromCart(productId);
      renderCart();
      return;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  setupCartEvents();
});
