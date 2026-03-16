import { Component } from '@angular/core';
import { ProductListComponent } from '../../../shared/components/product-list/product-list.component';
import { ProductDetailComponent } from "../../../shared/components/product-detail/product-detail.component";


@Component({
  selector: 'app-ProductsLayout',
  standalone: true,
  imports: [ProductListComponent, ProductDetailComponent],
  templateUrl: './ProductsLayout.component.html',
  styleUrl: './ProductsLayout.component.scss'
})
export class ProductsLayoutComponent {

}
