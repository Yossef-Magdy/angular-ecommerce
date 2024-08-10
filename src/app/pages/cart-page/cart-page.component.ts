import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
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
  productList!: Product[];
  productSub!: Subscription;
  constructor(private productService: ProductRequestService){}
  ngOnInit() {
    this.productSub = this.productService.getProductList().subscribe((data: any) => {
      this.productList = data.products
    });
  }
  ngOnDestroy() {
    this.productSub.unsubscribe();
  }
  increaseCount(data: any) {

  }
  decreaseCount(data: any) {

  }
}

