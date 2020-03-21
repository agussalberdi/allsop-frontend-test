import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from './../shared/shared.module';

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
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule {}
