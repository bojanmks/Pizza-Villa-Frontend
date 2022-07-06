import { Injectable } from '@angular/core';
import { IIngredientGetAdmin } from 'src/app/menu/menu/interfaces/i-ingredient';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BaseTableService } from 'src/app/shared/services/base-table.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientsTableService extends BaseTableService {

  constructor() {
    super();
  }

  override columns: IColumn[] = [
    {
      index: "id",
      label: "ID"
    },
    {
      index: "name",
      label: "Name"
    },
    {
      index: "price",
      label: "Price",
      type: ColumnType.Currency
    },
    {
      index: "isActive",
      label: "Is Active"
    },
    {
      index: "createdAt",
      label: "Created At",
      type: ColumnType.Date
    },
    {
      index: "updatedAt",
      label: "UpdatedAt",
      type: ColumnType.Date
    },
    {
      index: "updatedBy",
      label: "Updated By"
    },
    {
      index: "edit",
      label: "Edit",
      type: ColumnType.WithButton,
      method: (el: IIngredientGetAdmin) => {
        console.log(el);
      }
    },
    {
      index: "delete",
      label: "Delete",
      type: ColumnType.Delete
    }
  ];
}
