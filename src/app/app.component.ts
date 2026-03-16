import { Component } from '@angular/core';
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { ProductListComponent } from "./features/pages/product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fake-Store';
}
