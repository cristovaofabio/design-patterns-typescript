import { EmailValidatorAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter";

const email = 'username@domain.com';

/*
const emailValidatorAdapter = new EmailValidatorAdapter()

if (emailValidatorAdapter.isEmail(email)) {
    console.log('It is valid');
} else {
    console.log('It is not valid');
}
*/

console.log(emailValidatorFnAdapter(email));