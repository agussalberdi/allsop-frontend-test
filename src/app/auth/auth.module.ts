import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';

import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';

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
export class AuthModule {}
