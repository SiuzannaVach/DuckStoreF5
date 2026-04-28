export const createProductCard = (product) => {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <button class="btn-add" data-id="${product.id}">Añadir al carrito</button>
      </div>
    </article>
  `;
};
