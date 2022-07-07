import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductCategoriesRoutingModule } from './admin-product-categories-routing.module';
import { AdminProductCategoriesComponent } from './admin-product-categories/admin-product-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormProductCategoriesComponent } from './admin-product-categories/components/form-product-categories/form-product-categories.component';


@NgModule({
  declarations: [
    AdminProductCategoriesComponent,
    FormProductCategoriesComponent
  ],
  imports: [
    CommonModule,
    AdminProductCategoriesRoutingModule,
    SharedModule
  ]
})
export class AdminProductCategoriesModule { }
