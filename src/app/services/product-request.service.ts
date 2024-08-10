import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {
  products: Product[] = [];
  readonly URL: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(this.URL, {});
  }
  getProductWithId(id: number) {
    return this.http.get(`${this.URL}/${id}`, {});
  }
}
