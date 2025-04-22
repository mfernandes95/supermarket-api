import mongoose, { Schema, Document, Model } from 'mongoose';

interface BrandDocument extends Document {
  name: string;
}

const BrandSchema: Schema<BrandDocument> = new Schema({
  name: { type: String, required: true },
},
  {
    timestamps: true,
  }
);

const BrandModel: Model<BrandDocument> = mongoose.model<BrandDocument>(
  'Brand',
  BrandSchema
);

export default BrandModel;
export type { BrandDocument };
