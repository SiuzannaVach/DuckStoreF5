import { products } from "../products.js";

// El carrito empieza vacío. Aquí guardaremos los productos que el usuario seleccione.
export const cart = [];

/**
 * Primera función = Añade un producto al carrito.
 * - Si el producto ya existe en el carrito, solo incrementa su cantidad.
 * - Si no existe, lo añade con quantity = 1.
 */
export function addToCart(productId) {
  // 1. Buscamos si el producto ya está en el carrito
  const productInCart = cart.find((item) => item.id === productId);

  // 2. Si ya existe, incrementamos la cantidad y salimos de la función
  if (productInCart) {
    productInCart.quantity++;
    return;
  }

  // 3. Si no existe en el carrito, buscamos el producto en el catálogo (products.js)
  const product = products.find((p) => p.id === productId);

  // 4. Lo añadimos al carrito copiando todas las propiedades del producto original (...product) y añadimos quantity = 1
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
