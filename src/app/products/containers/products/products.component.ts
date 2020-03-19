import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from './../../../core/interfaces/product.interface';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];

    constructor(private productsService: ProductsService) {}

    ngOnInit() {
        this.fetchProducts();
    }

    fetchProducts() {
        this.products = this.productsService.getProducts();
    }
}
