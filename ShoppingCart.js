import { ShoppingCartItem } from "./ShoppingCartItem.js";

export class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const item = this.items.find(i => i.product.id === product.id);

    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(
      item => item.product.id !== productId
    );
  }

  getTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.getTotalPrice(),
      0
    );
  }

  displayCart() {
    this.items.forEach(item => {
      console.log(
        `${item.product.name} x ${item.quantity} = $${item.getTotalPrice()}`
      );
    });
    console.log(`Total: $${this.getTotal()}`);
  }
}
