import { cart } from "../cart/cartState.js";
import { calculateTotal, calculateSubtotal } from "../cart/cartLogic.js";

const receiptDetails = document.querySelector("#receipt-details");
const subtotalDisplay = document.querySelector("#subtotal-val");
const totalDisplay = document.querySelector("#checkout-total");
const btnTotalVal = document.querySelector("#btn-total-val");
const btnPay = document.querySelector("#btn-confirm-pay");

// Renderizar productos del carrito
function renderReceipt() {
  if (!receiptDetails) return;

  receiptDetails.innerHTML = "";

  cart.forEach((item) => {
    const subtotal = calculateSubtotal(item.id);

    receiptDetails.innerHTML += `
      <article class="product-card">
        <div class="product-card__left">
          <img src="${item.image}" alt="${item.name}" class="product-card__img" />
          <h2 class="product-card__name">${item.name}</h2>
        </div>

        <div class="product-card__right">
          <span class="product-card__qty">Qty: ${item.quantity}</span>
          <span class="product-card__price">$${subtotal.toFixed(2)}</span>
        </div>
      </article>
    `;
  });

  const subtotal = calculateTotal();
  const tax = 2.8;
  const total = subtotal + tax;

  subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
  totalDisplay.textContent = `$${total.toFixed(2)}`;
  btnTotalVal.textContent = `$${total.toFixed(2)}`;
}

// Evento del botón Pagar
if (btnPay) {
  btnPay.addEventListener("click", () => {
    // Vaciar carrito
    cart.length = 0;
    localStorage.setItem("cart", JSON.stringify([]));

    // Redirigir a success
    window.location.href = "./success.html";
  });
}

// Inicializar
renderReceipt();
