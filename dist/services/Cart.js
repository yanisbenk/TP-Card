"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
// Classe Cart qui contient les produits ajoutés au panier par l'utilisateur
class Cart {
    constructor(storage) {
        this.storage = storage;
    }
    // Ajoute un produit au panier
    addProduct(product) {
        this.storage.add(product);
    }
    // Retire un produit au panier
    removeProduct(product) {
        this.storage.remove(product);
    }
    // Affiche le total de la valeur du panier
    displayCart() {
        return this.storage
            .getAll()
            .reduce((total, product) => total + product.price, 0);
    }
}
exports.Cart = Cart;
