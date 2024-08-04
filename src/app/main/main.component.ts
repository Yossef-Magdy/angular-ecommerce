import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../product';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() productList!: Product[];
}
