// =========================
// Product Class
// =========================
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// =========================
// ShoppingCartItem Class
// =========================
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// =========================
// ShoppingCart Class
// =========================
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add items
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

  // Remove items
  removeItem(productId) {
    this.items = this.items.filter(
      item => item.product.id !== productId
    );
  }

  // Get total of items
  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.getTotalPrice(),
      0
    );
  }

  // Display cart items
  displayCart() {
    if (this.items.length === 0) {
      console.log("🛒 Cart is empty");
      return;
    }

    console.log("🛒 Shopping Cart:");
    this.items.forEach(item => {
      console.log(
        `${item.product.name} x ${item.quantity} = $${item.getTotalPrice()}`
      );
    });

    console.log(`💰 Total: $${this.getTotal()}`);
  }
}

// =========================
// TESTING THE FUNCTIONALITY
// =========================

// Create products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 500);

// Create shopping cart
const cart = new ShoppingCart();

// Add items
cart.addItem(product1, 1);
cart.addItem(product2, 2);

// Display cart
cart.displayCart();

// Remove item
cart.removeItem(1);

// Display cart again
cart.displayCart();