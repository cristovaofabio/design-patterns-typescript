import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { VisitableProduct } from "./visitable-product";

export class AlcoholDrink extends VisitableProduct {
    constructor(protected price: number) {
        super('Alcohol drink', price);
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForAlcohol(this);
    }
}