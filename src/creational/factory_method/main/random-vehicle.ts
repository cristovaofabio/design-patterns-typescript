import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCar(): Vehicle {
    const carFactory = new CarFactory();

    const car1 = carFactory.getVehicle('Jeep');
    const car2 = carFactory.getVehicle('Fiat');
    const car3 = carFactory.getVehicle('Citroen');
    const car4 = carFactory.getVehicle('Nissan');
    const car5 = carFactory.getVehicle('Lexus');

    const cars = [car1, car2, car3, car4, car5];

    return cars[randomNumbers(cars.length)];
}