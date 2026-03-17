import { Productos } from '../models/product.interface';

/*export class FakeMapper {
  static mapFakeStoreApi(product: Productos): Productos {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      image: product.image,
      price: product.price,
      rating: product.rating,
    };
  }
}*/
export class FakeMapper {
  static mapArray(products: Productos[]): Productos[] {
    return products;
  }
}
