import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    filteredProducts: Product[] = [];

    constructor(private productsService: ProductsService) {}

    ngOnInit() {
        this.fetchProducts();
    }

    fetchProducts() {
        this.productsService.getProducts().subscribe(data => {
            this.products = data;
            this.filteredProducts = data;
        });
    }

    handleFilter(event: Product[]) {
        this.filteredProducts = event;
    }
}
