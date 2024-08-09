import { Component, ViewChild, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { Product } from '../../interface/product';
import products from '../../../../public/products.json';
import { PriceDiscountPipe } from '../../pipe/price-discount.pipe';
import { StarsComponent } from "../../components/stars/stars.component";
import { ReviewItemComponent } from '../../components/review-item/review-item.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [HeaderComponent, PriceDiscountPipe, StarsComponent, ReviewItemComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  id: number;
  data: Product;
  productList: Product[] = products;
  @ViewChild('itemCount') itemCount: any;

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.data = products.filter(e => e.id == this.id)[0];
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
