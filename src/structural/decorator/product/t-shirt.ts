import { ProductProtocol } from "./product-protocol";

export class TShirt implements ProductProtocol {
    private name = 'Shirt';
    private price = 39.9;

    getPrice(): number {
        return this.price;
    }

    getName(): string {
        return this.name;
    }
}