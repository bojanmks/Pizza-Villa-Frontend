import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ILinkText } from 'src/app/shared/interfaces/i-link';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class OtherLinksService extends ApiService<ILinkText>  {

  constructor(
    http: HttpClient
  ) {
    super(http, API.footerOtherLinks);
  }
}
