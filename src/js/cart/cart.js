import { cart } from "./cartState.js";
import { incrementQuantity, decrementQuantity, removeFromCart, calculateTotal, calculateSubtotal } from "./cartLogic.js";

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

function renderCart() {}

document.addEventListener("DOMContentLoaded", renderCart);