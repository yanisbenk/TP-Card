import { Product } from "../services/Product";

// Interface du storable
export interface Storable {
  // Ajoute un nouveau produit au stockage
  add(item: Product): void;
  // Supprime un produit du stockage
  remove(item: Product): void;
  // Renvoie un tableau de tous les produits du stockage
  getAll(): Product[];
}
