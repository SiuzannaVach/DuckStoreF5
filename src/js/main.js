import { products } from "./data.js";

console.log("Catálogo cargado:", products);

// 1. Seleccionamos el lugar donde se mostrarán los patitos
// Asegúrate de que en tu catalog.html exista un <section id="products-container"></section>
const productsContainer = document.querySelector("#products-container");

// 2. Creamos la función de renderizado
const renderProducts = (list) => {
  // Limpiamos el contenedor por si acaso
  productsContainer.innerHTML = "";

  // Recorremos el array y generamos el HTML
  const html = list
    .map(
      (product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <button class="btn-add">Añadir al carrito</button>
      </div>
    </article>
  `,
    )
    .join(""); // El join evita que aparezcan comas entre las tarjetas

  // 3. Insertamos todo el HTML generado de un solo golpe
  productsContainer.innerHTML = html;
};

// 4. Ejecutamos la función al cargar la página
renderProducts(products);
