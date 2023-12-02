import express from 'express';
import { 
    createInventory, 
    getInventoryById, 
    updateInventory, 
    getAllInventoryByUser} from '../controllers/inventoryController.js'; 
    
const router = express.Router();

router.post('/create', createInventory);
router.get('/:id', getInventoryById);
router.put('/:id/update', updateInventory);
router.get('/get', getAllInventoryByUser);


export default router;
