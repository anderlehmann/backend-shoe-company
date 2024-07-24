import { Router } from 'express';
import { createShoe } from '../controllers/createShoeController';
import { readShoes } from '../controllers/readShoeController'
import { validateCreateShoe } from '../middlewares/validateCreateShoe';

const router = Router();

router.get('/shoes', readShoes);
router.post('/shoes', validateCreateShoe, createShoe)

export default router;
