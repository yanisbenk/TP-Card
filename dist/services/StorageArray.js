"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryStorage = void 0;
// Classe InMemoryStorage qui représente le stockage des articles dans le panier
class InMemoryStorage {
    constructor() {
        this.storage = [];
    }
    // Ajoute un produit au storage
    add(item) {
        this.storage.push(item);
    }
    // Retire un produit au storage
    remove(item) {
        const index = this.storage.findIndex((product) => product.name === item.name);
        if (index !== -1) {
            this.storage.splice(index, 1);
        }
    }
    // Renvoie un array de tous les produits
    getAll() {
        return this.storage;
    }
}
exports.InMemoryStorage = InMemoryStorage;
