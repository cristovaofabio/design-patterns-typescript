import { Cigarette } from "./cigarette";
import { Food } from "./food";
import { AlcoholDrink } from './alcohol-drink';
import { BrazilTaxVisitor } from "./brazil-tax-visitor";

const food = new Food(5.99);
const cigarette = new Cigarette(4.50);
const alcoholDrink = new AlcoholDrink(12.99);
const brazilTax = new BrazilTaxVisitor();
const shoppingCart = [food, cigarette, alcoholDrink];
const total = shoppingCart.reduce((sum, item) => sum + item.getPrice(), 0);
const totalWithTaxes = shoppingCart.reduce((sum, item) => sum + item.getPriceWithTaxes(brazilTax), 0);

console.log('Total:',total);
console.log('Total with taxes:',totalWithTaxes);