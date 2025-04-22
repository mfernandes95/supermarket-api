import { ProductEntity } from '../../domain/entities/productEntity';
import ProductModel, { ProductDocument } from '../database/models/productModel';
import { ProductRepository } from '../../domain/repositories/productRepository';

export class ProductRepositoryImpl implements ProductRepository {
  async findAll(
    offset: number,
    limit: number,
    search: string
  ): Promise<[ProductEntity[], number]> {
    const query: any = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const products = await ProductModel.find(query).populate('brandId', 'name').skip(offset).limit(limit).exec();

    const total = await ProductModel.countDocuments(query).exec();

    const productEntities = products.map(
      (doc: ProductDocument) =>
        new ProductEntity(
          doc.id.toString(),
          doc.name,
          doc.price,
          doc.brandId.toString(),
          doc.description,
          doc.image
        )
    );

    return [productEntities, total];
  }

  async save(product: ProductEntity): Promise<void> {
    const newProduct = new ProductModel(product);
    await newProduct.save();
  }
}
