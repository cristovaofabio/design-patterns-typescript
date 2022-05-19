import { Customer } from "./interface/customer";

export class IndividualCustomer implements Customer {
    constructor(public name: string){}
}