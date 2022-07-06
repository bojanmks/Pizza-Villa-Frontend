import { Injectable } from '@angular/core';
import { IOrderGet } from 'src/app/cart/cart/interfaces/i-order';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BaseTableService } from 'src/app/shared/services/base-table.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersTableService extends BaseTableService {

  constructor() {
    super();
  }

  override columns: IColumn[] = [
    {
      index: "id",
      label: "ID"
    },
    {
      index: "user",
      label: "User",
      type: ColumnType.User
    },
    {
      index: "totalPrice",
      label: "Total Price",
      type: ColumnType.Currency
    },
    {
      index: "createdAt",
      label: "Created At",
      type: ColumnType.Date
    },
    {
      index: "deliveredAt",
      label: "Delivered At",
      type: ColumnType.Date
    },
    {
      index: "markDelivered",
      label: "Mark Delivered",
      type: ColumnType.WithButton,
      method: (el: IOrderGet) => {
        console.log(el);
      },
      disabled: (el: IOrderGet): boolean => {
        return el.deliveredAt !== null;
      }
    },
    {
      index: "details",
      label: "Details",
      type: ColumnType.WithButton,
      method: (el: IOrderGet) => {
        console.log(el);
      }
    },
    {
      index: "cancel",
      label: "Cancel",
      type: ColumnType.Delete,
      disabled: (el: IOrderGet): boolean => {
        return el.deliveredAt !== null;
      }
    }
  ];
}
