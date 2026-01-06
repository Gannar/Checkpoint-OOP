class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add item to cart
  addItem(product, quantity) {
    const existingItem = this.items.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  // Remove item from cart
  removeItem(productId) {
    this.items = this.items.filter(
      item => item.product.id !== productId
    );
  }

  // Get total price of all items
  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.getTotalPrice(),
      0
    );
  }

  // Display cart items
  displayCart() {
    if (this.items.length === 0) {
      console.log("Cart is empty");
      return;
    }

    this.items.forEach(item => {
      console.log(
        `${item.product.name} x ${item.quantity} = $${item.getTotalPrice()}`
      );
    });

    console.log(`Total: $${this.getTotal()}`);
  }
}
