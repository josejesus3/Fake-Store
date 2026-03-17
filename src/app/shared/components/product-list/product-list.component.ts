import { Component, inject, OnInit } from '@angular/core';
import { ServicesApi } from '../../../core/services/services.service';
import { SlicePipe } from '@angular/common';
import { Productos } from '../../../core/models/product.interface';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  apiService = inject(ServicesApi);
  productos: Productos[] = [];

  ngOnInit() {
    // Nos suscribimos para que cada vez que cambie la lista en el servicio,
    // esta variable local se actualice sola.
    this.apiService.products$.subscribe((data) => {
      this.productos = data;
    });
  }
}
