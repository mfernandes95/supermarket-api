import { BrandRepository } from '../../../domain/repositories/brandRepository';
import {
  IListBrandsRequest,
  IListBrandsResponse,
} from '../../../domain/types/brandTypes';
import { CustomError } from '../../errors/CustomError';

export class ListBrandsUseCase {
  constructor(private brandRepository: BrandRepository) { }

  async execute(request: IListBrandsRequest): Promise<IListBrandsResponse> {
    const { page = 1, limit = 10 } = request;

    if (page < 1) {
      throw new CustomError('Page number must be greater than 0', 400);
    }
    if (limit < 1) {
      throw new CustomError('Limit must be greater than 0', 400);
    }

    const offset = (page - 1) * limit;
    const [brands, total] = await this.brandRepository.findAll(
      offset,
      limit
    );
    const totalPages = Math.ceil(total / limit);

    return {
      brands,
      total,
      page,
      limit,
      totalPages,
    };
  }
}
