import { OrderPending } from "./order-pending";
import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state";

export class OrderRejected implements ShoppingOrderState {
    private name = 'OrderRejected';

    constructor(private order: ShoppingOrder) { }

    getName(): string {
        return this.name;
    }
    approvePayment(): void {
        console.log('Rejected order!');
    }
    rejectPayment(): void {
        console.log(`It's not possible to reject the payment.`);
    }
    waitPayment(): void {
        console.log(`It's not possible remove to pending!`);
    }
    shipOrder(): void {
        console.log(`It's not possible to send an order with rejected payment`);
    }

}