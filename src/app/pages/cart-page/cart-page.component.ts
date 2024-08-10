import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/product';
import { ProductRequestService } from '../../services/product-request.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart: Map<Product, number> = new Map;
  productList!: Product[];
  productSub!: Subscription;
  cartSub!: Subscription;
  constructor(private productService: ProductRequestService , private cartService: CartService){}
  ngOnInit() {
    this.productSub = this.productService.getProductList().subscribe((data: any) => {
      this.productList = data.products
      this.cartSub = this.cartService.getCart().subscribe((cart) => this.cart = cart);
    });
  }
  ngOnDestroy() {
    this.productSub.unsubscribe();
    this.cartSub.unsubscribe();
  }
  increaseCount(product: any) {
    console.log(product);
    // if (this.cart.get())
    // if (this.cart[index].count < this.cart[index].product.stock) {
    //   this.cart[index].count++;
    // }
    // this.cartService.setCart(this.cart);
  }
  decreaseCount(index: number) {
    // if (this.cart[index].count > 0) {
    //   this.cart[index].count--;
    // }
  }
}

