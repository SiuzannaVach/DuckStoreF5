import { products } from "./products.js";

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

// ... (tu código anterior de renderProducts y la selección del contenedor)

// 1. Seleccionamos todos los botones de filtro
const filterButtons = document.querySelectorAll(".filter-btn");

// 2. Creamos la función de filtrado
const filterByCategory = (category) => {
  // Si es 'all', mostramos todos. Si no, filtramos por la propiedad 'category'
  const filteredList =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  // Re-renderizamos con la lista filtrada
  renderProducts(filteredList);
};

// 3. Escuchamos los clicks en los botones
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.target.getAttribute("data-category");
    filterByCategory(category);
  });
});
