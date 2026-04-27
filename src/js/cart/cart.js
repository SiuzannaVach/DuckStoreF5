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

export function incrementQuantity(productId) {
  // 1. Buscamos si el producto ya está en el carrito
  const productInCart = cart.find((item) => item.id === productId);

  // 2. Si existe, incrementamos la cantidad en 1
  if (productInCart) {
    productInCart.quantity++;
  }
}

export function decrementQuantity(productId) {
  // 1. Buscamos si el producto ya está en el carrito
  const productInCart = cart.find((item) => item.id === productId);

  // 2. Si no existe, no hacemos nada
  if (!productInCart) return;

  // 3. Si existe, reducimos la cantidad
  productInCart.quantity--;

  // 4. Si llega a 0, lo eliminamos del carrito
  if (productInCart.quantity === 0) {
    const index = cart.findIndex((item) => item.id === productId);
    cart.splice(index, 1);
    return;
  }

  // 5. Nunca permitir negativos
  if (productInCart.quantity < 0) {
    throw new Error("Product quantity cannot be negative.");
  }
}

export function removeFromCart(productId) {
  // 1. Buscamos si el producto ya está en el carrito
  const productInCart = cart.find((item) => item.id === productId);

  // 2. Si no existe, no hacemos nada
  if (!productInCart) return;

  // 3. Si existe, creamos un nuevo array sin ese producto
  const updatedCart = cart.filter((item) => item.id !== productId);

  // 4. Vaciar el carrito original y rellenarlo con el nuevo
  cart.length = 0;
  cart.push(...updatedCart);
}

calcularSubtotal(product);

calcularTotal(cart);
