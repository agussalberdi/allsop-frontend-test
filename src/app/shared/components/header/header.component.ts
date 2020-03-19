import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../core/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    total$: Observable<number>;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.total$ = this.cartService.cart$.pipe(
            map(products => products.length)
        );
    }
}
