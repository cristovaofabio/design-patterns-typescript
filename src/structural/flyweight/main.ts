import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, 'Fabio', '100', 'Langebruvegen', 'Forde');
console.log(factory.getLocations());
