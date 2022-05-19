import { Customer } from "../customer/interface/customer";
import { Vehicle } from "./interface/vehicle";

export class EnterpriseCar implements Vehicle {
    constructor(
        public name: string, 
        private readonly customer: Customer,
    ) { }

    pickUp(): void {
        console.log(`${this.name} ------> ${this.customer.name}`);
    }

}