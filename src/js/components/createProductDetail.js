export const createProductDetail = (product) => {
  return `
  <main class="product-detail">
    <section class="product-detail__wrapper">

      <!-- Imagen -->
      <div class="product-detail__media">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-detail__img"
        />
      </div>

      <!-- Info -->
      <article class="product-detail__info">
        <h1 class="product-detail__title">${product.name}</h1>
        <p class="product-detail__price">$${product.price}</p>

        <div class="product-detail__description-group">
          <div class="product-detail__accent-line"></div>
          <p class="product-detail__text">${product.description}</p>
        </div>

        <div class="product-detail__stock">
          <span class="product-detail__stock-dot"></span>
          ${product.stock} in stock
        </div>

        <div class="quantity-selector">
            <button id="qty-minus" class="qty-btn" aria-label="Decrease quantity">-</button>
            <span id="qty-value">1</span>
            <button id="qty-plus" class="qty-btn" aria-label="Increase quantity">+</button>
        </div>

        <button id="add-to-cart-btn" class="product-detail__btn">
            Add to cart
        </button>

        <!-- Badges -->
        <div class="product-badges">
          <div class="product-badges__item">
            <div class="product-badges__circle">
              <img
                src="${product.badge1Img}"
                alt="${product.badge1}"
                class="product-badges__img"
              />
            </div>
            <span class="product-badges__label">${product.badge1}</span>
          </div>

          <div class="product-badges__item">
            <div class="product-badges__circle">
              <img
                src="${product.badge2Img}"
                alt="${product.badge2}"
                class="product-badges__img"
              />
            </div>
            <span class="product-badges__label">${product.badge2}</span>
          </div>
        </div>

      </article>
    </section>
  </main>
`;
};
