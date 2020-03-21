import { Injectable } from '@angular/core';

import { Product } from '../../shared/interfaces/product.interface';
import { Category } from '../../shared/enums/category.enum';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    { name: 'Chicken Fillets, 6 x 100g', category: Category.Meat, price: 4.50, reduced: null, quantity: 12 },
    { name: 'Sirloin Steaks, 4 6-8oz', category: Category.Meat, price: 45.70, reduced: null, quantity: 6 },
    { name: 'Whole Free-Range Turkey, 1 x 16-18lbs', category: Category.Meat, price: 48.25, reduced: 43.20, quantity: 8 },
    { name: 'Granny Smith Apples, 4 x 16 each', category: Category.Vegetables, price: 3.75, reduced: null, quantity: 0 },
    { name: 'Loose Carrots, 4 x 20 each', category: Category.Vegetables, price: 2.67, reduced: null, quantity: 2 },
    { name: 'Mandarin Oranges, 6 x 10 x 12', category: Category.Vegetables, price: 12.23, reduced: null, quantity: 8 },
    { name: 'Cauliflower Florets, 10 x 500g', category: Category.Vegetables, price: 6.75, reduced: 5.00, quantity: 5 },
    { name: 'Coca-Cola, 6 x 2L', category: Category.Drinks, price: 8.50, reduced: 8.30, quantity: 6},
    { name: 'Still Mineral Water, 6 x 24 x 500ml', category: Category.Drinks, price: 21.75, reduced: null, quantity: 9 },
    { name: 'Sparkling Mineral Water, 6 x 24 x 500ml', category: Category.Drinks, price: 25.83, reduced: null, quantity: 16 },
    { name: 'Mars Bar, 6 x 24 x 50g', category: Category.Desserts, price: 42.82, reduced: null, quantity: 4 },
    { name: 'Peppermint Chewing Gum, 6 x 50 x 30g', category: Category.Desserts, price: 35.70, reduced: null, quantity: 6 },
    { name: 'Strawberry Cheesecake, 4 x 12 portions', category: Category.Desserts, price: 8.52, reduced: null, quantity: 0 },
    { name: 'Vanilla Ice Cream, 6 x 4L', category: Category.Desserts, price: 3.80, reduced: null, quantity: 2 },
    { name: 'Plain Flour, 10 x 1kg', category: Category.Ingredients, price: 6.21, reduced: null, quantity: 4 },
    { name: 'Icing Sugar, 12 x 500g', category: Category.Ingredients, price: 9.38, reduced: null, quantity: 6 },
    { name: 'Free-Range Eggs, 10 x 12 each', category: Category.Ingredients, price: 9.52, reduced: null, quantity: 9 },
    { name: 'Caster Sugar, 16 x 750g', category: Category.Ingredients, price: 12.76, reduced: null, quantity: 13 },
    { name: 'Kitchen Roll, 100 x 300 sheets', category: Category.Miscellaneous, price: 43.92, reduced: null, quantity: 19 },
    { name: 'Paper Plates, 10 x 200 each', category: Category.Miscellaneous, price: 16.19, reduced: null, quantity: 7 }
  ];

  constructor() {}

  getProducts() {
    return of(this.products);
  }

  getProductByName(name: string) {
    const search = this.products.find(product => product.name.toLowerCase() === name.toLowerCase());
    return of(search);
  }

  increaseQuantity(name: string) {
    this.products.find(product => {
      if (product.name.toLowerCase() === name.toLowerCase()) {
        product.quantity += 1;
      }
    });
  }

  reduceQuantity(name: string) {
    this.products.find(product => {
      if (product.name.toLowerCase() === name.toLowerCase()) {
        product.quantity -= 1;
      }
    });
  }
}
