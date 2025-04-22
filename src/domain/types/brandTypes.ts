import { BrandEntity } from '../entities/brandEntity';

// Request Interfaces

export interface IListBrandsRequest {
  page: number;
  limit: number;
}

// Response Interfaces

export interface IListBrandsResponse {
  brands: BrandEntity[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
