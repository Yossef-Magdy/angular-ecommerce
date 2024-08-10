import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interface/cart-item';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<CartItem[]>([]);
  constructor() { }
  getCart() {
    return this.cart.asObservable();
  }
  addToCart(product: Product, count: number) {
    let index = this.cart.value.findIndex(e => e.product == product);
    if (index == -1) {
      this.cart.value.push({
        product: product,
        count: count
      });
    } else {
      this.cart.value[index].count += count;
    }
  }
  changeCount(index: number, value: number) {
    this.cart.value[index].count += value;
  }
  removeItem(index: number) {
    this.cart.value.splice(index, 1);
  }
}
