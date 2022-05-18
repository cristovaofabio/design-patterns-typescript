import { MainDishBuilder } from "./classes/main-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
mainDishBuilder.makeBeverage();
console.log(mainDishBuilder.getPrice());