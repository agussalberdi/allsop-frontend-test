import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './../interfaces/product.interface';
import { Order } from './../interfaces/order.interface';

@Pipe({
  name: 'groupProducts'
})
export class OrderPipe implements PipeTransform {

  transform(products: Product[]): any {
    const orderProducts: Order[] = [];

    products.forEach( product => {
      const quantity = products.reduce((acum, element) =>
        (product.name.toLowerCase() === element.name.toLowerCase()) ? acum + 1 : acum , 0
      );

      if (!orderProducts.some( ({ product: {name} }) => name.toLowerCase() === product.name.toLowerCase() )) {
        orderProducts.push({product, quantity});
      }
    });

    return orderProducts;
  }
}
