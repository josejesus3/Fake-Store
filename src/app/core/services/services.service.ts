import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Productos } from '../models/product.interface';
import { environments } from '../../../environments';
import { FakeMapper } from '../mapper/product.mapper';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs'; // Importante importar esto

@Injectable({
  providedIn: 'root',
})
export class ServicesApi {
  private envUrl = environments.fakeApiUrl;
  private http = inject(HttpClient);

  // 1. El Sujeto que guarda y transmite la lista
  private productsSubject = new BehaviorSubject<Productos[]>([]);
  
  // 2. El Observable que los componentes van a "escuchar"
  products$ = this.productsSubject.asObservable();

  constructor() {
    this.loadFakeApi();
  }

  loadFakeApi() {
    this.http.get<Productos[]>(`${this.envUrl}/products`).pipe(
      map(resp => FakeMapper.mapArray(resp))
    ).subscribe(data => {
      this.productsSubject.next(data); // Enviamos los datos al "canal"
    });
  }

  getProductCategorie(categoria: string) {
    this.http.get<Productos[]>(`${this.envUrl}/products/category/${categoria}`).pipe(
      map(resp => FakeMapper.mapArray(resp))
    ).subscribe(data => {
      this.productsSubject.next(data); // Actualizamos el canal con la categoría
    });
  }
}
