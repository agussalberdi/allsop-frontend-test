import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', canActivate: [AuthGuard], loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', canActivate: [AuthGuard], loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
