import { BrandEntity } from '../../domain/entities/brandEntity';
import BrandModel, { BrandDocument } from '../database/models/brandModel';
import { BrandRepository } from '../../domain/repositories/brandRepository';

export class BrandRepositoryImpl implements BrandRepository {
  async findAll(
    offset: number,
    limit: number
  ): Promise<[BrandEntity[], number]> {
    const brands = await BrandModel.find().skip(offset).limit(limit).exec();

    const total = await BrandModel.countDocuments().exec();

    const brandEntities = brands.map(
      (doc: BrandDocument) =>
        new BrandEntity(
          doc.id.toString(),
          doc.name
        )
    );

    return [brandEntities, total];
  }

  async findById(id: string): Promise<BrandEntity | null> {
    const doc = await BrandModel.findOne({ _id: id });
    if (!doc) return null;
    return new BrandEntity(
      doc.id.toString(),
      doc.name
    );
  }
}
