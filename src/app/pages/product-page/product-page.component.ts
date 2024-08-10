import { Component, Inject, ViewChild, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { Product } from '../../interface/product';
import { PriceDiscountPipe } from '../../pipe/price-discount.pipe';
import { StarsComponent } from "../../components/stars/stars.component";
import { ReviewItemComponent } from '../../components/review-item/review-item.component';
import { ProductRequestService } from '../../services/product-request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [HeaderComponent, PriceDiscountPipe, StarsComponent, ReviewItemComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  id: number;
  data!: Product;
  productSub!: Subscription;

  @ViewChild('itemCount') itemCount: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductRequestService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.productSub = this.productService.getProductWithId(this.id).subscribe((data: any) => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    this.productSub.unsubscribe();
  }

  addToCart() {
    
  }

  increase() {
    let count: number = Number(this.itemCount.nativeElement.innerText);
    if (count < this.data.stock) {
      this.itemCount.nativeElement.innerText = count + 1;
    }
  }
  decrease() {
    let count: number = Number(this.itemCount.nativeElement.innerText);
    if (count > this.data.minimumOrderQuantity) {
      this.itemCount.nativeElement.innerText = count - 1;
    }
  }
  navigateToSection(section: string) {
    window.location.hash = section;
  }

}


