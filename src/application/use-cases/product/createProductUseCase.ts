import mongoose from 'mongoose';
import { ProductRepository } from '../../../domain/repositories/productRepository';
import { BrandRepository } from '../../../domain/repositories/brandRepository';
import { ProductEntity } from '../../../domain/entities/productEntity';
import { ICreateProductRequest } from '../../../domain/types/productTypes';
import { CustomError } from '../../errors/CustomError';


export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository,
    private brandRepository: BrandRepository
  ) { }

  async execute(request: ICreateProductRequest): Promise<void> {

    if (!mongoose.Types.ObjectId.isValid(request.brandId)) {
      throw new CustomError('Invalid brandId format', 400);
    }

    const brandExists = await this.brandRepository.findById(request.brandId);
    if (!brandExists) {
      throw new CustomError('brandId does not exist in the Brand collection', 404);
    }
    const product = new ProductEntity(
      '',
      request.name,
      request.price,
      request.brandId,
      request.description,
      request.image
    );

    await this.productRepository.save(product);
  }
}
