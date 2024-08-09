import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';
import products from '../../../../public/products.json';
import { Product } from '../../interface/product';
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  productList: Product[] = products;
  categories: string[] = this.getDistinctCategories();
  getDistinctCategories() {
    let set:Set<string> = new Set<string>();
    for (let product of products) {
      set.add(product.category);
    }
    return Array.from(set);
  }
  
}
