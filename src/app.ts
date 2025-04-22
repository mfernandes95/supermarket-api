import express, { Application } from 'express';
import dotenv from 'dotenv';
import productRoutes from './presentation/routes/product/productRoutes';
import brandRoutes from './presentation/routes/brand/brandRoutes';
import { connectToDatabase } from './infrastructure/database/config/mongoose';
import globalErrorHandler from './errors/globalErrorHandler';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(productRoutes, brandRoutes);

connectToDatabase();

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});