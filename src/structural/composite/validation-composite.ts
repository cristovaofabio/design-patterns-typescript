//Component
export abstract class ValidationComponent {
    abstract validate(value: unknown): boolean;
}

//Composite
export class ValidationComposite extends ValidationComponent {
    private readonly children: ValidationComponent[] = [];

    validate(value: unknown): boolean {
        for (const child of this.children) {
            const validation = child.validate(value);
            if (!validation) return false;
        }

        return true;
    }

    add(...validators: ValidationComponent[]): void {
        validators.forEach(validator => {
            this.children.push(validator);
        });
    }
}

//Leaf
export class ValidateEmail extends ValidationComponent {
    validate(value: unknown): boolean {
        if (typeof value !== 'string') return false;
        return /@/.test(value);
    }
}

//Leaf
export class ValidateString extends ValidationComponent {
    validate(value: unknown): boolean {
        return typeof value === 'string';
    }
}

//Leaf
export class ValidateNumber extends ValidationComponent {
    validate(value: unknown): boolean {
        if (typeof value !== 'string') return false;
        return /\d+/.test(value);
    }
}



const validateEmail = new ValidateEmail();
const validateString = new ValidateString();
const validateNumber = new ValidateNumber();
const validationComposite = new ValidationComposite();

validationComposite.add(validateString, validateEmail, validateNumber);
console.log(validationComposite.validate('username1@domain.com'));

