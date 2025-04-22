import mongoose, { Schema, Document, Model, Types } from 'mongoose';

interface ProductDocument extends Document {
  name: string;
  price: number;
  brandId: Types.ObjectId;
  description?: string;
  image?: string;
}

const ProductSchema: Schema<ProductDocument> = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brandId: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
  description: { type: String },
  image: { type: String },
},
  {
    timestamps: true,
  }
);

const ProductModel: Model<ProductDocument> = mongoose.model<ProductDocument>(
  'Product',
  ProductSchema
);

export default ProductModel;
export type { ProductDocument };
