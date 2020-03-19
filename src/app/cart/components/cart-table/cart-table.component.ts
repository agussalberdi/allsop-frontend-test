import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../../../core/services/cart.service';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
    selector: 'app-cart-table',
    templateUrl: './cart-table.component.html',
    styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
    displayedColumns: string[] = ['item', 'cost'];

    @Input() cart: Product[];

    constructor(private cartService: CartService) {}

    ngOnInit() {}

    getCartTotal() {
        this.cartService.getTotal();
    }

}
