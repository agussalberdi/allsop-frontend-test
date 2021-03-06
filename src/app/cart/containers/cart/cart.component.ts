import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '@shared/interfaces/product.interface';
import { Category } from '@shared/enums/category.enum';
import { CartService } from '../../services/cart.service';
import { ProductsService } from './../../../products/services/products.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['item', 'cost', 'remove'];
    cart: Product[];
    subscription: Subscription;

    total: number;

    discountDrinks = false;
    discountIngredients = false;
    discountVoucher = false;
    discountDrinksMessage: string;
    discountIngredientsMessage: string;
    discountVoucherMessage: string;

    constructor(private cartService: CartService, private productsService: ProductsService) {}

    ngOnInit() {
        this.subscription = this.cartService.cart$.subscribe(cart => this.cart = cart);
        this.getTotalAfterDiscounts();
    }

    removeProduct(product: Product, i: number) {
        this.cartService.removeCart(i);
        this.productsService.increaseQuantity(product.name);
        this.getTotalAfterDiscounts();
    }

    getCartTotal() {
        return this.cartService.getTotal();
    }

    applyVoucher(voucher: Event) {
        if (voucher && this.total >= 100) {
            this.total -= 20;
            this.discountVoucher = true;
            this.discountVoucherMessage = 'Promotional Code: 20£ off';
        } else {
            this.discountVoucher = false;
        }
    }

    getDiscountDrinks() {
        const drinks = this.cart.filter(product => product.category === Category.Drinks);

        if (drinks.length >= 10) {
            return drinks.reduce((total = 0, product: Product) => {
                this.discountDrinks = true;
                this.discountDrinksMessage = 'Drinks 10% off';
                if (product.reduced) {
                    return total + (product.reduced * 0.1);
                }
                return total + (product.price * 0.1);
            }, 0);
        }
        this.discountDrinks = false;
        return 0;
    }

    getCookingAndBakingDiscounts() {
        const ingredientsCheck = this.cart.reduce((total = 0, product: Product) => {
            if (product && product.category === Category.Ingredients) {
                if (product.reduced) {
                    return total + product.reduced;
                }
                return total + product.price;
            }
        }, 0);

        if (ingredientsCheck >= 50) {
            this.discountIngredients = true;
            this.discountIngredientsMessage = 'Baking/Cooking Ingredients 5£ off';
            return 5;
        }
        this.discountIngredients = false;
        return 0;
    }

    private getTotalAfterDiscounts() {
        const cartTotal = this.getCartTotal();
        const drinksOff = this.getDiscountDrinks();
        const ingredientsOff = this.getCookingAndBakingDiscounts();
        this.total = cartTotal - drinksOff - ingredientsOff;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
