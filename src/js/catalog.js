import { products } from "./products.js";
import { createProductCard } from "./components/productCard.js";

const productsContainer = document.querySelector("#products-container");
const filterButtons = document.querySelectorAll(".filter-btn");

const renderProducts = (list) => {
  productsContainer.innerHTML = list.map((p) => createProductCard(p)).join("");
};

const filterByCategory = (category) => {
  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);
  renderProducts(filtered);
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterByCategory(e.currentTarget.dataset.category);
  });
});

// Inicializar catálogo
renderProducts(products);
