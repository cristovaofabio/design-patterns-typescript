import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Cake, Juice, Noodle, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice('rice', 20);
        const beans = new Beans('beans', 15);
        const noodle = new Noodle('noodle', 22);

        this._meal.add(rice, beans, noodle);

        return this;
    }

    makeBeverage(): this {
        const juice = new Juice('juice', 8);
        this._meal.add(juice);

        return this;
    }

    makeDessert(): this {
        const cake = new Cake('cake', 30);
        this._meal.add(cake);

        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }

}