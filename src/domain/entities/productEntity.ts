export class ProductEntity {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public brandId: string,
    public description?: string,
    public image?: string
  ) { }
}
