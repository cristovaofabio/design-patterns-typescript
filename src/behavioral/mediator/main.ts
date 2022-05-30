import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

seller1.addProduct({ id: '1', name: 'Shirt', price: 19.99 });
seller1.addProduct({ id: '2', name: 'Pants', price: 39.50 });

seller2.addProduct({ id: '3', name: 'Socks', price: 5.99 });
seller2.addProduct({ id: '4', name: 'Cap', price: 6.70 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();