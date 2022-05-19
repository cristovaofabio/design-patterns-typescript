import { Customer } from "../customer/interface/customer";
import { Vehicle } from "../vehicle/interface/vehicle";

export interface CreateVehicleCustomer {
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, customerName: string): Vehicle;
}