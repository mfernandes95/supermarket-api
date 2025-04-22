import { Router } from 'express';
import { ListProductsController } from '../../controllers/product/listProductsController';
import { CreateProductController } from '../../controllers/product/createProductController';


const router = Router();

const listProductController = new ListProductsController();
const createProductController = new CreateProductController();

router.get('/products', (req, res, next) =>
  listProductController.listProducts(req, res, next)
);
router.post('/products', (req, res, next) =>
  createProductController.createProduct(req, res, next)
);

export default router;
