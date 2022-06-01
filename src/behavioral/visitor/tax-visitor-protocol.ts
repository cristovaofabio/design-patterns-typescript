import { AlcoholDrink } from "./alcohol-drink";
import { Cigarette } from "./cigarette";
import { Food } from "./food";

export interface TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number;
    calculateTaxesForCigarette(cigarette: Cigarette): number;
    calculateTaxesForAlcohol(alcohol: AlcoholDrink): number;
}