export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public adresses: Adress[] = [];

    constructor(
        public name: string,
        public age: number,
    ) { }

    clone(): this {
        const newObj = Object.create(this);
        return newObj;
    }

    addAdress(adress: Adress) {
        this.adresses.push(adress);
    }
}

export class Adress {
    constructor(
        public street: string,
        public number: number,
    ) { }
}

const person1 = new Person('Fabio', 30);
const person2 = person1.clone();
const adress = new Adress('Trondheim', 7013);
person1.addAdress(adress);

console.log(person2);
console.log(person2.adresses);
