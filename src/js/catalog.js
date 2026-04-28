import { products } from "./products.js";
import { createProductCard } from "./components/productCard.js";

const productsContainer = document.querySelector("#products-container");
const filterButtons = document.querySelectorAll(".filter-btn");

const renderProducts = (list) => {
  if (productsContainer) {
    productsContainer.innerHTML = list
      .map((p) => createProductCard(p))
      .join("");
  }
};

const filterByCategory = (category) => {
  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);
  renderProducts(filtered);
};

// Función para pintar el botón
const paintButton = (btn) => {
  // Ponemos todos en gris
  filterButtons.forEach((b) => {
    b.style.setProperty("background-color", "#f0f0f0", "important");
    b.style.setProperty("color", "#333", "important");
  });
  // Ponemos el seleccionado en amarillo
  btn.style.setProperty("background-color", "#d4a017", "important");
  btn.style.setProperty("color", "white", "important");
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clickedBtn = e.currentTarget;
    paintButton(clickedBtn); // Cambia el color
    filterByCategory(clickedBtn.dataset.category); // Filtra
  });
});

// Al cargar la página:
renderProducts(products);
const allBtn = document.querySelector('[data-category="all"]');
if (allBtn) paintButton(allBtn);
