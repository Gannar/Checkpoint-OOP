import { Product } from "./Product.js";
import { ShoppingCart } from "./ShoppingCart.js";

const laptop = new Product(1, "Laptop", 1000);
const phone = new Product(2, "Phone", 500);

const cart = new ShoppingCart();

cart.addItem(laptop, 1);
cart.addItem(phone, 2);
cart.displayCart();

cart.removeItem(1);
cart.displayCart();
