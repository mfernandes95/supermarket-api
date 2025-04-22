import { Request, Response, NextFunction } from "express";
import { ProductRepositoryImpl } from '../../../infrastructure/repositories/productRepositoryImpl';
import { BrandRepositoryImpl } from '../../../infrastructure/repositories/brandRepositoryImpl';

import { CreateProductUseCase } from '../../../application/use-cases/product/createProductUseCase';

const productRepository = new ProductRepositoryImpl();
const brandRepository = new BrandRepositoryImpl();

const createProductUseCase = new CreateProductUseCase(productRepository, brandRepository);


export class CreateProductController {
    async createProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await createProductUseCase.execute(req.body);
            res.status(201).send();
        } catch (error) {
            next(error);
        }
    }
}
