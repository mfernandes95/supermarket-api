import mongoose from 'mongoose';
import BrandModel from '../models/brandModel'
import dotenv from 'dotenv';

dotenv.config();

async function seedBrands() {
    await mongoose.connect(process.env.MONGO_URI!);

    const brands = [
        { name: 'Nike' },
        { name: 'Adidas' },
        { name: 'Apple' },
        { name: 'Samsung' },
        { name: 'Sony' }
    ];

    await BrandModel.insertMany(brands);

    console.log('Brands inserted successfully!');
    await mongoose.disconnect();
}

seedBrands().catch(err => console.error(err));
