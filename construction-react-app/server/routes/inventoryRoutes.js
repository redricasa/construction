import express from 'express';
import { 
    createInventory, 
    getInventoryById, 
    updateInventory, 
    getAllInventoryByUser,
    deleteInventory} from '../controllers/inventoryController.js'; 
    
const router = express.Router();

router.post('/create', createInventory);
router.get('/get', getAllInventoryByUser);
router.get('/:id', getInventoryById);
router.put('/:id/update', updateInventory);
router.delete('/:id/delete', deleteInventory )


export default router;
