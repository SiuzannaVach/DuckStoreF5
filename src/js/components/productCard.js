export const createProductCard = (product) => {
  return `
    <article class="card">
      <img
        src="${product.image}"
        alt="${product.name}"
        class="card__image"
      />

      <div class="card__content">
        <div class="card__header">
          <h3 class="card__title">${product.name}</h3>
          <p class="card__price">$${product.price}</p>
        </div>

        <p class="card__description">
          ${product.description.substring(0, 100)}...
        </p>

        <a href="./product-detail.html?id=${product.id}" class="card__button">
          <img
            src="../assets/icons/duck-btn-icon.svg"
            alt="Small rubber duck icon"
            class="card__button-icon"
          />
          View Duck
        </a>
      </div>
    </article>
  `;
};
