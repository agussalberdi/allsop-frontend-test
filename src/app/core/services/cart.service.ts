import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private products: Product[] = [];
    private cart = new BehaviorSubject<Product[]>([]);

    cart$ = this.cart.asObservable();

    addCart(product: Product) {
        this.products = [...this.products, product];
        this.cart.next(this.products);
    }

    removeCart(product: Product) {
        this.products = this.products.filter(elem => elem.name.toLowerCase() !== product.name.toLowerCase());
        this.cart.next(this.products);
    }

    clearCart() {
        this.products = [];
        this.cart.next(this.products);
    }

    getTotal() {
        return this.products.reduce((total, product: Product) => {
            if (product && product.reduced) {
                return total + product.reduced;
            }
            return total + product.price;
        }, 0);
    }
}
