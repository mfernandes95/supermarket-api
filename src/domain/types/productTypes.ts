import { ProductEntity } from '../entities/productEntity';

// Request Interfaces

export interface IListProductsRequest {
  page: number;
  limit: number;
  search?: string;
}
export interface ICreateProductRequest {
  name: string;
  price: number;
  brandId: string;
  description?: string;
  image?: string;
}

// Response Interfaces

export interface IListProductsResponse {
  products: ProductEntity[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
