import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealBox implements MealCompositeProtocol {
    private readonly _meals: MealCompositeProtocol[] = [];

    getPrice(): number {
        return this._meals.reduce((sum, meal) => sum + meal.getPrice(), 0);
    }

    add(...meal: MealCompositeProtocol[]): void {
        meal.forEach(item => {
            this._meals.push(item);
        });
    }
}