import { products } from "../components/products.js";
import { createProductDetail } from "../components/createProductDetail.js";
import { addToCart } from "../cart/cartLogic.js";

const id = Number(new URLSearchParams(window.location.search).get("id"));
const product = products.find((p) => p.id === id);

document.querySelector("#product-detail-container").innerHTML =
  createProductDetail(product);

let quantity = 1;

const qtyValue = document.querySelector("#qty-value");
const btnMinus = document.querySelector("#qty-minus");
const btnPlus = document.querySelector("#qty-plus");

// Listeners
btnMinus.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    qtyValue.textContent = quantity;
  }
});

btnPlus.addEventListener("click", () => {
  quantity++;
  qtyValue.textContent = quantity;
});

document
  .querySelector("#add-to-cart-btn")
  .addEventListener("click", () => addToCart(product.id, quantity));
