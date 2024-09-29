import { Storable } from "../interfaces/Storable";
import { Product } from "./Product";

// Classe Cart qui contient les produits ajoutés au panier par l'utilisateur
export class Cart {
  constructor(private storage: Storable) {}

  // Ajoute un produit au panier
  addProduct(product: Product): void {
    this.storage.add(product);
  }

  // Retire un produit au panier
  removeProduct(product: Product): void {
    this.storage.remove(product);
  }

  // Affiche le total de la valeur du panier
  displayCart(): number {
    return this.storage
      .getAll()
      .reduce((total, product) => total + product.price, 0);
  }
}
