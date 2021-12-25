import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductCreateComponent} from "../product-create/product-create.component";
import {ProductUpdateComponent} from "../product-update/product-update.component";
import {ProductDeleteComponent} from "../product-delete/product-delete.component";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule

  ]
})
export class ProductModule { }
