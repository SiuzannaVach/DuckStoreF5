import { products } from "../products.js";

export const cart = [];

export function addToCart(productId) {
  const productInCart = cart.find((item) => item.id === productId);

  if (productInCart) {
    productInCart.quantity++;
    return;
  }

  const product = products.find((p) => p.id === productId);

  cart.push({
    ...product,
    quantity: 1,
  });
}

incrementQuantity(productId);

decrementQuantity(productId);

removeFromCart(productId);

calcularSubtotal(product);

calcularTotal(cart);
