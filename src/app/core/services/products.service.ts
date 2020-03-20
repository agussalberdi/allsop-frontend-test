import { Injectable } from '@angular/core';

import { Product } from './../interfaces/product.interface';
import { Category } from './../enums/category.enum';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    { id: '1', name: 'Chicken Fillets, 6 x 100g', category: Category.Meat, price: 4.50, quantity: 12 },
    { id: '2', name: 'Sirloin Steaks, 4 6-8oz', category: Category.Meat, price: 45.70, quantity: 6 },
    { id: '3', name: 'Whole Free-Range Turkey, 1 x 16-18lbs', category: Category.Meat, price: 43.20, quantity: 8 },
    { id: '4', name: 'Granny Smith Apples, 4 x 16 each', category: Category.Vegetables, price: 3.75, quantity: 0 },
    { id: '5', name: 'Loose Carrots, 4 x 20 each', category: Category.Vegetables, price: 2.67, quantity: 2 },
    { id: '6', name: 'Mandarin Oranges, 6 x 10 x 12', category: Category.Vegetables, price: 12.23, quantity: 8 },
    { id: '7', name: 'Cauliflower Florets, 10 x 500g', category: Category.Vegetables, price: 5.00, quantity: 5 },
    { id: '8', name: 'Coca-Cola, 6 x 2L', category: Category.Drinks, price: 8.30, quantity: 6},
    { id: '9', name: 'Still Mineral Water, 6 x 24 x 500ml', category: Category.Drinks, price: 21.75, quantity: 9 },
    { id: '10', name: 'Sparkling Mineral Water, 6 x 24 x 500ml', category: Category.Drinks, price: 25.83, quantity: 16 },
    { id: '11', name: 'Mars Bar, 6 x 24 x 50g', category: Category.Desserts, price: 42.82, quantity: 4 },
    { id: '12', name: 'Peppermint Chewing Gum, 6 x 50 x 30g', category: Category.Desserts, price: 35.70, quantity: 6 },
    { id: '13', name: 'Strawberry Cheesecake, 4 x 12 portions', category: Category.Desserts, price: 8.52, quantity: 0 },
    { id: '14', name: 'Vanilla Ice Cream, 6 x 4L', category: Category.Desserts, price: 3.80, quantity: 2 },
    { id: '15', name: 'Plain Flour, 10 x 1kg', category: Category.Ingredients, price: 6.21, quantity: 4 },
    { id: '16', name: 'Icing Sugar, 12 x 500g', category: Category.Ingredients, price: 9.38, quantity: 6 },
    { id: '17', name: 'Free-Range Eggs, 10 x 12 each', category: Category.Ingredients, price: 9.52, quantity: 9 },
    { id: '18', name: 'Caster Sugar, 16 x 750g', category: Category.Ingredients, price: 12.76, quantity: 13 },
    { id: '19', name: 'Kitchen Roll, 100 x 300 sheets', category: Category.Miscellaneous, price: 43.92, quantity: 19 },
    { id: '20', name: 'Paper Plates, 10 x 200 each', category: Category.Miscellaneous, price: 16.19, quantity: 7 }
  ];

  constructor() {}

  getProducts() {
    return of(this.products);
  }

  getProductByName(name: string) {
    const search = this.products.find(product => product.name.toLowerCase() === name.toLowerCase());
    return of(search);
  }

  increaseQuantity(id: string) {
    this.products.find(product => {
      if (product.id === id) {
        product.quantity += 1;
      }
    });
  }

  reduceQuantity(id: string) {
    this.products.find(product => {
      if (product.id === id) {
        product.quantity -= 1;
      }
    });
  }
}
