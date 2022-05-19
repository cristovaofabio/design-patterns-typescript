//import { CarFactory } from "./factories/car-factory";
import { randomCar } from "./main/random-vehicle";
import { randomNumbers } from "./utils/random-numbers";

/*
const carFactory = new CarFactory();
const chevette = carFactory.getVehicle("chevette");
chevette.pickUp('Fabio');
chevette.stop();
*/
const customerNames = ['Bob', 'Tyler', 'Mary', 'Kyle', 'Bill'];
const vehicle = randomCar();
const name = customerNames[randomNumbers(customerNames.length)];

vehicle.pickUp(name);