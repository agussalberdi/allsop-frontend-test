import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../../../cart/services/cart.service';
import { AuthService } from './../../../auth/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    total$: Observable<number>;

    constructor(private cartService: CartService, private authService: AuthService) {}

    ngOnInit() {
        this.total$ = this.cartService.cart$.pipe(
            map(products => products.length)
        );
    }

    logoutUser() {
        this.authService.logout();
    }
}
