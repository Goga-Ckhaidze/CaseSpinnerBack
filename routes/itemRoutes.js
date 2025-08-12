import express from 'express';
import { getItems, addItem, updateItem, deleteItem, getItemsByCase } from '../controllers/itemController.js';

const router = express.Router();

router.get('/', getItems);
router.post('/', addItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
router.get('/case/:caseId', getItemsByCase);


export default router;
