import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './menu/components/product/product.component';
import { DetailsDialogComponent } from './menu/components/details-dialog/details-dialog.component';
import { MultipleSelectComponent } from './menu/components/multiple-select/multiple-select.component';


@NgModule({
  declarations: [
    MenuComponent,
    ProductComponent,
    DetailsDialogComponent,
    MultipleSelectComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule { }
