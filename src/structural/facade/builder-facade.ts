import { MainDishBuilder } from "../../creational/builder/classes/main-dish-builder";

export class BuilderFacade {
    //this is the facade to src/creational/builder/index.ts file
    private mainDishBuilder = new MainDishBuilder();

    makeMeal(): void {
        this.mainDishBuilder.makeMeal().makeDessert();
        console.log(this.mainDishBuilder.getPrice());
    }
}