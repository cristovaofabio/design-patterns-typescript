import { AlcoholDrink } from "./alcohol-drink";
import { Cigarette } from "./cigarette";
import { Food } from "./food";
import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number {
        return food.getPrice() + food.getPrice() * 0.3;
    }

    calculateTaxesForCigarette(cigarette: Cigarette): number {
        return cigarette.getPrice() + cigarette.getPrice() * 1.5;
    }

    calculateTaxesForAlcohol(alcohol: AlcoholDrink): number {
        return alcohol.getPrice() + alcohol.getPrice() * 0.5;
    }

}