import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../interface/product';
import { ProductRequestService } from '../../services/product-request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  productList: Product[] = [];
  productSub!: Subscription;
  cartSub!: Subscription;
  constructor(private productService: ProductRequestService) {}

  ngOnInit(){
    this.productSub = this.productService.getProductList().subscribe((data: any) => this.productList = data.products);
  }
  addToCart() {

  
  }
  ngOnDestroy() {
    this.productSub.unsubscribe();
  }
}
