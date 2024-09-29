import { Product } from "./services/Product";
import { Cart } from "./services/Cart";
import { InMemoryStorage } from "./services/StorageArray";

const storage = new InMemoryStorage();
const cart = new Cart(storage);

const phone = new Product(300, "Phone");
const computer = new Product(500, "Computer");

cart.addProduct(phone);
cart.addProduct(computer);
cart.removeProduct(computer);
cart.addProduct(computer);
cart.addProduct(computer);

console.log(`Total: $${cart.displayCart()}`);
