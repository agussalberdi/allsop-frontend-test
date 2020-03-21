import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../core/material.module';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from './../shared/shared.module';

import { CartComponent } from './containers/cart/cart.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';

@NgModule({
  declarations: [
    CartComponent,
    CartTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
