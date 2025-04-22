import { ProductRepositoryImpl } from '../../src/infrastructure/repositories/productRepositoryImpl';
import { jest } from '@jest/globals';

export const mockProductRepository: jest.Mocked<ProductRepositoryImpl> = {
  findAll: jest.fn(),
  save: jest.fn(),
};