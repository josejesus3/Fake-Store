import { Component } from '@angular/core';

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
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productos: Product[] = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack',
      price: 109.95,
      description:
        'Tu mochila perfecta para el uso diario y caminatas en el bosque.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.3,
      description: 'Estilo ajustado, manga corta contrastada, tres botones.',
      category: "men's clothing",
      image:
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      description: 'Gran chaqueta de abrigo para primavera/otoño/invierno.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      description: 'La moda es un lenguaje que se crea a sí mismo en la ropa.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Bracelet",
      price: 695,
      description: 'Inspirado por la mítica serpiente de agua de Bali.',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    },
    {
      id: 6,
      title: 'Solid Gold Petite Micropave',
      price: 168,
      description:
        'Satisfacción garantizada. Regresa o cambia cualquier orden.',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    },
    {
      id: 7,
      title: 'White Gold Plated Princess',
      price: 9.99,
      description: 'Anillo de compromiso clásico creado para ella.',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    },
  ];
}
