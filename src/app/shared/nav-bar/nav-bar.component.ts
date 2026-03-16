import { Component } from '@angular/core';
import { ProductDetailComponent } from "../components/product-detail/product-detail.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  categories: string[] = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
}
