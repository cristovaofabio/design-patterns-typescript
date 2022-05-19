import { EnterpriseCustomer } from "../customer/enteprise-customer";
import { Customer } from "../customer/interface/customer";
import { EnterpriseCar } from "../vehicle/enterprise-car";
import { Vehicle } from "../vehicle/interface/vehicle";

export class EnterpriseCreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer {
        return new EnterpriseCustomer(customerName);
    }

    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new EnterpriseCar(vehicleName, customer);
    }
}