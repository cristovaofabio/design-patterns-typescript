import { Motorcycle } from "../vehicle/motorcycle";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class MotorcycleFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        return new Motorcycle(vehicleName);
    }
}