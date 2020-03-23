import { ProductsService } from 'src/app/products/services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { Product } from '../../../shared/interfaces/product.interface';
import { Category } from 'src/app/shared/enums/category.enum';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    @Input() product: Product;

    constructor(private cartService: CartService, private productsService: ProductsService) {}

    ngOnInit() {}

    getCategoryImage() {
        switch (this.product.category) {
            case Category.Meat: {
               return '../../../../assets/images/meat.jpg';
            }
            case Category.Vegetables: {
                return '../../../../assets/images/vegetables.jpg';
            }
            case Category.Drinks: {
                return '../../../../assets/images/drinks.jpg';
            }
            case Category.Desserts: {
                return '../../../../assets/images/desserts.jpg';
            }
            case Category.Ingredients: {
                return '../../../../assets/images/ingredients.jpg';
            }
            case Category.Miscellaneous: {
                return '../../../../assets/images/miscellaneous.jpg';
            }
        }
    }

    addCart() {
        this.cartService.addCart(this.product);
        this.productsService.reduceQuantity(this.product.name);
    }
}
