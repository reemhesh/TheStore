import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddcartComponent } from './components/addcart/addcart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'addcart', component:AddcartComponent},
  { path: 'product', component:ProductComponent},
  {
    path: 'details/:id',
    component: ProductDetailsComponent
  },
  {
    path:'success/:username/:total',
    component:SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
