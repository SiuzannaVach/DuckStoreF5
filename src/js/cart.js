// 1. Seleccionamos los elementos del HTML
const modal = document.querySelector("#checkout-modal");
const btnPay = document.querySelector("#btn-confirm-pay");
const btnClose = document.querySelector("#btn-close-modal");
const receiptDetails = document.querySelector("#receipt-details");
const totalDisplay = document.querySelector("#checkout-total");
const subtotalDisplay = document.querySelector("#subtotal-val");
const btnTotalVal = document.querySelector("#btn-total-val");

// 2. SIMULACIÓN: Productos con imagen
const miCarrito = [
  {
    name: "Classic Yellow Duck",
    price: 9.99,
    image: "../assets/images/classic-yellow.png",
  },
  {
    name: "Captain Quack",
    price: 14.99,
    image: "../assets/images/captain-quack.png",
  },
];

// 3. Función para abrir el modal
export const abrirRecibo = () => {
  if (!receiptDetails) return;
  receiptDetails.innerHTML = "";
  let subtotal = 0;

  miCarrito.forEach((producto) => {
    subtotal += producto.price;
    receiptDetails.innerHTML += `
      <div class="receipt-item" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
        <div style="display:flex; align-items:center; gap:15px;">
          <img src="${producto.image}" style="width:50px; height:50px; border-radius:10px; object-fit:cover;">
          <strong>${producto.name}</strong>
        </div>
        <span>$${producto.price.toFixed(2)}</span>
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

// 4. BOTÓN: Confirmar Pago (BLOQUE ACTUALIZADO)
if (btnPay) {
  btnPay.addEventListener("click", () => {
    // Simulamos carga
    btnPay.innerText = "Procesando...";
    btnPay.style.opacity = "0.7";
    btnPay.style.pointerEvents = "none";

    setTimeout(() => {
      // Mensaje de éxito detallado en el DOM
      modal.innerHTML = `
        <div class="modal-content" style="text-align:center; padding:40px;">
          <div style="font-size: 60px; margin-bottom: 20px;">🦆✨</div>
          <h2 style="color: #d4a017; margin-bottom: 10px;">¡Pago Exitoso!</h2>
          <p style="color: #666; margin-bottom: 20px;">Tus patitos están preparando las maletas para su nueva bañera.</p>
          <button id="btn-success-close" class="pay-now-btn">Volver a la tienda</button>
        </div>
      `;

      // Evento para limpiar y cerrar todo
      document
        .querySelector("#btn-success-close")
        .addEventListener("click", () => {
          document.body.style.overflow = "auto";
          location.reload(); // Limpia el carrito al recargar
        });
    }, 1500);
  });
}

// 5. BOTÓN: Cancelar
if (btnClose) {
  btnClose.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

// 6. Evento para el botón de "Ver Recibo"
const botonVerRecibo = document.querySelector("#btn-ver-recibo");
if (botonVerRecibo) {
  botonVerRecibo.addEventListener("click", () => {
    abrirRecibo();
  });
}
