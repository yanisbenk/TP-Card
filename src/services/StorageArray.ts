import { Storable } from "../interfaces/Storable";
import { Product } from "./Product";

// Classe InMemoryStorage qui représente le stockage des articles dans le panier
export class InMemoryStorage implements Storable {
  private storage: Product[] = [];

  // Ajoute un produit au storage
  add(item: Product): void {
    this.storage.push(item);
  }

  // Retire un produit au storage
  remove(item: Product): void {
    const index = this.storage.findIndex(
      (product) => product.name === item.name
    );
    if (index !== -1) {
      this.storage.splice(index, 1);
    }
  }

  // Renvoie un array de tous les produits
  getAll(): Product[] {
    return this.storage;
  }
}
