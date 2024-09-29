// Classe Product qui représente un article avec un prix et un nom
export class Product {
  constructor(private price: number, private name: string) {}

  // Méthodes pour accéder aux propriétés privées
  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }

  // Méthodes pour modifier les propriétés si nécessaire
  setPrice(newPrice: number): void {
    this.price = newPrice;
  }

  setName(newName: string): void {
    this.name = newName;
  }
}
