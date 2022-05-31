import { resolve } from "path";
import { CustomerDataParserJson } from "./customer-data-parser-json";
import { CustomerDataParserTxt } from "./customer-data-parser-txt";

async function run() {
    const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
    const filePathJson = resolve(__dirname, 'files', 'customer.json');
    
    const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
    const customerDataParserJson = new CustomerDataParserJson(filePathJson);
    
    await customerDataParserTxt.fixCustomerData();
    await customerDataParserJson.fixCustomerData();

    console.log(customerDataParserTxt.customerData);
    console.log('------------');
    console.log(customerDataParserJson.customerData);

}

run();