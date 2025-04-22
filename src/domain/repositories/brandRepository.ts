import { promises } from 'dns';
import { BrandEntity } from '../entities/brandEntity';

export interface BrandRepository {
  findAll(page: number, limit: number): Promise<[BrandEntity[], number]>;
  findById(id: string): Promise<BrandEntity | null>
}
