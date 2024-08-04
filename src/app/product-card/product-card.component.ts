import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() data!: Product;

  constructor (private router: Router) {}


  sendId(id: number) {
    this.router.navigate(['/product', id]);
  }
}
