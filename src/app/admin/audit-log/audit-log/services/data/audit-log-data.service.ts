import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/shared/services/base-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuditLogDataService extends BaseDataService {

  constructor() {
    super();
  }
}
