import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Map<Product, number>>(new Map);  
  constructor() { }
  getCart() {
    return this.cart.asObservable();
  }
  setCart(cart: Map<Product, number>) {
    return this.cart.next(cart);
  }
}
