import { Customer } from "./interface/customer";

export class EnterpriseCustomer implements Customer {
    constructor(public name: string){}
}