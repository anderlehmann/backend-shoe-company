import { Router } from 'express';

import { readShoes } from '../controllers/readShoeController'
import { readShoe } from '../controllers/readShoeController';
import { createShoe } from '../controllers/createShoeController';
import { updateShoe } from '../controllers/updateShoeController';

import { validateCreateShoe } from '../middlewares/validateCreateShoe';

const router = Router();

router.get('/shoes', readShoes);
router.get('/shoes/:id', readShoe);
router.post('/shoes', validateCreateShoe, createShoe);
router.put('/shoes/:id', validateCreateShoe, updateShoe);

export default router;
