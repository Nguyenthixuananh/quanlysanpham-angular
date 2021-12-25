import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductUpdateComponent} from "./product-update/product-update.component";
import {ProductDeleteComponent} from "./product-delete/product-delete.component";

const routes: Routes = [
  {
    path: 'product',
    loadChildren:() => import('../app/product/product.module').then(module=>module.ProductModule)
  },
  {
    path: 'category',
    loadChildren:() => import('../app/category/category.module').then(module=>module.CategoryModule)
  }
  // {
  //   path: 'product/list',
  //   component: ProductListComponent
  // },
  // {
  //   path: 'product/create',
  //   component: ProductCreateComponent
  // },
  // {
  //   path: 'product/update/:id',
  //   component: ProductUpdateComponent
  // }, {
  //   path: 'product/delete/:id',
  //   component: ProductDeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
