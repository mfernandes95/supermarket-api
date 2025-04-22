import { Router } from 'express';
import { ListBrandsController } from '../../controllers/brand/listBrandsController';

const router = Router();

const listBrandController = new ListBrandsController();

router.get('/brands', (req, res, next) =>
  listBrandController.listBrands(req, res, next)
);

export default router;
