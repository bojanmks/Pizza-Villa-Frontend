import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { OrderFormComponent } from './cart/components/order-form/order-form.component';
import { OrderSuccessfullyCreatedDialogComponent } from './cart/components/order-successfully-created-dialog/order-successfully-created-dialog.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';


@NgModule({
  declarations: [
    CartComponent,
    OrderFormComponent,
    OrderSuccessfullyCreatedDialogComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
