import { DeliveryFlyweight } from "./delivery-flyweight";
import { DeliveryLocationData } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyweight {
    constructor(private readonly intrinsicState: DeliveryLocationData) { }

    delivery(name: string, number: string): void {
        console.log('To: %s', name);
        console.log('Address:', this.intrinsicState.street, this.intrinsicState.city);
        console.log('Number:',number);
        console.log('-----------');
    }
}