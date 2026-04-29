import { cart } from "../cart/cartState.js";
import { calculateTotal, calculateSubtotal } from "../cart/cartLogic.js";

const receiptDetails = document.querySelector("#receipt-details");
const subtotalDisplay = document.querySelector("#subtotal-val");
const totalDisplay = document.querySelector("#checkout-total");
const btnTotalVal = document.querySelector("#btn-total-val");
const btnPay = document.querySelector("#btn-confirm-pay");

function renderReceipt() {
  if (!receiptDetails) return;

  receiptDetails.innerHTML = "";

  cart.forEach((item) => {
    const subtotal = calculateSubtotal(item.id);

    receiptDetails.innerHTML += `
  <article class="review-order-item">
    <div class="review-order__image-wrapper">
      <img class="review-order__image" src="${item.image}" alt="${item.name}">
    </div>

    <div class="review-order__text">
      <h2 class="review-order__item-title">${item.name}</h2>
    </div>

    <div class="review-order__bottom-row">
      <div class="review-order__quantity">
        <span class="review-order__quantity-value">Qty: ${item.quantity}</span>
      </div>

      <div class="review-order__subtotal">
        <p class="review-order__subtotal-value">$${subtotal.toFixed(2)}</p>
        <p class="review-order__subtotal-label">Subtotal</p>
      </div>
    </div>
  </article>
`;
  });

  const subtotal = calculateTotal();

  subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
  totalDisplay.textContent = `$${total.toFixed(2)}`;
  btnTotalVal.textContent = `$${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderReceipt();

  if (btnPay) {
    btnPay.addEventListener("click", () => {
      cart.length = 0;
      localStorage.setItem("cart", JSON.stringify([]));
      window.location.href = "./success.html";
    });
  }
});
