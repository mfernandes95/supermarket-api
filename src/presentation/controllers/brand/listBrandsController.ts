import { Request, Response, NextFunction } from 'express';
import { BrandRepositoryImpl } from '../../../infrastructure/repositories/brandRepositoryImpl';
import { ListBrandsUseCase } from '../../../application/use-cases/brand/listBrandsUseCase';

const brandRepository = new BrandRepositoryImpl();
const listBrandsUseCase = new ListBrandsUseCase(brandRepository);

export class ListBrandsController {
  async listBrands(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const { brands, total } = await listBrandsUseCase.execute({
        page,
        limit,
      });

      res.status(200).json({
        brands,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      });
    } catch (error) {
      next(error);
    }
  }
}
