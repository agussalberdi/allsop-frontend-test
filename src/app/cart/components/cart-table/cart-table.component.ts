import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../../../core/services/cart.service';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
    selector: 'app-cart-table',
    templateUrl: './cart-table.component.html',
    styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
    displayedColumns: string[] = ['item', 'cost', 'remove'];
    @Input() cart: Product[];
    total: number;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.getCartTotal();
    }

    getCartTotal() {
        this.total = this.cartService.getTotal();
    }

    removeProduct(product: Product) {
        this.cartService.removeCart(product);
        this.getCartTotal();
    }

    handleVoucher(voucher: Event) {
        if (voucher) {
            this.total -= 20;
            //this.message = "Discount code applied'
        }
    }
}
