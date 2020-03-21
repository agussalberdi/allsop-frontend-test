import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
    cart: Product[] = [];
    subscription: Subscription;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.subscription = this.cartService.cart$.subscribe(cart => this.cart = cart);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
