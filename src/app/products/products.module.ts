import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../core/material.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {}
