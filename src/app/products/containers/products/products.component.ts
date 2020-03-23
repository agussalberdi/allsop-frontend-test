import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    subscription: Subscription;

    constructor(private productsService: ProductsService) {}

    ngOnInit() {
        this.fetchProducts();
    }

    fetchProducts() {
        this.subscription = this.productsService.getProducts().subscribe(data => {
            this.products = data;
            this.filteredProducts = data;
        });
    }

    handleFilter(event: Product[]) {
        this.filteredProducts = event;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
