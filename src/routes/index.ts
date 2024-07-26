import { Router } from 'express';

import { readShoes } from '../controllers/readShoeController'
import { readShoe } from '../controllers/readShoeController';
import { createShoe } from '../controllers/createShoeController';
import { updateShoe } from '../controllers/updateShoeController';
import { deleteShoe } from '../controllers/deleteShoeController';

import { validateCreateShoe } from '../middlewares/validateCreateShoe';
import { validateExistingId } from '../middlewares/validateExistingId';

const router = Router();

router.get('/shoes', readShoes);
router.get('/shoes/:id', readShoe);
router.post('/shoes', validateCreateShoe, createShoe);
router.put('/shoes/:id', validateCreateShoe, updateShoe);
router.delete('/shoes/:id', validateExistingId, deleteShoe);

export default router;
