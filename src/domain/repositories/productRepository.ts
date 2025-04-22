import { ProductEntity } from '../entities/productEntity';

export interface ProductRepository {
  findAll(page: number, limit: number, search: string): Promise<[ProductEntity[], number]>;
  save(product: ProductEntity): Promise<void>;
}
