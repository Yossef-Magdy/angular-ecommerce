import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import products from '../../../public/products.json';
import { Product } from '../product';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  productList: Product[] = products;
}
