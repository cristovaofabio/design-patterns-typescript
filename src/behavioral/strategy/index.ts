export interface ProductProtocol {
    name: string;
    price: number;
}

export class ShoppingCart {
    private products: ProductProtocol[] = [];
    private _discountStrategy: DiscountStrategy = new DiscountStrategy();

    addProduct(...products: ProductProtocol[]): void {
        products.forEach((product) => this.products.push(product));
    }

    getTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    getTotalWithDiscount(): number {
        return this._discountStrategy.getDiscount(this);
    }

    set discountStrategy(discount: DiscountStrategy) {
        this._discountStrategy = discount;
    }
}

export class DiscountStrategy {
    protected discount = 0;

    getDiscount(cart: ShoppingCart): number {
        return cart.getTotal();
    }
}

export class DefaultDiscount extends DiscountStrategy {

    getDiscount(cart: ShoppingCart): number {
        const total = cart.getTotal();

        if (total >= 100 && total < 200) {
            this.discount = 10
        } else if (total >= 200 && total < 300) {
            this.discount = 20;
        } else if (total >= 300) {
            this.discount = 30;
        }

        return total - total * (this.discount / 100);
    }
}

export class NewDiscount extends DiscountStrategy {
    getDiscount(cart: ShoppingCart): number {
        const total = cart.getTotal();

        if (total > 150) {
            this.discount = 5;
        }

        return total - total * (this.discount / 100);
    }
}

const shoppingCart = new ShoppingCart();

shoppingCart.discountStrategy = new DefaultDiscount();
//shoppingCart.discountStrategy = new NewDiscount();
shoppingCart.addProduct({ name: 'product 1', price: 100 });
shoppingCart.addProduct({ name: 'product 2', price: 60 });
shoppingCart.addProduct({ name: 'product 3', price: 80 });

console.log('Total:', shoppingCart.getTotal());
console.log('Total with discount:', shoppingCart.getTotalWithDiscount());