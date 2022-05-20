//Component
export abstract class ProductComponent {
    abstract getPrice(): number;

    add(product: ProductComponent): void { }
    remove(product: ProductComponent): void { }
}

//Leaf
export class ProductLeaf extends ProductComponent {
    constructor(public name: string, public price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}

//Composite
export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];

    add(...products: ProductComponent[]): void {
        products.forEach(product => {
            this.children.push(product);
        });
    }

    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product);
        if (productIndex !== -1) this.children.splice(productIndex, 1);
    }

    getPrice(): number {
        const sumPrices = this.children.reduce((sum, son) => sum + son.getPrice(), 0);
        return sumPrices;
    }
}

//Client
const shirt = new ProductLeaf('shirt', 19.99);
const pants = new ProductLeaf('pants', 199.90);
const sneakers = new ProductLeaf('sneakers', 89.00);

const productBox = new ProductComposite();
productBox.add(shirt, pants, sneakers);

const skate = new ProductLeaf('jurassic', 50.99);
const bike = new ProductLeaf('bmx', 227.59);

const anotherBox = new ProductComposite();
anotherBox.add(skate, bike);

productBox.add(anotherBox);
console.log(productBox.getPrice());