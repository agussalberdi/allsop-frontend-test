import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from '../../../shared/interfaces/product.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    products$: Observable<Product[]>;
    stringFilter;

    constructor(private productsService: ProductsService) {}

    ngOnInit() {
        this.fetchProducts();
    }

    fetchProducts() {
        this.products$ = this.productsService.getProducts();
    }

    handleFilter(event: Event) {
        console.log(event);
        this.stringFilter = event;
    }
}
