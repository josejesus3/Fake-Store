import { TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ServicesApi } from '../../../core/services/services.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  categories: string[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  getCategoriaList = inject(ServicesApi);
}
