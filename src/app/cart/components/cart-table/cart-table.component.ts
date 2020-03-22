import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { Category } from 'src/app/shared/enums/category.enum';

@Component({
    selector: 'app-cart-table',
    templateUrl: './cart-table.component.html',
    styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
    displayedColumns: string[] = ['item', 'cost', 'remove'];
    @Input() cart: Product[];
    total: number;

    discountDrinks = false;
    discountIngredients = false;
    discountDrinksMessage: string;
    discountIngredientsMessage: string;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.getTotalAfterDiscounts();
    }

    removeProduct(product: Product) {
        this.cartService.removeCart(product);
        this.getTotalAfterDiscounts();
    }

    clearCart() {
        this.cartService.clearCart();
    }

    getCartTotal() {
        return this.cartService.getTotal();
    }

    applyVoucher(voucher: Event) {
        if (voucher) {
            this.total -= 20;
        }
    }

    getDiscountDrinks() {
        const drinks = this.cart.filter(product => product.category === Category.Drinks);

        if (drinks.length >= 10) {
            this.cart.reduce((total, product: Product) => {
                if (product && product.category === Category.Drinks) {
                    if (product.reduced) {
                        // product.reduced = product.reduced * 0.9;
                        return total + (product.reduced * 0.1);
                    } else {
                        // product.price = product.price * 0.9;
                    }
                    this.discountDrinks = true;
                    this.discountDrinksMessage = 'Drinks 10% off';
                    return total + (product.price * 0.1);
                }
            }, 0);
        }
        return 0;
    }

    getCookingAndBakingDiscounts() {
        const ingredientsCheck = this.cart.reduce((total, product: Product) => {
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
        return 0;
    }

    getTotalAfterDiscounts() {
        const cartTotal = this.getCartTotal();
        const drinksOff = this.getDiscountDrinks();
        const ingredientsOff = this.getCookingAndBakingDiscounts();
        this.total = cartTotal - drinksOff - ingredientsOff;
    }
}
