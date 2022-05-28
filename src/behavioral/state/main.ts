import { ShoppingOrder } from "./shopping-order/shopping-order";

const order = new ShoppingOrder();
order.approvePayment();
order.shipOrder();
order.rejectPayment();
order.approvePayment();
order.shipOrder();