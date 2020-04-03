import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from './../shared/shared.module';

import { CartComponent } from './containers/cart/cart.component';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
