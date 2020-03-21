import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../core/material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from './../shared/shared.module';

import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './components/product/product.component';

import { FilterPipe } from './../core/pipes/filter.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule {}
