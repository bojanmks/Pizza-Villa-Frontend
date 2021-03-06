import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartItem } from '../../cart/cart/interfaces/i-cart-item';
import { API } from '../constants/apis';
import { CONFIG } from '../constants/config';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ApiService<ICartItem> {

  private _getAllSubject$: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>([]);
  getAllSubject$ = this._getAllSubject$.asObservable();

  constructor(
    http: HttpClient
  ) {
    super(http, API.cart);
  }

  notifySubscribers(): void {
    this.getAll().subscribe({
      next: (data) => {
        this._getAllSubject$.next(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  increase(id: number | string): Observable<any> {
    return this.http.put(CONFIG.SERVER + API.cart + `/${id}/` + 'increase', {});
  }

  decrease(id: number | string): Observable<any> {
    return this.http.put(CONFIG.SERVER + API.cart + `/${id}/` + 'decrease', {});
  }
}
