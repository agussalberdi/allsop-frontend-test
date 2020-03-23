import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { Category } from 'src/app/shared/enums/category.enum';
import { CartService } from '../../services/cart.service';
import { ProductsService } from './../../../products/services/products.service';

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
    discountVoucher = false;

    discountDrinksMessage: string;
    discountIngredientsMessage: string;
    discountVoucherMessage: string;

    constructor(private cartService: CartService, private productsService: ProductsService) {}

    ngOnInit() {
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
        if (voucher) {
            this.total -= 20;
            this.discountVoucher = true;
            this.discountVoucherMessage = 'Promotional Code: 20£ off';
        }
    }

    getDiscountDrinks() {
        const drinks = this.cart.filter(product => product.category === Category.Drinks);

        if (drinks.length >= 10) {
            return drinks.reduce((total, product: Product) => {
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
        this.discountIngredients = false;
        return 0;
    }

    getTotalAfterDiscounts() {
        const cartTotal = this.getCartTotal();
        const drinksOff = this.getDiscountDrinks();
        const ingredientsOff = this.getCookingAndBakingDiscounts();
        this.total = cartTotal - drinksOff - ingredientsOff;
    }
}
