import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../interface/product';
import { ProductRequestService } from '../../services/product-request.service';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart-service';
import { CartItem } from '../../interface/cart-item';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  productList: Product[] = [];
  cart: CartItem[] = [];
  productSub!: Subscription;
  cartSub!: Subscription;
  constructor(private productService: ProductRequestService, private cartService: CartService) {}

  ngOnInit(){
    this.productSub = this.productService.getProductList().subscribe((data: any) => this.productList = data.products);
    this.cartSub = this.cartService.getCart().subscribe((data: any) => this.cart = data);
  }
  addToCart(product: Product) {
    let count = 1;
    this.cartService.addToCart(product, count);
  }
  ngOnDestroy() {
    this.productSub.unsubscribe();
  }
}
