import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAddonGetAdmin } from 'src/app/menu/menu/interfaces/i-addon';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BaseTableService } from 'src/app/shared/services/base-table.service';
import { FormAddonsComponent } from '../../components/form-addons/form-addons.component';

@Injectable({
  providedIn: 'root'
})
export class AddonsTableService extends BaseTableService {

  constructor(
    private matDialog: MatDialog
  ) {
    super();
  }

  override dialog = {
    component: FormAddonsComponent,
    configuration: {
      width: "auto",
      height: "auto"
    }
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
      label: "Is Active",
      type: ColumnType.Boolean
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
      method: (el: IAddonGetAdmin) => {
        this.matDialog.open(this.dialog.component, {
          data: el,
          width: this.dialog.configuration.width,
          height: this.dialog.configuration.height
        });
      }
    },
    {
      index: "delete",
      label: "Delete",
      type: ColumnType.Delete
    }
  ];
}
