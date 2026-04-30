import { describe, test, expect, vi, beforeEach } from "vitest";
import { cart, saveCart } from "../js/features/cart/cartState";
import { addToCart, calculateSubtotal } from "../js/features/cart/cartLogic.js";

describe("cartLogic", () => {
  vi.mock("../js/features/cart/cartState.js", () => ({
    cart: [],
    saveCart: vi.fn(),
  }));

  vi.mock("../js/features/products/products.js", () => ({
    products: [{ id: 1, name: "Patito 1", price: 10, quantity: 1 }],
  }));

  beforeEach(() => {
    cart.length = 0;
  });

  test("should add product to cart", () => {
    // Given - Prepare
    // Cart is already empty because we are mocking it.

    // When - Action
    addToCart(1);

    // Then - Assert
    expect(cart.length).toBe(1);
    expect(cart[0].id).toBe(1);
    expect(cart[0].quantity).toBe(1);
    expect(saveCart).toHaveBeenCalled();
  });

  test("should calculate the subtotal of a product", () => {
    //Given
    cart.push({ id: 1, price: 10, quantity: 2 });

    // When
    const result = calculateSubtotal(1);

    // Then
    expect(result).toBe(20);
  });
});
