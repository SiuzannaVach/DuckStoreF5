import { products } from "./products.js";
import { createProductCard } from "./components/productCard.js";

const modal = document.querySelector("#checkout-modal");
const btnPay = document.querySelector("#btn-confirm-pay");
const btnClose = document.querySelector("#btn-close-modal");
const receiptDetails = document.querySelector("#receipt-details");
const totalDisplay = document.querySelector("#checkout-total");
const subtotalDisplay = document.querySelector("#subtotal-val");
const btnTotalVal = document.querySelector("#btn-total-val");

// SIMULACIÓN (Asegúrate de que las Qty: 2 y Qty: 1 se vean como en tu imagen)
const miCarrito = [
  {
    name: "Classic Yellow Duck",
    price: 19.98,
    qty: 2,
    image: "../assets/images/classic-yellow.png",
  },
  {
    name: "Captain Quack",
    price: 14.99,
    qty: 1,
    image: "../assets/images/captain-quack.png",
  },
];

export const abrirRecibo = () => {
  if (!receiptDetails) return;
  receiptDetails.innerHTML = "";
  let subtotal = 0;

  miCarrito.forEach((p) => {
    subtotal += p.price;
    receiptDetails.innerHTML += `
      <div class="receipt-item" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
        <div style="display:flex; align-items:center; gap:15px;">
          <img src="${p.image}" style="width:50px; border-radius:10px; object-fit:cover;">
          <div>
            <strong>${p.name}</strong><br>
            <small style="color: #666;">Qty: ${p.qty}</small>
          </div>
        </div>
        <span>$${p.price.toFixed(2)}</span>
      </div>
    `;
  });

  const tax = 2.8;
  const total = subtotal + tax;

  if (subtotalDisplay) subtotalDisplay.innerText = `$${subtotal.toFixed(2)}`;
  if (totalDisplay) totalDisplay.innerText = `$${total.toFixed(2)}`;
  if (btnTotalVal) btnTotalVal.innerText = `$${total.toFixed(2)}`;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
};

// Eventos de botones
if (btnPay) {
  btnPay.addEventListener("click", () => {
    btnPay.innerText = "Procesando...";
    setTimeout(() => {
      modal.innerHTML = `<div class="modal-content" style="text-align:center; padding:40px;">
        <div style="font-size: 60px;">🦆✨</div>
        <h2>¡Pago Exitoso!</h2>
        <p>Tus patitos están en camino.</p>
        <button onclick="location.reload()" class="pay-now-btn">Cerrar</button>
      </div>`;
    }, 1500);
  });
}

if (btnClose)
  btnClose.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

const btnVer = document.querySelector("#btn-ver-recibo");
if (btnVer) btnVer.onclick = abrirRecibo;
