import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
categories: string[] = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
}
