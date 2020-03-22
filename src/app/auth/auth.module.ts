import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
